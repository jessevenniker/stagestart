import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

const TRUKIPAN = [
  { naam: 'BBQ Express', loc: 'Caracasbaaiweg, naast Piri Piri', desc: 'Jaren lang populair, altijd een rij. Open dagelijks.' },
  { naam: 'Disfruta Más', loc: 'Caracasbaaiweg', desc: 'Beste batidos (verse smoothies) van het eiland. Venezolaanse arepas.' },
  { naam: 'Hot Pepper', loc: 'Schottegatweg Oost', desc: 'Burritos en Mexicaans. Open dagelijks vanaf 21:00.' },
  { naam: 'The Don', loc: 'Saliña', desc: 'Street restaurant. Menu: lomito, burgers, pizza. Sfeervolle verlichting buiten.' },
]

const SUPERMARKTEN = [
  { naam: 'Centrum Supermarkt', locaties: 'Mahaai (SBN Doormanweg 26) & Piscadera (Weg naar Bullenbaai)', waarom: 'Volgens vergelijkingen van de Curaçaose Consumentenbond (2024) een van de goedkoopste op het eiland, met breed assortiment en grote groente- en fruitafdeling.', wanneer: 'Wekelijkse boodschappen' },
  { naam: 'Van den Tweel', locaties: 'Willemstad (Kaya Jacob Posner 28) & Jan Thiel (Kaya Damasco 34)', waarom: 'Nederlandse producten, A-merken. Duurder maar vertrouwd.', wanneer: 'Als je specifiek NL-product wilt' },
  { naam: 'PriceSmart', locaties: 'Saliña', waarom: 'Bulkinkoopwinkel. Goedkoper per eenheid voor grote hoeveelheden.', wanneer: 'Samen met huisgenoten inkopen' },
  { naam: 'De Chino (overal)', locaties: 'Diverse locaties door het eiland', waarom: 'Goedkoper dan grote supers voor basisproducten. Open 7:00–22:00. Beperkte versproducten.', wanneer: 'Avond/nood-aankopen' },
  { naam: 'Vreugdenhil', locaties: 'Schubappelweg (tussen Mambo en Jan Thiel)', waarom: 'Centraal voor Jan Thiel-bewoners. Verse bakkerij.', wanneer: 'Als je in Jan Thiel woont' },
  { naam: 'Mangusa Hypermarket', locaties: 'Cas Coraweg', waarom: 'Grootste supermarkt van het eiland. Breed assortiment.', wanneer: 'Grote boodschappen' },
  { naam: 'Carrefour', locaties: 'Sambil Mall', waarom: 'Internationaal assortiment in winkelcentrum.', wanneer: 'Combinatie winkelen + boodschappen' },
]

