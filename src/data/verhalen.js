/**
 * Verhalen van stagiairs en tussenjaar-werkers.
 *
 * ─────────────────────────────────────────────────────────────
 * TYPES
 *
 *  Elk verhaal heeft een `type`-veld dat bepaalt in welke sectie op
 *  /verhalen het verschijnt:
 *   - 'stage'      → "Verhalen van stagiairs"
 *   - 'tussenjaar' → "Verhalen van tussenjaar-werkers"
 *
 * ─────────────────────────────────────────────────────────────
 * EEN NIEUW VERHAAL TOEVOEGEN (stappenplan):
 *
 *  1. Zet de foto's neer in /public/img/verhalen/
 *     - Portretfoto:      [slug].jpg            (vierkant 800–1000 px, < 150 KB)
 *     - Full-width foto:  [slug]-1.jpg          (portret of landscape, < 250 KB)
 *     - Half-width foto:  [slug]-2.jpg          (idealiter vierkant, < 150 KB)
 *     - Half-width foto:  [slug]-3.jpg          (idealiter vierkant, < 150 KB)
 *     (Als foto's van iPhone komen zijn ze vaak HEIC; converteer eerst met
 *      `sips -s format jpeg -s formatOptions 85 bron.heic --out doel.jpg`
 *      of via de sharp-pipeline die we voor Jesse gebruikten.)
 *
 *  2. Kopieer de Jesse-entry hieronder en pas aan:
 *     - slug, voornaam, opleiding, periode, sector, bedrijf, wijk, auto, budget
 *     - type: 'stage' of 'tussenjaar'
 *     - accent: kies uit Handelskade (#D4522A terra, #F2B517 gold, #3EAD6E sage,
 *       #1A7EC5 sky, #E8507A blush)
 *     - foto: /img/verhalen/[slug].jpg
 *     - quote: één zin uit hun verhaal, gebruikt op hub-kaart
 *     - persoonlijk: vier warme feitjes uit het Q&A-antwoord
 *     - pull_quotes: max 3 korte zinnen, getoond tussen alinea's
 *     - gallery: 3 items, eerste met layout: 'full', de andere 'half'
 *     - qa: direct overnemen uit Google Form-inzending
 *     - eigen_verhaal: 3–4 alinea's, geschreven door stagiair of door redactie op
 *       basis van Q&A (stagiair krijgt altijd eerst voorbeeld-tekst ter akkoord)
 *     - tip: één zin
 *     - voorbeeld: true bij concept, false bij definitieve publicatie
 *     - laatste_update: datum
 *
 *  3. Voeg toe aan /public/sitemap.xml (alleen wanneer voorbeeld: false)
 *
 *  4. Stagiair stuurt akkoord, zet voorbeeld: false, `npm run build`, deploy.
 *
 * ─────────────────────────────────────────────────────────────
 */

