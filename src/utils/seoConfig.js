// Central SEO configuration per route.
// Titles: max ~47 characters (suffix ` | StageStart` wordt automatisch in
// SEO.jsx toegevoegd). Volledige title in de SERP: max 60 characters.
// Descriptions: max 160 characters (target 140 to 155).

export const SITE = {
  baseUrl: 'https://stagestartcuracao.nl',
  siteName: 'StageStart Curaçao',
  titleSuffix: ' | StageStart',
  twitterHandle: '',
  defaultImage: '/og-image.png',
}

// eslint-disable-next-line no-unused-vars
export const SEO_CONFIG = {
  '/': {
    title: 'Stage Curaçao: onafhankelijke gids',
    description: 'Alles wat je écht moet weten voor je stage op Curaçao. Vergunning, kosten, wonen en eerste week. Geen bureau, geen commissie, officiële bronnen leidend.',
    type: 'website',
  },
  '/begin-hier': {
    title: 'Stage op Curaçao: 6 stappen in volgorde',
    description: 'Van vergunning tot eerste week in 6 stappen: wat je wanneer regelt over 8 weken. Voor iedereen die net besloten heeft of een stageplek heeft gevonden.',
  },
  '/voor-vertrek': {
    title: 'Checklist stage Curaçao: 6 tot 8 weken',
    description: 'VOG, stagevergunning, geboorteakte, verzekering, vlucht en DI Card. Concrete tijdlijn: begin 8 weken vooraf, anders loop je tegen deadlines aan.',
  },
  '/vergunning': {
    title: 'Stagevergunning Curaçao: €263, 4 maanden',
    description: 'Studie/stage vergunning of Verklaring van Rechtswege: twee informatiestromen uitgelegd. Legeskosten XCG 525 (±€263), verwerkingstijd 4 maanden, welke documenten.',
  },
  '/kosten': {
    title: 'Kosten stage Curaçao 2026: €1.100-1.500/mnd',
    description: 'Reken op €1.100-1.500 per maand plus ±€320 voor de vergunning. Plus wat je vaak vergeet: borgen, inrichting en stroom. Met DUO-inkomsten 2026.',
  },
  '/wonen': {
    title: 'Stagehuis Curaçao: kamer of appartement',
    description: 'Studentenhuis (€300-500), kamer (€350-450) of appartement (€700-1.100): welke huisvesting past bij jouw stage? Met vijf wijken vergeleken en fraudewaarschuwingen.',
  },
  '/auto': {
    title: 'Auto huren Curaçao voor je stage',
    description: 'Beslisboom op basis van waar je woont en werkt. Openbaar vervoer is minimaal. Reken op €400-600 per maand voor huur plus benzine.',
  },
  '/verzekering': {
    title: 'Zorgverzekering stage Curaçao 2026',
    description: 'Je NL-basisverzekering dekt spoedzorg tot Nederlands tarief. Voor je stagevergunning heb je extra internationale dekking nodig. Wat aanvullen, wat niet.',
  },
  '/eerste-week': {
    title: 'Eerste week op Curaçao: dag-voor-dag plan',
    description: 'Dag 1 tot 7 uitgeschreven: aankomst Hato, SIM-kaart, pinpas testen, boodschappen, eerste stagedag. Plus noodnummers zoals Forensys 9223 om direct op te slaan.',
  },
  '/leven': {
    title: 'Leven op Curaçao als stagiair',
    description: 'Cultuur, taal, eten, stranden en sociale codes op Curaçao. Wat je in maand één gaat voelen en hoe je het sneller thuis krijgt. Geen reisblog.',
  },
  '/werken': {
    title: 'Werken op Curaçao als stagiair',
    description: 'Poko poko, hiërarchie, feedback en netwerken op een eiland van 150.000 inwoners.',
  },
  '/veiligheid': {
    title: 'Veiligheid Curaçao: gedrag per situatie',
    description: 'Praktische gedragstips per situatie. Geen bangmakerij, wel alertheid. Forensys 9223 bij verkeersongeval.',
  },
  '/eten': {
    title: 'Eten op Curaçao: lokaal en betaalbaar',
    description: 'Truk\'i Pan, supermarkten en betaalbare restaurants. Waar locals eten in plaats van waar toeristen eten.',
  },
  '/happy-hours': {
    title: 'Happy hours Curaçao per dag',
    description: 'Happy hour overzicht per dag van de week. Cocktails, clubs en het sociale weekritme op het eiland.',
  },
  '/stranden': {
    title: 'Stranden Curaçao: 35 vergeleken',
    description: 'Van gezellige beachclubs tot verlaten baaien. Filter op afstand, entree en faciliteiten.',
  },
  '/weekend-trips': {
    title: 'Weekend trips Curaçao: dagtrips',
    description: 'Christoffel, Shete Boka, Klein Curaçao en grotten. Duur, kosten en moeilijkheid per trip.',
  },
  '/kaart': {
    title: 'Interactieve kaart Curaçao',
    description: 'Stranden, supermarkten, happy hours en wijken op de exacte locatie. Filter op categorie.',
  },
  '/faq': {
    title: 'FAQ stage Curaçao: alle antwoorden',
    description: 'Meer dan 20 antwoorden over vergunning, kosten, wonen, vervoer en gezondheid. Volgens de officiële bron.',
  },
  '/verhalen': {
    title: 'Verhalen van stagiairs op Curaçao',
    description: 'Echte ervaringen van stagiairs die jij binnenkort bent. Geen reclame, geen bureau-verhalen. Wat ze zelf hebben meegemaakt, met tips uit eerste hand.',
  },
  '/tussenjaar': {
    title: 'Tussenjaar werken op Curaçao',
    description: 'Tussenjaar werken op Curaçao: wat is anders dan stage, hoe zit het met verblijfsstatus, en waar vind je werk in horeca, hotels of duiken?',
  },
  '/bronnen': {
    title: 'Bronnen en verantwoording',
    description: 'Elke claim met bron, datum en gevoeligheid. Het reliability framework volledig transparant.',
  },
  '/contact': {
    title: 'Contact',
    description: 'Mail de redactie voor correcties, suggesties of samenwerkingen. Kleine redactie, duidelijke scope, reactie binnen enkele werkdagen.',
    type: 'website',
  },
  '/over': {
    title: 'Over ons: redactie en werkwijze',
    description: 'Wie staat er achter StageStart Curaçao? Onafhankelijk, geen commissies. Lees hoe wij content maken, controleren en bijwerken.',
    type: 'website',
  },
  '/partner-worden': {
    title: 'Partner worden',
    description: 'Informatie voor bedrijven die als partner vermeld willen worden. Voorwaarden, werkwijze en intakeformulier.',
    type: 'website',
  },
  '*': {
    title: 'Pagina niet gevonden',
    description: 'Deze pagina bestaat niet of is verplaatst. Vind via het menu of de kernpagina\'s wat je zoekt.',
    type: 'website',
  },
  '/startgids': {
    title: 'Gratis startgids stage Curaçao',
    description: 'De complete startgids op één pagina: vertrekchecklist, vergunning, budget, inpaklijst, eerste week en noodnummers. Opslaan als PDF met één klik.',
  },
  '/disclaimer': {
    title: 'Disclaimer en gebruiksvoorwaarden',
    description: 'Juridische disclaimer bij het gebruik van StageStart Curaçao. Informatieve gids, geen vervanging van officiële bronnen.',
    type: 'website',
  },
  '/privacy': {
    title: 'Privacyverklaring',
    description: 'Hoe StageStart Curaçao omgaat met persoonsgegevens van bezoekers. Transparant en volgens AVG.',
    type: 'website',
  },
  '/cookies': {
    title: 'Cookieverklaring',
    description: 'Welke cookies StageStart Curaçao gebruikt en waarom. Privacyvriendelijk en zonder trackers.',
    type: 'website',
  },
}
