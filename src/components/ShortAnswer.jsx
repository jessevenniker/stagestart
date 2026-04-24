/**
 * ShortAnswer, een compact "kort antwoord"-blok direct onder de hero.
 *
 * Doel: generatieve zoeksystemen (ChatGPT, Claude, Perplexity, Google AI
 * Overviews) vinden in deze structuur één citeerbaar blok met een direct
 * antwoord op de hoofdvraag van de pagina. Tegelijk helpt het menselijke
 * lezers die snel willen scannen.
 *
 * Props:
 *   title   - korte vraag of label, bv. "Kort antwoord"
 *   body    - hoofdtekst (string of ReactNode). Houd dit 2-5 zinnen, feitelijk.
 *   quote   - optionele attributed quote, bv. een exact citaat uit primaire bron
 *   quoteSource - naam van de bron bij de quote (bv. "Immigratiedienst Curaçao")
 *   quoteDate   - ISO-datum waarop de quote is geverifieerd
 *   quoteUrl    - link naar de primaire bron
 *
 * Anchor: het blok heeft id="kort-antwoord" zodat AI-systemen en deep-links
 * rechtstreeks naar dit antwoord kunnen verwijzen, bv. /kosten#kort-antwoord.
 *
 * LET OP, SPEAKABLE-CONTRACT: pagina's met een ShortAnswer-blok hebben
 * vaak een SpeakableSpecification-schema dat naar #kort-antwoord wijst.
 * Google's richtlijn voor speakable is "20-30 seconden voorlezen". Houd
 * body daarom op maximaal ~90 woorden (één tot twee korte paragrafen,
 * geen geneste kopjes of lijsten). Uitbreiden met extra secties hoort
 * buiten dit blok te gebeuren — voeg dan een nieuwe sectie toe, laat
 * ShortAnswer ongemoeid.
 */
export default function ShortAnswer({ title = 'Kort antwoord', body, quote, quoteSource, quoteDate, quoteUrl }) {
  const formattedDate = quoteDate
    ? new Date(quoteDate).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

  return (
    <section
      id="kort-antwoord"
      aria-labelledby="kort-antwoord-title"
      className="mb-10 border border-gray-200 rounded-2xl bg-white p-5 md:p-6"
    >
      <p
        id="kort-antwoord-title"
        className="text-[10px] font-medium tracking-widest uppercase text-gray-400 mb-3"
      >
        {title}
      </p>
      <div className="text-sm md:text-[15px] text-dark leading-relaxed">
        {body}
      </div>

      {quote && (
        <blockquote className="mt-5 pl-4 border-l-2 border-sage">
          <p className="text-sm text-gray-700 italic leading-relaxed">"{quote}"</p>
          <footer className="mt-2 text-xs text-gray-500">
            {quoteUrl ? (
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-dark underline decoration-gray-200 hover:decoration-gray-400"
              >
                {quoteSource}
              </a>
            ) : (
              <span>{quoteSource}</span>
            )}
            {formattedDate && (
              <>
                <span className="text-gray-300 mx-1.5" aria-hidden="true">·</span>
                <span>geverifieerd {formattedDate}</span>
              </>
            )}
          </footer>
        </blockquote>
      )}
    </section>
  )
}
