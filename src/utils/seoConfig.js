// Central SEO configuration per route.
// Titles: max 60 characters (target 50 to 55).
// Descriptions: max 160 characters (target 140 to 155).

export const SITE = {
  baseUrl: 'https://stagestartcuracao.nl',
  siteName: 'StageStart Curaçao',
  twitterHandle: '',
  defaultImage: '/og-image.png',
}

// eslint-disable-next-line no-unused-vars
export const SEO_CONFIG = {
  '/': {
    title: 'Stage Curaçao: onafhankelijke gids voor stagiairs',
    description: 'Alles wat je écht moet weten voor je stage op Curaçao. Vergunning, kosten, wonen en eerste week. Geen bureau, geen commissie, officiële bronnen leidend.',
    type: 'website',
  },
  '/begin-hier': {
    title: 'Stage op Curaçao: 6 stappen in de juiste volgorde',
    description: 'Van vergunning tot eerste week: de logische volgorde zodat je niets vergeet. Voor iedereen die net besloten heeft of een stageplek heeft gevonden.',
  },
  '/voor-vertrek': {
    title: 'Stage Curaçao checklist: wat regel je vóór vertrek?',
    description: 'VOG, stagevergunning, geboorteakte, verzekering, vlucht en DI Card. Met tijdlijn: begin 8 weken voor vertrek, anders loop je in de problemen.',
  },
  '/vergunning': {
    title: 'Stagevergunning Curaçao 2026: kosten, documenten, tijdlijn',
    description: 'Studie/stage vergunning versus Verklaring van Rechtswege: twee informatiestromen uitgelegd. Legeskosten XCG 525 (±€263), verwerkingstijd 4 maanden.',
  },
  '/kosten': {
    title: 'Stage Curaçao kosten: wat betaal je echt per maand?',
    description: 'Reken op €1.100-1.500 per maand plus ±€320 voor de vergunning. Plus wat je vaak vergeet: borgen, inrichting en stroom. Met DUO-inkomsten 2026.',
  },
  '/wonen': {
    title: 'Stagehuis Curaçao: wijken, huurprijzen en studentenhuizen',
    description: 'Vijf wijken waar stagiairs meestal terechtkomen: Pietermaai, Jan Thiel, Piscadera, Salinja en Bapor Kibra. Huurprijzen, bereikbaarheid en fraudewaarschuwingen.',
  },
  '/auto': {
    title: 'Auto huren Curaçao voor je stage: heb je er echt een nodig?',
    description: 'Beslisboom op basis van waar je woont en werkt. Openbaar vervoer is minimaal. Reken op €400-600 per maand voor huur plus benzine.',
  },
  '/verzekering': {
    title: 'Zorgverzekering stage Curaçao: wat dekt NL en wat niet?',
    description: 'Je basisverzekering dekt spoedzorg tot NL-tarief. Voor de vergunning heb je extra internationale dekking nodig. Wat je wel en niet moet regelen.',
  },
  '/eerste-week': {
    title: 'Eerste week op Curaçao: dag-voor-dag plan voor stagiairs',
    description: 'Aankomst, SIM-kaart, boodschappen, pinpas testen, stagedag 1. Plus belangrijke nummers om meteen op te slaan, zoals Forensys 9223.',
  },
  '/leven': {
    title: 'Leven op Curaçao als stagiair',
    description: 'Stranden, eten, praktische tips en gewoontes. Ondersteunend bij je stage, geen reisblog.',
  },
  '/werken': {
    title: 'Werken op Curaçao: zo anders dan Nederland',
    description: 'Poko poko, hiërarchie, feedback en netwerken op een eiland van 150.000 inwoners.',
  },
  '/veiligheid': {
    title: 'Veiligheid Curaçao: gedrag per situatie',
    description: 'Praktische gedragstips per situatie. Geen bangmakerij, wel alertheid. Forensys 9223 bij verkeersongeval.',
  },
  '/eten': {
    title: 'Eten op Curaçao: lokaal, goedkoop, lekker',
    description: 'Truk\'i Pan, supermarkten en betaalbare restaurants. Waar locals eten in plaats van waar toeristen eten.',
  },
  '/happy-hours': {
    title: 'Happy hours Curaçao per dag',
    description: 'Happy hour overzicht per dag van de week. Cocktails, clubs en het sociale weekritme op het eiland.',
  },
  '/stranden': {
    title: 'Stranden Curaçao: meer dan 35 vergeleken',
    description: 'Van gezellige beachclubs tot verlaten baaien. Filter op afstand, entree en faciliteiten.',
  },
  '/weekend-trips': {
    title: 'Weekend trips Curaçao: dagtrips en uitstapjes',
    description: 'Christoffel, Shete Boka, Klein Curaçao en grotten. Duur, kosten en moeilijkheid per trip.',
  },
  '/kaart': {
    title: 'Interactieve kaart Curaçao: alles op één plek',
    description: 'Stranden, supermarkten, happy hours en wijken op de exacte locatie. Filter op categorie.',
  },
  '/faq': {
    title: 'Veelgestelde vragen over stage op Curaçao',
    description: 'Meer dan 20 antwoorden over vergunning, kosten, wonen, vervoer en gezondheid. Volgens de officiële bron.',
  },
  '/bronnen': {
    title: 'Bronnen en verantwoording van StageStart',
    description: 'Elke claim met bron, datum en gevoeligheid. Het reliability framework volledig transparant.',
  },
  '/contact': {
    title: 'Contact met StageStart Curaçao',
    description: 'Mail de redactie voor correcties, suggesties of samenwerkingen. Kleine redactie, duidelijke scope, reactie binnen enkele werkdagen.',
    type: 'website',
  },
  '/over': {
    title: 'Over StageStart: redactie en werkwijze',
    description: 'Wie staat er achter StageStart Curaçao? Onafhankelijk, geen commissies. Lees hoe wij content maken, controleren en bijwerken.',
    type: 'website',
  },
  '/partner-worden': {
    title: 'Partner worden van StageStart Curaçao',
    description: 'Informatie voor bedrijven die als partner vermeld willen worden. Voorwaarden, werkwijze en intakeformulier.',
    type: 'website',
  },
  '*': {
    title: 'Pagina niet gevonden | StageStart Curaçao',
    description: 'Deze pagina bestaat niet of is verplaatst. Vind via het menu of de kernpagina\'s wat je zoekt.',
    type: 'website',
  },
  '/startgids': {
    title: 'Gratis startgids voor stage op Curaçao',
    description: 'De complete startgids op één pagina: vertrekchecklist, vergunning, budget, inpaklijst, eerste week en noodnummers. Opslaan als PDF met één klik.',
  },
  '/disclaimer': {
    title: 'Disclaimer en gebruiksvoorwaarden',
    description: 'Juridische disclaimer bij het gebruik van StageStart Curaçao. Informatieve gids, geen vervanging van officiële bronnen.',
    type: 'website',
  },
  '/privacy': {
    title: 'Privacyverklaring StageStart Curaçao',
    description: 'Hoe StageStart Curaçao omgaat met persoonsgegevens van bezoekers. Transparant en volgens AVG.',
    type: 'website',
  },
  '/cookies': {
    title: 'Cookieverklaring StageStart Curaçao',
    description: 'Welke cookies StageStart Curaçao gebruikt en waarom. Privacyvriendelijk en zonder trackers.',
    type: 'website',
  },
}
