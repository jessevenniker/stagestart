import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'
import { BRONNEN, BRONSOORTEN, GEVOELIGHEID, REDACTIONELE_REGEL, laatsteUpdate } from '../data/bronnen'
import { useState } from 'react'

const PAGINA_LABELS = {
  'voor-vertrek': 'Voor vertrek',
  'vergunning': 'Vergunning',
  'kosten': 'Kosten',
  'wonen': 'Wonen',
  'auto': 'Auto',
  'eerste-week': 'Eerste week',
  'leven': 'Leven op Curaçao',
}

export default function Bronnen() {
  const [filter, setFilter] = useState('alles')

  const gefilterd = filter === 'alles'
    ? BRONNEN
    : BRONNEN.filter(b => b.bronsoort === filter)

  const gegroepeerd = gefilterd.reduce((acc, b) => {
    const key = b.pagina
    if (!acc[key]) acc[key] = []
    acc[key].push(b)
    return acc
  }, {})

  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Bronnen & verantwoording"
        title="Hier staat waar onze informatie vandaan komt."
        subtitle="StageStart Curaçao is bronvast. Elke harde claim op de site staat hieronder, met de officiële bron en de laatste controle-datum. Niks geheim, niks verzonnen."
        accentColor="#1A7EC5"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Toelichting */}
        <section className="mb-10">
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Volgens ons interne <strong className="text-dark">Reliability Framework</strong> moet elke claim die invloed heeft op geld, documenten, gezondheid, verzekering of verblijfsstatus rusten op een primaire bron.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Op deze pagina zie je per claim: de bron, de soort (officieel / richtlijn / ervaring), wanneer voor het laatst gecontroleerd, en de gevoeligheid voor verandering.
            </p>
          </div>
        </section>

        {/* Redactionele besluitregel */}
        <section className="mb-10">
          <p className="section-label">Onze redactionele besluitregel</p>
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
            <p className="text-sm font-medium text-dark mb-2">{REDACTIONELE_REGEL.titel}</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">{REDACTIONELE_REGEL.uitleg}</p>
            <p className="text-xs text-gray-400">Vastgesteld: {REDACTIONELE_REGEL.vastgesteld}</p>
          </div>
        </section>

        {/* Updatebeleid */}
        <section className="mb-10">
          <p className="section-label">Ons updatebeleid</p>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Een betrouwbare gids is alleen betrouwbaar als de informatie niet verouderd raakt. Wij werken met een vast controleritme per gevoeligheidsniveau:
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-4">
              {Object.entries(GEVOELIGHEID).map(([key, cfg]) => (
                <div key={key} className="border-l-2 pl-3" style={{ borderLeftColor: key === 'hoog' ? '#D4522A' : key === 'middel' ? '#F2B517' : '#9CA3AF' }}>
                  <p className="text-xs font-medium text-dark mb-1">{cfg.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{cfg.controlefrequentie}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Concreet betekent dat:
            </p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600 mb-3">
              <li>· Elke claim heeft een <strong className="text-dark">laatste-check-datum</strong> die zichtbaar onderaan elke pagina staat.</li>
              <li>· Bij officiële wijzigingen (Immigratiedienst, DUO, Justis) passen we de tekst én de datum direct aan.</li>
              <li>· Minimaal één keer per kwartaal lopen we alle kritieke claims na tegen hun bron — ook als er geen aanleiding voor lijkt.</li>
              <li>· Claims zonder recente check verhuizen naar "richtlijn" of worden verwijderd.</li>
            </ul>
            <p className="text-xs text-gray-400 leading-relaxed">
              Signaleer je verouderde of onjuiste informatie? Laat het weten — de site leeft van die feedback.
            </p>
          </div>
        </section>

        {/* Legenda */}
        <section className="mb-10">
          <p className="section-label">Hoe we claims labelen</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {Object.entries(BRONSOORTEN).map(([key, cfg]) => (
              <div key={key} className="card">
                <span
                  className="inline-block px-2 py-0.5 rounded border text-[10px] font-medium tracking-wider uppercase mb-2"
                  style={{ color: cfg.kleur, borderColor: cfg.kleur }}
                >
                  {cfg.label}
                </span>
                <p className="text-xs text-gray-500 leading-relaxed">{cfg.omschrijving}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Filter */}
        <section className="mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('alles')}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                filter === 'alles'
                  ? 'bg-dark text-white border-dark'
                  : 'border-gray-200 text-gray-500 hover:border-gray-400'
              }`}
            >
              Alle ({BRONNEN.length})
            </button>
            {Object.entries(BRONSOORTEN).map(([key, cfg]) => {
              const aantal = BRONNEN.filter(b => b.bronsoort === key).length
              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                    filter === key
                      ? 'bg-dark text-white border-dark'
                      : 'border-gray-200 text-gray-500 hover:border-gray-400'
                  }`}
                >
                  {cfg.label} ({aantal})
                </button>
              )
            })}
          </div>
        </section>

        {/* Bronnenlijst per pagina */}
        <section className="mb-10">
          <p className="section-label">Claims per pagina ({gefilterd.length} totaal)</p>
          {Object.entries(gegroepeerd).map(([pagina, items]) => (
            <div key={pagina} className="mb-8">
              <h3 className="font-serif text-lg font-normal text-dark mb-3">
                {PAGINA_LABELS[pagina] || pagina}
              </h3>
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                {items.map((b, i) => {
                  const cfg = BRONSOORTEN[b.bronsoort]
                  const gev = GEVOELIGHEID[b.gevoeligheid]
                  return (
                    <div key={i} className="px-5 py-4 border-b border-gray-100 last:border-0">
                      <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-dark mb-0.5">{b.claim}</p>
                          <p className="text-sm text-gray-600">{b.waarde}</p>
                        </div>
                        <span
                          className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded border shrink-0"
                          style={{ color: cfg.kleur, borderColor: cfg.kleur }}
                        >
                          {cfg.label}
                        </span>
                      </div>
                      {b.notitie && (
                        <p className="text-xs text-gray-500 leading-relaxed mt-2 italic">{b.notitie}</p>
                      )}
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px] text-gray-400">
                        {b.bron && (
                          <span>
                            Bron:{' '}
                            {b.bron.url ? (
                              <a href={b.bron.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 underline hover:text-dark">
                                {b.bron.naam}
                              </a>
                            ) : (
                              <span className="text-gray-600">{b.bron.naam}</span>
                            )}
                          </span>
                        )}
                        <span>Gecontroleerd: {b.laatsteCheck}</span>
                        <span>Gevoeligheid: {gev?.label} ({gev?.controlefrequentie})</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </section>

        {/* Verklaring */}
        <section className="mb-10">
          <p className="section-label">Wat we niet publiceren</p>
          <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Volgens ons framework publiceren we bewust geen:
            </p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
              <li>· Harde wijkranglijsten qua veiligheid</li>
              <li>· Stellige criminaliteitsclaims per buurt</li>
              <li>· Onduidelijke belasting- of verzekeringsadviezen</li>
              <li>· Juridische claims op basis van blogs</li>
              <li>· Inhoud die commerciële partijen anders formuleren dan officiële bronnen, zonder duidelijke nuancering</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              Bij twijfel: niet publiceren, of alleen met duidelijke nuance.
            </p>
          </div>
        </section>

        <LastChecked
          date={laatsteUpdate()}
          bron="Site-brede check"
          gevoeligheid="hoog"
        />
      </div>
    </>
  )
}
