import { useState } from 'react'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'

const WIJKEN = [
  {
    naam: 'Jan Thiel',
    color: '#D4522A',
    huur: '€ 375 – 475',
    auto: 'Noodzakelijk',
    sfeer: 'Strand, resort, internationaal',
    afstand: '20 min van Willemstad',
    img: '/img/wijk-jan-thiel.jpg',
    pros: ['Mooi strand op loopafstand', 'Veel medestudenten', 'Veilig en rustig', 'Goede studentenhuizen beschikbaar'],
    cons: ['Zonder auto ben je nergens', 'Weinig lokaal karakter', 'Prijziger eten in de buurt', 'Ver van het stadscentrum'],
    voor: 'Ideaal als je veel buiten wilt zijn, de strandsfeer wilt en een auto hebt of deelt.',
  },
  {
    naam: 'Piscadera',
    color: '#F2B517',
    huur: '€ 350 – 425',
    auto: 'Sterk aanbevolen',
    sfeer: 'Rustig, universiteitswijk',
    afstand: '10 min van Willemstad',
    img: '/img/wijk-piscadera.jpg',
    pros: ['Dichtbij UoC en ziekenhuis', 'Rustige omgeving', 'Relatief betaalbaar', 'Goed voor studenten zorg/onderwijs'],
    cons: ['Weinig te doen zonder auto', 'Geen uitgesproken sfeer', 'Beperkt winkelaanbod'],
    voor: 'Goed voor studenten met stage in de zorg, onderwijs of bij de universiteit.',
  },
  {
    naam: 'Pietermaai',
    color: '#3EAD6E',
    huur: '€ 425 – 550',
    auto: 'Optioneel',
    sfeer: 'Trendy, lokale horeca, kleurrijk',
    afstand: 'Loopafstand Willemstad centrum',
    img: '/img/wijk-pietermaai.jpg',
    pros: ['Levendig buurtleven', 'Goede restaurants & bars', 'Loopafstand naar centrum', 'Unieke Curaçaose sfeer'],
    cons: ['Duurder dan andere wijken', 'Minder studentenhuizen beschikbaar', 'Iets lawaaiiger s\'avonds'],
    voor: 'Voor wie het lokale leven wil meemaken en niet per se naar het strand wil lopen.',
  },
  {
    naam: 'Salinja / Otrobanda',
    color: '#1A7EC5',
    huur: '€ 300 – 400',
    auto: 'Handig maar niet noodzakelijk',
    sfeer: 'Lokaal, centraal, divers',
    afstand: 'Centrum Willemstad',
    img: '/img/Otrobanda.jpg',
    pros: ['Betaalbaar', 'Centraal gelegen', 'Lokale supermarkten dichtbij', 'Authentiek Curaçaos'],
    cons: ['Minder populair bij studenten', 'Minder groen', 'Varieert sterk per straat'],
    voor: 'Voor studenten die centraal willen wonen zonder te veel te betalen.',
  },
  {
    naam: 'Bapor Kibra / Caracasbaai',
    color: '#E8507A',
    huur: '€ 350 – 425',
    auto: 'Noodzakelijk',
    sfeer: 'Rustig, zee, wat afgelegen',
    afstand: '25 min van Willemstad',
    img: '/img/wijk-bapor-kibra.jpg',
    pros: ['Mooie omgeving', 'Rustig en ruim', 'Relatief goedkoop'],
    cons: ['Echt geïsoleerd zonder auto', 'Weinig voorzieningen', 'Ver van alles'],
    voor: 'Alleen als je een eigen auto hebt én houdt van rust boven nabijheid.',
  },
]

