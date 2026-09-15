import { Link } from 'react-router-dom'

/**
 * Pill whose label rolls up on hover and is replaced by a second line.
 * Both lines live in one stack that translates -50%, so the two labels stay
 * perfectly registered whatever their width.
 */
export function SlideButton({
  to,
  children,
  hoverLabel,
  icon = null,
  variant = 'primary',
  size = '',
  className = '',
}) {
  const tone = variant === 'ghost' ? 'pill-ghost' : 'pill-primary'

  return (
    <Link to={to} className={`pill ${tone} ${size} ${className}`}>
      <span className="pill-slide__viewport" style={{ height: '1.2em' }}>
        <span className="pill-slide__stack">
          <span className="pill-slide__line">
            {children}
            {icon}
          </span>
          <span className="pill-slide__line" aria-hidden="true">
            {hoverLabel ?? children}
            {icon}
          </span>
        </span>
      </span>
    </Link>
  )
}
