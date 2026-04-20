import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

const STRIPE = ['#D4522A', '#F2B517', '#3EAD6E', '#1A7EC5', '#E8507A']

const HOOFDSTUKKEN = [
  {
    n: '01',
    color: '#D4522A',
    title: 'Vertrekchecklist',
    lead: 'De grootste documenten in de juiste volgorde, met tijdlijn.',
    items: [
      { label: '8-10 weken voor vertrek', text: 'VOG aanvragen via Justis.nl. Kosten €41,35. Duurt 4-6 weken.' },
      { label: '8 weken voor vertrek', text: 'Stagevergunning aanvragen bij de Immigratiedienst Curaçao. Legeskosten XCG 525 (± €263).' },
      { label: '6-8 weken voor vertrek', text: 'Geboorteakte opvragen bij je gemeente. Mag bij indiening niet ouder zijn dan 1 jaar.' },
      { label: '6 weken voor vertrek', text: 'Internationale zorgverzekering met dekking voor Curaçao afsluiten. Polisblad nodig voor de vergunning.' },
      { label: '4-6 weken voor vertrek', text: 'Vliegticket boeken. Prijzen stijgen flink richting vertrekdatum.' },
      { label: '2-3 weken voor vertrek', text: 'Woning geregeld? Transport vanaf luchthaven afgesproken?' },
      { label: '1 week voor vertrek', text: 'DI Card invullen op dicardcuracao.com (gratis, verplicht, binnen 7 dagen voor vertrek).' },
      { label: 'Dag van vertrek', text: 'Paspoort, vergunningsbewijs, polisblad, DI Card-bevestiging en geboorteakte in handbagage.' },
    ],
    cta: { to: '/voor-vertrek', label: 'Volledige vertrekchecklist' },
  },
  {
    n: '02',
    color: '#F2B517',
    title: 'Vergunning stappenplan',
    lead: 'Studie/stage en Verklaring van Rechtswege zijn twee aparte informatiestromen.',
    items: [
      { label: 'Wat zegt de officiële bron', text: 'De Immigratiedienst Curaçao publiceert twee aparte pagina\'s: Studie/Stage en Verklaring van Rechtswege. Voor Nederlandse stagiairs kunnen beide relevant zijn.' },
      { label: 'Vereiste documenten', text: 'VOG (max 3 maanden oud), geboorteakte (max 1 jaar oud), KvK-uittreksel stagebedrijf, polisblad ziektekostenverzekering, stageovereenkomst.' },
      { label: 'Legeskosten', text: 'XCG 525,00. Maak niet over in euro\'s. Screenshot van betaling bewaren als bewijs bij indiening.' },
      { label: 'Indiening', text: 'Per e-mail naar intake@immigrationcur.org. Na indiening ontvang je een voorlopig bewijs — goed bewaren.' },
      { label: 'Verwerkingstijd', text: 'Officieel maximaal 4 maanden. Plan vooruit. Je mag wettelijk al stage lopen ná indiening van de aanvraag.' },
    ],
    cta: { to: '/vergunning', label: 'Volledige vergunningsuitleg' },
  },
  {
    n: '03',
    color: '#3EAD6E',
    title: 'Budgetoverzicht',
    lead: 'Realistische kosten en inkomsten voor een stagemaand op Curaçao.',
    items: [
      { label: 'Eenmalige kosten', text: 'Stagevergunning ± €320, vliegticket € 600-1.000, borg woning 1-1,5 keer huur, borg auto € 500-1.000, eerste boodschappen € 100-300.' },
      { label: 'Maandelijkse kosten', text: 'Huur € 500-1.000, auto (huur + benzine) € 400-600, boodschappen € 200-300, uitgaan € 100-200, onverwacht € 50-100.' },
      { label: 'Inkomsten', text: 'OV-vergoeding DUO € 110,95/mnd (2026) als je studentenreisproduct stopt. Basisbeurs uitwonend HBO/WO € 324,52/mnd (2026) loopt gewoon door.' },
      { label: 'Wat vaak wordt vergeten', text: 'De eerste maand is altijd duurder: borgen, inrichting, SIM en eerste boodschappen komen bovenop de vaste lasten.' },
    ],
    cta: { to: '/kosten', label: 'Volledige budgetcalculator' },
  },
  {
    n: '04',
    color: '#1A7EC5',
    title: 'Inpaklijst',
    lead: 'Wat neem je mee en wat koop je beter ter plekke?',
    items: [
      { label: 'Zeker meenemen uit Nederland', text: 'Zonnebrand SPF 50+ (soms dubbele prijs op Curaçao), voorgeschreven medicijnen voor hele stageperiode plus kopie recept, universele wereldstekker (Curaçao heeft zowel 220V EU als 110V US).' },
      { label: 'Documenten', text: 'Paspoort, vergunningsbewijs, polisblad, DI Card, geboorteakte, VOG, vliegticket en rijbewijs.' },
      { label: 'Voor stage', text: 'Laptop en oplader, externe harde schijf, eventueel werkkleding. Kantoren kunnen stevig airconditioning hebben.' },
      { label: 'Beter lokaal kopen', text: 'Handdoeken, beddengoed, basis kookgerei. Vaak goedkoper of al aanwezig in gemeubileerde woning.' },
      { label: 'Pinpas op "wereld" zetten', text: 'Regel bij je bank dat de pas buiten Europa werkt. Anders kun je de eerste dagen niet pinnen.' },
    ],
    cta: { to: '/voor-vertrek', label: 'Volledige inpaklijst' },
  },
  {
    n: '05',
    color: '#E8507A',
    title: 'Eerste week planning',
    lead: 'Dag voor dag wat je regelt de eerste 7 dagen.',
    items: [
      { label: 'Dag 1', text: 'Aankomst Hato Airport, vergunning tonen bij grenscontrole, taxi/ophaalservice naar woning, SIM-kaart in aankomsthal (DennisMobile, Digicel of Flow).' },
      { label: 'Dag 2', text: 'Eerste boodschappen (Van den Tweel, Centrum Supermarkt of PriceSmart), omgeving verkennen, locaties van apotheek, benzinestation en supermarkt onthouden.' },
      { label: 'Dag 3', text: 'Pinpas testen bij geldautomaat, wifi checken op woning, tijdverschil instellen voor calls naar thuis. Bankrekening openen is optioneel en duurt 2-4 maanden.' },
      { label: 'Dag 4-5', text: 'Eerste dag op stage. Route oefenen zodat je de reistijd weet. Nummers opslaan van stagebegeleider, huisbaas en medestagiairs.' },
      { label: 'Dag 6-7', text: 'Eerste weekend. Een strand bezoeken (Knip, Cas Abao, Playa Lagun), Willemstad centrum verkennen, huisgenoten leren kennen.' },
    ],
    cta: { to: '/eerste-week', label: 'Volledige eerste-weekplanning' },
  },
  {
    n: '06',
    color: '#D4522A',
    title: 'Handige nummers en adressen',
    lead: 'Sla deze op in je telefoon voor je vertrekt.',
    items: [
      { label: 'Noodhulp', text: 'Politie, brandweer, ambulance: 911. Medische spoed: 910. Ambulance: 912. Kustwacht: 913. Toeristenpolitie: +599 9 674-0444.' },
      { label: 'Verkeersongeval', text: 'Forensys: 9223 (bel bij elk ongeval, verplaats auto niet). WhatsApp Forensys: +599 9 461-3282. Wegenwacht: 9247.' },
      { label: 'Medisch', text: 'Ziekenhuis CMC (algemeen): +599 9 745-0000. CMC eerste hulp: +599 9 745-0026. Nederlandstalige huisarts Centro Medico: +599 9 737-0522 (SBN Doormanweg 47).' },
      { label: 'Immigratiedienst', text: 'Adres: Scharlooweg 29. E-mail voor aanvraagindiening: intake@immigrationcur.org. Website: immigrationcur.org.' },
    ],
    cta: { to: '/eerste-week', label: 'Volledige nummerlijst' },
  },
]

