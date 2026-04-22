# StageStart Curaçao — Baseline voor 90-dagen plan

> Doel: zonder deze cijfers kun je op dag 90 niet bewijzen of het plan gelukt is. Vul dit document vóór dag 1 in en werk het maandelijks bij.

**Baseline vastgelegd op:** 22 april 2026 (pré-prerender deploy)
**Bron:** Google Search Console screenshots, periode 17-04-2026 t/m 20-04-2026
**Volgende update:** 22 mei 2026 (+30 dagen)

---

## 1. Google Search Console — baseline-snapshot

Bronperiode: **17 april 2026 t/m 20 april 2026** (4 dagen, dagelijkse granulariteit).
Site is live sinds Q1 2026, dit is vrijwel de volledige periode dat GSC data beschikbaar was op moment van baseline-capture.

### Totalen (over 17-20 april 2026)

| Metric | Waarde |
|---|---|
| Totaal clicks | **2** |
| Totaal impressions | **140** |
| Gemiddelde CTR | **1,4%** |
| Gemiddelde positie | **6,4** |

> **Observatie:** dit is zeer jonge data. Twee kliks in vier dagen is te dun voor betrouwbare CTR-conclusies op pagina-niveau, maar bruikbaar als directionele baseline om tegen te meten. Over 30 dagen verwachten we een vollediger beeld dat we kunnen vergelijken.

### Top landing pages (op impressions, breder bereik dan totalen hierboven)

De individuele pagina-cijfers hieronder lijken een breder bereik te tonen dan de totalen hierboven (vermoedelijk GSC-default 28-daagse filter op dit tabblad). Noteren zoals ze op dit moment in het dashboard stonden.

| # | URL | Clicks | Impressions | CTR | Positie |
|---|---|---|---|---|---|
| 1 | `/begin-hier` | **1** | 69 | 1,4% | 3,5 |
| 2 | `/verzekering` | **1** | 64 | 1,6% | 7,5 |
| 3 | `/wonen` | 0 | 73 | 0% | 12,4 |
| 4 | `/kosten` | 0 | 72 | 0% | 6,3 |
| 5 | `/` (homepage) | 0 | 70 | 0% | 2,8 |
| 6 | `/voor-vertrek` | 0 | 59 | 0% | 6,2 |
| 7 | `/eerste-week` | 0 | 58 | 0% | 4,0 |
| 8 | `/vergunning` | 0 | 58 | 0% | 4,5 |
| 9 | `/leven` | 0 | 47 | 0% | 5,3 |

**Key observaties:**
- `/begin-hier` en `/verzekering` zijn de enige pagina's met kliks (1 elk)
- `/` heeft de beste gemiddelde positie (2,8) maar 0 kliks — **CTR-probleem op homepage** (of query-mismatch met zoekintentie)
- `/wonen` heeft de meeste impressions (73) maar staat gem. op positie 12,4 — net buiten pagina 1
- `/kosten` staat op gem. positie 6,3 met 72 impressions, dus redelijke kans op kliks zodra CTR verbetert
- `/vergunning` staat sterk op 4,5 maar 0 kliks uit 58 impressions — **waarschijnlijk title/description niet aantrekkelijk genoeg voor die query**

### Top 10 queries (op impressions, breder bereik)

| # | Query | Clicks | Impressions | CTR | Positie |
|---|---|---|---|---|---|
| 1 | stage curacao kosten | 0 | 3 | 0% | 15,0 |
| 2 | huisvesting stage curacao | 0 | 2 | 0% | 42,0 |
| 3 | kamer huren willemstad stage | 0 | 2 | 0% | 49,5 |
| 4 | huisvesting stage willemstad | 0 | 2 | 0% | 53,5 |
| 5 | stagevergoeding curacao | 0 | 1 | 0% | 5,0 |
| 6 | bocuracao | 0 | 1 | 0% | 22,0 |
| 7 | kamer huren curacao stage | 0 | 1 | 0% | 35,0 |
| 8 | stagehuis curacao | 0 | 1 | 0% | 46,0 |
| 9 | appartement curacao stage | 0 | 1 | 0% | 49,0 |
| 10 | studentenhuis curacao stage | 0 | 1 | 0% | 58,0 |

**Key observaties queries:**
- **Allemaal housing-intent** (huisvesting, kamer huren, stagehuis, studentenhuis, appartement) → bevestigt dat de housing-cluster inderdaad de sterkste commerciële kans is (zoals de externe audits ook zeiden)
- `stagevergoeding curacao` staat al op positie 5,0 maar met maar 1 impression te weinig data
- `bocuracao` laat zien dat mensen onze concurrent zoeken en dat wij ook in die resultaten verschijnen — positioneringskans
- De housing-queries staan nu nog op positie **42-58** → buiten de top 30. Daar is veel ruimte voor groei, zeker als prerender de indexering versnelt

