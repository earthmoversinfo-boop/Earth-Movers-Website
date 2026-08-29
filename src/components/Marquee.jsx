import { clients } from '../data/content.js'

export default function Marquee({ label }) {
  const track = (
    <div className="marquee-track" aria-hidden="true">
      {[...clients, ...clients].map((c, i) => (
        <span className="marquee-item" key={i}>{c}</span>
      ))}
    </div>
  )

  return (
    <div className="marquee-band" role="presentation">
      {label && <div className="marquee-label">{label}</div>}
      <div className="marquee">
        {track}
        {track}
      </div>
    </div>
  )
}
