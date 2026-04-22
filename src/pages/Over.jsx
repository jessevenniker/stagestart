import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'
import { articleSchema } from '../utils/schema'

const SCHEMA = articleSchema({
  headline: 'Over StageStart Curaçao: wie wij zijn en hoe wij werken',
  description: 'StageStart Curaçao is een onafhankelijke gids vanuit Jesco Innovation B.V. Lees hoe wij content maken, controleren en bijwerken.',
  path: '/over',
  dateModified: '2026-04-19',
})

export default function Over() {
  return (
    <>
      <SEO schema={SCHEMA} />
      <PageHero
        eyebrow="Over StageStart"
        title="Wie staat er achter StageStart Curaçao?"
        subtitle="Een onafhankelijke gids vanuit Jesco Innovation B.V. Geen bureau, geen bemiddeling, geen commissies. Hieronder lees je hoe wij content maken en op tijd actueel houden."
        accentColor="#1A7EC5"
      />

      <div className="max-w-3xl mx-auto px-5 pb-16">

        <section className="mb-10">
          <h2 className="section-label">Wie staat erachter?</h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              StageStart Curaçao is een onafhankelijk initiatief vanuit <strong className="text-dark">Jesco Innovation B.V.</strong>, gevestigd in Nederland. We hebben geen commerciële banden met stagebureaus, verhuurplatforms, verzekeraars of andere partijen die geld verdienen aan stagiairs.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              De site bestaat omdat de bestaande informatie voor Nederlandse stagiairs over Curaçao versnipperd, deels achterhaald en vaak commercieel gekleurd is. Wij brengen wat de officiële instanties zeggen samen met praktische ervaringen, en houden die strikt gescheiden.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="section-label">Hoe wij content maken</h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Onze redactie hanteert een vast werkproces dat we ook publiek hebben gedocumenteerd. De kern is de <strong className="text-dark">bronhiërarchie</strong>:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600 mb-3">
              <li>
                <strong className="text-dark">Officiële bronnen</strong> (Immigratiedienst Curaçao, DUO, Justis, Rijksoverheid) zijn altijd leidend voor harde claims over geld, documenten, verblijf en juridische status.
              </li>
              <li>
                <strong className="text-dark">Praktische richtlijnen</strong> komen van onze redactionele interpretatie van die officiële bronnen, expliciet als zodanig gelabeld.
              </li>
              <li>
                <strong className="text-dark">Ervaringsinzichten</strong> komen uit gesprekken met eerdere stagiairs en eigen veldwerk, ook expliciet gelabeld.
              </li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">
              Bij conflict tussen praktijkervaring en officiële bron volgen wij altijd de officiële bron in de hoofdtekst. De praktijkervaring komt apart terug onder een ervaringslabel.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="section-label">Hoe wij content controleren</h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Onder elke pagina staat een <strong className="text-dark">Laatst gecontroleerd</strong>-stempel met datum, bron en gevoeligheidsniveau. Het controleritme is gekoppeld aan dat gevoeligheidsniveau:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600 mb-3">
              <li>
                <strong className="text-dark">Hoog gevoelig</strong> (vergunning, documenten, kosten): minimaal elk kwartaal nagekeken tegen de officiële bron, en direct bij elke bekende wijziging.
              </li>
              <li>
                <strong className="text-dark">Middel gevoelig</strong> (richtlijnen, contactgegevens): minstens halfjaarlijks.
              </li>
              <li>
                <strong className="text-dark">Laag gevoelig</strong> (ervaringscontent, lifestyle-tips): jaarlijks of bij signalering.
              </li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">
              Elke claim die op de site staat is opgenomen in ons interne claim-register. Deze registratie is publiek inzichtelijk via de <Link to="/bronnen" className="text-sky underline">Bronnen-pagina</Link>.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="section-label">Wat wij niet doen</h2>
          <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Om de onafhankelijkheid te bewaken doen wij bewust een aantal dingen niet:
            </p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
              <li>· Wij bemiddelen niet tussen stagiairs en bedrijven</li>
              <li>· Wij verhuren of verkopen geen woningen</li>
              <li>· Wij geven geen persoonlijk juridisch, medisch of financieel advies</li>
              <li>· Wij accepteren geen commissie per geboekte stage of doorverwezen lead</li>
              <li>· Wij plaatsen geen betaalde reviews of gesponsorde content in onze redactionele teksten</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="section-label">Hoe wij ons geld verdienen</h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              <strong className="text-dark">Status: pre-revenue.</strong> Op dit moment verdient StageStart Curaçao geen geld. De site wordt gefinancierd vanuit <strong className="text-dark">Jesco Innovation B.V.</strong> terwijl we bouwen.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              We werken aan een partnermodel op <Link to="/partners" className="text-sky underline">/partners</Link> waarin relevante partijen (huisvesting, vervoer, support) een vaste maandelijkse vergoeding betalen voor een duidelijk gelabelde vermelding. Dat model gaat pas live als we zeker weten dat het onze redactionele onafhankelijkheid niet beschadigt. Daarom: vaste prijs (geen commissie per lead), strikte scheiding tussen redactie en partnerlaag, en publiek controleerbare regels.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Zie <Link to="/partners" className="text-sky underline">/partners</Link> voor de publieke regels die we onszelf opleggen, en <Link to="/partner-worden" className="text-sky underline">/partner-worden</Link> voor partijen die mee willen doen.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="section-label">Feedback en correcties</h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed">
              Zie je iets dat niet klopt of verouderd is? Mail ons via <a href="mailto:info@jescoinnovation.nl" className="text-sky underline">info@jescoinnovation.nl</a> of gebruik het <Link to="/contact" className="text-sky underline">contactformulier</Link>. We controleren elke melding en passen aan waar nodig. Reactie meestal binnen 2 tot 4 werkdagen.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="section-label">Meer over onze werkwijze</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link to="/bronnen" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Bronnen en verantwoording</p>
              <p className="text-xs text-gray-500 leading-relaxed">Elke claim met bron, datum en gevoeligheid op één pagina.</p>
            </Link>
            <Link to="/disclaimer" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Disclaimer</p>
              <p className="text-xs text-gray-500 leading-relaxed">Gebruiksvoorwaarden en afbakening van aansprakelijkheid.</p>
            </Link>
            <Link to="/privacy" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Privacyverklaring</p>
              <p className="text-xs text-gray-500 leading-relaxed">Hoe we omgaan met persoonsgegevens van bezoekers.</p>
            </Link>
          </div>
        </section>

        <LastChecked
          date="2026-04-19"
          bron="Eigen redactie"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
