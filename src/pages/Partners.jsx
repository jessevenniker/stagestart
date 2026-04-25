import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'
import CommercialScope from '../components/CommercialScope'

// Categorieen die we open hebben staan voor partnervermeldingen.
// Zodra er een eerste partner bijkomt, vullen we een array per categorie
// in een vergelijkbare structuur als in de eerdere concept-versie.
const CATEGORIEEN = [
  {
    naam: 'Huisvesting',
    beschrijving: 'Studentenhuizen, kamerverhuur, studio\'s en short-stay aanbieders voor stagiairs en tussenjaar-werkers.',
    accent: '#D4522A',
  },
  {
    naam: 'Vervoer en autohuur',
    beschrijving: 'Autoverhuur met gunstige lange-huurtarieven, airport transfers en andere mobiliteitsoplossingen.',
    accent: '#F2B517',
  },
  {
    naam: 'Praktische support',
    beschrijving: 'Aankomstbegeleiding, sim-kaarten, bankregeling, eerste-week-pakketten en andere starters-hulp.',
    accent: '#3EAD6E',
  },
  {
    naam: 'Verzekering en financieel',
    beschrijving: 'Aanvullende reisverzekering specifiek voor langdurig verblijf en andere financiële diensten voor de doelgroep.',
    accent: '#1A7EC5',
  },
]

