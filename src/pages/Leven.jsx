import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

const STRANDEN = [
  { naam: 'Knip (Playa Kenepa)', afstand: '45 min', tip: 'Spectaculaire baai. Ga vroeg — vol na 11u. Betaald parkeren (±ANG 10). Een van de mooiste van het eiland.', kleur: '#1A7EC5' },
  { naam: 'Cas Abao', afstand: '30 min', tip: 'Privébeheer, betaald (ANG 15–20). Goed rif, goede faciliteiten. Populair bij expats.', kleur: '#3EAD6E' },
  { naam: 'Playa Lagun', afstand: '40 min', tip: 'Klein, rustig, geweldig snorkelen direct vanaf het strand. Schildpadden. Gratis.', kleur: '#D4522A' },
  { naam: 'Mambo Beach', afstand: '10–20 min', tip: 'Betaald (ANG 10). Goed voor een doordeweekse avond. Boulevard met eten, bars en winkels.', kleur: '#F2B517' },
  { naam: 'Porto Marie', afstand: '25 min', tip: 'Kunstmatig koraalrif in zee. Goed snorkelen, kalm water. Betaald (ANG 10). Rustig en mooi.', kleur: '#E8507A' },
  { naam: 'Kleine Knip', afstand: '40 min', tip: 'Kleiner dan Grote Knip, minder bekend. Gratis. Mooie kleuren, goed snorkelen.', kleur: '#1A7EC5' },
]

const ETEN = [
  { type: 'Lokaal & goedkoop', items: [
    { naam: 'Plasa Bieu', buurt: 'Willemstad centrum', desc: 'Overdekte markt met lokale kramen. Stoba, keshi yena, funchi — echte Curaçaose keuken voor een paar tientjes ANG.' },
    { naam: 'Gouverneur de Rouville', buurt: 'Otrobanda', desc: 'Geen toeristenprijzen, lokale sfeer, mooi terras aan het water. Heerlijk ontbijt en lunch.' },
    { naam: 'Zest Beach Club (lunch)', buurt: 'Jan Thiel', desc: 'Beach-vibes met goedkope lunchopties als je vlak in de buurt woont.' },
  ]},
  { type: 'Supermarkten', items: [
    { naam: 'Van den Tweel', buurt: 'meerdere filialen', desc: 'Nederlandse producten, bekende merken. Duurder dan in NL maar vertrouwd. Vind je AH-products hier.' },
    { naam: 'Pricesmart', buurt: 'Salinja', desc: 'Bulkinkopen — goedkoper per eenheid. Ideaal als je met meerdere housegenoten boodschappen doet.' },
    { naam: 'MCD (lokale supers)', buurt: 'overal', desc: 'Lokale supermarktketens zijn goedkoper voor basisproducten. Minder NL-merken, prima voor alledaags.' },
  ]},
  { type: 'Uiteten (betaalbaar)', items: [
    { naam: 'Jaanchie\'s', buurt: 'Westpunt', desc: 'Lokale legende. Iguanastoofpot en andere eilandspecialiteiten. Ver maar de moeite waard voor één keer.' },
    { naam: 'Mundo Bizarro', buurt: 'Pietermaai', desc: 'Trendy maar betaalbaar. Goede cocktails, goede sfeer. Populair bij jonge expats en studenten.' },
    { naam: 'Pasta & Vino', buurt: 'Salinja', desc: 'Goede Italiaan, redelijke prijzen voor Curaçao, altijd vol — reserveer.' },
  ]},
]

