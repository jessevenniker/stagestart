import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const WIJKEN_STATUS = [
  {
    status: 'vermijden', color: '#D4522A', label: 'Vermijden',
    wijken: [
      { naam: 'Koraal Specht', desc: 'Direct achter Mambo Beach Boulevard. Actieve straatbendes. Met de auto doorrijden kan, te voet na zonsondergang niet.' },
      { naam: 'Souax', desc: 'Hoog criminaliteitsniveau. Komt niet op je route voor als stagiair.' },
      { naam: 'Seru Fortuna', desc: 'Zelfde situatie. Met auto ok, na donker vermijden.' },
    ],
  },
  {
    status: 'voorzichtig', color: '#F2B517', label: 'Voorzichtig',
    wijken: [
      { naam: 'Marie Pompoen (wandelpad langs zee)', desc: 'Loopt van Pietermaai naar Sea Aquarium Beach. Ziet er mooi uit maar toeristen zijn hier eerder overvallen. Na zonsondergang te voet vermijden.' },
      { naam: 'Punda / Otrobanda centrum', desc: 'Toeristisch maar let op portemonnee en telefoon in drukke gebieden.' },
    ],
  },
  {
    status: 'veilig', color: '#3EAD6E', label: 'Veilig',
    wijken: [
      { naam: 'Jan Thiel', desc: 'Meest populaire studentenwijk. Veel sociale controle, bewaking op strand, één toegangsweg.' },
      { naam: 'Piscadera', desc: 'Rustige universiteitswijk. Veilig.' },
      { naam: 'Pietermaai', desc: 'Goed verlicht, mensen op straat. Veilig mits je niet alleen door donkere steegjes loopt.' },
      { naam: 'Mambo Beach / Seaquarium', desc: 'Bewaking aanwezig. Veilig overdag en tijdens avondevenementen.' },
    ],
  },
]

const TIPS = [
  { title: 'Telefoon & waardespullen', desc: 'Neem op feesten alleen cash mee. Laat paspoort en laptop thuis in de kluis. Witte Apple-oordopjes signaleren waarde — gebruik zwarte. Trek je telefoon in het openbaar zo min mogelijk.' },
  { title: 'In de auto', desc: 'Kijk bij het uitstappen altijd even rond. Word je na een avond gevolgd? Rij door naar een drukke plek, niet naar huis. Taxi’s rijden soms door onveilige wijken — ga bij voorkeur met je eigen auto of die van huisgenoten.' },
  { title: 'Te voet na donker', desc: 'Ga niet alleen op pad. Ga altijd met twee of meer mensen. Vermijd donkere steegjes en verlaten parkeerplaatsen. Loop niet door onbekende wijken.' },
  { title: 'Op het strand', desc: 'Laat nooit waardevolle spullen onbewaakt bij het zwemmen. Jan Thiel en Mambo Beach hebben sociale controle en bewaking. Afgelegen stranden vermijd je na zonsondergang.' },
  { title: 'Drugs', desc: 'Marihuana is illegaal op Curaçao. Ook bezit van kleine hoeveelheden is strafbaar. Dit geldt ook voor andere drugs. Het wordt strikt gehandhaafd — dit is geen Nederland.' },
]

const NUMMERS = [
  { situatie: 'Politie, brandweer, ambulance (spoed)', nummer: '911' },
  { situatie: 'Politie (niet-spoed)', nummer: '917' },
  { situatie: 'Medische spoed', nummer: '910' },
  { situatie: 'Ambulance', nummer: '912' },
  { situatie: 'Kustwacht', nummer: '913' },
  { situatie: 'Roadside assistance', nummer: '9247' },
  { situatie: 'Ziekenhuis CMC', nummer: '+599 9 462 5100' },
  { situatie: 'Huisarts Nederlandstalig (Centro Medico)', nummer: '+599 9 737 0522' },
]

