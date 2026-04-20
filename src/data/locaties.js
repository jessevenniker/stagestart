// Aggregatie van alle locaties op Curaçao voor de interactieve kaart
// Categorieën: stranden, happyhours, eten, wijken, veiligheid, trips

import { WIJK_COORDS, findCoordsForLocation } from './wijkCoords'

// ─────────────────────────────────────────
// STRANDEN (35), exacte coördinaten
// ─────────────────────────────────────────
export const STRANDEN_LOCATIES = [
  { naam: 'Playa Grote Knip', coords: [12.3526, -69.1515], desc: 'Meest gefotografeerde strand. Wit zand, turquoise water.' },
  { naam: 'Playa Kleine Knip', coords: [12.3413, -69.1525], desc: 'Kleinere, rustigere variant van Grote Knip.' },
  { naam: 'Cas Abao Beach', coords: [12.2283, -69.0922], desc: 'Top Caribisch strand met steiger en duikshop.' },
  { naam: 'Playa Porto Mari', coords: [12.2190, -69.0863], desc: 'Beroemd om dubbel rif. Soms varkens op het strand.' },
  { naam: 'Playa Lagun', coords: [12.0371, -68.7872], desc: 'Smalle baai met schildpadden en leguanen.' },
  { naam: 'Playa Kalki', coords: [12.3756, -69.1578], desc: '"Alice in Wonderland" duikplek bij Westpunt.' },
  { naam: 'Jan Thiel Beach', coords: [12.0751, -68.8797], desc: 'Upscale beachclubs en lounges.' },
  { naam: 'Mambo Beach', coords: [12.0872, -68.8995], desc: 'Lange boulevard met restaurants, bars en nachtleven.' },
  { naam: 'Tugboat Beach', coords: [12.0692, -68.8617], desc: 'Gezonken sleepboot, populair bij snorkelaars.' },
  { naam: 'Playa Grandi (Piskadó)', coords: [12.3704, -69.1540], desc: 'Vissersdorp met schildpadden bij de pier.' },
  { naam: 'Blue Bay Beach', coords: [12.1348, -68.9850], desc: 'Resort beach met top snorkel- en duiklocatie.' },
  { naam: 'Cabana Beach', coords: [12.0883, -68.9003], desc: 'Stijlvolle beachclub naast Mambo.' },
  { naam: 'Kokomo Beach', coords: [12.1610, -69.0046], desc: 'Strandclub met iconische pier en swing.' },
  { naam: 'Karakter Beach', coords: [12.1985, -69.0790], desc: 'Beachfront restaurant in Coral Estates.' },
  { naam: 'Papagayo Beach', coords: [12.0746, -68.8787], desc: 'Luxe beachclub met infinity pool.' },
  { naam: 'Directors Bay', coords: [12.0661, -68.8601], desc: 'Voormalig Shell Oil strand. Top wall-diving.' },
  { naam: 'Daaibooi Beach', coords: [12.2121, -69.0845], desc: 'Familievriendelijke baai bij Soto.' },
  { naam: 'Playa Forti', coords: [12.3671, -69.1537], desc: 'Cliff jumping spot met restaurants boven de kliffen.' },
  { naam: 'Playa Canoa', coords: [12.1748, -68.8661], desc: 'Surfstrand met grote golven (niet zwemmen).' },
  { naam: 'Kite Beach (Sint Joris)', coords: [12.1276, -68.8245], desc: 'Windsurf en kitesurf hotspot.' },
  { naam: 'Piscadera Beach', coords: [12.1228, -68.9690], desc: 'Centrale baai met meerdere restaurants.' },
  { naam: 'Fuik Beach', coords: [12.0549, -68.8343], desc: 'Afgelegen, vooral per boot bereikbaar. Sunday boatparties.' },
  { naam: 'Playa Santa Cruz', coords: [12.3061, -69.1453], desc: 'Vertrekpunt voor Blue Room boottochten.' },
  { naam: 'Caracasbaai Beach', coords: [12.0778, -68.8648], desc: 'Vissersdorp met lokale eettentjes.' },
  { naam: 'Playa Jeremi', coords: [12.3289, -69.1502], desc: 'Stille, ongerepte baai met sunset views.' },
  { naam: 'Playa Marie Pampoen', coords: [12.0910, -68.9050], desc: 'Buurtstrand met lokale sfeer en BBQ\'s.' },
  { naam: 'Corendon Hotel Beach', coords: [12.1086, -68.9453], desc: 'Resort beach met mangroves. Day passes mogelijk.' },
  { naam: 'Marriott Beach', coords: [12.1186, -68.9662], desc: 'Resort beach in Piscadera Bay met huisrif.' },
  { naam: 'Lions Dive Beach', coords: [12.0859, -68.8972], desc: 'Resort beach met top duikcentrum.' },
  { naam: 'Avila Hotel Beach', coords: [12.1007, -68.9219], desc: 'Privé strand van historisch hotel met huisrif.' },
  { naam: 'Boka Sami', coords: [12.1481, -68.9989], desc: 'Traditioneel vissersdorp met kleurrijke boten.' },
  { naam: 'Playa Parasasa', coords: [12.1186, -68.9676], desc: 'Stadsstrand met BBQ\'s en zonsondergang.' },
  { naam: 'Playa Santu Pretu', coords: [12.3029, -69.1490], desc: 'Black Sand Beach: uniek vulkanisch zand.' },
  { naam: 'San Juan Beaches', coords: [12.2535, -69.0987], desc: 'Drie kleine baaien op privé terrein.' },
  { naam: 'Santa Martha Bay', coords: [12.2690, -69.1282], desc: 'Rustige baai met vliegtuigwrak voor duikers.' },
  { naam: 'Playa Hundu', coords: [12.2610, -69.1203], desc: 'Kleine, rustige picknickplek met natuurlijke schaduw.' },
].map(s => ({ ...s, type: 'strand', categorie: 'Stranden', kleur: '#3EAD6E', link: '/stranden' }))

