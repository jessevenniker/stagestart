#!/usr/bin/env node
/**
 * Genereert public/og-image.png als 1200x630 PNG voor social previews
 * en LLM-crawlers (WhatsApp, iMessage, LinkedIn, ChatGPT, etc.).
 *
 * Vervangt de oude og-image.png die nog "stagestart-curacao.vercel.app"
 * in de afbeelding had staan — die URL is sinds de domein-switch
 * achterhaald en verwarrend voor ontvangers van gedeelde links.
 *
 * Uitvoer: node scripts/generate-og-image.mjs
 * Dependencies: sharp (already in package.json).
 */
import sharp from 'sharp'
import { writeFileSync } from 'node:fs'

const W = 1200
const H = 630

// Merkkleuren (matcht StripeBar en theme)
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

// Eenvoudig huis-pictogram (x = links-onder)
function house(x, y, color) {
  const w = 70
  const h = 90
  return `
    <g transform="translate(${x} ${y})">
      <polygon points="0,25 ${w/2},0 ${w},25" fill="${color}" />
      <rect x="0" y="25" width="${w}" height="${h - 25}" fill="${color}" />
      <rect x="10"  y="38" width="14" height="14" fill="${COLORS.cream}" opacity="0.85" />
      <rect x="30"  y="38" width="14" height="14" fill="${COLORS.cream}" opacity="0.85" />
      <rect x="50"  y="38" width="14" height="14" fill="${COLORS.cream}" opacity="0.85" />
      <rect x="10"  y="60" width="14" height="14" fill="${COLORS.cream}" opacity="0.85" />
      <rect x="30"  y="60" width="14" height="14" fill="${COLORS.cream}" opacity="0.85" />
      <rect x="50"  y="60" width="14" height="14" fill="${COLORS.cream}" opacity="0.85" />
    </g>
  `
}

// Pil-knop met outline in de merkkleur
function pill(x, y, label, color) {
  const padX = 22
  const charW = 11  // ruwe fontmetriek voor 20px font
  const w = label.length * charW + padX * 2
  const h = 40
  return `
    <g transform="translate(${x} ${y})">
      <rect x="0" y="0" width="${w}" height="${h}" rx="${h/2}"
            fill="#FFFFFF" stroke="${color}" stroke-width="2" />
      <text x="${w/2}" y="${h/2 + 7}" text-anchor="middle"
            font-family="Georgia, 'Times New Roman', serif"
            font-size="20" fill="${COLORS.dark}">${label}</text>
    </g>
  `
}

const stripeH = 10
const stripes = [COLORS.terra, COLORS.amber, COLORS.sage, COLORS.sky, COLORS.coral]
  .map((c, i) => `<rect x="${(W / 5) * i}" y="0" width="${W / 5}" height="${stripeH}" fill="${c}" />`)
  .join('')

const pills = [
  { label: 'Voor vertrek', color: COLORS.terra },
  { label: 'Kosten',       color: COLORS.amber },
  { label: 'Wonen',        color: COLORS.sage },
  { label: 'Vergunning',   color: COLORS.sky },
]

// Dynamisch pills plaatsen met 14px spacing
let pillX = 80
const pillY = 380
const pillNodes = pills.map(p => {
  const charW = 11
  const padX = 22
  const w = p.label.length * charW + padX * 2
  const node = pill(pillX, pillY, p.label, p.color)
  pillX += w + 14
  return node
}).join('')

const houses = [
  { color: COLORS.terra, h: 110 },
  { color: COLORS.amber, h: 140 },
  { color: COLORS.sage,  h: 170 },
  { color: COLORS.sky,   h: 130 },
  { color: COLORS.coral, h: 115 },
]
const houseY0 = 340
const houseX0 = 780
const houseGap = 78
const houseNodes = houses.map((h, i) => {
  const w = 70
  const y = houseY0 + (190 - h.h)
  return `
    <g transform="translate(${houseX0 + i * houseGap} ${y})">
      <polygon points="0,25 ${w/2},0 ${w},25" fill="${h.color}" />
      <rect x="0" y="25" width="${w}" height="${h.h - 25}" fill="${h.color}" />
      <rect x="12" y="42" width="14" height="14" fill="${COLORS.cream}" opacity="0.9" />
      <rect x="44" y="42" width="14" height="14" fill="${COLORS.cream}" opacity="0.9" />
      ${h.h > 120 ? `<rect x="12" y="68" width="14" height="14" fill="${COLORS.cream}" opacity="0.9" />
                     <rect x="44" y="68" width="14" height="14" fill="${COLORS.cream}" opacity="0.9" />` : ''}
      ${h.h > 150 ? `<rect x="12" y="94" width="14" height="14" fill="${COLORS.cream}" opacity="0.9" />
                     <rect x="44" y="94" width="14" height="14" fill="${COLORS.cream}" opacity="0.9" />` : ''}
    </g>
  `
}).join('')

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${COLORS.cream}" />
  ${stripes}

  <text x="80" y="150"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="22" letter-spacing="3" fill="${COLORS.muted}">
    ONAFHANKELIJKE GIDS VOOR STAGIAIRS
  </text>

  <text x="80" y="245"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="84" font-weight="400" fill="${COLORS.dark}">
    StageStart Curaçao
  </text>

  <text x="80" y="320"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="30" font-style="italic" fill="${COLORS.terra}">
    Alles wat je echt moet weten over stage lopen.
  </text>

  ${pillNodes}
  ${houseNodes}

  <rect x="0" y="${H - 60}" width="${W}" height="60" fill="${COLORS.dark}" opacity="0.92" />
  <text x="${W/2}" y="${H - 22}" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="22" font-style="italic" fill="${COLORS.cream}">
    Geen bureau · Geen pakket · Geen commissie
  </text>
</svg>
`

const out = new URL('../public/og-image.png', import.meta.url).pathname

await sharp(Buffer.from(svg))
  .png()
  .toFile(out)

console.log(`[og-image] Geschreven naar ${out} (${W}×${H})`)
