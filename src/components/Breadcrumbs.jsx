import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={it.path}>
          {i > 0 && <span className="crumb-sep" aria-hidden="true">/</span>}
          {i === items.length - 1 ? (
            <span aria-current="page">{it.name}</span>
          ) : (
            <Link to={it.path}>{it.name}</Link>
          )}
        </span>
      ))}
    </nav>
  )
}
