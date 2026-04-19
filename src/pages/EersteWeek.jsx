import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import ClaimLabel from '../components/ClaimLabel'
import LastChecked from '../components/LastChecked'

const DAGEN = [
  {
    dag: 'Dag 1',
    color: '#D4522A',
    title: 'Aankomst & eerste nacht',
    taken: [
      { taak: 'Aankomst Hato Airport', detail: 'Je vergunning en paspoort worden gecontroleerd bij aankomst. Zorg dat je documenten in handbagage zitten.' },
      { taak: 'Naar je woning', detail: 'Als je via een bureau gaat, word je opgehaald. Zelf geregeld? Taxi bij de uitgang — ±ANG 40–60 naar de meeste wijken.' },
      { taak: 'Even bijkomen', detail: 'Vlucht duurt ±10 uur. Eerste nacht is voor oriëntatie, niet voor acties. Slaap, acclimatiseer.' },
      { taak: 'Bar 22 in de aankomsthal', detail: 'Direct rechts als je door de aankomstdeuren loopt staat een kleine bar. Wachten op je ophaalservice? Neem hier een drankje.' },
      { taak: 'SIM-kaart kopen', detail: 'In de aankomsthal worden SIM-kaarten verkocht. DennisMobile is een eSIM-optie waarmee je je Nederlandse nummer behoudt.' },
      { taak: 'Taxi: altijd prijs afspreken vóór instappen', detail: 'Downtown Willemstad ±15 min, Jan Thiel ±30 min, Westpunt ±35 min.' },
      { taak: 'Autoverhuur rechts in de aankomsthal', detail: 'Check altijd of er een reserveband in de auto zit voordat je wegrijdt.' },
    ],
  },
  {
    dag: 'Dag 2',
    color: '#F2B517',
    title: 'Eerste boodschappen & oriëntatie',
    taken: [
      { taak: 'Supermarkt', detail: 'Van den Tweel (AH-equivalent) is de bekendste. Pricesmart is goedkoper voor grote inkopen. Vul je koelkast.' },
      { taak: 'SIM-kaart regelen', detail: 'Digicel of Flow — beide aanwezig bij supermarkten en telefoonwinkels. Prepaid werkt prima. Kost ±ANG 15–25 voor de kaart + bundel.' },
      { taak: 'Omgeving verkennen', detail: 'Rijd of loop door je buurt. Begrijp waar de supermarkt, benzinestation en apotheek zitten.' },
    ],
  },
  {
    dag: 'Dag 3',
    color: '#3EAD6E',
    title: 'Bank & wifi',
    taken: [
      { taak: 'Geen rijbewijs omzetten nodig', detail: 'Je Nederlandse rijbewijs is geldig in Curaçao. Je kunt direct een auto huren of besturen. Omzetten naar Curaçaos rijbewijs is alleen relevant bij langdurig verblijf (>6 maanden) of registratie van een eigen voertuig.' },
      { taak: 'Pinpas testen bij een geldautomaat', detail: 'Controleer of je NL-pinpas werkt — je hebt hem vóór vertrek "op wereld" gezet. Bij een V-pay pinpas (vooral ING) moet je bij afrekenen aangeven dat het in dollars wordt verrekend, niet in euro\'s.' },
      { taak: 'Bankrekening openen (optioneel)', detail: 'MCB of Maduro & Curiel\'s Bank. Niet altijd nodig als je betalingen via NL regelt. Wel handig voor huurbetalingen lokaal. Verwacht 2-4 maanden doorlooptijd.' },
      { taak: 'Internet & wifi checken', detail: 'Is de wifi op je woning snel genoeg? Zo niet: dataplan upgraden of een hotspot regelen.' },
      { taak: 'Tijdverschil instellen', detail: 'In de Nederlandse zomer is het op Curaçao 6 uur vroeger. In de Nederlandse winter 5 uur. Handig om dit te weten voor calls met thuis of met school.' },
    ],
  },
  {
    dag: 'Dag 4–5',
    color: '#1A7EC5',
    title: 'Kennismaking stageplek',
    taken: [
      { taak: 'Eerste dag op stage', detail: 'Kom op tijd. Vraag naar je werkplek, verwachtingen en je dagelijkse rooster. Stel vragen — dit is de enige keer dat het normaal is om alles te vragen.' },
      { taak: 'Route oefenen', detail: 'Rij de route een keer door voor je eerste echte dag zodat je de reistijd weet.' },
      { taak: 'Contacten opslaan', detail: 'Sla het nummer van je huisbaas, stagebegeleider en medestudenten op. Zorg dat je 112 kent (werkt ook op Curaçao).' },
    ],
  },
  {
    dag: 'Dag 6–7',
    color: '#E8507A',
    title: 'Eerste weekend — ontdekken',
    taken: [
      { taak: 'Een strand bezoeken', detail: 'Knip Groot of Klein, Cas Abao, Playa Lagun — zet je auto neer en spring het water in. Je verdiende het.' },
      { taak: 'Willemstad centrum verkennen', detail: 'Loop over de Emma-brug, kijk naar de Handelskade, eet iets lokaals bij Gouverneur de Rouville of Plasa Bieu.' },
      { taak: 'Medestudenten ontmoeten', detail: 'De meeste studentenhuizen organiseren iets in het eerste weekend. Zo niet: stel jezelf voor aan je huisgenoten.' },
    ],
  },
]

