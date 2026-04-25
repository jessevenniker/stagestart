#!/usr/bin/env node
/**
 * Genereert twee Facebook-assets onder public/img/social/:
 *   facebook-profile.png  1080x1080  (circle-safe voor profielfoto)
 *   facebook-cover.png    1640x624   (2x van FB's 820x312 banner-ratio)
 *
 * Gebruikt dezelfde merkkleuren en typografie als og-image.png en de
 * StripeBar in de site-header. Wordmark "StageStart Curaçao" centraal,
 * ribbon onderaan met "Geen bureau, geen pakket, geen commissie".
 *
 * Run: node scripts/generate-facebook-images.mjs
 */
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const COLORS = {
  terra:  '#D4522A',
  amber:  '#F2B517',
  sage:   '#3EAD6E',
  sky:    '#1A7EC5',
  coral:  '#E8507A',
  cream:  '#FDF6EA',
  dark:   '#1F2937',
  muted:  '#6B7280',
}
const STRIPE = [COLORS.terra, COLORS.amber, COLORS.sage, COLORS.sky, COLORS.coral]

// ============================================================
// PROFIELFOTO 1080x1080  (circle-crop-safe, alles binnen radius 480)
// ============================================================
function profileSvg() {
  const W = 1080
  const H = 1080
  const cx = W / 2
  const cy = H / 2

  // Stripe ring: vijf bogen rond de cirkel
  const ringR = 480
  const ringW = 14
  const arcLen = (2 * Math.PI * ringR) / 5
  const ringCirc = 2 * Math.PI * ringR

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${COLORS.cream}" />

  <!-- Stripe-ring rond de cirkel-rand -->
  <g fill="none" stroke-width="${ringW}" stroke-linecap="butt"
     transform="rotate(-90 ${cx} ${cy})">
    ${STRIPE.map((c, i) => `
      <circle cx="${cx}" cy="${cy}" r="${ringR}"
              stroke="${c}"
              stroke-dasharray="${arcLen} ${ringCirc - arcLen}"
              stroke-dashoffset="${-i * arcLen}" />
    `).join('')}
  </g>

  <!-- Eyebrow -->
  <text x="${cx}" y="${cy - 100}" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="28" letter-spacing="6" fill="${COLORS.muted}">
    ONAFHANKELIJKE GIDS
  </text>

  <!-- Wordmark Stage + Start -->
  <text x="${cx}" y="${cy + 30}" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="130" font-weight="400" fill="${COLORS.dark}">
    <tspan font-weight="400">Stage</tspan><tspan font-weight="700">Start</tspan>
  </text>

  <!-- Curaçao -->
  <text x="${cx}" y="${cy + 110}" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="58" font-style="italic" fill="${COLORS.terra}">
    Curaçao
  </text>

  <!-- Onderaan kleine subtitel -->
  <text x="${cx}" y="${cy + 200}" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="22" letter-spacing="2" fill="${COLORS.muted}">
    Geen bureau · Geen commissie
  </text>
</svg>`
}

// ============================================================
// OMSLAGFOTO 1640x624  (2x FB-ratio 820x312)
// FB crop't soms tot 640x360 op mobiel, dus alle tekst binnen
// veilig midden-gebied (top/bottom marges van ~80px).
// ============================================================
function coverSvg() {
  const W = 1640
  const H = 624

  // Stripe-band bovenaan
  const stripeH = 12
  const stripes = STRIPE.map((c, i) =>
    `<rect x="${(W / 5) * i}" y="0" width="${W / 5}" height="${stripeH}" fill="${c}" />`
  ).join('')

  // Houses rechts (gestapeld in een nette rij, schaal aangepast aan H)
  const houseY0 = 360
  const houseX0 = 1040
  const houseGap = 100
  const houses = [
    { color: COLORS.terra, h: 130 },
    { color: COLORS.amber, h: 160 },
    { color: COLORS.sage,  h: 195 },
    { color: COLORS.sky,   h: 150 },
    { color: COLORS.coral, h: 130 },
  ].map((h, i) => {
    const w = 80
    const y = houseY0 + (220 - h.h)
    return `
      <g transform="translate(${houseX0 + i * houseGap} ${y})">
        <polygon points="0,30 ${w/2},0 ${w},30" fill="${h.color}" />
        <rect x="0" y="30" width="${w}" height="${h.h - 30}" fill="${h.color}" />
        <rect x="14" y="50" width="16" height="16" fill="${COLORS.cream}" opacity="0.9" />
        <rect x="50" y="50" width="16" height="16" fill="${COLORS.cream}" opacity="0.9" />
        ${h.h > 130 ? `<rect x="14" y="80" width="16" height="16" fill="${COLORS.cream}" opacity="0.9" />
                       <rect x="50" y="80" width="16" height="16" fill="${COLORS.cream}" opacity="0.9" />` : ''}
        ${h.h > 170 ? `<rect x="14" y="110" width="16" height="16" fill="${COLORS.cream}" opacity="0.9" />
                       <rect x="50" y="110" width="16" height="16" fill="${COLORS.cream}" opacity="0.9" />` : ''}
      </g>
    `
  }).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${COLORS.cream}" />
  ${stripes}

  <text x="100" y="180"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="22" letter-spacing="4" fill="${COLORS.muted}">
    ONAFHANKELIJKE GIDS VOOR STAGIAIRS
  </text>

  <text x="100" y="290"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="92" font-weight="400" fill="${COLORS.dark}">
    StageStart Curaçao
  </text>

  <text x="100" y="365"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="32" font-style="italic" fill="${COLORS.terra}">
    Alles wat je echt moet weten over stage lopen.
  </text>

  ${houses}

  <rect x="0" y="${H - 70}" width="${W}" height="70" fill="${COLORS.dark}" opacity="0.92" />
  <text x="${W/2}" y="${H - 26}" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="26" font-style="italic" fill="${COLORS.cream}">
    Geen bureau · Geen pakket · Geen commissie · stagestartcuracao.nl
  </text>
</svg>`
}

const outDir = new URL('../public/img/social/', import.meta.url).pathname
mkdirSync(outDir, { recursive: true })

await sharp(Buffer.from(profileSvg()))
  .png()
  .toFile(`${outDir}facebook-profile.png`)

await sharp(Buffer.from(coverSvg()))
  .png()
  .toFile(`${outDir}facebook-cover.png`)

console.log(`[facebook] Geschreven:`)
console.log(`  - ${outDir}facebook-profile.png  (1080x1080, circle-safe)`)
console.log(`  - ${outDir}facebook-cover.png    (1640x624, FB-banner-ratio)`)
