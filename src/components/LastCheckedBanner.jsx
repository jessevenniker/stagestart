/**
 * Compacte LastChecked-banner voor onder de PageHero, boven de vouw.
 *
 * Tweelingcomponent van LastChecked.jsx (die onderaan staat). Dit blok
 * is minimaal en benadrukt vooral de controledatum + bron; de volledige
 * versie met controleritme komt nog steeds onderaan. Doel: het E-E-A-T-
 * signaal (frisheid + bron-autoriteit) al zichtbaar maken voordat de
 * lezer heeft gescrold.
 */
export default function LastCheckedBanner({ date, bron, bronUrl }) {
  if (!date) return null

  const formatted = new Date(date).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 mb-8 pb-4 border-b border-gray-100">
      <span className="inline-flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" aria-hidden="true" />
        <span className="font-medium text-gray-700">Bijgewerkt {formatted}</span>
      </span>
      {bron && (
        <>
          <span className="text-gray-300" aria-hidden="true">·</span>
          <span>
            hoofdbron:{' '}
            {bronUrl ? (
              <a
                href={bronUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-dark underline decoration-gray-200 hover:decoration-gray-400"
              >
                {bron}
              </a>
            ) : (
              <span className="text-gray-600">{bron}</span>
            )}
          </span>
        </>
      )}
    </div>
  )
}