export default function Wonen() {
  const [active, setActive] = useState(null)
  const wijk = active !== null ? WIJKEN[active] : null

  return (
    <>
      <PageHero
        eyebrow="Wonen op Curaçao"
        title="Welke wijk past bij jou?"
        subtitle="Woonlocatie bepaalt of je een auto nodig hebt, hoe ver je van je stageplek zit en hoe je sociale leven eruitziet. Vergelijk de wijken voordat je iets boekt."
        accentColor="#3EAD6E"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Wijk selector */}
        <section className="mb-10">
          <p className="section-label">Kies een wijk</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {WIJKEN.map((w, i) => (
              <button
                key={w.naam}
                onClick={() => setActive(active === i ? null : i)}
                className={`text-left card transition-all overflow-hidden p-0 ${active === i ? 'ring-2' : 'hover:shadow-md'}`}
                style={active === i ? { ringColor: w.color, outline: `2px solid ${w.color}` } : {}}
              >
                <div className="relative h-[100px] overflow-hidden">
                  <img src={w.img} alt={w.naam} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: w.color }} />
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm text-dark mb-1">{w.naam}</p>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-gray-400">Huur: <span className="text-gray-600">{w.huur}</span></p>
                    <p className="text-xs text-gray-400">Auto: <span className="text-gray-600">{w.auto}</span></p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Wijk detail */}
        {wijk && (
          <section className="mb-14">
            <div className="card">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full" style={{ background: wijk.color }} />
                <h2 className="font-serif text-2xl font-normal text-dark">{wijk.naam}</h2>
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">{wijk.afstand}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <p className="text-xs font-medium text-dark mb-3 uppercase tracking-wider">Voordelen</p>
                  <ul className="flex flex-col gap-2">
                    {wijk.pros.map(p => (
                      <li key={p} className="flex gap-2 text-sm text-gray-600">
                        <span style={{ color: wijk.color }}>+</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-dark mb-3 uppercase tracking-wider">Nadelen</p>
                  <ul className="flex flex-col gap-2">
                    {wijk.cons.map(c => (
                      <li key={c} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-gray-300">−</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs font-medium text-dark mb-1">Geschikt voor</p>
                <p className="text-sm text-gray-600">{wijk.voor}</p>
              </div>
            </div>
          </section>
        )}

        {/* Vergelijkingstabel */}
        <section className="mb-14">
          <p className="section-label">Overzichtstabel</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Wijk</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Huur / mnd</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Auto</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Sfeer</th>
                </tr>
              </thead>
              <tbody>
                {WIJKEN.map((w, i) => (
                  <tr key={w.naam} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full shrink-0" style={{ background: w.color }} />
                        <span className="font-medium">{w.naam}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{w.huur}</td>
                    <td className="px-4 py-3 text-gray-600">{w.auto}</td>
                    <td className="px-4 py-3 text-gray-600">{w.sfeer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Woonfraude */}
        <section className="mb-10">
          <p className="section-label">Pas op voor woonfraude</p>
          <div className="card border-l-4" style={{ borderLeftColor: '#D4522A' }}>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Veel studenten zoeken een kamer vanuit Nederland via Facebook-groepen en WhatsApp. Dit is precies de context waar oplichters actief zijn.
            </p>
            <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Signalen dat iets niet klopt</p>
            <ul className="flex flex-col gap-1.5 mb-4">
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-terra shrink-0">·</span>Je kunt de woning niet bekijken zonder eerst borg te betalen</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-terra shrink-0">·</span>De verhuurder vraagt betaling via Western Union, Moneygram of cash vooraf</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-terra shrink-0">·</span>Reacties onder een Facebook-advertentie zijn uitgeschakeld</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-terra shrink-0">·</span>De huurprijs is opvallend laag vergeleken met vergelijkbare woningen</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-terra shrink-0">·</span>De verhuurder heeft haast en zegt dat er "meerdere gegadigden zijn"</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-terra shrink-0">·</span>De woning is bekeken maar de sleutel "volgt zodra de woning vrijkomt"</li>
            </ul>
            <p className="text-xs font-medium text-dark mb-2 uppercase tracking-wider">Wat wel werkt</p>
            <ul className="flex flex-col gap-1.5">
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-sage shrink-0">✓</span>Boek via bekende studentenhuizen met aantoonbare Google- of Trustpilot-reviews</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-sage shrink-0">✓</span>Vraag via je stagebedrijf of school naar aanbevelingen</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-sage shrink-0">✓</span>Betaal borg pas nadat je een getekend huurcontract hebt én de sleutel in handen</li>
              <li className="flex gap-2 text-xs text-gray-500"><span className="text-sage shrink-0">✓</span>Doe een reverse image search op de woningfoto's (Google Lens)</li>
            </ul>
          </div>
        </section>

        {/* Stroom & airco */}
        <div className="card border-l-4 mb-10" style={{ borderLeftColor: '#F2B517' }}>
          <p className="text-sm font-medium text-dark mb-2">Stroom & airco — vraag dit voor je tekent</p>
          <ul className="flex flex-col gap-1.5 mb-3">
            <li className="text-xs text-gray-500">· Is stroom inbegrepen in de huurprijs?</li>
            <li className="text-xs text-gray-500">· Is er een dagelijks verbruikslimiet?</li>
            <li className="text-xs text-gray-500">· Hoe oud is de airco-unit?</li>
          </ul>
          <p className="text-xs text-gray-500 leading-relaxed">
            Airconditioning op Curaçao is geen luxe maar een noodzaak. Maar het is ook de grootste kostenpost. Een huis met slecht geïsoleerde muren en een oude airco kan je per maand honderden guldens extra kosten. Vraag het altijd na.
          </p>
        </div>

        {/* Tip */}
        <div className="card border-l-4 mb-10" style={{ borderLeftColor: '#3EAD6E' }}>
          <p className="text-sm font-medium text-dark mb-2">Praktisch advies: kies groter</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Grotere studentenhuizen (10–30 personen) zijn goedkoper per persoon, socialer en je kunt makkelijker een auto delen. 
            De mooiste studentenhuizen zitten in Jan Thiel en Piscadera. Wil je het echte Curaçao meemaken? Kies Pietermaai.
          </p>
        </div>

        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Auto nodig vanuit jouw wijk?</p>
            <p className="text-sm text-gray-600">Gebruik de beslisboom om te bepalen of je echt een auto nodig hebt.</p>
          </div>
          <Link to="/auto" className="btn-terra shrink-0">Naar auto-beslisboom →</Link>
        </div>
      </div>
    </>
  )
}