export default function Eten() {
  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Eten op Curaçao"
        title="Lokaal eten — goedkoop, lekker, en totaal anders dan je gewend bent."
        subtitle="Wat de bureaus niet vertellen: je kunt goed eten op Curaçao zonder veel geld. Je moet alleen weten waar."
        accentColor="#3EAD6E"
        image="/img/hero-eten.jpg"
        imageAlt="Lokale Curaçaose maaltijd met vis, funchi en groente"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Anti-drift marker */}
        <div className="mb-8 border-l-2 border-gray-200 pl-4 py-1">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
            Onderdeel van de stagegids StageStart Curaçao. Deze pagina is ondersteunend — voor harde vereisten rond vergunning, kosten en verblijf gelden de officiële bronnen op de kernpagina's.
          </p>
        </div>

        {/* Truk'i Pan */}
        <section className="mb-14">
          <p className="section-label">Truk’i Pan — de nachtelijke keuken</p>
          <div className="card mb-4">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Truk’i Pans zijn foodtrucks die pas na 21:00 opengaan en tot 03:00 ’s nachts open zijn. Het is de nachtelijke keuken van Curaçao. Locals, strandgangers en nachtbrakers staan er in de rij. Porties zijn groot, prijzen zijn laag, sauzen zijn legendarisch.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              <strong className="text-dark">Hoe werkt het:</strong> je rijdt naar een vaste locatie (parkeerterrein of open veld), bestelt aan het luikje, wacht op je naam en eet aan een eenvoudig tafeltje of op je motorkap.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-dark">Wat bestel je:</strong> kip, ribs, biefstuk of vis met friet of brood. Voeg veel saus toe: pinda, knoflook, pikant. De ui-salsa is lokaal en typisch — mild-pittig.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {TRUKIPAN.map((t, i) => {
              const colors = ['#D4522A', '#F2B517', '#3EAD6E', '#1A7EC5']
              return (
                <div key={t.naam} className="card">
                  <div className="h-[3px] rounded-sm mb-3" style={{ background: colors[i % colors.length] }} />
                  <p className="text-sm font-medium text-dark mb-1">{t.naam}</p>
                  <p className="text-xs text-gray-400 mb-2">{t.loc}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Snek & Pastechi */}
        <section className="mb-14">
          <p className="section-label">Snek & Pastechi — ochtend & lunch</p>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed">
              Overdag vind je langs de weg kleine sneks. De pastechi is het lokale ontbijt: een gebakken bladerdeegbroodje gevuld met kaas, tonijn, rund of kip. Goedkoop, overal, en de perfecte start van je dag.
            </p>
          </div>
        </section>

        {/* Plasa Bieu */}
        <section className="mb-14">
          <p className="section-label">Plasa Bieu — dé lunchtip</p>
          <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
            <p className="text-sm font-medium text-dark mb-2">Marshe Bieu: overdekte markthal</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Plasa Bieu (ook: Marshe Bieu) is de overdekte markthal in het centrum van Willemstad. Hier komen Curaçaoënaars massaal naartoe voor een lokale lunch. Stoba, keshi yena, funchi — echte Curaçaose keuken voor een paar gulden.
            </p>
          </div>
        </section>

        {/* Batido */}
        <section className="mb-14">
          <p className="section-label">Batido — verse fruitshake</p>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed">
              Overal langs de weg vind je Truk di Batido — verse smoothies van tropisch fruit. Met of zonder suiker, met of zonder melk. Mango batido op een hete middag is onmisbaar.
            </p>
          </div>
        </section>

        {/* Supermarkt vergelijker */}
        <section className="mb-14">
          <p className="section-label">Supermarkten vergeleken</p>
          <div className="border border-gray-100 rounded-xl overflow-hidden mb-3">
            {SUPERMARKTEN.map((s, i) => (
              <div key={s.naam} className="px-5 py-4 border-b border-gray-100 last:border-0">
                <div className="flex justify-between items-start gap-4 mb-1">
                  <span className="text-sm font-medium text-dark">{s.naam}</span>
                  <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded shrink-0">{s.wanneer}</span>
                </div>
                <p className="text-xs text-gray-400 mb-1">{s.locaties}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{s.waarom}</p>
              </div>
            ))}
          </div>

          <div className="card border-l-4 mb-3" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-xs font-medium text-dark mb-1">Let op de prijzen</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Nederlandse A-merken kosten op Curaçao 1,5 tot 2 keer zoveel als thuis. Een klein stronkje broccoli kost al snel €4. Koop lokale alternatieven waar je kunt.
            </p>
          </div>

          <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
            <p className="text-xs font-medium text-dark mb-1">Lokale tip: inpakkers</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Bij de grote supermarkten pakken inpakkers je boodschappen in. Ze leven van fooi: 2–3 gulden als ze bij de band inpakken, 5 gulden als ze het naar de auto brengen.
            </p>
          </div>
        </section>

        {/* Drank & slijterijen */}
        <section className="mb-14">
          <p className="section-label">Drank & slijterijen</p>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Voor een bredere of betere selectie wijn en spirits:
            </p>
            <ul className="flex flex-col gap-1.5">
              <li className="text-sm text-gray-600"><span className="text-sage">·</span> Bottles — Caracasbaaiweg S121</li>
              <li className="text-sm text-gray-600"><span className="text-sage">·</span> Servir Frais — Caracasbaaiweg 158c</li>
              <li className="text-sm text-gray-600"><span className="text-sage">·</span> The Wine Factory — Caracasbaaiweg</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Weten waar je ’s avonds naartoe kunt?</p>
            <p className="text-sm text-gray-600">Happy hours, clubs en het sociale weekritme van Curaçao.</p>
          </div>
          <Link to="/happy-hours" className="btn-terra shrink-0">Bekijk happy hours →</Link>
        </div>

        <LastChecked
          date="2026-04-18"
          bron="Eigen redactie — ervaringsinzicht"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
