import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'
import { VERHALEN } from '../data/verhalen'

export default function Verhalen() {
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
        <div className="mb-8 border-l-2 border-gray-200 pl-4 py-1">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
            Onderdeel van de stagegids StageStart Curaçao. Deze verhalen zijn ervaringsinzichten. Ze zijn bedoeld om te tonen hoe een stage in de praktijk voelt, niet om officiële regels, kosten of procedures te vervangen. Voor dat laatste: zie onze kernpagina's.
          </p>
        </div>

        {/* Grid van verhalen */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VERHALEN.map((v) => (
              <Link
                key={v.slug}
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
                    {v.opleiding} · {v.wijk}
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
            ))}
          </div>
        </section>

        {/* Call-for-stories */}
        <section className="mb-10">
          <div className="card border-l-4" style={{ borderLeftColor: '#E8507A' }}>
            <p className="text-sm font-medium text-dark mb-2">Wil je jouw verhaal delen?</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Heb jij stage gelopen op Curaçao en wil je jouw ervaring met toekomstige stagiairs delen? Laat het ons weten via <Link to="/contact" className="text-sky underline">contact</Link>. We maken samen een portret, je ziet de tekst vóór publicatie en kunt altijd kiezen om alleen je voornaam te gebruiken.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Geen commerciële context, geen betaling, geen reclame. Alleen jouw ervaring zodat toekomstige stagiairs beter voorbereid zijn.
            </p>
          </div>
        </section>

        <LastChecked
          date="2026-04-20"
          bron="Eigen redactie en ervaringen van stagiairs"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
