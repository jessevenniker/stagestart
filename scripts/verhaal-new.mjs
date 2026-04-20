#!/usr/bin/env node
/**
 * Genereert een nieuw lege verhaal-entry in src/data/verhalen.js.
 * De nieuwe entry wordt bovenaan de VERHALEN-array gezet met alle velden
 * gevuld met TODO-placeholders die je zelf moet invullen.
 *
 * Gebruik:
 *   node scripts/verhaal-new.mjs <slug>
 *
 * Voorbeeld:
 *   node scripts/verhaal-new.mjs sanne
 */
import { readFileSync, writeFileSync } from 'node:fs'

const VERHALEN_PATH = new URL('../src/data/verhalen.js', import.meta.url).pathname

const ACCENTS = ['#D4522A (terra)', '#F2B517 (gold)', '#3EAD6E (sage)', '#1A7EC5 (sky)', '#E8507A (blush)']

function today() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function template(slug) {
  return `  {
    slug: '${slug}',
    voornaam: 'TODO voornaam',
    opleiding: 'TODO opleiding (bv. HBO Toegepaste Psychologie)',
    periode: 'TODO periode (bv. februari tot juli 2026)',
    sector: 'TODO sector (bv. HR-consultancy)',
    bedrijf: null, // of 'Naam bedrijf' als stagiair toestemming heeft gegeven
    wijk: 'TODO wijk',
    auto: true, // of false
    budget: 'TODO budget (bv. ±€1.300 per maand)',
    // Kies accent uit: ${ACCENTS.join(', ')}
    accent: '#1A7EC5',
    foto: '/img/verhalen/${slug}.jpg',
    quote: 'TODO korte quote voor op de hub-kaart, één zin',
    persoonlijk: {
      favoriete_spot: 'TODO',
      grootste_les: 'TODO',
      eerste_aankoop: 'TODO',
      moest_wennen: 'TODO',
    },
    pull_quotes: [
      'TODO eerste pull-quote',
      'TODO tweede pull-quote',
      'TODO derde pull-quote',
    ],
    gallery: [
      {
        src: '/img/verhalen/${slug}-1.jpg',
        caption: 'TODO handgeschreven caption',
        layout: 'full',
      },
      {
        src: '/img/verhalen/${slug}-2.jpg',
        caption: 'TODO handgeschreven caption',
        layout: 'half',
      },
      {
        src: '/img/verhalen/${slug}-3.jpg',
        caption: 'TODO handgeschreven caption',
        layout: 'half',
      },
    ],
    qa: [
      { vraag: 'TODO vraag 1', antwoord: 'TODO antwoord 1' },
      { vraag: 'TODO vraag 2', antwoord: 'TODO antwoord 2' },
      { vraag: 'TODO vraag 3', antwoord: 'TODO antwoord 3' },
      { vraag: 'TODO vraag 4', antwoord: 'TODO antwoord 4' },
      { vraag: 'TODO vraag 5', antwoord: 'TODO antwoord 5' },
      { vraag: 'TODO vraag 6', antwoord: 'TODO antwoord 6' },
    ],
    eigen_verhaal: [
      'TODO eerste alinea van eigen verhaal',
      'TODO tweede alinea',
      'TODO derde alinea',
    ],
    tip: 'TODO concrete tip voor toekomstige stagiairs',
    voorbeeld: true, // zet op false bij definitieve publicatie
    laatste_update: '${today()}',
  },
`
}

async function main() {
  const slug = process.argv[2]

  if (!slug) {
    console.error('Gebruik: node scripts/verhaal-new.mjs <slug>')
    console.error('Voorbeeld: node scripts/verhaal-new.mjs sanne')
    process.exit(1)
  }

  if (!/^[a-z][a-z0-9-]*$/.test(slug)) {
    console.error(`Slug moet lowercase a-z / 0-9 / - zijn. Gekregen: "${slug}"`)
    process.exit(1)
  }

  const current = readFileSync(VERHALEN_PATH, 'utf-8')

  if (current.includes(`slug: '${slug}'`)) {
    console.error(`Slug "${slug}" bestaat al in verhalen.js. Gebruik een andere slug of bewerk de bestaande entry.`)
    process.exit(1)
  }

  const anchor = 'export const VERHALEN = [\n'
  const anchorIdx = current.indexOf(anchor)
  if (anchorIdx === -1) {
    console.error('Kon "export const VERHALEN = [" niet vinden in verhalen.js.')
    process.exit(1)
  }

  const insertAt = anchorIdx + anchor.length
  const next = current.slice(0, insertAt) + template(slug) + current.slice(insertAt)

  writeFileSync(VERHALEN_PATH, next)

  console.log(`Nieuwe verhaal-entry toegevoegd voor "${slug}" bovenaan VERHALEN in verhalen.js.`)
  console.log('')
  console.log('Volgende stappen:')
  console.log(`  1. Open src/data/verhalen.js en vervang alle TODO-waarden.`)
  console.log(`  2. Zet foto's neer via:`)
  console.log(`       node scripts/verhaal-photos.mjs ${slug} <portret> <full> <half-1> <half-2>`)
  console.log(`  3. Zet voorbeeld: false zodra definitief.`)
  console.log(`  4. Draai \`npm run build\` om sitemap bij te werken en check de build.`)
}

main().catch((err) => {
  console.error('Onverwachte fout:', err)
  process.exit(1)
})
