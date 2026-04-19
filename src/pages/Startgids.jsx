import { useState } from 'react'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'

const INHOUD = [
  { n: '01', title: 'Vertrekchecklist', desc: '10 stappen met tijdlijn, van paspoort checken tot vliegticket boeken.' },
  { n: '02', title: 'Vergunning stappenplan', desc: 'Alle documenten op een rij, in de juiste volgorde, met kosten.' },
  { n: '03', title: 'Budgetoverzicht', desc: 'Eenmalige kosten + maandkosten + inkomsten in één overzicht.' },
  { n: '04', title: 'Inpaklijst', desc: 'Wat neem je mee? En wat koop je beter lokaal?' },
  { n: '05', title: 'Eerste week planning', desc: 'Dag-voor-dag wat je regelt de eerste 7 dagen.' },
  { n: '06', title: 'Handige nummers & adressen', desc: 'Ziekenhuis, rijbewijsbureau, apotheek, toelatingsorganisatie.' },
]

const STRIPE = [
  '#D4522A', '#F2B517', '#3EAD6E', '#1A7EC5', '#E8507A',
]

export default function Startgids() {
  const [naam, setNaam] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.includes('@')) {
      setError('Voer een geldig e-mailadres in.')
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Gratis startgids"
        title="Alles wat je moet weten, in één PDF."
        subtitle="De vertrekchecklist, het vergunningsstappenplan, het budgetoverzicht en de eerste-weekplanning — gebundeld en klaar om te printen."
        accentColor="#3EAD6E"
        image="/img/cta-sunset.jpg"
        imageAlt="Zonsondergang aan de kust van Curaçao, einde van een stagedag"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left: wat zit erin */}
          <div>
            <h2 className="section-label">Wat zit er in de gids?</h2>
            <div className="flex flex-col gap-3 mb-8">
              {INHOUD.map(item => (
                <div key={item.n} className="flex gap-4 card">
                  <span className="font-serif text-2xl text-gray-200 shrink-0 leading-none w-8">{item.n}</span>
                  <div>
                    <p className="font-medium text-sm text-dark mb-0.5">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stripe preview (mock PDF cover) */}
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <div className="flex h-2">
                {STRIPE.map((c, i) => <div key={i} className="flex-1" style={{ background: c }} />)}
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-baseline gap-0 mb-1">
                  <span className="font-serif text-xl font-normal text-dark">Stage</span>
                  <span className="font-serif text-xl font-medium text-dark">Start</span>
                </div>
                <p className="text-[9px] tracking-[0.14em] uppercase text-gray-400 mb-4">Curaçao</p>
                <p className="font-serif text-lg font-normal text-dark mb-1">Startgids voor stagiairs</p>
                <p className="text-xs text-gray-400">Vertrekchecklist · Vergunning · Budget · Eerste week</p>
                <div className="mt-5 flex gap-1">
                  {STRIPE.map((c, i) => (
                    <div key={i} className="h-1 rounded-sm flex-1" style={{ background: c, opacity: 0.4 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <h2 className="section-label">Ontvang de gids gratis</h2>

            {submitted ? (
              <div className="card text-center py-10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                       style={{ background: '#E1F5EE', color: '#3EAD6E' }}>
                    ✓
                  </div>
                </div>
                <p className="font-serif text-xl font-normal text-dark mb-2">Verstuurd!</p>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                  Check je inbox — de startgids staat klaar. Kijk ook even in je spamfolder als je niets ziet.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Voornaam</label>
                  <input
                    type="text"
                    placeholder="Je voornaam"
                    value={naam}
                    onChange={e => setNaam(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-dark placeholder-gray-300 focus:outline-none focus:border-sage transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    E-mailadres <span className="text-terra">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="naam@email.nl"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError('') }}
                    required
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-dark placeholder-gray-300 focus:outline-none focus:border-sage transition-colors"
                  />
                  {error && <p className="text-xs text-terra mt-1">{error}</p>}
                </div>

                <button
                  type="submit"
                  className="btn-terra w-full text-center mt-1"
                >
                  Stuur me de gratis startgids →
                </button>

                <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                  Geen spam. Geen nieuwsbrief als je dat niet wilt. Alleen de gids.
                  Je kunt je altijd uitschrijven.
                </p>
              </form>
            )}

            {/* Trust signals */}
            <div className="mt-6 flex flex-col gap-2">
              {[
                'Volledig gratis — geen verborgen kosten',
                'Onafhankelijk — geen bureau, geen commissie',
                'Direct bruikbaar — niet achter een paywall',
              ].map(t => (
                <div key={t} className="flex gap-2 items-center">
                  <span className="text-sage text-sm">✓</span>
                  <span className="text-xs text-gray-500">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
