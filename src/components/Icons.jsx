// Line-drawn service icons, 48x48 viewBox, stroke follows currentColor.

const base = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'square',
}

export function BrandMark({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="5" fill="#14181d" />
      <path d="M10 33h28v4H10z" fill="#f2a900" />
      <path d="M12 29l8-13 6 8 4-5 6 10z" fill="#ffffff" />
    </svg>
  )
}

export function IconExcavator(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="8" y="30" width="22" height="7" rx="3.5" />
      <circle cx="13" cy="33.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="19" cy="33.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="25" cy="33.5" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 30v-8h12v8" />
      <path d="M17 22v-5h5v5" />
      <path d="M24 24l12-9" />
      <path d="M36 15l5 9" />
      <path d="M41 24l-5 3 2 4 5-3" />
    </svg>
  )
}

export function IconRoad(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M16 8L8 40" />
      <path d="M32 8l8 32" />
      <path d="M24 10v4M24 20v5M24 31v5" />
    </svg>
  )
}

export function IconGrade(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6 36h36" />
      <path d="M6 36l14-14h8l14 14" strokeDasharray="3 4" />
      <path d="M14 28l6 8M28 22l10 14" />
      <path d="M20 14h8" />
    </svg>
  )
}

export function IconSite(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M8 38h32" />
      <path d="M12 38V22l10-8v24" />
      <path d="M26 38V20h10v18" />
      <path d="M30 24h2M30 29h2M16 26h2M16 31h2" />
    </svg>
  )
}

export function IconAsphalt(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="8" y="20" width="16" height="10" />
      <circle cx="32" cy="30" r="6" />
      <path d="M38 30h4M8 36h34" />
      <path d="M12 16l4-6h8l2 6" />
    </svg>
  )
}

export function IconCrane(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M14 40V10l24 8" />
      <path d="M14 18l24 0" strokeDasharray="0" />
      <path d="M30 18v8" />
      <path d="M27 30h6l-3-4z" />
      <path d="M8 40h14" />
    </svg>
  )
}

export const iconMap = {
  excavator: IconExcavator,
  road: IconRoad,
  grade: IconGrade,
  site: IconSite,
  asphalt: IconAsphalt,
  crane: IconCrane,
}

export function Arrow({ className }) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" className={className} aria-hidden="true">
      <path d="M1 8h13M9 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}
