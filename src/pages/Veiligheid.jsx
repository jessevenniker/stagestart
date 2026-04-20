import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import ClaimLabel from '../components/ClaimLabel'
import LastChecked from '../components/LastChecked'

const TIPS = [
  { title: 'Telefoon en waardespullen', desc: 'Neem op feesten alleen cash mee. Laat paspoort en laptop thuis in de kluis. Witte oordopjes vallen op, gebruik zwarte. Houd je telefoon in het openbaar zo veel mogelijk uit het zicht.' },
  { title: 'In de auto', desc: 'Kijk bij het uitstappen rustig om je heen. Word je na een avond gevolgd, rijd dan eerst naar een drukke plek voor je naar huis gaat. Sluit ramen en deuren altijd af.' },
  { title: 'Te voet na donker', desc: 'Ga liever niet alleen op pad. Neem een vriend mee of regel vervoer. Vermijd donkere steegjes en verlaten parkeerplaatsen, ook in vertrouwde buurten.' },
  { title: 'Op het strand', desc: 'Laat geen waardevolle spullen onbewaakt liggen tijdens het zwemmen. Op afgelegen stranden geldt: na zonsondergang weg zijn.' },
  { title: 'Drugs', desc: 'Marihuana en andere drugs zijn illegaal op Curaçao. Ook bezit van kleine hoeveelheden is strafbaar en wordt strikt gehandhaafd. Dit is geen Nederland.' },
]

const NUMMERS = [
  { situatie: 'Politie, brandweer, ambulance (spoed)', nummer: '911' },
  { situatie: 'Politie (niet-spoed)', nummer: '917' },
  { situatie: 'Medische spoed', nummer: '910' },
  { situatie: 'Ambulance', nummer: '912' },
  { situatie: 'Kustwacht', nummer: '913' },
  { situatie: 'Verkeersongeval (Forensys)', nummer: '9223' },
  { situatie: 'Wegenwacht', nummer: '9247' },
  { situatie: 'Ziekenhuis CMC', nummer: '+599 9 462 5100' },
  { situatie: 'Huisarts Nederlandstalig (Centro Medico)', nummer: '+599 9 737 0522' },
]

const RIJDEN = [
  'Je rijdt rechts. Verkeer haalt links in. Op wegen met meerdere rijstroken mag je ook rechts inhalen.',
  'Snelheidslimiet: 40 km/u in bebouwde kom, 60 km/u buiten de stad.',
  'Na regen zijn wegen spekglad. Rijd langzamer.',
  'Doorgaand verkeer heeft bij T-splitsingen voorrang, anders dan in Nederland.',
  'Veel getoeter is normaal en vriendelijk bedoeld, niet agressief.',
  'GPS (Google Maps) werkt goed. Wegwijzers zijn in het Nederlands.',
  'Controleer bij ophalen van de auto altijd of er een reserveband aanwezig is.',
  'Bij een ongeluk: bel Forensys (9223). Verplaats de auto niet.',
]

export default function Veiligheid() {
  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Veiligheid op Curaçao"
        title="Praktisch gedrag, niet sensationeel."
        subtitle="Veiligheid op Curaçao gaat vooral over alertheid en gezond verstand. Hieronder concrete gedragstips per situatie. Geen wijkranglijsten, die geven vaak een vals gevoel van zekerheid."
        accentColor="#D4522A"
        image="/img/hero-veiligheid.jpg"
        imageAlt="Rustige straat in Willemstad bij daglicht, dagelijks straatbeeld op Curaçao"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Anti-drift marker */}
        <div className="mb-8 border-l-2 border-gray-200 pl-4 py-1">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
            Onderdeel van de stagegids StageStart Curaçao. Deze pagina is ondersteunend, voor harde vereisten rond vergunning, kosten en verblijf gelden de officiële bronnen op de kernpagina's.
          </p>
        </div>

        {/* Gedragstips per situatie */}
        <section className="mb-14">
          <h2 className="section-label">Gedrag op locatie</h2>
          <ClaimLabel kind="ervaring" />
          <div className="grid sm:grid-cols-2 gap-3">
            {TIPS.map((tip, i) => {
              const colors = ['#D4522A', '#F2B517', '#3EAD6E', '#1A7EC5', '#E8507A']
              return (
                <div key={tip.title} className="card">
                  <div className="h-[3px] rounded-sm mb-3" style={{ background: colors[i % colors.length] }} />
                  <p className="text-sm font-medium text-dark mb-2">{tip.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{tip.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Rijden */}
        <section className="mb-14">
          <h2 className="section-label">Rijden op Curaçao</h2>
          <ClaimLabel kind="richtlijn" />
          <div className="card">
            <ul className="flex flex-col gap-2">
              {RIJDEN.map((r, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600">
                  <span className="text-sky shrink-0">·</span>{r}
                </li>
              ))}
            </ul>
          </div>
          <div className="card border-l-4 mt-3" style={{ borderLeftColor: '#F2B517' }}>
            <p className="text-xs font-medium text-dark mb-1">Bij een verkeersongeval</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Bel 9223 voor Forensys. Inspecteurs in rode T-shirts komen ter plaatse, spreken Engels en handelen het af. Verplaats de auto niet tot zij er zijn. Het proces duurt ongeveer een uur. Neem water mee.
            </p>
          </div>
        </section>

        {/* Noodnummers */}
        <section className="mb-14">
          <h2 className="section-label">Noodnummers</h2>
          <ClaimLabel kind="officieel" bron="Curaçaose hulpdiensten" />
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            {NUMMERS.map((n, i) => (
              <div key={i} className="px-5 py-3 border-b border-gray-100 last:border-0 flex justify-between items-center">
                <span className="text-sm text-gray-600">{n.situatie}</span>
                <span className="text-sm font-medium text-dark font-mono">{n.nummer}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Algemene context, minder sensationeel */}
        <section className="mb-14">
          <h2 className="section-label">Context</h2>
          <ClaimLabel kind="ervaring" />
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed">
              Curaçao staat op Level 1 van de Amerikaanse reisadvisory: normale voorzichtigheid. Toeristische gebieden worden over het algemeen als veilig beschouwd. De meest voorkomende incidenten gaan over diefstal of opportunistische zakkenrollerij, meestal voorkomen door alertheid en het wegleggen van waardevolle spullen.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              Wij publiceren bewust geen wijkranglijsten of harde buurtclaims. Veiligheid hangt af van tijdstip, gezelschap, gedrag en context, niet alleen van de plek. Stem je route en vervoer af op je situatie en raadpleeg lokale contacten of je stagebegeleider voor actuele advies over specifieke locaties.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Nog niet bepaald waar je gaat wonen?</p>
            <p className="text-sm text-gray-600">Bekijk onze wijkenvergelijking met huurprijzen en bereikbaarheid.</p>
          </div>
          <Link to="/wonen" className="btn-terra shrink-0">Bekijk wijken →</Link>
        </div>

        <LastChecked
          date="2026-04-16"
          bron="Reisadvisory + ervaringen stagiairs"
          gevoeligheid="middel"
        />
      </div>
    </>
  )
}
