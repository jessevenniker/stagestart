#!/usr/bin/env node
/**
 * Verwerkt foto's voor één verhaal in één commando.
 *
 * Accepteert HEIC (iPhone) of JPEG. Converteert HEIC naar JPEG met `sips`
 * (macOS), verkleint en comprimeert alles met sharp naar web-formaten,
 * en plaatst de resultaten in public/img/verhalen/ met consistente namen.
 *
 * Gebruik:
 *   node scripts/verhaal-photos.mjs <slug> <portret> <full> <half-1> <half-2>
 *
 * Voorbeeld:
 *   node scripts/verhaal-photos.mjs jesse ~/Downloads/jesse.heic \
 *     ~/Downloads/mural.heic ~/Downloads/spritz.heic ~/Downloads/strand.heic
 *
 * Uitvoer:
 *   public/img/verhalen/jesse.jpg       (vierkant 800x800, portret ~40 KB)
 *   public/img/verhalen/jesse-1.jpg     (full 1400px, portret of landscape ~150 KB)
 *   public/img/verhalen/jesse-2.jpg     (vierkant 900x900, half ~100 KB)
 *   public/img/verhalen/jesse-3.jpg     (vierkant 900x900, half ~100 KB)
 *
 * Tip: portret-foto is alleen verplicht, gallery-foto's optioneel. Geef er
 * minder dan drie mee en er worden minder gegenereerd (passende aantal).
 */
import sharp from 'sharp'
import { spawnSync } from 'node:child_process'
import { readFileSync, writeFileSync, existsSync, statSync, mkdirSync, unlinkSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, basename, resolve, extname } from 'node:path'

const VERHALEN_DIR = new URL('../public/img/verhalen/', import.meta.url).pathname

const PROFILES = [
  // portret
  { name: (slug) => `${slug}.jpg`, size: 800, quality: 82, label: 'portret' },
  // full-width gallery
  { name: (slug) => `${slug}-1.jpg`, size: 1400, quality: 80, label: 'full-width gallery' },
  // half-width gallery 2
  { name: (slug) => `${slug}-2.jpg`, size: 900, quality: 80, label: 'half-width gallery' },
  // half-width gallery 3
  { name: (slug) => `${slug}-3.jpg`, size: 900, quality: 80, label: 'half-width gallery' },
]

function isHeicFile(path) {
  const buf = readFileSync(path, { encoding: null }).subarray(0, 32)
  // HEIC: bytes 4-12 are "ftypheic" or "ftypmif1" of varianten
  const header = buf.slice(4, 12).toString('ascii')
  return /ftyp(heic|heix|hevc|mif1|msf1)/.test(header)
}

function heicToJpeg(inputPath) {
  const out = join(tmpdir(), `verhaal-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`)
  const result = spawnSync(
    'sips',
    ['-s', 'format', 'jpeg', '-s', 'formatOptions', '92', inputPath, '--out', out],
    { stdio: 'pipe' }
  )
  if (result.status !== 0) {
    const err = result.stderr?.toString() || 'onbekende fout'
    throw new Error(`sips conversie faalde voor ${inputPath}: ${err}`)
  }
  return out
}

async function processOne(inputPath, slug, profile) {
  if (!existsSync(inputPath)) {
    throw new Error(`bestand bestaat niet: ${inputPath}`)
  }

  const originalSize = statSync(inputPath).size
  const originalKB = (originalSize / 1024).toFixed(0)

  let tmpFile = null
  let workPath = inputPath

  if (isHeicFile(inputPath)) {
    tmpFile = heicToJpeg(inputPath)
    workPath = tmpFile
  }

  const outputPath = join(VERHALEN_DIR, profile.name(slug))
  const meta = await sharp(workPath).metadata()
  const buffer = await sharp(workPath)
    .rotate() // honor EXIF orientation
    .resize({
      width: profile.size,
      height: profile.size,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg({ quality: profile.quality, progressive: true, mozjpeg: true })
    .toBuffer()

  writeFileSync(outputPath, buffer)

  if (tmpFile) {
    try { unlinkSync(tmpFile) } catch { /* negeer */ }
  }

  const newKB = (buffer.length / 1024).toFixed(0)
  const reduction = (((originalSize - buffer.length) / originalSize) * 100).toFixed(0)

  console.log(
    `  [${profile.label}] ${basename(outputPath)}  ` +
    `${meta.width}x${meta.height} ${originalKB} KB  →  ${newKB} KB  (-${reduction}%)`
  )
}

async function main() {
  const args = process.argv.slice(2)
  if (args.length < 2) {
    console.error('Gebruik: node scripts/verhaal-photos.mjs <slug> <portret> [full] [half-1] [half-2]')
    console.error('Voorbeeld: node scripts/verhaal-photos.mjs jesse ~/Downloads/jesse.heic ~/Downloads/mural.heic')
    process.exit(1)
  }

  const [slug, ...inputs] = args

  if (!/^[a-z][a-z0-9-]*$/.test(slug)) {
    console.error(`Slug moet lowercase, a-z / 0-9 / - zijn. Gekregen: "${slug}"`)
    process.exit(1)
  }

  if (!existsSync(VERHALEN_DIR)) {
    mkdirSync(VERHALEN_DIR, { recursive: true })
  }

  console.log(`\nVerwerken van ${inputs.length} foto('s) voor "${slug}":\n`)

  for (let i = 0; i < inputs.length && i < PROFILES.length; i++) {
    const input = resolve(inputs[i].replace(/^~/, process.env.HOME || ''))
    try {
      await processOne(input, slug, PROFILES[i])
    } catch (err) {
      console.error(`  FOUT bij ${basename(input)}: ${err.message}`)
      process.exit(1)
    }
  }

  console.log(`\nKlaar. Foto's staan in public/img/verhalen/.`)
  console.log(`Paden om in src/data/verhalen.js te zetten:`)
  console.log(`  foto:                          '/img/verhalen/${slug}.jpg'`)
  for (let i = 1; i < inputs.length && i < PROFILES.length; i++) {
    console.log(`  gallery[${i - 1}].src:  '/img/verhalen/${slug}-${i}.jpg'`)
  }
  console.log('')
}

main().catch((err) => {
  console.error('Onverwachte fout:', err)
  process.exit(1)
})
