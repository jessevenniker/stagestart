import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

const HAPPY_HOURS = [
  // DAGELIJKS
  { naam: "Kant'i Awa", dag: ["ma","di","wo","do","vr","za","zo"], van: "16:00", tot: "19:00", omschrijving: "Rustige strandbar-sfeer. Chilled drinks, laid-back crowd.", locatie: "Kant'i Awa" },
  { naam: "Saint Tropez Ocean Club", dag: ["ma","di","wo","do","vr","za","zo"], van: "18:00", tot: null, omschrijving: "Cocktails met oceaanzicht in Pietermaai. Rustig begin van de avond.", locatie: "Saint Tropez Ocean Club, Pietermaai" },
  { naam: "Cascada Rooftop Bar", dag: ["ma","di","wo","do","vr","za","zo"], van: "17:00", tot: "19:00", omschrijving: "Stad- en oceaanzicht. Rijnboulevard sfeer op een dak.", locatie: "Elements Hotel" },
  { naam: "5 o'Clock Somewhere", dag: ["ma","di","wo","do","vr","za","zo"], van: "17:00", tot: "19:00", omschrijving: "Twee happy hours per dag: 17:00–19:00 en 21:00–22:00. In het Rif Fort.", locatie: "Renaissance Mall & Rif Fort", extra: "Ook 21:00–22:00" },
  { naam: "Wet & Wild", dag: ["ma","di","wo","do","vr","za","zo"], van: "20:00", tot: "21:00", omschrijving: "Dagelijks happy hour met oceaanzicht. Avond loopt door tot strandfeest.", locatie: "Wet & Wild Beach Club, Mambo Beach Boulevard" },
  { naam: "Madero Ocean Club", dag: ["ma","di","wo","do","vr","za","zo"], van: "21:00", tot: "22:00", omschrijving: "Late happy hour. Op speciale avonden ook 22–23u.", locatie: "Madero Ocean Club", extra: "Soms ook 22:00–23:00" },
  { naam: "Heineken Snek", dag: ["ma","di","wo","do","vr","za","zo"], van: "16:00", tot: null, omschrijving: "Dagelijks happy hour. Koude drankjes en snacks langs de Caracasbaaiweg.", locatie: "Caracasbaaiweg" },
  { naam: "Bijna Thuis", dag: ["ma","di","wo","do","vr","za","zo"], van: "17:00", tot: null, omschrijving: "Sports bar & restaurant. Casual en vertrouwd.", locatie: "Bijna Thuis Sports Bar & Restaurant" },
  { naam: "Schooner Bar", dag: ["ma","di","wo","do","vr","za","zo"], van: "17:00", tot: null, omschrijving: "Waterfront stop bij Avila Beach Hotel. Rustig en tijdloos.", locatie: "Avila Beach Hotel" },
  { naam: "De Heeren at Sea", dag: ["ma","di","wo","do","vr","za","zo"], van: "17:00", tot: null, omschrijving: "Oceanfront in Pietermaai. Casual afsluiting van de dag.", locatie: "Scuba Lodge, Pietermaai" },
  { naam: "Tony Roma's", dag: ["ma","di","wo","do","vr","za","zo"], van: "17:00", tot: "19:00", omschrijving: "Herkenbare sfeer. Locals en bezoekers samen voor een rustige avonddrink.", locatie: "Tony Roma's" },
  { naam: "Bonita Beach Club", dag: ["ma","di","wo","do","vr","za","zo"], van: "17:00", tot: "19:00", omschrijving: "Vlak op het strand bij Mambo. Voeten in het zand, drankje in de hand.", locatie: "Mambo Beach Boulevard" },
  { naam: "Hemingway", dag: ["ma","di","wo","do","vr","za","zo"], van: "17:30", tot: "18:30", omschrijving: "Aan de golven bij Mambo. Begint rustig, eindigt als een volle avond.", locatie: "Hemingway, Mambo Beach" },
  { naam: "Pirate Bay", dag: ["ma","di","wo","do","vr","za","zo"], van: "17:00", tot: null, omschrijving: "Toes-in-the-sand sfeer. Zonsondergang over water.", locatie: "Pirate Bay Beach Bar & Restaurant, Piscadera" },
  { naam: "Zanzibar", dag: ["ma","di","wo","do","vr","za","zo"], van: "17:00", tot: "18:00", omschrijving: "Beachside happy hour met pizza. Elke dag, maar zaterdag is de legende.", locatie: "Zanzibar, Jan Thiel Beach" },
  { naam: "Mia Nonna", dag: ["ma","di","wo","do","vr","za","zo"], van: "17:00", tot: "18:00", omschrijving: "Casual en vertrouwd. Je staat voor je het weet een uur later nog.", locatie: "Mia Nonna" },
  { naam: "BijBlauw", dag: ["ma","di","wo","do","vr","za","zo"], van: "15:00", tot: "17:00", omschrijving: "Vroegste happy hour op het eiland. Drankjes mét gratis snacks. Populair voor zonsondergang.", locatie: "BijBlauw Oceanfront Restaurant, Pietermaai" },
  { naam: "Boho6 Terrace Café", dag: ["ma","di","wo","do","vr","za","zo"], van: "18:00", tot: null, omschrijving: "Terras in Punda. People-watching, gemakkelijk begin van de avond.", locatie: "Gomez Plein, Punda" },
  // MAANDAG
  { naam: "Netto Bar", dag: ["ma"], van: "18:00", tot: "19:00", omschrijving: "Oudste bar van Curaçao (1954). Enige plek voor Rom-Berde, de lokale groene rum. Klassiek.", locatie: "Otrobanda" },
  { naam: "Oyster Monday – Lamunchi", dag: ["ma"], van: "18:00", tot: "19:00", omschrijving: "Versgevilde oesters + halve prijs cava van 18–19u. Dinner menu beschikbaar.", locatie: "Lamunchi, Pietermaai" },
  { naam: "Sushi & Cocktails – Saint Tropez", dag: ["ma"], van: "18:00", tot: "22:00", omschrijving: "Twee sushi-chefs erbij op maandag. Japans menu met oceaanzicht.", locatie: "Saint Tropez Ocean Club" },
  // DINSDAG
  { naam: "Bar P", dag: ["di"], van: "21:00", tot: "22:00", omschrijving: "Gratis entree vóór 22u. Rad van fortuin met kans op gratis drankjes. Altijd vol.", locatie: "Bar P, Pietermaai" },
  { naam: "Sopranos / Caribbean Vibes", dag: ["di"], van: "21:00", tot: "22:00", omschrijving: "Latin dansavond: salsa, bachata, merengue, kizomba. DJ Dion. 2-voor-1 tijdens HH.", locatie: "Sopranos Sports Bar" },
  { naam: "Karaoke – Tap Maar In", dag: ["di"], van: "17:00", tot: "19:00", omschrijving: "Happy hour 17–19u, karaoke vanaf 20u. Lokale stamkroeg. Eigenaar Nina zorgt voor sfeer.", locatie: "Tap Maar In, Willemstad" },
  { naam: "Tequila & Taco Tuesdays – Mondi", dag: ["di"], van: "19:00", tot: null, omschrijving: "Tacos en tequila. Live muziek Los Cheveres. Relaxte dinsdag met karakter.", locatie: "Mondi" },
  { naam: "Lazy Tuesday – Brass Boer", dag: ["di"], van: "18:00", tot: null, omschrijving: "Casual sharing-avond. Geen formaliteiten, gewoon goed eten en goed gezelschap.", locatie: "Brass Boer, Blue Bay" },
  // WOENSDAG
  { naam: "Cabana Beach", dag: ["wo"], van: "20:00", tot: "21:00", omschrijving: "Diner + live muziek Gino & Friends vanaf 19u. DJ’s Carlito, Alain en Alex Sargo later op de avond.", locatie: "Cabana Beach Club, Seaquarium Beach" },
  { naam: "Studentenavond – Nieuwestraat Pietermaai", dag: ["wo"], van: "18:00", tot: null, omschrijving: "Meerdere spots met student-deals voor eten en drinken. Dé studentenavond van de week.", locatie: "Nieuwestraat, Pietermaai" },
  { naam: "Fresh Curaçao – Eden Mall", dag: ["wo"], van: "18:00", tot: null, omschrijving: "Rustige midweek stop. Goede sfeer in winkelcentrum setting.", locatie: "Eden Shopping Mall" },
  { naam: "Sunset Campfire – Blue Bay", dag: ["wo"], van: "19:00", tot: null, omschrijving: "Live muziek bij het vuur op het strand. Neem een deken mee.", locatie: "Blue Bay Beach" },
  { naam: "Unplugged Sessions – Zanzibar", dag: ["wo"], van: "19:30", tot: "22:30", omschrijving: "Live muziek, oceaanwind, koude drankjes. Midweek ontsnapping op het zand.", locatie: "Zanzibar, Jan Thiel" },
  { naam: "Karaoke – Gaze Bar & Lounge", dag: ["wo"], van: "20:00", tot: "01:00", omschrijving: "LGBTQ+ hotspot in Punda. Karaoke en cocktails. Iedereen wordt aangemoedigd.", locatie: "Café de Tijd Eetbar, Punda" },
  // DONDERDAG
  { naam: "Bar P – Red Cup Thursday", dag: ["do"], van: "22:00", tot: "23:00", omschrijving: "Eerste 50 gasten krijgen XL cups voor speciale prijs. All-you-can-drink vanaf 22u.", locatie: "Bar P, Pietermaai" },
  { naam: "Lemongrass – Blue Bay", dag: ["do"], van: "17:00", tot: "18:00", omschrijving: "Cocktails met uitzicht op het water terwijl de zon ondergaat.", locatie: "Lemongrass, Blue Bay Golf & Beach Resort" },
  { naam: "Stëlz Thursday – Club LIV", dag: ["do"], van: "23:00", tot: "01:00", omschrijving: "Late-night happy hour. Donderdag wordt vrijdag in dit formaat.", locatie: "Club LIV" },
  { naam: "Kaya Kaya Artwalk", dag: ["do"], van: "09:00", tot: null, omschrijving: "Rondleiding door street art in Otrobanda. Muren als museum. In het Nederlands. Reserveren vereist.", locatie: "The Hub, Breedestraat, Otrobanda" },
  // VRIJDAG
  { naam: "Bario Food Yard", dag: ["vr"], van: "17:00", tot: "19:00", omschrijving: "Wekelijkse Friday kick-off in Otrobanda. Buurtsfeer, koude drankjes, lokale bites.", locatie: "Bario Food Yard, Otrobanda" },
  { naam: "Chill Beach Bar & Grill", dag: ["vr"], van: "17:00", tot: "18:00", omschrijving: "Kleurrijke strandbartent op Mambo. Swimsuits en zandvoeten welkom. Instagram-favoriet.", locatie: "Mambo Beach Boulevard" },
  { naam: "De Heeren Zuikertuin", dag: ["vr"], van: "17:00", tot: null, omschrijving: "Einde-van-de-werkweek sfeer. Mensen druppelen binnen, avond begint rustig.", locatie: "De Heeren Zuikertuin" },
  { naam: "Netto Bar (vrijdag)", dag: ["vr"], van: "17:00", tot: "18:00", omschrijving: "Lokale klassieker. IJskoude bieren en groene rum op straathoek in Otrobanda.", locatie: "Netto Bar, Otrobanda" },
  { naam: "Taquería Maya", dag: ["vr"], van: "18:00", tot: "19:00", omschrijving: "50% korting op alle drankjes. Hele avond: 50% korting op margaritas.", locatie: "Taquería Maya, Pietermaai" },
  { naam: "Sopranos (vrijdag)", dag: ["vr"], van: "21:00", tot: "22:00", omschrijving: "Salsa, bachata, merengue. Vrijdag is altijd heter dan dinsdag.", locatie: "Sopranos Sports Bar" },
  { naam: "Karaoke – Tap Maar In (vrijdag)", dag: ["vr"], van: "17:00", tot: "19:00", omschrijving: "Happy hour 17–19u. Karaoke vanaf 21u. Vertrouwde kroeg, goede sfeer.", locatie: "Tap Maar In, Willemstad" },
  { naam: "Oyster & Champagne – Bida Beach", dag: ["vr"], van: "17:00", tot: null, omschrijving: "Champagne, oesters, DJ. Licht en feestelijk aan het water.", locatie: "Bida Beach" },
  { naam: "Aperol Spritz – Zest Beach Café", dag: ["vr"], van: "18:00", tot: "19:00", omschrijving: "Spritz op het strand bij Jan Thiel. Rustige afsluiting van de dag.", locatie: "Zest Beach Café, Jan Thiel" },
  { naam: "Blue Bay Beach (vrijdag)", dag: ["vr"], van: "17:00", tot: null, omschrijving: "Zon in zee, drankje in de hand. Live muziek 18–21u.", locatie: "Blue Bay Beach Bar & Restaurant" },
  { naam: "BBQ Night – Salú Chogogo", dag: ["vr"], van: "18:00", tot: null, omschrijving: "Buffet-BBQ in resort tuin. Gezinnen, groepen, iedereen op eigen tempo.", locatie: "Salú Chogogo Resort" },
  { naam: "Between Friends – La Hacienda", dag: ["vr"], van: "19:00", tot: null, omschrijving: "Kan sangria + mixed grill voor 4 personen. Live band of DJ. Sociale groepssfeer.", locatie: "La Hacienda Olivia" },
  { naam: "Lobster Fest – Van Rooi", dag: ["vr"], van: "12:00", tot: "22:00", omschrijving: "Elke laatste vrijdag van de maand. Hele kreeft voor XCG 100. Klassiek ritueel.", locatie: "Van Rooi Fish & Seafood Restaurant", extra: "Elke laatste vrijdag van de maand" },
  // ZATERDAG
  { naam: "Zanzibar (zaterdag)", dag: ["za"], van: "17:00", tot: "18:00", omschrijving: "HÉT moment van de week voor stagiairs. 2-voor-1. DJ + live band. Al jarenlang het anker.", locatie: "Zanzibar, Jan Thiel Beach" },
  { naam: "Papagayo Beach Club", dag: ["za"], van: "17:00", tot: "19:00", omschrijving: "Na het strand binnenlopen, drankje pakken en de zon laten zakken.", locatie: "Papagayo Beach Club" },
  { naam: "Rilèks Beach Bar", dag: ["za"], van: "16:30", tot: "18:00", omschrijving: "Schoenen uit, strand aan, drankje erbij. Niets gehaast.", locatie: "Rilèks Beach Bar, Mambo Beach" },
  { naam: "Amazonia", dag: ["za"], van: "17:00", tot: "19:00", omschrijving: "Korting op drankjes + live muziek. Crowd die duidelijk aan het beginnen is.", locatie: "Amazonia" },
  { naam: "Ginger", dag: ["za"], van: "17:00", tot: null, omschrijving: "Cocktails en weekendsfeer in Pietermaai.", locatie: "Ginger, Pietermaai" },
  { naam: "Catch by Ash – Café de Tijd", dag: ["za"], van: "17:00", tot: "21:00", omschrijving: "Verse vis op basis van vangst van de dag. Menu wisselt altijd. Simpel en goed.", locatie: "Café de Tijd" },
  { naam: "Taco Dag – Lamunchi", dag: ["za"], van: "18:00", tot: "22:00", omschrijving: "Unlimited tacos voor $20. Kip, rund, vegan of garnaal. Huisgemaakte salsa.", locatie: "Lamunchi, Pietermaai" },
  { naam: "Karaoke – Tap Maar In (zaterdag)", dag: ["za"], van: "17:00", tot: "19:00", omschrijving: "Happy hour 17–19u. Karaoke vanaf 21u. Zelfde vertrouwde sfeer als vrijdag.", locatie: "Tap Maar In, Willemstad" },
  // ZONDAG
  { naam: "KofiHowz Kunuku", dag: ["zo"], van: "16:00", tot: "17:00", omschrijving: "Na Christoffel Park de perfecte afsluiting. Lokaal en rustig. Westpunt-ritme.", locatie: "KofiHowz Kunuku, Savonet (bij Christoffel Park)" },
  { naam: "Caribbean Nights – Wet & Wild", dag: ["zo"], van: "18:00", tot: "00:00", omschrijving: "Strandfeest. Salsa, bachata, urban, house, reggaeton. HH 20–21u. Dansen op blote voeten.", locatie: "Wet & Wild Beach Club" },
  { naam: "Sunset Sunday – ZOH", dag: ["zo"], van: "18:00", tot: "21:00", omschrijving: "Diner met live Caribische muziek. Brotherhood Music. Rustig begin van de nieuwe week.", locatie: "ZOH Restaurant" },
  { naam: "Super Sushi Sunday – The Lemon Beach", dag: ["zo"], van: "17:00", tot: null, omschrijving: "Sushi, sashimi en gyoza met oceaanzicht. Goed afsluiten van het weekend.", locatie: "The Lemon Beach" },
]

