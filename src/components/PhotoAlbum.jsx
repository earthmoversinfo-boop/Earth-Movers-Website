import { useCallback, useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'
import { asset } from '../lib/asset.js'
import useLocale from '../i18n/useLocale.js'

const PATH = '/images/projects'

// The site record: the company's own job photographs, grouped by the run of
// work they came from. Frames keep their own shape — the grid is a column
// masonry, so a portrait frame is not cropped to sit next to a landscape one.
//
// Clicking a frame opens it larger. The larger file is a separate image that is
// only requested on that click, so the page itself carries the small ones only.
export default function PhotoAlbum() {
  const { t, content } = useLocale()
  const { albums } = content
  const [open, setOpen] = useState(null)   // { album, index }

  const flat = open ? albums[open.album].photos : []
  const move = useCallback(
    (step) => setOpen((o) => (o ? { ...o, index: (o.index + step + flat.length) % flat.length } : o)),
    [flat.length]
  )

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      else if (e.key === 'ArrowRight') move(1)
      else if (e.key === 'ArrowLeft') move(-1)
    }
    document.addEventListener('keydown', onKey)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [open, move])

  if (!albums?.length) return null
  const shot = open ? flat[open.index] : null

  return (
    <section className="section album">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">
            <Reveal><span className="eyebrow">{t('album.eyebrow')}</span></Reveal>
            <Reveal delay={80}><h2 className="display-lg">{t('album.title')}</h2></Reveal>
          </div>
          <Reveal delay={140}><p className="section-lead">{t('album.lead')}</p></Reveal>
        </div>

        {albums.map((album, a) => (
          <div className="album-set" key={album.slug}>
            <Reveal className="album-head">
              <h3>{album.title}</h3>
              {album.place ? <span className="album-place">{album.place}</span> : null}
              <p>{album.text}</p>
            </Reveal>

            <div className="album-grid">
              {album.photos.map((p, i) => (
                <button
                  type="button"
                  className="album-shot"
                  key={p.src}
                  onClick={() => setOpen({ album: a, index: i })}
                  aria-label={p.alt}
                >
                  <img
                    src={asset(`${PATH}/${p.src}.jpg`)}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="album-caption">{p.alt}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {shot ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.alt}
             onClick={() => setOpen(null)}>
          <button type="button" className="lightbox-close" aria-label={t('album.close')}
                  onClick={() => setOpen(null)}>&times;</button>
          <button type="button" className="lightbox-nav prev" aria-label={t('album.prev')}
                  onClick={(e) => { e.stopPropagation(); move(-1) }}>&#8249;</button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={asset(`${PATH}/${shot.src}-full.jpg`)} alt={shot.alt} />
            <figcaption>
              {shot.alt}
              <span>{open.index + 1} / {flat.length}</span>
            </figcaption>
          </figure>
          <button type="button" className="lightbox-nav next" aria-label={t('album.next')}
                  onClick={(e) => { e.stopPropagation(); move(1) }}>&#8250;</button>
        </div>
      ) : null}
    </section>
  )
}
