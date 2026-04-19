import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

const COLORS = ['#D4522A', '#F2B517', '#3EAD6E', '#1A7EC5', '#E8507A']

const TRIPS = [
  {
    naam: 'Christoffel Park',
    duur: 'Halve dag',
    kosten: '±25 XCG entree',
    moeilijkheid: 'gemiddeld',
    desc: 'Curaçao\'s hoogste berg (375m). Vroeg vertrekken (voor 10:00) vanwege de hitte. Prachtig uitzicht over het hele eiland vanaf de top.',
    meenemen: ['2L water', 'Sportschoenen', 'Zonnebrand', 'Pet of hoed'],
  },
  {
    naam: 'Klein Curaçao boottocht',
    duur: 'Hele dag',
    kosten: '±$100–150 pp',
    moeilijkheid: 'makkelijk',
    desc: 'Onbewoond eilandje op 1,5 uur varen. Wit zand, turquoise water, scheepswrak, vuurtoren. Boek via Miss Ann, Bounty Adventures of BlueFinn.',
    meenemen: ['Zonnebrand (veel)', 'Snorkelspullen', 'Lunch', 'Waterproof case'],
  },
  {
    naam: 'Shete Boka Nationaal Park',
    duur: '2–3 uur',
    kosten: '±15 XCG entree',
    moeilijkheid: 'makkelijk',
    desc: 'Ruige noordkust met spectaculaire branding, grotten en boka\'s. Boka Tabla is de beroemdste grot. Niet zwemmen, de golven zijn gevaarlijk!',
    meenemen: ['Water', 'Stevige schoenen', 'Camera'],
  },
  {
    naam: 'Hato Grotten',
    duur: '1–1,5 uur',
    kosten: '±20 XCG',
    moeilijkheid: 'makkelijk',
    desc: 'Kalksteen grotten met stalactieten, ondergrondse meren en vleermuizen. Rondleiding inclusief. Koel en aangenaam, een welkome pauze van de hitte.',
    meenemen: ['Comfortabele schoenen'],
  },
  {
    naam: 'Westpunt — hele dag',
    duur: 'Hele dag',
    kosten: 'Brandstof + eten',
    moeilijkheid: 'makkelijk',
    desc: 'Rij de noordwestkust af: Grote Knip, Kleine Knip, Playa Lagun, Playa Kalki. Stop bij Jaanchie\'s voor lokaal eten. De mooiste stranden van het eiland in één route.',
    meenemen: ['Snorkelspullen', 'Handdoek', 'Cash voor entree stranden'],
  },
  {
    naam: 'Blue Room',
    duur: '2 uur',
    kosten: '±50–75 XCG per boot',
    moeilijkheid: 'gemiddeld',
    desc: 'Onderwatergrot bij Santa Cruz met spectaculair blauw lichteffect. Bereikbaar per boot of zwemmend (alleen gevorderden). Iconisch voor foto\'s.',
    meenemen: ['Waterproof case', 'Snorkelmasker', 'Zwemkleding'],
  },
  {
    naam: 'Playa Piskadó (schildpadden)',
    duur: '2 uur',
    kosten: 'Gratis',
    moeilijkheid: 'makkelijk',
    desc: 'Zwem met schildpadden bij de visserssteiger. Ze komen op de visresten af. Beste tijd: 8:30–11:00 \'s ochtends. Magisch moment.',
    meenemen: ['Snorkelmasker', 'Onderwatercamera'],
  },
  {
    naam: 'Curaçao Ostrich Farm',
    duur: '1,5 uur',
    kosten: '±28 XCG',
    moeilijkheid: 'makkelijk',
    desc: 'Struisvogelfarm met rondleiding. Verrassend leuk: je kunt struisvogeleieren vasthouden en de vogels voeren. Goed voor een rustige middag.',
    meenemen: ['Zonnebrand', 'Pet'],
  },
]

export default function WeekendTrips() {
  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Weekend trips"
        title="Het eiland verkennen — de beste uitstapjes."
        subtitle="Je vrije weekenden zijn kostbaar. Dit zijn de plekken die het waard zijn."
        accentColor="#E8507A"
        image="/img/hero-weekend-trips.jpg"
        imageAlt="Natuurpark op Curaçao met uitzicht vanaf een heuvel, populaire weekendbestemming voor stagiairs"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Anti-drift marker */}
        <div className="mb-8 border-l-2 border-gray-200 pl-4 py-1">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
            Onderdeel van de stagegids StageStart Curaçao. Deze pagina is ondersteunend — voor harde vereisten rond vergunning, kosten en verblijf gelden de officiële bronnen op de kernpagina's.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="section-label">Uitstapjes</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {TRIPS.map((t, i) => (
              <div key={t.naam} className="card">
                <div className="h-[3px] rounded-sm mb-3" style={{ background: COLORS[i % COLORS.length] }} />
                <div className="flex justify-between items-start gap-2 mb-2">
                  <p className="text-sm font-medium text-dark">{t.naam}</p>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded shrink-0 ${
                    t.moeilijkheid === 'makkelijk' ? 'bg-sage/10 text-sage' : 'bg-gold/10 text-gold'
                  }`}>
                    {t.moeilijkheid}
                  </span>
                </div>
                <div className="flex gap-3 mb-2">
                  <span className="text-xs text-gray-400">{t.duur}</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-xs text-gray-400">{t.kosten}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{t.desc}</p>
                {t.meenemen && (
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Meenemen</p>
                    <div className="flex flex-wrap gap-1">
                      {t.meenemen.map(m => (
                        <span key={m} className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded">{m}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Op zoek naar het perfecte strand?</p>
            <p className="text-sm text-gray-600">35+ stranden vergeleken, van gezellige beachclubs tot verlaten baaien.</p>
          </div>
          <Link to="/stranden" className="btn-terra shrink-0">Bekijk stranden →</Link>
        </div>

        <LastChecked
          date="2026-04-18"
          bron="Eigen redactie — ervaringsinzicht"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