const UPDATES_INITIAL = { email: '', website: '' }

export default function Startgids() {
  const [form, setForm] = useState(UPDATES_INITIAL)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  async function onSubmitUpdates(e) {
    e.preventDefault()
    if (status === 'sending') return

    if (!form.email.includes('@') || form.email.length < 5) {
      setErrorMsg('Vul een geldig e-mailadres in.')
      setStatus('error')
      return
    }

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Aanmelding updates (Startgids)',
          email: form.email,
          subject: 'Aanmelding: updates bij wijzigingen startgids',
          message: `Nieuwe aanmelding voor updates bij wijzigingen in regels, kosten of documenten.\n\nE-mailadres: ${form.email}`,
          website: form.website,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setErrorMsg(data.error || 'Er ging iets mis. Probeer het later opnieuw.')
        setStatus('error')
        return
      }

      setStatus('sent')
      setForm(UPDATES_INITIAL)
    } catch {
      setErrorMsg('Kon de aanmelding niet versturen. Controleer je verbinding.')
      setStatus('error')
    }
  }

  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Startgids"
        title="De complete startgids voor je stage op Curaçao."
        subtitle="Vertrekchecklist, vergunning, budget, inpaklijst, eerste week en noodnummers. Alles op één pagina. Direct leesbaar. Opslaan als PDF met één klik."
        accentColor="#3EAD6E"
        image="/img/cta-sunset.jpg"
        imageAlt="Zonsondergang aan de kust van Curaçao, einde van een stagedag"
      />

      <div className="max-w-3xl mx-auto px-5 pb-16">

        {/* Acties bovenaan */}
        <section className="mb-10 print:hidden">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/downloads/stagestart-startgids.pdf"
              download="stagestart-startgids.pdf"
              className="btn-terra inline-flex items-center justify-center gap-2"
            >
              Download de gids als PDF
            </a>
            <a
              href="#updates"
              className="inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 rounded-md border border-gray-200 text-gray-600 hover:text-dark hover:border-gray-400 transition-colors"
            >
              Updates bij wijzigingen ontvangen
            </a>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mt-3 max-w-xl">
            De PDF is klaar en wordt meteen gedownload. 11 pagina's, met cover, inhoudsopgave en foto's per hoofdstuk. Je kunt de tekst hieronder ook direct op deze pagina lezen.
          </p>
        </section>

        {/* Cover visueel */}
        <section className="mb-10 print:mb-6">
          <div className="rounded-xl border border-gray-100 overflow-hidden">
            <div className="flex h-2">
              {STRIPE.map((c, i) => <div key={i} className="flex-1" style={{ background: c }} />)}
            </div>
            <div className="p-6 bg-gray-50 print:bg-white">
              <div className="flex items-baseline gap-0 mb-1">
                <span className="font-serif text-2xl font-normal text-dark">Stage</span>
                <span className="font-serif text-2xl font-medium text-dark">Start</span>
              </div>
              <p className="text-[10px] tracking-[0.14em] uppercase text-gray-400 mb-6">Curaçao</p>
              <p className="font-serif text-2xl font-normal text-dark mb-1">Startgids voor stagiairs</p>
              <p className="text-sm text-gray-500">Vertrekchecklist, vergunning, budget, inpaklijst, eerste week en noodnummers.</p>
              <div className="mt-6 flex gap-1">
                {STRIPE.map((c, i) => (
                  <div key={i} className="h-1 rounded-sm flex-1" style={{ background: c, opacity: 0.4 }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hoofdstukken */}
        {HOOFDSTUKKEN.map((h) => (
          <section key={h.n} className="mb-12 print:mb-8">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif text-3xl font-normal leading-none" style={{ color: h.color }}>
                {h.n}
              </span>
              <div>
                <h2 className="font-serif text-xl font-normal text-dark">{h.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed mt-1">{h.lead}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {h.items.map((item) => (
                <div key={item.label} className="card" style={{ borderLeft: `3px solid ${h.color}` }}>
                  <p className="text-xs font-medium text-dark uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <Link
              to={h.cta.to}
              className="inline-flex items-center gap-1 text-sm mt-4 hover:underline print:hidden"
              style={{ color: h.color }}
            >
              {h.cta.label} →
            </Link>
          </section>
        ))}

        {/* Redactionele noot */}
        <section className="mb-10">
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
            <p className="text-xs font-medium text-dark mb-2">Over deze gids</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Deze startgids is een samenvatting van de kerninformatie op StageStart Curaçao. Voor officiële en actuele eisen rond vergunning, kosten en verblijf blijven instanties als de Immigratiedienst Curaçao, DUO en Justis altijd leidend. Bij conflict tussen deze gids en de officiële bron wint de officiële bron. Zie ook de <Link to="/bronnen" className="text-sky underline">bronnen-pagina</Link> voor verantwoording per claim.
            </p>
          </div>
        </section>

        {/* Updates formulier */}
        <section id="updates" className="mb-10 print:hidden">
          <h2 className="section-label">Updates bij wijzigingen</h2>
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Regels, bedragen en procedures veranderen soms. Laat je e-mailadres achter als je een bericht wilt krijgen wanneer iets relevants in deze gids wijzigt. Alleen bij echte veranderingen. Geen nieuwsbrief, geen reclame, altijd opzegbaar.
            </p>

            {status === 'sent' ? (
              <div className="border-l-4 border-sage pl-4 py-2">
                <p className="text-sm font-medium text-dark">Bedankt, je bent aangemeld.</p>
                <p className="text-xs text-gray-500 mt-1">Je hoort van ons zodra er een relevante wijziging is.</p>
              </div>
            ) : (
              <form onSubmit={onSubmitUpdates} className="flex flex-col gap-3" noValidate>

                {/* Honeypot */}
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

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={update('email')}
                    placeholder="jij@voorbeeld.nl"
                    className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-terra shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Aanmelden...' : 'Aanmelden'}
                  </button>
                </div>

                {status === 'error' && errorMsg && (
                  <p className="text-xs text-terra">{errorMsg}</p>
                )}

                <p className="text-[11px] text-gray-400 leading-relaxed">
                  We gebruiken je e-mailadres alleen om je bij wijzigingen te informeren. Zie ook de <Link to="/privacy" className="underline hover:text-dark">privacyverklaring</Link>.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* CTA naar diepere pagina's */}
        <section className="mb-10 print:hidden">
          <h2 className="section-label">Dieper op de stof ingaan</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link to="/vergunning" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Vergunning</p>
              <p className="text-xs text-gray-500 leading-relaxed">Studie/stage en Verklaring van Rechtswege volgens de officiële bron.</p>
            </Link>
            <Link to="/kosten" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Kosten</p>
              <p className="text-xs text-gray-500 leading-relaxed">Interactieve budgetcalculator met officiële bedragen en richtlijnen.</p>
            </Link>
            <Link to="/wonen" className="card hover:shadow-sm transition-shadow">
              <p className="text-sm font-medium text-dark mb-1">Wonen</p>
              <p className="text-xs text-gray-500 leading-relaxed">Vijf wijken vergeleken op huurprijs, sfeer en stage-bereik.</p>
            </Link>
          </div>
        </section>

        <LastChecked
          date="2026-04-19"
          bron="Eigen redactie samenvatting van bronvaste kernpagina's"
          gevoeligheid="middel"
        />
      </div>
    </>
  )
}
