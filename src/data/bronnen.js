// Masterbron-bestand, single source of truth voor alle harde claims.
// Volgens het Reliability Framework: elke claim met invloed op geld, documenten,
// gezondheid, verzekering of verblijfsstatus moet hier staan met primaire bron.

// REDACTIONELE BESLUITREGEL (vastgesteld 16 april 2026):
// Als de officiële bron genuanceerder is dan de praktijkervaring,
// wint de officiële bron in de hoofdtekst.
// Praktijkervaring mag alleen terugkomen als aparte vertaling onder een
// ervarings- of praktijklabel.
//
// Voorbeeld: VRW vs stagevergunning, de Immigratiedienst publiceert hier
// twee aparte informatiestromen voor. Op de site beschrijven we ze daarom
// ook apart, met de praktijk-interpretatie als gelabeld extra blok.

export const REDACTIONELE_REGEL = {
  titel: 'Officiële bron wint',
  uitleg: 'Bij conflict tussen praktijkervaring en officiële bron, presenteren we de officiële formulering in de hoofdtekst. Praktijkervaring komt apart terug als gelabeld blok.',
  vastgesteld: '2026-04-16',
}

export const BRONSOORTEN = {
  officieel: {
    label: 'Officieel bevestigd',
    omschrijving: 'Direct uit primaire bron (overheid, immigratiedienst).',
    kleur: '#1A7EC5',
  },
  richtlijn: {
    label: 'Praktische richtlijn',
    omschrijving: 'Indicatie of vuistregel, geen wet.',
    kleur: '#F2B517',
  },
  ervaring: {
    label: 'Ervaringsinzicht',
    omschrijving: 'Gebaseerd op verhalen van stagiairs.',
    kleur: '#9CA3AF',
  },
}

export const GEVOELIGHEID = {
  hoog: { label: 'Hoog', controlefrequentie: 'Elke 1-2 maanden' },
  middel: { label: 'Middel', controlefrequentie: 'Elke 3 maanden' },
  laag: { label: 'Laag', controlefrequentie: 'Elke 6 maanden' },
}

export const PRIMAIRE_BRONNEN = {
  immigratiedienst: {
    naam: 'Immigratiedienst Curaçao',
    url: 'https://immigrationcur.org/dep/studie-stage/',
  },
  vanRechtswege: {
    naam: 'Immigratiedienst, Verklaring van Rechtswege',
    url: 'https://immigrationcur.org/dep/van-rechtswege/',
  },
  rijksoverheid: {
    naam: 'Rijksoverheid',
    url: 'https://www.rijksoverheid.nl/onderwerpen/onderwijs-en-internationalisering/vraag-en-antwoord/checklist-studeren-in-het-buitenland',
  },
  duo: {
    naam: 'DUO',
    url: 'https://duo.nl',
  },
  justis: {
    naam: 'Justis (VOG)',
    url: 'https://www.justis.nl/producten/vog',
  },
}

