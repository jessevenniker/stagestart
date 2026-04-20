import { useState } from 'react'
import { Link } from 'react-router-dom'
import WeatherWidget from '../components/WeatherWidget'
import SEO from '../components/SEO'
import { websiteSchema, organizationSchema } from '../utils/schema'
import { VERHALEN } from '../data/verhalen'

// TOPICS = kern stage-gids (P1) — wat de stagiair direct nodig heeft
const TOPICS = [
  {
    to: '/voor-vertrek',
    color: '#D4522A',
    title: 'Wat moet je regelen voor vertrek?',
    desc: 'Volgens Immigratiedienst: VOG, geboorteakte, KvK-uittreksel, polisblad. In de juiste volgorde, met deadlines.',
    img: '/img/home-voor-vertrek.jpg',
  },
  {
    to: '/vergunning',
    color: '#1A7EC5',
    title: 'Vergunning — wat zegt de officiële bron?',
    desc: 'De Immigratiedienst publiceert twee aparte informatiestromen (studie/stage en Verklaring van Rechtswege). Voor jou kunnen beide relevant zijn. Controleer dat altijd zelf.',
    img: '/img/home-vergunning.jpg',
  },
  {
    to: '/kosten',
    color: '#F2B517',
    title: 'Wat kost een stage echt?',
    desc: 'Eerlijk kostenoverzicht met budgetcalculator. Officiële bedragen + praktische richtlijnen.',
    img: '/img/hero-kosten.jpg',
  },
  {
    to: '/wonen',
    color: '#3EAD6E',
    title: 'Waar woon je op Curaçao?',
    desc: 'Jan Thiel, Piscadera, Pietermaai, centrum: wijken eerlijk vergeleken.',
    img: '/img/hero-wonen.jpg',
  },
  {
    to: '/auto',
    color: '#1A7EC5',
    title: 'Heb je echt een auto nodig?',
    desc: 'Eerlijk antwoord via een korte beslisboom. Hangt af van waar je woont en werkt.',
    img: '/img/hero-auto.jpg',
  },
  {
    to: '/eerste-week',
    color: '#E8507A',
    title: 'Je eerste week op Curaçao',
    desc: 'SIM-kaart, supermarkt, bank, wifi: wat doe je wanneer.',
    img: '/img/hero-eerste-week.jpg',
  },
]

// SECONDARY = "Naast je stage" — ondersteunende life-content
const SECONDARY_TOPICS = [
  { to: '/werken', label: 'Werken op Curaçao', desc: 'Werkcultuur en hiërarchie' },
  { to: '/leven', label: 'Leven als stagiair', desc: 'Praktisch eilandleven' },
  { to: '/veiligheid', label: 'Veiligheid', desc: 'Praktische gedragsadviezen' },
  { to: '/eten', label: 'Eten & supermarkten', desc: 'Lokale keuken en boodschappen' },
  { to: '/happy-hours', label: 'Happy hours', desc: 'Sociaal weekritme' },
  { to: '/stranden', label: 'Stranden', desc: '35+ stranden vergeleken' },
  { to: '/weekend-trips', label: 'Weekend trips', desc: 'Uitstapjes en excursies' },
  { to: '/kaart', label: 'Interactieve kaart', desc: 'Alle locaties op één kaart' },
]

const UNDERESTIMATE = [
  {
    num: '01',
    color: '#D4522A',
    title: 'De stagevergunning duurt langer dan je denkt',
    desc: 'Volgens Immigratiedienst Curaçao heb je VOG, geboorteakte (max 1 jaar), stageovereenkomst, polisblad, KvK-uittreksel én XCG 525 legeskosten nodig. Verwerkingstijd: 4 maanden.',
  },
  {
    num: '02',
    color: '#F2B517',
    title: 'De OV-vergoeding van DUO — bijna niemand vraagt hem aan',
    desc: 'Stop je studentenreisproduct tijdig en je krijgt €110,95 per maand terug (2026). Over 5 maanden is dat ±€555 die je anders laat liggen.',
  },
  {
    num: '03',
    color: '#3EAD6E',
    title: 'Zonnebrand en verzorging zijn duurder op het eiland',
    desc: 'Factor 50 kost op Curaçao soms het dubbele. Neem voldoende mee vanuit Nederland, plus tandpasta, shampoo en medicijnen.',
  },
  {
    num: '04',
    color: '#1A7EC5',
    title: 'De eerste maand is altijd de duurste',
    desc: 'Borg woning (1–1,5x de huur), borg auto (€500–1.000), inrichting, SIM, eerste boodschappen. Reken op €1.000–2.000 éénmalig bovenop je maandelijkse kosten.',
  },
  {
    num: '05',
    color: '#E8507A',
    title: 'Zonder auto woon je praktisch vast — afhankelijk van je locatie',
    desc: 'Openbaar vervoer is er nauwelijks. Of je een auto nodig hebt, hangt volledig af van waar je woont én werkt.',
  },
]

// Mini budget calculator for homepage
const DEFAULT = { rent: 425, car: 440, food: 200, fun: 200, salary: 375 }

function fmt(n) {
  return '€\u00a0' + Math.round(n).toLocaleString('nl-NL')
}