const PRAKTISCH = [
  { titel: 'Geld & pinnen', tekst: 'PIN werkt prima bij de meeste supermarkten en winkels. ATM\'s zijn er bij Maduro bank en MCB. Creditcard wordt overal geaccepteerd. Wisselkoers: €1 ≈ ANG 2,00–2,10.' },
  { titel: 'Uitrijden naar Klein Curaçao', tekst: 'Onbewoond eiland, ± 1,5 uur per boot. Absoluut doen. Boek via Miss Ann Boat Trips of Mermaid Boat Trips. ±€50–70 pp inclusief lunch. Plan het voor een rustige dag.' },
  { titel: 'Duiken & snorkelen', tekst: 'Curaçao heeft een van de beste huisriffen ter wereld. Ocean Encounters op Mambo is betrouwbaar. Een duikbrevet halen kan al voor ±€350. Snorkelen is overal goedkoop mogelijk.' },
  { titel: 'Nachtleven', tekst: "Mambo Beach Boulevard voor een casual avond. Wet & Wild voor feesten op zaterdag. Happy hours zijn populair — begin vroeg. Neem altijd een buddy mee voor taxi's 's avonds." },
  { titel: 'Zondagsregels', tekst: 'Veel winkels zijn gesloten of sluiten vroeg op zondag. Plan je boodschappen op zaterdag. Strand en restaurants zijn open. Rustigste dag van de week.' },
  { titel: 'Mobiel & internet', tekst: 'Prepaid bundels bij Digicel of Flow. ±ANG 40 voor een maandbundel met 10GB. WhatsApp werkt op wifi — meeste studenten houden hun NL-nummer actief.' },
]

const GEZONDHEID = [
  { titel: 'Zon onderschatten is het meest gemaakte fout', tekst: 'De passaatwinden geven een gevoel van verkoeling, maar die beschermen je niet tegen verbranden. Tussen 10:00 en 15:00 is de zon het gevaarlijkst. Draag altijd SPF 50, een hoed en lichte kleding. Zonnesteek uit zich als duizeligheid, koorts en misselijkheid.', kleur: '#D4522A' },
  { titel: 'Apotheek = botika', tekst: 'Standaard medicijnen kun je zonder afspraak halen bij een botika. Sommige zijn gesloten tussen 12:00 en 14:00. Een aantal is 24 uur open.', kleur: '#F2B517' },
  { titel: 'Huisarts die Nederlands spreekt', tekst: 'Centro Medico Aesculapius, SBN Doormanweg 47. Bereikbaar op +599 9 737 0522. Ochtend: open spreekuur. Middag: op afspraak. Bewaar je bon — de Nederlandse zorgverzekering vergoedt spoedeisende zorg vaak tot het Nederlandse tarief.', kleur: '#3EAD6E' },
  { titel: 'Zorgverzekering — niet opzeggen', tekst: 'Je blijft officieel ingeschreven in Nederland, dus je houdt je Nederlandse basisverzekering. Neem je zorgpas mee. De basisverzekering dekt spoedeisende zorg wereldwijd tot het Nederlandse tarief. Medische evacuatie naar Nederland kan $15.000–$25.000 kosten — zorg dat je aanvullend verzekerd bent.', kleur: '#1A7EC5' },
  { titel: 'Muggen', tekst: 'Actief in het regenseizoen (juni–november) en \'s avonds. Gebruik insectenwerende spray. Slaap met gesloten ramen of een klamboe.', kleur: '#E8507A' },
  { titel: 'Lichamelijke aanpassing duurt langer dan je denkt', tekst: 'De warmte, luchtvochtigheid en tijdverschil zijn een aanslag op je lichaam de eerste week. Drink meer water dan je denkt nodig te hebben. Kom bij voorkeur een week voor je eerste stagedag aan om te acclimatiseren.', kleur: '#D4522A' },
]