export const BRONNEN = [
  // ─────── VOOR VERTREK / VERGUNNING ───────
  {
    pagina: 'voor-vertrek',
    claim: 'Legeskosten stagevergunning',
    waarde: 'XCG 525,00',
    bron: PRIMAIRE_BRONNEN.immigratiedienst,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'Te betalen aan Maduro & Curiel\'s Bank. Betalingskenmerk: volledige naam + geboortedatum.',
  },
  {
    pagina: 'voor-vertrek',
    claim: 'Geboorteakte vereist',
    waarde: 'Ja, niet ouder dan 1 jaar',
    bron: PRIMAIRE_BRONNEN.immigratiedienst,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'Origineel moet ter inzage worden getoond.',
  },
  {
    pagina: 'voor-vertrek',
    claim: 'VOG vereist',
    waarde: 'Ja, niet ouder dan 3 maanden',
    bron: PRIMAIRE_BRONNEN.immigratiedienst,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'VOG van laatste woonplaats. Aanvragen via Justis (NL) duurt 4-6 weken.',
  },
  {
    pagina: 'voor-vertrek',
    claim: 'Kosten VOG aanvraag',
    waarde: '€ 41,35',
    bron: PRIMAIRE_BRONNEN.justis,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
  },
  {
    pagina: 'voor-vertrek',
    claim: 'KvK-uittreksel stagebedrijf vereist',
    waarde: 'Ja, niet ouder dan 6 maanden',
    bron: PRIMAIRE_BRONNEN.immigratiedienst,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'Bewijs van bestaan stagebedrijf op Curaçao.',
  },
  {
    pagina: 'voor-vertrek',
    claim: 'Bewijs van inschrijving school vereist',
    waarde: 'Ja',
    bron: PRIMAIRE_BRONNEN.immigratiedienst,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
  },
  {
    pagina: 'voor-vertrek',
    claim: 'Polisblad ziektekostenverzekering vereist',
    waarde: 'Ja, met dekking Curaçao',
    bron: PRIMAIRE_BRONNEN.immigratiedienst,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
  },
  {
    pagina: 'voor-vertrek',
    claim: 'Stageovereenkomst vereist',
    waarde: 'Ja, getekend door stagiair, school en stagebedrijf',
    bron: PRIMAIRE_BRONNEN.immigratiedienst,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
  },
  {
    pagina: 'voor-vertrek',
    claim: 'Indieningswijze aanvraag',
    waarde: 'Per e-mail naar intake@immigrationcur.org',
    bron: PRIMAIRE_BRONNEN.immigratiedienst,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'Alle documenten als gescande PDF in één e-mail. Onderwerp: volledige naam + geboortedatum.',
  },
  {
    pagina: 'voor-vertrek',
    claim: 'Verwerkingstijd aanvraag',
    waarde: '4 maanden',
    bron: PRIMAIRE_BRONNEN.immigratiedienst,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'Officiële maximale beslistermijn van Toelatingsorganisatie.',
  },

  // ─────── VERGUNNING, terminologie ───────
  {
    pagina: 'vergunning',
    claim: 'Studie/stage informatiestroom (officieel)',
    waarde: 'Aparte officiële pagina van Immigratiedienst voor studie en stage in Curaçao',
    bron: PRIMAIRE_BRONNEN.immigratiedienst,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'Beschrijft procedure, vereiste documenten, legeskosten XCG 525 en verwerkingstijd 4 maanden voor studie/stage-aanvragen.',
  },
  {
    pagina: 'vergunning',
    claim: 'Verklaring van Rechtswege informatiestroom (officieel)',
    waarde: 'Aparte officiële pagina van Immigratiedienst voor de Verklaring van Rechtswege',
    bron: PRIMAIRE_BRONNEN.vanRechtswege,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'Beschrijft de officiële erkenning dat bepaalde personen (waaronder meerderjarige Nederlanders) automatisch verblijfsrecht hebben in Curaçao.',
  },
  {
    pagina: 'vergunning',
    claim: 'Praktische relevantie voor Nederlandse stagiairs',
    waarde: 'Beide informatiestromen kunnen relevant zijn, controleer welke route op jouw situatie van toepassing is',
    bronsoort: 'richtlijn',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'De Immigratiedienst publiceert deze als aparte informatiestromen. Controleer altijd zelf welke procedure en vereisten in jouw situatie gelden.',
  },

  // ─────── TUSSENJAAR / WERKEN ZONDER STAGE ───────
  {
    pagina: 'tussenjaar',
    claim: 'Vrije termijn voor Nederlanders zonder verklaring van rechtswege',
    waarde: 'Maximaal 6 maanden binnen 1 jaar, voor verblijf zonder reeds afgegeven verklaring',
    bron: PRIMAIRE_BRONNEN.vanRechtswege,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-20',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'Geldt voor verblijf, niet automatisch voor werk. Voor werken moet apart de werkroute via verklaring van rechtswege gecheckt worden.',
  },
  {
    pagina: 'tussenjaar',
    claim: 'Werken via Verklaring van Rechtswege, categorie Werken/Eenmanszaak',
    waarde: 'Aparte werkcategorie binnen verklaring van rechtswege',
    bron: PRIMAIRE_BRONNEN.vanRechtswege,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-20',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'Werk loopt niet via aparte werkvergunning maar via verklaring van rechtswege. De officiële site noemt expliciet de categorie Werken/Eenmanszaak. Reken er niet op dat toeristenstatus en betaald lokaal werk automatisch samengaan.',
  },
  {
    pagina: 'tussenjaar',
    claim: 'DI Card verplicht voor alle internationale reizigers',
    waarde: 'Invullen binnen 7 dagen voor vertrek via dicardcuracao.com, gratis',
    bron: { naam: 'Curaçao Digital Immigration Card', url: 'https://dicardcuracao.com' },
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-20',
    gevoeligheid: 'middel',
    status: 'actief',
    notitie: 'Inwoners Curaçao zijn uitgezonderd. De DI Card is een aankondiging van aankomst, geen vergunning voor verblijf of werk.',
  },
  {
    pagina: 'vergunning',
    claim: 'Wachten in Curaçao mogelijk',
    waarde: 'Ja voor Nederlandse en Amerikaanse nationaliteit',
    bron: PRIMAIRE_BRONNEN.vanRechtswege,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'Personen van NL/USA-nationaliteit kunnen de 4 maanden beslistermijn op het eiland afwachten.',
  },

  // ─────── DUO ───────
  {
    pagina: 'kosten',
    claim: 'OV-vergoeding DUO buitenland',
    waarde: '€ 110,95 per maand (2026)',
    bron: PRIMAIRE_BRONNEN.duo,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
    notitie: 'Studentenreisproduct minimaal 2 maanden voor vertrek stopzetten via Mijn DUO.',
  },
  {
    pagina: 'kosten',
    claim: 'Basisbeurs uitwonend HBO/WO',
    waarde: '€ 324,52 per maand (2026)',
    bron: PRIMAIRE_BRONNEN.duo,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
  },

  // ─────── PRAKTISCHE RICHTLIJNEN ───────
  {
    pagina: 'kosten',
    claim: 'Maandelijkse kosten stagiair',
    waarde: '€ 1.100 - 1.500',
    bronsoort: 'richtlijn',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
    notitie: 'Indicatie op basis van huur, auto, eten, verzekering, vrije tijd.',
  },
  {
    pagina: 'kosten',
    claim: 'Eenmalige opstartkosten',
    waarde: '€ 1.700 - 3.300',
    bronsoort: 'richtlijn',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
    notitie: 'Vlucht, vergunning, borg woning (1-1,5x huur), borg auto (€500-1000), inrichting.',
  },
  {
    pagina: 'wonen',
    claim: 'Huur kamer studentenhuis',
    waarde: '€ 375 - 475 per maand',
    bronsoort: 'richtlijn',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
    notitie: 'Indicatie op basis van aanbod 2024-2025. Utilities (G/W/L) ±€50 extra.',
  },
  {
    pagina: 'auto',
    claim: 'Autohuur per maand',
    waarde: '€ 400 - 475',
    bronsoort: 'richtlijn',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
    notitie: 'Circa ANG 800-950/mnd inclusief WA-verzekering.',
  },
  {
    pagina: 'eerste-week',
    claim: 'Nederlands rijbewijs in Curaçao',
    waarde: 'Geldig, geen omzetting nodig voor stage',
    bron: PRIMAIRE_BRONNEN.rijksoverheid,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
    notitie: 'NL rijbewijs is geldig in Curaçao. Omzetten alleen relevant bij langdurig verblijf (>6 mnd) of registratie eigen voertuig.',
  },

  // ─────── KOSTEN, eenmalig + opstart ───────
  {
    pagina: 'kosten',
    claim: 'Retourticket Amsterdam-Curaçao',
    waarde: '€ 600 - 1.000',
    bronsoort: 'richtlijn',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
    notitie: 'Range op basis van seizoen en boekingsmoment. Piek: dec-jan en schoolvakanties.',
  },
  {
    pagina: 'kosten',
    claim: 'Borg woning',
    waarde: 'Meestal 1 tot 1,5 keer de maandhuur',
    bronsoort: 'richtlijn',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
    notitie: 'Krijg je terug aan het einde van het contract als alles in orde is.',
  },
  {
    pagina: 'kosten',
    claim: 'Borg auto',
    waarde: '€ 500 - 1.000',
    bronsoort: 'richtlijn',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
    notitie: 'Verschilt per verhuurder en type voertuig.',
  },
  {
    pagina: 'kosten',
    claim: 'Caribbean Guilder (XCG) wisselkoers',
    waarde: '1 EUR ≈ 2,00 XCG',
    bronsoort: 'richtlijn',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
    notitie: 'Sinds 31 maart 2025 gebruikt Curaçao de Caribbean Guilder, gekoppeld aan de USD. Controleer dagkoers via je bank.',
  },

  // ─────── EERSTE WEEK, rijbewijs ───────
  {
    pagina: 'eerste-week',
    claim: 'DI Card (Digital Immigration Card)',
    waarde: 'Verplicht voor alle bezoekers, gratis via dicardcuracao.com',
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'Invullen binnen 7 dagen voor vertrek. Derde-partij websites die geld vragen zijn niet officieel.',
  },

  // ─────── ERVARINGSINZICHTEN ───────
  {
    pagina: 'leven',
    claim: 'Cultuurshock periode',
    waarde: 'Vaak rond week 3-6',
    bronsoort: 'ervaring',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'laag',
    status: 'actief',
    notitie: 'Op basis van verhalen van stagiairs.',
  },
  {
    pagina: 'kosten',
    claim: 'Eerste maand duurder',
    waarde: '€ 500 - 800 extra',
    bronsoort: 'ervaring',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'laag',
    status: 'actief',
    notitie: 'Inrichting, eerste boodschappen, SIM, eenmalige uitgaven.',
  },
  {
    pagina: 'eerste-week',
    claim: 'Bankrekening openen op Curaçao',
    waarde: 'Doorlooptijd 2-4 maanden',
    bronsoort: 'ervaring',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'laag',
    status: 'actief',
    notitie: 'Niet altijd nodig als je betalingen via NL regelt. Begin er vroeg mee als je het wel wilt.',
  },
  {
    pagina: 'wonen',
    claim: 'Stroom (airco) als verborgen kostenpost',
    waarde: 'Kan honderden guldens per maand bedragen',
    bronsoort: 'ervaring',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'laag',
    status: 'actief',
    notitie: 'Vraag bij ondertekenen contract expliciet of stroom inbegrepen is en of er een verbruikslimiet geldt.',
  },
]

// Helper: zoek alle bronnen voor een pagina
export function bronnenVoorPagina(pagina) {
  return BRONNEN.filter(b => b.pagina === pagina)
}

// Helper: laatste check-datum site-breed
export function laatsteUpdate() {
  const datums = BRONNEN.map(b => b.laatsteCheck).sort()
  return datums[datums.length - 1]
}
