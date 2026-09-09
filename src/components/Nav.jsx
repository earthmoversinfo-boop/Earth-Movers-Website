import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Arrow, Logo } from './Icons.jsx'
import useLocale from '../i18n/useLocale.js'
import { LOCALES, localeHref, splitLocale } from '../i18n/locale.js'
import { coverageLabel } from '../data/services.js'

// Road Works alone has nine services; showing every one made the panel taller
// than the shorter laptop screens it drops onto. The overflow is one line to
// the category page instead.
const MEGA_MAX = 5

const LINKS = [
  { path: '/', key: 'nav.home' },
  { path: '/about', key: 'nav.about' },
  { path: '/services', key: 'nav.services' },
  { path: '/projects', key: 'nav.projects' },
  { path: '/contact', key: 'nav.contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [open, setOpen] = useState(false)
  // The services panel was pure CSS :hover/:focus-within, which cannot be
  // dismissed by anything but moving the mouse — and stayed open after a click
  // because the cursor was still over it and the clicked link still held
  // focus. It is state now, so Escape, a click outside and a route change can
  // all close it.
  const [mega, setMega] = useState(false)
  const megaTimer = useRef(null)
  const location = useLocation()
  const { t, tax, content, href, locale } = useLocale()
  const { company } = content

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close both menus and scroll to top on route change
  useEffect(() => {
    setOpen(false)
    closeMega()
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Escape closes it, and so does a click anywhere outside the header — the
  // two things a visitor tries when a panel will not go away.
  useEffect(() => {
    if (!mega) return
    const onKey = (e) => { if (e.key === 'Escape') closeMega() }
    const onDown = (e) => {
      if (!e.target.closest?.('.nav-item')) closeMega()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
    }
  }, [mega])

  useEffect(() => () => clearTimeout(megaTimer.current), [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Every real page opens on a dark banner (hero or page banner), so the header
  // starts transparent there and turns solid on hover/scroll. Unknown routes
  // (404) have no banner and need the solid header immediately. The locale
  // prefix and any trailing slash are stripped first, so this matches however
  // the host serves the URL and in whichever language.
  const { base } = splitLocale(location.pathname)
  const known =
    ['/', '/about', '/services', '/projects', '/contact'].includes(base) ||
    /^\/services\/[a-z-]+(\/[a-z-]+)?$/.test(base)
  const solid = scrolled || hovered || open || !known

  // A short grace period on the way out: the cursor crosses a few pixels of
  // header between the link and the panel, and closing on that would make the
  // menu impossible to reach.
  function openMega() {
    clearTimeout(megaTimer.current)
    setMega(true)
  }

  function closeMega(delay = 0) {
    clearTimeout(megaTimer.current)
    if (!delay) return setMega(false)
    megaTimer.current = setTimeout(() => setMega(false), delay)
  }

  // The switcher points at the same page in the other language.
  const other = LOCALES.find((l) => l !== locale)
  const otherHref = localeHref(base, other)

  return (
    <>
      <header
        className={`nav ${solid ? 'solid' : 'overlay'}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="wrap nav-inner">
          <Link to={href('/')} className="brand" aria-label={t('nav.homeAria')}>
            <Logo variant={solid ? 'dark' : 'light'} />
          </Link>

          <nav className="nav-links" aria-label={t('nav.primary')}>
            {LINKS.map((l) =>
              l.path === '/services' ? (
                <div
                  className="nav-item"
                  key={l.path}
                  onMouseEnter={openMega}
                  onMouseLeave={() => closeMega(140)}
                >
                  <NavLink
                    to={href(l.path)}
                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                    onFocus={openMega}
                    aria-expanded={mega}
                  >
                    {t(l.key)}
                  </NavLink>
                  {/* A panel, not a curtain: one column per category with the
                      first few services, and the rest reached from the
                      category page. Listing all 22 made it taller than some
                      laptop screens. */}
                  <div className={`nav-mega${mega ? ' open' : ''}`}>
                    <div className="wrap nav-mega-inner">
                      {tax.categories.map((c) => (
                        <div className="nav-mega-col" key={c.slug}>
                          <Link to={href(`/services/${c.slug}`)} className="nav-mega-head">
                            <span>{c.name}</span>
                            <Arrow />
                          </Link>
                          <span className="nav-mega-where">
                            {coverageLabel(c, locale, t)}
                          </span>
                          <ul className="nav-mega-list">
                            {c.services.slice(0, MEGA_MAX).map((sv) => (
                              <li key={sv.slug}>
                                <Link to={href(`/services/${c.slug}/${sv.slug}`)}>{sv.name}</Link>
                              </li>
                            ))}
                            {c.services.length > MEGA_MAX && (
                              <li className="nav-mega-more">
                                <Link to={href(`/services/${c.slug}`)}>
                                  {t('home.plusServices', {
                                    n: c.services.length - MEGA_MAX,
                                  })}
                                </Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      ))}

                      <div className="nav-mega-foot">
                        <Link to={href('/services')} className="text-link">
                          {t('nav.allServices')} <Arrow />
                        </Link>
                        <span className="nav-mega-contact">
                          {t('nav.talkToUs')}{' '}
                          <a href={company.phoneHref} dir="ltr">{company.phone}</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={l.path}
                  to={href(l.path)}
                  end={l.path === '/'}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {t(l.key)}
                </NavLink>
              )
            )}
            <span className="nav-rule" aria-hidden="true" />
            <Link
              to={otherHref}
              className="nav-link nav-lang"
              lang={other}
              hrefLang={other}
              aria-label={t('nav.switchAria')}
            >
              {t('nav.switchTo')}
            </Link>
            <Link to={href('/contact')} className="btn btn-solid nav-cta">{t('nav.quote')}</Link>
          </nav>

          <button
            className={`nav-burger${open ? ' open' : ''}`}
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <div key={l.path}>
            <Link to={href(l.path)} onClick={() => setOpen(false)}>
              {t(l.key)}
            </Link>
            {l.path === '/services' && (
              <div className="sub-links">
                {tax.categories.map((c) => (
                  <Link
                    key={c.slug}
                    to={href(`/services/${c.slug}`)}
                    onClick={() => setOpen(false)}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div>
          <Link
            to={otherHref}
            className="mobile-lang"
            lang={other}
            hrefLang={other}
            aria-label={t('nav.switchAria')}
            onClick={() => setOpen(false)}
          >
            {t('nav.switchTo')}
            <span className="mobile-lang-note">{t('nav.language')}</span>
          </Link>
        </div>

        <div className="mobile-menu-contact">
          <a href={company.phoneHref} dir="ltr">{company.phone}</a>
          <a href={`mailto:${company.email}`} dir="ltr">{company.email}</a>
        </div>
      </div>
    </>
  )
}
