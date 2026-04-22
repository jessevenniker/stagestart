import { useState } from 'react'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import ClaimLabel from '../components/ClaimLabel'
import LastChecked from '../components/LastChecked'
import RelatedPages from '../components/RelatedPages'
import ReadingProgress from '../components/ReadingProgress'
import { articleSchema, faqSchema } from '../utils/schema'

const RELATED = [
  { to: '/auto', label: 'Auto', desc: 'Wijk en stage-locatie bepalen of je een auto nodig hebt.' },
  { to: '/kosten', label: 'Kosten', desc: 'Huur als grootste maandlast in je budget.' },
  { to: '/eerste-week', label: 'Eerste week', desc: 'Wat je in je woning moet checken bij aankomst.' },
]

/**
 * Vier woonvormen die stagiairs op Curaçao daadwerkelijk tegenkomen.
 * Prijzen gebaseerd op de prijsranges uit WIJKEN plus vergelijkbare
 * marktinformatie voor studio/appartement (eigen redactie + ervaringen).
 */
const WOONVORMEN = [
  {
    naam: 'Studentenhuis',
    prijs: '€300 tot €500 p.p. per maand',
    typisch: 'Kamer in een gedeeld huis met 10 tot 30 stagiairs, gedeelde keuken en wifi, vaak een gemeenschappelijke auto of pool-fiets.',
    voor: 'Eerste keer buitenlandstage, sociaal voorkeur, beperkt budget.',
    accent: '#D4522A',
  },
  {
    naam: 'Kamer in gedeeld huis',
    prijs: '€350 tot €450 per maand',
    typisch: 'Kamer met 2 tot 5 huisgenoten, vaak bij een lokale verhuurder. Minder hectiek en meer privacy dan een studentenhuis.',
    voor: 'Liever rustiger, beetje meer eigen ruimte, nog steeds betaalbaar.',
    accent: '#F2B517',
  },
  {
    naam: 'Eigen appartement',
    prijs: '€700 tot €1.100 per maand',
    typisch: 'Studio of eenkamerappartement voor jezelf. Vooral in Pietermaai en Punda, goedkoper in Salinja of Otrobanda.',
    voor: 'Komt met partner, werkt veel thuis, of budget laat het toe.',
    accent: '#3EAD6E',
  },
  {
    naam: 'Short-stay eerste weken',
    prijs: '€30 tot €60 per nacht',
    typisch: 'Airbnb of guesthouse waar je de eerste 1 tot 2 weken verblijft terwijl je ter plaatse definitief zoekt.',
    voor: 'Wilt eerst kijken voor je commit, flexibele start, zoekt een kamer die je fysiek wilt bezichtigen.',
    accent: '#1A7EC5',
  },
]

const SCHEMA_ARTICLE = articleSchema({
  headline: 'Stagehuis op Curaçao: wijken, huisvesting en huurprijzen',
  description: 'Studentenhuis, appartement of kamer in Willemstad. Vergelijk huisvesting en vijf wijken voordat je commit.',
  path: '/wonen',
  dateModified: '2026-04-20',
})

/**
 * FAQPage schema voor de long-tail housing-queries die op /wonen landen
 * (Search Console: stagehuis curacao, kamer huren willemstad stage,
 * huisvesting stage curacao, studentenhuis curacao stage, etc.).
 */