export default function Leven() {
  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Leven op Curaçao"
        title="Het eiland als lokale — niet als toerist."
        subtitle="Stranden, eten, praktische tips en wat je echt moet meemaken. Geen glossy reisgids — gewoon wat werkt voor stagiairs."
        accentColor="#F2B517"
        image="/img/hero-leven.jpg"
        imageAlt="Strand op Curaçao met helder turquoise zeewater en wit zand"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Anti-drift marker */}
        <div className="mb-8 border-l-2 border-gray-200 pl-4 py-1">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
            Onderdeel van de stagegids StageStart Curaçao. Deze pagina is ondersteunend — voor harde vereisten rond vergunning, kosten en verblijf gelden de officiële bronnen op de kernpagina's.
          </p>
        </div>

        {/* Stranden */}
        <section className="mb-14">
          <p className="section-label">Stranden voor stagiairs</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {STRANDEN.map(s => (
              <div key={s.naam} className="card">
                <div className="h-1 rounded-sm mb-3" style={{ background: s.kleur }} />
                <p className="font-medium text-sm text-dark mb-1">{s.naam}</p>
                <p className="text-[10px] text-gray-400 mb-2">{s.afstand} rijden</p>
                <p className="text-xs text-gray-500 leading-relaxed">{s.tip}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Tip: Download Maps.me of gebruik Google Maps offline — data is duur als je de weg kwijtraakt.
          </p>
        </section>

        {/* Eten */}
        <section className="mb-14">
          <p className="section-label">Eten — lokaal, betaalbaar, eerlijk</p>
          <div className="flex flex-col gap-8">
            {ETEN.map(cat => (
              <div key={cat.type}>
                <p className="text-xs font-medium text-dark mb-3">{cat.type}</p>
                <div className="flex flex-col gap-0 border border-gray-100 rounded-xl overflow-hidden">
                  {cat.items.map((item, i) => (
                    <div key={i} className="px-5 py-4 border-b border-gray-100 last:border-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <p className="text-sm font-medium text-dark">{item.naam}</p>
                        <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded shrink-0">{item.buurt}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Praktisch */}
        <section className="mb-14">
          <p className="section-label">Praktische dingen om te weten</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {PRAKTISCH.map(p => (
              <div key={p.titel} className="card">
                <p className="font-medium text-sm text-dark mb-2">{p.titel}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{p.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Papiaments */}
        <section className="mb-14">
          <p className="section-label">Paar woorden Papiaments — wordt gewaardeerd</p>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            {[
              ['Bon dia', 'Goedemorgen'],
              ['Bon tardi', 'Goedemiddag'],
              ['Bon nochi', 'Goedenavond'],
              ['Danki', 'Dankjewel'],
              ['Por fabor', 'Alsjeblieft'],
              ['Con ta bai?', 'Hoe gaat het?'],
              ['Ta bai bon', 'Het gaat goed'],
              ['Ayo', 'Dag / tot ziens'],
            ].map(([pap, nl], i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3 border-b border-gray-100 last:border-0">
                <span className="text-sm font-medium text-dark">{pap}</span>
                <span className="text-sm text-gray-500">{nl}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Je hoeft geen vloeiend Papiaments te spreken. Een paar basiswoorden laten zien dat je moeite doet — en dat wordt erg gewaardeerd.
          </p>
          <div className="mt-5 border-l-4 rounded-xl card" style={{ borderColor: '#3EAD6E' }}>
            <p className="font-medium text-sm text-dark mb-2">Culturele taalnotitie</p>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              Papiaments is een mengeling van Portugees, Spaans, Nederlands en Afrikaanse talen. 'Dushi' is het meest gebruikte woord op het eiland — het betekent zoet, lief, geweldig, briljant. Iedereen gebruikt het, alle leeftijden, alleen in positieve zin.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Op het eiland groet men iedereen — ook vreemden in een winkel of op straat. Oogcontact + een kort 'Bon dia' gaat een lange weg. Doe je dat niet, val je op als onbeleefd.
            </p>
          </div>
        </section>

        {/* Gezondheid */}
        <section className="mb-14">
          <p className="section-label">Gezondheid — wat je vooraf moet weten</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {GEZONDHEID.map(g => (
              <div key={g.titel} className="card">
                <div className="h-1 rounded-sm mb-3" style={{ background: g.kleur }} />
                <p className="font-medium text-sm text-dark mb-2">{g.titel}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{g.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mentaal & emotioneel */}
        <section className="mb-14">
          <p className="section-label">Het mentale deel — dat niemand je vertelt</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Curaçao ziet er makkelijk uit op foto{"'"}s. In werkelijkheid kan de eerste maand zwaarder zijn dan verwacht. Niet omdat er iets mis is, maar omdat aanpassen aan een nieuwe omgeving altijd energie kost.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="card">
              <div className="h-[3px] rounded-sm mb-3" style={{ background: '#C0522A' }} />
              <p className="text-sm font-medium text-dark mb-2">De honeymoon eindigt rond week 3</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                De eerste weken voelen spannend en nieuw. Daarna begint de realiteit: hitte, moeheid, missen van vertrouwde dingen, het gevoel dat je wereld klein is geworden. Dit is normaal en tijdelijk. Het heeft een naam: cultuurshock. Vrijwel iedereen ervaart het. Het gaat voorbij.
              </p>
            </div>
            <div className="card">
              <div className="h-[3px] rounded-sm mb-3" style={{ background: '#E2A832' }} />
              <p className="text-sm font-medium text-dark mb-2">Curaçao is misleidend dichtbij</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Het eiland voelt vertrouwd — Nederlands, koninkrijksband, winkels die je kent. Toch is het fundamenteel anders: tempo, sociale codes, armoede naast toerisme, kleinschaligheid. Die combinatie maakt het soms moeilijker te benoemen dan een "echt buitenland". Geef jezelf toestemming om het toch moeilijk te vinden.
              </p>
            </div>
            <div className="card">
              <div className="h-[3px] rounded-sm mb-3" style={{ background: '#5A9E7A' }} />
              <p className="text-sm font-medium text-dark mb-2">Wat concreet helpt</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Maak contact buiten je eigen studentengroep. Houd een vaste routine aan (slaap, eten, beweging). Bel thuis op vaste momenten — maar niet elke dag. Schrijf op hoe je je voelt. Ga naar buiten ook als je geen zin hebt. Een strand is goedkoper dan therapie en heeft vergelijkbaar effect.
              </p>
            </div>
            <div className="card">
              <div className="h-[3px] rounded-sm mb-3" style={{ background: '#3B8FB5' }} />
              <p className="text-sm font-medium text-dark mb-2">Als het niet weggaat</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Eenzaamheid die aanhoudt na week 6, slaapproblemen, verlies van motivatie voor je stage — dit zijn signalen dat je hulp mag zoeken. Praat met je begeleider op stage of op school. Je school in Nederland heeft vaak een studentenpsycholoog of vertrouwenspersoon die ook op afstand beschikbaar is. Dat is geen mislukking, dat is slim.
              </p>
            </div>
          </div>
        </section>

        {/* Lokale gerechten */}
        <section className="mb-14">
          <p className="section-label">Lokale gerechten die je moet proberen</p>
          <div className="card">
            <ul className="space-y-2">
              <li className="text-xs text-gray-500 leading-relaxed"><span className="font-medium text-dark">Keshi Yena</span> — gevulde kaas, iconisch Curaçaos gerecht</li>
              <li className="text-xs text-gray-500 leading-relaxed"><span className="font-medium text-dark">Stoba</span> — stevige stoofschotel, typisch lokaal</li>
              <li className="text-xs text-gray-500 leading-relaxed"><span className="font-medium text-dark">Pastechi</span> — gebakken bladerdeegbroodje (kaas, tonijn, vlees of kip)</li>
              <li className="text-xs text-gray-500 leading-relaxed"><span className="font-medium text-dark">Batido</span> — verse fruitshake met of zonder melk en suiker</li>
              <li className="text-xs text-gray-500 leading-relaxed"><span className="font-medium text-dark">Seafood</span> — verse vis is overal, combinatie van Caribisch, Nederlands en Latijns-Amerikaans</li>
            </ul>
          </div>
        </section>

        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Alles al geregeld voor vertrek?</p>
            <p className="text-sm text-gray-600">Check de vertrekchecklist om zeker te zijn dat je niets mist.</p>
          </div>
          <Link to="/voor-vertrek" className="btn-terra shrink-0">Checklist bekijken →</Link>
        </div>

        <LastChecked
          date="2026-04-18"
          bron="Eigen redactie — ervaringsinzicht"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
