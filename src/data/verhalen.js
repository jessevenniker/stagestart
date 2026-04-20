/**
 * Verhalen van stagiairs.
 *
 * ─────────────────────────────────────────────────────────────
 * EEN NIEUW VERHAAL TOEVOEGEN (stappenplan):
 *
 *  1. Zet de foto's neer in /public/img/verhalen/
 *     - Portretfoto:      [slug].jpg            (vierkant 800–1000 px, < 150 KB)
 *     - Full-width foto:  [slug]-1.jpg          (portret of landscape, < 250 KB)
 *     - Half-width foto:  [slug]-2.jpg          (idealiter vierkant, < 150 KB)
 *     - Half-width foto:  [slug]-3.jpg          (idealiter vierkant, < 150 KB)
 *     (Als foto's van iPhone komen zijn ze vaak HEIC; converteer eerst met
 *      `sips -s format jpeg -s formatOptions 85 bron.heic --out doel.jpg`
 *      of via de sharp-pipeline die we voor Jesse gebruikten.)
 *
 *  2. Kopieer de Jesse-entry hieronder en pas aan:
 *     - slug, voornaam, opleiding, periode, sector, bedrijf, wijk, auto, budget
 *     - accent: kies uit Handelskade (#D4522A terra, #F2B517 gold, #3EAD6E sage,
 *       #1A7EC5 sky, #E8507A blush)
 *     - foto: /img/verhalen/[slug].jpg
 *     - quote: één zin uit hun verhaal, gebruikt op hub-kaart
 *     - persoonlijk: vier warme feitjes uit het Q&A-antwoord
 *     - pull_quotes: max 3 korte zinnen, getoond tussen alinea's
 *     - gallery: 3 items, eerste met layout: 'full', de andere 'half'
 *     - qa: direct overnemen uit Google Form-inzending
 *     - eigen_verhaal: 3–4 alinea's, geschreven door stagiair of door redactie op
 *       basis van Q&A (stagiair krijgt altijd eerst voorbeeld-tekst ter akkoord)
 *     - tip: één zin
 *     - voorbeeld: true bij concept, false bij definitieve publicatie
 *     - laatste_update: datum
 *
 *  3. Voeg toe aan /public/sitemap.xml (alleen wanneer voorbeeld: false)
 *
 *  4. Stagiair stuurt akkoord, zet voorbeeld: false, `npm run build`, deploy.
 *
 * ─────────────────────────────────────────────────────────────
 */