### Indexering

| Metric | Waarde |
|---|---|
| Geïndexeerde pagina's | _nog niet gerapporteerd in deze screenshots — controleren in GSC tab "Indexering"_ |
| Niet geïndexeerd | _idem_ |
| Pagina's met fouten | _idem_ |

---

## 2. Plausible — laatste 28 dagen

| Metric | Waarde |
|---|---|
| Unieke bezoekers | _invullen_ |
| Pageviews | _invullen_ |
| Bounce rate | _invullen_ |
| Gem. sessieduur | _invullen_ |

### Top 5 bronnen (verwijzers)

| # | Bron | Bezoekers |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
| 4 |  |  |
| 5 |  |  |

### Top 5 pagina's (op pageviews)

| # | URL | Pageviews | Gem. tijd |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |

### Custom events (na implementatie week 1)

| Event | Aantal (28d) |
|---|---|
| `Outbound Link: Click` |  |
| `WhatsApp Click` |  |
| `Contact Form Submit` |  |
| `Partner Form Submit` |  |
| `Verhaal View` |  |

---

## 3. Backlink-profiel (Ahrefs gratis, Semrush gratis, of Google Search Console → Links)

| Metric | Waarde |
|---|---|
| Domain Rating / Authority Score | _invullen_ |
| Aantal referring domains | _invullen_ |
| Aantal backlinks | _invullen_ |
| Top-verwijzend domein | _invullen_ |

### Top 5 verwijzende pagina's

| # | Bron-URL | Link naar | DR |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |

---

## 4. Concurrent-snapshot

Drie partijen monitoren: één dunne SEO-concurrent en twee grote bureaus.

### stage-curacao.nl

| Metric | Waarde |
|---|---|
| Domain Rating | _invullen_ |
| Referring domains | _invullen_ |
| Top organische pagina | _invullen_ |
| Top-keyword waar zij staan en wij niet | _invullen_ |

### Bo Curaçao (bocuracao.com)

| Metric | Waarde |
|---|---|
| Domain Rating | _invullen_ |
| Referring domains | _invullen_ |
| Top organische pagina | _invullen_ |
| Commerciële positionering | _invullen_ |

### Wereldstap (wereldstap.com)

| Metric | Waarde |
|---|---|
| Domain Rating | _invullen_ |
| Referring domains | _invullen_ |
| Top organische pagina | _invullen_ |
| Commerciële positionering | _invullen_ |

---

## 5. Content-inventaris

| Type pagina | Aantal nu |
|---|---|
| Editorial gids-pagina's | _invullen_ |
| Student-verhalen | _invullen_ (6 verwacht: Jesse, Jayden, Dominique, Sofie, Maren, …) |
| Utility (calculators, checklists) | _invullen_ |
| Partner-/commerciële pagina's | _invullen_ |

---

## 6. Targets voor dag 90

Hieronder de doelen waarop we op dag 90 afrekenen. Gekoppeld aan de baseline hierboven.

| KPI | Baseline (22 apr 2026) | Target dag 90 (22 jul 2026) |
|---|---|---|
| Organic clicks / 28d | **2** (over 4 dagen) | ≥30 |
| Gem. positie top-3 money-pages (/wonen, /kosten, /vergunning) | 12,4 / 6,3 / 4,5 | alle drie < 5,0 |
| CTR op /` (homepage) | 0% ondanks positie 2,8 | ≥2% |
| Indexeerbare pagina's | 31 in sitemap | 35-37 (na content-uitbreiding) |
| Student-verhalen gepubliceerd | 3 (Jesse, Jayden, Dominique) | 5 (+ Elke, Emma na akkoord) |
| Referring domains | _nog invullen_ | +5 tot +10 |
| Outbound clicks / 28d | 0 (events nog niet live) | ≥100 |
| Pilot-partners actief | 0 | 2 tot 3 |
| Prerender live | Nee | Ja (deploy deze week) |
| Plausible events live | Nee | Ja (3 events minimaal) |

---

## 7. Review-ritme

- **Week 1:** baseline invullen, events live
- **Week 4:** eerste 30-dagen rapport tegen baseline
- **Week 8:** mid-cycle check, bijstellen waar nodig
- **Week 12:** eindrapport, beslismoment doorschalen of niet

---

_Bijgehouden door: Jesse Venniker. Laatst bewerkt: [datum]._
