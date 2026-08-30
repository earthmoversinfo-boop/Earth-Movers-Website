import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import ServiceCategory from './pages/ServiceCategory.jsx'
import ServiceSegment from './pages/ServiceSegment.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import useSeo from './hooks/useSeo.js'
import { DEFAULT_LOCALE, LOCALES } from './i18n/locale.js'

// One page table, mounted once per language: English at the root and Arabic
// under /ar. Adding a third language is one entry in LOCALES.
const PAGES = [
  { path: '', element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'services', element: <Services /> },
  { path: 'services/:category', element: <ServiceCategory /> },
  { path: 'services/:category/:segment', element: <ServiceSegment /> },
  { path: 'projects', element: <Projects /> },
  { path: 'contact', element: <Contact /> },
]

export function AppRoutes() {
  useSeo()
  return (
    <>
      <Nav />
      <Routes>
        {LOCALES.flatMap((locale) => {
          const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`
          return PAGES.map((p) => {
            const path = `${prefix}/${p.path}`.replace(/\/+$/, '') || '/'
            return <Route key={path} path={path} element={p.element} />
          })
        })}
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
