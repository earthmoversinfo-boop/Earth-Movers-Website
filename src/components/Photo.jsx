import { useState } from 'react'
import { asset } from '../lib/asset.js'

// Renders a real photograph when the file exists; falls back to the supplied
// node (vector art, or nothing) when the src is missing or fails to load.
export default function Photo({ src, alt = '', className = '', fallback = null, style }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return fallback
  return (
    <img
      src={asset(src)}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
