import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'

// Fictieve placeholder-entries. Dit is een CONCEPT, geen live partner-directory.
// Partijen hieronder zijn verzonnen voor visueel voorbeeld.
const PARTNERS = [
  {
    categorie: 'Huisvesting',
    naam: 'Studentenhuis Jan Thiel',
    plaats: 'Jan Thiel',
    beschrijving: 'Gedeelde studentenhuizen (10-25 kamers) op loopafstand van Mambo Beach. Kamers vanaf €375 p.p. per maand, inclusief stroom en wifi.',
    website: '#',
    whatsapp: null,
    transparantie: '6/6',
    accent: '#D4522A',
    concept: true,
  },
  {
    categorie: 'Huisvesting',
    naam: 'Pietermaai Rooms',
    plaats: 'Pietermaai',
    beschrijving: 'Kamers en studio\'s in gerenoveerde koloniale panden, hartje Pietermaai-district. Vanaf €450 p.p., short-stay en lange termijn.',
    website: '#',
    whatsapp: null,
    transparantie: '5/6',
    accent: '#D4522A',
    concept: true,
  },
  {
    categorie: 'Vervoer en autohuur',
    naam: 'Curaçao Car Rental Student',
    plaats: 'Willemstad',
    beschrijving: 'Kleine auto\'s voor stagiairs met gunstige lange-huurtarieven (3+ maanden). Ophalen op het eiland, no-deposit optie voor herhaalklanten.',
    website: '#',
    whatsapp: '#',
    transparantie: '6/6',
    accent: '#F2B517',
    concept: true,
  },
  {
    categorie: 'Vervoer en autohuur',
    naam: 'Airport Transfer CW',
    plaats: 'Hato Airport',
    beschrijving: 'Vaste prijs van het vliegveld naar Willemstad, Jan Thiel of Piscadera. Vooraf te boeken, Nederlandstalig.',
    website: '#',
    whatsapp: '#',
    transparantie: '4/6',
    accent: '#F2B517',
    concept: true,
  },
  {
    categorie: 'Praktische support',
    naam: 'Curaçao Starter Pack',
    plaats: 'Willemstad',
    beschrijving: 'Startpakket voor de eerste week: sim-kaart, bankrekening-intro, lokale tips. Voor stagiairs die hulp willen bij de eerste dagen.',
    website: '#',
    whatsapp: '#',
    transparantie: '5/6',
    accent: '#3EAD6E',
    concept: true,
  },
  {
    categorie: 'Verzekering',
    naam: 'Stage Verzekering NL',
    plaats: 'Nederland',
    beschrijving: 'Aanvullende reisverzekering met specifieke dekking voor stages van 3-12 maanden op Curaçao. Vergelijking met basisverzekering inbegrepen.',
    website: '#',
    whatsapp: null,
    transparantie: '6/6',
    accent: '#1A7EC5',
    concept: true,
  },
]

const CATEGORIE_VOLGORDE = [
  'Huisvesting',
  'Vervoer en autohuur',
  'Praktische support',
  'Verzekering',
]

