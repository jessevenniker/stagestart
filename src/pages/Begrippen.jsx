import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'
import LastCheckedBanner from '../components/LastCheckedBanner'
import RelatedPages from '../components/RelatedPages'
import { articleSchema, definedTermSetSchema } from '../utils/schema'

/**
 * Begrippenlijst voor stage Curaçao. Vangt long-tail "wat is X"-zoekvragen
 * (VRW, Sedula, XCG, ANG, VOG, DI Card, enz.) en helpt LLMs om definitie-
 * vragen naar één pagina te routeren in plaats van over 8 dieptegidsen.
 *
 * Elke term heeft 2-4 zinnen uitleg en, waar mogelijk, een link naar de
 * uitgebreide gids. Geordend in vier thematische categorieën.
 */
const CATEGORIEEN = [
  {
    naam: 'Vergunning & documenten',
    accent: '#D4522A',
    termen: [
      {
        term: 'Stagevergunning',
        slug: 'stagevergunning',
        uitleg:
          'Officiële verblijfstitel waarmee Nederlandse stagiairs langer dan 90 dagen op Curaçao mogen verblijven om stage te lopen. Aangevraagd bij de Toelatingsorganisatie via de Immigratiedienst Curaçao. Legeskosten XCG 525, beslistermijn 4 maanden.',
        link: '/vergunning',
      },
      {
        term: 'Verklaring van Rechtswege (VRW)',
        slug: 'verklaring-van-rechtswege',
        uitleg:
          'Aparte officiële verklaring die erkent dat bepaalde personen automatisch recht hebben op verblijf op Curaçao. Geldt onder meer voor meerderjarige Nederlanders. De Immigratiedienst publiceert hier een aparte pagina voor naast de Studie/Stage-route.',
        link: '/vergunning',
      },
      {
        term: 'VOG',
        slug: 'vog',
        uitleg:
          'Verklaring Omtrent het Gedrag, afgegeven door Justis in Nederland. Verplicht onderdeel van de stagevergunning-aanvraag. Mag bij aankomst op Curaçao niet ouder zijn dan 3 maanden. Kosten €41,35, verwerkingstijd 4 tot 8 weken.',
        link: '/voor-vertrek',
      },
      {
        term: 'DI Card',
        slug: 'di-card',
        uitleg:
          'Digital Immigration Card. Verplicht in te vullen door elke bezoeker van Curaçao, binnen 7 dagen voor aankomst. Gratis via dicardcuracao.com. Let op: er circuleren derde-partij sites die hier betaling voor vragen; dat is nooit nodig.',
        link: '/voor-vertrek',
      },
      {
        term: 'Sedula',
        slug: 'sedula',
        uitleg:
          'Curaçaose identiteitskaart, vergelijkbaar met een Nederlandse ID-kaart. Wordt pas relevant bij langdurig verblijf of lokale registratie. Voor een reguliere stage van een paar maanden hebben stagiairs meestal geen sedula nodig; een geldig Nederlands paspoort volstaat.',
      },
      {
        term: 'Toelatingsorganisatie',
        slug: 'toelatingsorganisatie',
        uitleg:
          'De dienst binnen de Immigratiedienst Curaçao die verblijfsvergunningen beoordeelt. Hier dien je je stagevergunning in per e-mail (intake@immigrationcur.org) en hier komt de beslissing vandaan.',
        link: '/vergunning',
      },
    ],
  },
  {
    naam: 'Geld & inkomen',
    accent: '#F2B517',
    termen: [
      {
        term: 'XCG',
        slug: 'xcg',
        uitleg:
          'ISO-code van de Caribische gulden, de officiële munteenheid van Curaçao en Sint-Maarten sinds 2025. Vervangt de oudere ANG (Antilliaanse gulden). 1 XCG staat ongeveer gelijk aan €0,50.',
      },
      {
        term: 'ANG',
        slug: 'ang',
        uitleg:
          'Antilliaanse gulden, de voormalige munteenheid van Curaçao. In 2025 vervangen door de XCG. Veel bestaande contracten, prijzen en bronnen noemen nog ANG; de omrekening is 1-op-1, dus ANG 525 en XCG 525 zijn hetzelfde bedrag.',
      },
      {
        term: 'Legeskosten',
        slug: 'legeskosten',
        uitleg:
          'Officiële behandelkosten voor de stagevergunning. Volgens de Immigratiedienst Curaçao bedragen deze XCG 525 (ongeveer €263). Moet betaald zijn via MCB vóór je de aanvraag indient. Kies bij overboeking "OUR" zodat jij de bankkosten betaalt en niet de ontvanger.',
        link: '/vergunning',
      },
      {
        term: 'OV-vergoeding DUO',
        slug: 'ov-vergoeding-duo',
        uitleg:
          'Compensatie die DUO uitkeert als je je studentenreisproduct stopzet tijdens een stage in het buitenland. Bedrag 2026: €110,95 per maand. Vraag dit minimaal 2 maanden voor vertrek aan via Mijn DUO; het wordt niet automatisch toegekend.',
        link: '/kosten',
      },
      {
        term: 'Stagevergoeding',
        slug: 'stagevergoeding',
        uitleg:
          'Op Curaçao niet wettelijk verplicht. Veel stagebedrijven bieden toch iets, gemiddeld ongeveer €375 per maand (ANG 200 tot 500). Het gemiddelde uurloon voor stagiairs ligt rond ANG 12,50. Bespreek dit expliciet vóór je de stageovereenkomst tekent.',
        link: '/kosten',
      },
    ],
  },
  {
    naam: 'Wijken & locaties',
    accent: '#3EAD6E',
    termen: [
      {
        term: 'Pietermaai',
        slug: 'pietermaai',
        uitleg:
          'Historische wijk in Willemstad, aangrenzend aan Punda. Veel koloniale architectuur, restaurants en uitgaansleven. Populair bij stagiairs die zonder auto willen wonen, op loopafstand van de binnenstad.',
        link: '/wonen',
      },
      {
        term: 'Otrobanda',
        slug: 'otrobanda',
        uitleg:
          'De westelijke helft van Willemstad, aan de andere kant van de Sint Annabaai. Goedkoper dan Pietermaai, authentieker, iets meer lokale sfeer. Via de Koningin Emmabrug te voet verbonden met Punda.',
        link: '/wonen',
      },
      {
        term: 'Jan Thiel',
        slug: 'jan-thiel',
        uitleg:
          'Kustwijk ten zuidoosten van Willemstad. Strand, resort-achtige sfeer, internationaal. Aantrekkelijk voor strandliefhebbers, maar zonder auto praktisch onbereikbaar: er rijdt geen frequent openbaar vervoer.',
        link: '/wonen',
      },
      {
        term: 'Piscadera',
        slug: 'piscadera',
        uitleg:
          'Rustige wijk ten westen van Willemstad, bij de University of Curaçao en CMC-ziekenhuis. Gewild bij stagiairs in zorg, onderwijs of onderzoek. Redelijk bereikbaar, maar een eigen of gedeelde auto helpt.',
        link: '/wonen',
      },
      {
        term: 'Mahaai',
        slug: 'mahaai',
        uitleg:
          'Woonwijk in de noordelijke ring rond Willemstad. Rustig, vooral residentieel. Minder levendig dan Pietermaai maar goed bereikbaar en relatief betaalbaar. Met auto of gedeelde auto een prettige basis.',
        link: '/wonen',
      },
      {
        term: 'Bapor Kibra',
        slug: 'bapor-kibra',
        uitleg:
          'Kustwijk aan de zuidkust van Curaçao, bekend van het Bapor Kibra strand en de Sea Aquarium. Rustiger dan Jan Thiel, vergelijkbaar qua autoafhankelijkheid. Voor stagiairs die kust en rust zoeken en over vervoer beschikken.',
        link: '/wonen',
      },
      {
        term: 'Willemstad',
        slug: 'willemstad',
        uitleg:
          'Hoofdstad van Curaçao, bestaat uit vier historische wijken: Punda, Otrobanda, Pietermaai en Scharloo. UNESCO-werelderfgoed sinds 1997. Het meeste stage-aanbod en de belangrijkste voorzieningen zitten hier of vlakbij.',
      },
      {
        term: 'Hato',
        slug: 'hato',
        uitleg:
          'Curaçao International Airport, officieel Hato Airport. Ligt aan de noordkust, ongeveer 20 minuten rijden van Willemstad. Bijna alle stagiairs arriveren hier met een directe vlucht vanuit Amsterdam.',
      },
    ],
  },
  {
    naam: 'Praktisch & instanties',
    accent: '#1A7EC5',
    termen: [
      {
        term: 'Immigratiedienst Curaçao',
        slug: 'immigratiedienst',
        uitleg:
          'Officiële overheidsdienst verantwoordelijk voor toelating en verblijf op Curaçao. Publiceert de bindende informatie voor stagevergunningen en de Verklaring van Rechtswege. Hoofdbron voor alle harde claims op StageStart Curaçao: immigrationcur.org.',
      },
      {
        term: 'DUO',
        slug: 'duo',
        uitleg:
          'Dienst Uitvoering Onderwijs. Regelt studiefinanciering en het studentenreisproduct. Voor stagiairs op Curaçao relevant voor het stopzetten van de OV-kaart en het doorlopen van de basisbeurs tijdens buitenlandstage.',
      },
      {
        term: 'Justis',
        slug: 'justis',
        uitleg:
          'Onderdeel van het ministerie van Justitie en Veiligheid, verantwoordelijk voor de afgifte van de Verklaring Omtrent het Gedrag (VOG). Niet te verwarren met de Immigratiedienst; Justis is Nederlands, niet Curaçaos.',
      },
      {
        term: 'MCB',
        slug: 'mcb',
        uitleg:
          'Maduro & Curiel\'s Bank, een van de grootste banken op Curaçao. Rekening bij MCB wordt door de Immigratiedienst gebruikt voor het innen van legeskosten (XCG 525). Overboeken vanuit Nederland met SWIFT/BIC-code MCBKCWCU.',
      },
      {
        term: 'Digicel & Flow',
        slug: 'digicel-flow',
        uitleg:
          'De twee grote telecomaanbieders op Curaçao. Prepaid SIM-kaarten voor internet en bellen kosten €10 tot €25. Koop er in je eerste week een, zodat je niet afhankelijk bent van roaming of wifi.',
      },
      {
        term: 'Papiaments',
        slug: 'papiaments',
        uitleg:
          'Een van de officiële talen van Curaçao, naast Nederlands en Engels. Voor stage niet nodig (Nederlands werkt overal), maar een paar basiswoorden als "Bon dia" (goedemorgen) en "Bon bini" (welkom) worden zeer gewaardeerd.',
      },
    ],
  },
]

