import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'
import ClaimLabel from '../components/ClaimLabel'
import RelatedPages from '../components/RelatedPages'
import ReadingProgress from '../components/ReadingProgress'
import { articleSchema } from '../utils/schema'
import { useScrollDepth } from '../hooks/useScrollDepth'

const RELATED = [
  { to: '/wonen', label: 'Wonen', desc: 'Wijken vergeleken op huurprijs en bereik.' },
  { to: '/auto', label: 'Auto', desc: 'Beslisboom: wel of geen auto nodig.' },
  { to: '/voor-vertrek', label: 'Voor vertrek', desc: 'Eenmalige kosten in het stappenplan.' },
]

const SCHEMA = articleSchema({
  headline: 'Kosten stage Curaçao: realistisch overzicht',
  description: 'XCG 525 leges, DUO 2026 bedragen, maandlasten en verborgen kosten. Officieel, richtlijn en ervaring apart gelabeld.',
  path: '/kosten',
  dateModified: '2026-04-16',
})

function fmt(n) {
  return '€\u00a0' + Math.round(n).toLocaleString('nl-NL')
}

const EENMALIG = [
  { label: 'Retourvlucht Amsterdam–Curaçao', range: '€ 600 – 1.000', tip: 'Piekperiodes (duurder): december, januari, schoolvakanties. Tip: boek op dinsdagen, 1 maand vooruit bij Corendon/TUI.' },
  { label: 'Stagevergunning', range: '± € 320', tip: 'Legeskosten: XCG 525 (± €263). VOG: €41,35. Geboorteakte: ±€15. Bankkosten overboeking: ±€10–20. Bron: Immigratiedienst Curaçao.' },
  { label: 'Borg woning', range: '€ 375 – 675', tip: 'Meestal 1 tot 1,5 keer de maandhuur. Krijg je terug aan het einde als alles in orde is.' },
  { label: 'Borg auto', range: '€ 500 – 1.000', tip: 'Afhankelijk van de verhuurder en het type auto. Krijg je terug bij inlevering zonder schade.' },
  { label: 'Inrichting & eerste boodschappen', range: '€ 100 – 300', tip: 'Handdoeken, beddengoed, kookgerei. Afhankelijk van hoe volledig de woning al is.' },
  { label: 'SIM-kaart Curaçao', range: '€ 10 – 25', tip: 'Digicel of Flow. Prepaid-bundels werken goed.' },
]

const MAANDELIJKS = [
  { label: 'Huur (kamer/studio/appartement)', range: '€ 375 – 1.000', tip: 'Kamer in studentenhuis: ANG 750–900 (€375–450). Studio: vanaf ANG 850 (€425). Appartement: vanaf ANG 950 (€475+). Utilities (gas/water/elektra) ±€50 extra.' },
  { label: 'Auto huren', range: '€ 400 – 475', tip: 'Circa ANG 800–950/mnd inclusief WA-verzekering. Deel met medestudenten om kosten te halveren.' },
  { label: 'Benzine', range: '€ 50 – 75', tip: 'Circa ANG 2 per liter (≈€1). Goedkoper dan in Nederland.' },
  { label: 'Boodschappen', range: '€ 125 – 200', tip: 'Circa ANG 250-400/mnd. Veel producten zijn duurder dan in Nederland door belastingen en de kleine markt. Lokale opties (lokaal vlees, lokale zuivel zoals CMC, vers fruit) zijn vaak goedkoper dan geïmporteerde merken.' },
  { label: 'Uit eten', range: '€ 80 – 200', tip: 'Budget maaltijd: ±ANG 20 (€10). Regulier restaurant: ±ANG 35 (€17,50). Lokale plekken zijn betaalbaar.' },
  { label: 'Uitgaan & vrije tijd', range: '€ 100 – 300', tip: 'Bier happy hour: ANG 4,50 (€2,25). Entree clubs: gratis tot ANG 10 (€5). Strandtoegang: gratis tot ANG 20 (€10).' },
  { label: 'Verzekering (reis + zorg + WA)', range: '€ 60 – 120', tip: 'Houd je Nederlandse basisverzekering actief. Sluit een reisverzekering af voor de hele periode.' },
  { label: 'Internet & telefoon', range: '€ 15 – 30', tip: 'Digicel of Flow. Prepaid-bundels werken goed. SIM-kaart koop je in je eerste week.' },
]

