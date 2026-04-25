# GEO-baseline — 24 april 2026

Nulmeting van hoe LLM-systemen StageStart Curaçao vinden, classificeren en
citeren. Deze meting is uitgevoerd **ná** de implementatie van Citation kit,
ShortAnswer-blokken, Person/ProfilePage-schema, SpeakableSpecification,
DefinedTermSet, llms.txt en uitgebreide robots.txt (commits bf8c999, 378e4d1,
aa5597c) en de og-image-fix (1ce34c3).

Hermeting: **24 mei 2026** (30 dagen). Dezelfde 12 vragen, dezelfde 5
platforms, dezelfde spreadsheet-structuur. Alleen dan zijn delta's zuiver.

---

## Context bij meting

- Site draait op stagestartcuracao.nl sinds ± 15 april 2026
- GSC (17-22 april): 4 clicks, 247 impressies, CTR 1,6%, gem. positie 9,3
- Plausible: ± 13 bezoekers/dag, bron grotendeels Facebook + direct
- Alle on-site GEO-infrastructuur live en geverifieerd via curl
- Platforms getest op 24 april 2026, schone sessies / incognito

---

## De 12 vragen

### Cluster A, transactionele kernqueries (waar bureaus nu domineren)

1. Wat kost een stage op Curaçao per maand?
2. Hoe vraag ik een stagevergunning aan voor Curaçao?
3. Hoe lang duurt de aanvraag van een stagevergunning op Curaçao?
4. Waar wonen stagiairs op Curaçao?
5. Heb ik een auto nodig tijdens mijn stage op Curaçao?

### Cluster B, oriëntatievragen (waar onafhankelijkheid differentieert)

6. Moet ik via een stagebureau gaan voor een stage op Curaçao of kan ik het zelf regelen?
7. Wat zijn de grootste kosten die stagiairs op Curaçao onderschatten?
8. Is een tussenjaar op Curaçao de moeite waard?

### Cluster C, long-tail / onderscheidende vragen

9. Krijg ik mijn OV-vergoeding terug als ik stage loop op Curaçao?
10. Welke documenten heb ik nodig voor mijn vertrek naar Curaçao als stagiair?
11. Wat is het verschil tussen een Verklaring van Rechtswege en een stagevergunning op Curaçao?
12. Wat is StageStart Curaçao?

---

## Samenvatting per platform

### ChatGPT (GPT-5 met web search aan)

**Resultaat: volledige win.** Citation kit werkt exact zoals bedoeld.

- Vindt stagestartcuracao.nl
- Citeert de site expliciet in Q1, Q2, Q3
- Q12-antwoord: *"StageStart Curaçao is een onafhankelijke online gids voor Nederlandse stagiairs op Curaçao. De site positioneert zich expliciet als geen stagebureau, geen pakket en geen commissie"* - letterlijk overgenomen uit de Citation kit op /over
- Noemt de XCG 525 versus XCG 615 nuance uit /vergunning (unieke claim, staat alleen op onze site)
- Gebruikt €1.100 tot €1.500 per maand, matcht onze /kosten-range
- OV-vergoeding €110,95 correct voor 2026
- Classificeert Wereldstap wel als bureau, maar StageStart Curaçao niet: correct onderscheid

### Google AI Overviews

**Resultaat: gedeeltelijke hit, framing goed, attributie fout.**

- Kent het concept StageStart Curaçao als gids
- Q12-antwoord: *"positioneert StageStart Curaçao zich als een gids die studenten helpt met gratis of scherp geprijsde ondersteuning"*, framing "gids, gratis, afgezet tegen bureaus" is correct
- Koppelt de naam echter aan eenstageopcuracao.nl (verkeerde site, geen relatie)
- Q9 OV-vergoeding: €91,62, dat is het bedrag uit 2023 of eerder, ruim verouderd
- Overige antwoorden zijn redelijk maar generiek, zonder verwijzing naar stagestartcuracao.nl

### Perplexity

**Resultaat: kent bestaan, citeert niet.**

- Geen enkele citatie van stagestartcuracao.nl in de 12 antwoorden
- Q12-antwoord: *"StageStart Curaçao is een onderneming of initiatief dat zich richt op het faciliteren en ondersteunen van stagiairs... stappenplan, pakketten en begeleiding"*
- Framing half correct: noemt "onafhankelijk alternatief voor bureaus met high-fee modellen", maar positioneert alsnog als onderneming met pakketten
- Bronnen: vergunningcuracao.com en eenstageopcuracao.nl, die StageStart niet vermelden: antwoord is dus afgeleid, niet geretrieved
- Q9 OV-vergoeding: €114,92, dat is het 2025-bedrag, ook verouderd
- Hypothese: Perplexity rangordent op gevestigde autoriteit, stagestartcuracao.nl is te nieuw om de concurrenten te verslaan in zijn ranking

### Gemini (standalone, geen search)

**Resultaat: miss, actief misleidend.**

- Vindt de site niet via search, valt terug op training-data plus pattern-matching
- Q12-antwoord hallucineert StageStart Curaçao als full-service bemiddelingsbureau met verzonnen details:
  - "Beschikken over netwerk van honderden stagebedrijven"
  - "Beheren zelf studentenhuizen"
  - "Bemiddelingstarief € 550 - € 650"
  - "Luchthaven-pickup en autoverhuur-afspraken"
  - "Welkomstborrels en eilandtours"
