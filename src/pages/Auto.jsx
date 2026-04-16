import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const TREE = [
  {
    id: 'q1',
    vraag: 'Waar woon je (of ga je wonen)?',
    opties: [
      { label: 'Jan Thiel of Bapor Kibra', next: 'auto_ja', weight: 'auto' },
      { label: 'Piscadera', next: 'q2' },
      { label: 'Pietermaai of Otrobanda', next: 'q3' },
      { label: 'Salinja of centrum', next: 'q3' },
    ],
  },
  {
    id: 'q2',
    vraag: 'Waar is je stageplek?',
    opties: [
      { label: 'In of bij Willemstad centrum', next: 'auto_misschien' },
      { label: 'Jan Thiel, Piscadera of verder', next: 'auto_ja' },
      { label: 'Nog onbekend', next: 'auto_wacht' },
    ],
  },
  {
    id: 'q3',
    vraag: 'Waar is je stageplek?',
    opties: [
      { label: 'Loopafstand of nabij centrum', next: 'auto_nee' },
      { label: 'Jan Thiel of verder buiten de stad', next: 'auto_ja' },
      { label: 'Piscadera of ziekenhuis', next: 'auto_misschien' },
      { label: 'Nog onbekend', next: 'auto_wacht' },
    ],
  },
]

const UITKOMSTEN = {
  auto_ja: {
    color: '#D4522A',
    icon: '🚗',
    titel: 'Ja, je hebt waarschijnlijk een auto nodig.',
    body: 'Op basis van je woon- en werklocatie is een auto vrijwel noodzakelijk. Openbaar vervoer op Curaçao is minimaal en onregelmatig. Overweeg een auto te delen met medestudenten — dat scheelt €200–300 per persoon per maand.',
    tips: [
      'Regel een auto al voor je vertrekt — aanbod raakt op',
      'Deel met medestudenten via studentenhuisgroepen',
      'Kijk of je stagebedrijf een vergoeding geeft',
      'Huurprijzen: ±€400–475 per maand voor een kleine auto (ANG 800–950)',
    ],
  },
  auto_nee: {
    color: '#3EAD6E',
    icon: '🚶',
    titel: 'Nee, je hebt waarschijnlijk geen auto nodig.',
    body: 'Gefeliciteerd — je bent in de minderheid. Vanuit centrum/Pietermaai kun je op loopafstand werken en de meeste boodschappen doen. Overweeg wel een scooter of fiets voor wat meer vrijheid.',
    tips: [
      'Een scooter kost ±€200/mnd — stuk goedkoper dan een auto',
      'Taxi\'s zijn relatief betaalbaar voor incidenteel gebruik',
      'Fietsen kan — maar de warmte maakt het lastig overdag',
      'Zorg dat je stageplek inderdaad goed bereikbaar is te voet',
    ],
  },
  auto_misschien: {
    color: '#1A7EC5',
    icon: '🤔',
    titel: 'Hangt er van af — nader onderzoek nodig.',
    body: 'Je situatie is niet zwart-wit. Check eerst of je stageplek goed bereikbaar is vanuit je woning. Vraag ook of je stagebedrijf vervoer regelt of een vergoeding geeft. Begin eventueel zonder auto en schaf er één aan als het echt nodig blijkt.',
    tips: [
      'Vraag je stagegever: "Is er goed openbaar vervoer?"',
      'Check Google Maps: hoe lang doet een taxi erover?',
      'Begin zonder auto en evalueer na 2 weken',
      'Deel een auto met een housegenoot als het toch nodig is',
    ],
  },
  auto_wacht: {
    color: '#F2B517',
    icon: '⏳',
    titel: 'Wacht met beslissen tot je je stageplek weet.',
    body: 'De auto-vraag is echt afhankelijk van waar je werkt. Zodra je stageplek bevestigd is, vul je de locatie in en kun je de afweging pas goed maken.',
    tips: [
      'Zet je naam alvast op de lijst bij autoverhuurders',
      'Vraag je stagegever bij bevestiging naar bereikbaarheid',
      'Kijk of je woonlocatie nog flexibel is',
    ],
  },
}