export const VERHALEN = [
  {
    slug: 'jesse',
    voornaam: 'Jesse',
    opleiding: 'HBO Toegepaste Psychologie',
    periode: 'februari tot juli 2026',
    sector: 'HR-consultancy',
    bedrijf: null,
    wijk: 'Salinja',
    auto: true,
    budget: '±€1.300 per maand',
    accent: '#1A7EC5',
    foto: '/img/verhalen/jesse.jpg',
    quote: 'Accepteer dat alles hier wat langzamer gaat. Het is heerlijk.',
    persoonlijk: {
      favoriete_spot: 'Spritz, vaste happy hour',
      grootste_les: 'Afstanden onderschat je snel, ook op een "klein" eiland',
      eerste_aankoop: 'Zonnebrand en muggenspray',
      moest_wennen: 'Het poko poko-tempo op het werk',
    },
    pull_quotes: [
      'Het eiland oogt klein, maar is toch nog best groot.',
      'Accepteer dat alles wat langzamer gaat. Het is heerlijk.',
      'Onwijs aardige mensen. Vrolijk, sociaal, oprecht.',
    ],
    gallery: [
      {
        src: '/img/verhalen/gallery-huis.jpg',
        caption: 'Uitzicht tijdens een rondje in de pauze van m\'n stage',
        layout: 'full',
      },
      {
        src: '/img/verhalen/gallery-sociaal.jpg',
        caption: 'Vaste Spritz-avond met het huis',
        layout: 'half',
      },
      {
        src: '/img/verhalen/gallery-strand.jpg',
        caption: 'Vrije dag, geen plannen, wel zon',
        layout: 'half',
      },
    ],
    qa: [
      {
        vraag: 'Had je een auto, en zou je die keuze weer zo maken?',
        antwoord: 'Ja, een auto is hier bijna noodzakelijk. Ik heb er samen met mijn vriendin één gehuurd. Ik zou aanraden om er één te huren en eventueel te delen met huisgenoten. Dat drukt de kosten aanzienlijk.',
      },
      {
        vraag: 'Hoe vond je je woning?',
        antwoord: 'Via een stagebureau. Dat is het makkelijkst en vaak het meest betrouwbaar, alleen zitten er wel extra kosten aan vast. Ik zag veel woningoplichting langskomen op Facebook, dus ik zou daar altijd mee oppassen.',
      },
      {
        vraag: 'Hoe zag een normale week eruit?',
        antwoord: 'Vier dagen stage, één dag online les. Op vrije dagen was ik vaak op het strand te vinden, in het weekend naar de happy hours. Spritz happy hour was zeker mijn favoriet.',
      },
      {
        vraag: 'Wat wou je dat iemand je vóór vertrek had verteld?',
        antwoord: 'Ik wist dat ik een auto nodig had, maar ik wist niet dat het echt zo hard nodig was om dingen op het eiland te doen. Het eiland oogt "klein" maar is toch nog best groot, en lopen langs de wegen is gevaarlijk en warm.',
      },
      {
        vraag: 'Wat heeft je het meest verrast?',
        antwoord: 'De cultuur, in positieve zin. Onwijs veel aardige mensen, iedereen is vaak vrolijk en sociaal. Afhankelijk van wat je hier gaat doen kan je echt een geweldige tijd hebben. Belangrijk: het blijft een eigen land. Het is geen tropisch Nederland.',
      },
      {
        vraag: 'Wat is je mooiste herinnering?',
        antwoord: 'Lekker cocktails drinken met het huis tijdens happy hour na een stageweek.',
      },
    ],
    eigen_verhaal: [
      'Ik liep van februari tot juli 2026 stage op Curaçao bij een HR-consultancybedrijf. Wat ik vooraf wist is dat een auto handig zou zijn. Wat ik niet wist is hoe ongelooflijk handig. Samen met mijn vriendin hebben we er een gehuurd en binnen een week was duidelijk dat we zonder vastgelopen waren. Het eiland oogt klein op een kaartje, maar lopen langs de wegen is te gevaarlijk en te warm om serieus mee te tellen als optie.',
      'Mijn woning regelde ik via een stagebureau. Iets duurder, maar na alles wat ik had gezien over oplichting via Facebook was ik blij met de zekerheid. Ik woonde in Salinja, centraal genoeg om naar werk te komen en dicht bij de stranden en happy hours die het weekend maakten. De werkweek was vier dagen stage plus één dag online les. Een normaal ritme, maar met een heel ander soort vrije uren dan ik in Nederland had.',
      'De grootste verrassing zat niet in het klimaat of het eten, maar in de mensen. Vrolijk, sociaal, oprecht geïnteresseerd. En in het tempo. Waar ik in Nederland gewend was aan strakke agenda\'s en "effe snel checken", liep hier alles net wat ademender. In het begin voelde dat onwennig. Eind eerste maand snapte ik waarom het werkt. Het blijft een eigen land, dus verwacht geen tropisch Nederland, maar als je meegaat in het ritme krijg je er een stage voor terug waar ik nu nog dagelijks aan denk.',
    ],
    tip: 'Accepteer dat alles hier wat langzamer gaat. Het is heerlijk, maar dan moet je het wel laten.',
    voorbeeld: false,
    laatste_update: '2026-04-20',
  },
]

export function getVerhaal(slug) {
  return VERHALEN.find((v) => v.slug === slug)
}
