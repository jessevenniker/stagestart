import { Link } from 'react-router-dom'

/**
 * Toont onderaan een kernpagina een blok met gerelateerde pagina's.
 * Helpt zowel UX (volgende stap suggesteren) als interne SEO (linkjuice).
 *
 * Gebruik:
 *   <RelatedPages
 *     items={[
 *       { to: '/wonen', label: 'Wonen', desc: 'Wijken vergeleken' },
 *       { to: '/auto', label: 'Auto', desc: 'Heb je er een nodig?' },
 *     ]}
 *   />
 *
 * Optioneel: titel-prop om "Vervolgstappen" door iets anders te vervangen.
 */
export default function RelatedPages({ items, title = 'Vervolgstappen' }) {
  if (!items || items.length === 0) return null

  return (
    <section className="mb-10">
      <h2 className="section-label">{title}</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="card hover:shadow-sm transition-shadow group"
          >
            <p className="text-sm font-medium text-dark mb-1 group-hover:text-sky transition-colors">
              {item.label}
            </p>
            {item.desc && (
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}
