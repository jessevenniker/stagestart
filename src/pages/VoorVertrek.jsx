import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'
import ClaimLabel from '../components/ClaimLabel'

const STAPPEN = [
  {
    n: '1', bronType: 'officieel', color: '#D4522A', tijd: '8–10 weken voor vertrek',
    title: 'VOG (Verklaring Omtrent het Gedrag) aanvragen',
    desc: 'Je VOG mag niet ouder zijn dan 3 maanden op je aankomstdatum. Vraag hem dus op tijd aan, maar niet té vroeg.',
    detail: [
      'Vul deel 1 van het aanvraagformulier in (datum, plaats en handtekening niet vergeten).',
      'Maak een afspraak bij je gemeente om de aanvraag in te dienen.',
      'Justis neemt de aanvraag in behandeling en stuurt de VOG per post naar je huisadres.',
      'Verwerkingstijd: 4 weken (geen strafblad) tot 8 weken (wel strafblad).',
      'Kosten: €41,35.',
    ],
  },
  {
    n: '2', bronType: 'officieel', color: '#F2B517', tijd: '8 weken voor vertrek',
    title: 'Stageovereenkomst laten tekenen',
    desc: 'Je stageovereenkomst moet getekend zijn door drie partijen: jijzelf, je opleiding én het stagebedrijf.',
    detail: [
      'Zorg dat alle drie de handtekeningen erop staan voordat je de vergunning aanvraagt.',
      'Staat er geen handtekening van je school op? Dan heb je een bewijs van inschrijving nodig.',
      'De stageovereenkomst geldt ook als bewijs van voldoende middelen — je hebt geen apart bankafschrift nodig.',
    ],
  },
  {
    n: '3', bronType: 'officieel', color: '#3EAD6E', tijd: '6–8 weken voor vertrek',
    title: 'Paspoort controleren + kopie maken',
    desc: 'Je paspoort moet minimaal 6 maanden geldig zijn bij indiening van de vergunning.',
    detail: [
      'Maak een duidelijke kopie van de fotopagina.',
      'Staat je handtekening op een andere pagina? Kopieer die ook.',
      'Is je paspoort bijna verlopen? Begin dan direct met verlengen — dat duurt minimaal 5 werkdagen.',
    ],
  },
  {
    n: '4', bronType: 'officieel', color: '#1A7EC5', tijd: '6 weken voor vertrek',
    title: 'Verzekering afsluiten + polisblad bewaren',
    desc: 'Je hebt een reisverzekering nodig die de volledige duur van je verblijf dekt. Het polisblad is een verplicht document bij de vergunningsaanvraag.',
    detail: [
      'Sluit een reisverzekering af voor de hele stageperiode (ongevallen, repatriëring, baggage).',
      'Bewaar het polisblad — dit moet je meesturen met de vergunningsaanvraag.',
      'Check of je Nederlandse zorgverzekering ook Curaçao dekt. Zo niet, sluit een aanvullende zorgverzekering af.',
      'Veelgebruikte aanbieders: OOM, JoHo Special ISIS, Insure to Study.',
      'Houd je basisverzekering in Nederland actief — niet opzeggen.',
    ],
  },
  {
    n: '5', bronType: 'officieel', color: '#E8507A', tijd: '8 weken voor vertrek',
    title: 'Geboorteakte aanvragen bij gemeente',
    desc: 'Volgens Immigratiedienst Curaçao is een geboorteakte verplicht en mag deze niet ouder zijn dan 1 jaar.',
    detail: [
      'Vraag een recente geboorteakte op bij de gemeente waar je geboren bent.',
      'De akte mag bij indiening niet ouder zijn dan 1 jaar.',
      'Origineel moet ter inzage worden getoond bij Immigratiedienst.',
      'Kosten: ongeveer €15 (verschilt per gemeente).',
    ],
  },
  {
    n: '6', bronType: 'officieel', color: '#D4522A', tijd: '6 weken voor vertrek',
    title: 'Legeskosten betalen — XCG 525',
    desc: 'Volgens Immigratiedienst Curaçao kost de aanvraag XCG 525,00. Je moet dit betaald hebben vóór je de aanvraag indient.',
    detail: [
      'Bedrag: XCG 525,00 (Caribische gulden). Maak niet over in euro\'s.',
      'Bank: Maduro & Curiel\'s Bank (MCB)',
      'BIC/SWIFT: MCBKCWCU',
      'Naam ontvanger: Toelatingsorganisatie',
      'Adres: Plasa Jojo Correa 2-4, Willemstad, Curaçao',
      'Omschrijving: volledige naam zoals in paspoort + geboortedatum. Voorbeeld: "Leges Jan Jansen 20 januari 2000".',
      'Kies bij kosten voor OUR (jij betaalt de bankkosten, niet delen).',
      'Maak een screenshot van de betaling. Dit is je betaalbewijs voor indiening.',
    ],
  },
  {
    n: '7', bronType: 'richtlijn', color: '#F2B517', tijd: '5 weken voor vertrek',
    title: 'Documenten scannen en benoemen',
    desc: 'Volgens Immigratiedienst moeten alle documenten als gescande PDF worden ingediend. Identiteitsbewijzen in kleur, beide zijden.',
    detail: [
      'Bestandsnaam: [achternaam] – [voornaam] – [documentnaam]',
      'Officieel vereiste documenten:',
      '• VOG (max 3 maanden oud)',
      '• Geboorteakte (max 1 jaar oud)',
      '• Kopie paspoort (alle paspoorten bij meerdere nationaliteiten)',
      '• Stageovereenkomst (getekend door stagiair, school, stagebedrijf)',
      '• KvK-uittreksel stagebedrijf (max 6 maanden oud)',
      '• Bewijs van inschrijving school',
      '• Polisblad ziektekostenverzekering met dekking Curaçao',
      '• Betaalbewijs legeskosten XCG 525,00',
      'Kwaliteitseisen Immigratiedienst: volledig, recht, scherp, goed leesbaar.',
    ],
  },
  {
    n: '8', bronType: 'officieel', color: '#3EAD6E', tijd: '5 weken voor vertrek',
    title: 'Aanvraag indienen per e-mail',
    desc: 'De aanvraag verloopt via e-mail naar de Toelatingsorganisatie. Stuur alle documenten in één e-mail, niet verspreid.',
    detail: [
      'E-mail naar: intake@immigrationcur.org',
      'Onderwerp: je volledige naam + geboortedatum.',
      'Voeg alle documenten uit stap 7 toe als bijlage (gescande PDF).',
      'Identiteitsbewijzen in kleur, beide zijden.',
      'Documenten moeten volledig, recht en goed leesbaar zijn.',
      'Belangrijk: alles moet in één (1) mail zitten.',
      'Na indiening ontvang je een voorlopig bewijs van aanvraag. Bewaar dit goed.',
    ],
  },
  {
    n: '9', bronType: 'officieel', color: '#1A7EC5', tijd: '2 maanden voor vertrek',
    title: 'OV-kaart stopzetten bij DUO',
    desc: 'Zet je studentenreisproduct tijdig stop. Je krijgt daarvoor een OV-vergoeding terug van DUO.',
    detail: [
      'Stop je studentenreisproduct minimaal 2 maanden voor vertrek via Mijn DUO.',
      'Je ontvangt €110,95 per maand als OV-vergoeding (bedrag 2026).',
      'Over 5 maanden is dat ±€555 — vergeet dit niet aan te vragen.',
      'De uitwonende basisbeurs (HBO/WO) van €324,52/mnd (2026) loopt gewoon door tijdens je stage.',
    ],
  },
  {
    n: '10', bronType: 'officieel', color: '#1A7EC5', tijd: 'Binnen 7 dagen voor vertrek',
    title: 'Digital Immigration Card (DI Card) invullen',
    desc: 'Verplicht voor alle bezoekers van Curaçao. Invullen via dicardcuracao.com. Gratis en duurt 5 minuten.',
    detail: [
      'Vul de DI Card in via dicardcuracao.com — dit is gratis.',
      'Er circuleren derde-partij websites die hiervoor betaling vragen. Betaal nooit.',
      'Je hebt je paspoort en vluchtinformatie nodig.',
      'Print het formulier of sla het op als screenshot op je telefoon.',
      'Staat je accommodatie niet in de keuzelijst? Typ de naam of het adres handmatig in.',
      'Niet alle Airbnbs staan erin — kies dan een nabijgelegen hotel als noodoplossing.',
    ],
  },
  {
    n: '11', bronType: 'richtlijn', color: '#E8507A', tijd: '2–3 weken voor vertrek',
    title: 'Vliegticket boeken & woning bevestigen',
    desc: 'Boek je vlucht op tijd. Prijzen stijgen flink richting vertrekdatum. Zorg dat je woning geregeld is.',
    detail: [
      'Retourvlucht: reken op circa €600–€1.000 afhankelijk van seizoen.',
      'Piekperiodes (duurder): december, januari, schoolvakanties.',
      'Tip: boek op dinsdagen, 1 maand van tevoren bij Corendon/TUI, eerder bij KLM.',
      'Zorg dat je huurcontract getekend is en de borg betaald voordat je vertrekt.',
      'Zet je Nederlandse pinpas "op wereld" via je bank-app of klantenservice — anders wordt hij op Curaçao geblokkeerd.',
      'Meld bij je bank dat je langere tijd op Curaçao zit. Voorkomt fraudeblokkades.',
    ],
  },
  {
    n: '12', bronType: 'richtlijn', color: '#D4522A', tijd: '1 week voor vertrek',
    title: 'Documenten printen + inpakken',
    desc: 'De douane kan op het vliegveld vragen naar je vergunningsdocumenten. Print alles uit en stop het in je handbagage.',
    detail: [
      'Print en neem mee in je handbagage:',
      '• Originele VOG',
      '• Stageovereenkomst',
      '• Betaalbewijs legeskosten',
      '• Ingevuld aanvraagformulier',
      '• Voorlopig bewijs van aanvraag (ontvangen na indiening)',
      '• Polisblad verzekering',
      'Neem ook mee: zonnebrand (SPF50), medicijnen, tandpasta, shampoo — allemaal duurder op Curaçao.',
    ],
  },
  {
    n: '13', bronType: 'officieel', color: '#F2B517', tijd: 'Op het eiland',
    title: 'Beslissing op aanvraag ontvangen',
    desc: 'Volgens Immigratiedienst heeft de Toelatingsorganisatie 4 maanden de tijd om een beslissing te nemen.',
    detail: [
      'Verwerkingstijd: officieel 4 maanden na indiening.',
      'Je mag wettelijk al werken/stagelopen ná indiening van de aanvraag, niet pas na goedkeuring.',
      'Bewaar je originele documenten goed.',
      'Als je wordt gevraagd het document persoonlijk op te halen, maak dan een afspraak via immigrationcur.org.',
    ],
  },
]

