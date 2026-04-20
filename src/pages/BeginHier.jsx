import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import ClaimLabel from '../components/ClaimLabel'
import LastChecked from '../components/LastChecked'
import { howToSchema } from '../utils/schema'

const STEPS = [
  {
    step: '1',
    color: '#D4522A',
    title: 'Regel je stage zelf of via een bureau?',
    desc: 'Het eerste wat je moet beslissen. Een bureau kost €500–800 maar neemt veel uit handen. Zelf doen is goedkoper maar vergt meer werk. We leggen beide opties eerlijk uit, zonder voorkeur.',
    to: null,
  },
  {
    step: '2',
    color: '#F2B517',
    title: 'Regel de papieren op tijd',
    desc: 'Vergunning, VOG, stageovereenkomst, verzekering. Dit duurt langer dan je denkt. Begin minimaal 8 weken voor vertrek. We hebben een stap-voor-stap overzicht.',
    to: '/voor-vertrek',
    cta: 'Ga naar voor vertrek →',
  },
  {
    step: '3',
    color: '#3EAD6E',
    title: 'Begrijp wat het echt kost',
    desc: 'Reken op ±€1.100–1.500 per maand. De eerste maand is altijd duurder door eenmalige kosten. Gebruik onze calculator om jouw persoonlijke budget te berekenen.',
    to: '/kosten',
    cta: 'Open budgetcalculator →',
  },
  {
    step: '4',
    color: '#1A7EC5',
    title: 'Kies waar je wilt wonen',
    desc: 'Woonlocatie bepaalt of je een auto nodig hebt, hoe ver je van je stageplek zit en wat je sociale leven wordt. Lees onze wijkenvergelijking voordat je iets boekt.',
    to: '/wonen',
    cta: 'Bekijk wijken →',
  },
  {
    step: '5',
    color: '#E8507A',
    title: 'Beslissing: auto of niet?',
    desc: 'Openbaar vervoer op Curaçao is minimaal. Of je een auto nodig hebt, hangt volledig af van je woon- en werklocatie. Gebruik de beslisboom.',
    to: '/auto',
    cta: 'Auto beslisboom →',
  },
  {
    step: '6',
    color: '#D4522A',
    title: 'Bereid je eerste week voor',
    desc: 'Eerste dag op het eiland: SIM-kaart, supermarkt, rijbewijs omzetten, bankrekening. We hebben een dag-voor-dag plan voor je eerste week.',
    to: '/eerste-week',
    cta: 'Bekijk eerste week →',
  },
]

const QUICK = [
  { label: 'Stagevergunning nodig?',    ans: 'Ja, altijd. Je mag niet werken zonder. Kost ~€300 en duurt weken.' },
  { label: 'Heb je een visum nodig?',   ans: 'Nee, als Nederlander niet voor verblijf tot 90 dagen. Langer = vergunning.' },
  { label: 'Krijg ik stagevergoeding?', ans: 'Niet verplicht. Gemiddeld €200–400/mnd. Vraag het voor je tekent.' },
  { label: 'Hoe warm is het?',          ans: 'Gemiddeld 30°C het hele jaar. Weinig regen, altijd zon. Wel altijd factor 50.' },
  { label: 'Welke taal wordt gesproken?', ans: 'Papiaments onderling, Nederlands op kantoor, Engels op straat. Je redt je prima.' },
  { label: 'Moet ik een DI Card invullen?', ans: 'Ja, verplicht voor elke bezoeker. Gratis via dicardcuracao.com. Begin vóór je reist.' },
  { label: 'Welke munt gebruiken ze?', ans: 'Caribbean Guilder (XCG). Vast aan de dollar: 1 USD = 1,79 XCG. Dollars ook gewoon geaccepteerd.' },
  { label: 'Kan ik overal pinnen?', ans: 'Visa en Mastercard werken breed. Taxi\'s, kleine winkels en benzinestations: cash meenemen.' },
  { label: 'Hoe zit het met fooi?', ans: '15–20% is standaard in restaurants. Keukenmedewerkers delen mee. Geen extra fooi als service charge al op de bon staat.' },
  { label: 'Kan ik snel een bankrekening openen?', ans: 'Nee. Verwacht 2–4 maanden. Reken je betalingen via je Nederlandse rekening.' },
  { label: 'Is stroom duur?', ans: 'Ja. Zet airco uit als je weggaat. Vraag bij je verhuurder of stroom apart wordt verrekend.' },
  { label: 'Welk stopcontact heb ik nodig?', ans: 'Gemengd: 220V Europees of 110V Amerikaans. Neem een universele adapter mee.' },
]