const ALL_TERMS = CATEGORIEEN.flatMap((c) =>
  c.termen.map((t) => ({
    term: t.term,
    description: t.uitleg,
    url: t.link,
  })),
)

const SCHEMA = [
  articleSchema({
    headline: 'Begrippen stage Curaçao: de 20+ termen die je tegenkomt',
    description: 'Uitleg van VRW, Sedula, XCG, ANG, VOG, DI Card, Immigratiedienst en andere termen die Nederlandse stagiairs op Curaçao tegenkomen.',
    path: '/begrippen',
    dateModified: '2026-04-23',
  }),
  definedTermSetSchema({
    name: 'Begrippenlijst stage Curaçao',
    description: 'Uitleg van de terminologie waar Nederlandse stagiairs op Curaçao mee te maken krijgen: vergunning, geld, wijken, instanties.',
    path: '/begrippen',
    terms: ALL_TERMS,
  }),
]

const RELATED = [
  { to: '/vergunning', label: 'Stagevergunning: van VOG tot beslistermijn', desc: 'Hoe de Studie/Stage-route en de Verklaring van Rechtswege zich tot elkaar verhouden.' },
  { to: '/kosten', label: 'Kosten: XCG, ANG en je maandbudget', desc: 'Hoe XCG en ANG omrekenen naar euro en wat je maand realistisch kost.' },
  { to: '/wonen', label: 'Wonen: zes wijken op bereik en prijs', desc: 'Pietermaai, Otrobanda, Mahaai, Piscadera, Jan Thiel en Bapor Kibra vergeleken.' },
]