export default function Partners() {
  return (
    <>
      <SEO
        title="Partners — StageStart Curaçao"
        description="Partnerdirectory van StageStart Curaçao. Transparante samenwerkingen met bedrijven die relevant zijn voor stagiairs en tussenjaar-werkers, duidelijk gescheiden van onze redactionele gidsen."
        type="website"
      />

      <CommercialScope position="top" />

      <PageHero
        eyebrow="Partners"
        title="Partners die samenwerken met StageStart"
        subtitle="Een losse laag naast onze redactionele gidsen. Duidelijk gelabeld als samenwerking, nooit als aanbeveling. Op dit moment bouwen we de eerste partnerschappen zorgvuldig op."
        accentColor="#1A7EC5"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Hoe het werkt */}
        <section className="mb-10">
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
            <p className="text-sm font-medium text-dark mb-3">Hoe deze directory werkt</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-sky shrink-0">·</span>
                <span>Partijen op deze pagina zijn <strong className="text-dark">betaalde samenwerkingen</strong>. Dat staat onder elke vermelding.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky shrink-0">·</span>
                <span>Wij geven <strong className="text-dark">geen kwaliteitsoordeel</strong>. Wel een transparantie-check op zes objectieve punten (KvK, contactgegevens, publieke voorwaarden, etc.).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky shrink-0">·</span>
                <span>Links naar partners zijn <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">rel="sponsored"</code>. Een partnerschap levert geen SEO-backlink op.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky shrink-0">·</span>
                <span>Editorial gidsen blijven onafhankelijk. Een partner-vermelding heeft geen invloed op onze uitleg over regels, kosten of vergunningen.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky shrink-0">·</span>
                <span>Bij gegronde klachten onderzoeken wij en kan een vermelding verwijderd worden.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Gedragscode: toetsbare rode lijnen vóórdat we partners aannemen.
            Verplaatst van /over naar hier, waar potentiële partners en
            kritische lezers ze direct zoeken. */}
        <section className="mb-10">
          <h2 className="section-label">Onze gedragscode voor partners</h2>
          <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Om de onafhankelijkheid van de redactionele inhoud te bewaken, houden wij vast aan vijf regels. Deze regels zijn <strong className="text-dark">bindend</strong> en worden opgenomen in elk partnercontract.
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-terra shrink-0 font-medium">1.</span>
                <span><strong className="text-dark">Geen commissie per geboekte stage of doorverwezen lead.</strong> Partners betalen een vaste maandelijkse vergoeding voor zichtbaarheid, geen percentage per conversie.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-terra shrink-0 font-medium">2.</span>
                <span><strong className="text-dark">Geen invloed op redactionele content.</strong> Een partnerschap heeft geen enkele invloed op wat wij schrijven over regels, kosten, vergunningen, woonwijken of verzekeringen.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-terra shrink-0 font-medium">3.</span>
                <span><strong className="text-dark">Geen betaalde reviews of gesponsorde content in redactionele teksten.</strong> Partnerplaatsingen staan uitsluitend op deze pagina, duidelijk gelabeld als samenwerking.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-terra shrink-0 font-medium">4.</span>
                <span><strong className="text-dark">Geen ranking op betaalde basis.</strong> Volgorde van partners binnen een categorie is alfabetisch of op aanmelddatum, nooit op hoogte van vergoeding.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-terra shrink-0 font-medium">5.</span>
                <span><strong className="text-dark">Verwijdering bij gegronde klachten.</strong> Bij bewezen misleiding, oplichting of herhaalde klachten zonder verbetering wordt de vermelding verwijderd. Restitutie is uitgesloten (staat in de overeenkomst).</span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 leading-relaxed mt-4 italic">
              Deze regels gelden vanaf de eerste partner. Zie ook <Link to="/over" className="underline">hoe wij ons geld verdienen</Link> op de Over-pagina.
            </p>
          </div>
        </section>

        {/* Status-blok: nog geen partners */}
        <section className="mb-12">
          <div className="bg-cream rounded-2xl p-8">
            <p className="text-[10px] font-medium tracking-widest uppercase text-gray-500 mb-3">Status</p>
            <p className="font-serif text-2xl text-dark leading-snug mb-3">
              Op dit moment staan er nog geen partners vermeld.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Wij bouwen de eerste partnerschappen zorgvuldig op. Voordat een partij hier verschijnt, doorlopen we een transparantie-check en een kennismakingsgesprek. Dat kost tijd, en dat is bewust. Liever nul partners dan een partij die niet past.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
              Hieronder zie je in welke categorieën we open staan voor samenwerking. Past jouw bedrijf daarbij? Zie <Link to="/partner-worden" className="text-sky underline">/partner-worden</Link> voor het proces en ons intakeformulier.
            </p>
          </div>
        </section>

        {/* Categorieën waarin we partners zoeken */}
        <section className="mb-12">
          <h2 className="section-label">Categorieën waarin we samenwerken</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {CATEGORIEEN.map((c) => (
              <div
                key={c.naam}
                className="card"
                style={{ borderLeft: `3px solid ${c.accent}` }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="font-serif text-lg text-dark leading-snug">{c.naam}</p>
                  <span className="text-[10px] font-medium tracking-widest uppercase text-gray-400 shrink-0 mt-1">Open</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{c.beschrijving}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Transparantie-check uitleg */}
        <section className="mb-10">
          <h2 className="section-label">Wat houdt de transparantie-check in?</h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Zes objectieve punten die wij publiek kunnen verifiëren. Een hoge score zegt iets over <strong className="text-dark">openheid en controleerbaarheid</strong>, niet over kwaliteit. Een partij met 6/6 kan alsnog slecht uitpakken voor een individuele stagiair. Doe altijd je eigen check voordat je iets afneemt.
            </p>
            <ol className="flex flex-col gap-2 text-sm text-gray-600 list-decimal pl-5">
              <li>KvK- of registratienummer publiek beschikbaar</li>
              <li>Fysiek adres of hoofdvestiging zichtbaar</li>
              <li>Direct aanspreekpunt (naam + contactgegevens)</li>
              <li>Huur- of dienstvoorwaarden publiek of op verzoek</li>
              <li>Minimaal twaalf maanden actief</li>
              <li>Klachtenroute aanwezig</li>
            </ol>
            <p className="text-xs text-gray-500 leading-relaxed mt-4 italic">
              Dit is geen kwaliteitsoordeel en geen aanbeveling. Het geeft alleen aan dat basisinformatie aanwezig en controleerbaar is.
            </p>
          </div>
        </section>

        {/* CTA's */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-cream rounded-2xl p-6 flex flex-col gap-3">
            <p className="font-serif text-lg text-dark leading-snug">Zelf partner worden?</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lees onze voorwaarden en dien een aanvraag in. We reageren binnen 5 werkdagen.
            </p>
            <Link to="/partner-worden" className="btn-terra self-start shrink-0">Naar aanvraag →</Link>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
            <p className="font-serif text-lg text-dark leading-snug">Klacht of vraag over een partner?</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Zodra er partners vermeld staan: meld problemen via ons contactformulier. We onderzoeken elke gegronde klacht.
            </p>
            <Link to="/contact" className="text-sm font-medium text-sky underline self-start shrink-0">Naar contact →</Link>
          </div>
        </div>

        <CommercialScope position="bottom" />

        <LastChecked
          date="2026-04-21"
          bron="Eigen redactie"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
