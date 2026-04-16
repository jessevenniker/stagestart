import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ClaimLabel from '../components/ClaimLabel'
import LastChecked from '../components/LastChecked'

export default function Vergunning() {
  return (
    <>
      <PageHero
        eyebrow="Vergunning — hoe zit het nou echt?"
        title="Verklaring van Rechtswege en stagevergunning zijn hetzelfde."
        subtitle="In de praktijk geen verschil. Het zijn twee benamingen voor dezelfde wettelijke vergunning. Toch raakt iedereen verward door de twee termen — hieronder leggen we het uit."
        accentColor="#1A7EC5"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* BLOK 1 — Wat je officieel moet weten */}
        <section className="mb-14">
          <p className="section-label">1. Wat je officieel moet weten</p>

          <div className="card mb-4">
            <ClaimLabel
              kind="officieel"
              bron="Immigratiedienst Curaçao"
              link="https://immigrationcur.org/dep/van-rechtswege/"
            />
            <h3 className="font-serif text-xl font-normal text-dark mb-2">Eén vergunning, twee namen</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              De <strong className="text-dark">Verklaring van Rechtswege (VRW)</strong> is de officiële term voor de verblijfsvergunning die nodig is om langer dan 6 maanden in Curaçao te verblijven, te werken of stage te lopen. In de praktijk wordt dezelfde vergunning ook wel "stagevergunning" genoemd.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Er bestaat dus géén aparte stagevergunning naast een Verklaring van Rechtswege. Het is dezelfde aanvraag, dezelfde procedure, dezelfde documenten en dezelfde kosten.
            </p>
          </div>

          <div className="card">
            <ClaimLabel
              kind="officieel"
              bron="Immigratiedienst Curaçao"
              link="https://immigrationcur.org/dep/studie-stage/"
            />
            <h3 className="font-serif text-xl font-normal text-dark mb-2">Belangrijkste feiten</h3>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
              <li>· Legeskosten: <strong className="text-dark">XCG 525,00</strong></li>
              <li>· Verwerkingstijd: <strong className="text-dark">officieel 4 maanden</strong></li>
              <li>· Indiening: <strong className="text-dark">per e-mail</strong> naar intake@immigrationcur.org</li>
              <li>· Voor wie verplicht: iedereen die langer dan 6 maanden blijft of stage loopt</li>
              <li>· Beslissing: per e-mail van Toelatingsorganisatie</li>
            </ul>
          </div>
        </section>

        {/* BLOK 2 — Wat dit in de praktijk betekent */}
        <section className="mb-14">
          <p className="section-label">2. Wat dit in de praktijk betekent</p>
          <div className="card">
            <ClaimLabel kind="richtlijn" />
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Voor jou als Nederlandse stagiair betekent dit het volgende:
            </p>
            <ol className="flex flex-col gap-3 text-sm text-gray-600 list-decimal pl-5">
              <li>
                <strong className="text-dark">Je hoeft niet te zoeken naar twee aanvragen.</strong> Of een bron nu "stagevergunning" of "Verklaring van Rechtswege" zegt — je vraagt dezelfde vergunning aan.
              </li>
              <li>
                <strong className="text-dark">Je mag de beslistermijn op het eiland afwachten.</strong> Nederlanders en Amerikanen kunnen de officiële 4 maanden verwerkingstijd in Curaçao doorbrengen — niet vanuit Nederland.
              </li>
              <li>
                <strong className="text-dark">Je mag werken en stage lopen ná indiening.</strong> Je hoeft niet te wachten op de definitieve beslissing om te beginnen met je stage.
              </li>
            </ol>
          </div>
        </section>

        {/* BLOK 3 — Wat vaak wordt onderschat */}
        <section className="mb-14">
          <p className="section-label">3. Wat vaak wordt onderschat</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="card">
              <ClaimLabel kind="ervaring" />
              <p className="text-sm font-medium text-dark mb-2">Verwarring tussen termen</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Stagebureaus en blogs gebruiken "stagevergunning" en "Verklaring van Rechtswege" door elkaar alsof het twee verschillende dingen zijn. Dat klopt niet — het is dezelfde vergunning.
              </p>
            </div>
            <div className="card">
              <ClaimLabel kind="ervaring" />
              <p className="text-sm font-medium text-dark mb-2">"Geen geboorteakte" is verkeerd</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Sommige bronnen claimen dat een geboorteakte niet nodig is. Dat klopt niet — Immigratiedienst eist een geboorteakte van max 1 jaar oud.
              </p>
            </div>
            <div className="card">
              <ClaimLabel kind="ervaring" />
              <p className="text-sm font-medium text-dark mb-2">Bedrag wordt vaak verkeerd vermeld</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Op verschillende sites zie je €307, ANG 615 of XCG 530. Het officiële bedrag volgens Immigratiedienst is XCG 525,00.
              </p>
            </div>
            <div className="card">
              <ClaimLabel kind="ervaring" />
              <p className="text-sm font-medium text-dark mb-2">4 maanden is een maximum</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                De Toelatingsorganisatie heeft officieel 4 maanden om te beslissen. Dit is een maximum — soms gaat het sneller, maar reken er niet op. Plan vooruit.
              </p>
            </div>
          </div>
        </section>

        {/* BLOK 4 — Wat jij nu moet doen */}
        <section className="mb-14">
          <p className="section-label">4. Wat jij nu moet doen</p>
          <div className="card border-l-4" style={{ borderLeftColor: '#1A7EC5' }}>
            <ol className="flex flex-col gap-2 text-sm text-gray-600 list-decimal pl-5">
              <li>Lees de officiële <a href="https://immigrationcur.org/dep/studie-stage/" target="_blank" rel="noopener noreferrer" className="text-sky underline">Studie/Stage-pagina van Immigratiedienst</a> door.</li>
              <li>Verzamel alle vereiste documenten (zie volledige stappenplan op <Link to="/voor-vertrek" className="text-sky underline">Voor vertrek</Link>).</li>
              <li>Vraag je geboorteakte op bij de gemeente (max 1 jaar oud bij indiening).</li>
              <li>Vraag je VOG aan via Justis — duurt 4-6 weken.</li>
              <li>Betaal XCG 525 aan Maduro & Curiel's Bank.</li>
              <li>Stuur alles in één e-mail naar intake@immigrationcur.org.</li>
            </ol>
          </div>
        </section>

        {/* CTA naar voor vertrek */}
        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Klaar om de stappen te volgen?</p>
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
