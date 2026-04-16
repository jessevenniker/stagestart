import { Link } from 'react-router-dom'

const STRIPE = [
  { color: '#D4522A' },
  { color: '#F2B517' },
  { color: '#3EAD6E' },
  { color: '#1A7EC5' },
  { color: '#E8507A' },
]

const COL1 = [
  { to: '/begin-hier',   label: 'Begin hier' },
  { to: '/voor-vertrek', label: 'Voor vertrek' },
  { to: '/vergunning',   label: 'Vergunning' },
  { to: '/kosten',       label: 'Wat kost een stage?' },
  { to: '/wonen',        label: 'Wonen op Curaçao' },
  { to: '/auto',         label: 'Auto nodig?' },
  { to: '/eerste-week',  label: 'Je eerste week' },
]

const COL2 = [
  { to: '/werken',        label: 'Werken op Curaçao' },
  { to: '/leven',         label: 'Leven op Curaçao' },
  { to: '/veiligheid',    label: 'Veiligheid' },
  { to: '/eten',          label: 'Lokaal eten' },
  { to: '/happy-hours',   label: 'Happy hours' },
  { to: '/stranden',      label: 'Stranden' },
  { to: '/weekend-trips', label: 'Weekend trips' },
  { to: '/kaart',         label: 'Interactieve kaart' },
  { to: '/faq',           label: 'FAQ' },
  { to: '/startgids',     label: 'Gratis startgids' },
]

const COL3 = [
  { to: '/disclaimer', label: 'Disclaimer / Voorwaarden' },
  { to: '/privacy',    label: 'Privacyverklaring' },
  { to: '/cookies',    label: 'Cookieverklaring' },
  { to: '/bronnen',    label: 'Bronnen & verantwoording' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-baseline leading-none mb-2">
              <span className="font-serif text-[18px] font-normal text-dark">Stage</span>
              <span className="font-serif text-[18px] font-medium text-dark">Start</span>
            </div>
            <div className="flex gap-1 mb-3">
              {STRIPE.map((s, i) => (
                <span key={i} className="h-1 rounded-sm" style={{ background: s.color, width: '16px' }} />
              ))}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-[220px]">
              Onafhankelijke, praktische gids voor stagiairs op Curaçao. Geen bureau. Geen pakket. Geen commissie.
            </p>
          </div>

          {/* Col 1 — Stagekern */}
          <div>
            <p className="text-[10px] font-medium tracking-widest uppercase text-gray-400 mb-3">Stagekern</p>
            <ul className="flex flex-col gap-2">
              {COL1.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-500 hover:text-dark transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 — Naast je stage */}
          <div>
            <p className="text-[10px] font-medium tracking-widest uppercase text-gray-400 mb-3">Naast je stage</p>
            <ul className="flex flex-col gap-2">
              {COL2.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-500 hover:text-dark transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Juridisch */}
          <div>
            <p className="text-[10px] font-medium tracking-widest uppercase text-gray-400 mb-3">Juridisch</p>
            <ul className="flex flex-col gap-2">
              {COL3.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-500 hover:text-dark transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} StageStart Curaçao — stagestartcuracao.nl
          </p>
          <p className="text-xs text-gray-400">
            Geen bureau. Geen pakket. Geen verborgen belangen.
          </p>
        </div>
      </div>
    </footer>
  )
}