const RIJDEN = [
  'Je rijdt rechts. Verkeer haalt links in. Op wegen met twee of meer rijstroken mag je ook rechts inhalen.',
  'Snelheidslimiet: 40 km/u in bebouwde kom, 60 km/u buiten de stad. Zelden bord, maar geldt overal.',
  'Na regen zijn wegen spekglad. Rijd langzamer.',
  'Doorgaand verkeer heeft bij T-splitsingen altijd voorrang — anders dan in Nederland.',
  'Veel getoeter is normaal en vriendelijk bedoeld, niet agressief.',
  'GPS (Google Maps) werkt goed. Wegwijzers zijn in het Nederlands.',
  'Controleer bij ophalen van de auto altijd of er een reserveband aanwezig is.',
  'Bij een ongeluk: bel Forensys (9223). Verplaats de auto niet.',
]

export default function Veiligheid() {
  return (
    <>
      <PageHero
        eyebrow="Veiligheid op Curaçao"
        title="Eerlijk over veiligheid — geen bangmakerij, wel feiten."
        subtitle="Curaçao is veilig voor stagiairs die hun gedrag aanpassen. Hier is wat je concreet moet weten."
        accentColor="#D4522A"
        image="/img/hero-veiligheid.jpg"
        imageAlt="Veiligheid op Curaçao"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Wijkenstatus */}
        <section className="mb-14">
          <p className="section-label">Wijkenstatus</p>
          {WIJKEN_STATUS.map((groep) => (
            <div key={groep.status} className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full" style={{ background: groep.color }} />
                <p className="text-sm font-medium" style={{ color: groep.color }}>{groep.label}</p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {groep.wijken.map((w) => (
                  <div key={w.naam} className="card border-l-4" style={{ borderLeftColor: groep.color }}>
                    <p className="text-sm font-medium text-dark mb-1">{w.naam}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Gedragstips */}
        <section className="mb-14">
          <p className="section-label">Gedragstips</p>
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
          <p className="section-label">Rijden op Curaçao</p>
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
              Bel 9223 voor Forensys. Dit zijn inspecteurs in rode T-shirts. Ze spreken Engels, zijn vriendelijk en professioneel. Verplaats de auto niet tot zij er zijn. Het proces duurt ongeveer een uur. Zorg voor water.
            </p>
          </div>
        </section>

        {/* Noodnummers */}
        <section className="mb-14">
          <p className="section-label">Noodnummers</p>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            {NUMMERS.map((n, i) => (
              <div key={i} className="px-5 py-3 border-b border-gray-100 last:border-0 flex justify-between items-center">
                <span className="text-sm text-gray-600">{n.situatie}</span>
                <span className="text-sm font-medium text-dark font-mono">{n.nummer}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Realiteitcheck */}
        <section className="mb-14">
          <p className="section-label">Realiteitcheck</p>
          <div className="card">
            <h3 className="font-serif text-xl font-normal text-dark mb-3">Het valt mee — maar naïef zijn kost je wat</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Curaçao staat op Level 1 van de Amerikaanse reisadvisory: normale voorzichtigheid. De Britse reisadvisory zegt dat toeristische gebieden over het algemeen veilig zijn. Dat klopt. Maar: 25% van de bevolking leeft onder de armoedegrens. Stagiairs vallen op als relatief welvarend. Diefstal is de meest voorkomende vorm van criminaliteit — en die zit hem in onoplettendheid. Wie zijn gedrag aanpast, heeft vrijwel geen problemen. Wie denkt dat het allemaal wel meevalt en z’n MacBook open op tafel legt in een café in een onbekende wijk, trekt de aandacht.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Zorg dat je in een veilige wijk woont</p>
            <p className="text-sm text-gray-600">Bekijk onze wijkenvergelijking met huurprijzen, veiligheid en bereikbaarheid.</p>
          </div>
          <Link to="/wonen" className="btn-terra shrink-0">Bekijk wijken →</Link>
        </div>
      </div>
    </>
  )
}
