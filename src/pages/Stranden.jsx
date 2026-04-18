import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

const STRANDEN = [
  {
    naam: 'Playa Grote Knip',
    type: 'zand', entree: 'gratis', snorkelen: true, sfeer: 'rustig',
    desc: 'Curaçao’s meest gefotografeerde strand. Breed wit zand, turquoise water en dramatische kliffen. Weekenden druk met locals. Klif-uitkijkpunt boven de parkeerplaats is dé fotoplek.',
    faciliteiten: 'Snackbar, stoelverhuur, toiletten, parkeerplaats, palapa’s',
    snorkelNote: 'Goed voor beginners langs de rotswanden.',
    coords: [12.3526, -69.1515],
  },
  {
    naam: 'Playa Kleine Knip',
    type: 'zand', entree: 'gratis', snorkelen: true, sfeer: 'rustig',
    desc: 'Kleiner en rustiger dan Grote Knip. Zacht zand, kalm water, rotswanden. Favoriet voor snorkelen dicht bij de kust, met papegaaivissen en koninginnenvissen.',
    faciliteiten: 'Palapa’s, beperkte snackverkopers, kleine parkeerplaats',
    snorkelNote: 'Een van de beste plekken voor snorkelen dicht bij de kust.',
    coords: [12.3413, -69.1525],
  },
  {
    naam: 'Cas Abao Beach',
    type: 'zand', entree: 'betaald', snorkelen: true, sfeer: 'gezellig',
    desc: 'Lang wit strand, vaak in de top van beste Caribische stranden. Strandbar, duikshop en iconische steiger om vanaf te springen. Regelmatige stop van het StageStart-team.',
    faciliteiten: 'Strandbar, duikshop, snorkelverhuur, toiletten, douches, stoelverhuur',
    snorkelNote: 'Bekend voor shore diving en snorkelen langs het rif.',
    coords: [12.2283, -69.0922],
  },
  {
    naam: 'Playa Porto Mari',
    type: 'zand', entree: 'betaald', snorkelen: true, sfeer: 'gezellig',
    desc: 'Beroemd om het dubbele rif. Een van Curaçao’s beste snorkel- en duikplekken. Let op de varkens die soms over het strand wandelen.',
    faciliteiten: 'Restaurant, strandbar, duikcentrum, toiletten, douches, parkeerplaats',
    snorkelNote: 'Dubbel rifsysteem, top shore dive site. Snorkelen kan ook bij de steiger.',
    coords: [12.2190, -69.0863],
  },
  {
    naam: 'Playa Lagun',
    type: 'zand', entree: 'gratis', snorkelen: true, sfeer: 'rustig',
    desc: 'Smalle baai omlijst door kliffen. Kalm, helder water met schildpadden dicht bij de kust. Kleurrijke vissersboten en tamme leguänen bij restaurant Bahia.',
    faciliteiten: 'Restaurants, palapa’s, duikshop, parkeerplaats',
    snorkelNote: 'Favoriet snorkelplek. Zwem naar de “derde rots links” voor het beste rif.',
    coords: [12.0371, -68.7872],
  },
  {
    naam: 'Playa Kalki',
    type: 'zand', entree: 'gratis', snorkelen: true, sfeer: 'rustig',
    desc: 'Noordwestpunt van het eiland, bij Westpunt. Klein maar vredig strand met helder water. Onder water bekend als “Alice in Wonderland”.',
    faciliteiten: 'Duikshop, snackbar, parkeerplaats, palapa’s',
    snorkelNote: 'Beroemd duik-/snorkelsite “Alice in Wonderland” met uitstekend zicht.',
    coords: [12.3756, -69.1578],
  },
  {
    naam: 'Jan Thiel Beach',
    type: 'zand', entree: 'betaald', snorkelen: true, sfeer: 'gezellig',
    desc: 'Een van Curaçao’s meest levendige strandgebieden. Beachclubs, restaurants, winkels en lounges. Overdag relaxed, ’s avonds stijlvol nachtleven aan zee.',
    faciliteiten: 'Beachclubs, restaurants, duikshops, zwembaden, cabana’s, parkeerplaats',
    snorkelNote: 'Kalm water, goed snorkelen langs de rotswanden.',
    coords: [12.0751, -68.8797],
  },
  {
    naam: 'Mambo Beach',
    type: 'zand', entree: 'betaald', snorkelen: false, sfeer: 'gezellig',
    desc: 'Seaquarium Beach / Mambo Beach Boulevard. Lange beschermde baai met restaurants, bars, winkels en clubs. Overdag familievriendelijk, ’s avonds nachtleven.',
    faciliteiten: 'Restaurants, bars, ligbedverhuur, toiletten, douches, betaald parkeren',
    snorkelNote: 'Kalm water voor casual snorkelen, serieuze duikers gaan met de boot.',
    coords: [12.0872, -68.8995],
  },
  {
    naam: 'Tugboat Beach',
    type: 'zand', entree: 'betaald', snorkelen: true, sfeer: 'gezellig',
    desc: 'Beroemd om de gezonken sleepboot op ~5m diepte. Toegankelijk voor snorkelaars en duikers. Tropische vissen, kans op octopus, zeepaard of kreeft. Strandbar van gerecycled materiaal.',
    faciliteiten: 'Strandbar, parkeerplaats',
    snorkelNote: 'De gezonken sleepboot is de highlight — perfect voor onderwaterfotografie.',
    coords: [12.0692, -68.8617],
  },
  {
    naam: 'Playa Grandi / Playa Piskadó',
    type: 'zand', entree: 'gratis', snorkelen: true, sfeer: 'rustig',
    desc: 'Vissersstrand beroemd om de schildpadden. Vissers schoonmaken hun vangst op de steiger en trekken schildpadden aan. Kleurrijke boten en netten. Beste kans op schildpadden: 8:30–11:00.',
    faciliteiten: 'Snackstands, openbare parkeerplaats, visserssteiger',
    snorkelNote: 'Zwem met schildpadden bij de visserssteiger. Geweldig voor onderwaterfotografie.',
    coords: [12.3704, -69.1540],
  },
  {
    naam: 'Blue Bay Beach',
    type: 'zand', entree: 'betaald', snorkelen: true, sfeer: 'gezellig',
    desc: 'Een van Curaçao’s grootste en meest ontwikkelde stranden. Breed zacht zand, kalm turquoise water. Vijf restaurants en bars langs het strand.',
    faciliteiten: 'Restaurants, bars, duikcentrum, snorkelverhuur, toiletten, douches, parkeerplaats',
    snorkelNote: 'Uitstekend rif vlak voor de kust voor snorkelen en shore diving.',
    coords: [12.1348, -68.9850],
  },
  {
    naam: 'Cabana Beach',
    type: 'zand', entree: 'betaald', snorkelen: false, sfeer: 'gezellig',
    desc: 'Verfijnd en stijlvol naast Mambo. Elegante loungebedden, palmen, sfeerverlichting na zonsondergang. Overdag beachclub, ’s avonds een van de mooiste plekken op het eiland.',
    faciliteiten: 'Restaurant, bar, loungers, cabana’s, toiletten, douches, parkeerplaats',
    snorkelNote: 'Kalm water voor casual zwemmen, meer beachclub dan duikplek.',
    coords: [12.0883, -68.9003],
  },
  {
    naam: 'Kokomo Beach',
    type: 'zand', entree: 'betaald', snorkelen: true, sfeer: 'gezellig',
    desc: 'Relaxte lokale sfeer met beachclub-vibes. Houten decks, hangmatten en de beroemde “Kokomo swing”, dé fotoplek bij zonsondergang.',
    faciliteiten: 'Beachclub, restaurant, bar, duikshop, toiletten, douches, parkeerplaats',
    snorkelNote: 'Goed voor casual snorkelen in kalm water.',
    coords: [12.1610, -69.0046],
  },
  {
    naam: 'Karakter Beach',
    type: 'zand', entree: 'betaald', snorkelen: false, sfeer: 'gezellig',
    desc: 'Bar/restaurant op het strand bij Coral Estates. Rode parasols, grote palapa, comfort food met ontbijt, lunch en diner. Druk in het weekend bij lunch en zonsondergang.',
    faciliteiten: 'Restaurant, bar, parkeerplaats',
    coords: [12.1985, -69.0790],
  },
  {
    naam: 'Papagayo Beach',
    type: 'zand', entree: 'betaald', snorkelen: false, sfeer: 'gezellig',
    desc: 'Luxe beachclub met infinity pool, wit zand en stijlvolle lounge areas. VIP-cabana’s beschikbaar. Open voor gasten en niet-gasten.',
    faciliteiten: 'Restaurant, bar, cabana’s, zwembad, toiletten, parkeerplaats',
    coords: [12.0746, -68.8787],
  },
  {
    naam: 'Directors Bay',
    type: 'rots', entree: 'gratis', snorkelen: true, sfeer: 'rustig',
    desc: 'Kleine dramatische baai tussen kliffen. Ooit privéstrand van Shell Oil, nu openbaar. Favoriet voor duikers en fotografen vanwege de steile rifwand.',
    faciliteiten: 'Parkeerplaats boven het strand, geen voorzieningen',
    snorkelNote: 'Top wall-diving site met steile drop-off. Voor gevorderde snorkelaars en duikers.',
    coords: [12.0661, -68.8601],
  },
  {
    naam: 'Daaibooi Beach',
    type: 'zand', entree: 'gratis', snorkelen: true, sfeer: 'rustig',
    desc: 'Ontspannen familiestand bij Soto. Locals komen voor weekendbarbecues. Kalm water, beschut door kliffen. Snorkelen langs de rotswanden.',
    faciliteiten: 'Snackbar, toiletten, parkeerplaats, stoel/parasolhuur',
    snorkelNote: 'Uitstekend snorkelen langs beide rotsige zijden van de baai.',
    coords: [12.2121, -69.0845],
  },
  {
    naam: 'Playa Forti',
    type: 'rots', entree: 'gratis', snorkelen: false, sfeer: 'rustig',
    desc: 'Bekend om klifspringen en het uitzicht. Restaurants boven op de kliffen met panoramisch uitzicht. De sprong in turquoise water is iconisch.',
    faciliteiten: 'Restaurants, parkeerplaats langs de weg',
    coords: [12.3671, -69.1537],
  },
  {
    naam: 'Playa Canoa / Kanoa Beach',
    type: 'zand', entree: 'gratis', snorkelen: false, sfeer: 'rustig',
    desc: 'Curaçao’s ruige surfstrand. Rauw, winderig en vol energie. Noordoostkust met consistente golven. Niet zwemmen wegens sterke stroming. Wel de beste plek om surfers te kijken.',
    faciliteiten: 'Kleine snackstands in het weekend, parkeerplaats',
    coords: [12.1748, -68.8661],
  },
  {
    naam: 'Kite Beach (Sint Joris Bay)',
    type: 'zand', entree: 'gratis', snorkelen: false, sfeer: 'gezellig',
    desc: 'Dé plek voor windsurfen en kitesurfen. Ondiep water, perfecte condities voor beginners en pro’s. Kleurrijke kites vullen de lucht.',
    faciliteiten: 'Surfscholen, weekendfoodtrucks, parkeerplaats, geen schaduw',
    coords: [12.1276, -68.8245],
  },
  {
    naam: 'Piscadera Beach',
    type: 'zand', entree: 'gratis', snorkelen: false, sfeer: 'gezellig',
    desc: 'Populair bij reizigers en locals in Piscadera Bay. Drie restaurants op het strand: Pirate Bay, Tomatoes en Que Tapa. Gratis toegang, island time.',
    faciliteiten: 'Drie restaurants, strandbedden, douches, parkeerplaats',
    coords: [12.1228, -68.9690],
  },
  {
    naam: 'Fuik Beach',
    type: 'zand', entree: 'gratis', snorkelen: false, sfeer: 'gezellig',
    desc: 'Een van de meest afgelegen stranden, bereikbaar per boot. Doordeweeks rustig en wild. Op zondag transformeert het in “Fuikdag” met feestboten, muziek en dansen op het water.',
    faciliteiten: 'Geen voorzieningen. Toegang per boot. Neem alles zelf mee.',
    coords: [12.0549, -68.8343],
  },
  {
    naam: 'Playa Santa Cruz',
    type: 'zand', entree: 'gratis', snorkelen: true, sfeer: 'rustig',
    desc: 'Breed rood-zandstrand omlijst door lage heuvels. Kalm en gezinsvriendelijk. Vertrekpunt voor boottochten naar de Blue Room grot.',
    faciliteiten: 'Snackbar, kleine bar, boottochten, parkeerplaats',
    snorkelNote: 'Kalm water, snorkelen bij de rotsen. Meeste bezoekers komen voor de Blue Room boottocht.',
    coords: [12.3061, -69.1453],
  },
  {
    naam: 'Caracasbaai Beach',
    type: 'zand', entree: 'gratis', snorkelen: true, sfeer: 'rustig',
    desc: 'Brede, kalme baai met vissersboten en pelikanen. Authentiek en ongepolijst. Eenvoudige eettentjes serveren de beste lokale vis. Bij zonsondergang: cinematische silhouetten.',
    faciliteiten: 'Lokale restaurants, openbare parkeerplaats, boot/duik operators',
    snorkelNote: 'Kalm water, ideaal voor snorkelen of als vertrekpunt voor duikboten.',
    coords: [12.0778, -68.8648],
  },
  {
    naam: 'Playa Jeremi',
    type: 'zand', entree: 'gratis', snorkelen: false, sfeer: 'rustig',
    desc: 'Stille, onontgonnen baai. Grof zand, diep water, rauwe sfeer. Vaak bijna leeg. Bij zonsondergang gloeit de hele baai oranje tussen de kliffen.',
    faciliteiten: 'Geen voorzieningen. Parkeerplaats boven het strand, trap naar beneden.',
    coords: [12.3289, -69.1502],
  },
  {
    naam: 'Playa Marie Pampoen',
    type: 'zand', entree: 'gratis', snorkelen: true, sfeer: 'rustig',
    desc: 'Buurtstrand vlakbij Willemstad. Locals komen voor ochtendwim, barbecues en strandhengelen. Kalm, ondiep water met beschermd rif.',
    faciliteiten: 'Gratis toegang, straatparkeren, snackverkopers, wandelpad langs de kust',
    snorkelNote: 'Goed voor casual snorkelen dicht bij de kust. Geschikt voor beginners.',
    coords: [12.0910, -68.9050],
  },
  {
    naam: 'Corendon Hotel Beach',
    type: 'zand', entree: 'betaald', snorkelen: true, sfeer: 'gezellig',
    desc: 'Strand bij het Corendon Mangrove Beach Resort. Zacht zand met mangrovebos als achtergrond. Dagpassen beschikbaar inclusief waterpark met glijbanen.',
    faciliteiten: 'Duikcentrum, snorkelverhuur, restaurants, bars, toiletten, douches, parkeerplaats',
    snorkelNote: 'Kalm, beschermd water door rifwand. Ideaal voor beginners.',
    coords: [12.1086, -68.9453],
  },
  {
    naam: 'Marriott Beach',
    type: 'zand', entree: 'betaald', snorkelen: true, sfeer: 'rustig',
    desc: 'Piscadera Bay resort-strand. Zacht zand, helder kalm water, palmbomen. Rif vlak voor de kust voor snorkelen. Dagpassen beschikbaar.',
    faciliteiten: 'Duikshop, strandbar, restaurant, toiletten, douches, parkeerplaats',
    snorkelNote: 'Uitstekend snorkelen en shore diving via het house reef.',
    coords: [12.1186, -68.9662],
  },
  {
    naam: 'Lions Dive Beach',
    type: 'zand', entree: 'betaald', snorkelen: true, sfeer: 'rustig',
    desc: 'Resort-strand van LionsDive naast Sea Aquarium en Mambo. Rustiger dan de buren. Wit zand, palmbomen, een van de beste duikcentra van het eiland.',
    faciliteiten: 'Restaurants, bars, duikshop, snorkelverhuur, toiletten, douches, parkeerplaats',
    snorkelNote: 'Uitstekend snorkelen en duiken dankzij het house reef vlak voor de kust.',
    coords: [12.0859, -68.8972],
  },
  {
    naam: 'Avila Hotel Beach',
    type: 'zand', entree: 'betaald', snorkelen: true, sfeer: 'rustig',
    desc: 'Historisch hotel met twee kalme baaien, beschermd door golfbrekers. Verfijnd en sereen, vlak bij Willemstad. Prachtig bij zonsopgang en -ondergang.',
    faciliteiten: 'Ligbedden, parasols, hotel bars, restaurants, toiletten, douches, parkeerplaats',
    snorkelNote: 'Directe toegang tot het house reef voor relaxed snorkelen.',
    coords: [12.1007, -68.9219],
  },
  {
    naam: 'Boka Sint Michiel / Boka Sami',
    type: 'zand', entree: 'gratis', snorkelen: true, sfeer: 'rustig',
    desc: 'Traditioneel vissersdorp met brede, kalme baai. Kleurrijke boten, lokaal ritme. Weekenden: families en barbecues. Doordeweeks: stil en ongehaast.',
    faciliteiten: 'Lokale snackbars, parkeerplaats, duik operators in de buurt',
    snorkelNote: 'Snorkelen langs de rotsige zijden. Shore-entry naar nabijgelegen riffen.',
    coords: [12.1481, -68.9989],
  },
  {
    naam: 'Playa Parasasa',
    type: 'zand', entree: 'gratis', snorkelen: false, sfeer: 'rustig',
    desc: 'Lokaal strand bij Piscadera Bay resorts. Favoriet voor zwemmen, barbecues en zonsondergang. In het weekend picknicken, doordeweeks rustig. Soms passeren cruiseschepen.',
    faciliteiten: 'Gratis toegang, parkeerplaats, beperkte verkopers, hotels op loopafstand',
    coords: [12.1186, -68.9676],
  },
  {
    naam: 'Playa Santu Pretu (Black Sand Beach)',
    type: 'rots', entree: 'gratis', snorkelen: false, sfeer: 'rustig',
    desc: 'Uniek zwart vulkanisch zandstrand. Rotsachtig oppervlak, niet ideaal voor zonnebaden maar bijzonder om te zien. Lastig bereikbaar, weinig bezocht.',
    faciliteiten: 'Geen voorzieningen',
    coords: [12.3029, -69.1490],
  },
  {
    naam: 'San Juan Beaches',
    type: 'zand', entree: 'betaald', snorkelen: true, sfeer: 'rustig',
    desc: 'Cluster van drie kleine stranden op privégrond. Elke baai heeft zacht zand en kalm water. Ruige wegen, handgemaakte borden. Klein toegangstarief.',
    faciliteiten: 'Klein toegangstarief, beperkte voorzieningen, parkeerplaats, schaduw van bomen',
    snorkelNote: 'Goed snorkelen bij de kust in alle drie de baaien.',
    coords: [12.2535, -69.0987],
  },
  {
    naam: 'Santa Martha Bay',
    type: 'zand', entree: 'gratis', snorkelen: true, sfeer: 'rustig',
    desc: 'Serene plek bij Soto. Voor duikers: wrak van een vliegtuigje bedekt met koraal. Mushroom Forest en Blue Room in de buurt. Kans op tarpon, geelvintonijn en hamerhaaien.',
    faciliteiten: 'Beperkte voorzieningen',
    snorkelNote: 'Blue Room is iconisch voor foto’s. Mushroom Forest en vliegtuigwrak voor duikers.',
    coords: [12.2690, -69.1282],
  },
  {
    naam: 'Playa Hundu',
    type: 'zand', entree: 'gratis', snorkelen: false, sfeer: 'rustig',
    desc: 'Klein, onbekend strand aan de westkust. Rustig en beschaduwd door bomen. Ondiep water, meer een lokale picknickplek.',
    faciliteiten: 'Geen voorzieningen, kleine parkeerplaats, weekendverkopers',
    coords: [12.2610, -69.1203],
  },
]