// ─────────────────────────────────────────
// HAPPY HOURS, exacte coördinaten waar bekend
// ─────────────────────────────────────────
const HAPPY_HOURS_RAW = [
  { naam: 'Bario Food Yard', coords: [12.10952, -68.93483], dag: 'Vr', tijd: '17:00–19:00', desc: 'Friday kick-off in Otrobanda.' },
  { naam: "Kant'i Awa", coords: [12.07987, -68.86552], dag: 'Dag.', tijd: '16:00–19:00', desc: 'Rustige strandbar-sfeer.' },
  { naam: 'Saint Tropez Ocean Club', coords: [12.10200, -68.92616], dag: 'Dag.', tijd: 'vanaf 18:00', desc: 'Cocktails met oceaanzicht in Pietermaai.' },
  { naam: 'Taquería Maya', coords: [12.10321, -68.92866], dag: 'Vr', tijd: '18:00–19:00', desc: '50% korting op alle drankjes.' },
  { naam: 'Papagayo Beach Club', coords: [12.07478, -68.87882], dag: 'Za', tijd: '17:00–19:00', desc: 'Beachclub happy hour na het strand.' },
  { naam: 'Bar P', coords: [12.10366, -68.92837], dag: 'Di', tijd: '21:00–22:00', desc: 'Spin the Wheel + gratis entree vóór 22u.' },
  { naam: 'De Heeren Zuikertuin', coords: [12.12191, -68.90196], dag: 'Vr', tijd: 'vanaf 17:00', desc: 'Einde-van-de-werkweek sfeer.' },
  { naam: 'Wet & Wild', coords: [12.08769, -68.89809], dag: 'Dag.', tijd: '20:00–21:00', desc: 'Strandfeest met oceaanzicht.' },
  { naam: 'Sopranos Sports Bar', coords: [12.10551, -68.93717], dag: 'Vr', tijd: '21:00–22:00', desc: 'Salsa, bachata, merengue.' },
  { naam: 'Cascada Rooftop Bar', coords: [12.10453, -68.93289], dag: 'Dag.', tijd: '17:00–19:00', desc: 'Stad- en oceaanzicht op een dak.' },
  { naam: "5 o'Clock Somewhere", coords: [12.10514, -68.93929], dag: 'Dag.', tijd: '17:00–19:00 en 21:00–22:00', desc: 'Twee happy hours per dag in Rif Fort.' },
  { naam: 'Lemongrass at Blue Bay', coords: [12.13937, -68.98281], dag: 'Do', tijd: '17:00–18:00', desc: 'Cocktails met sunset views.' },
  { naam: 'Fresh Curaçao', coords: [12.10492, -68.88175], dag: 'Wo', tijd: 'vanaf 18:00', desc: 'Rustige midweek stop in Eden Mall.' },
  { naam: 'De Heeren at Sea', coords: [12.10194, -68.92651], dag: 'Dag.', tijd: 'vanaf 17:00', desc: 'Oceanfront in Pietermaai.' },
  { naam: "Tony Roma's", coords: [12.11717, -68.90135], dag: 'Dag.', tijd: '17:00–19:00', desc: 'Casual happy hour, locals + visitors.' },
  { naam: 'Madero Ocean Club', coords: [12.08724, -68.89903], dag: 'Dag.', tijd: '21:00–22:00', desc: 'Late happy hour bij het strand.' },
  { naam: 'Amazonia', coords: [12.13777, -68.83445], dag: 'Za', tijd: '17:00–19:00', desc: 'Korting + live muziek.' },
  { naam: 'KofiHowz Kunuku', coords: [12.35735, -69.10802], dag: 'Zo', tijd: '16:00–17:00', desc: 'Westpunt-ritme bij Christoffel Park.' },
  { naam: 'Heineken Snek', coords: [12.10380, -68.88803], dag: 'Dag.', tijd: 'vanaf 16:00', desc: 'Koude drankjes langs Caracasbaaiweg.' },
  { naam: 'Bijna Thuis', coords: [12.10449, -68.88843], dag: 'Dag.', tijd: 'vanaf 17:00', desc: 'Sports bar & restaurant.' },
  { naam: 'Schooner Bar', coords: [12.09989, -68.92151], dag: 'Dag.', tijd: 'vanaf 17:00', desc: 'Waterfront stop bij Avila.' },
  { naam: 'Bonita Beach Club', coords: [12.08661, -68.89879], dag: 'Dag.', tijd: '17:00–19:00', desc: 'Voeten in het zand op Mambo.' },
  { naam: 'Cabana Beach', coords: [12.08830, -68.90020], dag: 'Wo', tijd: '20:00–21:00', desc: 'Live muziek + DJ\'s.' },
  { naam: 'Hemingway', coords: [12.08518, -68.89715], dag: 'Dag.', tijd: '17:30–18:30', desc: 'Aan de golven bij Mambo.' },
  { naam: 'Blue Bay Beach Bar', coords: [12.13481, -68.98501], dag: 'Vr', tijd: 'vanaf 17:00', desc: 'Sunset views met live muziek.' },
  { naam: 'Chill Beach Bar', coords: [12.08660, -68.89857], dag: 'Vr', tijd: '17:00–18:00', desc: 'Kleurrijke strandbartent op Mambo.' },
  { naam: 'Ginger', coords: [12.10327, -68.92861], dag: 'Za', tijd: 'vanaf 17:00', desc: 'Cocktails in Pietermaai.' },
  { naam: 'BijBlauw', coords: [12.10230, -68.92707], dag: 'Dag.', tijd: '15:00–17:00', desc: 'Vroegste happy hour met gratis snacks.' },
  { naam: 'Rilèks Beach Bar', coords: [12.08623, -68.89866], dag: 'Za', tijd: '16:30–18:00', desc: 'Schoenen uit, strand aan.' },
  { naam: 'Boho6 Terrace Café', coords: [12.10537, -68.93369], dag: 'Dag.', tijd: 'vanaf 18:00', desc: 'Terras in Punda met people-watching.' },
  { naam: 'Zanzibar', coords: [12.07586, -68.87972], dag: 'Dag.', tijd: '17:00–18:00', desc: 'Beach happy hour met pizza. Za = legendarisch.' },
  { naam: 'Mia Nonna', coords: [12.14393, -68.95993], dag: 'Dag.', tijd: '17:00–18:00', desc: 'Casual, voor je het weet zit je er een uur.' },
  { naam: 'Netto Bar', coords: [12.10988, -68.93858], dag: 'Vr', tijd: '17:00–18:00', desc: 'Oudste bar van Curaçao (1954). Groene rum.' },
  { naam: 'Pirate Bay', coords: [12.12303, -68.96909], dag: 'Dag.', tijd: 'vanaf 17:00', desc: 'Toes-in-the-sand sfeer in Piscadera.' },
]

