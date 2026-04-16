export default function PageHero({ eyebrow, title, subtitle, accentColor = '#D4522A', image, imageAlt, children }) {
  return (
    <div className="max-w-5xl mx-auto px-5 pt-14 pb-10">
      {eyebrow && (
        <p className="text-[10px] font-medium tracking-widest uppercase mb-4"
           style={{ color: accentColor }}>
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight text-dark max-w-2xl mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-gray-500 text-base leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
      {children}
      {image && (
        <div className="mt-8 relative overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={imageAlt || ''}
            className="w-full h-[200px] md:h-[280px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
    </div>
  )
}