const NUMMERS = [
  { label: 'Politie / brandweer / ambulance (spoed)', nummer: '911' },
  { label: 'Politie (niet-spoed)', nummer: '917' },
  { label: 'Medische spoed', nummer: '910' },
  { label: 'Ambulance', nummer: '912' },
  { label: 'Kustwacht', nummer: '913' },
  { label: 'Toeristenpolitie', nummer: '+599 9 674-0444' },
  { label: 'Verkeersongeval (Forensys)', nummer: '9223', toelichting: 'Inspecteurs in rode T-shirts. Verplaats de auto NIET.' },
  { label: 'Forensys WhatsApp', nummer: '+599 9 461-3282' },
  { label: 'Wegenwacht', nummer: '9247' },
  { label: 'Dierenbescherming', nummer: '+599 9 465-4300' },
  { label: 'Ziekenhuis CMC (algemeen)', nummer: '+599 9 745-0000', toelichting: 'Otrobanda' },
  { label: 'Ziekenhuis CMC (eerste hulp)', nummer: '+599 9 745-0026' },
  { label: 'Huisarts Nederlandstalig (Centro Medico)', nummer: '+599 9 737-0522', toelichting: 'SBN Doormanweg 47' },
  { label: 'MedPoint', nummer: 'zie medpoint.cw', toelichting: 'Open 7 dagen. Ook huisbezoek en teleconsultatie.' },
]

const EERSTE_WEEK_TIPS = [
  'Drink meer water dan je denkt nodig te hebben — het is heter dan je gewend bent.',
  'Ga niet meteen de eerste dag al de hele dag in de zon. Verbrand raken is makkelijker dan je denkt.',
  'Accepteer dat de eerste week chaotisch is. Dat is normaal.',
  'Sms je ouders als je er bent. Ze zitten te wachten.',
  "Open je raam 's nachts niet zonder vliegengaas — muggen zijn echt aanwezig.",
  'Betaal nooit toeristenprijzen voor eten. Vraag huisgenoten waar de locals eten.',
]

