import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumbSchema } from '../utils/schema'

/**
 * Per-route breadcrumb labels. De Home (/) krijgt geen breadcrumb getoond.
 * Single-level structuur voor eenvoud: Home > [pagina].
 */
const BREADCRUMB_LABELS = {
  '/begin-hier': 'Begin hier',
  '/voor-vertrek': 'Voor vertrek',
  '/vergunning': 'Vergunning',
  '/kosten': 'Kosten',
  '/wonen': 'Wonen',
  '/auto': 'Auto',
  '/verzekering': 'Verzekering',
  '/eerste-week': 'Eerste week',
  '/leven': 'Leven op Curaçao',
  '/werken': 'Werken op Curaçao',
  '/veiligheid': 'Veiligheid',
  '/eten': 'Eten',
  '/happy-hours': 'Happy hours',
  '/stranden': 'Stranden',
  '/weekend-trips': 'Weekend trips',
  '/kaart': 'Kaart',
  '/faq': 'Veelgestelde vragen',
  '/bronnen': 'Bronnen',
  '/contact': 'Contact',
  '/over': 'Over StageStart',
  '/startgids': 'Startgids',
  '/disclaimer': 'Disclaimer',
  '/privacy': 'Privacy',
  '/cookies': 'Cookies',
}

export default function Breadcrumbs() {
  const { pathname } = useLocation()

  // Geen breadcrumbs op homepage
  if (pathname === '/') return null

  const label = BREADCRUMB_LABELS[pathname]

  // Onbekende route: geen breadcrumb (404 etc.)
  if (!label) return null

  const items = [
    { label: 'Home', path: '/' },
    { label, path: pathname },
  ]

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema(items))}
        </script>
      </Helmet>
      <nav aria-label="Kruimelpad" className="max-w-5xl mx-auto px-5 pt-4">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li>
            <Link to="/" className="hover:text-dark transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-300">/</li>
          <li className="text-gray-600" aria-current="page">
            {label}
          </li>
        </ol>
      </nav>
    </>
  )
}
