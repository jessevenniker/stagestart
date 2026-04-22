import { useEffect } from 'react'
import { trackEvent } from '../utils/plausible'

/**
 * Vuurt één Plausible-event af zodra de gebruiker de opgegeven scroll-
 * drempel passeert op de huidige pagina. Standaard drempel: 75% van de
 * document-hoogte.
 *
 * Per component-mount wordt het event maar één keer verzonden. Nieuwe
 * mount (bv. navigatie naar dezelfde pagina opnieuw) reset de teller.
 *
 * Gebruik:
 *   useScrollDepth('Scroll 75 Wonen')
 *
 * Parameters:
 *   - eventName: naam zoals in Plausible-dashboard. Hou vast aan de
 *     conventie "Scroll 75 [Page]" voor consistentie.
 *   - threshold: optioneel, tussen 0 en 1. Default 0.75.
 */
export function useScrollDepth(eventName, threshold = 0.75) {
  useEffect(() => {
    let fired = false

    function onScroll() {
      if (fired) return
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      if (total === 0) return
      if (scrolled / total >= threshold) {
        fired = true
        trackEvent(eventName)
        window.removeEventListener('scroll', onScroll)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Ook bij mount direct checken (voor korte pagina's waar de gebruiker
    // al onderaan staat zonder te scrollen).
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [eventName, threshold])
}
