/**
 * Downsize alle jpg-afbeeldingen in public/img/ zodat ze past bij de afmetingen waarop ze worden getoond.
 * Doel: minder overhead bij LCP en kleinere totale pagina-grootte op mobiel.
 *
 * Gebruik: node scripts/optimize-images.mjs
 *
 * Instellingen per "type" zijn gebaseerd op PageSpeed-rapport:
 * - hero-home: getoond op ~651x434 → export 1400x800 (retina-ready)
 * - andere hero (paginathema-beelden): getoond op 1200x400 of kleiner → export 1400x600
 * - home-cards (thumbnails op homepage): getoond op ~648x432 → export 1200x900 (4:3)
 * - wijk-afbeeldingen (Wonen-pagina): getoond op ~400x250 → export 900x600
 * - overige (cta-sunset, paspoort, Otrobanda): 1400 breed maximaal
 */
import sharp from 'sharp'
import { readdir, stat, copyFile, mkdir } from 'node:fs/promises'
import { join, basename } from 'node:path'

const IMG_DIR = new URL('../public/img/', import.meta.url).pathname
const BACKUP_DIR = new URL('../public/img/_backup_pre_optimize/', import.meta.url).pathname

const PROFILES = {
  // hero-home is LCP op homepage, hoogste prioriteit
  'hero-home.jpg': { width: 1400, height: 800, quality: 82 },

  // andere hero's op detailpagina's (horizontal hero 3:1 of 2.5:1)
  'hero-begin-hier.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-voor-vertrek.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-auto.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-eerste-week.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-kosten.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-wonen.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-leven.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-eten.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-faq.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-happy-hours.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-kaart.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-stranden.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-veiligheid.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-weekend-trips.jpg': { width: 1400, height: 600, quality: 82 },
  'hero-werken.jpg': { width: 1400, height: 600, quality: 82 },

  // home-cards (4:3 thumbnails)
  'home-voor-vertrek.jpg': { width: 1200, height: 900, quality: 82 },
  'home-vergunning.jpg': { width: 1200, height: 900, quality: 82 },

  // wijk-afbeeldingen
  'wijk-bapor-kibra.jpg': { width: 900, height: 600, quality: 82 },
  'wijk-jan-thiel.jpg': { width: 900, height: 600, quality: 82 },
  'wijk-pietermaai.jpg': { width: 900, height: 600, quality: 82 },
  'wijk-piscadera.jpg': { width: 900, height: 600, quality: 82 },

  // overige decoratief
  'paspoort-en-reisdocumenten.jpg': { width: 1400, height: null, quality: 82 },
  'Otrobanda.jpg': { width: 1400, height: null, quality: 82 },
  'cta-sunset.jpg': { width: 1400, height: null, quality: 82 },
}

async function ensureDir(dir) {
  try { await mkdir(dir, { recursive: true }) } catch {}
}

async function optimize() {
  await ensureDir(BACKUP_DIR)

  const files = await readdir(IMG_DIR)
  const jpgs = files.filter(f => f.endsWith('.jpg'))

  let totalBefore = 0
  let totalAfter = 0
  const report = []

  for (const f of jpgs) {
    const full = join(IMG_DIR, f)
    const st = await stat(full)
    totalBefore += st.size

    const profile = PROFILES[f]
    if (!profile) {
      report.push({ file: f, before: st.size, after: st.size, skipped: true })
      totalAfter += st.size
      continue
    }

    // Backup
    const backupPath = join(BACKUP_DIR, f)
    await copyFile(full, backupPath)

    // Resize + recompress
    const resizeOptions = { width: profile.width, withoutEnlargement: true }
    if (profile.height) resizeOptions.height = profile.height
    if (profile.height) resizeOptions.fit = 'cover'

    const buf = await sharp(backupPath)
      .rotate()
      .resize(resizeOptions)
      .jpeg({ quality: profile.quality, mozjpeg: true })
      .toBuffer()

    const fs = await import('node:fs/promises')
    await fs.writeFile(full, buf)

    const stAfter = await stat(full)
    totalAfter += stAfter.size
    report.push({ file: f, before: st.size, after: stAfter.size })
  }

  console.log('Bestand | Voor (KB) | Na (KB) | Besparing')
  console.log('-'.repeat(60))
  for (const r of report) {
    const bKB = Math.round(r.before / 1024)
    const aKB = Math.round(r.after / 1024)
    const dKB = bKB - aKB
    const pct = r.before > 0 ? Math.round((1 - r.after / r.before) * 100) : 0
    const tag = r.skipped ? ' (skipped)' : ''
    console.log(`${r.file}${tag} | ${bKB} | ${aKB} | ${dKB}KB (${pct}%)`)
  }
  console.log('-'.repeat(60))
  console.log(`Totaal voor: ${Math.round(totalBefore / 1024)} KB`)
  console.log(`Totaal na:   ${Math.round(totalAfter / 1024)} KB`)
  console.log(`Besparing:   ${Math.round((totalBefore - totalAfter) / 1024)} KB (${Math.round((1 - totalAfter / totalBefore) * 100)}%)`)
}

optimize().catch(err => {
  console.error('Optimize failed:', err)
  process.exit(1)
})
