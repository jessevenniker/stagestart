// Inline citation: "(volgens Immigratiedienst)" met link naar primaire bron.
// Plaats direct na een feitelijke claim om duidelijk te maken waar het vandaan komt.
export default function Bron({ naam, url, prefix = 'volgens' }) {
  if (!naam) return null

  return (
    <span className="text-xs text-gray-400">
      {' ('}
      {prefix}{' '}
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-dark underline decoration-gray-200 hover:decoration-gray-400"
        >
          {naam}
        </a>
      ) : (
        <span className="text-gray-500">{naam}</span>
      )}
      {')'}
    </span>
  )
}
