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
  { to: '/vergunning', label: 'Stagevergunning uitgelegd', desc: 'Voor de volledige stage-procedure. Voor tussenjaar geldt de verklaring van rechtswege via de werkcategorie.' },
  { to: '/kosten', label: 'Kosten en budget', desc: 'Maandelijkse richtlijn en eenmalige opstartkosten.' },
  { to: '/verhalen', label: 'Verhalen van stagiairs', desc: 'Heb je tussenjaar gedaan op Curaçao? Deel je verhaal.' },
]

const SCHEMA = articleSchema({
  headline: 'Tussenjaar werken op Curaçao: wat is anders dan stage?',
  description: 'Informatieve gids voor Nederlanders die een tussenjaar willen werken op Curaçao. Verblijfsstatus via verklaring van rechtswege, werk zoeken, en financiële vergelijking met een stage.',
  path: '/tussenjaar',
  dateModified: '2026-04-20',
})

const PAST_WEL = [
  'Je bent zelfstandig en neemt eigen initiatief',
  'Je kunt 6 tot 12 maanden zonder vast inkomen overbruggen',
  'Je hebt geen DUO of basisbeurs nodig om rond te komen',
  'Je kunt omgaan met onzekerheid in de eerste werk- en woonweken',
  'Je vindt werkervaring belangrijker dan sparen',
  'Je neemt bewust een tijdelijke pauze tussen studies of werk',
]

const PAST_MINDER = [
  'Je hebt weinig financiële buffer voor de eerste maand',
  'Je verwacht dat werk vooraf vanzelf geregeld is zonder eigen moeite',
  'Je zoekt vooral een goedkope zonbestemming (dan beter een vakantie)',
  'Formele onzekerheid voelt voor jou stressvol',
  'Je bent afhankelijk van een vaste maandelijkse uitkering die buiten studieverband stopt',
]

const SECTOREN = [
  {
    naam: 'Toerisme en hotels',
    waar: 'Grote internationale hotelketens en lokale resorts in Willemstad-centrum, op Jan Thiel, in Piscadera en op de oostkant van het eiland.',
    functies: 'Front office, F&B, housekeeping, recreation crew, animatie.',
    aanstelling: 'Vaak 6 maanden contract, soms 12 maanden, oproep mogelijk.',
    accent: '#D4522A',
  },
  {
    naam: 'Horeca',
    waar: 'Mambo Beach Boulevard (grootste cluster), Pietermaai (trendy bars en restaurants), Jan Thiel (beach clubs), Punda en Otrobanda (lokale terrasrestaurants).',
    functies: 'Bediening, bar, runner, gastvrouw, kok-assistent.',
    aanstelling: 'Vaak oproep- of nuluur-contract, maar wel structureel werk.',
    accent: '#F2B517',
  },
  {
    naam: 'Watersport en diving',
    waar: 'Dive shops aan de zuidwestkust van het eiland en rond Willemstad. Watersport-scholen op Mambo Beach en Jan Thiel.',
    functies: 'Divemaster (na DM-cursus), Open Water Instructor (na IDC), boat crew, snorkel guide, kitesurf instructor.',
    aanstelling: 'Tussenjaar begint vaak met DM-cursus (4-6 weken), daarna betaald werk. PADI-traject naar Instructor kost €1.500-3.000 aan cursussen.',
    accent: '#1A7EC5',
  },
  {
    naam: 'Vrijwilligerswerk',
    waar: 'Marien onderzoek- en natuurbescherming-organisaties (zeeschildpadden, koraalriffen), dierenopvang, jeugdwerk, zorginstellingen. Te vinden via Facebook-groepen voor expats en directe websites van NGOs.',
    functies: 'Veldonderzoek, dierverzorging, administratie, fondsenwerving, jeugdactiviteiten.',
    aanstelling: 'Vaak gratis kost en inwoning, geen salaris. Soms €100-300 zakgeld per maand. Duur 3-6 maanden typisch.',
    accent: '#3EAD6E',
  },
  {
    naam: 'Au pair of nanny',
    waar: 'Geen formele NL-organisatie op Curaçao, vaak via netwerk. Expat-families (Nederlanders, Amerikanen die op CW wonen) zoeken kinderoppas.',
    functies: 'Kinderopvang in huis, huishoudelijke hulp, meerij bij schoolroutes.',
    aanstelling: 'Kost en inwoning plus zakgeld. Vinden via Facebook-groepen en persoonlijke contacten.',
    accent: '#E8507A',
  },
  {
    naam: 'Retail',
    waar: 'Winkels in Punda en Otrobanda (centrum Willemstad), shopping malls aan de zuidkant.',
    functies: 'Verkoop, kassa, voorraad, klantcontact.',
    aanstelling: 'Oproep- of vast contract.',
    accent: '#F2B517',
  },
  {
    naam: 'Marketing, content en creatief',
    waar: 'Voor wie creatief werkt of social media skills heeft. Eigen content (blog, vlog, social media) of voor lokale bedrijven.',
    functies: 'Content creator, fotograaf, social media manager.',
    aanstelling: 'Variabel, vaak project-basis €15-30 per uur. Combinatie: werken voor 2-3 lokale bedrijven gelijktijdig.',
    accent: '#D4522A',
  },
  {
    naam: 'NGO en stichting',
    waar: 'Sport- en jeugdorganisaties, community-werk, kleinere NGOs op het eiland.',
    functies: 'Betaalde junior-functies in coördinatie, activiteitenbegeleiding, administratie.',
    aanstelling: 'Vaak via persoonlijk contact of Facebook-vacature. Salaris ANG 1.500-2.500 voor junior-functies.',
    accent: '#1A7EC5',
  },
]

