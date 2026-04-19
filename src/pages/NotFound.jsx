import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Pagina niet gevonden"
        description="Deze pagina bestaat niet of is verplaatst. Vind via de menu of de kernpagina's hieronder wat je zoekt."
        noindex
      />
      <PageHero
        eyebrow="404"
        title="Deze pagina bestaat niet."
        subtitle="Je bent op een URL terechtgekomen die niet bestaat of is verplaatst. Hieronder vind je de meest relevante pagina's om verder te gaan."
        accentColor="#D4522A"
      />

      <div className="max-w-3xl mx-auto px-5 pb-16">
        <section className="mb-10">
          <h2 className="section-label">Begin hier</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link to="/" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Homepagina</p>
              <p className="text-xs text-gray-500 leading-relaxed">Terug naar het begin van StageStart Curaçao.</p>
            </Link>
            <Link to="/begin-hier" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Begin hier</p>
              <p className="text-xs text-gray-500 leading-relaxed">Je stage Curaçao in 6 stappen, in de juiste volgorde.</p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="section-label">Kernpagina's</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link to="/voor-vertrek" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Voor vertrek</p>
              <p className="text-xs text-gray-500 leading-relaxed">Documenten, vergunning, verzekering en checklist.</p>
            </Link>
            <Link to="/vergunning" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Vergunning</p>
              <p className="text-xs text-gray-500 leading-relaxed">Studie/stage en Verklaring van Rechtswege uitgelegd.</p>
            </Link>
            <Link to="/kosten" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Kosten</p>
              <p className="text-xs text-gray-500 leading-relaxed">Officieel, maandelijks en wat vaak wordt onderschat.</p>
            </Link>
            <Link to="/wonen" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Wonen</p>
              <p className="text-xs text-gray-500 leading-relaxed">Wijken vergeleken, huurcheck en fraude-tips.</p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="section-label">Iets niet kunnen vinden?</h2>
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Probeer de <Link to="/faq" className="text-sky underline">veelgestelde vragen</Link> of stuur ons een bericht via <Link to="/contact" className="text-sky underline">contact</Link>. We reageren doorgaans binnen 2 tot 4 werkdagen.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