const SCHEMA_FAQ = faqSchema([
  {
    question: 'Wat kost een stagehuis op Curaçao?',
    answer:
      'Prijzen variëren per woonvorm en wijk. Een kamer in een gedeeld studentenhuis kost €300 tot €500 per persoon per maand. Een kamer in een kleiner gedeeld huis (2 tot 5 huisgenoten) ligt tussen €350 en €450. Een eigen studio of eenkamerappartement kost €700 tot €1.100. Short-stay Airbnb ligt rond €30 tot €60 per nacht.',
  },
  {
    question: 'Kan ik een kamer huren in Willemstad als stagiair?',
    answer:
      'Ja. Willemstad bestaat uit vier wijken: Punda, Otrobanda, Pietermaai en Scharloo. Stagiairs wonen vooral in Pietermaai (trendy, veel horeca) of Otrobanda (goedkoper, authentieker). Punda is vooral commercieel, Scharloo heeft beperkt aanbod. Buiten Willemstad zijn Jan Thiel (strand) en Piscadera (universiteit) de populaire opties.',
  },
  {
    question: 'Studentenhuis of appartement: wat past beter bij een stagiair?',
    answer:
      'Studentenhuis is goedkoper (€300 tot €500 per persoon), socialer en maakt het delen van een auto mogelijk. Minder privacy. Een eigen appartement (€700 tot €1.100) is rustiger en geschikt als je met partner komt of veel thuiswerkt, maar vergt ongeveer het dubbele budget. Voor de meeste stagiairs die voor het eerst buitenland-stage lopen is een studentenhuis praktischer.',
  },
  {
    question: 'Hoe lang van tevoren moet ik mijn huisvesting regelen?',
    answer:
      'Minimaal 6 tot 8 weken voor aankomst. Piekperiodes (februari tot mei en augustus tot december) zijn druk. Begin oriënteren zodra je stageplek bekend is. Voor studentenhuizen via stage-bureaus is vroeg boeken verstandig; voor een eigen appartement werkt het soms beter om de eerste weken short-stay te boeken en ter plaatse verder te zoeken.',
  },
  {
    question: 'Is huisvesting inclusief stroom en water?',
    answer:
      'Vaak niet volledig. Wat wel of niet inbegrepen is verschilt per verhuurder. Check expliciet: stroom (bij Pagatinu-huizen werkt stroom prepaid, je betaalt zelf), water, gas, internet. Vraag dit schriftelijk voordat je tekent. OB-belasting van 6 tot 7 procent komt vaak bovenop de prijs en wordt niet altijd duidelijk gecommuniceerd.',
  },
  {
    question: 'Waar vind ik betrouwbare studentenhuizen op Curaçao?',
    answer:
      'Via stage-bureaus zoals Bo Curaçao, Een Stage op Curaçao en Wereldstap. Deze zijn zeker niet frauduleus. Facebook-groepen ("Stagiairs op Curaçao", "Huisvesting Curaçao") hebben meer aanbod maar ook oplichters. Via je stagebedrijf of school is vaak de meest vertrouwde route, omdat zij terugkerende contacten hebben met verhuurders.',
  },
  {
    question: 'Kan ik een kamer huren zonder eerst te bezichtigen?',
    answer:
      'Het kan, maar is risicovol. Beter alternatief: boek de eerste 1 tot 2 weken short-stay (Airbnb of guesthouse) en bezichtig vanaf het eiland. Lukt dat niet, huur dan alleen via bekende stage-bureaus of via contact van je school of stagebedrijf. Boek nooit via onbekende Facebook-accounts die vooruitbetaling willen zonder bezichtiging.',
  },
  {
    question: 'Zijn er wijken op Curaçao die ik als stagiair beter kan vermijden?',
    answer:
      'De meeste stagiairs wonen in Jan Thiel, Pietermaai, Piscadera, Mahaai, Salinja/Otrobanda of Bapor Kibra. Wijken zoals Souax (vlakbij het vliegveld), Koraalspecht (ten noordoosten van Willemstad) en industriële gebieden (Parera, Suffisant-Zuid) worden zelden gekozen, vooral vanwege afstand tot stage-locaties en beperkte voorzieningen. Dit is geen veiligheidsoordeel, maar een praktische observatie. Vraag bij twijfel aan stagiairs die er al zijn geweest of aan je stagebedrijf.',
  },
])

const SCHEMA = [SCHEMA_ARTICLE, SCHEMA_FAQ]