const SALARIS = [
  { sector: 'Horeca', maand: 'ANG 1.200-1.500', extra: '+ tips', totaal: 'ANG 1.800-3.000' },
  { sector: 'Hotel front desk / F&B', maand: 'ANG 1.500-2.000', extra: '+ service charge', totaal: 'ANG 1.800-2.500' },
  { sector: 'Divemaster', maand: 'ANG 1.500-2.200', extra: '+ tips', totaal: 'ANG 2.000-3.000' },
  { sector: 'Dive Instructor', maand: 'ANG 2.500-3.500', extra: '+ tips, hoogseizoen meer', totaal: 'ANG 3.000-5.000' },
  { sector: 'Vrijwilligerswerk', maand: 'ANG 0-300', extra: '+ kost en inwoning vaak inclusief', totaal: 'ANG 0-300' },
  { sector: 'Au pair', maand: 'ANG 600-1.000', extra: '+ kost en inwoning', totaal: 'ANG 600-1.000' },
  { sector: 'Retail', maand: 'ANG 1.300-1.800', extra: '+ commissie soms', totaal: 'ANG 1.300-2.000' },
  { sector: 'Marketing / creatief', maand: 'Variabel', extra: 'Vaak per project', totaal: '€600-1.500/mnd' },
]

const ZOEK_BESLISBOOM = [
  { soort: 'Hotel of grote keten', aanpak: 'Vooraf vanuit NL', reden: 'Selectieproces is structureel, vacatures vooraf bekend, contracten op afstand.' },
  { soort: 'Dive shop / Divemaster / Instructor', aanpak: 'Vooraf vanuit NL', reden: 'DM-cursus en werk vaak gecombineerd, plaatsen vullen zich vroeg in hoogseizoen (dec-april).' },
  { soort: 'Horeca (bar, restaurant, beach club)', aanpak: 'Op het eiland', reden: 'Fysiek langsgaan met cv werkt beter dan online sollicitaties.' },
  { soort: 'Vrijwilligerswerk en NGO', aanpak: 'Vooraf vanuit NL', reden: 'Programma\'s hebben vaste startdatums.' },
  { soort: 'Au pair', aanpak: 'Vooraf vanuit NL', reden: 'Netwerk en match nemen tijd.' },
]

const BUFFER_TIERS = [
  { situatie: 'Werk vooraf geregeld vanuit NL', buffer: 'Minimaal €1.500 voor eerste maand (huur, eten, opstart)' },
  { situatie: 'Werk nog niet geregeld bij vertrek', buffer: '€2.500-3.000 (1-2 maanden zonder inkomen overbruggen)' },
  { situatie: 'Plus duikcursus of certificaat-traject', buffer: 'Extra €1.500-3.000 voor PADI Instructor traject' },
]

