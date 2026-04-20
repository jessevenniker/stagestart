import { Component } from 'react'

/**
 * Vangt chunk-load fouten op die optreden wanneer een client een oude
 * index.html in cache heeft maar de bijbehorende lazy-chunks niet meer
 * bestaan op de server (gebeurt na elke deploy met nieuwe hashes).
 *
 * Strategie: bij een herkende chunk-fout doet de boundary één keer
 * automatisch een page reload. Dat fetcht de nieuwe index.html en
 * matched chunks. SessionStorage voorkomt een reload-loop als de fout
 * niet aan een chunk ligt maar een echte runtime-bug is.
 *
 * Bij niet-chunk-fouten of bij een tweede chunk-fout binnen 10 seconden
 * toont hij een nette fallback met een handmatige herlaad-knop, zodat de
 * gebruiker nooit naar een leeg wit scherm staart.
 */
const RELOAD_KEY = 'stagestart_chunk_reload_at'
const RELOAD_DEBOUNCE_MS = 10_000

function isChunkLoadError(error) {
  const message = String(error?.message || '')
  // Vite/webpack/native dynamic-import variants
  return /Loading chunk|Failed to fetch dynamically imported module|Importing a module script failed|ChunkLoadError/i.test(message)
}

export default class ChunkErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    if (isChunkLoadError(error)) {
      try {
        const lastReload = Number(sessionStorage.getItem(RELOAD_KEY) || 0)
        const now = Date.now()
        if (now - lastReload > RELOAD_DEBOUNCE_MS) {
          sessionStorage.setItem(RELOAD_KEY, String(now))
          // Force fresh fetch van index.html plus alle assets.
          window.location.reload()
          return { hasError: false }
        }
      } catch {
        // SessionStorage geblokkeerd of niet beschikbaar; valt door naar fallback UI.
      }
    }
    return { hasError: true }
  }

  componentDidCatch(error) {
    // Loggen voor diagnostiek; niets wat gebruiker hoeft te zien.
    if (typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.error('ChunkErrorBoundary caught:', error)
    }
  }

  handleReload = () => {
    try {
      sessionStorage.removeItem(RELOAD_KEY)
    } catch { /* negeer */ }
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-3xl mx-auto px-5 py-20 text-center">
          <p className="text-base text-dark mb-3">Er ging iets mis bij het laden van deze pagina.</p>
          <p className="text-sm text-gray-500 mb-6">
            Vaak is dit opgelost door de pagina te herladen. Werkt dat niet, neem dan even <a href="/contact" className="text-sky underline">contact</a> op.
          </p>
          <button
            onClick={this.handleReload}
            className="btn-terra"
          >
            Herlaad de pagina
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
