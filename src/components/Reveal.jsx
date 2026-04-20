import { useEffect, useRef, useState } from 'react'

/**
 * Subtiele fade-in op scroll. Pure opacity-overgang om Cumulative Layout
 * Shift te voorkomen (geen transform). Respecteert prefers-reduced-motion:
 * gebruikers met die instelling zien de content direct, zonder animatie.
 *
 * Gebruik:
 *   <Reveal><section>...</section></Reveal>
 *   <Reveal delay={100}>...</Reveal>
 *
 * Niet boven de fold gebruiken (verlaagt LCP). Ook niet op kleine UI-
 * elementen, alleen op grotere blokken zoals hele secties.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Respecteer reduced motion: meteen tonen, geen animatie.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    // Als IntersectionObserver niet beschikbaar is, gewoon tonen.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )

    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-[600ms] ease-out ${visible ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
