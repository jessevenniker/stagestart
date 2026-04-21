import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import ClaimLabel from '../components/ClaimLabel'
import LastChecked from '../components/LastChecked'
import RelatedPages from '../components/RelatedPages'
import ReadingProgress from '../components/ReadingProgress'
import { articleSchema } from '../utils/schema'

const RELATED = [
  { to: '/werken', label: 'Werkcultuur op Curaçao', desc: 'Poko poko, hiërarchie en feedback. Geldt voor stagiairs én tussenjaar-werkers.' },
  { to: '/wonen', label: 'Wonen', desc: 'Studentenhuis, kamer of appartement. Zelfde keuzes als voor stagiairs.' },
  { to: '/kosten', label: 'Kosten en budget', desc: 'Maandelijkse richtlijn en eenmalige opstartkosten.' },
  { to: '/verhalen', label: 'Verhalen', desc: 'Heb je tussenjaar gedaan op Curaçao? Deel je verhaal.' },
]

const SCHEMA = articleSchema({
  headline: 'Tussenjaar werken op Curaçao: wat moet je weten?',
  description: 'Eerlijke beslispagina voor jongeren die een tussenjaar willen werken op Curaçao. Verblijfsstatus, sectoren, salaris en bufferlogica — wat blijft hetzelfde als een stage en wat moet je echt anders aanpakken.',
  path: '/tussenjaar',
  dateModified: '2026-04-20',
})

const COMBINATIES = [
  {
    titel: 'Werken in een dive shop + Instructor worden',
    desc: 'Drie tot vier dagen per week werken aan de zuidwestkust, daarnaast je PADI-traject afmaken. Veel shops bieden een pakket waarin je begint met DM-cursus en daarna betaald als Divemaster of Open Water Instructor draait. Hoogseizoen december tot april is het meest werk.',
    accent: '#1A7EC5',
    label: 'Werk + duikbrevet',
  },
  {
    titel: 'Bediening op Mambo Beach Boulevard + reizen door het Caribisch gebied',
    desc: 'Vier avonden per week serveren op de boulevard, drie vrije dagen om te lezen, snorkelen, of een lang weekend naar Bonaire. Vanuit Curaçao zijn vluchten naar buureilanden en Colombia goedkoop genoeg om er regelmatig heen te gaan.',
    accent: '#F2B517',
    label: 'Werk + reizen',
  },
  {
    titel: 'Hotel-baan + vrijwilligerswerk bij zeeschildpadden',
    desc: 'Een vast contract bij een hotel (front office of F&B) plus een paar uur per week bij een natuurbeschermings-organisatie. Stabiel inkomen, maar ook iets dat verder gaat dan werken voor het rondkomen.',
    accent: '#3EAD6E',
    label: 'Werk + impact',
  },
  {
    titel: 'Au pair bij een expat-gezin + portfolio bouwen',
    desc: 'Kost en inwoning bij een Nederlandse of Amerikaanse familie op het eiland, met zakgeld. Tijd over om aan een eigen project te werken: fotografie, vlog, schrijven. Een tussenjaar dat je voorbereidt op wat erna komt.',
    accent: '#E8507A',
    label: 'Werk + creatief',
  },
]

