import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ClaimLabel from '../components/ClaimLabel'
import LastChecked from '../components/LastChecked'

export default function Verzekering() {
  return (
    <>
      <PageHero
        eyebrow="Verzekering & gezondheid"
        title="Wat dekt wat, en wat regel je zelf?"
        subtitle="Verzekering en medische zaken staan verspreid op veel bronnen. Hieronder in één overzicht: wat je Nederlandse basisverzekering wel en niet doet, wanneer aanvullend nodig is, en hoe gezondheidszorg op Curaçao werkt."
        accentColor="#3EAD6E"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* 1. Wat je officieel moet weten */}
        <section className="mb-14">
          <p className="section-label">1. Wat je officieel moet weten</p>

          <div className="card mb-4">
            <ClaimLabel kind="officieel" bron="Rijksoverheid" link="https://www.rijksoverheid.nl" />
            <h3 className="font-serif text-xl font-normal text-dark mb-2">Nederlandse basiszorgverzekering blijft geldig</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Als je in Nederland ingeschreven blijft staan (bij de gemeente) en je Nederlandse basisverzekering aanhoudt, dan dekt die spoedeisende zorg wereldwijd — tot het Nederlandse tarief.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-dark">Belangrijk:</strong> Curaçao is geen EU-gebied. Je EHIC-kaart werkt daar niet. Het verschil tussen de lokale rekening en het Nederlandse tarief betaal je zelf — dit kan honderden tot duizenden euro's zijn bij serieuze zorg.
            </p>
          </div>

          <div className="card mb-4">
            <ClaimLabel kind="officieel" bron="Immigratiedienst Curaçao" link="https://immigrationcur.org/dep/studie-stage/" />
            <h3 className="font-serif text-xl font-normal text-dark mb-2">Polisblad ziektekostenverzekering verplicht</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Volgens de officiële Studie/Stage-pagina van de Immigratiedienst is een polisblad van een geldige ziektekostenverzekering <strong className="text-dark">met dekking voor Curaçao</strong> een vereist document voor de vergunning. Je Nederlandse basisverzekering alleen is hier meestal niet voldoende voor — je hebt een internationale aanvullende verzekering nodig die expliciet Curaçao noemt.
            </p>
          </div>

          <div className="card">
            <ClaimLabel kind="richtlijn" />
            <h3 className="font-serif text-xl font-normal text-dark mb-2">Drie lagen verzekering voor stagiairs</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-sage shrink-0">1.</span><strong className="text-dark">Nederlandse basiszorgverzekering</strong> — aanhouden, niet opzeggen. Dekt spoedzorg wereldwijd tot Nederlands tarief.</li>
              <li className="flex gap-2"><span className="text-sage shrink-0">2.</span><strong className="text-dark">Aanvullende internationale (reis)verzekering</strong> — dekt het verschil met lokale tarieven, repatriëring, bagage, aansprakelijkheid. Verplicht voor vergunning.</li>
              <li className="flex gap-2"><span className="text-sage shrink-0">3.</span><strong className="text-dark">Eventueel stage-aansprakelijkheid</strong> — sommige scholen eisen een specifieke stage-aansprakelijkheidsverzekering voor schade die je op het werk veroorzaakt.</li>
            </ul>
          </div>
        </section>

        {/* 2. Wat dit in de praktijk betekent */}
        <section className="mb-14">
          <p className="section-label">2. Wat dit in de praktijk betekent</p>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="card">
              <ClaimLabel kind="richtlijn" />
              <p className="text-sm font-medium text-dark mb-2">Niet uitschrijven in Nederland</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Blijf ingeschreven bij je Nederlandse gemeente tijdens je stage. Alleen dan loopt je basisverzekering door. Stagiairs die zich uitschrijven, verliezen dekking en moeten bij terugkeer opnieuw aanmelden — met mogelijke wachttijd.
              </p>
            </div>
            <div className="card">
              <ClaimLabel kind="richtlijn" />
              <p className="text-sm font-medium text-dark mb-2">Sluit vóór vertrek af</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Een aanvullende reis/stage-verzekering moet ingaan vóór je vertrekt en de hele stageperiode dekken. Vraag een polisblad met ingangsdatum én einddatum — dat heb je nodig voor de vergunning.
              </p>
            </div>
            <div className="card">
              <ClaimLabel kind="ervaring" />
              <p className="text-sm font-medium text-dark mb-2">Bekende aanbieders</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Stagiairs noemen vaak OOM, JoHo Special ISIS, Insure to Study en Allianz Global Assistance. Vergelijk altijd zelf — premie, eigen risico en dekkingsgraad verschillen per aanbieder.
              </p>
            </div>
            <div className="card">
              <ClaimLabel kind="richtlijn" />
              <p className="text-sm font-medium text-dark mb-2">Bewaar je zorgpas</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Neem je Nederlandse zorgverzekeringspas mee. Bij spoedeisende zorg heb je het nummer en polis-ID nodig. Bewaar digitaal in je cloud én fysiek in je portemonnee.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Wat dekking wel en niet doet */}
        <section className="mb-14">
          <p className="section-label">Wat dekking dekt — en wat níét</p>
          <ClaimLabel kind="richtlijn" />
          <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
            Per aanbieder verschillend, maar deze elementen komen bij elke goede aanvullende verzekering ter sprake. Check ze één voor één in je polis vóór je tekent.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="card">
              <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Dekt meestal</p>
              <ul className="flex flex-col gap-1.5 text-xs text-gray-500">
                <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Spoedeisende medische zorg (ziekenhuis, SEH)</li>
                <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Huisartsenzorg en gepaste medicatie</li>
                <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Repatriëring naar Nederland bij ernstige ziekte</li>
                <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Bagage + waardevolle spullen (met eigen risico)</li>
                <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Wettelijke aansprakelijkheid (WA) in het buitenland</li>
                <li className="flex gap-2"><span className="text-sage shrink-0">✓</span>Juridische hulpverlening op afstand</li>
              </ul>
            </div>
            <div className="card">
              <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Meestal níét of beperkt</p>
              <ul className="flex flex-col gap-1.5 text-xs text-gray-500">
                <li className="flex gap-2"><span className="text-terra shrink-0">·</span>Tandarts (vaak alleen spoed, beperkt bedrag)</li>
                <li className="flex gap-2"><span className="text-terra shrink-0">·</span>Bestaande chronische aandoeningen (check altijd na)</li>
                <li className="flex gap-2"><span className="text-terra shrink-0">·</span>Duikongevallen (aparte dekking vereist voor PADI)</li>
                <li className="flex gap-2"><span className="text-terra shrink-0">·</span>Risicosporten (kitesurf, klimmen — check je polis)</li>
                <li className="flex gap-2"><span className="text-terra shrink-0">·</span>Schade onder invloed van alcohol of drugs</li>
                <li className="flex gap-2"><span className="text-terra shrink-0">·</span>Schade aan gehuurde auto (dat is auto-verzekering)</li>
              </ul>
            </div>
          </div>
          <div className="card border-l-4 mt-3" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-xs font-medium text-dark mb-1">Repatriëring is duur</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Medische evacuatie vanaf Curaçao naar Nederland kan €15.000-25.000 kosten zonder dekking. Dit is de belangrijkste reden om een degelijke aanvullende verzekering af te sluiten.
            </p>
          </div>
        </section>

        {/* 4. Medisch op Curaçao */}
        <section className="mb-14">
          <p className="section-label">Medisch op Curaçao</p>
          <ClaimLabel kind="richtlijn" />

          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            <div className="card">
              <p className="text-sm font-medium text-dark mb-2">Huisarts</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-2">
                Nederlandstalige huisarts: Centro Medico Aesculapius, SBN Doormanweg 47. Telefoon: +599 9 737 0522. Ochtend open spreekuur, middag op afspraak. Bewaar altijd je bon — je verzekering heeft die nodig voor vergoeding.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-2">Ziekenhuis</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-2">
                Curaçao Medical Center (CMC) — het centrale ziekenhuis in Otrobanda. SEH: +599 9 745-0026. Algemeen: +599 9 745-0000.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-2">Apotheek = botika</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Standaardmedicijnen haal je zonder afspraak bij een botika. Sommige zijn gesloten tussen 12:00 en 14:00. Check welke 24 uur open is in je buurt — vraag je verhuurder of huisgenoten.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-2">MedPoint</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                MedPoint (medpoint.cw) werkt 7 dagen per week, biedt huisbezoek en teleconsultatie. Handig als het niet spoedeisend is maar je wel snel hulp wilt.
              </p>
            </div>
          </div>

          <div className="card border-l-4" style={{ borderLeftColor: '#F2B517' }}>
            <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Neem mee uit Nederland</p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Voorgeschreven medicijnen — voor de hele stageperiode, plus een kopie van het recept</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Eigen pijnstillers en maagtabletten (vaak goedkoper dan op Curaçao)</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Anticonceptie voor de hele periode</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Zonnebrand SPF 50+ — op Curaçao soms dubbel zo duur</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>Insectenwerend spray (DEET 30%+ voor Dengue-seizoen)</li>
              <li className="flex gap-2"><span className="text-gold shrink-0">·</span>EHBO-basis (pleisters, desinfectans, koortsthermometer)</li>
            </ul>
          </div>
        </section>

        {/* 5. Gezondheidsrisico's specifiek Curaçao */}
        <section className="mb-14">
          <p className="section-label">Gezondheidsrisico's die stagiairs onderschatten</p>
          <ClaimLabel kind="ervaring" />
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="card">
              <p className="text-sm font-medium text-dark mb-2">Zon en uitdroging</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Passaatwind maakt dat je de zon niet voelt branden — maar UV-index is hoog. Tussen 10:00 en 15:00 is zonnebrand het ergst. Draag SPF 50, hoed, lichte kleding. Drink meer water dan je denkt nodig te hebben — minimaal 2,5 liter per dag.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-2">Muggen (Dengue, Zika)</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Vooral in regenseizoen (juni-november) actief. Gebruik DEET-spray 's avonds. Slaap met gesloten ramen of klamboe. Symptomen Dengue: hoge koorts, spierpijn, hoofdpijn — direct naar arts.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-2">Kraanwater</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Kraanwater op Curaçao is drinkbaar — het komt van ontzilting. Sommige huizen hebben oudere leidingen, in dat geval filter of fles. Vraag je verhuurder of gewoon drinken oké is.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-medium text-dark mb-2">Acclimatiseren duurt langer dan je denkt</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Warmte + luchtvochtigheid + tijdverschil = vermoeidheid in week 1. Plan je eerste stagedag niet direct na aankomst. Een paar dagen tussen aankomst en eerste werkdag voorkomt dat je je ziek meldt.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Wat jij nu moet doen */}
        <section className="mb-14">
          <p className="section-label">Wat jij nu moet doen</p>
          <div className="card border-l-4" style={{ borderLeftColor: '#3EAD6E' }}>
            <ol className="flex flex-col gap-2 text-sm text-gray-600 list-decimal pl-5">
              <li>Controleer of je ingeschreven blijft in Nederland — niet uitschrijven bij gemeente.</li>
              <li>Controleer je Nederlandse basiszorgverzekering — niet opzeggen.</li>
              <li>Vergelijk aanbieders voor aanvullende internationale stage-verzekering (OOM, JoHo, Insure to Study, Allianz).</li>
              <li>Sluit af vóór vertrek — vraag om polisblad met begin- en einddatum (nodig voor vergunning).</li>
              <li>Check of je school een specifieke stage-aansprakelijkheidsverzekering eist.</li>
              <li>Neem zorgpas en polisblad mee in handbagage. Upload ook naar je cloud.</li>
              <li>Noteer de adressen van Centro Medico + CMC in je telefoon vóór vertrek.</li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Zorg dat je aanvraag compleet is</p>
            <p className="text-sm text-gray-600">Het polisblad is een van de verplichte documenten voor de stagevergunning.</p>
          </div>
          <Link to="/voor-vertrek" className="btn-terra shrink-0">Naar Voor vertrek →</Link>
        </div>

        <LastChecked
          date="2026-04-16"
          bron="Rijksoverheid + Immigratiedienst + ervaringen stagiairs"
          bronUrl="https://www.rijksoverheid.nl"
          gevoeligheid="hoog"
        />
      </div>
    </>
  )
}
