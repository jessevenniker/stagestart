/**
 * Genereert de downloadbare PDF-versie van de startgids.
 *
 * Gebruik: node scripts/generate-startgids-pdf.mjs
 *
 * Output: public/downloads/stagestart-startgids.pdf
 *
 * Werking: een eigen HTML-template wordt via Puppeteer naar PDF omgezet.
 * Foto's worden als base64 data-URI ingebed (geen file:// issues).
 * Dit is niet hetzelfde als browser-print van /startgids: eigen cover,
 * inhoudsopgave, foto's op relevante hoofdstukken, nette pagina-breaks.
 */
import puppeteer from 'puppeteer'
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const IMG = join(ROOT, 'public', 'img')
const OUT = join(ROOT, 'public', 'downloads', 'stagestart-startgids.pdf')

async function imgToDataUri(filename) {
  const buf = await readFile(join(IMG, filename))
  const ext = filename.split('.').pop().toLowerCase()
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'png' ? 'image/png' : 'application/octet-stream'
  return `data:${mime};base64,${buf.toString('base64')}`
}

const HOOFDSTUKKEN = [
  {
    n: '01',
    color: '#D4522A',
    title: 'Vertrekchecklist',
    lead: 'De grootste documenten in de juiste volgorde, met tijdlijn.',
    foto: 'paspoort-en-reisdocumenten.jpg',
    items: [
      { label: '8-10 weken voor vertrek', text: 'VOG aanvragen via Justis.nl. Kosten €41,35. Duurt 4-6 weken.' },
      { label: '8 weken voor vertrek', text: 'Stagevergunning aanvragen bij de Immigratiedienst Curaçao. Legeskosten XCG 525 (± €263).' },
      { label: '6-8 weken voor vertrek', text: 'Geboorteakte opvragen bij je gemeente. Mag bij indiening niet ouder zijn dan 1 jaar.' },
      { label: '6 weken voor vertrek', text: 'Internationale zorgverzekering met dekking voor Curaçao afsluiten. Polisblad nodig voor de vergunning.' },
      { label: '4-6 weken voor vertrek', text: 'Vliegticket boeken. Prijzen stijgen flink richting vertrekdatum.' },
      { label: '2-3 weken voor vertrek', text: 'Woning geregeld? Transport vanaf luchthaven afgesproken?' },
      { label: '1 week voor vertrek', text: 'DI Card invullen op dicardcuracao.com (gratis, verplicht, binnen 7 dagen voor vertrek).' },
      { label: 'Dag van vertrek', text: 'Paspoort, vergunningsbewijs, polisblad, DI Card-bevestiging en geboorteakte in handbagage.' },
    ],
  },
  {
    n: '02',
    color: '#F2B517',
    title: 'Vergunning stappenplan',
    lead: 'Studie/stage en Verklaring van Rechtswege zijn twee aparte informatiestromen.',
    foto: null,
    items: [
      { label: 'Wat zegt de officiële bron', text: 'De Immigratiedienst Curaçao publiceert twee aparte pagina\'s: Studie/Stage en Verklaring van Rechtswege. Voor Nederlandse stagiairs kunnen beide relevant zijn.' },
      { label: 'Vereiste documenten', text: 'VOG (max 3 maanden oud), geboorteakte (max 1 jaar oud), KvK-uittreksel stagebedrijf, polisblad ziektekostenverzekering, stageovereenkomst.' },
      { label: 'Legeskosten', text: 'XCG 525,00. Maak niet over in euro\'s. Screenshot van betaling bewaren als bewijs bij indiening.' },
      { label: 'Indiening', text: 'Per e-mail naar intake@immigrationcur.org. Na indiening ontvang je een voorlopig bewijs, goed bewaren.' },
      { label: 'Verwerkingstijd', text: 'Officieel maximaal 4 maanden. Plan vooruit. Je mag wettelijk al stage lopen ná indiening van de aanvraag.' },
    ],
  },
  {
    n: '03',
    color: '#3EAD6E',
    title: 'Budgetoverzicht',
    lead: 'Realistische kosten en inkomsten voor een stagemaand op Curaçao.',
    foto: 'hero-kosten.jpg',
    items: [
      { label: 'Eenmalige kosten', text: 'Stagevergunning ± €320, vliegticket €600-1.000, borg woning 1-1,5 keer huur, borg auto €500-1.000, eerste boodschappen €100-300.' },
      { label: 'Maandelijkse kosten', text: 'Huur €500-1.000, auto (huur + benzine) €400-600, boodschappen €200-300, uitgaan €100-200, onverwacht €50-100.' },
      { label: 'Inkomsten', text: 'OV-vergoeding DUO €110,95/mnd (2026) als je studentenreisproduct stopt. Basisbeurs uitwonend HBO/WO €324,52/mnd (2026) loopt gewoon door.' },
      { label: 'Wat vaak wordt vergeten', text: 'De eerste maand is altijd duurder: borgen, inrichting, SIM en eerste boodschappen komen bovenop de vaste lasten.' },
    ],
  },
  {
    n: '04',
    color: '#1A7EC5',
    title: 'Inpaklijst',
    lead: 'Wat neem je mee en wat koop je beter ter plekke?',
    foto: null,
    items: [
      { label: 'Zeker meenemen uit Nederland', text: 'Zonnebrand SPF 50+ (soms dubbele prijs op Curaçao), voorgeschreven medicijnen voor hele stageperiode plus kopie recept, universele wereldstekker (Curaçao heeft zowel 220V EU als 110V US).' },
      { label: 'Documenten', text: 'Paspoort, vergunningsbewijs, polisblad, DI Card, geboorteakte, VOG, vliegticket en rijbewijs.' },
      { label: 'Voor stage', text: 'Laptop en oplader, externe harde schijf, eventueel werkkleding. Kantoren kunnen stevig airconditioning hebben.' },
      { label: 'Beter lokaal kopen', text: 'Handdoeken, beddengoed, basis kookgerei. Vaak goedkoper of al aanwezig in gemeubileerde woning.' },
      { label: 'Pinpas op "wereld" zetten', text: 'Regel bij je bank dat de pas buiten Europa werkt. Anders kun je de eerste dagen niet pinnen.' },
    ],
  },
  {
    n: '05',
    color: '#E8507A',
    title: 'Eerste week planning',
    lead: 'Dag voor dag wat je regelt de eerste 7 dagen.',
    foto: 'hero-eerste-week.jpg',
    items: [
      { label: 'Dag 1', text: 'Aankomst Hato Airport, vergunning tonen bij grenscontrole, taxi/ophaalservice naar woning, SIM-kaart in aankomsthal (DennisMobile, Digicel of Flow).' },
      { label: 'Dag 2', text: 'Eerste boodschappen (Van den Tweel, Centrum Supermarkt of PriceSmart), omgeving verkennen, locaties van apotheek, benzinestation en supermarkt onthouden.' },
      { label: 'Dag 3', text: 'Pinpas testen bij geldautomaat, wifi checken op woning, tijdverschil instellen voor calls naar thuis. Bankrekening openen is optioneel en duurt 2-4 maanden.' },
      { label: 'Dag 4-5', text: 'Eerste dag op stage. Route oefenen zodat je de reistijd weet. Nummers opslaan van stagebegeleider, huisbaas en medestagiairs.' },
      { label: 'Dag 6-7', text: 'Eerste weekend. Een strand bezoeken (Knip, Cas Abao, Playa Lagun), Willemstad centrum verkennen, huisgenoten leren kennen.' },
    ],
  },
  {
    n: '06',
    color: '#D4522A',
    title: 'Handige nummers en adressen',
    lead: 'Sla deze op in je telefoon voor je vertrekt.',
    foto: null,
    items: [
      { label: 'Noodhulp', text: 'Politie, brandweer, ambulance: 911. Medische spoed: 910. Ambulance: 912. Kustwacht: 913. Toeristenpolitie: +599 9 674-0444.' },
      { label: 'Verkeersongeval', text: 'Forensys: 9223 (bel bij elk ongeval, verplaats auto niet). WhatsApp Forensys: +599 9 461-3282. Wegenwacht: 9247.' },
      { label: 'Medisch', text: 'Ziekenhuis CMC (algemeen): +599 9 745-0000. CMC eerste hulp: +599 9 745-0026. Nederlandstalige huisarts Centro Medico: +599 9 737-0522 (SBN Doormanweg 47).' },
      { label: 'Immigratiedienst', text: 'Adres: Scharlooweg 29. E-mail voor aanvraagindiening: intake@immigrationcur.org. Website: immigrationcur.org.' },
    ],
  },
]