export const HAPPYHOUR_LOCATIES = HAPPY_HOURS_RAW.map(h => ({
  ...h,
  type: 'happyhour',
  categorie: 'Happy hours',
  kleur: '#F2B517',
  link: '/happy-hours',
}))

// ─────────────────────────────────────────
// ETEN, geocoded op basis van wijk
// ─────────────────────────────────────────
export const ETEN_LOCATIES = [
  // Truk'i Pan
  { naam: 'BBQ Express', coords: [12.1038, -68.8880], desc: 'Foodtruck met kip, ribs en vis met sauzen. Naast Piri Piri.' },
  { naam: 'Disfruta Más', coords: [12.1042, -68.8870], desc: 'Beste batidos en Venezolaanse arepas.' },
  { naam: 'Hot Pepper', coords: [12.1380, -68.9100], desc: 'Burritos en Mexicaans, open vanaf 21:00.' },
  { naam: 'The Don', coords: [12.1070, -68.9220], desc: 'Street restaurant in Saliña met lomito, burgers en pizza.' },
  // Supermarkten
  { naam: 'Centrum Supermarkt (Mahaai)', coords: [12.1280, -68.9230], desc: 'Goedkoopste supermarkt. Beste assortiment.' },
  { naam: 'Centrum Supermarkt (Piscadera)', coords: [12.1228, -68.9690], desc: 'Goedkoopste supermarkt. Beste assortiment.' },
  { naam: 'Van den Tweel (Willemstad)', coords: [12.1098, -68.9320], desc: 'Nederlandse A-merken, vertrouwd.' },
  { naam: 'Van den Tweel (Jan Thiel)', coords: [12.0758, -68.8800], desc: 'Nederlandse A-merken, vertrouwd.' },
  { naam: 'PriceSmart', coords: [12.1070, -68.9220], desc: 'Bulkinkoopwinkel. Goedkoper per eenheid.' },
  { naam: 'Vreugdenhil', coords: [12.0850, -68.8950], desc: 'Centraal voor Jan Thiel. Verse bakkerij.' },
  { naam: 'Mangusa Hypermarket', coords: [12.1422, -68.9088], desc: 'Grootste supermarkt van het eiland.' },
  { naam: 'Carrefour (Sambil Mall)', coords: [12.1500, -68.9000], desc: 'Internationaal assortiment.' },
].map(e => ({ ...e, type: 'eten', categorie: 'Eten & winkels', kleur: '#D4522A', link: '/eten' }))