export default function Home() {
  const [v, setV] = useState(DEFAULT)
  const costs = v.rent + v.car + v.food + v.fun + 75 + 50
  const income = v.salary + 110.95
  const gap = costs - income

  function set(key, val) {
    setV(prev => ({ ...prev, [key]: Number(val) }))
  }

  return (
    <>
      <SEO schema={[websiteSchema(), organizationSchema()]} />
      {/* ── HERO ── */}
      <section className="max-w-5xl mx-auto px-5 pt-16 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex gap-1.5">
            {['#D4522A','#F2B517','#3EAD6E'].map((c,i) => (
              <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
          </div>
          <p className="text-[10px] font-medium tracking-widest uppercase text-gray-400">
            Onafhankelijke gids voor stagiairs
          </p>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight text-dark max-w-2xl mb-5">
          Alles wat je <em className="italic not-italic" style={{ color: '#D4522A' }}>echt</em> moet weten over stage lopen op Curaçao.
        </h1>

        <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-8">
          Geen bureau. Geen pakket. Geen glossy verkoopverhaal. Gewoon eerlijke, praktische informatie zodat jij zelf goede beslissingen kunt nemen.
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          <Link to="/begin-hier" className="btn-primary">Begin hier</Link>
          <Link to="/kosten"     className="btn-outline">Wat kost een stage?</Link>
          <Link to="/startgids"  className="btn-outline">Download checklist</Link>
        </div>

        <div className="mb-8">
          <WeatherWidget />
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="/img/hero-home.jpg"
            alt="Kleurrijke gevels Handelskade Willemstad Curaçao"
            className="w-full h-[200px] md:h-[320px] object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <p className="absolute bottom-4 left-5 text-white/80 text-xs font-medium">
            Handelskade, Willemstad
          </p>
        </div>
      </section>

      {/* ── TOPICS GRID — kern stage-gids ── */}
      <section className="max-w-5xl mx-auto px-5 py-10 border-t border-gray-100">
        <h2 className="section-label">De kern — wat je moet weten als stagiair</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {TOPICS.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="group card hover:shadow-md transition-shadow relative overflow-hidden no-underline p-0"
            >
              <div className="relative h-[130px] overflow-hidden">
                <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: t.color }} />
              </div>
              <div className="p-4">
                <p className="font-medium text-sm text-dark mb-1.5 leading-snug group-hover:text-terra transition-colors">
                  {t.title}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
                <span className="text-xs text-gray-400 mt-2 block group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SECONDARY — naast je stage ── */}
      <section className="max-w-5xl mx-auto px-5 py-10 border-t border-gray-100">
        <h2 className="section-label">Naast je stage</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-2xl">
          Ondersteunende informatie over werken, leven en het eiland zelf. Niet de kern, wel handig om te weten.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {SECONDARY_TOPICS.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group block p-3 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors no-underline"
            >
              <p className="text-sm font-medium text-dark group-hover:text-terra transition-colors mb-0.5">
                {s.label}
              </p>
              <p className="text-xs text-gray-400 leading-snug">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BUDGET CALCULATOR ── */}
      <section className="max-w-5xl mx-auto px-5 py-10 border-t border-gray-100">
        <h2 className="section-label">Budgetcalculator</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-serif text-2xl font-normal text-dark mb-2">
              Bereken je maandelijkse kosten
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Pas de sliders aan op basis van jouw situatie. Gratis, geen e-mail, geen account.
            </p>

            {[
              { key: 'rent',   label: 'Huur (kamer/studio/appartement)', min: 375, max: 1000,  display: fmt(v.rent) + '/mnd' },
              { key: 'car',    label: 'Auto huren',                min: 0,   max: 550,  display: v.car === 0 ? 'geen auto' : fmt(v.car) + '/mnd' },
              { key: 'food',   label: 'Boodschappen & eten',       min: 100, max: 500,  display: fmt(v.food) + '/mnd' },
              { key: 'fun',    label: 'Uitgaan & vrije tijd',      min: 50,  max: 500,  display: fmt(v.fun) + '/mnd' },
              { key: 'salary', label: 'Stagevergoeding',           min: 0,   max: 500,  display: fmt(v.salary) + '/mnd' },
            ].map(row => (
              <div key={row.key} className="mb-4">
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs text-gray-500">{row.label}</span>
                  <span className="text-xs font-medium text-dark">{row.display}</span>
                </div>
                <input
                  type="range"
                  min={row.min}
                  max={row.max}
                  step={10}
                  value={v[row.key]}
                  onChange={e => set(row.key, e.target.value)}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <p className="text-xs text-gray-400 mb-5">Jouw maandoverzicht</p>
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Huur</span>
                <span className="text-sm font-medium">{fmt(v.rent)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Auto</span>
                <span className="text-sm font-medium">{v.car === 0 ? '—' : fmt(v.car)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Eten & boodschappen</span>
                <span className="text-sm font-medium">{fmt(v.food)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Vrije tijd & uitgaan</span>
                <span className="text-sm font-medium">{fmt(v.fun)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-sm text-gray-600">Verzekering (indicatief)</span>
                <span className="text-sm font-medium">€ 75</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center mb-5">
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-1">Kosten</p>
                <p className="text-lg font-medium text-terra">{fmt(costs)}</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-1">Inkomsten</p>
                <p className="text-lg font-medium text-sage">{fmt(income)}</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-1">Tekort</p>
                <p className="text-lg font-medium text-terra">{fmt(gap)}</p>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 leading-relaxed">
              Inkomsten inclusief OV-vergoeding DUO (€110,95/mnd in 2026). Kosten inclusief ±€50 utilities. Dit vergeten de meeste stagiairs aan te vragen.
            </p>
            <Link to="/kosten" className="block text-center btn-primary mt-4 text-xs">
              Bekijk uitgebreide kostenpagina →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT INTERNS UNDERESTIMATE ── */}
      <section className="max-w-5xl mx-auto px-5 py-10 border-t border-gray-100">
        <h2 className="section-label">Wat stagiairs onderschatten</h2>
        <div className="flex flex-col gap-3">
          {UNDERESTIMATE.map((item) => (
            <div key={item.num} className="flex gap-4 card">
              <span
                className="font-serif text-2xl font-normal leading-none pt-0.5 shrink-0 w-7"
                style={{ color: item.color }}
              >
                {item.num}
              </span>
              <div>
                <p className="font-medium text-sm text-dark mb-1">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VERHALEN VAN STAGIAIRS ── */}
      <section className="max-w-5xl mx-auto px-5 py-10 border-t border-gray-100">
        <div className="flex items-baseline justify-between gap-4 mb-6 flex-wrap">
          <div>
            <h2 className="section-label mb-1">Verhalen van stagiairs</h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
              Ervaringen van mensen die jou voorgingen. Geen reclame, geen bureaus, alleen wat ze zelf meemaakten.
            </p>
          </div>
          <Link to="/verhalen" className="text-sm text-terra hover:underline shrink-0">
            Alle verhalen →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {VERHALEN.slice(0, 3).map((v) => (
            <Link
              key={v.slug}
              to={`/verhalen/${v.slug}`}
              className="group flex flex-col rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img
                  src={v.foto}
                  alt={`Portret van ${v.voornaam}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="h-1 rounded-sm mb-3" style={{ background: v.accent }} />
                <p className="font-serif text-lg text-dark mb-0.5">{v.voornaam}</p>
                <p className="text-[11px] text-gray-400 mb-3">{v.opleiding} · {v.wijk}</p>
                <blockquote
                  className="text-xs text-gray-600 leading-relaxed italic flex-1"
                  style={{ borderLeft: `3px solid ${v.accent}`, paddingLeft: '10px' }}
                >
                  "{v.quote}"
                </blockquote>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BUREAU VS GUIDE ── */}
      <section className="max-w-5xl mx-auto px-5 py-10 border-t border-gray-100">
        <h2 className="section-label">Bureau vs. gids — wat is het verschil?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card">
            <p className="text-[10px] font-medium tracking-widest uppercase text-gray-400 mb-4">Het bureau</p>
            {[
              'Regelt stage, woning, auto en vergunning',
              'Kost €99–795 bemiddelingskosten',
              'Begeleidt je van A tot Z',
              'Verdient aan elk onderdeel',
              'Informatie als conversiemiddel',
            ].map((t, i) => (
              <div key={i} className="flex gap-2 items-start py-2 border-b border-gray-100 last:border-0">
                <span className="text-gray-300 text-xs mt-0.5">·</span>
                <span className="text-sm text-gray-500">{t}</span>
              </div>
            ))}
          </div>

          <div className="card border-sage">
            <p className="text-[10px] font-medium tracking-widest uppercase mb-4" style={{ color: '#3EAD6E' }}>
              StageStart Curaçao
            </p>
            {[
              'Legt uit wat je zelf kunt regelen',
              'Altijd gratis en openbaar toegankelijk',
              'Onafhankelijk: geen commissie, geen belang',
              'Eerlijke voor- én nadelen',
              'Jij beslist, wij informeren',
            ].map((t, i) => (
              <div key={i} className="flex gap-2 items-start py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm mt-0.5" style={{ color: '#3EAD6E' }}>✓</span>
                <span className="text-sm text-dark">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="max-w-5xl mx-auto px-5 pb-16">
        <div className="rounded-2xl overflow-hidden relative">
          <img
            src="/img/cta-sunset.jpg"
            alt="Zonsondergang aan de Curaçaose kust"
            className="w-full h-[200px] md:h-[220px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <h3 className="font-serif text-xl font-normal text-white mb-1">
                Gratis startgids + vertrekchecklist
              </h3>
              <p className="text-sm text-white/70">
                Alles wat je moet regelen voor vertrek, in de juiste volgorde. Direct leesbaar op één pagina, opslaan als PDF met één klik.
              </p>
            </div>
            <a
              href="/downloads/stagestart-startgids.pdf"
              download="stagestart-startgids.pdf"
              className="shrink-0 bg-white text-terra text-sm font-medium px-5 py-2.5 rounded-md hover:bg-cream transition-colors"
            >
              Download gratis →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