export default function EersteWeek() {
  const [checked, setChecked] = useState({})
  function toggle(id) { setChecked(p => ({ ...p, [id]: !p[id] })) }

  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Je eerste week"
        title="Dag voor dag — wat doe je wanneer."
        subtitle="De eerste week is overweldigend. Hier is een praktisch plan zodat je niets vergeet en ook gewoon kunt genieten."
        accentColor="#E8507A"
        image="/img/hero-eerste-week.jpg"
        imageAlt="Skyline van Willemstad met Handelskade, eerste aanblik bij aankomst op Curaçao"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Dag-voor-dag */}
        <section className="mb-14">
          <h2 className="section-label">Eerste weekplanning</h2>
          <div className="mb-4">
            <ClaimLabel kind="richtlijn" />
            <p className="text-xs text-gray-500 leading-relaxed mt-2 max-w-2xl">
              Dit is een praktische richtlijn op basis van ervaringen van eerdere stagiairs, geen officieel voorschrift. Pas aan op je eigen aankomst, woning en stageplek.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {DAGEN.map((dag) => (
              <div key={dag.dag} className="card overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-8 rounded-sm shrink-0" style={{ background: dag.color }} />
                  <div>
                    <p className="text-xs text-gray-400">{dag.dag}</p>
                    <p className="font-medium text-dark">{dag.title}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 ml-5">
                  {dag.taken.map((t, i) => {
                    const key = `${dag.dag}-${i}`
                    const done = checked[key]
                    return (
                      <button
                        key={key}
                        onClick={() => toggle(key)}
                        aria-pressed={done}
                        className={`text-left flex gap-3 transition-opacity ${done ? 'opacity-50' : ''}`}
                      >
                        <div
                          className="w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all"
                          style={{ borderColor: dag.color, background: done ? dag.color : 'transparent' }}
                        >
                          {done && <span className="text-white text-[10px]">✓</span>}
                        </div>
                        <div>
                          <p className={`text-sm font-medium mb-0.5 ${done ? 'line-through text-gray-400' : 'text-dark'}`}>
                            {t.taak}
                          </p>
                          <p className="text-xs text-gray-500 leading-relaxed">{t.detail}</p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Handige nummers */}
        <section className="mb-14">
          <h2 className="section-label">Handige nummers — sla op in je telefoon</h2>
          <div className="mb-4">
            <ClaimLabel kind="officieel" bron="Politie Curaçao / Forensys / ziekenhuizen" />
          </div>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            {NUMMERS.map((n, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-dark">{n.label}</p>
                  {n.toelichting && <p className="text-xs text-gray-400">{n.toelichting}</p>}
                </div>
                <p className="text-sm font-medium text-terra">{n.nummer}</p>
              </div>
            ))}
          </div>

          <div className="card border-l-4 mt-4" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-sm font-medium text-dark mb-2">Bij een verkeersongeval</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Bel 9223 voor Forensys. Dit zijn inspecteurs in rode T-shirts. Ze spreken Engels, zijn vriendelijk en professioneel. Verplaats de auto niet tot zij er zijn. Het proces duurt ongeveer een uur. Zorg voor water.
            </p>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-14">
          <h2 className="section-label">Eerste week tips</h2>
          <div className="mb-4">
            <ClaimLabel kind="ervaring" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {EERSTE_WEEK_TIPS.map((tip, i) => (
              <div key={i} className="card flex gap-3">
                <span className="font-serif text-xl text-gray-200 shrink-0 leading-none">{String(i+1).padStart(2,'0')}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Wasserettes */}
        <section className="mb-14">
          <h2 className="section-label">Wassen — waar regel je dat?</h2>
          <div className="mb-4">
            <ClaimLabel kind="ervaring" />
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-2xl">
            Niet elk studentenhuis heeft een eigen wasmachine. Twee wasserettes die stagiairs vaak gebruiken:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="card">
              <p className="text-sm font-medium text-dark mb-1">Het Washok</p>
              <p className="text-xs text-gray-400 mb-2">Caracasbaaiweg 240 · 08:00–17:00</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Je brengt je was, wordt gewassen, gedroogd en gevouwen. Na 1–2 dagen ophalen.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-1">Laundromat City Home</p>
              <p className="text-xs text-gray-400 mb-2">Rodeweg 11 · 09:00–18:00</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Service wassen of zelf machine gebruiken en meenemen om op te hangen in de zon.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Nu je er bent — ontdek het eiland</p>
            <p className="text-sm text-gray-600">Plekken, eten, strand en uitgaan als lokale, niet als toerist.</p>
          </div>
          <Link to="/leven" className="btn-terra shrink-0">Leven op Curaçao →</Link>
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