const WIJKEN = [
  {
    naam: 'Jan Thiel',
    color: '#D4522A',
    huur: '€ 375 – 475',
    auto: 'Noodzakelijk',
    sfeer: 'Strand, resort, internationaal',
    afstand: '20 min van Willemstad',
    img: '/img/wijk-jan-thiel.jpg',
    pros: ['Mooi strand op loopafstand', 'Veel medestudenten', 'Veilig en rustig', 'Goede studentenhuizen beschikbaar'],
    cons: ['Zonder auto ben je nergens', 'Weinig lokaal karakter', 'Prijziger eten in de buurt', 'Ver van het stadscentrum'],
    voor: 'Ideaal als je veel buiten wilt zijn, de strandsfeer wilt en een auto hebt of deelt.',
  },
  {
    naam: 'Piscadera',
    color: '#F2B517',
    huur: '€ 350 – 425',
    auto: 'Sterk aanbevolen',
    sfeer: 'Rustig, universiteitswijk',
    afstand: '10 min van Willemstad',
    img: '/img/wijk-piscadera.jpg',
    pros: ['Dichtbij UoC en ziekenhuis', 'Rustige omgeving', 'Relatief betaalbaar', 'Goed voor studenten zorg/onderwijs'],
    cons: ['Weinig te doen zonder auto', 'Geen uitgesproken sfeer', 'Beperkt winkelaanbod'],
    voor: 'Goed voor studenten met stage in de zorg, onderwijs of bij de universiteit.',
  },
  {
    naam: 'Mahaai',
    color: '#8B5E3C',
    huur: '€ 325 – 425',
    auto: 'Handig maar niet noodzakelijk',
    sfeer: 'Residentieel, rustig, veel stagehuizen',
    afstand: '10 min van Willemstad',
    img: '/img/verhalen/dominique-stagehuis-mahaai.jpg',
    pros: ['Veel stagehuizen in deze buurt', 'Centrale supermarkt (Centrum Supermarkt Mahaai) dichtbij', 'Rustige woonwijk, overzichtelijk', 'Centraal tussen Willemstad en de stranden'],
    cons: ['Geen uitgesproken buurtleven of horeca', 'Minder lokaal karakter dan Pietermaai', 'Voor strand alsnog auto of rit nodig'],
    voor: 'Stagiairs die centraal en rustig willen wonen, in een studentenhuis met medestagiairs, zonder direct in het uitgaansgebied te zitten.',
  },
  {
    naam: 'Pietermaai',
    color: '#3EAD6E',
    huur: '€ 425 – 550',
    auto: 'Optioneel',
    sfeer: 'Trendy, lokale horeca, kleurrijk',
    afstand: 'Loopafstand Willemstad centrum',
    img: '/img/wijk-pietermaai.jpg',
    pros: ['Levendig buurtleven', 'Goede restaurants & bars', 'Loopafstand naar centrum', 'Unieke Curaçaose sfeer'],
    cons: ['Duurder dan andere wijken', 'Minder studentenhuizen beschikbaar', 'Iets lawaaiiger s\'avonds'],
    voor: 'Voor wie het lokale leven wil meemaken en niet per se naar het strand wil lopen.',
  },
  {
    naam: 'Salinja / Otrobanda',
    color: '#1A7EC5',
    huur: '€ 300 – 400',
    auto: 'Handig maar niet noodzakelijk',
    sfeer: 'Lokaal, centraal, divers',
    afstand: 'Centrum Willemstad',
    img: '/img/Otrobanda.jpg',
    pros: ['Betaalbaar', 'Centraal gelegen', 'Lokale supermarkten dichtbij', 'Authentiek Curaçaos'],
    cons: ['Minder populair bij studenten', 'Minder groen', 'Varieert sterk per straat'],
    voor: 'Voor studenten die centraal willen wonen zonder te veel te betalen.',
  },
  {
    naam: 'Bapor Kibra / Caracasbaai',
    color: '#E8507A',
    huur: '€ 350 – 425',
    auto: 'Noodzakelijk',
    sfeer: 'Rustig, zee, wat afgelegen',
    afstand: '25 min van Willemstad',
    img: '/img/wijk-bapor-kibra.jpg',
    pros: ['Mooie omgeving', 'Rustig en ruim', 'Relatief goedkoop'],
    cons: ['Echt geïsoleerd zonder auto', 'Weinig voorzieningen', 'Ver van alles'],
    voor: 'Alleen als je een eigen auto hebt én houdt van rust boven nabijheid.',
  },
]

