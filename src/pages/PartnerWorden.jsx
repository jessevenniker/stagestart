import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

const CATEGORIEEN = [
  '',
  'Huisvesting',
  'Vervoer of autohuur',
  'Verzekering of financieel',
  'Stagebegeleiding of support',
  'Vrije tijd of praktische services',
  'Anders',
]

const INITIAL_FORM = {
  name: '',           // contactpersoon
  email: '',
  bedrijf: '',
  telefoon: '',
  categorie: '',
  website: '',
  doelgroep: '',
  message: '',        // beschrijving + aanvullingen
  honeypot: '',       // bot-veld; mapt naar 'website' API-veld → maar conflict, dus apart benoemd
}

export default function PartnerWorden() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    setErrorMsg('')

    // Combineer alle velden in een leesbare body voor de inkomende mail
    const body = [
      `Aanvraag partnervermelding via /partner-worden`,
      ``,
      `Bedrijfsnaam: ${form.bedrijf}`,
      `Contactpersoon: ${form.name}`,
      `E-mail: ${form.email}`,
      form.telefoon ? `Telefoon: ${form.telefoon}` : null,
      `Categorie: ${form.categorie}`,
      form.website ? `Website: ${form.website}` : null,
      ``,
      `Voor welke stagiairs relevant:`,
      form.doelgroep,
      ``,
      `Beschrijving van het aanbod en aanvullende vragen:`,
      form.message,
    ].filter(Boolean).join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.name} (${form.bedrijf})`,
          email: form.email,
          subject: `Partner-aanvraag: ${form.bedrijf}`,
          message: body,
          website: form.honeypot,
        }),
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
      setErrorMsg('Kon de aanvraag niet versturen. Controleer je verbinding of mail rechtstreeks naar info@jescoinnovation.nl.')
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Partner worden van StageStart Curaçao"
        description="Informatie voor bedrijven die als partner vermeld willen worden. Voorwaarden, werkwijze en intakeformulier."
        type="website"
        noindex
      />
      <PageHero
        eyebrow="Partner worden"
        title="Wil je je bedrijf vermelden op StageStart Curaçao?"
        subtitle="StageStart Curaçao is en blijft een onafhankelijke gids. Op een aparte partnerpagina kunnen relevante bedrijven zichtbaar zijn voor stagiairs. Op deze pagina lees je onze voorwaarden en kun je een aanvraag indienen."
        accentColor="#1A7EC5"
      />

      <div className="max-w-3xl mx-auto px-5 pb-16">

        {/* Wat een partnership is */}
        <section className="mb-10">
          <h2 className="section-label">Wat een partnership inhoudt</h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Een partnervermelding op StageStart Curaçao staat op een aparte, duidelijk gelabelde partnerpagina. Bezoekers zien daar welke bedrijven relevant zijn voor specifieke onderwerpen, gescheiden van onze redactionele gidscontent.
            </p>
            <p className="text-sm font-medium text-dark mb-2">Wat een vermelding biedt</p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600 mb-4">
              <li>· Naam, korte omschrijving en logo op de partnerpagina</li>
              <li>· Categorie-indeling (huisvesting, vervoer, verzekering, support, vrije tijd)</li>
              <li>· Directe link naar de eigen website</li>
              <li>· Duidelijke vermelding als partner of betaalde plaatsing</li>
              <li>· Mogelijkheid tot uitgelichte plek tegen meerprijs</li>
            </ul>
            <p className="text-sm font-medium text-dark mb-2">Wat een vermelding niet biedt</p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
              <li>· Geen plaatsing in onze redactionele gidsen of artikelen</li>
              <li>· Geen redactionele aanbeveling of garantie</li>
              <li>· Geen invloed op onze inhoudelijke uitleg over regels, kosten of vergunningen</li>
              <li>· Geen SEO-backlinks als verkoopargument (links krijgen rel="sponsored")</li>
              <li>· Geen exclusiviteit binnen een categorie</li>
            </ul>
          </div>
        </section>

        {/* Voorwaarden */}
        <section className="mb-10">
          <h2 className="section-label">Onze voorwaarden voor partners</h2>
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li>
                <strong className="text-dark">Relevant voor stagiairs.</strong> Het aanbod moet aantoonbare waarde hebben voor Nederlandse stagiairs op Curaçao.
              </li>
              <li>
                <strong className="text-dark">Transparante prijzen en voorwaarden.</strong> Geen onduidelijke pakketprijzen of verborgen kosten in jullie aanbod.
              </li>
              <li>
                <strong className="text-dark">Geen misleidende claims.</strong> Geen garanties die officiële instanties niet kunnen geven, zoals "vergunning binnen X dagen".
              </li>
              <li>
                <strong className="text-dark">Officiële regels prevaleren.</strong> Bij conflict tussen partnerinformatie en officiële bronnen volgen wij de officiële bron in onze gidsen.
              </li>
              <li>
                <strong className="text-dark">Verwijdering bij klachten.</strong> Bij gegronde klachten van stagiairs of overtreding van bovenstaande punten kunnen wij de vermelding verwijderen.
              </li>
            </ul>
          </div>
        </section>

        {/* Hoe het werkt */}
        <section className="mb-10">
          <h2 className="section-label">Hoe het proces werkt</h2>
          <div className="card">
            <ol className="flex flex-col gap-2 text-sm text-gray-600 list-decimal pl-5">
              <li>Je vult het formulier hieronder in met informatie over je bedrijf en aanbod.</li>
              <li>Wij beoordelen of je aanbod past bij onze redactionele richtlijnen en doelgroep.</li>
              <li>Bij interesse plannen we een kort kennismakingsgesprek (telefonisch of digitaal).</li>
              <li>Bij wederzijdse fit ontvang je een partnerovereenkomst met voorwaarden, prijs en duur.</li>
              <li>Na ondertekening en eerste betaling plaatsen we je vermelding op de partnerpagina.</li>
            </ol>
            <p className="text-sm text-gray-500 leading-relaxed mt-4">
              We reageren in de regel binnen 5 werkdagen op een aanvraag. Niet elke aanvraag leidt tot een partnerschap. We motiveren een afwijzing altijd.
            </p>
          </div>
        </section>

        {/* Tarieven */}
        <section className="mb-10">
          <h2 className="section-label">Tarieven</h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Tarieven zijn afhankelijk van het type vermelding (standaard of uitgelicht), de categorie en de duur van het partnerschap. We werken met een vast maandbedrag, geen commissie per stagiair of klik.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Concrete tarieven delen wij in het kennismakingsgesprek nadat we hebben kunnen beoordelen of er fit is. Op aanvraag.
            </p>
          </div>
        </section>

        {/* Intakeformulier */}
        <section className="mb-10">
          <h2 className="section-label">Aanvraag indienen</h2>
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>

            {status === 'sent' ? (
              <div className="py-4">
                <p className="font-serif text-xl text-dark mb-2">Aanvraag ontvangen.</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Dank voor je interesse. We beoordelen je aanvraag en reageren in de regel binnen 5 werkdagen via het opgegeven e-mailadres.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-sm text-sky underline hover:text-dark transition-colors"
                >
                  Nieuwe aanvraag indienen
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>

                {/* Honeypot voor bots */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                  <label>
                    Laat dit veld leeg
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.honeypot}
                      onChange={update('honeypot')}
                    />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="p-bedrijf" className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Bedrijfsnaam</label>
                    <input
                      id="p-bedrijf"
                      type="text"
                      required
                      maxLength={150}
                      value={form.bedrijf}
                      onChange={update('bedrijf')}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors"
                      placeholder="Bedrijfsnaam"
                    />
                  </div>
                  <div>
                    <label htmlFor="p-name" className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Contactpersoon</label>
                    <input
                      id="p-name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                      value={form.name}
                      onChange={update('name')}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors"
                      placeholder="Voor- en achternaam"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="p-email" className="text-xs text-gray-500 uppercase tracking-wider block mb-1">E-mailadres</label>
                    <input
                      id="p-email"
                      type="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={update('email')}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors"
                      placeholder="contact@bedrijf.nl"
                    />
                  </div>
                  <div>
                    <label htmlFor="p-telefoon" className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Telefoon (optioneel)</label>
                    <input
                      id="p-telefoon"
                      type="tel"
                      maxLength={50}
                      value={form.telefoon}
                      onChange={update('telefoon')}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors"
                      placeholder="+31 6 ..."
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="p-categorie" className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Categorie</label>
                    <select
                      id="p-categorie"
                      required
                      value={form.categorie}
                      onChange={update('categorie')}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors"
                    >
                      {CATEGORIEEN.map((c) => (
                        <option key={c} value={c} disabled={c === ''}>
                          {c === '' ? 'Selecteer een categorie' : c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="p-website" className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Website (optioneel)</label>
                    <input
                      id="p-website"
                      type="url"
                      maxLength={300}
                      value={form.website}
                      onChange={update('website')}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors"
                      placeholder="https://"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="p-doelgroep" className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Voor welke stagiairs is je aanbod relevant?</label>
                  <textarea
                    id="p-doelgroep"
                    required
                    minLength={10}
                    maxLength={500}
                    rows={3}
                    value={form.doelgroep}
                    onChange={update('doelgroep')}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors resize-y"
                    placeholder="Bijvoorbeeld: HBO/WO-stagiairs die langer dan 3 maanden blijven..."
                  />
                </div>

                <div>
                  <label htmlFor="p-message" className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Beschrijving aanbod en aanvullende vragen</label>
                  <textarea
                    id="p-message"
                    required
                    minLength={20}
                    maxLength={3000}
                    rows={6}
                    value={form.message}
                    onChange={update('message')}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors resize-y"
                    placeholder="Beschrijf wat je aanbiedt, prijsindicatie, hoe lang je al actief bent en eventuele vragen..."
                  />
                </div>

                {status === 'error' && errorMsg && (
                  <div className="border-l-2 border-terra pl-3 py-1">
                    <p className="text-sm text-terra">{errorMsg}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We gebruiken je gegevens alleen om de aanvraag te beoordelen. Zie de <Link to="/privacy" className="underline hover:text-dark">privacyverklaring</Link>.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-terra shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Versturen...' : 'Verstuur aanvraag'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-10">
          <h2 className="section-label">Belangrijk om te weten</h2>
          <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-sm text-gray-600 leading-relaxed">
              StageStart Curaçao is en blijft in de eerste plaats een onafhankelijke informatieve gids. Een partnervermelding heeft geen invloed op onze redactionele uitleg over officiële regels, documenten, kosten of vereisten. Voor formele en actuele eisen blijven instanties als de Immigratiedienst Curaçao, DUO en de Rijksoverheid altijd leidend, ook voor onze partners. Zie ook onze <Link to="/disclaimer" className="text-sky underline">disclaimer</Link>, <Link to="/privacy" className="text-sky underline">privacyverklaring</Link> en de <Link to="/over" className="text-sky underline">redactionele werkwijze</Link>.
            </p>
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
