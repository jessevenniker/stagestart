import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'
import ClaimLabel from '../components/ClaimLabel'
import RelatedPages from '../components/RelatedPages'
import { getVerhaal, VERHALEN } from '../data/verhalen'
import { articleSchema } from '../utils/schema'
import NotFound from './NotFound'

/**
 * Parser voor inline markdown-style links binnen verhaal-paragrafen:
 *   "tekst met [label](/path) erin" → array van strings + {label, to}
 *
 * Hiermee kunnen schrijvers binnen verhalen.js natuurlijk linken naar
 * kernpagina's zoals /wonen, /auto, /werken zonder JSX in de data.
 */
function parseInlineLinks(text) {
  const parts = []
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g
  let lastIndex = 0
  let match
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push({ label: match[1], to: match[2] })
    lastIndex = regex.lastIndex
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts
}

function ParagraphWithLinks({ text }) {
  const parts = parseInlineLinks(text)
  return (
    <>
      {parts.map((part, i) =>
        typeof part === 'string' ? (
          <span key={i}>{part}</span>
        ) : (
          <Link
            key={i}
            to={part.to}
            className="text-sky underline decoration-gray-200 underline-offset-2 hover:decoration-sky transition-colors"
          >
            {part.label}
          </Link>
        )
      )}
    </>
  )
}

/**
 * Pull-quote component, magazine-stijl.
 * Groot serif, accent-kleur streep links, veel lucht eromheen.
 */
function PullQuote({ text, accent }) {
  return (
    <figure className="my-10 md:my-12 pl-5 md:pl-6" style={{ borderLeft: `3px solid ${accent}` }}>
      <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-dark tracking-tight">
        {text}
      </blockquote>
    </figure>
  )
}

/**
 * Polaroid-achtige foto met handgeschreven caption.
 * Lichte rotatie, witte rand, subtiele schaduw.
 * Rotatie is deterministisch per index: even = links, oneven = rechts.
 */
function PolaroidPhoto({ img, index = 0, full = false }) {
  const rotate = index % 2 === 0 ? '-rotate-1' : 'rotate-1'
  // Full = groter, maar breedte begrensd zodat portrait-foto's niet reusachtig worden.
  // Half = kleiner, vierkante crop.
  const widthClass = full ? 'w-full max-w-[480px]' : 'w-full max-w-[340px]'
  return (
    <figure className={`my-10 md:my-12 flex flex-col items-center`}>
      <div className={`${rotate} bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.10)] ${widthClass}`}>
        <img
          src={img.src}
          alt={img.caption}
          loading="lazy"
          className={
            full
              // Full: behoud natuurlijke aspect van de foto (portret of landscape),
              // met max-hoogte zodat portretten niet onevenredig lang worden.
              ? 'block w-full max-h-[640px] object-contain bg-gray-50'
              // Half: strakke vierkante crop voor consistentie in de scrapbook.
              : 'block w-full aspect-square object-cover bg-gray-50'
          }
        />
        {img.caption && (
          <figcaption className="font-hand text-xl text-gray-600 text-center pt-3 pb-1 leading-tight">
            {img.caption}
          </figcaption>
        )}
      </div>
    </figure>
  )
}

