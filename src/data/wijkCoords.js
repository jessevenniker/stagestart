// Lookup-tabel voor wijken op Curaçao (centroids)
// Gebruikt als fallback als een venue geen exacte coördinaten heeft

export const WIJK_COORDS = {
  'Jan Thiel': [12.0758, -68.8800],
  'Piscadera': [12.1228, -68.9690],
  'Pietermaai': [12.1031, -68.9268],
  'Otrobanda': [12.1098, -68.9388],
  'Punda': [12.1064, -68.9337],
  'Salinja': [12.1070, -68.9220],
  'Saliña': [12.1070, -68.9220],
  'Mambo Beach': [12.0867, -68.8995],
  'Seaquarium': [12.0867, -68.8995],
  'Caracasbaai': [12.0780, -68.8650],
  'Caracasbaaiweg': [12.1038, -68.8880],
  'Westpunt': [12.3700, -69.1500],
  'Bapor Kibra': [12.0780, -68.8650],
  'Mahaai': [12.1280, -68.9230],
  'Schottegatweg': [12.1380, -68.9100],
  'Schottegatweg Oost': [12.1380, -68.9100],
  'Cas Cora': [12.1422, -68.9088],
  'Eden Mall': [12.1049, -68.8817],
  'Sambil Mall': [12.1500, -68.9000],
  'Willemstad': [12.1098, -68.9320],
  'Blue Bay': [12.1348, -68.9850],
  'Soto': [12.2150, -69.0800],
  'Savonet': [12.3573, -69.1080],
  'Rif Fort': [12.1051, -68.9393],
  'Gomez Plein': [12.1054, -68.9337],
  'Avila': [12.1007, -68.9219],
  'Sint Michiel': [12.1481, -68.9989],
  'Coral Estates': [12.1985, -69.0790],
  'Christoffel Park': [12.3700, -69.1300],
  'Hato': [12.1900, -68.9600],
  'Klein Curaçao': [11.9833, -68.6500],
  'Shete Boka': [12.3719, -69.1083],
  'Centrum': [12.1098, -68.9320],
}

// Default Curaçao center voor onbekende locaties
export const CURACAO_CENTER = [12.18, -69.00]

// Helper: zoek coords op basis van locatie-string (zoekt op delen van de naam)
export function findCoordsForLocation(locationString) {
  if (!locationString) return null
  const lower = locationString.toLowerCase()
  for (const [wijk, coords] of Object.entries(WIJK_COORDS)) {
    if (lower.includes(wijk.toLowerCase())) {
      return coords
    }
  }
  return null
}
