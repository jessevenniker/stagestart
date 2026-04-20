import { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const STRIPE = [
  { color: '#D4522A', w: 'flex-[22]' },
  { color: '#F2B517', w: 'flex-[14]' },
  { color: '#3EAD6E', w: 'flex-[18]' },
  { color: '#1A7EC5', w: 'flex-[12]' },
  { color: '#E8507A', w: 'flex-[16]' },
]

// PRIMARY = kern stage-gids (P1) volgens Reliability Framework
const PRIMARY_LINKS = [
  { to: '/begin-hier',   label: 'Begin hier' },
  { to: '/voor-vertrek', label: 'Voor vertrek' },
  { to: '/vergunning',   label: 'Vergunning' },
  { to: '/kosten',       label: 'Kosten' },
  { to: '/wonen',        label: 'Wonen' },
  { to: '/auto',         label: 'Auto?' },
  { to: '/verzekering',  label: 'Verzekering' },
  { to: '/eerste-week',  label: 'Eerste week' },
]

// MORE = ondersteunende life-content + werken (Tier 2).
// Verhalen staat bewust bovenaan en met `divider: true` zodat het visueel
// gescheiden is van de overige supporting-pagina's. Het hoort niet bij de
// kernpagina's in PRIMARY (te druk + niet feitelijk-kern), maar het is wel
// iets specialer dan een willekeurige Tier-2 onderwerpenpagina.
const MORE_LINKS = [
  { to: '/verhalen',      label: 'Verhalen van stagiairs', divider: true },
  { to: '/werken',        label: 'Werken op Curaçao' },
  { to: '/leven',         label: 'Leven op Curaçao' },
  { to: '/veiligheid',    label: 'Veiligheid' },
  { to: '/eten',          label: 'Eten' },
  { to: '/happy-hours',   label: 'Happy hours' },
  { to: '/stranden',      label: 'Stranden' },
  { to: '/weekend-trips', label: 'Weekend trips' },
  { to: '/kaart',         label: 'Kaart' },
  { to: '/faq',           label: 'FAQ' },
  { to: '/bronnen',       label: 'Bronnen & verantwoording' },
]

const ALL_LINKS = [...PRIMARY_LINKS, ...MORE_LINKS]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [meer, setMeer] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* Handelskade stripe */}
      <div className="flex h-1 stripe-bar">
        {STRIPE.map((s, i) => (
          <span key={i} className={s.w} style={{ background: s.color }} />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-5 flex items-center justify-between h-14">
        {/* Logo */}
        <Link to="/" className="flex flex-col gap-0.5 no-underline">
          <div className="flex items-baseline leading-none">
            <span className="font-serif text-[17px] font-normal text-dark tracking-tight">Stage</span>
            <span className="font-serif text-[17px] font-medium text-dark tracking-tight">Start</span>
          </div>
          <span className="text-[9px] tracking-[0.14em] uppercase text-gray-400 leading-none">Curaçao</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {PRIMARY_LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[13px] transition-colors ${isActive ? 'text-terra font-medium' : 'text-gray-500 hover:text-dark'}`
              }
            >
              {l.label}
            </NavLink>
          ))}

          {/* Meer dropdown */}
          <div className="relative">
            <button
              onClick={() => setMeer(!meer)}
              aria-expanded={meer}
              aria-haspopup="true"
              className={`text-[13px] transition-colors flex items-center gap-1 ${meer ? 'text-terra font-medium' : 'text-gray-500 hover:text-dark'}`}
            >
              Meer
              <svg
                className={`w-3.5 h-3.5 transition-transform ${meer ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {meer && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md py-2 min-w-[210px] z-50">
                {MORE_LINKS.map(l => (
                  <Fragment key={l.to}>
                    <NavLink
                      to={l.to}
                      onClick={() => setMeer(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-[13px] transition-colors ${isActive ? 'text-terra font-medium bg-gray-50' : 'text-gray-500 hover:text-dark hover:bg-gray-50'}`
                      }
                    >
                      {l.label}
                    </NavLink>
                    {l.divider && <div className="my-1 border-t border-gray-100" aria-hidden="true" />}
                  </Fragment>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/downloads/stagestart-startgids.pdf"
            download="stagestart-startgids.pdf"
            className="hidden md:block btn-terra text-xs py-2 px-4"
          >
            Gratis startgids
          </a>
          {/* Hamburger */}
          <button
            className="md:hidden p-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={open}
          >
            <span className={`block w-5 h-0.5 bg-dark mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-dark mb-1 transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-dark transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4 flex flex-col gap-3">
          {ALL_LINKS.map(l => (
            <Fragment key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-[14px] py-1 ${isActive ? 'text-terra font-medium' : 'text-gray-600'}`
                }
              >
                {l.label}
              </NavLink>
              {l.divider && <div className="my-1 border-t border-gray-100" aria-hidden="true" />}
            </Fragment>
          ))}
          <a
            href="/downloads/stagestart-startgids.pdf"
            download="stagestart-startgids.pdf"
            onClick={() => setOpen(false)}
            className="btn-terra text-center mt-2"
          >
            Download gratis startgids
          </a>
        </div>
      )}
    </header>
  )
}