// ─────────────────────────────────────────
// WIJKEN (Wonen)
// ─────────────────────────────────────────
export const WIJKEN_LOCATIES = [
  { naam: 'Jan Thiel', coords: [12.0758, -68.8800], desc: 'Strand, resort, internationaal. €375–475/mnd.' },
  { naam: 'Piscadera', coords: [12.1228, -68.9690], desc: 'Rustige universiteitswijk. €350–425/mnd.' },
  { naam: 'Pietermaai', coords: [12.1031, -68.9268], desc: 'Trendy, lokale horeca. €425–550/mnd.' },
  { naam: 'Salinja / Otrobanda', coords: [12.1098, -68.9388], desc: 'Lokaal, centraal. €300–400/mnd.' },
  { naam: 'Bapor Kibra / Caracasbaai', coords: [12.0780, -68.8650], desc: 'Rustig, zee, afgelegen. €350–425/mnd.' },
].map(w => ({ ...w, type: 'wijk', categorie: 'Wijken', kleur: '#1A7EC5', link: '/wonen' }))

// ─────────────────────────────────────────
// VEILIGHEID, wijken met status
// ─────────────────────────────────────────
export const VEILIGHEID_LOCATIES = [
  // Vermijden (rood)
  { naam: 'Koraal Specht', coords: [12.0980, -68.8920], status: 'vermijden', desc: 'Actieve straatbendes. Te voet na zonsondergang vermijden.', kleur: '#C0522A' },
  { naam: 'Souax', coords: [12.1450, -68.9650], status: 'vermijden', desc: 'Hoog criminaliteitsniveau. Komt niet op je route voor.', kleur: '#C0522A' },
  { naam: 'Seru Fortuna', coords: [12.1340, -68.9290], status: 'vermijden', desc: 'Met auto ok, na donker vermijden.', kleur: '#C0522A' },
  // Voorzichtig (geel)
  { naam: 'Marie Pompoen wandelpad', coords: [12.0910, -68.9050], status: 'voorzichtig', desc: 'Mooi maar overvallen voor toeristen. Niet alleen na donker.', kleur: '#E2A832' },
  { naam: 'Punda / Otrobanda centrum', coords: [12.1064, -68.9337], status: 'voorzichtig', desc: 'Toeristisch, let op portemonnee en telefoon.', kleur: '#E2A832' },
].map(v => ({ ...v, type: 'veiligheid', categorie: 'Veiligheid', link: '/veiligheid' }))

