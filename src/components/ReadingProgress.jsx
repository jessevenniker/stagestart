import { useEffect, useState } from 'react'

/**
 * Sticky leesvoortgang-balkje bovenaan de pagina. Vult van 0 naar 100%
 * op basis van scroll-positie. Pure CSS plus passieve scroll-listener.
 * Geen library nodig.
 *
 * Gebruik op lange pagina's (vergunning, kosten, wonen, eerste-week).
 * Hoogte 3px. Kleur standaard terra (Handelskade-accent), per pagina
 * te overschrijven.
 */
export default function ReadingProgress({ color = '#D4522A' }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let frame = null
    const update = () => {
      const scrolled = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      const next = max > 0 ? Math.min(100, Math.max(0, (scrolled / max) * 100)) : 0
      setProgress(next)
      frame = null
    }

    // requestAnimationFrame throttling: scroll fires veel, render minder.
    const onScroll = () => {
      if (frame === null) {
        frame = requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    // Positie 60px = direct onder de Nav (4px stripe + 56px hoofdbalk h-14).
    // z-40 = onder de Nav (z-50) zodat hij visueel als "extra streep onder
    // de navigatie" ervaren wordt, niet over de Handelskade-stripe heen.
    <div
      className="fixed top-[60px] left-0 right-0 h-[3px] z-40 pointer-events-none"
      role="presentation"
      aria-hidden="true"
    >
      <div
        className="h-full transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%`, background: color }}
      />
    </div>
  )
}