const DAGEN = [
  { key: 'ma', label: 'Ma', full: 'Maandag' },
  { key: 'di', label: 'Di', full: 'Dinsdag' },
  { key: 'wo', label: 'Wo', full: 'Woensdag' },
  { key: 'do', label: 'Do', full: 'Donderdag' },
  { key: 'vr', label: 'Vr', full: 'Vrijdag' },
  { key: 'za', label: 'Za', full: 'Zaterdag' },
  { key: 'zo', label: 'Zo', full: 'Zondag' },
]

const COLORS = ['#D4522A', '#F2B517', '#3EAD6E', '#1A7EC5', '#E8507A']

const CLUBS = [
  { title: 'Wet & Wild After Dark', desc: 'Vrijdag en zondag. Beach parties met dj’s. Locals + toeristen + stagiairs.' },
  { title: 'Cabana Nightclub', desc: 'Woensdag populair. Thema-avonden. Mix van internationaal en locals.' },
  { title: 'LIV Curaçao', desc: 'Grote club. Internationale dj’s, lichtshows. Vergelijkbaar met Ibiza-clubs.' },
]

const PRAKTISCH = [
  'Bij de meeste happy hours is het 2-voor-1 op bier, wijn of mixdrankjes.',
  'Lokaal bier: Polar, Bright of Brasa, niet Heineken, dat is duurder.',
  'Geen rijden na drinken. Bob-systeem werkt goed in de meeste studentenhuizen.',
  'Ga nooit alleen naar een taxi na middernacht, altijd met iemand.',
  'Ga op vrijdag vroeg naar Mambo (17:00) en werk je weg langs de bars tot Wet & Wild.',
]

