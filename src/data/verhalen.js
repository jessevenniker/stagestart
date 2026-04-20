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
    slug: 'jayden',
    voornaam: 'Jayden',
    opleiding: 'MBO4 Mediavormgeving',
    periode: 'februari tot juli 2026',
    sector: 'Mediavormgeving',
    bedrijf: 'Een stichting op Curaçao',
    wijk: 'Banda Bou',
    auto: false,
    budget: '±€500 per maand',
    accent: '#3EAD6E',
    foto: '/img/verhalen/jayden.svg',
    quote: 'Het mooiste wat ik bewaar is het gezicht van mijn familie.',
    persoonlijk: {
      grootste_les: 'Een auto is wel echt handig om te hebben',
      moest_wennen: 'Hoe snel de tijd voorbij gaat',
    },
    pull_quotes: [
      'Het gezicht van mijn familie. Dat is wat ik bewaar.',
    ],
    gallery: [],
    qa: [
      {
        vraag: 'Had je een auto, en zou je die keuze weer zo maken?',
        antwoord: 'Ik had geen auto. Met de wetenschap van nu zou ik er wel een hebben, het is op Curaçao echt handig.',
      },
      {
        vraag: 'Hoe vond je je woning?',
        antwoord: 'Ik verbleef bij familie in Banda Bou. Dat werkte goed: geen huurkosten, geen woninggedoe vooraf te regelen, en een vertrouwde plek om naar terug te keren na elke werkdag.',
      },
      {
        vraag: 'Hoe zag een normale week eruit?',
        antwoord: 'Voor mij voelde de stage als normaal werk.',
      },
      {
        vraag: 'Wat wou je dat iemand je vóór vertrek had verteld?',
        antwoord: 'Dat een auto wel echt handig is om te hebben.',
      },
      {
        vraag: 'Wat heeft je het meest verrast?',
        antwoord: 'Hoe snel de tijd gaat. Voor je het weet zit je weer in het vliegtuig naar Nederland.',
      },
      {
        vraag: 'Wat is je mooiste herinnering?',
        antwoord: 'Het gezicht van mijn familie, op de momenten dat we samen waren.',
      },
    ],
    eigen_verhaal: [
      'Ik liep van februari tot juli 2026 stage in mediavormgeving bij een stichting op Curaçao. Anders dan veel stagiairs verbleef ik bij familie, in Banda Bou aan de westkant van het eiland. Geen huurkosten, geen studentenhuis, geen auto. Wel een vertrouwde plek om elke werkdag naar terug te keren.',
      'De stage zelf voelde als normaal werk. De grootste verrassing zat in iets anders. Hoe snel de tijd gaat. Voor je het weet zit je weer in het vliegtuig. Wat ik bewaar is niet één strand of één moment, maar het gezicht van mijn familie op de momenten dat we samen waren. Dat is iets wat een hotel of toeristische plek je niet kan geven.',
    ],
    tip: 'Kijk goed naar vervoer voordat je gaat. Een auto is wel echt handig om te hebben, helemaal als je niet bij familie of in het centrum verblijft.',
    voorbeeld: true,
    laatste_update: '2026-04-20',
  },
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
      'Wat ik vooraf niet had verwacht: hoe snel een ander tempo iets met je doet. Niet de zon, niet het strand, niet de [happy hours](/happy-hours), hoe goed die ook waren. Het was iets in het ritme. Hier kun je niet snel even iets afhandelen op weg naar ergens anders. Of beter: het kan wel, het werkt alleen niet. Je leert in de eerste week dat "effe" geen Curaçaose categorie is.',
      'De mensen waren mijn tweede grote verrassing. Vrolijk, sociaal, oprecht geïnteresseerd in wie je bent en wat je komt doen. Maar het meest raakte me dat het meer is dan een vakantiestemming. Mensen werken hard, dragen hun eigen geschiedenis, hebben hun eigen problemen. Curaçao is geen tropisch Nederland. Het is [een eigen land](/leven) met een eigen taal, eigen humor en een eigen manier van met elkaar omgaan. Hoe sneller je dat ziet, hoe meer je eruit haalt.',
      'Achteraf zou ik niet veel anders doen. Wel iets meer met [lokale collega\'s](/werken) optrekken in plaats van alleen met andere stagiairs. Het verschil tussen die twee werelden is groter dan je denkt, en juist in de eerste weken kies je vanzelf voor wie naast je staat. Wat ik nog steeds bij me heb is iets simpels: dat "effe" geen universeel woord is. Soms is het beter om gewoon te wachten tot iets klaar is.',
    ],
    tip: 'Accepteer dat alles hier wat langzamer gaat. Het is heerlijk, maar dan moet je het wel laten.',
    voorbeeld: false,
    laatste_update: '2026-04-20',
  },
]

export function getVerhaal(slug) {
  return VERHALEN.find((v) => v.slug === slug)
}
