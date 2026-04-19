import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Breadcrumbs from './components/Breadcrumbs'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import BeginHier from './pages/BeginHier'
import Kosten from './pages/Kosten'
import VoorVertrek from './pages/VoorVertrek'
import Wonen from './pages/Wonen'
import Auto from './pages/Auto'
import EersteWeek from './pages/EersteWeek'
import Leven from './pages/Leven'
import Startgids from './pages/Startgids'

import Veiligheid from './pages/Veiligheid'
import HappyHours from './pages/HappyHours'
import Eten from './pages/Eten'
import Stranden from './pages/Stranden'
import WeekendTrips from './pages/WeekendTrips'
import FAQ from './pages/FAQ'
import Werken from './pages/Werken'
import Kaart from './pages/Kaart'
import Vergunning from './pages/Vergunning'
import Bronnen from './pages/Bronnen'
import Disclaimer from './pages/Disclaimer'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import Verzekering from './pages/Verzekering'
import Contact from './pages/Contact'
import Over from './pages/Over'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <ScrollToTop />
      <Breadcrumbs />
      <main className="flex-1">
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
          <Route path="*"              element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
