import { Link } from 'react-router-dom'

/**
 * CommercialScope, een visuele afbakening voor het commerciële deel
 * van StageStart Curaçao (de partnerdirectory en het partner-worden-
 * intakeproces).
 *
 * Doel: lezers die hier landen meteen laten weten dat ze niet meer in
 * de redactionele gids zijn, maar in het partnerdeel — met andere
 * regels (gedragscode, gelabelde samenwerkingen, sponsored links).
 * Tegelijk een professioneel signaal naar potentiële partners dat dit
 * deel apart en serieus is opgezet.
 *
 * Twee varianten:
 *   - position="top"    : donkere band bovenaan de pagina
 *   - position="bottom" : terug-link naar de gids onderaan
 */
export default function CommercialScope({ position = 'top' }) {
  if (position === 'top') {
    return (
      <div className="bg-dark text-cream">
        <div className="max-w-5xl mx-auto px-5 py-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-amber" aria-hidden="true" />
            <p className="text-xs sm:text-sm font-medium tracking-wide">
              Commercieel deel · partnerdirectory
            </p>
          </div>
          <p className="text-[11px] sm:text-xs text-cream/70 leading-relaxed">
            Aparte laag naast de redactionele gids · betaalde samenwerkingen, duidelijk gelabeld
          </p>
        </div>
      </div>
    )
  }

  // position === 'bottom'
  return (
    <div className="border-t border-gray-100 mt-12 pt-8">
      <div className="bg-cream rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-dark mb-1">Terug naar de redactionele gids</p>
          <p className="text-xs text-gray-500 leading-relaxed max-w-md">
            De gids zelf is gratis en onafhankelijk. Geen bureau, geen pakketten, geen commissie per stage of woning.
          </p>
        </div>
        <Link
          to="/"
          className="text-sm font-medium text-sky underline shrink-0"
        >
          Naar de gids →
        </Link>
      </div>
    </div>
  )
}
