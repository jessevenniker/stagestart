// Onderaan elke pagina: wanneer is de informatie voor het laatst gecontroleerd
// en wie is de hoofdbron. Onderdeel van de reliability layer.
export default function LastChecked({ date, bron, bronUrl, gevoeligheid = 'middel' }) {
  if (!date) return null

  const formatted = new Date(date).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const FREQ = {
    hoog: 'Wordt elke 1-2 maanden gecontroleerd',
    middel: 'Wordt elke 3 maanden gecontroleerd',
    laag: 'Wordt elke 6 maanden gecontroleerd',
  }

  return (
    <div className="border-t border-gray-100 mt-12 pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-500">
        <div>
          <span className="font-medium text-dark">Laatst gecontroleerd: </span>
          <span>{formatted}</span>
          {bron && (
            <>
              <span className="text-gray-400"> — hoofdbron: </span>
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
            </>
          )}
        </div>
        <span className="text-[11px] text-gray-400">{FREQ[gevoeligheid]}</span>
      </div>
    </div>
  )
}
