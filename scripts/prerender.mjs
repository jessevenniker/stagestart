#!/usr/bin/env node
/**
 * Prerender-script voor StageStart Curaçao.
 *
 * Leest public/sitemap.xml, start een ephemere static-server die dist/
 * serveert, en laat puppeteer voor elke URL de gerenderde HTML exporteren
 * naar dist/<route>/index.html. Vercel serveert die statische HTML direct
 * (dankzij filesystem-priority + cleanUrls), React hydrateert er bovenop.
 *
 * Gebruik:
 *   node scripts/prerender.mjs
 *
 * Draait automatisch na `vite build` via `npm run build`.
 *
 * Veiligheidsnet: fail-soft per route, eindigt met exit 1 alleen als <90%
 * van de URLs succesvol is gerendered. Eén stuk-route breekt niet de build.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'

// Environment-detection: op Vercel/CI gebruiken we puppeteer-core met
// @sparticuz/chromium (serverless-ready, self-contained binary, geen
// apt-dependencies nodig). Lokaal gebruiken we de full puppeteer met
// de bundled chromium, want die is al geïnstalleerd en makkelijker voor
// dev-iteratie.
const isServerless = process.env.VERCEL === '1' || process.env.CI === 'true'

async function getBrowser() {
  if (isServerless) {
    const { default: chromium } = await import('@sparticuz/chromium')
    const { default: puppeteer } = await import('puppeteer-core')
    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    })
  } else {
    const { default: puppeteer } = await import('puppeteer')
    return puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
      ],
    })
  }
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const SITEMAP_CANDIDATES = [
  join(DIST, 'sitemap.xml'),
  join(ROOT, 'public', 'sitemap.xml'),
]

const BASE_ORIGIN = 'https://stagestartcuracao.nl'
const SERVER_PORT = 5050
const SERVER_ORIGIN = `http://127.0.0.1:${SERVER_PORT}`
const ROUTE_TIMEOUT_MS = 15000
const READY_SELECTOR_TIMEOUT_MS = 10000
const MIN_SUCCESS_RATE = 0.9

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.mjs':  'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.pdf':  'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt':  'text/plain; charset=utf-8',
  '.xml':  'application/xml; charset=utf-8',
}

// --- Sitemap parsen ---------------------------------------------------------

function findSitemap() {
  for (const path of SITEMAP_CANDIDATES) {
    if (existsSync(path)) return path
  }
  throw new Error(`Geen sitemap.xml gevonden in: ${SITEMAP_CANDIDATES.join(', ')}`)
}

// Extra URLs die we wél willen prerenderen maar bewust niet in de sitemap
// staan (meestal met noindex, zoals /partner-worden). Zonder deze zou
// Vercel terugvallen op de catch-all rewrite en de SPA-shell met
// homepage-title serveren — precies het probleem dat we willen oplossen.
const EXTRA_ROUTES = ['/partner-worden']

function extractUrls(sitemapXml) {
  const matches = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  const urls = matches.map((m) => m[1].trim())
  const fromSitemap = urls
    .filter((u) => u.startsWith(BASE_ORIGIN))
    .map((u) => u.slice(BASE_ORIGIN.length) || '/')
  // Deduplicate: sitemap + extras
  return [...new Set([...fromSitemap, ...EXTRA_ROUTES])]
}

// --- Static server voor dist/ ----------------------------------------------

function startStaticServer() {
  const server = createServer((req, res) => {
    // Strip query string
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0])

    // Map URL naar bestandspad. Homepage en routes zonder extensie vallen
    // terug op index.html (de SPA-shell die we willen prerenderen).
    let filePath
    const ext = urlPath.match(/\.[a-z0-9]+$/i)
    if (!ext) {
      filePath = join(DIST, 'index.html')
    } else {
      filePath = join(DIST, urlPath)
    }

    if (!existsSync(filePath)) {
      res.statusCode = 404
      res.end('Not found')
      return
    }

    const extKey = (ext ? ext[0] : '.html').toLowerCase()
    res.setHeader('Content-Type', MIME[extKey] || 'application/octet-stream')
    res.end(readFileSync(filePath))
  })

  return new Promise((resolve, reject) => {
    server.listen(SERVER_PORT, '127.0.0.1', () => resolve(server))
    server.on('error', reject)
  })
}

// --- Prerender één URL ------------------------------------------------------

async function prerenderRoute(browser, route) {
  const page = await browser.newPage()

  // Plausible (en andere externe tracking) blokkeren tijdens prerender
  // zodat builds geen pageviews triggeren.
  await page.setRequestInterception(true)
  page.on('request', (req) => {
    const url = req.url()
    if (url.includes('plausible.io') || url.includes('googletagmanager.com')) {
      req.abort()
    } else {
      req.continue()
    }
  })

  try {
    await page.goto(`${SERVER_ORIGIN}${route}`, {
      waitUntil: 'domcontentloaded',
      timeout: ROUTE_TIMEOUT_MS,
    })

    // Deterministisch signal: App.jsx zet dit attribuut ná mount, inclusief
    // alle helmet-async head-mutaties.
    await page.waitForSelector('[data-prerender-ready]', {
      timeout: READY_SELECTOR_TIMEOUT_MS,
    })

    // Kleine extra tijd voor lazy-loaded chunks en eventuele useEffects die
    // async content updaten. Network idle (2 reqs toegestaan) als backup.
    await page.waitForNetworkIdle({ idleTime: 500, timeout: 5000 }).catch(() => {
      // Niet-fatale timeout — we gaan alsnog content exporteren.
    })

    const html = await page.content()
    const title = await page.title()

    return { html, title, size: Buffer.byteLength(html, 'utf-8') }
  } finally {
    await page.close()
  }
}

// --- Output schrijven -------------------------------------------------------

function writeRoute(route, html) {
  // / → dist/index.html (overschrijft de shell)
  // /wonen → dist/wonen/index.html
  // /verhalen/dominique → dist/verhalen/dominique/index.html
  const relPath = route === '/' ? 'index.html' : `${route.replace(/^\//, '')}/index.html`
  const outPath = join(DIST, relPath)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html, 'utf-8')
  return outPath
}

// --- Main -------------------------------------------------------------------

async function main() {
  const sitemapPath = findSitemap()
  const sitemap = readFileSync(sitemapPath, 'utf-8')
  const routes = extractUrls(sitemap)

  if (routes.length === 0) {
    console.error('Geen URLs gevonden in sitemap.')
    process.exit(1)
  }

  console.log(`\n[prerender] ${routes.length} URLs gevonden in ${sitemapPath}`)
  console.log(`[prerender] Start static server op ${SERVER_ORIGIN}`)

  const server = await startStaticServer()

  console.log(`[prerender] Launch headless Chrome (${isServerless ? 'serverless/sparticuz' : 'local/puppeteer'})...\n`)
  const browser = await getBrowser()

  let success = 0
  let failed = 0
  const failures = []

  const t0 = Date.now()

  for (const route of routes) {
    const rt0 = Date.now()
    try {
      const { html, title, size } = await prerenderRoute(browser, route)

      // Sanity check: is de fallback-title vervangen?
      const isFallbackTitle = title.startsWith('Stage Curaçao: checklist')
      const warn = isFallbackTitle && route !== '/' ? ' ⚠ fallback-title' : ''

      writeRoute(route, html)
      const sizeKb = (size / 1024).toFixed(1)
      const duration = ((Date.now() - rt0) / 1000).toFixed(1)
      console.log(`  ✓ ${route.padEnd(40)} ${sizeKb.padStart(6)} KB  ${duration}s${warn}`)
      success++
    } catch (err) {
      const duration = ((Date.now() - rt0) / 1000).toFixed(1)
      console.log(`  ✗ ${route.padEnd(40)} FAILED in ${duration}s — ${err.message}`)
      failed++
      failures.push({ route, error: err.message })
    }
  }

  await browser.close()
  server.close()

  const totalTime = ((Date.now() - t0) / 1000).toFixed(1)
  const rate = success / routes.length
  console.log(`\n[prerender] ${success}/${routes.length} succesvol (${(rate * 100).toFixed(0)}%) in ${totalTime}s`)

  if (failures.length > 0) {
    console.log(`[prerender] Mislukte routes:`)
    failures.forEach((f) => console.log(`  - ${f.route}: ${f.error}`))
  }

  if (rate < MIN_SUCCESS_RATE) {
    console.error(`\n[prerender] Success-rate ${(rate * 100).toFixed(0)}% onder drempel ${(MIN_SUCCESS_RATE * 100)}%. Build faalt.`)
    process.exit(1)
  }

  console.log(`[prerender] Klaar.`)
}

main().catch((err) => {
  console.error(`\n[prerender] Fatale fout: ${err.message}`)
  console.error(err.stack)
  process.exit(1)
})