export default function BeginHier() {
  const schema = howToSchema({
    name: 'Je stage Curaçao in 6 stappen',
    description: 'De juiste volgorde voor voorbereiding, vergunning, kosten, wonen, auto en eerste week op Curaçao.',
    totalTime: 'PT8W',
    steps: STEPS.map((s) => ({ name: s.title, text: s.desc })),
  })

  return (
    <>
      <SEO schema={schema} />
      <PageHero
        eyebrow="Begin hier"
        title="Je eerste stappen, in de juiste volgorde."
        subtitle="Of je nu net besloten hebt naar Curaçao te gaan of al een stageplek hebt, hier begin je. Geen overbodige informatie, alleen wat je nu nodig hebt."
        accentColor="#D4522A"
        image="/img/hero-begin-hier.jpg"
        imageAlt="Student op stage op Curaçao met uitzicht op de kust"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Steps */}
        <section className="mb-16">
          <h2 className="section-label">De zes stappen</h2>
          <div className="mb-4">
            <ClaimLabel kind="richtlijn" />
            <p className="text-xs text-gray-500 leading-relaxed mt-2 max-w-2xl">
              Deze volgorde is een praktische richtlijn, geen officieel voorschrift. Voor harde eisen rond vergunning, documenten en verzekering gelden de officiële bronnen op de betreffende dieptepagina's.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {STEPS.map((s) => (
              <div key={s.step} className="flex gap-5 card">
                <span
                  className="font-serif text-3xl font-normal leading-none shrink-0 w-8 pt-0.5"
                  style={{ color: s.color }}
                >
                  {s.step}
                </span>
                <div>
                  <p className="font-medium text-sm text-dark mb-1.5">{s.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-2">{s.desc}</p>
                  {s.to && (
                    <Link to={s.to} className="text-xs font-medium hover:underline" style={{ color: s.color }}>
                      {s.cta}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick answers */}
        <section className="mb-16">
          <h2 className="section-label">Snelle antwoorden</h2>
          <div className="mb-4">
            <ClaimLabel kind="richtlijn" />
            <p className="text-xs text-gray-500 leading-relaxed mt-2 max-w-2xl">
              Korte antwoorden voor oriëntatie. Dieptepagina's (Vergunning, Kosten, Auto) staan boven deze samenvatting.
            </p>
          </div>
          <div className="flex flex-col gap-0 border border-gray-100 rounded-xl overflow-hidden">
            {QUICK.map((q, i) => (
              <div key={i} className="flex gap-4 px-5 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium text-dark min-w-[180px] shrink-0">{q.label}</span>
                <span className="text-sm text-gray-500 leading-relaxed">{q.ans}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Klaar om te beginnen?</p>
            <p className="text-sm text-gray-600">Download de gratis startgids met volledige checklist.</p>
          </div>
          <a href="/downloads/stagestart-startgids.pdf" download="stagestart-startgids.pdf" className="btn-terra shrink-0">Download gratis →</a>
        </div>

        <LastChecked
          date="2026-04-18"
          bron="Eigen redactie, overzichtspagina"
          gevoeligheid="middel"
        />
      </div>
    </>
  )
}