export default function Auto() {
  const [path, setPath] = useState(['q1'])
  const [answers, setAnswers] = useState({})

  const currentId = path[path.length - 1]
  const currentQ = TREE.find(q => q.id === currentId)
  const uitkomst = UITKOMSTEN[currentId]

  function answer(optie) {
    setAnswers(p => ({ ...p, [currentId]: optie.label }))
    setPath(p => [...p, optie.next])
  }

  function reset() {
    setPath(['q1'])
    setAnswers({})
  }

  return (
    <>
      <PageHero
        eyebrow="Heb je een auto nodig?"
        title="Eerlijk antwoord — hangt af van jouw situatie."
        subtitle="Bureaus zeggen bijna altijd 'ja, je hebt een auto nodig'. Dat klopt niet altijd. Het hangt volledig af van waar je woont en werkt. Gebruik de beslisboom."
        accentColor="#1A7EC5"
        image="/img/hero-auto.jpg"
        imageAlt="Kustweg Curaçao"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Decision tree */}
        <section className="mb-14">
          <p className="section-label">Beslisboom</p>

          {/* Breadcrumb */}
          {path.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {path.slice(0, -1).map((id, i) => {
                const q = TREE.find(q => q.id === id)
                return q ? (
                  <div key={i} className="flex items-center gap-2">
                    {i > 0 && <span className="text-gray-300 text-xs">→</span>}
                    <div className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                      {answers[id]}
                    </div>
                  </div>
                ) : null
              })}
            </div>
          )}

          {currentQ && (
            <div className="card max-w-xl">
              <p className="font-medium text-dark mb-4">{currentQ.vraag}</p>
              <div className="flex flex-col gap-2">
                {currentQ.opties.map(o => (
                  <button
                    key={o.label}
                    onClick={() => answer(o)}
                    className="text-left border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-sky hover:bg-sky/5 transition-colors"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {uitkomst && (
            <div className="card max-w-xl border-2" style={{ borderColor: uitkomst.color }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{uitkomst.icon}</span>
                <p className="font-serif text-lg font-normal" style={{ color: uitkomst.color }}>
                  {uitkomst.titel}
                </p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">{uitkomst.body}</p>

              <p className="text-xs font-medium text-dark mb-3">Praktische tips</p>
              <ul className="flex flex-col gap-2 mb-5">
                {uitkomst.tips.map(t => (
                  <li key={t} className="flex gap-2 text-xs text-gray-500">
                    <span style={{ color: uitkomst.color }}>·</span>{t}
                  </li>
                ))}
              </ul>

              <button onClick={reset} className="btn-outline text-xs">
                ← Opnieuw beginnen
              </button>
            </div>
          )}
        </section>

        {/* Alternatieven */}
        <section className="mb-14">
          <p className="section-label">Alternatieven voor een auto</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Scooter', color: '#F2B517', prijs: '±€ 150–250/mnd', desc: 'Goedkoper, handig voor kortere ritten. Minder comfortabel in de warmte. Kijk goed naar de verzekering.' },
              { title: 'Auto delen', color: '#3EAD6E', prijs: '±€ 150–250/mnd/pp', desc: 'Deel een auto met 2–3 housegenoten. Goedkoopste optie als de planning werkt.' },
              { title: 'Taxi (incidenteel)', color: '#1A7EC5', prijs: '€ 10–20 per rit', desc: 'Voor avonden en uitstapjes. Als je echt vlak bij je werk woont kan dit genoeg zijn.' },
            ].map(a => (
              <div key={a.title} className="card">
                <div className="h-1 rounded-sm mb-3" style={{ background: a.color }} />
                <p className="font-medium text-sm text-dark mb-1">{a.title}</p>
                <p className="text-xs text-gray-400 mb-2">{a.prijs}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Woonlocatie nog niet zeker?</p>
            <p className="text-sm text-gray-600">Bekijk de wijkenvergelijking en zie hoe locatie de auto-vraag bepaalt.</p>
          </div>
          <Link to="/wonen" className="btn-terra shrink-0">Wijken vergelijken →</Link>
        </div>
      </div>
    </>
  )
}