const TIJDLIJN_ITEMS = [
  { weken: 52, kleur: '#E2A832', taak: 'Bespreek je plannen met je opleiding / stagecoördinator' },
  { weken: 24, kleur: '#E2A832', taak: 'Begin met zoeken naar een stageplek' },
  { weken: 16, kleur: '#C0522A', taak: 'Controleer geldigheid paspoort (minimaal 6 maanden na terugkeer geldig)' },
  { weken: 12, kleur: '#C0522A', taak: 'Start zoeken naar woonruimte — begin vroeg, goed aanbod raakt op' },
  { weken: 10, kleur: '#C0522A', taak: 'VOG aanvragen via Justis.nl — duurt 4–6 weken' },
  { weken: 8,  kleur: '#C0522A', taak: 'Stagevergunning aanvragen bij Toelatingsorganisatie Curaçao: legeskosten XCG 525 (± €263)' },
  { weken: 8,  kleur: '#E2A832', taak: 'Verzekering afsluiten (reis + zorg + WA)' },
  { weken: 8,  kleur: '#3B8FB5', taak: 'DUO: studentenreisproduct stopzetten — levert €115/mnd op' },
  { weken: 6,  kleur: '#C0522A', taak: 'Stagecontract ondertekend en goedgekeurd door school' },
  { weken: 4,  kleur: '#E2A832', taak: 'Vliegticket boeken (retour — verplicht bij aankomst)' },
  { weken: 4,  kleur: '#3B8FB5', taak: 'Wooncontract tekenen en borg betalen' },
  { weken: 2,  kleur: '#5A9E7A', taak: 'Inpakken: zonnebrand, medicijnen, adapter, documenten' },
  { weken: 1,  kleur: '#5A9E7A', taak: 'DI Card invullen via dicardcuracao.com — gratis, duurt 5 minuten' },
  { weken: 0,  kleur: '#5A9E7A', taak: 'Vertrek! Neem alle originele documenten mee in handbagage' },
]

