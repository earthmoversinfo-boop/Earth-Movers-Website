import { Link } from 'react-router-dom'
import { Arrow } from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <main>
      <section className="wrap page-hero" style={{ minHeight: '55vh' }}>
        <span className="eyebrow">404</span>
        <h1 className="display-xl">This ground hasn’t been broken yet.</h1>
        <p className="lead">The page you’re looking for doesn’t exist — but the rest of the site does.</p>
        <Link to="/" className="btn btn-ink">
          Back to home <Arrow className="btn-arrow" />
        </Link>
      </section>
    </main>
  )
}