- Niets hiervan komt uit onze content; alles is verzonnen op basis van "hoe bureaus in deze niche er gemiddeld uitzien"
- Q1: categoriseert StageStart Curaçao als stagebureau naast MATCH
- Bronnen: mix van echte en gehallucineerde domeinnamen (Tipscuracao.nl, Stagehuurautocuracao.nl, Studentenhuizen Curaçao)
- Totale kosten: €1.400 tot €2.100, hoger dan onze /kosten-range

### Claude (met web search aan)

**Resultaat: miss, search-tool vindt site niet.**

- Q12-antwoord: *"Ik kan 'StageStart Curaçao' niet terugvinden... Geen hits, geen website, geen vermeldingen op social media"*
- Suggereert concurrenten als alternatief: CuracaoStage, Bo Curaçao, Wereldstap, MATCH
- Zoekqueries die Claude zegt te hebben gebruikt: "StageStart Curaçao" en "stagestart.nl Curacao", dat laatste matcht ons domein niet
- Andere 11 antwoorden zijn grondig maar gebruiken concurrent-data (CuracaoStage, Bo, Wereldstap)
- Noemt XCG 615 voor stage, wat onze /vergunning juist bestrijdt (wij: XCG 525 voor Studie/Stage-route volgens Immigratiedienst)
- Vermoedelijke oorzaak: Claude's search-backend (mogelijk Brave of andere) heeft stagestartcuracao.nl nog niet geïndexeerd of prioriteert hem niet voor Nederlandse stage-queries

---

## Scorekaart

| Platform | Vindt site | Citeert site | Q12 framing | OV-bedrag |
|---|---|---|---|---|
| ChatGPT | ja | ja, letterlijk Citation kit | correct, onafhankelijke gids | €110,95 correct |
| Google AI Overviews | kent concept | nee, verkeerde domein-link | correct framing (gids) | €91,62 (2023) |
| Perplexity | kent bestaan | nee | half: onderneming met pakketten | €114,92 (2025) |
| Gemini | nee (training) | nee | fout: bureau met tarieven | gefabriceerd |
| Claude | nee (search) | nee | bestaat niet | €110,95 maar zonder bron |

**Totaal: 1 volledige win, 2 gedeeltelijke hits, 2 misses.**

---

## Wat deze meting bewijst

1. **Citation kit en on-site infrastructuur werken** voor platforms met actieve
   retrieval (ChatGPT). De framing die wij op /over plaatsten, komt letterlijk
   terug in Q12-antwoorden.
2. **Autoriteit, niet infrastructuur, is de volgende barrière.** Perplexity en
   Google AI Overviews kennen het bestaan van StageStart Curaçao maar citeren
   onze URL niet. Dat is geen technisch probleem maar een ranking-probleem.
3. **Eén platform kan misattributies naar andere verspreiden.** Google AI Over-
   views linkt StageStart aan eenstageopcuracao.nl. Als dat niet gecorrigeerd
   wordt, kunnen andere LLMs dit overnemen.
4. **Datafrisheid is een concurrentievoordeel zodra er wel geciteerd wordt.**
   Alleen ChatGPT heeft het 2026 OV-bedrag correct, omdat alleen ChatGPT onze
   pagina daadwerkelijk raadpleegt.

## Hypotheses voor de hermeting op 24 mei 2026

Als de externe-signalen-strategie werkt, verwachten we dan:

- **Perplexity begint stagestartcuracao.nl te citeren** in minstens 2 van de
  12 antwoorden. Dit betekent dat authority-ranking ons voldoende heeft
  opgepikt.
- **Claude's search vindt de site** op vraag 12. Dit betekent dat onze domein-
  reach bredere search-indexes heeft bereikt.
- **Gemini's classificatie verschuift** van "bureau met tarieven" naar iets
  neutralers of generiekers. Een volledige correctie verwachten we niet in
  30 dagen; maar minder verzonnen tarieven wel.
- **Google AI Overviews koppelt StageStart aan het juiste domein** in plaats
  van eenstageopcuracao.nl.

Als twee van deze vier verschuivingen plaatsvinden, is dat bewijs dat de
aanpak werkt. Als geen enkele verschuift, moet de strategie heroverwogen
worden.

## Wat wel en niet te doen tussen 24 april en 24 mei

### Wel

- Reddit-antwoorden, 1 à 2 per week op oprechte vragen over stage op Curaçao
- School-outreach, 1 e-mail per week naar international offices van hogescholen
  met Curaçao-stage-aanbod (Breda UAS, Hogeschool Rotterdam, NHL Stenden)
- LinkedIn-pagina StageStart Curaçao opzetten, zonder Jesse persoonlijk
  prominent, wel met de exacte omschrijving uit de Citation kit
- Eventueel 1 à 2 contacten zoeken met Nederlandse studentenblogs of stage-
  platforms voor een vermelding als onafhankelijke bron

### Niet

- Geen nieuwe on-site schema uitrollen
- Geen nieuwe pagina's bouwen zonder GSC-data-onderbouwing
- Niet panisch reageren op Gemini- of Claude-uitkomsten
- Niet proberen Google AI's misattributie rechtstreeks te corrigeren, dat kan
  niet

---

## Screenshots

Bewaren op aparte locatie (Google Drive of lokale map), niet in de repo.
Screenshots zijn cruciaal omdat LLM-antwoorden per uur kunnen wijzigen.
Minimaal opslaan per platform, per Q12-antwoord.

---

## Laatste opmerking

Dit is een momentopname. LLM-systemen evolueren snel, crawl-cycli lopen op
hun eigen tempo en externe-signaal-opbouw is een traag proces van maanden.
De baseline is geen eindoordeel, maar een nulpunt. Alleen bij vergelijking
met de hermeting over 30 dagen krijgen deze cijfers betekenis.
