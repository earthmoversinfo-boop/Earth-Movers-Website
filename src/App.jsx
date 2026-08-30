import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import ServiceCategory from './pages/ServiceCategory.jsx'
import ServiceLocation from './pages/ServiceLocation.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import useSeo from './hooks/useSeo.js'

export function AppRoutes() {
  useSeo()
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:category" element={<ServiceCategory />} />
        <Route path="/services/:category/:emirate" element={<ServiceLocation />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  // Real paths for the deployed site (required for SEO); hash routing only for
  // the single-file preview build, which has no server to resolve paths.
  const Router = import.meta.env.VITE_HASH_ROUTER === '1' ? HashRouter : BrowserRouter
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}
