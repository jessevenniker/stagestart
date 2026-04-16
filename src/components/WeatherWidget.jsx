import { useState, useEffect } from 'react'

const WEATHER_CODES = {
  0: 'Helder', 1: 'Overwegend helder', 2: 'Half bewolkt', 3: 'Bewolkt',
  45: 'Mist', 48: 'Mist', 51: 'Lichte motregen', 53: 'Motregen', 55: 'Motregen',
  61: 'Lichte regen', 63: 'Regen', 65: 'Zware regen',
  80: 'Buien', 81: 'Regenbuien', 82: 'Zware buien',
  95: 'Onweer', 96: 'Onweer met hagel', 99: 'Zwaar onweer',
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=12.17&longitude=-68.98&current=temperature_2m,weather_code&timezone=America/Curacao')
      .then(r => r.json())
      .then(data => {
        if (data.current) {
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            desc: WEATHER_CODES[data.current.weather_code] || 'Onbekend',
          })
        }
      })
      .catch(() => {})
  }, [])

  if (!weather) return null

  return (
    <div className="inline-flex items-center gap-2 bg-sky/10 text-sky px-3 py-1.5 rounded-lg text-xs font-medium">
      <span>{weather.temp}°C</span>
      <span className="text-gray-400">·</span>
      <span>{weather.desc}</span>
      <span className="text-gray-400">·</span>
      <span className="text-gray-400">Willemstad</span>
    </div>
  )
}
