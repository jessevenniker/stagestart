import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'
import { faqSchema } from '../utils/schema'

const FAQ_DATA = [
  {
    categorie: 'Vergunning & papieren',
    vragen: [
      { q: 'Heb ik een visum nodig?', a: 'Als Nederlander heb je geen visum nodig voor verblijf tot 90 dagen. Voor stage langer dan 90 dagen geldt de aanvraagprocedure op de Studie/Stage-pagina van de Immigratiedienst. Zie onze Vergunning-pagina voor details.' },
      { q: 'Hoe lang duurt de vergunningsaanvraag?', a: 'De Toelatingsorganisatie heeft volgens de officiële Studie/Stage-pagina maximaal 4 maanden om te beslissen. Dit is een beslistermijn, soms sneller, maar reken er niet op. Plan vooruit.' },
      { q: 'Heb ik een geboorteakte nodig?', a: 'Ja. Volgens de officiële Immigratiedienst-pagina is een geboorteakte vereist, niet ouder dan 1 jaar bij indiening. Vraag hem op tijd aan bij je gemeente.' },
      { q: 'Wat is het verschil tussen stagevergunning en Verklaring van Rechtswege?', a: 'De Immigratiedienst publiceert hier twee aparte officiële pagina\'s voor: Studie/Stage en Verklaring van Rechtswege. Dit zijn twee informatiestromen die allebei relevant kunnen zijn voor Nederlandse stagiairs. Controleer altijd zelf welke officiële route in jouw situatie geldt. Zie onze Vergunning-pagina voor uitleg.' },
      { q: 'Wat is een DI Card?', a: 'Verplichte Digital Immigration Card. Gratis invullen via dicardcuracao.com binnen 7 dagen voor vertrek. Betaal nooit via derde-partij sites.' },
    ],
  },
  {
    categorie: 'Kosten & geld',
    vragen: [
      { q: 'Welke munt gebruiken ze?', a: 'Caribbean Guilder (XCG). 1 USD = 1,79 XCG. Dollars worden ook geaccepteerd in de meeste winkels en restaurants.' },
      { q: 'Kan ik overal pinnen?', a: 'Visa en Mastercard werken breed. Taxi\'s, kleine winkels en benzinestations: cash meenemen.' },
      { q: 'Hoe zit het met fooi?', a: '15–20% is standaard in restaurants. Keukenmedewerkers delen mee. Check of er al service charge op de bon staat (vaak ±10%).' },
      { q: 'Wat kost een stage per maand?', a: 'Reken op €1.100–1.500 per maand exclusief eenmalige kosten (vergunning, vlucht, borg). Gebruik onze budgetcalculator voor een persoonlijke berekening.' },
    ],
  },
  {
    categorie: 'Wonen & vervoer',
    vragen: [
      { q: 'Heb ik een auto nodig?', a: 'Hangt af van waar je woont en werkt. Openbaar vervoer is minimaal. Gebruik onze beslisboom op de Auto-pagina.' },
      { q: 'Waar woon ik het beste?', a: 'Jan Thiel (sociaal, strand), Pietermaai (lokaal, loopafstand centrum), Piscadera (rustig, universiteit). Zie onze wijkenvergelijking.' },
      { q: 'Hoe voorkom ik woonfraude?', a: 'Betaal nooit borg zonder getekend contract + sleutel in handen. Vermijd Western Union betalingen. Check Google/Trustpilot reviews. Doe een reverse image search op foto\'s.' },
    ],
  },
  {
    categorie: 'Dagelijks leven',
    vragen: [
      { q: 'Is Curaçao veilig?', a: 'Ja, mits je je gedrag aanpast. Geen waardespullen open laten liggen, niet alleen door donkere wijken lopen, altijd met z\'n tweeën na donker.' },
      { q: 'Welke taal spreken ze?', a: 'Papiaments, Nederlands, Spaans en Engels. Met Nederlands kom je overal. "Bon dia" (goedemorgen) gaat een lange weg.' },
      { q: 'Hoe is het internet?', a: 'Goed. Digicel en Flow bieden prepaid data-bundels. WiFi in de meeste studentenhuizen. DennisMobile biedt eSIM waarmee je je NL-nummer behoudt.' },
      { q: 'Kan ik mijn rijbewijs gebruiken?', a: 'Je Nederlands rijbewijs is geldig op Curaçao. Voor een reguliere stage is omzetten naar een Curaçaos rijbewijs niet nodig. Bij langdurig verblijf (>6 maanden) of registratie van een eigen voertuig kan omzetting relevant worden. Informeer in dat geval bij de bevoegde instantie op Curaçao.' },
    ],
  },
  {
    categorie: 'Gezondheid',
    vragen: [
      { q: 'Moet ik me laten vaccineren?', a: 'Geen verplichte vaccinaties voor Curaçao. Zorg dat je Nederlandse basisverzekering actief blijft en sluit een reisverzekering af.' },
      { q: 'Is er een Nederlandstalige huisarts?', a: 'Ja. Centro Medico Aesculapius, SBN Doormanweg 47. Tel: +599 9 737-0522. Ochtend: open spreekuur. Middag: op afspraak.' },
      { q: 'Hoe zit het met muggen?', a: 'Actief in het regenseizoen (juni–november) en \'s avonds. Gebruik insectenwerende spray (DEET). Slaap met gesloten ramen of klamboe.' },
    ],
  },
]

