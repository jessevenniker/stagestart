import { useState } from 'react'
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

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '', // honeypot
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setErrorMsg(data.error || 'Er ging iets mis. Probeer het later opnieuw of mail rechtstreeks.')
        setStatus('error')
        return
      }

      setStatus('sent')
      setForm(INITIAL_FORM)
    } catch {
      setErrorMsg('Kon het bericht niet versturen. Controleer je verbinding of mail rechtstreeks.')
      setStatus('error')
    }
  }

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
          <h2 className="section-label">Wie zit hierachter?</h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed">
              StageStart Curaçao is een onafhankelijk initiatief vanuit Jesco Innovation B.V. Geen bureau, geen bemiddeling, geen commissies. De site draait op eigen onderzoek, officiële bronnen en ervaringen van eerdere stagiairs. Je bereikt de redactie rechtstreeks via onderstaand formulier of per e-mail.
            </p>
          </div>
        </section>

        {/* Contactformulier */}
        <section className="mb-10">
          <h2 className="section-label">Stuur een bericht</h2>
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>

            {status === 'sent' ? (
              <div className="py-4">
                <p className="font-serif text-xl text-dark mb-2">Bericht verstuurd.</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Dank voor je bericht. We reageren doorgaans binnen 2 tot 4 werkdagen. Bij drukte of vakantie kan dat iets langer duren.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-sm text-sky underline hover:text-dark transition-colors"
                >
                  Nog een bericht sturen
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>

                {/* Honeypot: verborgen voor mensen, ingevuld door bots */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                  <label>
                    Laat dit veld leeg
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={update('website')}
                    />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Naam</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                      value={form.name}
                      onChange={update('name')}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors"
                      placeholder="Je naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-xs text-gray-500 uppercase tracking-wider block mb-1">E-mailadres</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={update('email')}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors"
                      placeholder="jij@voorbeeld.nl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Onderwerp (optioneel)</label>
                  <input
                    id="contact-subject"
                    type="text"
                    maxLength={150}
                    value={form.subject}
                    onChange={update('subject')}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors"
                    placeholder="Correctie, suggestie, samenwerking..."
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Bericht</label>
                  <textarea
                    id="contact-message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={6}
                    value={form.message}
                    onChange={update('message')}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors resize-y"
                    placeholder="Schrijf je bericht hier..."
                  />
                </div>

                {status === 'error' && errorMsg && (
                  <div className="border-l-2 border-terra pl-3 py-1">
                    <p className="text-sm text-terra">{errorMsg}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We gebruiken je gegevens alleen om te reageren. Zie de <Link to="/privacy" className="underline hover:text-dark">privacyverklaring</Link>.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-terra shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Versturen...' : 'Verstuur bericht'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Directe e-mail fallback */}
        <section className="mb-10">
          <h2 className="section-label">Liever direct mailen?</h2>
          <div className="card">
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">E-mailadres</p>
            <a
              href={`mailto:${EMAIL}`}
              className="font-serif text-xl text-dark hover:text-sky transition-colors break-all"
            >
              {EMAIL}
            </a>
            <p className="text-sm text-gray-500 leading-relaxed mt-3">
              We streven ernaar binnen 2 tot 4 werkdagen te reageren. Voor dringende officiële vragen over je vergunning of verblijf verwijzen we direct door naar de Immigratiedienst Curaçao.
            </p>
          </div>
        </section>

        {/* Waar wel en niet voor */}
        <section className="mb-10">
          <h2 className="section-label">Waarvoor kun je ons mailen?</h2>
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
          <h2 className="section-label">Samenwerkingen en partnerships</h2>
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
          <h2 className="section-label">Wat StageStart niet is</h2>
          <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-sm text-gray-600 leading-relaxed">
              StageStart Curaçao is een informatieve gids. De site is geen stagebureau, geen verhuurplatform, geen juridisch advieskantoor en geen verzekeringsadviseur. We bemiddelen niet tussen stagiairs en bedrijven, verhuren geen woningen en geven geen persoonlijk juridisch of financieel advies. Voor officiële en actuele vereisten zijn instanties als de Immigratiedienst Curaçao, Justis, DUO en de Rijksoverheid altijd leidend.
            </p>
          </div>
        </section>

        {/* Gerelateerde pagina's */}
        <section className="mb-10">
          <h2 className="section-label">Gerelateerd</h2>
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