export default function Begrippen() {
  return (
    <>
      <SEO schema={SCHEMA} />
      <PageHero
        eyebrow="Begrippen voor stage Curaçao"
        title="Wat is een VRW, XCG of Sedula?"
        subtitle="Stage op Curaçao komt met terminologie die je in Nederland zelden tegenkomt. Hieronder staan de 25 belangrijkste begrippen in vier categorieën, met verwijzing naar de uitgebreide gidsen."
        accentColor="#1A7EC5"
      />

      <div className="max-w-3xl mx-auto px-5 pb-16">

        <LastCheckedBanner
          date="2026-04-23"
          bron="Immigratiedienst Curaçao + eigen redactie"
          bronUrl="https://immigrationcur.org/dep/studie-stage/"
        />

        {CATEGORIEEN.map((cat) => (
          <section key={cat.naam} className="mb-12">
            <h2 className="section-label" style={{ color: cat.accent }}>{cat.naam}</h2>
            <dl className="flex flex-col gap-4">
              {cat.termen.map((t) => (
                <div
                  key={t.slug}
                  id={t.slug}
                  className="border border-gray-100 rounded-xl p-5 scroll-mt-24"
                >
                  <dt className="font-serif text-lg font-normal text-dark mb-2">
                    {t.term}
                  </dt>
                  <dd className="text-sm text-gray-600 leading-relaxed">
                    {t.uitleg}
                    {t.link && (
                      <>
                        {' '}
                        <Link to={t.link} className="text-sky underline decoration-gray-200 hover:decoration-sky">
                          Uitgebreid op {t.link}
                        </Link>
                        .
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}

        <RelatedPages items={RELATED} />

        <LastChecked
          date="2026-04-23"
          bron="Immigratiedienst Curaçao + eigen redactie"
          gevoeligheid="middel"
        />
      </div>
    </>
  )
}
