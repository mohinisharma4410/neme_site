import { Link } from 'react-router-dom'

export function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Nemetrix Technologies home"
    >
      <span
        aria-hidden="true"
        className="hero-gradient inline-block size-7 rounded-[9px]"
        style={{ boxShadow: '0 0 0 4px var(--color-ash)' }}
      />
      <span className="text-[15px] font-semibold tracking-[-0.03em] text-ink">
        Nemetrix
      </span>
    </Link>
  )
}