const TODAY = new Date().toISOString().slice(0, 10)

function hoofdstukHtml(h) {
  return `
    <section class="hoofdstuk">
      <div class="hoofdstuk-header">
        <span class="hoofdstuk-nummer" style="color: ${h.color}">${h.n}</span>
        <div>
          <h2 class="hoofdstuk-titel">${h.title}</h2>
          <p class="hoofdstuk-lead">${h.lead}</p>
        </div>
      </div>
      ${h.fotoData ? `
        <div class="hoofdstuk-foto">
          <img src="${h.fotoData}" alt="" />
        </div>
      ` : ''}
      <div class="hoofdstuk-items">
        ${h.items.map((item) => `
          <div class="item" style="border-left-color: ${h.color}">
            <p class="item-label">${item.label}</p>
            <p class="item-text">${item.text}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `
}

function buildHtml(coverData, hoofdstukkenMetFotos) {
  return `<!doctype html>
<html lang="nl">
<head>
<meta charset="UTF-8" />
<title>Startgids voor stage op Curaçao</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }

  @page { size: A4; margin: 0; }

  body {
    font-family: 'Inter', -apple-system, sans-serif;
    color: #2C2420;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background: #fff;
  }

  /* COVER */
  .cover {
    height: 297mm;
    width: 210mm;
    position: relative;
    page-break-after: always;
    overflow: hidden;
    background: #1a1a1a;
  }
  .cover-image {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
  }
  .cover-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.75) 100%);
  }
  .cover-content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 28mm 22mm;
    color: #fff;
  }
  .cover-brand {
    font-family: 'Lora', serif;
    font-size: 18pt;
    margin-bottom: 2mm;
    letter-spacing: -0.5px;
  }
  .cover-brand-accent { font-weight: 600; }
  .cover-eyebrow {
    font-size: 8pt;
    letter-spacing: 3px;
    text-transform: uppercase;
    opacity: 0.8;
    margin-bottom: 10mm;
  }
  .cover-title {
    font-family: 'Lora', serif;
    font-size: 38pt;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 6mm;
    letter-spacing: -1px;
  }
  .cover-subtitle {
    font-size: 12pt;
    line-height: 1.5;
    opacity: 0.95;
    max-width: 140mm;
  }
  .cover-stripes {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3mm;
    display: flex;
  }
  .cover-stripes span { flex: 1; }

  /* TOC */
  .toc {
    height: 297mm;
    width: 210mm;
    padding: 22mm;
    page-break-after: always;
  }
  .toc-eyebrow {
    font-size: 9pt;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #8B7D6B;
    margin-bottom: 4mm;
  }
  .toc-title {
    font-family: 'Lora', serif;
    font-size: 32pt;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 12mm;
    letter-spacing: -0.5px;
  }
  .toc-intro {
    font-size: 11pt;
    line-height: 1.6;
    color: #555;
    max-width: 155mm;
    margin-bottom: 15mm;
  }
  .toc-list { list-style: none; }
  .toc-item {
    display: flex;
    align-items: baseline;
    padding: 4mm 0;
    border-bottom: 1px solid #eee;
    gap: 6mm;
  }
  .toc-item-n {
    font-family: 'Lora', serif;
    font-size: 20pt;
    font-weight: 400;
    width: 12mm;
    flex-shrink: 0;
  }
  .toc-item-content { flex: 1; }
  .toc-item-title {
    font-family: 'Lora', serif;
    font-size: 14pt;
    font-weight: 400;
    margin-bottom: 1mm;
  }
  .toc-item-desc {
    font-size: 9pt;
    color: #777;
    line-height: 1.4;
  }

  /* HOOFDSTUKKEN */
  .hoofdstuk {
    padding: 22mm;
    width: 210mm;
    page-break-before: always;
  }
  .hoofdstuk-header {
    display: flex;
    align-items: flex-start;
    gap: 8mm;
    margin-bottom: 10mm;
  }
  .hoofdstuk-nummer {
    font-family: 'Lora', serif;
    font-size: 56pt;
    font-weight: 400;
    line-height: 1;
    flex-shrink: 0;
  }
  .hoofdstuk-titel {
    font-family: 'Lora', serif;
    font-size: 26pt;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 2mm;
    margin-top: 4mm;
  }
  .hoofdstuk-lead {
    font-size: 11pt;
    line-height: 1.5;
    color: #777;
    max-width: 140mm;
  }
  .hoofdstuk-foto {
    width: 100%;
    height: 45mm;
    margin-bottom: 8mm;
    border-radius: 3mm;
    overflow: hidden;
    background: #eee;
  }
  .hoofdstuk-foto img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .hoofdstuk-items {
    display: flex;
    flex-direction: column;
    gap: 3.5mm;
  }
  .item {
    padding: 4.5mm 5.5mm;
    background: #fafaf8;
    border-left: 3px solid #ccc;
    border-radius: 0 2mm 2mm 0;
    page-break-inside: avoid;
  }
  .item-label {
    font-size: 8pt;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #2C2420;
    margin-bottom: 2mm;
  }
  .item-text {
    font-size: 10.5pt;
    line-height: 1.55;
    color: #333;
  }

  /* REDACTIONEEL */
  .redactioneel {
    padding: 22mm;
    width: 210mm;
    page-break-before: always;
  }
  .redactioneel-titel {
    font-family: 'Lora', serif;
    font-size: 22pt;
    font-weight: 400;
    margin-bottom: 8mm;
  }
  .redactioneel-body {
    font-size: 10.5pt;
    line-height: 1.6;
    color: #444;
    margin-bottom: 5mm;
    max-width: 160mm;
  }
  .colofon {
    margin-top: 20mm;
    padding-top: 6mm;
    border-top: 1px solid #eee;
    font-size: 9pt;
    color: #888;
    line-height: 1.6;
  }
  .colofon-merk {
    font-family: 'Lora', serif;
    font-size: 14pt;
    color: #2C2420;
    margin-bottom: 2mm;
    letter-spacing: -0.3px;
  }