// ─────────────────────────────────────────
// WEEKEND TRIPS
// ─────────────────────────────────────────
export const TRIPS_LOCATIES = [
  { naam: 'Christoffel Park', coords: [12.3700, -69.1300], desc: 'Hoogste berg van Curaçao + flamingo\'s. Hele dag.' },
  { naam: 'Shete Boka Nationaal Park', coords: [12.3719, -69.1083], desc: 'Ruige noordkust met blowholes en zeeschildpadden.' },
  { naam: 'Hato Grotten', coords: [12.1900, -68.9600], desc: 'Indianentekeningen + kalksteenformaties. Bij vliegveld.' },
  { naam: 'Klein Curaçao', coords: [11.9833, -68.6500], desc: 'Onbewoond eiland. Boottocht 2u heen, 2u terug.' },
  { naam: 'Blue Room', coords: [12.3061, -69.1453], desc: 'Onderwater grot bij Santa Cruz. Boot of zwemmen.' },
  { naam: 'Westpunt route', coords: [12.3700, -69.1500], desc: 'Multi-stop dag: Grote Knip, Kleine Knip, Forti, Kalki.' },
  { naam: 'Curaçao Ostrich Farm', coords: [12.1450, -68.8290], desc: 'Struisvogels en alligators. Bij Sint Joris baai.' },
  { naam: 'Playa Piskadó (turtles)', coords: [12.3704, -69.1540], desc: 'Zwemmen met schildpadden bij vissersdorp.' },
].map(t => ({ ...t, type: 'trip', categorie: 'Weekendtrips', kleur: '#E8507A', link: '/weekend-trips' }))

// ─────────────────────────────────────────
// COMBINED EXPORT
// ─────────────────────────────────────────
export const ALLE_LOCATIES = [
  ...STRANDEN_LOCATIES,
  ...HAPPYHOUR_LOCATIES,
  ...ETEN_LOCATIES,
  ...WIJKEN_LOCATIES,
  ...VEILIGHEID_LOCATIES,
  ...TRIPS_LOCATIES,
]

export const CATEGORIE_CONFIG = [
  { key: 'Stranden', kleur: '#3EAD6E', icon: '🏖️', defaultOn: true },
  { key: 'Happy hours', kleur: '#F2B517', icon: '🍹', defaultOn: true },
  { key: 'Eten & winkels', kleur: '#D4522A', icon: '🌮', defaultOn: false },
  { key: 'Wijken', kleur: '#1A7EC5', icon: '🏠', defaultOn: false },
  { key: 'Veiligheid', kleur: '#C0522A', icon: '⚠️', defaultOn: false },
  { key: 'Weekendtrips', kleur: '#E8507A', icon: '🗺️', defaultOn: true },
]
