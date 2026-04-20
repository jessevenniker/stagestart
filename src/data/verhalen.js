/**
 * Verhalen van stagiairs.
 *
 * Elk verhaal heeft:
 * - slug: URL-vriendelijke identifier, uniek, lowercase
 * - voornaam: zoals getoond
 * - opleiding: formele opleidingsnaam
 * - periode: stageperiode (maand + jaartal)
 * - sector: type werk
 * - bedrijf: optioneel, alleen als stagiair toestemming geeft
 * - wijk: waar hij/zij woonde op Curaçao
 * - auto: boolean
 * - budget: indicatie maandbudget
 * - accent: kleur die bij dit verhaal past (uit Handelskade-palet)
 * - foto: pad naar foto (nu .svg placeholder, later .jpg)
 * - quote: korte quote op de hub-kaart
 * - qa: array van {vraag, antwoord}
 * - eigen_verhaal: langere tekst in eigen woorden (array van paragrafen)
 * - tip: concrete tip voor toekomstige stagiairs
 * - voorbeeld: true als fictief voorbeeld, false bij echt verhaal
 * - laatste_update: datum van publicatie of laatste wijziging
 *
 * De drie verhalen hieronder zijn VOORBEELDEN om het ontwerp te tonen.
 * Vervang door echte verhalen zodra je ze hebt. Zet dan voorbeeld: false.
 */

