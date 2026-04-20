import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { breadcrumbSchema } from '../utils/schema'
import { getVerhaal } from '../data/verhalen'

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
  '/partner-worden': 'Partner worden',
  '/verhalen': 'Verhalen van stagiairs',
  '/startgids': 'Startgids',
  '/disclaimer': 'Disclaimer',
  '/privacy': 'Privacy',
  '/cookies': 'Cookies',
}

export default function Breadcrumbs() {
  const { pathname } = useLocation()

  // Geen breadcrumbs op homepage
  if (pathname === '/') return null

  // Eerst direct label opzoeken
  let items = null
  const directLabel = BREADCRUMB_LABELS[pathname]
  if (directLabel) {
    items = [
      { label: 'Home', path: '/' },
      { label: directLabel, path: pathname },
    ]
  } else if (pathname.startsWith('/verhalen/')) {
    // Detailpagina van een verhaal: Home > Verhalen > [naam]
    const slug = pathname.split('/')[2]
    const verhaal = getVerhaal(slug)
    if (verhaal) {
      items = [
        { label: 'Home', path: '/' },
        { label: 'Verhalen van stagiairs', path: '/verhalen' },
        { label: verhaal.voornaam, path: pathname },
      ]
    }
  }

  if (!items) return null

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema(items))}
        </script>
      </Helmet>
      <nav aria-label="Kruimelpad" className="max-w-5xl mx-auto px-5 pt-4">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          {items.flatMap((item, idx) => {
            const isLast = idx === items.length - 1
            const parts = []
            if (idx > 0) {
              parts.push(
                <li key={`sep-${idx}`} aria-hidden="true" className="text-gray-300">/</li>
              )
            }
            parts.push(
              <li key={item.path}>
                {isLast ? (
                  <span className="text-gray-600" aria-current="page">{item.label}</span>
                ) : (
                  <Link to={item.path} className="hover:text-dark transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            )
            return parts
          })}
        </ol>
      </nav>
    </>
  )
}
