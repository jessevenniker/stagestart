import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import ClaimLabel from '../components/ClaimLabel'
import LastChecked from '../components/LastChecked'

export default function Vergunning() {
  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Vergunning — hoe zit het volgens de officiële bron?"
        title="Studie/stage en Verklaring van Rechtswege — twee informatiestromen."
        subtitle="De Immigratiedienst Curaçao publiceert hier twee aparte officiële pagina's voor. Voor Nederlandse stagiairs kunnen ze allebei relevant zijn. Hieronder leggen we uit wat elke stroom volgens de officiële bron behandelt — en wat dat in de praktijk betekent."
        accentColor="#1A7EC5"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Autoriteitssignaal — deze pagina is geen vervanging voor de officiële bron */}
        <div className="card border-l-4 mb-10" style={{ borderLeftColor: '#1A7EC5' }}>
          <p className="text-xs font-medium text-dark mb-2">Deze pagina is geen vervanging voor de officiële bron</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Bij elk conflict tussen onze tekst en de Immigratiedienst geldt de Immigratiedienst. Controleer vóór aanvraag altijd de actuele eisen op <a href="https://immigrationcur.org/dep/studie-stage/" target="_blank" rel="noopener noreferrer" className="text-sky underline">immigrationcur.org</a>. Wij documenteren hier alleen hoe de officiële pagina's zich tot elkaar verhouden en wat dat voor Nederlandse stagiairs in de praktijk betekent.
          </p>
        </div>

        {/* BLOK 1 — Wat je officieel moet weten */}
        <section className="mb-14">
          <p className="section-label">1. Wat je officieel moet weten</p>

          <div className="card mb-4">
            <ClaimLabel
              kind="officieel"
              bron="Immigratiedienst — Studie/Stage"
              link="https://immigrationcur.org/dep/studie-stage/"
            />
            <h3 className="font-serif text-xl font-normal text-dark mb-2">Studie/Stage-pagina (Immigratiedienst)</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Volgens de officiële Studie/Stage-pagina van de Immigratiedienst beschrijft deze stroom de procedure voor wie in Curaçao komt studeren of stage lopen. De pagina noemt onder meer:
            </p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
              <li>· Vereiste documenten (waaronder VOG, geboorteakte max 1 jaar oud, KvK-uittreksel stagebedrijf, polisblad ziektekostenverzekering met dekking Curaçao, stageovereenkomst)</li>
              <li>· Legeskosten: <strong className="text-dark">XCG 525,00</strong></li>
              <li>· Verwerkingstijd: officieel <strong className="text-dark">4 maanden</strong> beslistermijn</li>
              <li>· Indiening: per e-mail naar intake@immigrationcur.org</li>
            </ul>
          </div>

          <div className="card">
            <ClaimLabel
              kind="officieel"
              bron="Immigratiedienst — Verklaring van Rechtswege"
              link="https://immigrationcur.org/dep/van-rechtswege/"
            />
            <h3 className="font-serif text-xl font-normal text-dark mb-2">Verklaring van Rechtswege-pagina (Immigratiedienst)</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Volgens de officiële Verklaring van Rechtswege-pagina is de VRW een officiële erkenning dat bepaalde personen automatisch recht hebben op verblijf in Curaçao. De pagina noemt onder meer:
            </p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
              <li>· Voor meerderjarige Nederlanders en hun familieleden, mits Nederlandse nationaliteit</li>
              <li>· Voor Amerikaanse staatsburgers (sinds uitspraak Gemeenschappelijk Hof 2014)</li>
              <li>· Voor bijzondere categorieën (uitgezonden overheidspersoneel, militairen)</li>
              <li>· Personen van Nederlandse en Amerikaanse nationaliteit kunnen de 4 maanden beslistermijn op het eiland afwachten</li>
            </ul>
          </div>
        </section>

        {/* BLOK 2 — Wat dit in de praktijk betekent */}
        <section className="mb-14">
          <p className="section-label">2. Wat dit in de praktijk betekent</p>
          <div className="card">
            <ClaimLabel kind="richtlijn" />
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              De Immigratiedienst presenteert deze als twee aparte informatiestromen. Voor Nederlandse stagiairs kunnen ze in de praktijk allebei relevant zijn. <strong className="text-dark">Controleer daarom altijd zelf welke officiële route en vereisten in jouw situatie gelden.</strong>
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Een aantal praktische punten:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600 list-disc pl-5">
              <li>De studie/stage-pagina beschrijft de aanvraagprocedure die je doorloopt vóór of bij aankomst.</li>
              <li>De Verklaring van Rechtswege regelt voor Nederlanders het verblijfsrecht zelf — niet de stage-aanvraag.</li>
              <li>In hoeverre beide stromen in jouw situatie tegelijk van toepassing zijn, hangt af van duur, doel van verblijf en je nationaliteit. Officiële bronnen blijven hier leidend.</li>
              <li>Stagebureaus en blogs gebruiken de termen vaak door elkaar. Volg de officiële Immigratiedienst-pagina's voor de actuele eisen.</li>
            </ul>
          </div>
        </section>

        {/* BLOK 3 — Wat vaak wordt onderschat */}
        <section className="mb-14">
          <p className="section-label">3. Wat vaak wordt onderschat</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="card">
              <ClaimLabel kind="ervaring" />
              <p className="text-sm font-medium text-dark mb-2">Verschillende termen, één doel</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Stagebureaus en blogs noemen "stagevergunning" en "Verklaring van Rechtswege" vaak in één adem. Dat veroorzaakt verwarring over welke pagina je nu eigenlijk moet volgen. Houd altijd de officiële Immigratiedienst-bron aan.
              </p>
            </div>
            <div className="card">
              <ClaimLabel kind="ervaring" />
              <p className="text-sm font-medium text-dark mb-2">"Geen geboorteakte" is verkeerd</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Sommige bronnen claimen dat een geboorteakte niet nodig is. De officiële Immigratiedienst-pagina vermeldt deze wel als verplicht document, niet ouder dan 1 jaar bij indiening.
              </p>
            </div>
            <div className="card">
              <ClaimLabel kind="ervaring" />
              <p className="text-sm font-medium text-dark mb-2">Bedrag wordt vaak verkeerd vermeld</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Op verschillende sites zie je €307, ANG 615 of XCG 530. Op de officiële Studie/Stage-pagina staat <strong className="text-dark">XCG 525,00</strong>. Controleer dit vóór je betaalt.
              </p>
            </div>
            <div className="card">
              <ClaimLabel kind="ervaring" />
              <p className="text-sm font-medium text-dark mb-2">4 maanden is een maximum</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                De Toelatingsorganisatie heeft volgens de officiële pagina 4 maanden om te beslissen. Dit is een maximum termijn — soms gaat het sneller, maar reken er niet op. Plan vooruit.
              </p>
            </div>
          </div>
        </section>

        {/* BLOK 4 — Wat jij nu moet doen */}
        <section className="mb-14">
          <p className="section-label">4. Wat jij nu moet doen</p>
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
            <ol className="flex flex-col gap-2 text-sm text-gray-600 list-decimal pl-5">
              <li>Lees beide officiële Immigratiedienst-pagina's: <a href="https://immigrationcur.org/dep/studie-stage/" target="_blank" rel="noopener noreferrer" className="text-sky underline">Studie/Stage</a> en <a href="https://immigrationcur.org/dep/van-rechtswege/" target="_blank" rel="noopener noreferrer" className="text-sky underline">Verklaring van Rechtswege</a>.</li>
              <li>Bepaal welke route(s) op jouw situatie van toepassing zijn. Bij twijfel: contact opnemen met Immigratiedienst.</li>
              <li>Verzamel de vereiste documenten — zie het volledige stappenplan op <Link to="/voor-vertrek" className="text-sky underline">Voor vertrek</Link>.</li>
              <li>Vraag je geboorteakte op bij de gemeente (max 1 jaar oud bij indiening).</li>
              <li>Vraag je VOG aan via Justis — duurt 4-6 weken.</li>
              <li>Betaal de legeskosten volgens de officiële Studie/Stage-pagina.</li>
              <li>Dien in volgens de procedure die op die pagina staat beschreven.</li>
            </ol>
          </div>

          <div className="card border-l-4 mt-4" style={{ borderLeftColor: '#F2B517' }}>
            <p className="text-xs font-medium text-dark mb-2">Onze redactionele lijn</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Bij conflict tussen praktijkervaring en officiële bron volgen wij de officiële bron in de hoofdtekst. Praktijkervaring komt apart terug onder een ervaringslabel. Zie de <Link to="/bronnen" className="text-sky underline">Bronnen-pagina</Link> voor meer uitleg.
            </p>
          </div>
        </section>

        {/* CTA naar voor vertrek */}
        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Klaar om de voorbereiding te starten?</p>
            <p className="text-sm text-gray-600">Het volledige stappenplan met deadlines en checklists.</p>
          </div>
          <Link to="/voor-vertrek" className="btn-terra shrink-0">Naar Voor vertrek →</Link>
        </div>

        <LastChecked
          date="2026-04-16"
          bron="Immigratiedienst Curaçao"
          bronUrl="https://immigrationcur.org/dep/studie-stage/"
          gevoeligheid="hoog"
        />
      </div>
    </>
  )
}