const SECTOREN = [
  {
    naam: 'Toerisme en hotels',
    beeld: 'Front desk in een resort op Jan Thiel, recreation crew bij een groot hotel, of housekeeping in een kleinere boutique.',
    waar: 'Hotelketens en resorts in Willemstad-centrum, Jan Thiel, Piscadera en aan de oostkant van het eiland.',
    aanstelling: 'Vaak 6 maanden contract, soms 12 maanden. Salaris ANG 1.500-2.000 plus eventueel service charge.',
    accent: '#D4522A',
  },
  {
    naam: 'Horeca',
    beeld: 'Bediening op een beach club tijdens zonsondergang, of bartender in een trendy Pietermaai-restaurant. Tegen het einde van je shift hoor je nog muziek op de boulevard.',
    waar: 'Mambo Beach Boulevard (grootste cluster), Pietermaai, Jan Thiel, lokale terrassen in Punda en Otrobanda.',
    aanstelling: 'Vaak oproep- of nuluur-contract. ANG 1.200-1.500 plus tips, die kunnen op drukke avonden net zo veel zijn.',
    accent: '#F2B517',
  },
  {
    naam: 'Watersport en diving',
    beeld: 'Boat crew bij een dive shop, snorkel guide voor toeristen, of doorgroeien naar Divemaster en daarna PADI Instructor. Werken op het water en wonen aan het rif.',
    waar: 'Dive shops aan de zuidwestkust en rond Willemstad. Watersport-scholen op Mambo Beach en Jan Thiel.',
    aanstelling: 'Begin vaak met een DM-cursus van 4-6 weken, daarna betaald werk. Investering vooraf €1.500-3.000 voor cursussen.',
    accent: '#1A7EC5',
  },
  {
    naam: 'Vrijwilligerswerk',
    beeld: 'Tellen van zeeschildpadden bij dageraad, koraalrif-monitoring, dierverzorging of jeugdwerk. Geen geld, wel verhalen.',
    waar: 'Marien-onderzoek, natuurbescherming, dierenopvang, jeugdwerk en zorginstellingen. Te vinden via expat-Facebook-groepen en directe NGO-websites.',
    aanstelling: 'Meestal kost en inwoning gratis, geen of klein zakgeld (€100-300/mnd). Programma\'s 3-6 maanden.',
    accent: '#3EAD6E',
  },
  {
    naam: 'Au pair of nanny',
    beeld: 'Onderdeel van een expat-gezin worden, kinderen ophalen van school, eigen kamer in een huis aan de zee. Niet anoniem, wel intensief.',
    waar: 'Geen formele NL-organisatie op Curaçao, vaak via netwerk of expat-Facebook-groepen.',
    aanstelling: 'Kost en inwoning plus zakgeld. Match en vertrouwen nemen tijd om op te bouwen, dus vooraf regelen.',
    accent: '#E8507A',
  },
  {
    naam: 'Marketing, content en creatief',
    beeld: 'Social media draaien voor een lokaal restaurant, fotografie voor een hotelketen, of eigen content opbouwen terwijl je leeft van project-werk.',
    waar: 'Lokale bedrijven die hulp zoeken bij website, social en fotografie. Combineren van 2-3 klanten gelijktijdig is gebruikelijk.',
    aanstelling: 'Vaak per project, €15-30/uur. Onregelmatig inkomen, wel veel vrijheid.',
    accent: '#D4522A',
  },
]

const ZOEK_BESLISBOOM = [
  { soort: 'Hotel of grote keten', aanpak: 'Vooraf vanuit NL', reden: 'Selectie loopt structureel, vacatures zijn vooraf bekend, contracten op afstand.' },
  { soort: 'Dive shop / Instructor', aanpak: 'Vooraf vanuit NL', reden: 'DM-cursus en werk worden vaak gecombineerd. Plekken vullen vroeg in hoogseizoen.' },
  { soort: 'Horeca op het eiland', aanpak: 'Op het eiland', reden: 'Fysiek langsgaan met cv werkt beter dan online sollicitaties.' },
  { soort: 'Vrijwilligerswerk en NGO', aanpak: 'Vooraf vanuit NL', reden: 'Programma\'s hebben vaste startdatums.' },
  { soort: 'Au pair', aanpak: 'Vooraf vanuit NL', reden: 'Match en vertrouwen nemen tijd om op te bouwen.' },
]

