#!/usr/bin/env node
/**
 * Genereert de verhaal-URL's in public/sitemap.xml op basis van
 * src/data/verhalen.js. Alleen verhalen met `voorbeeld: false`
 * worden opgenomen in de sitemap.
 *
 * Leest tussen de markers BEGIN_VERHALEN_AUTO en END_VERHALEN_AUTO en
 * herschrijft dat blok. Alle andere URL's in sitemap.xml blijven
 * ongewijzigd.
 *
 * Gebruik:
 *   node scripts/sitemap-build.mjs
 *
 * Wordt automatisch uitgevoerd via `npm run build` (zie package.json).
 */
import { readFileSync, writeFileSync } from 'node:fs'

const SITEMAP_PATH = new URL('../public/sitemap.xml', import.meta.url).pathname
const BASE_URL = 'https://stagestartcuracao.nl'
const BEGIN = '<!-- BEGIN_VERHALEN_AUTO -->'
const END = '<!-- END_VERHALEN_AUTO -->'

async function loadVerhalen() {
  const mod = await import(new URL('../src/data/verhalen.js', import.meta.url))
  return mod.VERHALEN
}

function renderEntry(verhaal) {
  return [
    '  <url>',
    `    <loc>${BASE_URL}/verhalen/${verhaal.slug}</loc>`,
    `    <lastmod>${verhaal.laatste_update}</lastmod>`,
    '    <changefreq>yearly</changefreq>',
    '    <priority>0.6</priority>',
    '  </url>',
  ].join('\n')
}

async function main() {
  const verhalen = await loadVerhalen()
  const published = verhalen.filter((v) => v.voorbeeld === false)

  const current = readFileSync(SITEMAP_PATH, 'utf-8')

  const beginIdx = current.indexOf(BEGIN)
  const endIdx = current.indexOf(END)

  if (beginIdx === -1 || endIdx === -1) {
    console.error(`Markers niet gevonden in ${SITEMAP_PATH}.`)
    console.error(`Verwacht ${BEGIN} en ${END} in sitemap.xml.`)
    process.exit(1)
  }
  if (endIdx < beginIdx) {
    console.error('BEGIN marker staat na END marker in sitemap.xml.')
    process.exit(1)
  }

  const before = current.slice(0, beginIdx + BEGIN.length)
  const after = current.slice(endIdx)

  const block = published.length === 0
    ? '\n  '
    : '\n' + published.map(renderEntry).join('\n') + '\n  '

  const next = before + block + after

  if (next === current) {
    console.log(`sitemap.xml: geen wijzigingen nodig (${published.length} verhaal-URL's).`)
    return
  }

  writeFileSync(SITEMAP_PATH, next)
  console.log(`sitemap.xml bijgewerkt met ${published.length} verhaal-URL(s):`)
  for (const v of published) {
    console.log(`  /verhalen/${v.slug}  (${v.laatste_update})`)
  }
}

main().catch((err) => {
  console.error('Onverwachte fout:', err)
  process.exit(1)
})