export const VERHALEN = [
  {
    slug: 'sofie',
    type: 'stage',
    voornaam: 'Sofie',
    opleiding: 'Organisatie en Management',
    periode: 'februari tot mei 2026',
    sector: 'Hotel, front desk',
    bedrijf: 'Een hotel op Curaçao',
    wijk: 'Salinja',
    auto: true,
    budget: '±€1.800 per maand',
    accent: '#F2B517',
    foto: '/img/verhalen/sofie.svg',
    quote: 'Je hoeft niet per se via een stagebemiddelingsbedrijf alles te regelen.',
    persoonlijk: {
      favoriete_spot: 'Cas Abao en Playa Kalki',
      grootste_les: 'Veel kun je zelf regelen zonder bemiddelingsbureau',
      moest_wennen: 'Het verkeer op het eiland',
    },
    pull_quotes: [
      'Het verkeer is erg wennen, je moet er echt in meegaan.',
      'Je hoeft niet per se via een stagebemiddelingsbedrijf alles te regelen.',
    ],
    gallery: [
      {
        src: '/img/verhalen/sofie-handelskade-zonsondergang.jpg',
        caption: 'Avond aan de kade',
        layout: 'full',
      },
      {
        src: '/img/verhalen/sofie-kajaks-kust-curacao.jpg',
        caption: 'Uitzicht op het heerlijke blauwe water',
        layout: 'half',
      },
      {
        src: '/img/verhalen/sofie-strand-palmblad.jpg',
        caption: 'Lekker dagje bij Cas Abao',
        layout: 'half',
      },
    ],
    qa: [
      {
        vraag: 'Had je een auto, en zou je die keuze weer zo maken?',
        antwoord: 'Ja, heb je echt nodig anders kun je niks doen. Lopen is niet veilig op de meeste wegen.',
      },
      {
        vraag: 'Hoe vond je je woning?',
        antwoord: 'Echt top. Kleine groep mensen, aangenaam, goede ligging.',
      },
      {
        vraag: 'Hoe zag een normale week eruit?',
        antwoord: 'Vijf dagen per week stage, 15 minuten onderweg. Daarnaast uitgaan, uiteten, sporten en leuke spontane dingen doen.',
      },
      {
        vraag: 'Wat wou je dat iemand je vóór vertrek had verteld?',
        antwoord: 'Je hoeft niet per se via een stagebemiddelingsbedrijf alles te regelen. Je kunt het ook zelf doen.',
      },
      {
        vraag: 'Wat heeft je het meest verrast?',
        antwoord: 'Het verkeer. Dat is erg wennen, je moet er echt in meegaan.',
      },
      {
        vraag: 'Wat is het ergste moment geweest en hoe loste je dat op?',
        antwoord: 'Ik heb een auto-ongeluk gehad. Niet leuk en prijzig, maar gelukkig had ik all-risk verzekering en was niemand gewond.',
      },
      {
        vraag: 'Wat is je mooiste herinnering?',
        antwoord: 'Cas Abao Beach en Playa Kalki. Allebei super mooi en typisch Curaçao.',
      },
    ],
    eigen_verhaal: [
      'Wat me opviel in de eerste weken is hoeveel je hier zelf kunt regelen. Mijn vorige idee was dat je zonder stagebemiddelingsbureau wel vastloopt, maar dat bleek niet waar. Huis, auto, administratie: met een beetje voorbereiding en goede contacten ter plaatse kan je enorm veel zelf doen, zonder dat het betekent dat je het minder comfortabel hebt.',
      'Waar ik écht aan moest wennen was het verkeer. Nederlandse wegen voelen geregeld; Curaçaose wegen vragen een andere alertheid. Ik heb er zelf een aanrijding gehad, en hoewel niemand gewond was en mijn all-risk-verzekering het meeste oppakte, maakte het me op een manier volwassen die een stage in Nederland nooit had gedaan. Je leert snel dat "alles komt goed" niet vanzelf werkt.',
      'Wat deze maanden voor mij maakte was de balans. Strakke werkdagen bij het front desk, maar daaromheen tijd die écht van mij was. Sporten, uiteten, met huisgenoten spontaan naar een strand rijden. Curaçao is groot genoeg om te ontsnappen en klein genoeg om je nergens alleen te voelen. Dat combineer je nergens anders in deze vorm.',
    ],
    tip: 'Neem niet te veel beautyproducten en zeep mee, je kunt het hier allemaal halen en het is niet duur. Regel wél een auto en zorg dat je all-risk verzekerd bent.',
    voorbeeld: true,
    laatste_update: '2026-04-21',
  },
  {
    slug: 'maren',
    type: 'tussenjaar',
    voornaam: 'Maren',
    opleiding: null,
    periode: 'april tot juli 2026',
    sector: 'Horeca',
    bedrijf: null,
    wijk: 'Salinja',
    auto: true,
    budget: '±€2.000 per maand',
    accent: '#D4522A',
    foto: '/img/verhalen/maren.svg',
    quote: 'Niemand heeft hier last van stress.',
    persoonlijk: {
      favoriete_spot: 'Samen zitten na een werkdag',
      grootste_les: 'Iedereen hier zit in hetzelfde schuitje',
      eerste_aankoop: 'Lokale simkaart',
      moest_wennen: 'Dat mensen hier veel minder gestresst zijn',
    },
    pull_quotes: [
      'Niemand heeft hier last van stress.',
      'Iedereen hier zit in hetzelfde schuitje, dat was heel fijn.',
    ],
    gallery: [],
    qa: [
      {
        vraag: 'Had je een auto, en zou je die keuze weer zo maken?',
        antwoord: 'Eerste week had ik geen auto. Binnen een paar dagen wist ik al dat het toch echt nodig is om hier iets te doen. Wel aan te raden: direct vanaf dag één regelen.',
      },
      {
        vraag: 'Hoe vond je je woning?',
        antwoord: 'Via een bemiddelingsbureau. Achteraf zou ik dat weer zo doen, al is zelf regelen via iemand op het eiland ook prima.',
      },
      {
        vraag: 'Hoe zag een normale week eruit?',
        antwoord: '45 uur werk, full time bezig. Daaromheen leuke dingen doen, net zoals in Nederland. Het ritme voelde prettig.',
      },
      {
        vraag: 'Wat wou je dat iemand je vóór vertrek had verteld?',
        antwoord: 'Dat je hier niet alleen in Antilliaanse guldens, maar ook in dollars kunt betalen.',
      },
      {
        vraag: 'Wat heeft je het meest verrast?',
        antwoord: 'Niemand heeft hier last van stress. Dat is echt een ander tempo dan in Nederland.',
      },
      {
        vraag: 'Wat is het ergste moment geweest en hoe loste je dat op?',
        antwoord: 'Ik ben ergens tegenaan gereden met mijn auto. Gelukkig netjes opgelost via het autoverhuurbedrijf.',
      },
      {
        vraag: 'Wat is je mooiste herinnering?',
        antwoord: 'Een collega kwam na het werk naar me toe en vroeg of ik even bij haar kwam zitten. Ze deelde haar ervaringen en zei dat iedereen hier in hetzelfde schuitje zit. Dat voelde heel fijn.',
      },
    ],
    eigen_verhaal: [
      'Ik kwam met de verwachting dat een tussenjaar in de horeca vooral zwaar werk met weinig tijd zou zijn. In de praktijk viel dat mee. Het werk is echt 45 uur per week, maar het omringende leven voelt lichter. In Nederland merk ik altijd dat er iets op me drukt, hier niet. Dat zit niet in het werk zelf, maar in iets breders in de cultuur.',
      'Er is een moment dat ik me blijf herinneren. Na een drukke avond vroeg een collega of ik even bij haar kon zitten. Ze deelde wat haar eerste maanden bij haar losmaakten, en hoe we eigenlijk allemaal in hetzelfde schuitje zitten. Op zo\'n moment realiseer je dat een tussenjaar niet over het land gaat maar over wie je daar tegenkomt. Iedereen die hier landt, landt zacht als anderen dat voor je doen.',
      'Wat ik meeneem: een ander tempo is geen gebrek aan ambitie. Plannen minder strak maken maakt niet dat er minder gebeurt, het maakt dat je meer aan het moment zelf hebt. Voor wie overweegt om dit te doen: het werkt, maar kom met de juiste houding. Het eiland geeft alleen terug wat je toelaat.',
    ],
    tip: 'Regel vooraf een lokale simkaart. Dan kun je vanaf dag één iets opzoeken of iemand bereiken, vooral handig in die eerste week als alles nieuw is.',
    voorbeeld: true,
    laatste_update: '2026-04-21',
  },
  {
    slug: 'dominique',
    type: 'stage',
    voornaam: 'Dominique',
    opleiding: 'HBO Toegepaste Psychologie',
    periode: 'augustus 2025 tot januari 2026',
    sector: 'Onderwijs',
    bedrijf: 'Een onderwijsinstelling op Curaçao',
    wijk: 'Mahaai',
    auto: true,
    budget: '±€1.000 per maand',
    accent: '#E8507A',
    foto: '/img/verhalen/dominique.jpg',
    quote: 'Het gevoel van vrijheid wat je zo lang ervaart is echt heerlijk.',
    persoonlijk: {
      favoriete_spot: 'Het strand \'s middags na stage',
      grootste_les: 'Zorg dat je genoeg spaart en regel vooraf een auto',
    },
    pull_quotes: [
      'Ochtenden stage, middagen strand, avonden uit.',
      'Het gevoel van vrijheid wat je zo lang ervaart is echt heerlijk.',
    ],
    gallery: [
      {
        src: '/img/verhalen/dominique-stagehuis-mahaai.jpg',
        caption: 'Ons stagehuis in Mahaai, bij zonsondergang',
        layout: 'full',
      },
      {
        src: '/img/verhalen/dominique-boottrip-klein-curacao.jpg',
        caption: 'Dagje op Fuik met het huis',
        layout: 'half',
      },
      {
        src: '/img/verhalen/dominique-zonsondergang-strand.jpg',
        caption: 'Zonsondergang op het strand',
        layout: 'half',
      },
      {
        src: '/img/verhalen/dominique-wit-strand-curacao.jpg',
        caption: 'Wit zand, turquoise water, klassiek Curaçao',
        layout: 'half',
      },
      {
        src: '/img/verhalen/dominique-uitgaan-beach-bar.jpg',
        caption: 'Happy hour met de huisgenoten',
        layout: 'half',
      },
    ],
    qa: [
      {
        vraag: 'Had je een auto, en zou je die keuze weer zo maken?',
        antwoord: 'Ja, heel erg blij mee. Ik zou het iedereen aanraden, zeker in combinatie met huisgenoten waarmee je hem kunt delen.',
      },
      {
        vraag: 'Hoe vond je je woning?',
        antwoord: 'Via een stagebureau. Dat was erg handig, maar kostte wel veel geld. Voor mij was de zekerheid van een geregelde woning dat waard.',
      },
      {
        vraag: 'Hoe zag een normale week eruit?',
        antwoord: 'Ochtenden stage, middagen strand, avonden uit. In het weekend ook strand en uit met de huisgenoten.',
      },
      {
        vraag: 'Wat wou je dat iemand je vóór vertrek had verteld?',
        antwoord: 'Eigenlijk niets concreets, ik had me vooraf goed ingelezen en mijn stagebureau had me het nodige verteld.',
      },
      {
        vraag: 'Wat is je mooiste herinnering?',
        antwoord: 'Alle leuke dingen die ik heb gedaan met mijn huisgenoten. Niet één specifiek moment, maar het geheel.',
      },
    ],
    eigen_verhaal: [
      'Het woord dat me het meest bijblijft van deze maanden is vrijheid. Niet vrijheid als "niets moeten", maar vrijheid als: je eigen dagen inrichten binnen een kader dat je zelf hebt gekozen. Een stage in het onderwijs waar ik met vakmensen werkte, een huis in Mahaai met mensen die net als ik gearriveerd waren, en genoeg tijd voor alles daaromheen.',
      'Wat ik niet had verwacht is hoe veel ik over mezelf zou leren op een plek waar niemand je kent. In Nederland leunen we op routines en bekende ogen om ons te vertellen wie we zijn. Hier moet je dat zelf invullen. Ik ben zelfstandiger geworden niet omdat ik alleen stond, maar omdat ik mocht ontdekken wat ik zelf belangrijk vind als niemand meekijkt.',
      'Voor iedereen die dit overweegt: doen. Een half jaar lang dat gevoel van vrijheid meedragen is echt heerlijk, en wat je erover leert van jezelf pak je niet meer uit. Het is geen vakantie, het is een verlenging van je leven waarvan je dacht dat het niet kon.',
    ],
    tip: 'Zorg dat je genoeg spaart voor vertrek en regel van tevoren een auto. Beide maken je eerste maand veel makkelijker.',
    voorbeeld: false,
    laatste_update: '2026-04-21',
  },
  {
    slug: 'elke',
    type: 'stage',
    voornaam: 'Elke',
    opleiding: 'MBO Interieuradviseur',
    periode: 'februari tot juli 2026',
    sector: 'Interieur en woonbranche',
    bedrijf: 'Een interieurbedrijf op Curaçao',
    wijk: 'Oude Caracasbaaiweg',
    auto: true,
    budget: '±€1.200 per maand',
    accent: '#3EAD6E',
    foto: '/img/verhalen/elke.svg',
    quote: 'In een kleiner huis leer je iedereen sneller en intiemer kennen.',
    persoonlijk: {
      favoriete_spot: 'Zonsondergang op het strand met afhaal en huisgenoten',
      grootste_les: 'Een kleiner huis maakt het verschil',
      eerste_aankoop: 'Auto delen met huisgenoot',
      moest_wennen: 'Dat alles in eerste instantie via het huis gaat',
    },
    pull_quotes: [
      'In een kleiner huis leer je iedereen sneller en intiemer kennen.',
      'Iedereen zegt dat Curaçao crimineel is, daar heb ik weinig van gemerkt.',
    ],
    gallery: [
      {
        src: '/img/verhalen/elke-christoffelberg-uitzicht.jpg',
        caption: 'Op pad met de huisgenoten, bovenaan de Christoffelberg',
        half: true,
      },
      {
        src: '/img/verhalen/elke-zonsondergang-palmen-curacao.jpg',
        caption: 'Die avonden dat we eten afhaalden en doorreden naar het strand',
        half: true,
      },
      {
        src: '/img/verhalen/elke-strand-parasols-curacao.jpg',
        caption: 'Een doordeweekse middag, weggegaan met het hele huis',
        half: true,
      },
    ],
    qa: [
      {
        vraag: 'Had je een auto, en zou je die keuze weer zo maken?',
        antwoord: 'Ja, ik deel een auto met mijn huisgenoot omdat we bij hetzelfde bedrijf stagelopen. Een auto is hier echt nodig: lopen is niet veilig en te warm.',
      },
      {
        vraag: 'Hoe vond je je woning?',
        antwoord: 'Via Match, een stagebureau. Ik deel een studio met mijn huisgenoot. Aanrader alleen als je goed met elkaar opschiet — je zit 24/7 op elkaars lip en hebt weinig privacy. Wel gunstig: kosten gehalveerd. Ik zou het zo opnieuw doen.',
      },
      {
        vraag: 'Hoe zag een normale week eruit?',
        antwoord: 'Vier dagen stage, twee op kantoor en twee thuiswerkdagen. De stage was vijf minuten rijden van het huis. In het weekend en soms ook doordeweeks ging ik op pad met de huisgenoten.',
      },
      {
        vraag: 'Wat wou je dat iemand je vóór vertrek had verteld?',
        antwoord: 'Niks specifiek, ik was goed voorbereid. Wel: neem genoeg zonnebrand mee en laat je lange spijkerbroek lekker thuis.',
      },
      {
        vraag: 'Wat heeft je het meest verrast?',
        antwoord: 'Hoeveel ik met mijn huisgenoten zou doen. Ik kwam samen met iemand en dacht vooral met die persoon op te trekken, maar ik doe veel met de hele groep. En dat Curaçao niet zo crimineel is als iedereen zegt — overal in de wereld moet je op je spullen letten.',
      },
      {
        vraag: 'Wat is het ergste moment geweest en hoe loste je dat op?',
        antwoord: 'Heimwee. Het hielp dat ik in een kleiner studentenhuis zit met acht andere huisgenoten. Daardoor leer je elkaar snel kennen en kon ik gewoon even bij iemand aankloppen om me minder alleen te voelen.',
      },
      {
        vraag: 'Wat is je mooiste herinnering?',
        antwoord: 'Met mijn huisgenoten de zonsondergang bekijken op het strand. We halen eten af bij een tentje, rijden door naar een strand en eten daar terwijl de zon zakt.',
      },
    ],
    eigen_verhaal: [
      'Ik kwam samen met iemand naar Curaçao en dacht dat ik vooral met diegene zou optrekken. In de praktijk gebeurde iets anders. Het huis nam je op een manier op die ik niet had verwacht: niet door grote groepsdingen te organiseren, maar door simpelweg veel samen te zijn. Ophalen, doorrijden naar een strand, samen koken, een avond op de bank. Het bouwt zich op zonder dat je het door hebt.',
      'Het cliché dat Curaçao onveilig is, klopte voor mij niet. Je merkt dat mensen het van horen zeggen hebben en het doorgeven alsof het een feit is. Wat ik wel merkte: je let op je spullen, net als in elke stad. Dat is geen Curaçaose les, dat is een algemene les.',
      'Achteraf is mijn belangrijkste advies dit: kies voor een kleiner studentenhuis. Acht huisgenoten klinkt als veel, maar in een huis met twintig of dertig zou ik nooit dezelfde band hebben opgebouwd. En neem een auto. Niet voor het gemak — voor de mogelijkheid om spontaan ja te zeggen tegen iets.',
    ],
    tip: 'Kies een kleiner studentenhuis (acht huisgenoten of minder), zo leer je iedereen echt kennen. En een auto is geen luxe maar een must.',
    voorbeeld: false,
    laatste_update: '2026-04-22',
  },
  {
    slug: 'emma',
    type: 'stage',
    voornaam: 'Emma',
    opleiding: 'MBO Interieuradviseur',
    periode: 'februari tot juli 2026',
    sector: 'Interieur- en woonbranche',
    bedrijf: 'Een interieurbedrijf op Curaçao',
    wijk: 'In de buurt van de Caracasbaaiweg',
    auto: true,
    budget: '±€1.200 per maand',
    accent: '#1A7EC5',
    foto: '/img/verhalen/emma.svg',
    quote: 'Je wordt eigenlijk een soort van verplicht om vrienden te maken.',
    persoonlijk: {
      favoriete_spot: 'Zonsondergang aan zee met huisgenoot',
      grootste_les: 'Vooraf goed regelen scheelt heimwee',
      eerste_aankoop: 'Lokale simkaart in plaats van e-sim',
      moest_wennen: 'Dat het sociale leven gewoon op je af komt',
    },
    pull_quotes: [
      'Je wordt eigenlijk een soort van verplicht om vrienden te maken.',
      'De zonsondergangen zijn hier iedere dag anders.',
    ],
    gallery: [
      {
        src: '/img/verhalen/emma-zonsondergang-zee-curacao.jpg',
        caption: 'Kijken hoe de zon in de zee zakt, met een spelletje of een frietje',
        half: true,
      },
      {
        src: '/img/verhalen/emma-koloniale-huizen-pietermaai.jpg',
        caption: 'Wandelen door Pietermaai tussen de pastelkleurige gevels',
        half: true,
      },
      {
        src: '/img/verhalen/emma-muurschildering-curacao.jpg',
        caption: 'Altijd iets nieuws om te ontdekken op het eiland',
        half: true,
      },
    ],
    qa: [
      {
        vraag: 'Had je een auto, en zou je die keuze weer zo maken?',
        antwoord: 'Ja. Een auto heb je hier zeker nodig, anders kom je nergens. Het openbaar vervoer is lastig en met een fiets is het niet te doen — er zijn geen fietspaden. Een scooter zou kunnen, maar een auto is veiliger.',
      },
      {
        vraag: 'Hoe vond je je woning?',
        antwoord: 'Via Match Curaçao, een stagebureau. Ik had een studio die ik deelde met een vriendin. Dat ging prima, ik zou het zo weer doen.',
      },
      {
        vraag: 'Hoe zag een normale week eruit?',
        antwoord: 'Heel relaxed, eigenlijk altijd een vakantiegevoel. Na stagedagen en in de weekenden deed ik leuke dingen met mijn huisgenoot en met vrienden die je hier maakt.',
      },
      {
        vraag: 'Wat wou je dat iemand je vóór vertrek had verteld?',
        antwoord: 'Het regelen van vergunningen vond ik lastig. Ik wist niet goed wat ik allemaal nodig had. Achteraf had ik er beter een bedrijf voor kunnen inschakelen.',
      },
      {
        vraag: 'Wat heeft je het meest verrast?',
        antwoord: 'Hoe snel je hier mensen leert kennen. Je wordt eigenlijk een soort van verplicht om vrienden te maken — dat komt door het studentenhuis. Aan de ene kant is dat fijn, want je hebt altijd mensen om iets mee te doen of om mee te praten als het moeilijk is.',
      },
      {
        vraag: 'Wat is het ergste moment geweest en hoe loste je dat op?',
        antwoord: 'Een keer wilde de auto niet starten. We hadden alleen een e-sim, dus konden niet bellen. We stuurden de autoverhuur een WhatsApp en zij belden de wegenwacht. Een e-sim is dus minder handig — de wegenwacht neemt geen WhatsApp aan. En heimwee in de eerste paar weken; toen hielp het mij om juist niet veel met thuis te bellen en afleiding te zoeken bij vrienden.',
      },
      {
        vraag: 'Wat is je mooiste herinnering?',
        antwoord: 'Zonsondergang bekijken met mijn huisgenoot aan zee. Lekker met een spelletje of een frietje kijken hoe de zon in de zee zakt. De zonsondergangen zijn hier iedere dag anders, dat zie je in Nederland niet vaak. Het gaf mij een rustgevend gevoel — even aan niks denken.',
      },
    ],
    eigen_verhaal: [
      'Mijn weken voelden lichter dan mijn weken thuis. Niet omdat de stage minder was, maar omdat het ritme eromheen anders is. Een dag werk en daarna iets met huisgenoten. Geen agenda vol verplichtingen die door anderen voor je is ingevuld. Dat klinkt als vakantie, maar het is meer dan dat: het is werken en leven door elkaar laten lopen op een manier waarop het in Nederland zelden lukt.',
      'Wat ik onderschat heb is de papierwinkel vooraf. Vergunningen, VOG, afspraken met je stagebedrijf. Ik regelde het zelf en liep tegen onduidelijkheden aan die je liever niet eerst op het eiland ontdekt. Volgende keer zou ik er een bedrijf voor inschakelen of veel meer tijd vooraf nemen. Niet omdat het dan minder werk is, maar omdat je dan met een gerust hoofd kunt vertrekken.',
      'En over heimwee: het is er. Vooral de eerste weken. Wat hielp was iets dat tegen-intuïtief klinkt — minder met thuis bellen. Hoe meer je hangt aan het oude, hoe langer het duurt voordat het nieuwe ruimte krijgt. Het sociale leven hier komt vanzelf op je af; je moet het alleen toelaten.',
    ],
    tip: 'Regel je vergunningen, VOG en afspraken met je stagebedrijf goed vooraf — dat scheelt verrassingen op het eiland. En blijf niet op je kamer zitten: bezoek strandjes, restaurants, feestjes, doe dingen.',
    voorbeeld: false,
    laatste_update: '2026-04-22',
  },
  {
    slug: 'jayden',
    type: 'stage',
    voornaam: 'Jayden',
    opleiding: 'MBO4 Mediavormgeving',
    periode: 'februari tot juli 2026',
    sector: 'Mediavormgeving',
    bedrijf: 'Een stichting op Curaçao',
    wijk: 'Banda Bou',
    auto: false,
    budget: '±€500 per maand',
    accent: '#3EAD6E',
    foto: '/img/verhalen/jayden.jpg',
    quote: 'Het mooiste wat ik bewaar is het gezicht van mijn familie.',
    persoonlijk: {
      grootste_les: 'Een auto is wel echt handig om te hebben',
      moest_wennen: 'Hoe snel de tijd voorbij gaat',
    },
    pull_quotes: [
      'Het gezicht van mijn familie. Dat is wat ik bewaar.',
    ],
    gallery: [
      {
        src: '/img/verhalen/jayden-1.jpg',
        caption: 'Een schildpad-moment in een vrij weekend',
        layout: 'full',
      },
    ],
    qa: [
      {
        vraag: 'Had je een auto, en zou je die keuze weer zo maken?',
        antwoord: 'Ik had geen auto. Met de wetenschap van nu zou ik er wel een hebben, het is op Curaçao echt handig.',
      },
      {
        vraag: 'Hoe vond je je woning?',
        antwoord: 'Ik verbleef bij familie in Banda Bou. Dat werkte goed: geen huurkosten, geen woninggedoe vooraf te regelen, en een vertrouwde plek om naar terug te keren na elke werkdag.',
      },
      {
        vraag: 'Hoe zag een normale week eruit?',
        antwoord: 'Voor mij voelde de stage als normaal werk.',
      },
      {
        vraag: 'Wat wou je dat iemand je vóór vertrek had verteld?',
        antwoord: 'Dat een auto wel echt handig is om te hebben.',
      },
      {
        vraag: 'Wat heeft je het meest verrast?',
        antwoord: 'Hoe snel de tijd gaat. Voor je het weet zit je weer in het vliegtuig naar Nederland.',
      },
      {
        vraag: 'Wat is je mooiste herinnering?',
        antwoord: 'Het gezicht van mijn familie, op de momenten dat we samen waren.',
      },
    ],
    eigen_verhaal: [
      'Ik liep van februari tot juli 2026 stage in mediavormgeving bij een stichting op Curaçao. Anders dan veel stagiairs verbleef ik bij familie, in Banda Bou aan de westkant van het eiland. Geen huurkosten, geen studentenhuis, geen auto. Wel een vertrouwde plek om elke werkdag naar terug te keren.',
      'De stage zelf voelde als normaal werk. De grootste verrassing zat in iets anders. Hoe snel de tijd gaat. Voor je het weet zit je weer in het vliegtuig. Wat ik bewaar is niet één strand of één moment, maar het gezicht van mijn familie op de momenten dat we samen waren. Dat is iets wat een hotel of toeristische plek je niet kan geven.',
    ],
    tip: 'Kijk goed naar vervoer voordat je gaat. Een auto is wel echt handig om te hebben, helemaal als je niet bij familie of in het centrum verblijft.',
    voorbeeld: false,
    laatste_update: '2026-04-20',
  },
  {
    slug: 'jesse',
    type: 'stage',
    voornaam: 'Jesse',
    opleiding: 'HBO Toegepaste Psychologie',
    periode: 'februari tot juli 2026',
    sector: 'HR-consultancy',
    bedrijf: null,
    wijk: 'Salinja',
    auto: true,
    budget: '±€1.300 per maand',
    accent: '#1A7EC5',
    foto: '/img/verhalen/jesse.jpg',
    quote: 'Accepteer dat alles hier wat langzamer gaat. Het is heerlijk.',
    persoonlijk: {
      favoriete_spot: 'Spritz, vaste happy hour',
      grootste_les: 'Afstanden onderschat je snel, ook op een "klein" eiland',
      eerste_aankoop: 'Zonnebrand en muggenspray',
      moest_wennen: 'Het poko poko-tempo op het werk',
    },
    pull_quotes: [
      'Het eiland oogt klein, maar is toch nog best groot.',
      'Accepteer dat alles wat langzamer gaat. Het is heerlijk.',
    ],
    gallery: [
      {
        src: '/img/verhalen/gallery-huis.jpg',
        caption: 'Uitzicht tijdens een rondje in de pauze van m\'n stage',
        layout: 'full',
      },
      {
        src: '/img/verhalen/gallery-sociaal.jpg',
        caption: 'Vaste Spritz-avond met het huis',
        layout: 'half',
      },
      {
        src: '/img/verhalen/gallery-strand.jpg',
        caption: 'Vrije dag, geen plannen, wel zon',
        layout: 'half',
      },
    ],
    qa: [
      {
        vraag: 'Had je een auto, en zou je die keuze weer zo maken?',
        antwoord: 'Ja, een auto is hier bijna noodzakelijk. Ik heb er samen met mijn vriendin één gehuurd. Ik zou aanraden om er één te huren en eventueel te delen met huisgenoten. Dat drukt de kosten aanzienlijk.',
      },
      {
        vraag: 'Hoe vond je je woning?',
        antwoord: 'Via een stagebureau. Dat is het makkelijkst en vaak het meest betrouwbaar, alleen zitten er wel extra kosten aan vast. Ik zag veel woningoplichting langskomen op Facebook, dus ik zou daar altijd mee oppassen.',
      },
      {
        vraag: 'Hoe zag een normale week eruit?',
        antwoord: 'Vier dagen stage, één dag online les. Op vrije dagen was ik vaak op het strand te vinden, in het weekend naar de happy hours. Spritz happy hour was zeker mijn favoriet.',
      },
      {
        vraag: 'Wat wou je dat iemand je vóór vertrek had verteld?',
        antwoord: 'Ik wist dat ik een auto nodig had, maar ik wist niet dat het echt zo hard nodig was om dingen op het eiland te doen. Het eiland oogt "klein" maar is toch nog best groot, en lopen langs de wegen is gevaarlijk en warm.',
      },
      {
        vraag: 'Wat heeft je het meest verrast?',
        antwoord: 'De cultuur, in positieve zin. Onwijs veel aardige mensen, iedereen is vaak vrolijk en sociaal. Afhankelijk van wat je hier gaat doen kan je echt een geweldige tijd hebben. Belangrijk: het blijft een eigen land. Het is geen tropisch Nederland.',
      },
      {
        vraag: 'Wat is je mooiste herinnering?',
        antwoord: 'Lekker cocktails drinken met het huis tijdens happy hour na een stageweek.',
      },
    ],
    eigen_verhaal: [
      'Wat ik vooraf niet had verwacht: hoe snel een ander tempo iets met je doet. Niet de zon, niet het strand, niet de [happy hours](/happy-hours), hoe goed die ook waren. Het was iets in het ritme. Hier kun je niet snel even iets afhandelen op weg naar ergens anders. Of beter: het kan wel, het werkt alleen niet. Je leert in de eerste week dat "effe" geen Curaçaose categorie is.',
      'De mensen waren mijn tweede grote verrassing. Vrolijk, sociaal, oprecht geïnteresseerd in wie je bent en wat je komt doen. Maar het meest raakte me dat het meer is dan een vakantiestemming. Mensen werken hard, dragen hun eigen geschiedenis, hebben hun eigen problemen. Curaçao is geen tropisch Nederland. Het is [een eigen land](/leven) met een eigen taal, eigen humor en een eigen manier van met elkaar omgaan. Hoe sneller je dat ziet, hoe meer je eruit haalt.',
      'Achteraf zou ik niet veel anders doen. Wel iets meer met [lokale collega\'s](/werken) optrekken in plaats van alleen met andere stagiairs. Het verschil tussen die twee werelden is groter dan je denkt, en juist in de eerste weken kies je vanzelf voor wie naast je staat. Wat ik nog steeds bij me heb is iets simpels: dat "effe" geen universeel woord is. Soms is het beter om gewoon te wachten tot iets klaar is.',
    ],
    tip: 'Accepteer dat alles hier wat langzamer gaat. Het is heerlijk, maar dan moet je het wel laten.',
    voorbeeld: false,
    laatste_update: '2026-04-20',
  },
]

export function getVerhaal(slug) {
  return VERHALEN.find((v) => v.slug === slug)
}

export function getVerhalenByType(type) {
  return VERHALEN.filter((v) => v.type === type)
}