export default function FAQ() {
  const [expanded, setExpanded] = useState(null)
  const [zoek, setZoek] = useState('')

  const zoekLower = zoek.toLowerCase()

  const gefilterd = FAQ_DATA.map(cat => ({
    ...cat,
    vragen: cat.vragen.filter(v =>
      !zoek || v.q.toLowerCase().includes(zoekLower) || v.a.toLowerCase().includes(zoekLower)
    ),
  })).filter(cat => cat.vragen.length > 0)

  return (
    <>
      <SEO schema={faqSchema(FAQ_DATA.flatMap(cat => cat.vragen).map(v => ({ question: v.q, answer: v.a })))} />
      <PageHero
        eyebrow="Veelgestelde vragen"
        title="Alles wat je nog wilt weten, op één plek."
        subtitle="Van vergunning tot zonnebrand. De antwoorden die je nodig hebt."
        accentColor="#1A7EC5"
        image="/img/hero-faq.jpg"
        imageAlt="Veelgestelde vragen over stage lopen op Curaçao"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Anti-drift marker */}
        <div className="mb-8 border-l-2 border-gray-200 pl-4 py-1">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
            Onderdeel van de stagegids StageStart Curaçao. Korte antwoorden voor oriëntatie, voor harde eisen rond vergunning, kosten en verblijf zijn de dieptepagina's leidend. Officiële bronnen winnen altijd bij conflict.
          </p>
        </div>

        {/* Zoekbalk */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Zoek een vraag..."
            value={zoek}
            onChange={e => setZoek(e.target.value)}
            className="w-full max-w-md border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky"
          />
        </div>

        {/* FAQ Accordion */}
        {gefilterd.map((cat) => (
          <section key={cat.categorie} className="mb-10">
            <h2 className="section-label">{cat.categorie}</h2>
            <div className="flex flex-col gap-2">
              {cat.vragen.map((v) => {
                const key = v.q
                const isOpen = expanded === key
                return (
                  <button
                    key={key}
                    onClick={() => setExpanded(isOpen ? null : key)}
                    className="text-left card transition-all hover:shadow-sm"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <p className="text-sm font-medium text-dark">{v.q}</p>
                      <span className={`text-gray-400 text-xs transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                    </div>
                    {isOpen && (
                      <p className="text-sm text-gray-500 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                        {v.a}
                      </p>
                    )}
                  </button>
                )
              })}
            </div>
          </section>
        ))}

        {gefilterd.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-8">Geen resultaten gevonden voor "{zoek}"</p>
        )}

        {/* CTA */}
        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between mt-8">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Nog meer hulp nodig?</p>
            <p className="text-sm text-gray-600">Begin met ons stappenplan, van papieren tot je eerste week op het eiland.</p>
          </div>
          <Link to="/begin-hier" className="btn-terra shrink-0">Begin hier →</Link>
        </div>

        <LastChecked
          date="2026-04-18"
          bron="Immigratiedienst Curaçao + eigen redactie"
          bronUrl="https://immigrationcur.org/dep/studie-stage/"
          gevoeligheid="hoog"
        />
      </div>
    </>
  )
}
