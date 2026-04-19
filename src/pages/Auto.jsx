import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import ClaimLabel from '../components/ClaimLabel'
import LastChecked from '../components/LastChecked'

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
    body: 'Op basis van je woon- en werklocatie is een auto vrijwel noodzakelijk. Openbaar vervoer op Curaçao is minimaal en onregelmatig. Overweeg een auto te delen met medestudenten. Dat scheelt €200–300 per persoon per maand.',
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
    body: 'Gefeliciteerd, je bent in de minderheid. Vanuit centrum of Pietermaai kun je op loopafstand werken en de meeste boodschappen doen. Overweeg wel een scooter of fiets voor wat meer vrijheid.',
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
      <SEO />
      <PageHero
        eyebrow="Heb je een auto nodig?"
        title="Eerlijk antwoord — hangt af van jouw situatie."
        subtitle="Bureaus zeggen bijna altijd 'ja, je hebt een auto nodig'. Dat klopt niet altijd. Het hangt volledig af van waar je woont en werkt. Gebruik de beslisboom."
        accentColor="#1A7EC5"
        image="/img/hero-auto.jpg"
        imageAlt="Kustweg op Curaçao met uitzicht op zee, typische rijroute van en naar stageplekken"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Decision tree */}
        <section className="mb-14">
          <h2 className="section-label">Beslisboom</h2>

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

        {/* Verzekering — kern van wat stagiairs onderschatten */}
        <section className="mb-14">
          <h2 className="section-label">Verzekering — grootste financiële risico</h2>
          <ClaimLabel kind="richtlijn" />
          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
            Curaçao-auto's hebben vrijwel altijd al wat schade. Hoe je verzekering geregeld is, bepaalt of één deuk je €500 of €0 kost. Controleer dit expliciet bij het tekenen van het huurcontract.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
              <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">WA-only</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                Alleen schade aan anderen gedekt. Elke kras op de huurauto zelf betaal je volledig uit eigen zak.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Goedkoopste optie, hoogste risico. Op Curaçao vaak af te raden door parkeersituaties en lokaal verkeer.
              </p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
              <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">All-risk / CDW</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                Ook schade aan de huurauto gedekt — met een eigen risico van meestal €500 tot €1.500.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Duurder per maand, maar een deuk kost je dan alleen het eigen risico, niet duizenden euro's.
              </p>
            </div>
          </div>
          <div className="card">
            <p className="text-xs font-medium text-dark mb-3 uppercase tracking-wider">Vragen om altijd te stellen</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Wat is het eigen risico bij schade?</li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Is banden/velgen/onderkant gedekt? (vaak uitgesloten)</li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Geldt de verzekering ook bij onverharde wegen?</li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Wordt de borg volledig ingehouden bij schade, of alleen het eigen risico?</li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Mag een ander in je huisgenotengroep ook rijden? (bijverzekering)</li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span>Ben je jonger dan 23? Controleer of de verzekering óók geldt voor bestuurders onder de 23 — dit is geen standaard.</li>
            </ul>
          </div>
        </section>

        {/* Ophalen — schade-inspectie */}
        <section className="mb-14">
          <h2 className="section-label">Bij het ophalen — schade-inspectie</h2>
          <ClaimLabel kind="ervaring" />
          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
            Op Curaçao hebben auto's vaak al bestaande schade. Als die niet genoteerd staat bij het ophalen, kun je die bij inlevering zelf moeten betalen. Een half uurtje extra kost je een hoop geld later.
          </p>
          <div className="card">
            <p className="text-xs font-medium text-dark mb-3 uppercase tracking-wider">Checklist voor je wegrijdt</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Loop rondom de auto. Maak foto's van elke bestaande kras, deuk of schade.</li>
              <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Laat alle bestaande schade vastleggen in het contract — ook kleine.</li>
              <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Check of een reserveband aanwezig is (niet vanzelfsprekend op Curaçao).</li>
              <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Check bandenspanning en bandenprofiel.</li>
              <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Start de auto, check airco, ruitenwissers, lichten.</li>
              <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Vraag naar de tankprocedure: vol inleveren of leeg — wat is de afspraak?</li>
              <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Bewaar foto's en contract-copy digitaal in je cloud.</li>
            </ul>
          </div>
        </section>

        {/* Tanken op Curaçao */}
        <section className="mb-14">
          <h2 className="section-label">Tanken — werkt anders dan in Nederland</h2>
          <ClaimLabel kind="richtlijn" />
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Op Curaçao betaal je vooraf het bedrag waarvoor je wilt tanken. Daarna gaat de pomp open. Je moet dus vooraf inschatten hoeveel je nodig hebt.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600 mb-3">
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Loop eerst naar de kassa en zeg hoeveel je wilt tanken (in XCG).</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Gele slang = benzine. Zwarte slang = diesel.</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Kwam de pomp niet tot je ingevoerde bedrag? Terug naar de kassa voor wisselgeld.</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Prijs per liter is op heel Curaçao gelijk en wordt op de 3e van elke maand vastgesteld.</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Cash werkt altijd. Pin niet overal — houd cash bij je.</li>
            </ul>
          </div>
        </section>

        {/* Ongeval — Forensys */}
        <section className="mb-14">
          <h2 className="section-label">Bij schade of een ongeluk</h2>
          <ClaimLabel kind="officieel" bron="Curaçaose hulpdiensten" />
          <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-sm font-medium text-dark mb-2">Bel Forensys: 9223</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Bij elk ongeval — hoe klein ook — bel je Forensys. Dat zijn verkeersinspecteurs in rode T-shirts. Ze komen ter plaatse, spreken Engels en maken een rapport op.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600 mb-3">
              <li className="flex gap-2"><span className="text-terra shrink-0">·</span><strong className="text-dark">Verplaats de auto niet</strong> tot Forensys er is — ook niet als je verkeer blokkeert.</li>
              <li className="flex gap-2"><span className="text-terra shrink-0">·</span>Maak foto's van beide auto's, het hele wegdek, eventuele verkeersborden.</li>
              <li className="flex gap-2"><span className="text-terra shrink-0">·</span>Wissel geen geld uit met de andere partij. Laat Forensys het regelen.</li>
              <li className="flex gap-2"><span className="text-terra shrink-0">·</span>Bel direct ook je verhuurder om de procedure af te stemmen.</li>
              <li className="flex gap-2"><span className="text-terra shrink-0">·</span>Bewaar het Forensys-rapportnummer — je verzekering en verhuurder hebben dit nodig.</li>
              <li className="flex gap-2"><span className="text-terra shrink-0">·</span>Reken op circa een uur — neem water mee.</li>
            </ul>
            <p className="text-xs text-gray-500 leading-relaxed">
              Alternatief voor Forensys: WhatsApp +599 9 461-3282. Bij gewonden eerst 911 bellen.
            </p>
          </div>
        </section>

        {/* Auto delen tussen huisgenoten */}
        <section className="mb-14">
          <h2 className="section-label">Auto delen met huisgenoten</h2>
          <ClaimLabel kind="ervaring" />
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Delen is de goedkoopste optie — €200-300 per persoon per maand. Maar de afspraken moeten kloppen, anders gaat het misschien mis.
            </p>
            <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Vooraf afspreken</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600 mb-4">
              <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Wie staat er op het huurcontract? Die persoon draagt de juridische verantwoordelijkheid.</li>
              <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Mogen alle huisgenoten rijden? Vraag of bijrijder-dekking standaard is of extra kost.</li>
              <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Hoe verdeel je de huur en benzine? (gelijk, of naar gebruik?)</li>
              <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Wie betaalt als er schade is — de rijder, de contractant, of gedeeld?</li>
              <li className="flex gap-2"><span className="text-sage shrink-0">·</span>Hoe plan je de auto? (gedeelde agenda, WhatsApp-groep, eerst aanvraagt eerst krijgt?)</li>
            </ul>
            <p className="text-xs text-gray-500 leading-relaxed italic">
              Zet afspraken op papier — ook als het met vrienden is. Schade, verkeersboetes en rechtszaken gaan altijd via de persoon op het contract, ongeacht wie er reed.
            </p>
          </div>
        </section>

        {/* Taxi, bus, navigatie */}
        <section className="mb-14">
          <h2 className="section-label">Taxi's, bussen en navigatie</h2>
          <ClaimLabel kind="richtlijn" />
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <div className="card">
              <p className="text-sm font-medium text-dark mb-2">Taxi: check het nummerbord</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-2">
                <strong className="text-dark">Legale taxi's op Curaçao hebben een nummerbord dat begint met "TX".</strong> Taxi's zonder TX-nummerbord zijn niet officieel — stap daar niet in, ook niet als het goedkoper lijkt.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Populaire apps: 24-7 TAXI (bestellen via app, cash of pin). Als alternatief nummer: Taxi Tiger +599 9 515-2141.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-2">Bus / openbaar vervoer</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Er rijdt wel degelijk openbaar vervoer op Curaçao, al is het beperkt. De app <strong className="text-dark">ABC Curaçao</strong> toont dienstregelingen en bushalte-informatie. Niet altijd betrouwbaar, wel goedkoop.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-2">Navigatie: ook offline</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Google Maps werkt goed op Curaçao. Voor offline navigatie (bij slechte dekking op de noordkust): download de kaart van Curaçao vooraf in Google Maps, of gebruik de app <strong className="text-dark">maps.me</strong> voor volledige offline dekking.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-2">Praktisch</p>
              <ul className="flex flex-col gap-1.5 text-xs text-gray-500">
                <li>· Spreek vóór instappen af wat de rit kost — niet alle taxi's hebben een meter.</li>
                <li>· Cash bij de hand — pin werkt niet altijd.</li>
                <li>· 's Nachts alleen met iemand reizen, niet solo in een taxi.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Alternatieven */}
        <section className="mb-14">
          <h2 className="section-label">Alternatieven voor een auto</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Scooter', color: '#F2B517', prijs: '±€ 150–250/mnd', desc: 'Goedkoper, handig voor kortere ritten. Minder comfortabel in de warmte. Kijk goed naar de verzekering.' },
              { title: 'Auto delen', color: '#3EAD6E', prijs: '±€ 150–250/mnd/pp', desc: 'Deel een auto met 2–3 huisgenoten. Goedkoopste optie als de planning werkt.' },
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

        <LastChecked
          date="2026-04-16"
          bron="Eigen redactie + ervaringen stagiairs"
          gevoeligheid="middel"
        />
      </div>
    </>
  )
}
