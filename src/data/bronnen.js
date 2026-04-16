// Masterbron-bestand — single source of truth voor alle harde claims.
// Volgens het Reliability Framework: elke claim met invloed op geld, documenten,
// gezondheid, verzekering of verblijfsstatus moet hier staan met primaire bron.

export const BRONSOORTEN = {
  officieel: {
    label: 'Officieel bevestigd',
    omschrijving: 'Direct uit primaire bron (overheid, immigratiedienst).',
    kleur: '#1A7EC5',
  },
  richtlijn: {
    label: 'Praktische richtlijn',
    omschrijving: 'Indicatie of vuistregel — geen wet.',
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
    naam: 'Immigratiedienst — Verklaring van Rechtswege',
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

  // ─────── VERGUNNING — terminologie ───────
  {
    pagina: 'vergunning',
    claim: 'Verklaring van Rechtswege = stagevergunning',
    waarde: 'Twee benamingen voor dezelfde wettelijke vergunning',
    bron: PRIMAIRE_BRONNEN.vanRechtswege,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'hoog',
    status: 'actief',
    notitie: 'In de praktijk geen verschil. VRW is de officiële term voor de verblijfsvergunning die nodig is om langer dan 6 maanden te verblijven, te werken of stage te lopen.',
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
    waarde: 'Geldig — geen omzetting nodig voor stage',
    bron: PRIMAIRE_BRONNEN.rijksoverheid,
    bronsoort: 'officieel',
    laatsteCheck: '2026-04-16',
    gevoeligheid: 'middel',
    status: 'actief',
    notitie: 'NL rijbewijs is geldig in Curaçao. Omzetten alleen relevant bij langdurig verblijf (>6 mnd) of registratie eigen voertuig.',
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
