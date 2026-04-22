# Plausible custom events

> Doel: meten welke pagina's bezoekers daadwerkelijk afmaken en op welke CTA's ze klikken. Zonder deze data is elk monetisatie- en UX-debat speculatief.

**Live sinds:** 22 april 2026

---

## Automatisch getrackt (via Plausible-script in `index.html`)

Deze events hoeven niet in code te staan — het Plausible-script `outbound-links.file-downloads.js` regelt ze.

| Event | Wat het meet |
|---|---|
| `Outbound Link: Click` | Klik op elke externe link (`<a href>` naar ander domein). Dekt: `/partner-worden` → partner website, Immigratiedienst-links, DUO, Justis, DI Card, etc. |
| `File Download` | Klik op de gratis startgids PDF (`/downloads/stagestart-startgids.pdf`) en andere downloads. |

---

## Custom events (via `src/utils/plausible.js` + `trackEvent()`)

Deze events vuren we expliciet af vanuit React-componenten.

### 1. `Scroll 75 Wonen`
**Waar:** `src/pages/Wonen.jsx` via `useScrollDepth('Scroll 75 Wonen')`
**Wanneer:** gebruiker scrolde ≥75% van `/wonen`
**Waarom:** `/wonen` heeft 18 secties. Als minder dan ~30% van bezoekers dit event triggert, heb je een UX-probleem (pagina is te lang of saai halverwege).

### 2. `Scroll 75 Kosten`
**Waar:** `src/pages/Kosten.jsx` via `useScrollDepth('Scroll 75 Kosten')`
**Wanneer:** gebruiker scrolde ≥75% van `/kosten`
**Waarom:** de budgetcalculator staat bovenaan, interessanter is of mensen ook daaronder lezen.

### 3. `Scroll 75 Vergunning`
**Waar:** `src/pages/Vergunning.jsx` via `useScrollDepth('Scroll 75 Vergunning')`
**Wanneer:** gebruiker scrolde ≥75% van `/vergunning`
**Waarom:** high-intent pagina (4,5 gemiddelde positie in GSC). Als mensen boven afhaken verliezen we ze vóór de "wat nu doen"-stappen.

### 4. `Partner Form Submit`
**Waar:** `src/pages/PartnerWorden.jsx` na succesvolle API-response
**Wanneer:** een potentiële partner stuurt het aanvraagformulier in
**Props:** `categorie` (huisvesting / vervoer / verzekering / support / etc.)
**Waarom:** sterkste signaal van monetisatie-intent. Als dit event ≥1x/maand vuurt, is er echte vraag.

### 5. `Tijdlijn Generate`
**Waar:** `src/pages/VoorVertrek.jsx` op klik "Genereer mijn tijdlijn"
**Wanneer:** gebruiker vult vertrekdatum in en klikt op generate
**Waarom:** proxy voor "serieus aan het plannen". Bezoekers die deze interactie doen zitten dichter bij de aanvraag-fase.

---

## Plausible dashboard configureren

Log in op Plausible, ga naar **Settings → Goals** en voeg per event een goal toe:

| Goal type | Event name |
|---|---|
| Custom event | `Scroll 75 Wonen` |
| Custom event | `Scroll 75 Kosten` |
| Custom event | `Scroll 75 Vergunning` |
| Custom event | `Partner Form Submit` |
| Custom event | `Tijdlijn Generate` |

Auto-tracked (`Outbound Link: Click` en `File Download`) staan meestal al standaard in het dashboard. Zo niet: ook als goal toevoegen.

---

## Wat je in 30 dagen hoopt te zien

Als baseline (22 april 2026) is 2 clicks / 140 impressions / 1,4% CTR, en 0 events (nog niet live):

| Metric | Target dag 30 |
|---|---|
| Pageviews `/wonen` per week | ≥ 25 |
| `Scroll 75 Wonen` rate | ≥ 30% van pageviews |
| Pageviews `/kosten` per week | ≥ 25 |
| `Scroll 75 Kosten` rate | ≥ 35% |
| `Tijdlijn Generate` per week | ≥ 3 |
| `Outbound Link: Click` per week | ≥ 10 |
| `Partner Form Submit` per maand | ≥ 1 |

Zijn de scroll-rates onder 30%? Dan is de pagina te lang of de intro niet scherp genoeg. Geen outbound clicks? Dan vinden bezoekers onze externe verwijzingen niet relevant (of niet zichtbaar).

---

## Toekomstige events (niet nu nodig)

- `Kosten Calculator Interaction` — elke slider-wijziging, geeft zicht op welke posten mensen aanpassen
- `Wijk Detail Open` — welke wijk klikt men het meest open?
- `Verhaal Read` — welk verhaal wordt het meest gelezen?

Deze events voegen we pas toe als de eerste 5 events in een patroon vallen dat meer detail vraagt.
