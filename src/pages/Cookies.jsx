import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

export default function Cookies() {
  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Juridisch"
        title="Cookieverklaring"
        subtitle="Laatst bijgewerkt: 16 april 2026"
        accentColor="#1A7EC5"
      />

      <div className="max-w-3xl mx-auto px-5 pb-16">

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          StageStart Curaçao gebruikt cookies en vergelijkbare technieken om de website goed te laten functioneren en, waar van toepassing, het gebruik van de website te analyseren.
        </p>

        <div className="flex flex-col gap-6">

          <section>
            <h2 className="font-serif text-lg font-normal text-dark mb-2">1. Wat zijn cookies?</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Cookies zijn kleine tekstbestanden die via je browser op je apparaat worden opgeslagen wanneer je een website bezoekt.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-normal text-dark mb-2">2. Welke cookies gebruiken wij?</h2>

            <h3 className="text-sm font-medium text-dark mb-1 mt-3">Functionele cookies</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              Deze cookies zijn nodig om de website goed te laten werken. Denk aan basisfunctionaliteiten, voorkeuren of technische stabiliteit.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Voor functionele cookies is in beginsel geen toestemming nodig, maar websitebezoekers moeten daar wel over worden geïnformeerd. Dat licht de Autoriteit Persoonsgegevens expliciet toe.
            </p>

            <h3 className="text-sm font-medium text-dark mb-1 mt-3">Analytische cookies</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Wij kunnen analytische cookies gebruiken om inzicht te krijgen in het gebruik van de website en de website te verbeteren.
            </p>

            <h3 className="text-sm font-medium text-dark mb-1 mt-3">Overige cookies</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Als StageStart Curaçao marketingcookies, trackingcookies of andere niet-noodzakelijke cookies gebruikt, vragen wij daarvoor vooraf toestemming, voor zover dat wettelijk vereist is.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-normal text-dark mb-2">3. Waarom gebruiken wij cookies?</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">Cookies kunnen worden gebruikt voor:</p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600 pl-5 list-disc">
              <li>het goed laten werken van de website</li>
              <li>het onthouden van instellingen of voorkeuren</li>
              <li>het meten en verbeteren van de prestaties van de website</li>
              <li>het verkrijgen van inzicht in hoe bezoekers de website gebruiken</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-normal text-dark mb-2">4. Cookies beheren of verwijderen</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Je kunt cookies via je browserinstellingen verwijderen of blokkeren. Houd er rekening mee dat de website daardoor mogelijk minder goed werkt.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-normal text-dark mb-2">5. Meer informatie</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Voor vragen over ons cookiegebruik kun je contact opnemen via <a href="mailto:info@jescoinnovation.nl" className="text-sky underline">info@jescoinnovation.nl</a>. StageStart Curaçao wordt beheerd door Jesco Innovation B.V.
            </p>
          </section>

        </div>

        <LastChecked
          date="2026-04-16"
          bron="Eigen redactie + Autoriteit Persoonsgegevens"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
