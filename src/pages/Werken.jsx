import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

const CULTUUR = [
  {
    color: '#C0522A',
    title: 'Poko poko',
    desc: 'Curaçao werkt op een ander tempo. "Poko poko" betekent letterlijk "rustig aan" en dat is geen uitdrukking, het is een levenshouding. Vergaderingen beginnen later. Beslissingen duren langer. Zaken gaan via persoonlijke relaties, niet via efficiëntie. Pas je aan in plaats van te pushen, dan kom je verder.',
  },
  {
    color: '#E2A832',
    title: 'Begin altijd met een begroeting',
    desc: 'Op Curaçao groet je iedereen voordat je over werk begint. Geen "even snel een vraag" zonder eerst te vragen hoe het gaat. Dit is geen tijdverspilling, het is respect. Collega\'s die je dag niet gegroet hebt, zullen dat opmerken.',
  },
  {
    color: '#5A9E7A',
    title: 'Hiërarchie wordt gerespecteerd',
    desc: 'Spreek je leidinggevende formeel aan totdat hij of zij aangeeft dat het anders mag. Initiatieven nemen wordt gewaardeerd, maar doe dat via de juiste kanalen. Ga niet over je directe begeleider heen.',
  },
  {
    color: '#3B8FB5',
    title: 'Feedback gaat indirect',
    desc: 'Directe kritiek zoals in Nederland is hier ongebruikelijk. Feedback wordt verpakt in positieve omschrijvingen. Als iemand zegt "dat zou ook anders kunnen", bedoelt diegene waarschijnlijk "dit klopt niet". Luister tussen de regels.',
  },
  {
    color: '#C96F6A',
    title: 'Curaçao is klein, iedereen kent iedereen',
    desc: 'Op een eiland van 150.000 mensen loopt je reputatie je voor. Hoe je je buiten werktijd gedraagt, hoort je leidinggevende vroeg of laat. Dat is geen bedreiging maar een kans: een goede indruk heeft hier meer bereik dan op de Amsterdamse Zuidas.',
  },
  {
    color: '#C0522A',
    title: 'Vrijdagmiddag is al half weekend',
    desc: 'In veel sectoren begint het weekendgevoel op vrijdagmiddag. Plan presentaties, deadlines en moeilijke gesprekken niet op vrijdagmiddag. Donderdag is de nieuwe vrijdag.',
  },
]

const NETWERK = [
  {
    title: 'LinkedIn werkt hier ook',
    desc: 'Voeg collega\'s, je stagegever en contacten die je leert kennen toe op LinkedIn. Vraag aan het einde van je stage om een aanbeveling. Schrijf er zelf ook één voor iemand die je geholpen heeft.',
  },
  {
    title: 'Persoonlijk contact is krachtiger dan een bericht',
    desc: 'Op Curaçao worden relaties gebouwd face-to-face. Een kop koffie inplannen met iemand die interessant werk doet, werkt beter dan een LinkedIn-bericht. Vraag je stagegever om introductiegesprekken met andere mensen in de organisatie of branche.',
  },
  {
    title: 'Je Curaçaose netwerk heeft waarde na thuiskomst',
    desc: 'Mensen die op Curaçao gewerkt hebben in jouw branche zijn schaars in Nederland. Dat maakt je interessant voor werkgevers met Caribische of internationale activiteiten. Onderhoud de contacten na terugkeer.',
  },
]

export default function Werken() {
  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Werken op Curaçao"
        title="Hoe werken op Curaçao anders is dan in Nederland."
        subtitle="Tempo, hiërarchie, relaties en feedback werken hier anders. Dat weet je beter vooraf dan na je eerste werkweek."
        accentColor="#3B8FB5"
        image="/img/hero-werken.jpg"
        imageAlt="Werkomgeving op Curaçao met Caribische sfeer voor stagiairs"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Anti-drift marker */}
        <div className="mb-8 border-l-2 border-gray-200 pl-4 py-1">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
            Onderdeel van de stagegids StageStart Curaçao. Deze pagina is ondersteunend, voor harde vereisten rond vergunning, kosten en verblijf gelden de officiële bronnen op de kernpagina's.
          </p>
        </div>

        {/* Werkcultuur */}
        <section className="mb-14">
          <h2 className="section-label">Werkcultuur</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {CULTUUR.map((c) => (
              <div key={c.title} className="card">
                <div className="h-[3px] rounded-sm mb-3" style={{ background: c.color }} />
                <p className="text-sm font-medium text-dark mb-2">{c.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stageverslag */}
        <section className="mb-14">
          <h2 className="section-label">Je stageverslag en school</h2>
          <div className="card border-l-4" style={{ borderLeftColor: '#3B8FB5' }}>
            <p className="text-sm font-medium text-dark mb-2">Vergeet je school niet</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              De meeste opleidingen verwachten een stageverslag of portfolio. Maak foto{"'"}s en notities vanaf dag 1, de eerste week vergeet je razendsnel. Vraag je begeleider om een tussentijdse evaluatie na 4–6 weken, niet alleen aan het einde. Schrijf minstens één alinea per week in een notitieapp. Dat bespaart je maanden stress bij het schrijven van je verslag.
            </p>
          </div>
        </section>

        {/* Netwerken */}
        <section className="mb-14">
          <h2 className="section-label">Netwerken op een klein eiland</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {NETWERK.map((n, i) => {
              const colors = ['#C0522A', '#E2A832', '#5A9E7A']
              return (
                <div key={n.title} className="card">
                  <div className="h-[3px] rounded-sm mb-3" style={{ background: colors[i] }} />
                  <p className="text-sm font-medium text-dark mb-2">{n.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{n.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          style={{ background: '#C0522A' }}
        >
          <div>
            <h3 className="font-serif text-xl font-normal text-white mb-1">
              Wat verwacht je school precies?
            </h3>
            <p className="text-sm text-white/70">
              Lees ook wat je voor vertrek moet regelen.
            </p>
          </div>
          <Link
            to="/voor-vertrek"
            className="shrink-0 bg-white text-terra text-sm font-medium px-5 py-2.5 rounded-md hover:bg-cream transition-colors"
          >
            Bekijk vertrekplan →
          </Link>
        </div>

        <LastChecked
          date="2026-04-18"
          bron="Eigen redactie, ervaringsinzicht"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
