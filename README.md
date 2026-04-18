# StageStart Curaçao

> Onafhankelijke, bronvaste gids voor Nederlandse stagiairs op Curaçao.

**Live:** [stagestartcuracao.nl](https://stagestartcuracao.nl)

## Wat is dit

StageStart Curaçao is een React-website die Nederlandse studenten helpt met de voorbereiding op een stage in Curaçao. De site is geen bureau en geen commerciële dienst — alle informatie is gratis en gebaseerd op primaire bronnen (Immigratiedienst Curaçao, Rijksoverheid, DUO).

## Reliability Framework

De site werkt volgens een redactioneel framework dat eist dat elke claim met invloed op geld, documenten, gezondheid, verzekering of verblijfsstatus rust op een primaire bron. Drie claim-types worden visueel onderscheiden:

- **Officieel bevestigd** — direct uit primaire bron
- **Praktische richtlijn** — indicatie of vuistregel
- **Ervaringsinzicht** — gebaseerd op verhalen van stagiairs

Alle claims zijn intern gedocumenteerd in `src/data/bronnen.js` en transparant zichtbaar op `/bronnen`.

## Tech stack

- React 18 + Vite 5
- React Router 6
- Tailwind CSS 3
- Leaflet + react-leaflet (interactieve kaart)
- Hosted op Vercel

## Lokaal ontwikkelen

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy

```bash
vercel --prod
```

## Pagina-overzicht

### Tier 1 — kern stage-gids
- `/begin-hier` — eerste stappen
- `/voor-vertrek` — 13-stappen vergunningsprocedure + tijdlijn-generator
- `/vergunning` — uitleg Verklaring van Rechtswege = stagevergunning
- `/kosten` — budgetcalculator + officiële bedragen
- `/wonen` — 5 wijken vergeleken
- `/auto` — beslisboom auto wel/niet
- `/eerste-week` — dag-voor-dag planning

### Tier 2 — naast je stage
- `/werken` — werkcultuur op Curaçao
- `/leven` — praktisch leven op het eiland
- `/veiligheid` — gedragsadviezen + noodnummers
- `/eten` — lokaal eten + supermarkten
- `/happy-hours` — sociaal weekritme
- `/stranden` — 36 stranden met filters
- `/weekend-trips` — uitstapjes
- `/kaart` — interactieve kaart met 100+ locaties
- `/faq` — veelgestelde vragen
- `/bronnen` — transparantie-pagina (alle claims + bronnen)

## Project-structuur

```
src/
├── components/
│   ├── Nav.jsx
│   ├── Footer.jsx
│   ├── PageHero.jsx
│   ├── ClaimLabel.jsx       # Reliability layer
│   ├── LastChecked.jsx       # Reliability layer
│   ├── Bron.jsx              # Reliability layer
│   ├── ScrollToTop.jsx
│   ├── BackToTop.jsx
│   └── WeatherWidget.jsx
├── data/
│   ├── bronnen.js            # Master source-of-truth voor alle claims
│   ├── locaties.js           # 100+ locaties voor kaart
│   └── wijkCoords.js         # Wijk-coördinaten lookup
├── pages/
│   └── (16 pagina's)
├── App.jsx
├── main.jsx
└── index.css

public/
└── img/
    └── (foto's per pagina)
```

## Redactioneel principe

Als een claim invloed heeft op geld, documenten, gezondheid, verzekering of verblijfsstatus, dan moet die op een officiële bron rusten.

**Bronhiërarchie:**
- **Laag A** (officieel, leidend): Immigratiedienst Curaçao, Rijksoverheid, DUO, Justis
- **Laag B** (praktische context): JoHo, betrouwbare voorbereidingsbronnen
- **Laag C** (ervaring, alleen intern): stagebureaus, blogs, gesprekken met stagiairs

## Wat we niet publiceren

- Harde wijkranglijsten qua veiligheid
- Stellige criminaliteitsclaims per buurt
- Onduidelijke belasting- of verzekeringsadviezen
- Juridische claims op basis van blogs
- Inhoud die commerciële partijen anders formuleren dan officiële bronnen, zonder duidelijke nuancering

## Licentie

Privé-project. Alle rechten voorbehouden tenzij anders aangegeven.