export default function Partners() {
  const byCategorie = CATEGORIE_VOLGORDE.map((cat) => ({
    categorie: cat,
    partijen: PARTNERS.filter((p) => p.categorie === cat),
  }))

  return (
    <>
      <SEO
        title="Partners — StageStart Curaçao (concept)"
        description="Concept-weergave van hoe een partnerdirectory er op StageStart Curaçao uit zou kunnen zien. Niet live."
        type="website"
        noindex
      />

      {/* Concept-banner prominent bovenaan */}
      <div className="bg-amber-50 border-b border-amber-200 py-3 px-5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-amber-700 shrink-0">
            Concept · niet live
          </span>
          <p className="text-sm text-gray-700">
            Visueel voorbeeld hoe een partnerdirectory op StageStart eruit kán zien. De partijen hieronder zijn verzonnen. Zie <Link to="/partner-worden" className="underline">/partner-worden</Link> voor het echte proces.
          </p>
        </div>
      </div>

      <PageHero
        eyebrow="Partnerdirectory — concept"
        title="Partners die samenwerken met StageStart"
        subtitle="Een losse laag naast onze redactionele gidsen. Duidelijk gelabeld als samenwerking, geen redactionele aanbeveling. Doe altijd je eigen check voor je iets afneemt."
        accentColor="#1A7EC5"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Legenda en werking */}
        <section className="mb-10">
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
            <p className="text-sm font-medium text-dark mb-3">Hoe deze directory werkt</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-sky shrink-0">·</span>
                <span>Partijen betalen voor zichtbaarheid op deze pagina. Dat staat onder elk blok.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky shrink-0">·</span>
                <span>Wij geven <strong className="text-dark">geen kwaliteitsoordeel</strong>. Wel een transparantie-check op objectieve punten (KvK, contactgegevens, publieke voorwaarden, etc.).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky shrink-0">·</span>
                <span>Links naar partners zijn <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">rel="sponsored"</code>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky shrink-0">·</span>
                <span>Bij gegronde klachten onderzoeken wij en kan een vermelding verwijderd worden. Zie <Link to="/partner-proces" className="text-sky underline">/partner-proces</Link> (nog in ontwikkeling).</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Categorieën met partijen */}
        {byCategorie.map(({ categorie, partijen }) => (
          <section key={categorie} className="mb-12">
            <h2 className="section-label">{categorie}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {partijen.map((p) => (
                <div
                  key={p.naam}
                  className="card relative"
                  style={{ borderLeft: `3px solid ${p.accent}` }}
                >
                  {/* Concept-overlay */}
                  {p.concept && (
                    <span className="absolute top-3 right-3 text-[9px] font-bold tracking-widest uppercase text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                      Voorbeeld
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-3 mb-2 pr-20">
                    <div>
                      <p className="font-serif text-lg text-dark leading-snug">{p.naam}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{p.plaats}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {p.beschrijving}
                  </p>

                  {/* Transparantie-indicator */}
                  <div className="flex items-center gap-2 mb-4 text-xs">
                    <span className="inline-block w-2 h-2 rounded-full bg-sage shrink-0" />
                    <span className="text-gray-500">
                      Transparantie-check: <strong className="text-dark">{p.transparantie}</strong> punten aanwezig
                    </span>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={p.website}
                      rel="sponsored noopener"
                      target="_blank"
                      className="text-xs font-medium px-3 py-1.5 rounded border border-gray-200 text-dark hover:bg-gray-50 transition-colors"
                    >
                      Naar website →
                    </a>
                    {p.whatsapp && (
                      <a
                        href={p.whatsapp}
                        rel="sponsored noopener"
                        target="_blank"
                        className="text-xs font-medium px-3 py-1.5 rounded bg-sage text-white hover:opacity-90 transition-opacity"
                      >
                        WhatsApp
                      </a>
                    )}
                  </div>

                  {/* Disclosure */}
                  <p className="text-[10px] text-gray-400 italic mt-3 pt-3 border-t border-gray-100 leading-relaxed">
                    Betaalde samenwerking. Geen redactionele aanbeveling. Controleer zelf voorwaarden, locatie en contract voordat je iets afneemt.
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Transparantie-check uitleg */}
        <section className="mb-10">
          <h2 className="section-label">Wat houdt de transparantie-check in?</h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Zes objectieve punten die wij publiek kunnen verifiëren. Een hoge score zegt alleen iets over openheid, <strong className="text-dark">niet over kwaliteit</strong>. Een partij met 6/6 kan alsnog slecht uitpakken. Doe altijd je eigen check.
            </p>
            <ol className="flex flex-col gap-2 text-sm text-gray-600 list-decimal pl-5">
              <li>KvK- of registratienummer publiek beschikbaar</li>
              <li>Fysiek adres of hoofdvestiging zichtbaar</li>
              <li>Direct aanspreekpunt (naam + contactgegevens)</li>
              <li>Huur- of dienstvoorwaarden publiek of op verzoek</li>
              <li>Minimaal 12 maanden actief</li>
              <li>Klachtenroute aanwezig</li>
            </ol>
            <p className="text-xs text-gray-500 leading-relaxed mt-4 italic">
              Volledige procedure op <Link to="/partner-proces" className="underline">/partner-proces</Link> (nog in ontwikkeling).
            </p>
          </div>
        </section>

        {/* Iets melden */}
        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between mb-10">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Klacht of probleem met een partner?</p>
            <p className="text-sm text-gray-600">Meld het via ons contactformulier. We onderzoeken elke gegronde klacht.</p>
          </div>
          <Link to="/contact" className="btn-terra shrink-0">Klacht melden →</Link>
        </div>

        {/* Call-to-action voor partners */}
        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Zelf partner worden?</p>
            <p className="text-sm text-gray-600">Lees onze voorwaarden en dien een aanvraag in. We reageren binnen 5 werkdagen.</p>
          </div>
          <Link to="/partner-worden" className="text-sm font-medium text-sky underline shrink-0">Naar /partner-worden →</Link>
        </div>

        <p className="text-xs text-gray-400 italic mt-10 text-center">
          Laatst bijgewerkt: concept-versie, 2026-04-21. Pagina is <code className="text-[10px] bg-gray-100 px-1 py-0.5 rounded">noindex</code> en niet opgenomen in de sitemap.
        </p>
      </div>
    </>
  )
}
