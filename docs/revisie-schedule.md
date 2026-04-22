# Revisie-schema StageStart Curaçao

> `/bronnen` belooft publiek dat claims worden gecontroleerd op een vast ritme. Zonder discipline werkt dat framework tegen ons — een niet-gecontroleerde "hoog gevoelig"-claim die 3 maanden oud is, is schadelijker dan een claim zonder datum. Deze file is de planning.

## Controleritme (uit /bronnen)

| Gevoeligheid | Ritme |
|---|---|
| Hoog (vergunning, documenten, kosten, verblijfsstatus) | Elk kwartaal + direct bij signaal |
| Middel (richtlijnen, contactgegevens) | Halfjaarlijks |
| Laag (ervaringen, lifestyle) | Jaarlijks of bij signaal |

## Aankomende revisies

Alle 33 claims in `/bronnen` hebben controle-datum **2026-04-16** (één uitzondering: 2026-04-20). Dat was de eerste ronde bij launch.

### Volgende verplichte check

**Deadline: 16 juli 2026** — hoog-gevoelige claims (kwartaal = 3 maanden)

Scope: alle claims op `/bronnen` met `gevoeligheid: hoog`. Inclusief:
- Stagevergunning: XCG 525, 4 maanden beslistermijn
- Verklaring van rechtswege: categorie "Werken/Eenmanszaak", wachten op CW (NL+US)
- DI Card: geldig 7 dagen voor vertrek, gratis
- Geboorteakte: recent gewaarmerkt, Engelstalig voor embassy
- VOG: max 3 maanden oud bij aanvraag
- Zorgverzekering: NL-basisdekking + polisblad verplicht
- XCG-koers vs EUR (volatiel, check 2-maandelijks is beter)
- Maandbudget-ondergrens (€1.100) — check tegen actuele huurprijzen

**Deadline: 16 oktober 2026** — middelgevoelige claims (halfjaar)

**Deadline: 16 april 2027** — laag-gevoelige claims (jaarlijks)

## Revisie-werkproces

Per claim:
1. Open de bron in `/bronnen` (bv. Immigratiedienst link)
2. Controleer of bedrag, termijn, naam instantie en URL nog kloppen
3. Pas aan waar nodig — **geen wijziging**: `laatste_update` in data wel bijwerken
4. Pas de `LastChecked` datum op elke pagina die de claim gebruikt bij
5. Als claim materieel wijzigt: kort changelog-item in `/bronnen` overwegen

## Trigger-based updates (niet tijd-based)

Los van het periodieke ritme: **direct** updaten bij signalen:
- Nieuwbericht over regelwijziging (Antilliaans Dagblad, overheidssites CW, consulaat)
- Klacht van stagiair over verouderde info via contactformulier
- Wijziging op Immigratiedienst-site zichtbaar bij kwartaalcheck
- XCG/EUR-koers devaluatie >5% (raakt alle kostenberekeningen)

## Log

Voeg hieronder per revisie-ronde één regel toe zodra de ronde is afgerond.

- **2026-04-16** — initial seeding, 33 claims publiek gemaakt
- _volgende: 2026-07-16 — hoog-gevoelige kwartaalcheck_