export const VERHALEN = [
  {
    slug: 'sophie',
    voornaam: 'Sophie',
    opleiding: 'HBO Toegepaste Psychologie',
    periode: 'februari tot mei 2025',
    sector: 'Jeugd- en gezinsondersteuning',
    bedrijf: null,
    wijk: 'Pietermaai',
    auto: false,
    budget: '±€1.150 per maand',
    accent: '#D4522A',
    foto: '/img/verhalen/sophie.svg',
    quote: 'Ik dacht dat 3 maanden lang zou voelen. Na een maand wou ik er 6.',
    qa: [
      {
        vraag: 'Wat wou je dat iemand je vóór vertrek had verteld?',
        antwoord: 'Dat je pinpas niet automatisch werkt buiten Europa. Ik stond mijn eerste dag bij de supermarkt en de betaling werd gewoon geweigerd. Moest huisgenoten bellen om geld te lenen. Bel de bank vóór je vertrekt en laat de pas "op wereld" zetten.',
      },
      {
        vraag: 'Wat heeft je het meest verrast?',
        antwoord: 'Hoe klein het eiland sociaal voelt. Binnen twee weken kwam ik dezelfde mensen overal weer tegen. In het begin ongemakkelijk, later juist fijn omdat je sneller thuis voelt.',
      },
      {
        vraag: 'Wat is het ergste moment geweest en hoe loste je dat op?',
        antwoord: 'Tweede week kreeg ik flinke koorts en hoofdpijn. Ik dacht gewoon een griep, maar mijn huisgenoot zei: "Ga nú naar de huisarts, het kan Dengue zijn." Centro Medico in Mahaai zat vol maar een naburige huisarts had binnen een uur plek. Bleek inderdaad Dengue, lag een week plat. Lesson learned: bewaar alle bonnen voor je zorgverzekering en neem symptomen serieus.',
      },
      {
        vraag: 'Wat is je mooiste herinnering?',
        antwoord: 'Een woensdagavond zaten we met vijf huisgenoten op het dak van onze woning in Pietermaai. De zon ging onder over de baai, iemand had Truk\'i Pan meegenomen, en een van ons zette muziek op. Geen grote gebeurtenis, maar ik wist: dit is waarom mensen over Curaçao blijven praten als ze terug zijn.',
      },
      {
        vraag: 'Wat zou je achteraf anders doen?',
        antwoord: 'Eerder netwerken met lokale collega\'s, niet alleen met de andere stagiairs. Je leert veel meer van hoe een eiland écht werkt als je de mensen kent die er wonen, niet alleen de mensen die voor een paar maanden komen.',
      },
    ],
    eigen_verhaal: [
      'Ik twijfelde lang of ik stage in het buitenland zou doen. Curaçao leek me tegelijk spannend en eng: ver weg, andere cultuur, alles zelf regelen. Toen ik besloot te gaan, was het meest stressvolle de voorbereiding. Vergunning, verzekering, woning, vluchten, DUO, al die documenten naast tentamens halen. Dat is het deel dat niemand je echt uitlegt vooraf.',
      'Eenmaal op Curaçao viel dat allemaal weg. De eerste week was chaotisch maar ik leerde snel de ritmes van het eiland kennen. Werken bij een jeugdzorgorganisatie was intens, ik had nooit gedacht dat ik in drie maanden zoveel zou zien. De combinatie van werk, nieuwe vrienden en de pure natuur maakte dat ik me vanaf week drie thuisvoelde.',
      'Wat Curaçao me meegaf is vooral een ander tempo. Terug in Nederland merkte ik dat ik zinnen begon te beginnen met "poko poko" zonder dat mijn collega\'s snapten waar ik het over had. Het is geen vakantie, het is een stage, maar het is ook een veel breder leven dan ik me vooraf had voorgesteld.',
    ],
    tip: 'Zet je pinpas op "wereld", vraag je huisarts vooraf om een herhaalrecept voor belangrijke medicijnen en begin op dag 1 al nummers op te slaan: stagebegeleider, huisbaas, medestagiairs. Dat bespaart paniek in situaties die je niet had zien aankomen.',
    voorbeeld: true,
    laatste_update: '2026-04-20',
  },
  {
    slug: 'milan',
    voornaam: 'Milan',
    opleiding: 'HBO Commerciële Economie',
    periode: 'september 2024 tot januari 2025',
    sector: 'Toerisme en marketing',
    bedrijf: 'Hotel op Jan Thiel',
    wijk: 'Jan Thiel',
    auto: true,
    budget: '±€1.450 per maand',
    accent: '#1A7EC5',
    foto: '/img/verhalen/milan.svg',
    quote: 'De auto kostte meer dan ik dacht, maar zonder was ik vastgelopen.',
    qa: [
      {
        vraag: 'Wat wou je dat iemand je vóór vertrek had verteld?',
        antwoord: 'Hoeveel de eerste maand daadwerkelijk kost. Borg voor de woning, borg voor de auto, inrichting, eerste boodschappen, SIM-kaart, eerste uitstapjes omdat je alles wilt zien. Reken op minimaal €1.500 extra bovenop de maandelijkse kosten. Zonder buffer had ik in de problemen gezeten.',
      },
      {
        vraag: 'Wat heeft je het meest verrast?',
        antwoord: 'De werkcultuur. "Poko poko" is geen uitdrukking, het is de standaard. Vergaderingen die officieel om 9:00 beginnen, beginnen om 9:25. Feedback wordt nooit direct gegeven. Je moet leren luisteren tussen de regels door. In het begin frustreerde het me, later zag ik hoe productief dat eigenlijk was op de lange termijn.',
      },
      {
        vraag: 'Wat is het ergste moment geweest en hoe loste je dat op?',
        antwoord: 'Derde maand reed iemand tegen mij aan op een kruising zonder stoplichten. Auto stond stil, dader stapte uit en werd boos op mij. Ik heb Forensys gebeld (9223) en die kwamen binnen een half uur. Bleek zijn schuld, maar dat wist hij niet en hij was zwaar geïrriteerd. De Forensys-mensen spraken Engels, waren vriendelijk en professioneel. Mijn verzekering heeft alles vergoed. Les: verplaats je auto niet, bel 9223, wacht rustig.',
      },
      {
        vraag: 'Wat is je mooiste herinnering?',
        antwoord: 'Een normale dinsdagavond in oktober. Na werk reed ik naar Cas Abao voor zonsondergang. Was bijna niemand daar. Ik zat aan het water met een flesje Polar en dacht: over een paar maanden zit ik weer in een Nederlands kantoor. Dat besef maakte die ene zonsondergang voor altijd beter dan alle vakanties ervoor.',
      },
      {
        vraag: 'Wat zou je achteraf anders doen?',
        antwoord: 'Minder toeristische plekken bezoeken en meer lokale. De eerste maand had ik elk bekend strand gezien. De laatste maand ontdekte ik dat de plekken waar Curaçaoënaars zelf komen, mooier waren. Zoals Playa Forti bij Westpunt. Begin daar.',
      },
    ],
    eigen_verhaal: [
      'Ik wist al vanaf het begin van mijn opleiding dat ik buitenlandstage wilde doen. Curaçao kwam in beeld via een studiegenoot die er een jaar eerder was geweest en er niets dan goeds over zei. Mijn HBO bood de optie om bij een hotelketen stage te doen dus dat werd het.',
      'De eerste twee weken waren een cultuurshock, maar niet op de manier die ik verwachtte. Niet het klimaat, niet het eten, niet de taal. Het was de **werktempo**. In Nederland ben ik gewend aan korte vergaderingen, duidelijke deadlines, efficiënte e-mails. Op Curaçao werkt alles via persoonlijke relaties. Je kunt niemand iets vragen zonder eerst te vragen hoe het gaat. In het begin voelde dat als tijdverspilling. Eind tweede maand snapte ik dat de hele organisatie eigenlijk op vertrouwen draait, niet op efficiëntie.',
      'Werk aan de marketingzijde van een hotel betekende dat ik veel met lokale bedrijven samenwerkte. Fotografen, dj\'s, leveranciers. Elk gesprek was ook een leven-update. Daar leer je veel meer van dan van een tien-minuten-standup.',
      'Terug in Nederland is mijn eerste week bij mijn huidige werkgever letterlijk frustrerend geweest. Te snel, te afstandelijk. Ik heb die drie maanden Curaçao nog steeds dagelijks bij me.',
    ],
    tip: 'Als je in een wijk woont die ver van je stageplek ligt, reken serieus door of een auto goedkoper is dan dagelijks een taxi. Voor Jan Thiel naar centrum is auto meestal onvermijdelijk. Sluit altijd een all-risk verzekering af, niet alleen WA. Een kleine aanrijding kost anders meer dan je hele stagemaand waard is.',
    voorbeeld: true,
    laatste_update: '2026-04-20',
  },
  {
    slug: 'lotte',
    voornaam: 'Lotte',
    opleiding: 'WO Biologie',
    periode: 'maart tot augustus 2024',
    sector: 'Onderzoek en mariene biologie',
    bedrijf: null,
    wijk: 'Piscadera',
    auto: false,
    budget: '±€950 per maand',
    accent: '#3EAD6E',
    foto: '/img/verhalen/lotte.svg',
    quote: 'Zonder auto dacht ik dat ik beperkt zou zijn. Het werd juist mijn beste keuze.',
    qa: [
      {
        vraag: 'Wat wou je dat iemand je vóór vertrek had verteld?',
        antwoord: 'Hoeveel zonnebrand en muggenspray écht kosten op Curaçao. Factor 50 is soms het dubbele van Nederland. Ik had voor zes maanden moeten meenemen uit NL, nu heb ik lokaal bijgekocht tegen stevige prijzen.',
      },
      {
        vraag: 'Wat heeft je het meest verrast?',
        antwoord: 'De natuur binnen vijf minuten van het universiteitscampus. Ik werkte in een lab op de Universiteit van Curaçao en kon na werk zo het rif in om te snorkelen. Die combinatie van serieus onderzoek en de oceaan op loopafstand is uniek.',
      },
      {
        vraag: 'Wat is het ergste moment geweest en hoe loste je dat op?',
        antwoord: 'Mijn tweede maand raakte mijn laptop stuk tijdens een regenbui (dak lekte). Al mijn onderzoeksdata stond gelukkig in de cloud, maar de laptop zelf was nodig voor mijn scriptie. Een reparatie op Curaçao kon pas over een maand. Mijn begeleider leende me een oude thuis-laptop. Niet ideaal, maar werkte. Ik heb achteraf geleerd: backup van álles, en overweeg een externe harde schijf mee.',
      },
      {
        vraag: 'Wat is je mooiste herinnering?',
        antwoord: 'Klein Curaçao-boottocht. Acht uur op een onbewoond eiland met wit zand en blauwe zee. Geen wifi, geen stress, alleen oceaan. Ik deed die trip zes weken na aankomst, precies toen ik me overweldigd voelde door het werk. De reset was alles wat ik nodig had.',
      },
      {
        vraag: 'Wat zou je achteraf anders doen?',
        antwoord: 'Fiets kopen in plaats van taxi\'s. Ik woonde in Piscadera en fietste nooit omdat iedereen zei dat het gevaarlijk was op de weg. Klopt deels, maar met een mountainbike op rustige uren was het prima. Had honderden euro\'s bespaard en meer bewogen.',
      },
    ],
    eigen_verhaal: [
      'Ik kwam naar Curaçao voor het rif. Mariene biologie studeren met koraalriffen op vijf minuten afstand was niet iets wat ik kon laten gaan. Ik had contact gelegd met een onderzoeksgroep aan de Universiteit van Curaçao en mocht zes maanden mee-draaien in een project over rifherstel.',
      'Wat ik niet had verwacht was hoeveel ik zou leren buiten het lab. De Caribisch-Nederlandse manier van werken, waar oudere onderzoekers zowel wetenschappelijk bezig zijn als cultureel diep verankerd, was voor mij een eye-opener. Een promovendus die tussen veldwerk en academische deadlines ook drie keer per week Kiwanis-meetings had, dat is typisch Curaçao.',
      'Mijn voordeligste keuze was geen auto hebben. Piscadera is dichtbij de universiteit, supermarkten zijn lopend bereikbaar, en voor strand-uitjes hadden we een carpool met mede-studenten. Ik hield €400-500 per maand over die andere stagiairs uitgaven aan auto + benzine. Dat geld ging naar duikexcursies en één keer een weekend naar Bonaire.',
      'Terug in Nederland werk ik nog steeds aan mijn scriptie over het onderzoek dat ik daar deed. De herinnering aan het rif bij zonsopkomst met een koffie op mijn knie, dat blijft heel lang in je hoofd zitten.',
    ],
    tip: 'Onderschat de kracht van "geen auto" niet als je in centrum, Pietermaai, Otrobanda, Piscadera of Salinja woont. Lopend plus af en toe taxi of carpool is voor sommige stagiairs goedkoper en gezonder dan auto huren. Neem wel veel SPF 50+ mee uit Nederland, dat is het meest onderschatte kostenpunt.',
    voorbeeld: true,
    laatste_update: '2026-04-20',
  },
]

export function getVerhaal(slug) {
  return VERHALEN.find((v) => v.slug === slug)
}
