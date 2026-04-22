# Plausible events en goals

> Doel: meten welke pagina's bezoekers daadwerkelijk afmaken en op welke CTA's ze klikken. Zonder deze data is elk monetisatie- en UX-debat speculatief.

**Live sinds:** 22 april 2026

---

## 1. Automatisch getrackt (via Plausible-script in `index.html`)

Deze events hoeven niet in code te staan — het Plausible-script `outbound-links.file-downloads.js` regelt ze.

| Event | Wat het meet |
|---|---|
| `Outbound Link: Click` | Klik op elke externe link (`<a href>` naar ander domein). Dekt: Immigratiedienst, DUO, Justis, DI Card, toekomstige partners. |
| `File Download` | Klik op de gratis startgids PDF (`/downloads/stagestart-startgids.pdf`) en andere downloads. |

---

## 2. Scroll Depth goals (Plausible native — geen code)

In Plausible Settings → Goals → Add goal → kies **Scroll Depth** (niet Custom event).

| Page path | Threshold | Waarom |
|---|---|---|
| `/wonen` | 75% | 18 secties — als <30% haalt, is pagina te lang of intro niet scherp |
| `/kosten` | 75% | Budgetcalculator staat boven; boeiend of mensen ook onder lezen |
| `/vergunning` | 75% | High-intent pagina (gem. positie 4,5 in GSC) — halen we de "wat nu"-stappen? |

Plausible tracked dit automatisch voor de default scripts (inclusief de `outbound-links.file-downloads`-variant die wij gebruiken). Geen custom JS nodig.

---

## 3. Custom events (via `src/utils/plausible.js` + `trackEvent()`)

Deze events vuren we expliciet af vanuit React-componenten omdat het button-clicks zijn, geen scroll-behaviour.

### `Partner Form Submit`
**Waar:** `src/pages/PartnerWorden.jsx` na succesvolle API-response
**Wanneer:** een potentiële partner stuurt het aanvraagformulier in
**Props:** `categorie` (huisvesting / vervoer / verzekering / support / etc.)
**Waarom:** sterkste signaal van monetisatie-intent. Als dit event ≥1x/maand vuurt, is er echte vraag.

**Goal-type in Plausible:** Custom event
- Custom properties: **AAN** (voor `categorie`-filter)
- Display name: optioneel *"Partner aanvraag"*

### `Tijdlijn Generate`
**Waar:** `src/pages/VoorVertrek.jsx` op klik "Genereer mijn tijdlijn"
**Wanneer:** gebruiker vult vertrekdatum in en klikt op generate
**Waarom:** proxy voor "serieus aan het plannen".

**Goal-type in Plausible:** Custom event
- Custom properties: UIT
- Display name: optioneel *"Tijdlijn gegenereerd"*

---

## Plausible dashboard — welke goals aanmaken

Log in op Plausible, ga naar **Settings → Goals** en voeg toe:

| Goal type | Specificatie |
|---|---|
| Scroll Depth | threshold 75, page path `/wonen` |
| Scroll Depth | threshold 75, page path `/kosten` |
| Scroll Depth | threshold 75, page path `/vergunning` |
| Custom event | `Partner Form Submit` (custom properties AAN) |
| Custom event | `Tijdlijn Generate` (custom properties UIT) |

Outbound links en file downloads staan meestal al automatisch in het dashboard onder "Top Pages" → "Goals" zodra er events binnenkomen.

---

## Wat je in 30 dagen hoopt te zien

Baseline (22 april 2026): 2 clicks / 140 impressions / 1,4% CTR / 0 events.

| Metric | Target dag 30 |
|---|---|
| Pageviews `/wonen` per week | ≥ 25 |
| Scroll Depth 75% op `/wonen` | ≥ 30% van pageviews |
| Pageviews `/kosten` per week | ≥ 25 |
| Scroll Depth 75% op `/kosten` | ≥ 35% |
| `Tijdlijn Generate` per week | ≥ 3 |
| `Outbound Link: Click` per week | ≥ 10 |
| `Partner Form Submit` per maand | ≥ 1 |

Zijn scroll-rates onder 30%? Pagina is te lang of intro niet scherp. Geen outbound clicks? Verwijzingen niet relevant of niet zichtbaar.

---

## Toekomstige events (niet nu nodig)

- `Kosten Calculator Interaction` — elke slider-wijziging
- `Wijk Detail Open` — welke wijk klikt men meest open?
- `Verhaal Read` — welk verhaal wordt het meest gelezen?

Pas toevoegen als de eerste 5 goals een patroon laten zien dat meer detail vraagt.