const FILTERS = [
  { key: 'alle', label: 'Alle stranden' },
  { key: 'gratis', label: 'Gratis' },
  { key: 'betaald', label: 'Betaald' },
  { key: 'snorkelen', label: 'Snorkelen' },
  { key: 'rustig', label: 'Rustig' },
  { key: 'gezellig', label: 'Gezellig' },
]

const COLORS = ['#D4522A', '#F2B517', '#3EAD6E', '#1A7EC5', '#E8507A']

export default function Stranden() {
  const [filter, setFilter] = useState('alle')
  const [expanded, setExpanded] = useState(null)

  const filtered = STRANDEN.filter(s => {
    if (filter === 'alle') return true
    if (filter === 'gratis') return s.entree === 'gratis'
    if (filter === 'betaald') return s.entree === 'betaald'
    if (filter === 'snorkelen') return s.snorkelen
    if (filter === 'rustig') return s.sfeer === 'rustig'
    if (filter === 'gezellig') return s.sfeer === 'gezellig'
    return true
  })

  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Stranden van Curaçao"
        title="35+ stranden — van populair tot geheim."
        subtitle={`Van gezellige beachclubs tot verlaten baaien. Filter op wat bij je past.`}
        accentColor="#1A7EC5"
        image="/img/hero-stranden.jpg"
        imageAlt="Wit zandstrand op Curaçao met turquoise zee en rotsige kustlijn"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Anti-drift marker */}
        <div className="mb-8 border-l-2 border-gray-200 pl-4 py-1">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
            Onderdeel van de stagegids StageStart Curaçao. Deze pagina is ondersteunend — voor harde vereisten rond vergunning, kosten en verblijf gelden de officiële bronnen op de kernpagina's.
          </p>
        </div>

        {/* Map banner */}
        <Link
          to="/kaart"
          className="block card mb-6 hover:shadow-md transition-shadow border-l-4"
          style={{ borderLeftColor: '#1A7EC5' }}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🗺️</span>
              <div>
                <p className="text-sm font-medium text-dark">Bekijk alle stranden op de kaart</p>
                <p className="text-xs text-gray-500">Zie precies waar elk strand ligt en wat in de buurt is.</p>
              </div>
            </div>
            <span className="text-sky text-sm shrink-0">→</span>
          </div>
        </Link>

        {/* Filters */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f.key
                  ? 'bg-sky text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="text-xs text-gray-400 self-center ml-2">{filtered.length} stranden</span>
        </div>

        {/* Stranden grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((s, i) => {
            const isOpen = expanded === s.naam
            return (
              <button
                key={s.naam}
                onClick={() => setExpanded(isOpen ? null : s.naam)}
                className="text-left card transition-all hover:shadow-sm"
              >
                <div className="h-[3px] rounded-sm mb-3" style={{ background: COLORS[i % COLORS.length] }} />
                <div className="flex justify-between items-start gap-2 mb-1">
                  <p className="text-sm font-medium text-dark">{s.naam}</p>
                  <div className="flex gap-1 shrink-0">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${s.entree === 'gratis' ? 'bg-sage/10 text-sage' : 'bg-gold/10 text-gold'}`}>
                      {s.entree}
                    </span>
                    {s.snorkelen && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky/10 text-sky">snorkelen</span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">{s.desc}</p>

                {isOpen && (
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-400 mb-1"><strong className="text-dark">Faciliteiten:</strong> {s.faciliteiten}</p>
                    {s.snorkelNote && (
                      <p className="text-xs text-gray-400"><strong className="text-sky">Snorkelen:</strong> {s.snorkelNote}</p>
                    )}
                  </div>
                )}

                <span className={`text-xs text-gray-400 transition-transform inline-block ${isOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
            )
          })}
        </div>

        {/* Tips */}
        <section className="mt-14 mb-14">
          <p className="section-label">Strandtips</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
              <p className="text-xs font-medium text-dark mb-1">Zonnebrand meenemen</p>
              <p className="text-xs text-gray-500">Factor 50 kost op Curaçao het dubbele. Neem voldoende mee vanuit Nederland.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
              <p className="text-xs font-medium text-dark mb-1">Waardespullen</p>
              <p className="text-xs text-gray-500">Laat nooit waardevolle spullen onbewaakt. Neem alleen cash en een waterproof hoesje mee.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
              <p className="text-xs font-medium text-dark mb-1">Schildpadden</p>
              <p className="text-xs text-gray-500">Playa Grandi (Piskadó): beste kans op schildpadden tussen 8:30 en 11:00 ’s ochtends.</p>
            </div>
            <div className="card border-l-4" style={{ borderLeftColor: '#F2B517' }}>
              <p className="text-xs font-medium text-dark mb-1">Beste tijd</p>
              <p className="text-xs text-gray-500">Vroeg in de ochtend of na 15:00 voor zachter licht en minder drukte. Weekdagen zijn rustiger.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Weten wat je ’s avonds doet na het strand?</p>
            <p className="text-sm text-gray-600">Happy hours, clubs en het sociale weekritme per dag.</p>
          </div>
          <Link to="/happy-hours" className="btn-terra shrink-0">Bekijk happy hours →</Link>
        </div>

        <LastChecked
          date="2026-04-18"
          bron="Eigen redactie — ervaringsinzicht"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
