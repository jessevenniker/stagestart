import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'
import { getVerhalenByType } from '../data/verhalen'

// Google Form voor inzending van een verhaal. Zelfde formulier voor
// stagiair- en tussenjaar-verhalen (iemand die invult geeft zelf aan
// welk type ervaring het is via de persoonlijke velden).
const VERHAAL_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfVuR4ugzjd7PrMRpPe-tVwiUhM9KgW_0MTcDaM8olRfNOr0g/viewform'

function VerhaalCard({ v }) {
  return (
    <Link
      to={`/verhalen/${v.slug}`}
      className="group flex flex-col rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={v.foto}
          alt={`Portret van ${v.voornaam}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="h-1 rounded-sm mb-4" style={{ background: v.accent }} />
        <p className="font-serif text-xl text-dark mb-1">{v.voornaam}</p>
        <p className="text-xs text-gray-400 mb-3">
          {/* Stage toont opleiding, tussenjaar toont sector (geen lopende opleiding) */}
          {v.type === 'tussenjaar' ? v.sector : v.opleiding} · {v.wijk}
        </p>
        <blockquote
          className="text-sm text-gray-600 leading-relaxed italic mb-4 flex-1"
          style={{ borderLeft: `3px solid ${v.accent}`, paddingLeft: '12px' }}
        >
          "{v.quote}"
        </blockquote>
        <p className="text-xs hover:underline mt-auto" style={{ color: v.accent }}>
          Lees het verhaal →
        </p>
      </div>
    </Link>
  )
}

export default function Verhalen() {
  const stageVerhalen = getVerhalenByType('stage')
  const tussenjaarVerhalen = getVerhalenByType('tussenjaar')

  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Verhalen van stagiairs"
        title="Echte ervaringen van eerdere stagiairs."
        subtitle="Niet als reclame, maar om je te laten zien wat je kunt verwachten. Elk verhaal is een persoonlijke ervaring, geen officieel advies. Voor harde feiten blijven de officiële bronnen leidend."
        accentColor="#E8507A"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Anti-drift marker */}
        <div className="mb-10 border-l-2 border-gray-200 pl-4 py-1">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
            Onderdeel van de stagegids StageStart Curaçao. Deze verhalen zijn ervaringsinzichten. Ze zijn bedoeld om te tonen hoe een stage of tussenjaar in de praktijk voelt, niet om officiële regels, kosten of procedures te vervangen. Voor dat laatste: zie onze kernpagina's.
          </p>
        </div>

        {/* Verhalen van stagiairs */}
        <section className="mb-14">
          <h2 className="section-label">Verhalen van stagiairs</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-2xl">
            Ervaringen van mensen die via hun opleiding stage liepen op Curaçao. Van HBO Toegepaste Psychologie tot MBO Mediavormgeving, elk verhaal vertelt hoe het voor die specifieke stagiair voelde.
          </p>
          {stageVerhalen.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {stageVerhalen.map((v) => (
                <VerhaalCard key={v.slug} v={v} />
              ))}
            </div>
          ) : (
            <div className="card border-l-4" style={{ borderLeftColor: '#E8507A' }}>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nog geen verhalen van stagiairs gepubliceerd. Deel jouw ervaring en help toekomstige stagiairs met een eerlijk beeld: <a href={VERHAAL_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-sky underline">via het formulier</a>.
              </p>
            </div>
          )}
        </section>

        {/* Verhalen van tussenjaar-werkers */}
        <section className="mb-14">
          <h2 className="section-label">Verhalen van tussenjaar-werkers</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-2xl">
            Ervaringen van mensen die geen stage liepen maar een tussenjaar werkten op het eiland. Andere route qua verblijf, ander werk, andere financiële plaat. Zie ook <Link to="/tussenjaar" className="text-sky underline">de tussenjaar-gids</Link>.
          </p>
          {tussenjaarVerhalen.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tussenjaarVerhalen.map((v) => (
                <VerhaalCard key={v.slug} v={v} />
              ))}
            </div>
          ) : (
            <div className="card border-l-4" style={{ borderLeftColor: '#E8507A' }}>
              <p className="text-sm font-medium text-dark mb-2">Nog geen verhalen hier</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Heb jij een tussenjaar gewerkt op Curaçao (horeca, hotel, dive shop, vrijwilligerswerk, au pair, of iets anders)? Deel jouw ervaring en help toekomstige tussenjaar-werkers met een eerlijk beeld.
              </p>
              <a
                href={VERHAAL_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terra inline-block"
              >
                Deel jouw tussenjaar-ervaring →
              </a>
            </div>
          )}
        </section>

        {/* Call-for-stories algemeen */}
        <section className="mb-10">
          <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
            <p className="text-sm font-medium text-dark mb-2">Wil je jouw verhaal delen?</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Of je nu stage liep of een tussenjaar werkte: jouw ervaring helpt toekomstige jongeren hun beslissing beter te maken. Het formulier duurt ongeveer 10 minuten. Je krijgt de tekst vóór publicatie en kunt altijd kiezen voor alleen je voornaam of een alias.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed mb-3">
              Geen commerciële context, geen betaling, geen reclame. Alleen jouw ervaring zodat jij de volgende stagiair of tussenjaar-werker helpt.
            </p>
            <a
              href={VERHAAL_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky underline"
            >
              Formulier openen →
            </a>
          </div>
        </section>

        <LastChecked
          date="2026-04-21"
          bron="Eigen redactie en ervaringen van stagiairs en tussenjaar-werkers"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
