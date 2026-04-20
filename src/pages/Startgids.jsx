import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

const STRIPE = ['#D4522A', '#F2B517', '#3EAD6E', '#1A7EC5', '#E8507A']

const PDF_URL = '/downloads/stagestart-startgids.pdf'
const PDF_NAME = 'stagestart-startgids.pdf'

const HOOFDSTUKKEN = [
  {
    n: '01',
    color: '#D4522A',
    title: 'Vertrekchecklist',
    lead: 'De grootste documenten in de juiste volgorde, met tijdlijn.',
    cta: { to: '/voor-vertrek', label: 'Volledige vertrekchecklist' },
  },
  {
    n: '02',
    color: '#F2B517',
    title: 'Vergunning stappenplan',
    lead: 'Studie/stage en Verklaring van Rechtswege zijn twee aparte informatiestromen.',
    cta: { to: '/vergunning', label: 'Volledige vergunningsuitleg' },
  },
  {
    n: '03',
    color: '#3EAD6E',
    title: 'Budgetoverzicht',
    lead: 'Realistische kosten en inkomsten voor een stagemaand op Curaçao.',
    cta: { to: '/kosten', label: 'Volledige budgetcalculator' },
  },
  {
    n: '04',
    color: '#1A7EC5',
    title: 'Inpaklijst',
    lead: 'Wat neem je mee en wat koop je beter ter plekke?',
    cta: { to: '/voor-vertrek', label: 'Volledige inpaklijst' },
  },
  {
    n: '05',
    color: '#E8507A',
    title: 'Eerste week planning',
    lead: 'Dag voor dag wat je regelt de eerste 7 dagen.',
    cta: { to: '/eerste-week', label: 'Volledige eerste-weekplanning' },
  },
  {
    n: '06',
    color: '#D4522A',
    title: 'Handige nummers en adressen',
    lead: 'Sla deze op in je telefoon voor je vertrekt.',
    cta: { to: '/eerste-week', label: 'Volledige nummerlijst' },
  },
]

export default function Startgids() {
  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Startgids"
        title="De complete startgids voor je stage op Curaçao."
        subtitle="Vertrekchecklist, vergunning, budget, inpaklijst, eerste week en noodnummers. Direct als PDF te downloaden. Geen formulier, geen e-mailadres nodig."
        accentColor="#3EAD6E"
        image="/img/cta-sunset.jpg"
        imageAlt="Zonsondergang aan de kust van Curaçao, einde van een stagedag"
      />

      <div className="max-w-3xl mx-auto px-5 pb-16">

        {/* Download CTA */}
        <section className="mb-10">
          <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
            <p className="text-xs font-medium text-dark uppercase tracking-wider mb-2">Directe download</p>
            <p className="font-serif text-xl font-normal text-dark mb-3">Klik en de PDF staat op je apparaat.</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-xl">
              10 pagina's. Cover, inhoudsopgave en zes hoofdstukken met de kerninformatie. Gratis, zonder account, zonder e-mail.
            </p>
            <a
              href={PDF_URL}
              download={PDF_NAME}
              className="btn-terra inline-flex items-center justify-center gap-2"
            >
              Download de gids als PDF
            </a>
          </div>
        </section>

        {/* Cover preview */}
        <section className="mb-10">
          <div className="rounded-xl border border-gray-100 overflow-hidden">
            <div className="flex h-2">
              {STRIPE.map((c, i) => <div key={i} className="flex-1" style={{ background: c }} />)}
            </div>
            <div className="p-6 bg-gray-50">
              <div className="flex items-baseline gap-0 mb-1">
                <span className="font-serif text-2xl font-normal text-dark">Stage</span>
                <span className="font-serif text-2xl font-medium text-dark">Start</span>
              </div>
              <p className="text-[10px] tracking-[0.14em] uppercase text-gray-400 mb-6">Curaçao</p>
              <p className="font-serif text-2xl font-normal text-dark mb-1">Startgids voor stagiairs</p>
              <p className="text-sm text-gray-500">Vertrekchecklist, vergunning, budget, inpaklijst, eerste week en noodnummers.</p>
              <div className="mt-6 flex gap-1">
                {STRIPE.map((c, i) => (
                  <div key={i} className="h-1 rounded-sm flex-1" style={{ background: c, opacity: 0.4 }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Inhoud preview */}
        <section className="mb-10">
          <h2 className="section-label">Wat zit erin?</h2>
          <div className="flex flex-col gap-3">
            {HOOFDSTUKKEN.map((h) => (
              <div key={h.n} className="card flex gap-5 items-start">
                <span
                  className="font-serif text-3xl font-normal leading-none shrink-0 w-10"
                  style={{ color: h.color }}
                >
                  {h.n}
                </span>
                <div className="flex-1">
                  <p className="font-serif text-lg font-normal text-dark mb-1">{h.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-2">{h.lead}</p>
                  <Link
                    to={h.cta.to}
                    className="text-xs hover:underline"
                    style={{ color: h.color }}
                  >
                    {h.cta.label} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tweede download CTA */}
        <section className="mb-10">
          <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
            <div>
              <p className="font-serif text-xl font-normal text-dark mb-1">Klaar om te downloaden?</p>
              <p className="text-sm text-gray-600">De PDF is gratis en staat meteen op je apparaat.</p>
            </div>
            <a
              href={PDF_URL}
              download={PDF_NAME}
              className="btn-terra shrink-0"
            >
              Download PDF →
            </a>
          </div>
        </section>

        {/* Redactionele noot */}
        <section className="mb-10">
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
            <p className="text-xs font-medium text-dark mb-2">Over deze gids</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Deze startgids is een samenvatting van de kerninformatie op StageStart Curaçao. Voor officiële en actuele eisen rond vergunning, kosten en verblijf blijven instanties als de Immigratiedienst Curaçao, DUO en Justis altijd leidend. Bij conflict tussen deze gids en de officiële bron wint de officiële bron. Zie ook de <Link to="/bronnen" className="text-sky underline">bronnen-pagina</Link> voor verantwoording per claim.
            </p>
          </div>
        </section>

        <LastChecked
          date="2026-04-20"
          bron="Eigen redactie samenvatting van bronvaste kernpagina's"
          gevoeligheid="middel"
        />
      </div>
    </>
  )
}
