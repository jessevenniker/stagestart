import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

const EMAIL = 'info@jescoinnovation.nl'

const WEL = [
  'Feitelijke correcties op de inhoud van de site',
  'Suggesties voor onderwerpen of verbeteringen',
  'Samenwerkingen of partnervermeldingen',
  'Vragen over de inhoud van de site',
  'Persinformatie of verzoeken tot citaten',
]

const NIET = [
  'Persoonlijk stageadvies of begeleiding',
  'Juridisch advies over vergunning of verblijf (daarvoor is de Immigratiedienst Curaçao leidend)',
  'Bemiddeling bij het zoeken naar een stageplek',
  'Hulp bij het zoeken van huisvesting',
  'Medisch of verzekeringsadvies',
]

export default function Contact() {
  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Contact"
        title="Contact met StageStart Curaçao"
        subtitle="Een kleine redactie met een duidelijke scope. Hieronder staat waar je voor kunt mailen en wat je van ons mag verwachten."
        accentColor="#1A7EC5"
      />

      <div className="max-w-3xl mx-auto px-5 pb-16">

        {/* Wie zit hierachter */}
        <section className="mb-10">
          <p className="section-label">Wie zit hierachter?</p>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed">
              StageStart Curaçao is een onafhankelijk initiatief vanuit Jesco Innovation. Geen bureau, geen bemiddeling, geen commissies. De site draait op eigen onderzoek, officiële bronnen en ervaringen van eerdere stagiairs. Je bereikt de redactie rechtstreeks via onderstaand e-mailadres.
            </p>
          </div>
        </section>

        {/* E-mail + response time */}
        <section className="mb-10">
          <p className="section-label">Mail de redactie</p>
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">E-mailadres</p>
            <a
              href={`mailto:${EMAIL}`}
              className="font-serif text-2xl text-dark hover:text-sky transition-colors break-all"
            >
              {EMAIL}
            </a>
            <p className="text-sm text-gray-500 leading-relaxed mt-4">
              We streven ernaar binnen 2 tot 4 werkdagen te reageren. Bij drukte of vakantie kan dat iets langer duren. Voor dringende officiële vragen over je vergunning of verblijf verwijzen we direct door naar de Immigratiedienst Curaçao.
            </p>
          </div>
        </section>

        {/* Waar wel en niet voor */}
        <section className="mb-10">
          <p className="section-label">Waarvoor kun je ons mailen?</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="card">
              <p className="text-sm font-medium text-dark mb-3">Wel</p>
              <ul className="flex flex-col gap-2">
                {WEL.map((item) => (
                  <li key={item} className="text-sm text-gray-600 leading-relaxed flex gap-2">
                    <span className="text-sage shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-3">Niet</p>
              <ul className="flex flex-col gap-2">
                {NIET.map((item) => (
                  <li key={item} className="text-sm text-gray-600 leading-relaxed flex gap-2">
                    <span className="text-terra shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="mb-10">
          <p className="section-label">Samenwerkingen en partnerships</p>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              StageStart Curaçao staat open voor samenwerking met partijen die onze redactionele regels respecteren. Dat betekent: transparantie over de bron, geen commerciële framing in de hoofdtekst en geen vermeldingen die de onafhankelijkheid van de gids ondermijnen.
            </p>
            <p className="text-sm font-medium text-dark mb-2">Waar we open voor staan</p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600 mb-4">
              <li>· Officiële instanties en kennisbanken die hun informatie willen laten opnemen</li>
              <li>· Onderwijsinstellingen die verwijzen naar de gids</li>
              <li>· Non-commerciële initiatieven die aansluiten bij de scope</li>
              <li>· Partners met concrete praktische meerwaarde voor stagiairs</li>
            </ul>
            <p className="text-sm font-medium text-dark mb-2">Waar we geen ruimte voor hebben</p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
              <li>· Betaalde reviews of gesponsorde aanbevelingen in de hoofdtekst</li>
              <li>· Commerciële vergelijkingen tussen verhuurders, bureaus of verzekeraars</li>
              <li>· Vermeldingen die in conflict komen met onze bronhiërarchie</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              Mail ons met een concreet voorstel. We reageren altijd, ook als we niet meedoen.
            </p>
          </div>
        </section>

        {/* Wat StageStart niet is */}
        <section className="mb-10">
          <p className="section-label">Wat StageStart niet is</p>
          <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-sm text-gray-600 leading-relaxed">
              StageStart Curaçao is een informatieve gids. De site is geen stagebureau, geen verhuurplatform, geen juridisch advieskantoor en geen verzekeringsadviseur. We bemiddelen niet tussen stagiairs en bedrijven, verhuren geen woningen en geven geen persoonlijk juridisch of financieel advies. Voor officiële en actuele vereisten zijn instanties als de Immigratiedienst Curaçao, Justis, DUO en de Rijksoverheid altijd leidend.
            </p>
          </div>
        </section>

        {/* Gerelateerde pagina's */}
        <section className="mb-10">
          <p className="section-label">Gerelateerd</p>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link to="/disclaimer" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Disclaimer</p>
              <p className="text-xs text-gray-500 leading-relaxed">Gebruiksvoorwaarden en afbakening van aansprakelijkheid.</p>
            </Link>
            <Link to="/privacy" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Privacyverklaring</p>
              <p className="text-xs text-gray-500 leading-relaxed">Hoe we omgaan met persoonsgegevens van bezoekers.</p>
            </Link>
            <Link to="/bronnen" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Bronnen en verantwoording</p>
              <p className="text-xs text-gray-500 leading-relaxed">Elke claim met bron, datum en gevoeligheid.</p>
            </Link>
          </div>
        </section>

        <LastChecked
          date="2026-04-18"
          bron="Eigen redactie"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
