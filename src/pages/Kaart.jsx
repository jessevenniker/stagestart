import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import PageHero from '../components/PageHero'
import LastChecked from '../components/LastChecked'
import { ALLE_LOCATIES, CATEGORIE_CONFIG } from '../data/locaties'

const CURACAO_CENTER = [12.18, -68.97]
const DEFAULT_ZOOM = 11

// Custom marker icon (gekleurde cirkel met emoji)
function makeIcon(kleur, icon) {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: ${kleur};
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    ">${icon}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14],
  })
}

export default function Kaart() {
  // Initiële actieve categorieën op basis van defaultOn
  const [actief, setActief] = useState(() => {
    const init = {}
    CATEGORIE_CONFIG.forEach(c => { init[c.key] = c.defaultOn })
    return init
  })

  function toggle(key) {
    setActief(p => ({ ...p, [key]: !p[key] }))
  }

  function alleAan() {
    const all = {}
    CATEGORIE_CONFIG.forEach(c => { all[c.key] = true })
    setActief(all)
  }

  function alleUit() {
    const none = {}
    CATEGORIE_CONFIG.forEach(c => { none[c.key] = false })
    setActief(none)
  }

  // Filter locaties op basis van actieve categorieën
  const zichtbaar = useMemo(
    () => ALLE_LOCATIES.filter(loc => actief[loc.categorie]),
    [actief]
  )

  // Maak iconen alleen voor de zichtbare categorieën (geheugen-efficiënt)
  const iconenPerCategorie = useMemo(() => {
    const map = {}
    CATEGORIE_CONFIG.forEach(c => {
      map[c.key] = makeIcon(c.kleur, c.icon)
    })
    return map
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Interactieve kaart"
        title="Alles op Curaçao op één kaart."
        subtitle="Stranden, happy hours, supermarkten, weekendtrips, wijken en veiligheidsinfo — op de plek waar het is."
        accentColor="#1A7EC5"
      />

      <div className="max-w-6xl mx-auto px-5 pb-16">

        {/* Anti-drift marker */}
        <div className="mb-8 border-l-2 border-gray-200 pl-4 py-1">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
            Onderdeel van de stagegids StageStart Curaçao. Deze kaart is ondersteunend — voor harde vereisten rond vergunning, kosten en verblijf gelden de officiële bronnen op de kernpagina's.
          </p>
        </div>

        {/* Filter paneel */}
        <div className="card mb-4">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <p className="text-sm font-medium text-dark">
              Filter categorieën <span className="text-gray-400 font-normal">({zichtbaar.length} locaties zichtbaar)</span>
            </p>
            <div className="flex gap-2">
              <button
                onClick={alleAan}
                className="text-xs text-gray-500 hover:text-dark transition-colors px-2 py-1 rounded hover:bg-gray-50"
              >
                Alles aan
              </button>
              <button
                onClick={alleUit}
                className="text-xs text-gray-500 hover:text-dark transition-colors px-2 py-1 rounded hover:bg-gray-50"
              >
                Alles uit
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIE_CONFIG.map(cat => {
              const aantal = ALLE_LOCATIES.filter(l => l.categorie === cat.key).length
              const isActief = actief[cat.key]
              return (
                <button
                  key={cat.key}
                  onClick={() => toggle(cat.key)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all ${
                    isActief
                      ? 'border-dark text-dark bg-white'
                      : 'border-gray-200 text-gray-400 bg-gray-50'
                  }`}
                >
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ background: isActief ? cat.kleur : '#e5e7eb' }}
                  />
                  <span>{cat.icon}</span>
                  <span className="font-medium">{cat.key}</span>
                  <span className="text-gray-400">({aantal})</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* De kaart */}
        <div className="rounded-2xl overflow-hidden border border-gray-200" style={{ height: '600px' }}>
          <MapContainer
            center={CURACAO_CENTER}
            zoom={DEFAULT_ZOOM}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {zichtbaar.map((loc, i) => (
              <Marker
                key={`${loc.categorie}-${i}`}
                position={loc.coords}
                icon={iconenPerCategorie[loc.categorie]}
              >
                <Popup>
                  <div className="min-w-[180px]">
                    <p className="font-medium text-sm text-dark mb-1">{loc.naam}</p>
                    {loc.dag && (
                      <p className="text-[11px] text-gray-400 mb-1">
                        {loc.dag} {loc.tijd && `· ${loc.tijd}`}
                      </p>
                    )}
                    {loc.status && (
                      <span
                        className="inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded mb-1"
                        style={{ background: loc.kleur + '22', color: loc.kleur }}
                      >
                        {loc.status}
                      </span>
                    )}
                    <p className="text-xs text-gray-600 leading-relaxed mb-2">{loc.desc}</p>
                    <Link
                      to={loc.link}
                      className="text-xs font-medium hover:underline"
                      style={{ color: loc.kleur }}
                    >
                      Meer info →
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Legend / info */}
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="card">
            <p className="text-xs font-medium text-dark mb-2">Hoe werkt de kaart</p>
            <ul className="flex flex-col gap-1 text-xs text-gray-500">
              <li>· Klik op een marker voor naam, beschrijving en link.</li>
              <li>· Filter categorieën aan/uit met de knoppen bovenaan.</li>
              <li>· Scroll om in/uit te zoomen, sleep om te bewegen.</li>
              <li>· Werkt ook op mobiel — pinch om te zoomen.</li>
            </ul>
          </div>
          <div className="card">
            <p className="text-xs font-medium text-dark mb-2">Disclaimer</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Coördinaten zijn benaderd voor sommige locaties zonder exacte GPS. Gebruik Google Maps voor navigatie.
              Veiligheidsindicaties zijn algemeen — vertrouw altijd je eigen oordeel.
            </p>
          </div>
        </div>

        <LastChecked
          date="2026-04-18"
          bron="Eigen redactie — locatie-overzicht"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
