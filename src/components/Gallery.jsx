import Reveal from './Reveal.jsx'
import gallery from '../data/gallery.json'

// Renders the photo gallery pulled from the live site's media library.
// Invisible until `npm run fetch-images` populates src/data/gallery.json.
export default function Gallery({ eyebrow = 'From our sites', title = 'The work, in pictures.', limit }) {
  if (!gallery.length) return null
  const shots = limit ? gallery.slice(0, limit) : gallery

  return (
    <section className="section hairline-top">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">
            <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
            <Reveal delay={80}><h2 className="display-lg">{title}</h2></Reveal>
          </div>
        </div>
        <div className="gallery-grid">
          {shots.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 70}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