</style>
</head>
<body>

  <!-- COVER -->
  <div class="cover">
    <div class="cover-image" style="background-image: url('${coverData}');"></div>
    <div class="cover-overlay"></div>
    <div class="cover-content">
      <p class="cover-brand">Stage<span class="cover-brand-accent">Start</span></p>
      <p class="cover-eyebrow">Curaçao</p>
      <h1 class="cover-title">Startgids voor<br/>je stage op<br/>Curaçao.</h1>
      <p class="cover-subtitle">Vertrekchecklist, vergunning, budget, inpaklijst, eerste week en noodnummers. De kerninformatie op één plek, zodat je niets vergeet.</p>
    </div>
    <div class="cover-stripes">
      <span style="background: #D4522A"></span>
      <span style="background: #F2B517"></span>
      <span style="background: #3EAD6E"></span>
      <span style="background: #1A7EC5"></span>
      <span style="background: #E8507A"></span>
    </div>
  </div>

  <!-- INHOUDSOPGAVE -->
  <div class="toc">
    <p class="toc-eyebrow">Inhoud</p>
    <h2 class="toc-title">Wat staat er in deze gids?</h2>
    <p class="toc-intro">
      Zes hoofdstukken met de kerninformatie die je nodig hebt voordat je vertrekt en in de eerste week dat je op Curaçao bent. Samenvatting van wat op stagestartcuracao.nl staat, gebaseerd op officiële bronnen.
    </p>
    <ul class="toc-list">
      ${hoofdstukkenMetFotos.map((h) => `
        <li class="toc-item">
          <span class="toc-item-n" style="color: ${h.color}">${h.n}</span>
          <div class="toc-item-content">
            <p class="toc-item-title">${h.title}</p>
            <p class="toc-item-desc">${h.lead}</p>
          </div>
        </li>
      `).join('')}
    </ul>
  </div>

  ${hoofdstukkenMetFotos.map(hoofdstukHtml).join('')}

  <!-- REDACTIONEEL + COLOFON -->
  <div class="redactioneel">
    <h2 class="redactioneel-titel">Over deze gids</h2>
    <p class="redactioneel-body">
      Deze startgids is een samenvatting van de kerninformatie op StageStart Curaçao. Voor officiële en actuele eisen rond vergunning, kosten en verblijf blijven instanties als de Immigratiedienst Curaçao, DUO en Justis altijd leidend. Bij conflict tussen deze gids en de officiële bron wint de officiële bron.
    </p>
    <p class="redactioneel-body">
      De gids wordt periodiek gecontroleerd en bijgewerkt. Onder elke claim op de website staat de laatste controledatum met bron. Zie stagestartcuracao.nl/bronnen voor de volledige verantwoording per claim.
    </p>
    <p class="redactioneel-body">
      Heb je een correctie of suggestie? Mail ons via info@jescoinnovation.nl. We reageren in de regel binnen 2 tot 4 werkdagen.
    </p>

    <div class="colofon">
      <p class="colofon-merk">StageStart Curaçao</p>
      <p>Onafhankelijke gids voor stagiairs. Geen bureau, geen pakket, geen commissie per boeking.</p>
      <p style="margin-top: 3mm;">stagestartcuracao.nl · info@jescoinnovation.nl · Uitgegeven door Jesco Innovation B.V.</p>
      <p style="margin-top: 3mm;">Deze uitgave: ${TODAY}</p>
    </div>
  </div>

</body>
</html>`
}

async function main() {
  await mkdir(dirname(OUT), { recursive: true })

  // Laad alle foto's als base64 data-URIs
  console.log('Foto\'s inladen als base64...')
  const coverData = await imgToDataUri('cta-sunset.jpg')
  const hoofdstukkenMetFotos = await Promise.all(
    HOOFDSTUKKEN.map(async (h) => ({
      ...h,
      fotoData: h.foto ? await imgToDataUri(h.foto) : null,
    }))
  )

  const html = buildHtml(coverData, hoofdstukkenMetFotos)

  console.log('Puppeteer starten...')
  const browser = await puppeteer.launch({
    headless: 'new',
  })
  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: ['load', 'networkidle0'] })
  await page.emulateMediaType('screen')

  console.log('PDF genereren...')
  await page.pdf({
    path: OUT,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  })

  await browser.close()

  const st = await stat(OUT)
  console.log(`PDF gegenereerd: ${OUT}`)
  console.log(`Grootte: ${Math.round(st.size / 1024)} KB`)
}

main().catch((err) => {
  console.error('PDF generation failed:', err)
  process.exit(1)
})