export default function VerhaalDetail() {
  const { slug } = useParams()
  const verhaal = getVerhaal(slug)

  if (!verhaal) return <NotFound />

  const schema = articleSchema({
    headline: `Stage op Curaçao: het verhaal van ${verhaal.voornaam}`,
    description: verhaal.quote,
    path: `/verhalen/${verhaal.slug}`,
    dateModified: verhaal.laatste_update,
  })

  // Andere verhalen voor de "Meer verhalen" sectie
  const anderen = VERHALEN.filter((v) => v.slug !== verhaal.slug).slice(0, 3)

  // Splits gallery in full-width (visuele intro) en half-width (interleaved)
  const gallery = verhaal.gallery || []
  const galleryFull = gallery.find((g) => g.layout === 'full')
  const galleryHalf = gallery.filter((g) => g.layout !== 'full')

  const pullQuotes = verhaal.pull_quotes || []
  const persoonlijk = verhaal.persoonlijk || {}

  return (
    <>
      <SEO
        title={`${verhaal.voornaam}: stage op Curaçao (${verhaal.sector})`}
        description={verhaal.quote}
        schema={schema}
        noindex={verhaal.voorbeeld}
      />

      {/* Aangepaste hero met portretfoto naast titel */}
      <section className="max-w-5xl mx-auto px-5 pt-14 pb-10">
        <p
          className="text-[10px] font-medium tracking-widest uppercase mb-4"
          style={{ color: verhaal.accent }}
        >
          Verhaal van een stagiair
        </p>
        <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight text-dark mb-4">
              {verhaal.voornaam}'s stage op Curaçao
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-6">
              "{verhaal.quote}"
            </p>
            <ClaimLabel kind="ervaring" />
          </div>
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-50">
            <img
              src={verhaal.foto}
              alt={`Portret van ${verhaal.voornaam}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 pb-16">

        {/* Voorbeeld-waarschuwing als dit een fictief voorbeeld is */}
        {verhaal.voorbeeld && (
          <div className="card border-l-4 mb-10" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-xs font-medium text-dark mb-2">Voorbeeld-verhaal</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Dit is een fictief voorbeeld om het ontwerp te tonen. Echt verhaal volgt zodra we hebben gesproken met stagiairs die hun ervaring willen delen.
            </p>
          </div>
        )}

        {/* Persoonlijk paspoort: boven de scheidingslijn de warme feitjes,
            onder de lijn de formele data. */}
        <section className="mb-10">
          <h2 className="section-label">Paspoort van {verhaal.voornaam}</h2>
          <div className="card" style={{ borderLeft: `3px solid ${verhaal.accent}` }}>
            {/* Persoonlijke kleur */}
            {Object.keys(persoonlijk).length > 0 && (
              <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                {persoonlijk.favoriete_spot && (
                  <div>
                    <dt
                      className="text-[10px] uppercase tracking-widest mb-1 font-medium"
                      style={{ color: verhaal.accent }}
                    >
                      Favoriete spot
                    </dt>
                    <dd className="text-dark">{persoonlijk.favoriete_spot}</dd>
                  </div>
                )}
                {persoonlijk.grootste_les && (
                  <div>
                    <dt
                      className="text-[10px] uppercase tracking-widest mb-1 font-medium"
                      style={{ color: verhaal.accent }}
                    >
                      Grootste les
                    </dt>
                    <dd className="text-dark">{persoonlijk.grootste_les}</dd>
                  </div>
                )}
                {persoonlijk.eerste_aankoop && (
                  <div>
                    <dt
                      className="text-[10px] uppercase tracking-widest mb-1 font-medium"
                      style={{ color: verhaal.accent }}
                    >
                      Eerste aankoop
                    </dt>
                    <dd className="text-dark">{persoonlijk.eerste_aankoop}</dd>
                  </div>
                )}
                {persoonlijk.moest_wennen && (
                  <div>
                    <dt
                      className="text-[10px] uppercase tracking-widest mb-1 font-medium"
                      style={{ color: verhaal.accent }}
                    >
                      Moest wennen aan
                    </dt>
                    <dd className="text-dark">{persoonlijk.moest_wennen}</dd>
                  </div>
                )}
              </dl>
            )}

            {/* Scheidingslijntje tussen persoonlijk en formeel */}
            {Object.keys(persoonlijk).length > 0 && (
              <hr className="my-5 border-t border-gray-100" />
            )}

            {/* Formele data */}
            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div>
                <dt className="text-xs text-gray-400 uppercase tracking-wider mb-1">Opleiding</dt>
                <dd className="text-dark">{verhaal.opleiding}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-400 uppercase tracking-wider mb-1">Stageperiode</dt>
                <dd className="text-dark">{verhaal.periode}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-400 uppercase tracking-wider mb-1">Sector</dt>
                <dd className="text-dark">{verhaal.sector}</dd>
              </div>
              {verhaal.bedrijf && (
                <div>
                  <dt className="text-xs text-gray-400 uppercase tracking-wider mb-1">Stageplek</dt>
                  <dd className="text-dark">{verhaal.bedrijf}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs text-gray-400 uppercase tracking-wider mb-1">Woonde in</dt>
                <dd className="text-dark">{verhaal.wijk}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-400 uppercase tracking-wider mb-1">Auto</dt>
                <dd className="text-dark">{verhaal.auto ? 'Ja' : 'Nee'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-400 uppercase tracking-wider mb-1">Maandbudget</dt>
                <dd className="text-dark">{verhaal.budget}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Q&A */}
        <section className="mb-10">
          <h2 className="section-label">Vragen en antwoorden</h2>
          <div className="flex flex-col gap-5">
            {verhaal.qa.map((item, i) => (
              <div key={i} className="card" style={{ borderLeft: `3px solid ${verhaal.accent}` }}>
                <p className="font-serif text-lg md:text-xl text-dark mb-3 leading-snug">
                  {item.vraag}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.antwoord}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visuele intro voor het eigen verhaal: full-width polaroid */}
        {galleryFull && (
          <PolaroidPhoto img={galleryFull} index={0} full={true} />
        )}

        {/* Eigen verhaal met pull-quotes en half-width polaroids interleaved */}
        <section className="mb-10">
          <h2 className="section-label">In eigen woorden</h2>
          <div>
            {verhaal.eigen_verhaal.map((paragraaf, i) => (
              <div key={i}>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  <ParagraphWithLinks text={paragraaf} />
                </p>
                {pullQuotes[i] && (
                  <PullQuote text={pullQuotes[i]} accent={verhaal.accent} />
                )}
                {galleryHalf[i] && (
                  <PolaroidPhoto img={galleryHalf[i]} index={i + 1} full={false} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tip */}
        <section className="mb-10">
          <h2 className="section-label">De tip van {verhaal.voornaam}</h2>
          <div className="card border-l-4" style={{ borderLeftColor: verhaal.accent }}>
            <p className="text-sm text-gray-700 leading-relaxed italic">
              "{verhaal.tip}"
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-10">
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
            <p className="text-xs font-medium text-dark mb-2">Over dit verhaal</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Dit is de persoonlijke ervaring van {verhaal.voornaam}. Bedragen, procedures en praktische situaties zijn gebaseerd op diens stageperiode en kunnen inmiddels zijn gewijzigd. Voor officiële en actuele eisen rond vergunning, kosten en verblijf zijn instanties als de <Link to="/vergunning" className="text-sky underline">Immigratiedienst Curaçao</Link>, DUO en Justis altijd leidend.
            </p>
          </div>
        </section>

        {/* Meer verhalen */}
        {anderen.length > 0 && (
          <section className="mb-10">
            <h2 className="section-label">Meer verhalen</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {anderen.map((v) => (
                <Link
                  key={v.slug}
                  to={`/verhalen/${v.slug}`}
                  className="card hover:shadow-sm transition-shadow"
                >
                  <div className="h-1 rounded-sm mb-3" style={{ background: v.accent }} />
                  <p className="text-sm font-medium text-dark mb-1">{v.voornaam}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {v.sector} in {v.wijk}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* RelatedPages naar kernthema's */}
        <RelatedPages
          title="Dieper op deze thema's"
          items={[
            { to: '/wonen', label: 'Wonen', desc: 'Over de wijken die in deze verhalen voorkomen.' },
            { to: '/kosten', label: 'Kosten', desc: 'De cijfers achter de budget-verhalen.' },
            { to: '/eerste-week', label: 'Eerste week', desc: 'Wat je dag één tot zeven doet, gebundeld.' },
          ]}
        />

        <LastChecked
          date={verhaal.laatste_update}
          bron={`Ervaring van ${verhaal.voornaam} (${verhaal.periode})`}
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