const INKOMSTEN = [
  { label: 'Stagevergoeding', range: '€ 0 – 500', tip: 'Niet verplicht op Curaçao. Gemiddeld ±€375/mnd (ANG 200–500). Vraag het expliciet voor je tekent. Gemiddeld uurloon: ANG 12,50.' },
  { label: 'OV-vergoeding DUO', range: '€ 110,95 / mnd', tip: 'Bedrag 2026. Stop je studentenreisproduct minimaal 2 maanden voor vertrek via Mijn DUO. Bijna niemand doet dit!' },
  { label: 'Basisbeurs DUO (uitwonend, HBO/WO)', range: '€ 324,52 / mnd', tip: 'Bedrag 2026. Je basisbeurs loopt gewoon door tijdens je stage. Geldt voor uitwonende studenten.' },
]

export default function Kosten() {
  const [v, setV] = useState({ rent: 425, car: 440, food: 200, eat: 120, fun: 200, ins: 90, salary: 375 })
  const [duo, setDuo] = useState(true)
  const [basis, setBasis] = useState(324.52)

  useScrollDepth('Scroll 75 Kosten')

  const costs = v.rent + v.car + v.food + v.eat + v.fun + v.ins + 50 + 22
  const income = v.salary + (duo ? 110.95 : 0) + basis
  const gap = costs - income

  function set(key, val) { setV(p => ({ ...p, [key]: Number(val) })) }

  return (
    <>
      <ReadingProgress />
      <SEO schema={SCHEMA} />
      <PageHero
        eyebrow="Wat kost een stage op Curaçao?"
        title="Eerlijk kostenoverzicht, zonder verborgen posten."
        subtitle="De meeste bureaus noemen €1.500–2.000 per maand. Dat klopt, maar de details maken het verschil. Hier zie je precies waar je geld naartoe gaat."
        accentColor="#F2B517"
        image="/img/hero-kosten.jpg"
        imageAlt="Handelskade Willemstad met kleurrijke gevels en lokale winkels"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Eenmalige kosten */}
        <section className="mb-14">
          <h2 className="section-label">Eenmalige kosten voor vertrek</h2>
          <ClaimLabel kind="officieel" bron="Immigratiedienst + Justis" link="https://immigrationcur.org/dep/studie-stage/" />
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            {EENMALIG.map((r, i) => (
              <div key={i} className="px-5 py-4 border-b border-gray-100 last:border-0">
                <div className="flex justify-between items-start gap-4 mb-1">
                  <span className="text-sm font-medium text-dark">{r.label}</span>
                  <span className="text-sm font-medium text-terra shrink-0">{r.range}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{r.tip}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 leading-relaxed">
            Totaal eenmalig: reken op <strong className="text-dark">€ 1.700 – 3.300</strong> voordat je vertrekt, naast je lopende maandkosten.
          </p>
        </section>

        {/* Maandelijkse kosten */}
        <section className="mb-14">
          <h2 className="section-label">Maandelijkse kosten</h2>
          <ClaimLabel kind="richtlijn" />
          <div className="border border-gray-100 rounded-xl overflow-hidden mb-3">
            {MAANDELIJKS.map((r, i) => (
              <div key={i} className="px-5 py-4 border-b border-gray-100 last:border-0">
                <div className="flex justify-between items-start gap-4 mb-1">
                  <span className="text-sm font-medium text-dark">{r.label}</span>
                  <span className="text-sm font-medium text-terra shrink-0">{r.range}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{r.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inkomsten */}
        <section className="mb-14">
          <h2 className="section-label">Inkomsten & vergoedingen</h2>
          <ClaimLabel kind="officieel" bron="DUO" link="https://duo.nl" />
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            {INKOMSTEN.map((r, i) => (
              <div key={i} className="px-5 py-4 border-b border-gray-100 last:border-0">
                <div className="flex justify-between items-start gap-4 mb-1">
                  <span className="text-sm font-medium text-dark">{r.label}</span>
                  <span className="text-sm font-medium text-sage shrink-0">{r.range}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{r.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Verborgen kosten */}
        <section className="mb-14">
          <h2 className="section-label">Verborgen kosten die bureaus niet noemen</h2>
          <ClaimLabel kind="ervaring" />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { color: '#D4522A', title: 'DI Card: gratis, maar val er niet voor nep-sites', desc: 'Curaçao vereist een Digital Immigration Card die je binnen 7 dagen voor vertrek invult. Dit is gratis via dicardcuracao.com. Er circuleren derde-partij sites die hier kosten voor rekenen. Betaal nooit voor de DI card.' },
              { color: '#F2B517', title: 'Caribbean Guilder (Cg) wisselkoers', desc: 'Curaçao gebruikt sinds 31 maart 2025 de Caribbean Guilder, gekoppeld aan de dollar. In winkels rekenen ze USD 1 = Cg 1,82; officieel is dat Cg 1,79. Klein verschil maar relevant voor je budget.' },
              { color: '#3EAD6E', title: 'Service charge in restaurants', desc: 'Ongeveer 10% is vaak al verwerkt in de rekening. In hotels soms 12%. Controleer je bon voordat je extra fooi geeft.' },
              { color: '#1A7EC5', title: 'Taxi\'s accepteren geen pin', desc: 'Taxi\'s werken bijna altijd op cash. Heb je bij aankomst geen cash, dan is je eerste rit duur of problematisch. Zorg altijd voor cash bij je.' },
              { color: '#E8507A', title: 'Elektriciteit en water niet altijd inbegrepen', desc: 'Veel studentenwoningen rekenen G/W/L apart. Airco verbruikt veel stroom. Dit is een echte maandelijkse post. Vraag dit expliciet na bij je verhuurder.' },
              { color: '#D4522A', title: 'Tankprocedure werkt anders', desc: 'Je betaalt vooraf het bedrag waarvoor je wilt tanken, daarna gaat de pomp open. Je moet dus vooraf inschatten hoeveel je nodig hebt. Te veel betaald? Je krijgt terug bij de kassa.' },
              { color: '#F2B517', title: 'Supermarkt inpakkers', desc: 'Bij grote supers wordt je boodschappen ingepakt. Ze leven van fooi: 2–3 gulden bij de band, 5 gulden naar de auto.' },
              { color: '#3EAD6E', title: 'Auto eigen risico', desc: 'Curaçao-auto\'s hebben vrijwel altijd schade. Controleer of jouw verzekering een eigen risico heeft en hoe hoog dat is. Bij lokale verhuurders is de WA-dekking soms lager dan de Nederlandse standaard.' },
              { color: '#1A7EC5', title: 'Retourticket is verplicht', desc: 'De douane laat je niet het eiland op zonder retourticket. Op het laatste moment boeken is altijd duurder.' },
              { color: '#E8507A', title: 'Stroom is duur, airco tikt snel aan', desc: 'Elektriciteit op Curaçao is een van de duurste van de regio. Zet de airco uit als je de deur uitgaat.' },
              { color: '#D4522A', title: 'Adapter meenemen', desc: 'Curaçao gebruikt zowel 220V Europees als 110V Amerikaans. Neem een universele adapter mee vanuit Nederland.' },
              { color: '#F2B517', title: 'Fooi is 15–20%', desc: 'Standaard in restaurants. Keukenmedewerkers delen mee. Geen extra fooi als service charge al op de bon staat.' },
              { color: '#3EAD6E', title: 'Bankrekening openen duurt 2–4 maanden', desc: 'Begin er vroeg mee als je langer blijft. Regel betalingen zoveel mogelijk via je Nederlandse rekening.' },
              { color: '#1A7EC5', title: 'Tanken: betaal vooraf', desc: 'Gele slang = benzine, zwarte slang = diesel. Alle stations hebben exact dezelfde prijs (vastgesteld op de 3e van elke maand).' },
            ].map((item, i) => (
              <div key={i} className="card p-0 overflow-hidden">
                <div className="h-[3px]" style={{ backgroundColor: item.color }} />
                <div className="p-5">
                  <p className="text-sm font-medium text-dark mb-1.5">{item.title}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calculator */}
        <section className="mb-14">
          <h2 className="section-label">Persoonlijke budgetcalculator</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="card">
              <p className="text-sm font-medium text-dark mb-5">Pas aan op jouw situatie</p>

              {[
                { key: 'rent', label: 'Huur', min: 375, max: 1000 },
                { key: 'car',  label: 'Auto', min: 0,   max: 600 },
                { key: 'food', label: 'Boodschappen', min: 100, max: 400 },
                { key: 'eat',  label: 'Uit eten', min: 0, max: 400 },
                { key: 'fun',  label: 'Vrije tijd', min: 0, max: 700 },
                { key: 'ins',  label: 'Verzekering', min: 40, max: 180 },
              ].map(row => (
                <div key={row.key} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-500">{row.label}</span>
                    <span className="text-xs font-medium">{row.key === 'car' && v[row.key] === 0 ? 'geen auto' : fmt(v[row.key])}</span>
                  </div>
                  <input type="range" min={row.min} max={row.max} step={10}
                    value={v[row.key]} onChange={e => set(row.key, e.target.value)} className="w-full" />
                </div>
              ))}

              <div className="border-t border-gray-100 pt-4 mt-2">
                <p className="text-xs text-gray-500 mb-3">Inkomsten</p>
                <div className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-500">Stagevergoeding</span>
                    <span className="text-xs font-medium">{fmt(v.salary)}</span>
                  </div>
                  <input type="range" min={0} max={600} step={10}
                    value={v.salary} onChange={e => set('salary', e.target.value)} className="w-full" />
                </div>

                <label className="flex items-center gap-2 text-xs text-gray-500 mb-2 cursor-pointer">
                  <input type="checkbox" checked={duo} onChange={e => setDuo(e.target.checked)} className="rounded" />
                  OV-vergoeding DUO (€110,95/mnd in 2026), zorg dat je dit aanvraagt
                </label>

                <div className="flex gap-3">
                  {[{ v: 324.52, l: 'Uitwonend HBO/WO (€324,52)' }, { v: 0, l: 'Geen basisbeurs' }].map(o => (
                    <label key={o.v} className="flex items-center gap-1.5 text-xs text-gray-500 cursor-pointer">
                      <input type="radio" name="basis" checked={basis === o.v} onChange={() => setBasis(o.v)} />
                      {o.l}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-2">Kosten / mnd</p>
                    <p className="text-2xl font-medium text-terra">{fmt(costs)}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-2">Inkomsten</p>
                    <p className="text-2xl font-medium text-sage">{fmt(income)}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-2">Tekort / mnd</p>
                    <p className={`text-2xl font-medium ${gap > 0 ? 'text-terra' : 'text-sage'}`}>{fmt(Math.abs(gap))}</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <p className="text-xs font-medium text-dark mb-3">Bespaartips</p>
                {[
                  'Kies een groter studentenhuis, goedkoper per persoon en socialer',
                  'Deel een auto met medestudenten: scheelt €200–300 per maand per persoon',
                  'Kook zelf en kies lokale producten waar mogelijk: geïmporteerde merken zijn duurder',
                  'Neem zonnebrand, shampoo en medicijnen mee vanuit Nederland',
                  'Stop je OV-kaart, €110,95/mnd (2026) die je anders laat liggen',
                ].map((t, i) => (
                  <div key={i} className="flex gap-2 items-start py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sage text-xs mt-0.5 shrink-0">✓</span>
                    <span className="text-xs text-gray-500 leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Alles op een rij in de startgids</p>
            <p className="text-sm text-gray-600">Download de gratis checklist met alle kosten, vergunningsstappen en tips voor vertrek.</p>
          </div>
          <a href="/downloads/stagestart-startgids.pdf" download="stagestart-startgids.pdf" className="btn-terra shrink-0">Download gratis →</a>
        </div>

        <div className="mt-10">
          <RelatedPages items={RELATED} />
        </div>

        <LastChecked
          date="2026-04-16"
          bron="Immigratiedienst Curaçao + DUO"
          bronUrl="https://immigrationcur.org/dep/studie-stage/"
          gevoeligheid="middel"
        />
      </div>
    </>
  )
}