export default function Wonen() {
  const [active, setActive] = useState(null)
  const wijk = active !== null ? WIJKEN[active] : null

  return (
    <>
      <ReadingProgress />
      <SEO schema={SCHEMA} />
      <PageHero
        eyebrow="Wonen op Curaçao"
        title="Welke wijk past bij jou?"
        subtitle="Huisvesting tijdens je stage op Curaçao bepaalt meer dan alleen waar je slaapt. Studentenhuis, kamer of appartement: hier vergelijk je woonvormen, huurprijzen en de zes populairste wijken voordat je iets boekt."
        accentColor="#3EAD6E"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Woonvormen introductie: vangt long-tail zoektermen als
            'stagehuis curacao', 'appartement curacao stage', 'studentenhuis',
            'huisvesting stage'. Geeft tegelijk kader vóór de wijk-selector. */}
        <section className="mb-10">
          <h2 className="section-label">Stagehuis op Curaçao: welke vormen bestaan er?</h2>
          <ClaimLabel kind="richtlijn" />
          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
            Voordat je kiest in welke wijk je gaat wonen, is de vraag welke vorm van huisvesting bij je past. De meeste stagiairs op Curaçao kiezen uit vier opties. Prijs, privacy en sociale dynamiek verschillen sterk.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {WOONVORMEN.map((w) => (
              <div
                key={w.naam}
                className="card"
                style={{ borderLeft: `3px solid ${w.accent}` }}
              >
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <p className="text-sm font-medium text-dark">{w.naam}</p>
                  <p className="text-xs font-medium shrink-0" style={{ color: w.accent }}>
                    {w.prijs}
                  </p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">{w.typisch}</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  <span className="font-medium text-gray-500">Geschikt voor:</span> {w.voor}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mt-4 max-w-2xl">
            Prijzen zijn indicaties per maand. Het exacte bedrag hangt af van de wijk en of stroom, water en internet zijn inbegrepen. Zie de wijkvergelijking hieronder voor het verschil tussen Jan Thiel, Piscadera, Mahaai, Pietermaai, Salinja en Bapor Kibra.
          </p>
        </section>

        {/* Wijk selector */}
        <section id="wijk-selector" className="mb-10 scroll-mt-20">
          <h2 className="section-label">Kies een wijk</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {WIJKEN.map((w, i) => (
              <button
                key={w.naam}
                onClick={() => setActive(active === i ? null : i)}
                className={`text-left card transition-all overflow-hidden p-0 ${active === i ? 'ring-2' : 'hover:shadow-md'}`}
                style={active === i ? { ringColor: w.color, outline: `2px solid ${w.color}` } : {}}
              >
                <div className="relative h-[100px] overflow-hidden">
                  <img src={w.img} alt={w.naam} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: w.color }} />
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm text-dark mb-1">{w.naam}</p>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-gray-400">Huur: <span className="text-gray-600">{w.huur}</span></p>
                    <p className="text-xs text-gray-400">Auto: <span className="text-gray-600">{w.auto}</span></p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Wijk detail */}
        {wijk && (
          <section className="mb-14">
            <div className="card">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full" style={{ background: wijk.color }} />
                <h2 className="font-serif text-2xl font-normal text-dark">{wijk.naam}</h2>
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">{wijk.afstand}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <p className="text-xs font-medium text-dark mb-3 uppercase tracking-wider">Voordelen</p>
                  <ul className="flex flex-col gap-2">
                    {wijk.pros.map(p => (
                      <li key={p} className="flex gap-2 text-sm text-gray-600">
                        <span style={{ color: wijk.color }}>+</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-dark mb-3 uppercase tracking-wider">Nadelen</p>
                  <ul className="flex flex-col gap-2">
                    {wijk.cons.map(c => (
                      <li key={c} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-gray-300">−</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs font-medium text-dark mb-1">Geschikt voor</p>
                <p className="text-sm text-gray-600">{wijk.voor}</p>
              </div>
            </div>
          </section>
        )}

        {/* Vergelijkingstabel */}
        <section className="mb-14">
          <h2 className="section-label">Overzichtstabel</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Wijk</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Huur / mnd</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Auto</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Sfeer</th>
                </tr>
              </thead>
              <tbody>
                {WIJKEN.map((w, i) => (
                  <tr key={w.naam} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full shrink-0" style={{ background: w.color }} />
                        <span className="font-medium">{w.naam}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{w.huur}</td>
                    <td className="px-4 py-3 text-gray-600">{w.auto}</td>
                    <td className="px-4 py-3 text-gray-600">{w.sfeer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Welke wijken wonen stagiairs zelden? — praktische reality-check,
            vangt long-tail "goede en slechte wijken curacao" via FAQ + copy. */}
        <section className="mb-10">
          <h2 className="section-label">Welke wijken wonen stagiairs zelden?</h2>
          <ClaimLabel kind="ervaring" />
          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
            Niet elke wijk is even geschikt als uitvalsbasis voor een stage. Sommige buurten worden door stagiairs gewoon zelden gekozen — om praktische redenen (afstand tot werk, beperkte voorzieningen) en in enkele gevallen door reputatie. Dit betekent niet dat deze wijken onveilig zijn om doorheen te rijden of te bezoeken; alleen dat ze als woonplek voor een half jaar meestal niet logisch zijn.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="card border-l-4 border-gray-200">
              <p className="text-sm font-medium text-dark mb-1">Souax</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Vlakbij het vliegveld Hato. Geen studentenhuizen, weinig horeca en supermarkten op loopafstand. Vooral doorrij-gebied.
              </p>
            </div>
            <div className="card border-l-4 border-gray-200">
              <p className="text-sm font-medium text-dark mb-1">Koraalspecht</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Rustige buurt ten noordoosten van Willemstad, bekend om de gevangenis die er staat. Stagiairs wonen hier zelden — niet om veiligheid maar om praktische redenen (afstand, voorzieningen, reputatie in Facebook-groepen).
              </p>
            </div>
            <div className="card border-l-4 border-gray-200">
              <p className="text-sm font-medium text-dark mb-1">Industrieterreinen</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Parera en Suffisant-Zuid: geen residentieel karakter, veel magazijnen en bedrijfspanden. Airbnb- en kamerverhuur vrijwel nihil.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mt-4 max-w-2xl italic">
            Dit is geen complete lijst en geen veiligheidsoordeel. Vraag bij twijfel altijd aan stagiairs die er al zijn geweest, of aan je stagebedrijf of school.
          </p>
        </section>

        {/* Welke wijk past bij jouw situatie */}
        <section className="mb-10">
          <h2 className="section-label">Welke wijk past bij jouw situatie?</h2>
          <ClaimLabel kind="richtlijn" />
          <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-2xl">
            De pros en cons hierboven zijn neutraal. Hieronder concrete adviezen op basis van jouw situatie. Eén kant op gaat altijd ten koste van een ander, kies wat het zwaarst weegt.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
              <p className="text-xs font-medium text-dark mb-1">Sociaal leven op loopafstand</p>
              <p className="text-sm font-medium text-sage mb-2">→ Pietermaai</p>
              <p className="text-xs text-gray-500 leading-relaxed">Kleurrijke gevels, bars en restaurants letterlijk om de hoek. Auto optioneel, prijs hoger.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
              <p className="text-xs font-medium text-dark mb-1">Geen auto, wel actief</p>
              <p className="text-sm font-medium text-sky mb-2">→ Pietermaai, Salinja/Otrobanda of Mahaai</p>
              <p className="text-xs text-gray-500 leading-relaxed">Alle drie centraal en bereikbaar zonder auto. Salinja goedkoopst, Pietermaai gezelligst, Mahaai rustigst.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
              <p className="text-xs font-medium text-dark mb-1">Veel sport en strand</p>
              <p className="text-sm font-medium text-terra mb-2">→ Jan Thiel</p>
              <p className="text-xs text-gray-500 leading-relaxed">Strand op loopafstand, veel medestudenten, beachclubs. Auto wel verplicht.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#F2B517' }}>
              <p className="text-xs font-medium text-dark mb-1">Stage bij UoC of ziekenhuis</p>
              <p className="text-sm font-medium text-gold mb-2">→ Piscadera</p>
              <p className="text-xs text-gray-500 leading-relaxed">Loop- of korte rijafstand naar campus en CMC. Rustige universiteitswijk.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#E8507A' }}>
              <p className="text-xs font-medium text-dark mb-1">Rust en ruimte</p>
              <p className="text-sm font-medium text-blush mb-2">→ Bapor Kibra / Caracasbaai</p>
              <p className="text-xs text-gray-500 leading-relaxed">Mooie omgeving, weinig drukte. Auto absoluut verplicht, anders zit je vast.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
              <p className="text-xs font-medium text-dark mb-1">Zo goedkoop mogelijk</p>
              <p className="text-sm font-medium text-sky mb-2">→ Salinja / Otrobanda</p>
              <p className="text-xs text-gray-500 leading-relaxed">Laagste huur (€300-400). Let op vervoersimpact als stage of strand verder weg ligt.</p>
            </div>
          </div>
        </section>

        {/* Gerichte long-tail sectie: 'kamer huren willemstad stage' en
            'huisvesting stage willemstad' landen op positie 50+ in GSC maar
            de pagina adresseert Willemstad niet expliciet. Hier wel. */}
        <section className="mb-10">
          <h2 className="section-label">Kamer huren in Willemstad als stagiair</h2>
          <ClaimLabel kind="ervaring" />
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Willemstad is niet één wijk maar een gebied dat bestaat uit vier historische districten: Punda, Otrobanda, Pietermaai en Scharloo. Niet elk district heeft veel aanbod voor stagiairs. Hieronder welk deel voor welke stagiair typisch het best werkt.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="card" style={{ borderLeft: '3px solid #3EAD6E' }}>
                <p className="text-sm font-medium text-dark mb-1">Pietermaai</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Zuidelijk van Punda, kleurrijke koloniale gevels en veel horeca. Populairste keuze bij stagiairs die op loopafstand willen wonen van het centrum. Huur €425 tot €550. Zie <Link to="#" onClick={(e) => { e.preventDefault(); setActive(2) }} className="text-sage underline">de wijk-kaart hierboven</Link>.
                </p>
              </div>
              <div className="card" style={{ borderLeft: '3px solid #1A7EC5' }}>
                <p className="text-sm font-medium text-dark mb-1">Otrobanda</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Aan de westkant van de Annabaai, via de Koningin Emma-brug verbonden met Punda. Authentieker en goedkoper (€300 tot €400), maar minder levendig dan Pietermaai. Vaak onderdeel van de wijk Salinja/Otrobanda op deze pagina.
                </p>
              </div>
              <div className="card" style={{ borderLeft: '3px solid #F2B517' }}>
                <p className="text-sm font-medium text-dark mb-1">Punda</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Historisch centrum, UNESCO-werelderfgoed, vooral commercieel (winkels, kantoren, toeristen). Weinig studentenhuizen. Wel enkele appartementen boven winkels, maar meestal duurder.
                </p>
              </div>
              <div className="card" style={{ borderLeft: '3px solid #E8507A' }}>
                <p className="text-sm font-medium text-dark mb-1">Scharloo</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Noordelijk van Punda, historisch residentieel met oude handelshuizen. Beperkt aanbod voor stagiairs. Rustig. Geen beachclubs of uitgaansleven, wel dichtbij centrum.
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mt-4">
              Let op: Piscadera, Jan Thiel en Mahaai vallen niet onder Willemstad. Dat zijn aparte wijken op 10 tot 20 minuten rijden. Zie de <a href="#wijk-selector" className="text-sage underline">wijkvergelijking</a> voor die keuzes.
            </p>
          </div>
        </section>

        {/* Woonfraude */}
        <section className="mb-10">
          <h2 className="section-label">Pas op voor woonfraude</h2>
          <ClaimLabel kind="ervaring" />
          <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Veel studenten zoeken een kamer vanuit Nederland via Facebook-groepen en WhatsApp. Dit is precies de context waar oplichters actief zijn.
            </p>
            <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Signalen dat iets niet klopt</p>
            <ul className="flex flex-col gap-1.5 mb-4">
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-terra shrink-0">·</span>Je kunt de woning niet bekijken zonder eerst borg te betalen</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-terra shrink-0">·</span>De verhuurder vraagt betaling via Western Union, Moneygram of cash vooraf</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-terra shrink-0">·</span>Reacties onder een Facebook-advertentie zijn uitgeschakeld</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-terra shrink-0">·</span>De huurprijs is opvallend laag vergeleken met vergelijkbare woningen</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-terra shrink-0">·</span>De verhuurder heeft haast en zegt dat er "meerdere gegadigden zijn"</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-terra shrink-0">·</span>De woning is bekeken maar de sleutel "volgt zodra de woning vrijkomt"</li>
            </ul>
            <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Wat wel werkt</p>
            <ul className="flex flex-col gap-1.5">
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-sage shrink-0">✓</span>Boek via bekende studentenhuizen met aantoonbare Google- of Trustpilot-reviews</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-sage shrink-0">✓</span>Vraag via je stagebedrijf of school naar aanbevelingen</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-sage shrink-0">✓</span>Betaal borg pas nadat je een getekend huurcontract hebt én de sleutel in handen</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-sage shrink-0">✓</span>Doe een reverse image search op de woningfoto's (Google Lens)</li>
            </ul>
          </div>
        </section>

        {/* Waar zoeken */}
        <section className="mb-10">
          <h2 className="section-label">Waar zoek je een woning?</h2>
          <ClaimLabel kind="ervaring" />
          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
            Er bestaat geen centraal platform zoals Funda. Stagiairs vinden woningen via een mix van kanalen, kies er liever twee serieuze dan tien oppervlakkige.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="card">
              <p className="text-sm font-medium text-dark mb-1">Studentenhuizen via stage-bureaus</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Bureaus als Bo Curaçao, Een Stage op Curaçao, Wereldstap bieden huisvesting aan. Je bent geen klant van hun stage-bemiddeling nodig om een kamer te huren, vraag dat expliciet. Voordeel: zeker niet frauduleus. Nadeel: je kunt van bureau naar bureau shoppen.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-1">Facebook-groepen</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                "Stagiairs op Curaçao", "Huisvesting Curaçao" en vergelijkbare groepen. Veel aanbod, maar ook veel oplichting. Zie de fraude-waarschuwing hierboven.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-1">Via je stagebedrijf of school</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Sommige stagebedrijven hebben een vast contact met een verhuurder. School heeft soms een lijst met woningen waar eerdere stagiairs positief over waren. Vraag ernaar.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-1">Eerst naar een short-stay, dan zoeken vanaf het eiland</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Boek je eerste 1-2 weken via Airbnb of Booking. Kijk ter plaatse rond, bezichtig fysiek, onderhandel. Dit werkt het beste, maar vraagt meer flexibiliteit.
              </p>
            </div>
          </div>
        </section>

        {/* Huurcontract checklist */}
        <section className="mb-10">
          <h2 className="section-label">Wat controleer je in het huurcontract?</h2>
          <ClaimLabel kind="richtlijn" />
          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
            Op Curaçao zijn huurcontracten minder standaard dan in Nederland. Lees het contract woord-voor-woord door voor je tekent en vraag alles wat onduidelijk is expliciet na.
          </p>
          <div className="card">
            <p className="text-xs font-medium text-dark mb-3 uppercase tracking-wider">Kernpunten om te checken</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span><span><strong className="text-dark">Borg:</strong> hoeveel, wanneer terug, onder welke voorwaarden ingehouden (bv. schoonmaakkosten)</span></li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span><span><strong className="text-dark">Huurtermijn + opzegtermijn:</strong> kun je eerder opzeggen als je stage korter wordt? Welke termijn geldt?</span></li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span><span><strong className="text-dark">Wat is inbegrepen:</strong> stroom, water, gas, internet, meubels, keukengerei, linnengoed?</span></li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span><span><strong className="text-dark">OB-belasting (6-7%):</strong> komt die bovenop de prijs of is die inbegrepen? Dit staat niet altijd duidelijk.</span></li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span><span><strong className="text-dark">Stroomlimiet:</strong> is er een dagelijks of maandelijks verbruikslimiet? Boven de limiet zelf betalen?</span></li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span><span><strong className="text-dark">Service fee:</strong> eenmalige kosten voor schoonmaak, ontvangst, sleutels?</span></li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span><span><strong className="text-dark">Bezoekers:</strong> mag je logés ontvangen? Extra kosten?</span></li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span><span><strong className="text-dark">Huisregels:</strong> feesten, muziek, huisdieren, wat is wel/niet toegestaan?</span></li>
              <li className="flex gap-2"><span className="text-sky shrink-0">·</span><span><strong className="text-dark">Betaling:</strong> hoe betaal je (NL-rekening, lokaal, cash)? Maandelijks of per kwartaal vooruit?</span></li>
            </ul>
          </div>
        </section>

        {/* Bezichtiging checklist */}
        <section className="mb-10">
          <h2 className="section-label">Bezichtiging, wat kijk je aan?</h2>
          <ClaimLabel kind="ervaring" />
          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
            Als je fysiek kunt bezichtigen (of iemand voor je): loop de kamer en het hele huis door met deze checklist. Maak foto's van alles.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="card">
              <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Airco & stroom</p>
              <ul className="flex flex-col gap-1.5 text-xs text-gray-500">
                <li>· Zet de airco aan, koelt hij snel?</li>
                <li>· Hoe oud ziet de airco eruit? Oud = duur stroom.</li>
                <li>· Check stopcontacten: standaard op Curaçao is 127V/Amerikaans (Type A/B). NL-apparaten van 220V hebben vaak een transformator nodig. Vraag of er ook 220V-stopcontacten aanwezig zijn.</li>
                <li>· Zijn er veel lampen of ledverlichting?</li>
              </ul>
            </div>
            <div className="card">
              <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Water & sanitair</p>
              <ul className="flex flex-col gap-1.5 text-xs text-gray-500">
                <li>· Draai de kraan open, genoeg druk?</li>
                <li>· Warm water: hoe snel komt het?</li>
                <li>· Douche, werkt hij, schimmel zichtbaar?</li>
                <li>· Toilet, vlotter en spoeling oké?</li>
              </ul>
            </div>
            <div className="card">
              <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Wifi & connectiviteit</p>
              <ul className="flex flex-col gap-1.5 text-xs text-gray-500">
                <li>· Vraag om te testen, open een snelheidstest op je telefoon.</li>
                <li>· Minimaal 25 Mbps download voor stage-calls.</li>
                <li>· Bereik: werkt wifi in alle kamers?</li>
                <li>· Mobiele ontvangst (4G/5G) in huis als fallback?</li>
              </ul>
            </div>
            <div className="card">
              <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Veiligheid & omgeving</p>
              <ul className="flex flex-col gap-1.5 text-xs text-gray-500">
                <li>· Sloten op deuren en ramen?</li>
                <li>· Kluis of afsluitbare kast voor paspoort/laptop?</li>
                <li>· Hoe is de straat 's avonds verlicht?</li>
                <li>· Rollen of gordijnen, muggennet op ramen?</li>
              </ul>
            </div>
            <div className="card">
              <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Inrichting</p>
              <ul className="flex flex-col gap-1.5 text-xs text-gray-500">
                <li>· Bed met matras + dekbed + kussen?</li>
                <li>· Bureau en stoel (belangrijk voor thuiswerken)?</li>
                <li>· Kookgerei, borden, bestek in keuken?</li>
                <li>· Linnengoed en handdoeken inbegrepen?</li>
              </ul>
            </div>
            <div className="card">
              <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Route naar stage</p>
              <ul className="flex flex-col gap-1.5 text-xs text-gray-500">
                <li>· Open Google Maps, hoe ver is je stageplek?</li>
                <li>· Met auto, scooter, te voet? (bepaalt vervoerskeuze)</li>
                <li>· Is er parkeergelegenheid?</li>
                <li>· Kom je langs een supermarkt?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OB-belasting uitleg */}
        <div className="card border-l-4 mb-10" style={{ borderLeftColor: '#E8507A' }}>
          <p className="text-sm font-medium text-dark mb-2">OB-belasting (6-7%): vraag expliciet na</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Op Curaçao geldt omzetbelasting (OB) op huur. Dat is 6% over woonruimte, 7% over short-stay. Deze komt meestal bovenop de prijs, sommige verhuurders communiceren "€450" maar factureren €480. Vraag vóór het tekenen: <strong className="text-dark">"Is deze prijs inclusief OB?"</strong> Laat het antwoord schriftelijk vastleggen.
          </p>
        </div>

        {/* Pagatinu, prepaid stroom */}
        <section className="mb-10">
          <h2 className="section-label">Pagatinu, prepaid stroom</h2>
          <ClaimLabel kind="richtlijn" />
          <div className="card">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              In sommige huizen op Curaçao werkt stroom prepaid. Dat heet <strong className="text-dark">Pagatinu</strong>. In de kamer zit een klein kastje met een teller. Op is op, de airco valt uit, het licht gaat uit, de koelkast stopt.
            </p>
            <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Hoe het werkt</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600 mb-3">
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Bij tellerstand 25 begint het kastje te piepen, je hebt dan nog ongeveer 3-4 dagen.</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Opwaarderen kan bij tankstations en sommige lokale supermarkten/toko's.</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Vraag voor een bedrag aan Caribische gulden (XCG). Met ±80 XCG kom je ongeveer een maand door.</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Je hebt een <strong className="text-dark">code van je verhuurder</strong> nodig, krijg je bij het tekenen van het contract.</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Na betaling krijg je een bonnetje met een nummer. Dit nummer voer je in op het kastje.</li>
            </ul>
            <p className="text-xs text-gray-500 leading-relaxed italic">
              Vraag bij het tekenen van het huurcontract expliciet of er Pagatinu is, en laat je verhuurder voordoen hoe je opwaardeert. Niks zo vervelend als een maand zonder airco in het weekend omdat je code niet werkt.
            </p>
          </div>
        </section>

        {/* Stroom & airco */}
        <div className="card border-l-4 mb-10" style={{ borderLeftColor: '#F2B517' }}>
          <p className="text-sm font-medium text-dark mb-2">Stroom en airco: vraag dit voor je tekent</p>
          <ul className="flex flex-col gap-1.5 mb-3">
            <li className="text-xs text-gray-500">· Is stroom inbegrepen in de huurprijs?</li>
            <li className="text-xs text-gray-500">· Is er een dagelijks verbruikslimiet?</li>
            <li className="text-xs text-gray-500">· Hoe oud is de airco-unit?</li>
          </ul>
          <p className="text-xs text-gray-500 leading-relaxed">
            Airconditioning op Curaçao is geen luxe maar een noodzaak. Maar het is ook de grootste kostenpost. Een huis met slecht geïsoleerde muren en een oude airco kan je per maand honderden guldens extra kosten. Vraag het altijd na.
          </p>
        </div>

        {/* Tip */}
        <div className="card border-l-4 mb-10" style={{ borderLeftColor: '#3EAD6E' }}>
          <p className="text-sm font-medium text-dark mb-2">Praktisch advies: kies groter</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Grotere studentenhuizen (10–30 personen) zijn goedkoper per persoon, socialer en je kunt makkelijker een auto delen. 
            De mooiste studentenhuizen zitten in Jan Thiel en Piscadera. Wil je het echte Curaçao meemaken? Kies Pietermaai.
          </p>
        </div>

        {/* FAQ — koppelt aan FAQPage JSON-LD in SCHEMA_FAQ hierboven,
            zodat Google eventueel FAQ-snippets kan tonen in de resultaten. */}
        <section className="mb-10">
          <h2 className="section-label">Veelgestelde vragen over huisvesting</h2>
          <ClaimLabel kind="richtlijn" />
          <div className="flex flex-col gap-3">
            {SCHEMA_FAQ.mainEntity.map((item, i) => (
              <details
                key={i}
                className="card group"
                style={{ borderLeft: '3px solid #3EAD6E' }}
              >
                <summary className="text-sm font-medium text-dark cursor-pointer marker:hidden list-none flex items-start justify-between gap-3">
                  <span>{item.name}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">▾</span>
                </summary>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                  {item.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Auto nodig vanuit jouw wijk?</p>
            <p className="text-sm text-gray-600">Gebruik de beslisboom om te bepalen of je echt een auto nodig hebt.</p>
          </div>
          <Link to="/auto" className="btn-terra shrink-0">Naar auto-beslisboom →</Link>
        </div>

        <div className="mt-10">
          <RelatedPages items={RELATED} />
        </div>

        <LastChecked
          date="2026-04-16"
          bron="Eigen redactie + ervaringen stagiairs"
          gevoeligheid="middel"
        />
      </div>
    </>
  )
}
