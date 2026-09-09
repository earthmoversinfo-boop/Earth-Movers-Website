import Reveal from './Reveal.jsx'
import Photo from './Photo.jsx'

// Full-width photo banner used at the top of interior pages.
export default function PageBanner({ eyebrow, title, text, img }) {
  return (
    <section className="page-hero">
      <Photo src={img} alt="" className="page-hero-bg" />
      <div className="page-hero-inner">
        <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
        <Reveal delay={80}><h1 className="display-xl">{title}</h1></Reveal>
        {text && <Reveal delay={160}><p className="lead">{text}</p></Reveal>}
      </div>
    </section>
  )
}
