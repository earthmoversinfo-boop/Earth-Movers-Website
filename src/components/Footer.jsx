import { Link } from 'react-router-dom'
import { Logo } from './Icons.jsx'
import useLocale from '../i18n/useLocale.js'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t, tax, content, href } = useLocale()
  const { company } = content

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to={href('/')} className="brand" aria-label={t('nav.homeAria')}>
              <Logo variant="light" />
            </Link>
            <p>{t('foot.blurb', { founded: company.founded, inUAE: company.inUAE })}</p>
            <div className="footer-certs">
              <span className="footer-cert">{t('foot.certRta')}</span>
              <span className="footer-cert">{t('foot.certDm')}</span>
              <span className="footer-cert">{t('foot.certSince')}</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('foot.company')}</h4>
            <Link to={href('/about')}>{t('nav.about')}</Link>
            <Link to={href('/services')}>{t('nav.services')}</Link>
            <Link to={href('/projects')}>{t('nav.projects')}</Link>
            <Link to={href('/guides')}>{t('guides.crumb')}</Link>
            <Link to={href('/contact')}>{t('nav.contact')}</Link>
          </div>

          <div className="footer-col">
            <h4>{t('lbl.services')}</h4>
            {tax.categories.map((c) => (
              <Link key={c.slug} to={href(`/services/${c.slug}`)}>{c.name}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>{t('foot.areas')}</h4>
            {tax.emirates.map((e) => (
              <Link key={e.slug} to={href(`/services/road-works/${e.slug}`)}>{e.name}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>{t('foot.contact')}</h4>
            <a href={company.phoneHref} dir="ltr">{company.phone}</a>
            <a href={`mailto:${company.email}`} dir="ltr">{company.email}</a>
            {company.address.map((line) => (
              <span key={line}>{line}</span>
            ))}

            <a
              className="footer-map"
              href={company.mapsLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`${company.legalName} — ${t('foot.directions')}`}
            >
              <iframe
                title={`${company.legalName} — ${t('foot.contact')}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
              />
              <span className="footer-map-cta">{t('foot.directions')}</span>
            </a>

            <span style={{ marginTop: '0.4rem' }}>
              <a href={company.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
              {'  ·  '}
              <a href={company.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {company.legalName}. {t('foot.rights')}</span>
          <span dir="ltr">{company.coordinates} — {t('foot.place')}</span>
        </div>
      </div>
    </footer>
  )
}