const COMBINATIES = [
  { titel: 'Werken + duikbrevet', desc: '4-6 weken DM-cursus, daarna betaald als Divemaster.' },
  { titel: 'Werken + vrijwilligerswerk', desc: 'Bijvoorbeeld horeca-baan plus een paar uur per week voor natuurbescherming of zeeschildpadden.' },
  { titel: 'Werken + reizen', desc: 'Vanaf Curaçao vluchten naar Aruba, Bonaire en Colombia voor korte trips.' },
  { titel: 'Werken + creatief project', desc: 'Portfolio bouwen voor fotografie of video terwijl je in de branche werkt.' },
  { titel: 'Werken + cursus', desc: 'PADI, kitesurf-instructor, of talen (Spaans of Papiaments).' },
]

export default function Tussenjaar() {
  return (
    <>
      <ReadingProgress />
      <SEO schema={SCHEMA} />
      <PageHero
        eyebrow="Tussenjaar op Curaçao"
        title="Werken op Curaçao zonder stage: wat is anders?"
        subtitle="Voor wie geen stage doet maar wel het eilandleven wil ervaren. Andere route qua verblijf, ander werk, andere financiële plaat. Wat blijft hetzelfde, en wat moet je écht anders aanpakken?"
        accentColor="#E8507A"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Sectie 1: wat is tussenjaar op Curaçao? */}
        <section className="mb-10">
          <h2 className="section-label">Wat is tussenjaar werken op Curaçao?</h2>
          <ClaimLabel kind="richtlijn" />
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Een tussenjaar op Curaçao is een tijdelijk verblijf van 6 tot 12 maanden waarin je werkt om je kosten te dekken en tegelijk het eilandleven ervaart. Geen stage (dus geen schoolverplichting en geen stagebegeleider), geen vakantie (je werkt actief), en geen emigratie (je komt terug).
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Twee varianten komen veel voor. <strong className="text-dark">Puur werken</strong> om eilandervaring op te doen, of <strong className="text-dark">werken plus iets erbij</strong>: duikbrevet halen, vrijwilligerswerk doen, of kortere reizen maken door het Caribisch gebied.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Belangrijk verschil met stage: je krijgt geen DUO-basisbeurs buiten studieverband. Wel kun je lokaal een salaris verdienen. Voor de meeste tussenjaar-werkers draait het om break-even plus ervaring, niet om sparen.
            </p>
          </div>
        </section>

        {/* Sectie 2: is dit slim voor jou? */}
        <section className="mb-10">
          <h2 className="section-label">Is dit een slim plan voor jou?</h2>
          <ClaimLabel kind="richtlijn" />
          <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-2xl">
            Voordat je doorleest, even stilstaan of dit bij je past. Tussenjaar op Curaçao klinkt romantisch maar is in de praktijk een project waarin je veel zelf moet regelen.
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

        {/* Sectie 3: verblijfsstatus */}
        <section className="mb-10">
          <h2 className="section-label">Verblijfsstatus en hoe dit anders werkt dan stage</h2>
          <ClaimLabel kind="officieel" bron="Toelatingsorganisatie / Immigratiedienst Curaçao" />
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Voor Nederlanders die willen werken op Curaçao gelden andere regels dan voor stage. Drie kernfeiten die je vooraf moet kennen.
            </p>
            <div className="flex flex-col gap-5">
              <div className="border-l-2 pl-4" style={{ borderColor: '#1A7EC5' }}>
                <p className="text-sm font-medium text-dark mb-1">1. Vrije termijn voor Nederlanders</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nederlanders die onder de Landsverordening Toelating en Uitzetting (LTU) vallen mogen tot maximaal <strong className="text-dark">zes maanden binnen een jaar</strong> in Curaçao verblijven zonder dat er al een verklaring van rechtswege is afgegeven.
                </p>
              </div>
              <div className="border-l-2 pl-4" style={{ borderColor: '#D4522A' }}>
                <p className="text-sm font-medium text-dark mb-1">2. Werken vereist een aparte check, ook binnen die zes maanden</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Wie in Curaçao wil <strong className="text-dark">werken</strong> moet vooraf controleren of er direct een verklaring van rechtswege nodig is. De vrije termijn dekt verblijf, maar de werkroute loopt via de categorie <em>"Werken / Eenmanszaak"</em> binnen de verklaring van rechtswege. Reken er niet op dat toeristenstatus en betaald lokaal werk automatisch samengaan.
                </p>
              </div>
              <div className="border-l-2 pl-4" style={{ borderColor: '#3EAD6E' }}>
                <p className="text-sm font-medium text-dark mb-1">3. Bij langer verblijf in elk geval verklaring nodig</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Bij verblijf langer dan zes maanden binnen een jaar is een verklaring van rechtswege verplicht. Aanvragen bij de Immigratiedienst Curaçao. Beslistermijn is vier maanden. <strong className="text-dark">Nederlanders en Amerikanen mogen de beslissing op het eiland afwachten.</strong>
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mt-5 italic">
              <strong className="text-dark">Controleer altijd de officiële bron.</strong> Voor je definitieve route, exacte bedragen en actuele documenten geldt altijd de site van de Toelatingsorganisatie en de Immigratiedienst. Regelgeving kan wijzigen, en je individuele situatie (duur, soort werk, partner mee) bepaalt welke route precies geldt.
            </p>
          </div>

          {/* DI Card apart blok */}
          <div className="card border-l-4 mt-4" style={{ borderLeftColor: '#F2B517' }}>
            <p className="text-sm font-medium text-dark mb-2">DI Card: niet hetzelfde als verblijfsrecht</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Vlieg je naar Curaçao vanuit het buitenland, dan moet je vóór vertrek de Digital Immigration Card invullen via <a href="https://dicardcuracao.com" target="_blank" rel="noopener noreferrer" className="text-sky underline">dicardcuracao.com</a>. Binnen zeven dagen voor vertrek invullen, gratis. Geldt voor alle internationale reizigers; inwoners van Curaçao zijn uitgezonderd.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-dark">Belangrijk:</strong> de DI Card is een aankondiging van je aankomst, geen vergunning om te werken of te wonen. Het ontslaat je niet van je verantwoordelijkheid om de juiste verblijfs- of werkroute te checken.
            </p>
          </div>

          {/* Vergelijkingstabel stage vs tussenjaar */}
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500"></th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Stage (NL'er)</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Tussenjaar (NL'er)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-dark">Route</td>
                  <td className="px-4 py-3 text-gray-600">Stagevergunning OF verklaring van rechtswege</td>
                  <td className="px-4 py-3 text-gray-600">Verklaring van rechtswege (categorie Werken/Eenmanszaak)</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/30">
                  <td className="px-4 py-3 font-medium text-dark">Werkvergunning apart?</td>
                  <td className="px-4 py-3 text-gray-600">Niet relevant (stage is onbetaald)</td>
                  <td className="px-4 py-3 text-gray-600">Loopt via verklaring van rechtswege, niet apart</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-dark">Leges stagevergunning</td>
                  <td className="px-4 py-3 text-gray-600">XCG 525 (~€263)</td>
                  <td className="px-4 py-3 text-gray-600">N.v.t., kosten verklaring zie Immigratiedienst</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/30">
                  <td className="px-4 py-3 font-medium text-dark">Beslistermijn</td>
                  <td className="px-4 py-3 text-gray-600">Vier maanden</td>
                  <td className="px-4 py-3 text-gray-600">Vier maanden</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-dark">Wachten op uitspraak</td>
                  <td className="px-4 py-3 text-gray-600">Mag op CW (NL'er en US-burger)</td>
                  <td className="px-4 py-3 text-gray-600">Mag op CW (NL'er en US-burger)</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/30">
                  <td className="px-4 py-3 font-medium text-dark">DI Card</td>
                  <td className="px-4 py-3 text-gray-600">Verplicht voor elke aankomst</td>
                  <td className="px-4 py-3 text-gray-600">Verplicht voor elke aankomst</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sectie 4: hoe vind je werk */}
        <section className="mb-10">
          <h2 className="section-label">Hoe vind je werk?</h2>
          <ClaimLabel kind="ervaring" />
          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
            Vooraf regelen vanuit Nederland of ter plaatse op het eiland? Dat hangt af van het soort werk dat je zoekt.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Soort werk</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Aanbevolen aanpak</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Waarom</th>
                </tr>
              </thead>
              <tbody>
                {ZOEK_BESLISBOOM.map((row, i) => (
                  <tr key={row.soort} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                    <td className="px-4 py-3 font-medium text-dark">{row.soort}</td>
                    <td className="px-4 py-3">
                      <span className="text-sage font-medium">{row.aanpak}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.reden}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="card">
              <p className="text-xs font-medium text-dark mb-3 uppercase tracking-wider">Vooraf vanuit Nederland</p>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Facebook-groepen: "Werken op Curaçao", "Stagiairs en tussenjaars Curaçao", "Nederlanders op Curaçao"</li>
                <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Vacaturesites: amjjobs.cw, vacaturesite.cw, Indeed Curaçao</li>
                <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Direct mailen: hotels en dive shops 2-3 maanden vooraf met cv en motivatie</li>
                <li className="flex gap-2"><span className="text-sky shrink-0">·</span>LinkedIn: zoek op "Curaçao" plus sector</li>
                <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Stage-bureaus met tussenjaar-programma's bestaan (bv. Wereldstap)</li>
              </ul>
            </div>
            <div className="card">
              <p className="text-xs font-medium text-dark mb-3 uppercase tracking-wider">Op het eiland zelf</p>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Deur tot deur met cv werkt beter voor horeca dan online solliciteren</li>
                <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Netwerk via huisgenoten, veel eerste banen komen via doorverwijzing</li>
                <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Sollicitatiegesprekken zijn informeler dan NL, maar nette kleding blijft standaard</li>
                <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Eerste werkbaan meestal binnen 2-4 weken na aankomst</li>
                <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Kom met een buffer van €1.500-2.000 voor die eerste weken</li>
              </ul>
            </div>
          </div>

          <div className="card border-l-4 mt-4" style={{ borderLeftColor: '#1A7EC5' }}>
            <p className="text-sm font-medium text-dark mb-2">Voor diving specifiek</p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Mail dive shops 2-3 maanden vooraf met je PADI-niveau en wanneer je beschikbaar bent</li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Veel shops bieden "stagiair-pakketten" die DM-cursus plus werk combineren</li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Hoogseizoen is december tot april, dan is er veel kans op werk</li>
            </ul>
          </div>
        </section>

        {/* Sectie 5: welke soorten werk zijn er */}
        <section className="mb-10">
          <h2 className="section-label">Welke soorten werk zijn er?</h2>
          <ClaimLabel kind="ervaring" />
          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
            Hieronder sectoren en geografische clusters waar tussenjaar-werkers vaak terechtkomen. Geen specifieke bedrijfsnamen; wij noemen wat er is, niet wat goed is.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {SECTOREN.map((s) => (
              <div
                key={s.naam}
                className="card"
                style={{ borderLeft: `3px solid ${s.accent}` }}
              >
                <p className="text-sm font-medium text-dark mb-2">{s.naam}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">
                  <span className="font-medium text-gray-600">Waar:</span> {s.waar}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">
                  <span className="font-medium text-gray-600">Functies:</span> {s.functies}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="font-medium text-gray-600">Aanstelling:</span> {s.aanstelling}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectie 6: wat verdien je ongeveer */}
        <section className="mb-10">
          <h2 className="section-label">Wat verdien je ongeveer?</h2>
          <ClaimLabel kind="ervaring" />
          <div className="card border-l-4 mb-4" style={{ borderLeftColor: '#F2B517' }}>
            <p className="text-sm text-gray-600 leading-relaxed italic">
              Onderstaande bedragen zijn grove indicaties op basis van praktijkervaringen en kunnen per seizoen, contractvorm, uren en fooien sterk verschillen. Geen officieel loonboek; check tijdens je sollicitatie wat de werkgever concreet biedt.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Sector</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Maandsalaris (ANG)</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Extra</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Totaal (richtlijn)</th>
                </tr>
              </thead>
              <tbody>
                {SALARIS.map((row, i) => (
                  <tr key={row.sector} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                    <td className="px-4 py-3 font-medium text-dark">{row.sector}</td>
                    <td className="px-4 py-3 text-gray-600">{row.maand}</td>
                    <td className="px-4 py-3 text-gray-500">{row.extra}</td>
                    <td className="px-4 py-3 text-gray-600">{row.totaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-gray-500 leading-relaxed max-w-2xl">
            <p className="mb-1">ANG 1.000 is ongeveer €500. Lokale lonen liggen onder het Nederlandse minimumloon.</p>
            <p className="mb-1">Voor de meeste tussenjaar-werkers: rondkomen en ervaring, niet sparen.</p>
            <p>Lage uitgaven (gedeeld huis, geen vaste NL-verplichtingen) maken het wel werkbaar.</p>
          </div>
        </section>

        {/* Sectie 7: financiële vergelijking met stage */}
        <section className="mb-10">
          <h2 className="section-label">Hoe verschilt dit financieel van een stage?</h2>
          <ClaimLabel kind="richtlijn" />
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500"></th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Stagiair</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Tussenjaar-werker</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-dark">Inkomsten DUO</td>
                  <td className="px-4 py-3 text-gray-600">€324-600/mnd (basisbeurs)</td>
                  <td className="px-4 py-3 text-gray-600">€0 (geen recht buiten studie)</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/30">
                  <td className="px-4 py-3 font-medium text-dark">OV-vergoeding DUO</td>
                  <td className="px-4 py-3 text-gray-600">€110/mnd</td>
                  <td className="px-4 py-3 text-gray-600">€0</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-dark">Stagevergoeding</td>
                  <td className="px-4 py-3 text-gray-600">€0-500/mnd</td>
                  <td className="px-4 py-3 text-gray-600">N.v.t.</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/30">
                  <td className="px-4 py-3 font-medium text-dark">Lokaal salaris</td>
                  <td className="px-4 py-3 text-gray-600">Meestal niet</td>
                  <td className="px-4 py-3 text-gray-600">€600-1.500/mnd</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-dark">Vergunningskosten eenmalig</td>
                  <td className="px-4 py-3 text-gray-600">±€263 (XCG 525)</td>
                  <td className="px-4 py-3 text-gray-600">Lager via verklaring van rechtswege</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/30">
                  <td className="px-4 py-3 font-medium text-dark">Maandkosten richtlijn</td>
                  <td className="px-4 py-3 text-gray-600">€1.100-1.500</td>
                  <td className="px-4 py-3 text-gray-600">€1.100-1.500 (zelfde)</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-dark">Eenmalige opstartkosten</td>
                  <td className="px-4 py-3 text-gray-600">€1.700-3.300</td>
                  <td className="px-4 py-3 text-gray-600">€1.700-3.300 (zelfde)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm font-medium text-dark mb-3">Bufferlogica voor tussenjaar (drie tiers)</p>
          <div className="flex flex-col gap-2 mb-4">
            {BUFFER_TIERS.map((tier) => (
              <div key={tier.situatie} className="card">
                <p className="text-sm text-gray-700 mb-1"><strong className="text-dark">{tier.situatie}</strong></p>
                <p className="text-xs text-gray-500 leading-relaxed">{tier.buffer}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500">
            Zie <Link to="/kosten" className="text-sky underline">Kosten</Link> voor een compleet overzicht van maandkosten en eenmalige opstartkosten.
          </p>
        </section>

        {/* Sectie 8: combinaties */}
        <section className="mb-10">
          <h2 className="section-label">Combinaties die populair zijn</h2>
          <ClaimLabel kind="ervaring" />
          <div className="grid sm:grid-cols-2 gap-3">
            {COMBINATIES.map((c) => (
              <div key={c.titel} className="card">
                <p className="text-sm font-medium text-dark mb-1">{c.titel}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectie 9: wat blijft hetzelfde */}
        <section className="mb-10">
          <h2 className="section-label">Wat blijft hetzelfde</h2>
          <ClaimLabel kind="richtlijn" />
          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
            Veel van wat op StageStart staat is voor tussenjaar-werkers net zo relevant als voor stagiairs. De praktische onderwerpen overlappen voor ongeveer 70 procent.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link to="/wonen" className="card hover:shadow-md">
              <p className="text-sm font-medium text-dark mb-1">Wonen</p>
              <p className="text-xs text-gray-500 leading-relaxed">Zelfde wijken, zelfde huurprijzen. Studentenhuis, kamer of appartement werkt voor beide doelgroepen.</p>
            </Link>
            <Link to="/auto" className="card hover:shadow-md">
              <p className="text-sm font-medium text-dark mb-1">Auto</p>
              <p className="text-xs text-gray-500 leading-relaxed">Zelfde keuze, zelfde beslisboom. Je woonplek en werkplek bepalen of een auto nodig is.</p>
            </Link>
            <Link to="/eerste-week" className="card hover:shadow-md">
              <p className="text-sm font-medium text-dark mb-1">Eerste week</p>
              <p className="text-xs text-gray-500 leading-relaxed">Voor 95 procent identiek: aankomst, SIM, boodschappen, pinpas testen. Alleen je eerste werkdag ziet er anders uit.</p>
            </Link>
            <Link to="/werken" className="card hover:shadow-md">
              <p className="text-sm font-medium text-dark mb-1">Werkcultuur</p>
              <p className="text-xs text-gray-500 leading-relaxed">Poko poko, hiërarchie, indirecte feedback. Voor tussenjaar-werkers net zo belangrijk als voor stagiairs.</p>
            </Link>
            <Link to="/leven" className="card hover:shadow-md">
              <p className="text-sm font-medium text-dark mb-1">Leven en cultuur</p>
              <p className="text-xs text-gray-500 leading-relaxed">Stranden, eten, Papiaments, gewoontes. Niets verandert aan de eilandervaring zelf.</p>
            </Link>
            <Link to="/verzekering" className="card hover:shadow-md">
              <p className="text-sm font-medium text-dark mb-1">Verzekering</p>
              <p className="text-xs text-gray-500 leading-relaxed">Zelfde NL-basisverzekering dekt spoedzorg. Let wel op: sommige zorgverzekeraars hebben een maximale buitenlandstermijn.</p>
            </Link>
          </div>
        </section>

        {/* Sectie 10: wat moet echt anders */}
        <section className="mb-10">
          <h2 className="section-label">Wat moet je écht anders aanpakken</h2>
          <ClaimLabel kind="richtlijn" />
          <div className="flex flex-col gap-3">
            <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
              <p className="text-sm font-medium text-dark mb-1">1. Buffer-budget zonder DUO</p>
              <p className="text-sm text-gray-600 leading-relaxed">Zie de drie buffer-tiers hierboven. Reken niet op het eerste salaris in de eerste maand: dat komt meestal pas na 3-4 weken binnen.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
              <p className="text-sm font-medium text-dark mb-1">2. Verblijfsroute vooraf checken op officiële bron</p>
              <p className="text-sm text-gray-600 leading-relaxed">Doe de check bij de <a href="https://immigrationcur.org/dep/van-rechtswege/" target="_blank" rel="noopener noreferrer" className="text-sky underline">Immigratiedienst Curaçao</a>, niet alleen op StageStart of Reddit. Jouw situatie (duur verblijf, soort werk) bepaalt welke route precies geldt.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
              <p className="text-sm font-medium text-dark mb-1">3. Werk regelen vooraf of op het eiland</p>
              <p className="text-sm text-gray-600 leading-relaxed">Zie de beslisboom hierboven. Hotels en dive shops vooraf vanuit NL, horeca op het eiland. Vrijwilligerswerk, NGO en au pair vooraf omdat match en programmering tijd kosten.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#F2B517' }}>
              <p className="text-sm font-medium text-dark mb-1">4. Verzekering voor langere periode</p>
              <p className="text-sm text-gray-600 leading-relaxed">Extra reisverzekering voor langere periode overwegen. Sommige NL-zorgverzekeraars hebben maximale termijnen voor buitenlandverblijf (vaak 6 of 12 maanden). Check expliciet of je voor 6-12 maanden op Curaçao volledig gedekt bent.</p>
            </div>
          </div>
        </section>

        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Heb je tussenjaar gedaan op Curaçao?</p>
            <p className="text-sm text-gray-600">Deel je verhaal en help toekomstige tussenjaar-werkers met een eerlijk beeld.</p>
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