const PAST_WEL = [
  'Je bent zelfstandig en neemt eigen initiatief',
  'Je kunt 6 tot 12 maanden zonder vast inkomen overbruggen',
  'Je hebt geen DUO of basisbeurs nodig om rond te komen',
  'Je vindt werkervaring en avontuur belangrijker dan sparen',
  'Je kunt omgaan met onzekerheid in de eerste werk- en woonweken',
]

const PAST_MINDER = [
  'Je hebt weinig financiële buffer voor de eerste maand',
  'Je verwacht dat werk vooraf vanzelf geregeld is zonder eigen moeite',
  'Je zoekt vooral een goedkope zonbestemming (dan beter een vakantie)',
  'Formele onzekerheid voelt voor jou stressvol',
]

export default function Tussenjaar() {
  return (
    <>
      <ReadingProgress />
      <SEO schema={SCHEMA} />
      <PageHero
        eyebrow="Tussenjaar op Curaçao"
        title="Tussenjaar werken op Curaçao: wat moet je weten?"
        subtitle="Voor wie geen stage doet maar wel een jaar op het eiland wil werken. Andere route qua verblijf, andere financiële plaat. Een eerlijke check vooraf."
        accentColor="#E8507A"
        image="/img/hero-tussenjaar.jpg"
        imageAlt="Sfeerbeeld van een tussenjaar op Curaçao"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Sectie 1: TL;DR — scan-laag bovenaan */}
        <section className="mb-14">
          <div className="card" style={{ borderLeft: '3px solid #E8507A' }}>
            <p className="text-[10px] font-medium tracking-widest uppercase mb-3" style={{ color: '#E8507A' }}>
              Als je maar 30 seconden hebt
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="shrink-0" style={{ color: '#E8507A' }}>·</span>
                <span>Tussenjaar op Curaçao is meestal <strong className="text-dark">ervaring + rondkomen, niet sparen</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0" style={{ color: '#E8507A' }}>·</span>
                <span>Werk vinden lukt vaak, maar <strong className="text-dark">zelden zonder eigen initiatief</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0" style={{ color: '#E8507A' }}>·</span>
                <span>Verblijfsstatus en werkroute check je <strong className="text-dark">vooraf op de officiële bron</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0" style={{ color: '#E8507A' }}>·</span>
                <span>Reken op een <strong className="text-dark">buffer van €1.500 – €3.000</strong> voor je vertrekt.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sectie 2: Past dit bij jou? (eerlijke filter, naar voren) */}
        <section className="mb-14">
          <h2 className="section-label">Past een tussenjaar op Curaçao bij jou?</h2>
          <ClaimLabel kind="richtlijn" />
          <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl">
            Voordat je verder leest: check of dit überhaupt bij je past. Een tussenjaar op Curaçao is geen vakantie met bijbaantje.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
              <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: '#3EAD6E' }}>Past vaak wel</p>
              <ul className="flex flex-col gap-2">
                {PAST_WEL.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-sage shrink-0">+</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
              <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: '#D4522A' }}>Past vaak minder</p>
              <ul className="flex flex-col gap-2">
                {PAST_MINDER.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-terra shrink-0">−</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Sectie 3: Verblijf en werken (verzacht, prominente disclaimer) */}
        <section className="mb-14">
          <h2 className="section-label">De regels: verblijf en werken</h2>
          <ClaimLabel kind="officieel" bron="Toelatingsorganisatie / Immigratiedienst Curaçao" />
          <div className="card mb-4">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Voor Nederlanders gelden andere regels dan voor stagiairs. Drie kernpunten om rekening mee te houden:
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <span className="text-sky shrink-0 font-medium">1.</span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Als Nederlander mag je <span className="font-medium text-dark">tot zes maanden binnen een jaar</span> op Curaçao verblijven zonder verklaring vooraf. Dat dekt <strong className="text-dark">verblijf</strong>, niet automatisch <strong className="text-dark">werken</strong>.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-sky shrink-0 font-medium">2.</span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Voor betaald werk loopt de officiële route via een <span className="font-medium text-dark">verklaring van rechtswege</span> (categorie <em>"Werken / Eenmanszaak"</em>). Of die direct nodig is hangt af van je situatie — controleer dat vooraf bij de Immigratiedienst.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-sky shrink-0 font-medium">3.</span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Bij verblijf <span className="font-medium text-dark">langer dan zes maanden</span> is een verklaring sowieso verplicht. Beslistermijn vier maanden. Nederlanders en Amerikanen mogen op Curaçao wachten.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-amber-400 bg-amber-50 px-4 py-3 rounded mt-5 text-sm text-gray-700 leading-relaxed">
              <strong className="text-dark">Doe altijd je eigen check op de officiële bron.</strong>{' '}
              StageStart is een informatiegids, geen juridisch advies. Jouw route hangt af van duur, soort werk en persoonlijke situatie. Check altijd de{' '}
              <a href="https://immigrationcur.org/dep/van-rechtswege/" target="_blank" rel="noopener noreferrer" className="text-sky underline">Immigratiedienst Curaçao</a>
              {' '}en Toelatingsorganisatie vóór vertrek.
            </div>
          </div>

          <div className="card border-l-4" style={{ borderLeftColor: '#F2B517' }}>
            <p className="text-sm font-medium text-dark mb-2">DI Card vóór elke aankomst</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Vlieg je naar Curaçao vanuit het buitenland, dan vul je vóór vertrek een Digital Immigration Card in via <a href="https://dicardcuracao.com" target="_blank" rel="noopener noreferrer" className="text-sky underline">dicardcuracao.com</a>. Gratis, binnen zeven dagen voor vertrek. Dit is een aankondiging van je aankomst, geen vergunning om te wonen of te werken.
            </p>
          </div>
        </section>

        {/* Sectie 4: Hoe ziet zo'n jaar eruit? (scenario's met nuchter kader) */}
        <section className="mb-14">
          <h2 className="section-label">Hoe ziet zo'n jaar eruit?</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl">
            Vier voorbeelden van hoe een tussenjaar er in de praktijk uit kan zien. Geen standaardpaden: elk hiervan vraagt eigen netwerk, initiatief en een buffer om de eerste weken mee te overbruggen. De meeste tussenjaar-werkers landen uiteindelijk op een combinatie die met de maanden vorm krijgt — niet op iets dat ze vooraf hadden bedacht.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {COMBINATIES.map((c) => (
              <div key={c.titel} className="card" style={{ borderLeft: `3px solid ${c.accent}` }}>
                <p className="text-[10px] font-medium tracking-widest uppercase mb-2" style={{ color: c.accent }}>
                  {c.label}
                </p>
                <p className="font-serif text-lg text-dark leading-snug mb-2">{c.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectie 5: Welk werk kun je doen? (sectoren) */}
        <section className="mb-14">
          <h2 className="section-label">Welk werk kun je doen?</h2>
          <ClaimLabel kind="richtlijn" />
          <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl">
            Zes sectoren waar tussenjaar-werkers vaak terechtkomen. Geen specifieke werkgevers genoemd; wij beschrijven wat er is, niet wat goed is.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {SECTOREN.map((s) => (
              <div key={s.naam} className="card" style={{ borderLeft: `3px solid ${s.accent}` }}>
                <p className="text-sm font-medium text-dark mb-2">{s.naam}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-3 italic">
                  {s.beeld}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed mb-1">
                  <span className="font-medium text-gray-600">Waar:</span> {s.waar}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="font-medium text-gray-600">Aanstelling:</span> {s.aanstelling}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectie 6: Hoe vind je werk? */}
        <section className="mb-14">
          <h2 className="section-label">Hoe vind je werk?</h2>
          <ClaimLabel kind="ervaring" />
          <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl">
            Vooraf regelen vanuit Nederland of pas op het eiland? Dat hangt af van het soort werk dat je zoekt.
          </p>

          <div className="card mb-4">
            <ul className="flex flex-col gap-3">
              {ZOEK_BESLISBOOM.map((row) => (
                <li key={row.soort} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 py-2 border-b border-gray-100 last:border-0">
                  <span className="text-sm font-medium text-dark sm:w-56 shrink-0">{row.soort}</span>
                  <span className="text-sm text-sage font-medium sm:w-36 shrink-0">{row.aanpak}</span>
                  <span className="text-xs text-gray-500 leading-relaxed">{row.reden}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="card">
              <p className="text-xs font-medium text-dark mb-3 uppercase tracking-wider">Vooraf vanuit Nederland</p>
              <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Facebook-groepen voor expats en stagiairs/tussenjaars op Curaçao</li>
                <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Lokale vacaturesites: amjjobs.cw, vacaturesite.cw, Indeed Curaçao</li>
                <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Direct mailen naar hotels en dive shops, 2-3 maanden vooraf</li>
                <li className="flex gap-2"><span className="text-sky shrink-0">·</span>LinkedIn-zoekactie op "Curaçao" plus jouw sector</li>
              </ul>
            </div>
            <div className="card">
              <p className="text-xs font-medium text-dark mb-3 uppercase tracking-wider">Op het eiland zelf</p>
              <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Deur tot deur met cv (vooral horeca)</li>
                <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Netwerk van huisgenoten en vrienden</li>
                <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Eerste werkbaan typisch binnen 2-4 weken na aankomst</li>
                <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Sollicitatiegesprekken zijn informeler dan in NL</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sectie 7: Wat verdien je, wat kost het (met sterkere disclaimer boven tabel) */}
        <section className="mb-14">
          <h2 className="section-label">Wat verdien je, wat kost het?</h2>
          <ClaimLabel kind="ervaring" />
          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
            Voor de meeste tussenjaar-werkers: <strong className="text-dark">rondkomen plus ervaring, niet sparen</strong>. Lokale lonen liggen onder NL-minimumloon, maar lage uitgaven (gedeeld huis, geen NL-verplichtingen) maken het werkbaar.
          </p>

          <div className="border-l-4 border-amber-400 bg-amber-50 px-4 py-3 rounded mb-4 text-sm text-gray-700 leading-relaxed">
            Onderstaande bedragen zijn <strong className="text-dark">grove indicaties uit praktijkervaring</strong> en wisselen per seizoen, contractvorm, uren en fooien. Geen officieel loonboek — check tijdens je sollicitatie wat de werkgever concreet biedt.
          </div>

          <div className="card mb-4">
            <p className="text-xs font-medium text-dark mb-3 uppercase tracking-wider">Indicatieve maandsalarissen</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li className="flex justify-between gap-3 py-1 border-b border-gray-100"><span>Horeca</span> <span className="font-medium text-dark">ANG 1.200-1.500 + tips</span></li>
              <li className="flex justify-between gap-3 py-1 border-b border-gray-100"><span>Hotel front desk / F&B</span> <span className="font-medium text-dark">ANG 1.500-2.000</span></li>
              <li className="flex justify-between gap-3 py-1 border-b border-gray-100"><span>Divemaster</span> <span className="font-medium text-dark">ANG 1.500-2.200 + tips</span></li>
              <li className="flex justify-between gap-3 py-1 border-b border-gray-100"><span>PADI Instructor</span> <span className="font-medium text-dark">ANG 2.500-3.500 + tips</span></li>
              <li className="flex justify-between gap-3 py-1 border-b border-gray-100"><span>Au pair</span> <span className="font-medium text-dark">ANG 600-1.000 + kost en inwoning</span></li>
              <li className="flex justify-between gap-3 py-1 border-b border-gray-100"><span>Vrijwilligerswerk</span> <span className="font-medium text-dark">ANG 0-300 + meestal kost en inwoning</span></li>
              <li className="flex justify-between gap-3 py-1"><span>Marketing of creatief</span> <span className="font-medium text-dark">€600-1.500/mnd, project-basis</span></li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">
              ANG 1.000 is ongeveer €500.
            </p>
          </div>

          <p className="text-sm font-medium text-dark mb-3">Hoeveel buffer heb je nodig om mee te beginnen?</p>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
              <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: '#3EAD6E' }}>Werk vooraf rond</p>
              <p className="text-2xl font-serif text-dark mb-1">€1.500</p>
              <p className="text-xs text-gray-500 leading-relaxed">Eerste maand huur, eten, opstart. Salaris komt 3-4 weken later binnen.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#F2B517' }}>
              <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: '#F2B517' }}>Werk nog niet rond</p>
              <p className="text-2xl font-serif text-dark mb-1">€2.500-3.000</p>
              <p className="text-xs text-gray-500 leading-relaxed">1-2 maanden zonder inkomen overbruggen tot je werk vindt.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
              <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: '#1A7EC5' }}>Plus duik-traject</p>
              <p className="text-2xl font-serif text-dark mb-1">+€1.500-3.000</p>
              <p className="text-xs text-gray-500 leading-relaxed">Extra voor PADI-cursussen tot Instructor-niveau.</p>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Maandkosten op het eiland zijn vergelijkbaar met die van stagiairs (€1.100-1.500/mnd). Zie <Link to="/kosten" className="text-sky underline">Kosten</Link> voor het volledige beeld.
          </p>
        </section>

        {/* Sectie 8: Slot-advies */}
        <section className="mb-14">
          <h2 className="section-label">Wat je vóór vertrek écht regelt</h2>
          <ClaimLabel kind="richtlijn" />
          <div className="flex flex-col gap-3">
            <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
              <p className="text-sm font-medium text-dark mb-1">1. Buffer-budget zonder DUO</p>
              <p className="text-sm text-gray-600 leading-relaxed">Reken niet op het eerste salaris in de eerste maand. Zie de buffer-cijfers in de financiële sectie hierboven.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
              <p className="text-sm font-medium text-dark mb-1">2. Verblijfsroute via officiële bron</p>
              <p className="text-sm text-gray-600 leading-relaxed">Je situatie bepaalt welke route geldt. Doe de check bij de Immigratiedienst, niet alleen op StageStart of Reddit.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
              <p className="text-sm font-medium text-dark mb-1">3. Verzekering voor de hele periode</p>
              <p className="text-sm text-gray-600 leading-relaxed">Sommige NL-zorgverzekeraars hebben een maximale buitenlandtermijn (vaak 6 of 12 maanden). Check expliciet of je voor 6-12 maanden gedekt bent. Zie ook <Link to="/verzekering" className="text-sky underline">Verzekering</Link>.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#F2B517' }}>
              <p className="text-sm font-medium text-dark mb-1">4. Wonen en vervoer regelen of bewust niet</p>
              <p className="text-sm text-gray-600 leading-relaxed">Korte short-stay voor de eerste week en daarna ter plaatse zoeken werkt voor velen prima. Zie <Link to="/wonen" className="text-sky underline">Wonen</Link> en <Link to="/auto" className="text-sky underline">Auto</Link>.</p>
            </div>
          </div>
        </section>

        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Heb je tussenjaar gedaan op Curaçao?</p>
            <p className="text-sm text-gray-600">Deel je verhaal en help anderen die dit overwegen.</p>
          </div>
          <Link to="/verhalen" className="btn-terra shrink-0">Naar verhalen →</Link>
        </div>

        <div className="mt-10">
          <RelatedPages items={RELATED} />
        </div>

        <LastChecked
          date="2026-04-20"
          bron="Eigen redactie + ervaringen tussenjaar-werkers + Toelatingsorganisatie en Immigratiedienst Curaçao"
          gevoeligheid="middel"
        />
      </div>
    </>
  )
}