export default function HappyHours() {
  const [dag, setDag] = useState('vr')

  const dagelijks = HAPPY_HOURS.filter(h => h.dag.length === 7)
  const specifiek = HAPPY_HOURS.filter(h => h.dag.includes(dag) && h.dag.length < 7)

  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Happy hours & uitgaan"
        title="Het sociale ritme van Curaçao, dag voor dag."
        subtitle="Stagiairs delen dit schema onderling maar het staat nergens goed op één plek. Tot nu."
        accentColor="#F2B517"
        image="/img/hero-happy-hours.jpg"
        imageAlt="Cocktails bij zonsondergang in een bar aan de Curaçaose kust"
      />

      <div className="max-w-5xl mx-auto px-5 pb-16">

        {/* Anti-drift marker */}
        <div className="mb-8 border-l-2 border-gray-200 pl-4 py-1">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
            Onderdeel van de stagegids StageStart Curaçao. Deze pagina is ondersteunend, voor harde vereisten rond vergunning, kosten en verblijf gelden de officiële bronnen op de kernpagina's.
          </p>
        </div>

        {/* Map banner */}
        <Link
          to="/kaart"
          className="block card mb-6 hover:shadow-md transition-shadow border-l-4"
          style={{ borderLeftColor: '#F2B517' }}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🍹</span>
              <div>
                <p className="text-sm font-medium text-dark">Bekijk alle happy hours op de kaart</p>
                <p className="text-xs text-gray-500">Vind de happy hours het dichtst bij jou.</p>
              </div>
            </div>
            <span className="text-gold text-sm shrink-0">→</span>
          </div>
        </Link>

        {/* Dag selector */}
        <section className="mb-14">
          <h2 className="section-label">Kies een dag</h2>
          <div className="flex gap-2 mb-6 flex-wrap">
            {DAGEN.map((d) => (
              <button
                key={d.key}
                onClick={() => setDag(d.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  dag === d.key
                    ? 'bg-gold text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Specifieke events voor deze dag */}
          {specifiek.length > 0 && (
            <>
              <p className="text-xs font-medium text-dark uppercase tracking-wider mb-3">
                {DAGEN.find(d => d.key === dag)?.full} specials
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {specifiek.map((h, i) => (
                  <div key={h.naam} className="card">
                    <div className="h-[3px] rounded-sm mb-3" style={{ background: COLORS[i % COLORS.length] }} />
                    <p className="text-sm font-medium text-dark mb-1">{h.naam}</p>
                    <p className="text-xs text-gray-400 mb-2">
                      {h.van}{h.tot ? `–${h.tot}` : '+'} · {h.locatie}
                    </p>
                    {h.extra && (
                      <span className="inline-block text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded mb-2">{h.extra}</span>
                    )}
                    <p className="text-xs text-gray-500 leading-relaxed">{h.omschrijving}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Dagelijkse happy hours */}
          <p className="text-xs font-medium text-dark uppercase tracking-wider mb-3">Elke dag</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {dagelijks.map((h, i) => (
              <div key={h.naam} className="card">
                <p className="text-sm font-medium text-dark mb-1">{h.naam}</p>
                <p className="text-xs text-gray-400 mb-2">
                  {h.van}{h.tot ? `–${h.tot}` : '+'} · {h.locatie}
                </p>
                {h.extra && (
                  <span className="inline-block text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded mb-2">{h.extra}</span>
                )}
                <p className="text-xs text-gray-500 leading-relaxed">{h.omschrijving}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clubs */}
        <section className="mb-14">
          <h2 className="section-label">Clubs voor later op de avond</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {CLUBS.map((c, i) => (
              <div key={c.title} className="card">
                <div className="h-[3px] rounded-sm mb-3" style={{ background: COLORS[i % COLORS.length] }} />
                <p className="text-sm font-medium text-dark mb-2">{c.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Praktische tips */}
        <section className="mb-14">
          <h2 className="section-label">Praktische tips</h2>
          <div className="card">
            <ul className="flex flex-col gap-2">
              {PRAKTISCH.map((t, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600">
                  <span className="text-gold shrink-0">✓</span>{t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-cream rounded-2xl p-8 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
          <div>
            <p className="font-serif text-xl font-normal text-dark mb-1">Meer over lokaal leven op Curaçao</p>
            <p className="text-sm text-gray-600">Stranden, restaurants, Papiaments en praktische tips.</p>
          </div>
          <Link to="/leven" className="btn-terra shrink-0">Bekijk lokaal leven →</Link>
        </div>

        <LastChecked
          date="2026-04-18"
          bron="Eigen redactie, happy hour-overzicht"
          gevoeligheid="middel"
        />
      </div>
    </>
  )
}
