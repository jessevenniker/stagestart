export default function InfoBlock({ title, children, accent = '#D4522A' }) {
  return (
    <div className="border-l-2 pl-5 mb-6" style={{ borderColor: accent }}>
      {title && <p className="font-medium text-sm mb-1">{title}</p>}
      <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
    </div>
  )
}
