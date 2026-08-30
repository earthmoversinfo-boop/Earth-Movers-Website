import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Icons.jsx'
import { company } from '../data/content.js'
import { serviceCategories, emiratesFor } from '../data/services.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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

  // Every real page opens on a dark banner (hero or page banner), so the header
  // starts transparent there and turns solid on hover/scroll. Unknown routes
  // (404) have no banner and need the solid header immediately. Trailing
  // slashes are normalised so this matches however the host serves the URL.
  const path = location.pathname.replace(/\/+$/, '') || '/'
  const known =
    ['/', '/about', '/services', '/projects', '/contact'].includes(path) ||
    /^\/services\/[a-z-]+(\/[a-z-]+)?$/.test(path)
  const solid = scrolled || hovered || open || !known

  return (
    <>
      <header
        className={`nav ${solid ? 'solid' : 'overlay'}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="wrap nav-inner">
          <Link to="/" className="brand" aria-label="Earth Movers International — home">
            <Logo variant={solid ? 'dark' : 'light'} />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {links.map((l) =>
              l.to === '/services' ? (
                <div className="nav-item" key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  >
                    {l.label}
                  </NavLink>
                  <div className="nav-menu">
                    {serviceCategories.map((c) => (
                      <Link key={c.slug} to={`/services/${c.slug}`}>
                        <strong>{c.name}</strong>
                        <span>
                          {c.services.slice(0, 3).map((x) => x.name).join(' · ')} —{' '}
                          {c.coverage === 'all' ? 'all 7 emirates' : 'Dubai'}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {l.label}
                </NavLink>
              )
            )}
            <Link to="/contact" className="btn btn-solid nav-cta">Get a Quote</Link>
          </nav>

          <button
            className={`nav-burger${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map((l) => (
          <div key={l.to}>
            <Link to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
            {l.to === '/services' && (
              <div className="sub-links">
                {serviceCategories.map((c) => (
                  <Link key={c.slug} to={`/services/${c.slug}`} onClick={() => setOpen(false)}>
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="mobile-menu-contact">
          <a href={company.phoneHref}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
    </>
  )
}
