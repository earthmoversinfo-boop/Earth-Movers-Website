import { Link } from 'react-router-dom'
import { Arrow } from '../components/Icons.jsx'
import useLocale from '../i18n/useLocale.js'

export default function NotFound() {
  const { t, href } = useLocale()
  return (
    <main>
      <section
        className="wrap section"
        style={{ marginTop: 'calc(var(--topbar-h) + var(--nav-h))', minHeight: '50vh', display: 'grid', gap: '1.2rem', alignContent: 'center', justifyItems: 'start' }}
      >
        <span className="eyebrow">404</span>
        <h1 className="display-xl">{t('nf.title')}</h1>
        <p className="lead">{t('nf.text')}</p>
        <Link to={href('/')} className="btn btn-ink">
          {t('nf.back')} <Arrow className="btn-arrow" />
        </Link>
      </section>
    </main>
  )
}