const INPAKKEN = [
  { cat: 'Documenten (in handbagage)', items: ['Paspoort', 'Originele VOG', 'Stageovereenkomst (getekend)', 'Voorlopig bewijs van aanvraag vergunning', 'Betaalbewijs legeskosten', 'Polisblad verzekering', 'Aanvraagformulier', 'Vliegtickets', 'Kopieën van alles'] },
  { cat: 'Verzorging (neem ruim mee)', items: ['Zonnebrand SPF50+', 'Aftersun', 'Tandpasta', 'Shampoo & conditioner', 'Medicijnen (ook vrij verkrijgbare)', 'Anticonceptie indien van toepassing'] },
  { cat: 'Kleding & strand', items: ['Lichte katoenen kleding', 'Minimaal 3 zwembroeken/bikini\'s', 'Flip flops', 'Sportschoenen', 'Één nette outfit (voor kantoor)'] },
  { cat: 'Handig mee', items: ['Wereldstekker / adapter (Curaçao = type A/B, 110V én 220V)', 'Powerbank', 'Herbruikbare waterfles', 'Koffer slot', 'Stukje kaas in vacuüm (mag echt)', 'Favoriete Nederlandse snacks'] },
]

export default function VoorVertrek() {
  const [checked, setChecked] = useState({})
  const [expanded, setExpanded] = useState({})
  const [vertrekDatum, setVertrekDatum] = useState('')
  const [tijdlijn, setTijdlijn] = useState(false)
  function toggle(key) { setChecked(p => ({ ...p, [key]: !p[key] })) }
  function toggleExpand(key) { setExpanded(p => ({ ...p, [key]: !p[key] })) }
  const total = STAPPEN.length
  const done = Object.values(checked).filter(Boolean).length

  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Voor vertrek"
        title="Wat je moet regelen — en in welke volgorde."
        subtitle="Volgens Immigratiedienst Curaçao heeft de Toelatingsorganisatie officieel 4 maanden de tijd om een beslissing te nemen. Begin minimaal 8 weken voor vertrek met de aanvraag, niet 3."
        accentColor="#D4522A"
        image="/img/paspoort-en-reisdocumenten.jpg"
        imageAlt="Paspoort en reisdocumenten klaargelegd voor vertrek naar Curaçao"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Progress */}
        <div className="card mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-dark">{done} van {total} stappen afgerond</p>
            <p className="text-xs text-gray-400">Klik op het rondje om af te vinken · klik op de tekst voor details</p>
          </div>
          <div className="flex-1 max-w-[200px]">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-terra transition-all duration-300"
                   style={{ width: `${(done/total)*100}%` }} />
            </div>
          </div>
          <span className="text-sm font-medium text-terra">{Math.round((done/total)*100)}%</span>
        </div>

        {/* Tijdlijn generator */}
        <section className="mb-14">
          <p className="section-label">Wanneer moet je wat doen?</p>
          <div className="card mb-4">
            <div className="flex flex-col sm:flex-row gap-3 items-end">
              <div className="flex-1">
                <label className="text-xs text-gray-500 mb-1 block">Wanneer vertrek je?</label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={vertrekDatum}
                  onChange={e => setVertrekDatum(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-terra/30 focus:border-terra"
                />
              </div>
              <button
                onClick={() => setTijdlijn(true)}
                disabled={!vertrekDatum}
                className="btn-terra disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Genereer mijn tijdlijn
              </button>
            </div>
          </div>

          {tijdlijn && vertrekDatum && (
            <div className="card">
              <div className="flex flex-col gap-3">
                {TIJDLIJN_ITEMS.map((item, i) => {
                  const deadline = new Date(vertrekDatum)
                  deadline.setDate(deadline.getDate() - (item.weken * 7))
                  const isPast = deadline < new Date()
                  const formatted = deadline.toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' })
                  return (
                    <div key={i} className="flex gap-3 items-start py-2 border-b border-gray-100 last:border-0">
                      <div className="w-2.5 h-2.5 rounded-full mt-1 shrink-0" style={{ background: item.kleur }} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-medium text-dark">{formatted}</span>
                          {isPast && <span className="text-[10px] text-terra italic">Let op — deze datum is al gepasseerd</span>}
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.taak}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="text-[11px] text-gray-400 mt-4 leading-relaxed">
                Tijdlijn gegenereerd op basis van jouw vertrekdatum. Sla hem op of maak een screenshot.
              </p>
            </div>
          )}
        </section>

        {/* Stappenplan */}
        <section className="mb-14">
          <p className="section-label">Stappenplan vergunning & vertrek</p>
          <ClaimLabel kind="officieel" bron="Immigratiedienst Curaçao" link="https://immigrationcur.org/dep/studie-stage/" />
          <div className="flex flex-col gap-3">
            {STAPPEN.map((s) => {
              const key = `step-${s.n}`
              const isDone = checked[key]
              const isOpen = expanded[key]
              return (
                <div key={key} className={`card transition-all ${isDone ? 'opacity-60' : ''}`}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <button
                        onClick={() => toggle(key)}
                        className="w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                        style={{ borderColor: s.color, background: isDone ? s.color : 'transparent' }}
                        aria-label={isDone ? 'Stap voltooien ongedaan maken' : 'Stap afvinken'}
                      >
                        {isDone
                          ? <span className="text-white text-xs">✓</span>
                          : <span className="text-xs font-medium" style={{ color: s.color }}>{s.n}</span>}
                      </button>
                    </div>
                    <div className="flex-1">
                      <button
                        onClick={() => toggleExpand(key)}
                        className="w-full text-left"
                      >
                        <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                          <p className={`font-medium text-sm ${isDone ? 'line-through text-gray-400' : 'text-dark'}`}>
                            {s.title}
                          </p>
                          <div className="flex items-center gap-2 shrink-0">
                            {s.bronType === 'officieel' && (
                              <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded border" style={{ color: '#1A7EC5', borderColor: '#1A7EC5' }}>
                                Officieel
                              </span>
                            )}
                            {s.bronType === 'richtlijn' && (
                              <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded border" style={{ color: '#F2B517', borderColor: '#F2B517' }}>
                                Richtlijn
                              </span>
                            )}
                            <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded">{s.tijd}</span>
                            <span className={`text-gray-400 text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                      </button>

                      {isOpen && s.detail && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <ul className="flex flex-col gap-1.5">
                            {s.detail.map((d, i) => (
                              <li key={i} className={`text-xs leading-relaxed ${d.startsWith('•') ? 'pl-3 text-gray-500' : 'text-gray-600'}`}>
                                {d.startsWith('•') ? d : <span>{d}</span>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Belangrijke info */}
        <section className="mb-14">
          <p className="section-label">Belangrijk om te weten</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
              <p className="text-xs font-medium text-dark mb-2">Geboorteakte vereist (max 1 jaar oud)</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Volgens Immigratiedienst Curaçao is een geboorteakte verplicht onderdeel van de aanvraag.
                De akte mag bij indiening niet ouder zijn dan 1 jaar.
              </p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
              <p className="text-xs font-medium text-dark mb-2">Wachten in Curaçao mogelijk</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Volgens Immigratiedienst kunnen Nederlanders en Amerikanen de officiële beslistermijn van 4 maanden in Curaçao afwachten.
              </p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#F2B517' }}>
              <p className="text-xs font-medium text-dark mb-2">Legeskosten: XCG 525</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Betaal in Caribische guldens via Maduro & Curiel's Bank. Kies bij de overboeking voor OUR zodat jij de bankkosten draagt.
              </p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
              <p className="text-xs font-medium text-dark mb-2">Indiening per e-mail</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Stuur alle documenten in één e-mail naar intake@immigrationcur.org. Onderwerp: je volledige naam + geboortedatum. Documenten als gescande PDF.
              </p>
            </div>
          </div>
        </section>

        {/* Kostenovererzicht vergunning */}
        <section className="mb-14">
          <p className="section-label">Kosten vergunningsaanvraag</p>
          <ClaimLabel kind="officieel" bron="Immigratiedienst Curaçao + Justis" />
          <div className="card">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">VOG aanvraag</span>
                <span className="text-sm font-medium text-dark">€ 41,35</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Legeskosten overheid</span>
                <span className="text-sm font-medium text-dark">XCG 525 (± € 263)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Bankkosten overboeking (OUR)</span>
                <span className="text-sm font-medium text-dark">± € 10–20</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium text-dark">Totaal vergunning</span>
                <span className="text-sm font-medium text-terra">± € 320</span>
              </div>
            </div>
          </div>
        </section>

        {/* Inpaklijst */}
        <section className="mb-14">
          <p className="section-label">Inpaklijst</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {INPAKKEN.map((cat) => (
              <div key={cat.cat} className="card">
                <p className="text-xs font-medium text-dark mb-3">{cat.cat}</p>
                <ul className="flex flex-col gap-1.5">
                  {cat.items.map(item => (
                    <li key={item} className="flex gap-2 text-xs text-gray-500">
                      <span className="text-terra shrink-0">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Download de volledige checklist als PDF</p>
            <p className="text-sm text-gray-600">Alle stappen, in de juiste volgorde, in één overzicht.</p>
          </div>
          <Link to="/startgids" className="btn-terra shrink-0">Download gratis →</Link>
        </div>

        <LastChecked
          date="2026-04-16"
          bron="Immigratiedienst Curaçao"
          bronUrl="https://immigrationcur.org/dep/studie-stage/"
          gevoeligheid="hoog"
        />
      </div>
    </>
  )
}
