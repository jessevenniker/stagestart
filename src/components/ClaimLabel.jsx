import { BRONSOORTEN } from '../data/bronnen'

// Klein label dat aangeeft of een claim officieel, richtlijn of ervaring is.
// Gebruik boven of naast een blok content om transparantie te tonen.
export default function ClaimLabel({ kind = 'officieel', bron, link }) {
  const config = BRONSOORTEN[kind]
  if (!config) return null

  const baseStyle = {
    color: config.kleur,
    borderColor: config.kleur,
  }

  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-medium tracking-wider uppercase mb-2">
      <span
        className="px-2 py-0.5 rounded border"
        style={baseStyle}
      >
        {config.label}
      </span>
      {bron && (
        <span className="text-gray-400 normal-case tracking-normal">
          volgens{' '}
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-dark underline decoration-gray-200 hover:decoration-gray-400"
            >
              {bron}
            </a>
          ) : (
            <span className="text-gray-500">{bron}</span>
          )}
        </span>
      )}
    </div>
  )
}
