import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Breadcrumbs from './components/Breadcrumbs'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import ChunkErrorBoundary from './components/ChunkErrorBoundary'

// Home eager laden: eerste pagina, moet meteen zichtbaar zijn.
import Home from './pages/Home'

// Overige pagina's lazy laden: chunk wordt pas geladen bij route-bezoek.
// Grootste winst voor /kaart (Leaflet ~150 KB) en /startgids (PDF-assets).
const BeginHier = lazy(() => import('./pages/BeginHier'))
const Kosten = lazy(() => import('./pages/Kosten'))
const VoorVertrek = lazy(() => import('./pages/VoorVertrek'))
const Wonen = lazy(() => import('./pages/Wonen'))
const Auto = lazy(() => import('./pages/Auto'))
const EersteWeek = lazy(() => import('./pages/EersteWeek'))
const Leven = lazy(() => import('./pages/Leven'))
const Startgids = lazy(() => import('./pages/Startgids'))
const Veiligheid = lazy(() => import('./pages/Veiligheid'))
const HappyHours = lazy(() => import('./pages/HappyHours'))
const Eten = lazy(() => import('./pages/Eten'))
const Stranden = lazy(() => import('./pages/Stranden'))
const WeekendTrips = lazy(() => import('./pages/WeekendTrips'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Werken = lazy(() => import('./pages/Werken'))
const Kaart = lazy(() => import('./pages/Kaart'))
const Vergunning = lazy(() => import('./pages/Vergunning'))
const Bronnen = lazy(() => import('./pages/Bronnen'))
const Disclaimer = lazy(() => import('./pages/Disclaimer'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Cookies = lazy(() => import('./pages/Cookies'))
const Verzekering = lazy(() => import('./pages/Verzekering'))
const Contact = lazy(() => import('./pages/Contact'))
const Over = lazy(() => import('./pages/Over'))
const PartnerWorden = lazy(() => import('./pages/PartnerWorden'))
const Partners = lazy(() => import('./pages/Partners'))
const Verhalen = lazy(() => import('./pages/Verhalen'))
const VerhaalDetail = lazy(() => import('./pages/VerhaalDetail'))
const Tussenjaar = lazy(() => import('./pages/Tussenjaar'))
const Begrippen = lazy(() => import('./pages/Begrippen'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-20">
      <div className="animate-pulse">
        <div className="h-3 bg-gray-100 rounded w-24 mb-4" />
        <div className="h-10 bg-gray-100 rounded w-2/3 mb-3" />
        <div className="h-4 bg-gray-100 rounded w-1/2" />
      </div>
    </div>
  )
}

export default function App() {
  // Deterministisch signal voor het prerender-script: puppeteer wacht op dit
  // attribuut voordat het de HTML exporteert. Zet ná mount zodat ook
  // react-helmet-async's head-mutaties klaar zijn op het moment van capture.
  useEffect(() => {
    document.documentElement.setAttribute('data-prerender-ready', '1')
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <ScrollToTop />
      <Breadcrumbs />
      <main className="flex-1">
        <ChunkErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
            <Route path="/"              element={<Home />} />
            <Route path="/begin-hier"    element={<BeginHier />} />
            <Route path="/kosten"        element={<Kosten />} />
            <Route path="/voor-vertrek"  element={<VoorVertrek />} />
            <Route path="/wonen"         element={<Wonen />} />
            <Route path="/auto"          element={<Auto />} />
            <Route path="/eerste-week"   element={<EersteWeek />} />
            <Route path="/leven"         element={<Leven />} />
            <Route path="/startgids"     element={<Startgids />} />
            <Route path="/veiligheid"    element={<Veiligheid />} />
            <Route path="/happy-hours"   element={<HappyHours />} />
            <Route path="/eten"          element={<Eten />} />
            <Route path="/stranden"      element={<Stranden />} />
            <Route path="/weekend-trips" element={<WeekendTrips />} />
            <Route path="/faq"           element={<FAQ />} />
            <Route path="/werken"        element={<Werken />} />
            <Route path="/kaart"         element={<Kaart />} />
            <Route path="/vergunning"    element={<Vergunning />} />
            <Route path="/bronnen"       element={<Bronnen />} />
            <Route path="/disclaimer"    element={<Disclaimer />} />
            <Route path="/privacy"       element={<Privacy />} />
            <Route path="/cookies"       element={<Cookies />} />
            <Route path="/verzekering"   element={<Verzekering />} />
            <Route path="/contact"       element={<Contact />} />
            <Route path="/over"          element={<Over />} />
            <Route path="/partner-worden" element={<PartnerWorden />} />
            <Route path="/partners"      element={<Partners />} />
            <Route path="/verhalen"      element={<Verhalen />} />
            <Route path="/verhalen/:slug" element={<VerhaalDetail />} />
            <Route path="/tussenjaar"    element={<Tussenjaar />} />
            <Route path="/begrippen"     element={<Begrippen />} />
            <Route path="*"              element={<NotFound />} />
            </Routes>
          </Suspense>
        </ChunkErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
