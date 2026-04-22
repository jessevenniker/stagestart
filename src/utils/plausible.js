/**
 * Plausible event helper.
 *
 * Plausible is geladen via <script> in index.html en stelt een globale
 * `window.plausible(eventName, options)` beschikbaar. Tijdens prerender
 * (puppeteer) is window.plausible niet aanwezig, en ook niet in SSR-
 * achtige omgevingen. Deze helper maakt het veilig om events af te vuren
 * zonder runtime-errors.
 *
 * Gebruik:
 *   import { trackEvent } from '../utils/plausible'
 *   trackEvent('Partner Form Submit', { props: { bedrijf: 'X' } })
 *
 * Alle event-namen staan gedocumenteerd in docs/plausible-events.md.
 */

export function trackEvent(eventName, options = {}) {
  if (typeof window === 'undefined') return
  if (typeof window.plausible !== 'function') return

  try {
    window.plausible(eventName, options)
  } catch {
    // Stil falen — tracking mag nooit de app breken.
  }
}
