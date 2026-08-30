import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Icons.jsx'
import { company } from '../data/content.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close the mobile menu and scroll to top on route change
  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span className="topbar-badge topbar-hide-sm">RTA-Approved Road Contractor</span>
          <nav className="topbar-nav" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `topbar-link${isActive ? ' active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <Link to="/" className="brand" aria-label="Earth Movers International — home">
            <Logo />
          </Link>

          <div className="nav-right">
            <span className="nav-tagline topbar-hide-sm">Earthworks &amp; Road Construction — Dubai, UAE</span>
            <Link to="/contact" className="btn btn-solid nav-cta">Get a Quote</Link>
            <button
              className={`nav-burger${open ? ' open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map((l, i) => (
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
            {l.label}
            <span className="index-num">0{i + 1}</span>
          </Link>
        ))}
        <div className="mobile-menu-contact">
          <a href={company.phoneHref}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
    </>
  )
}
