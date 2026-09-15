import { useRef } from 'react'

/**
 * A card with a slow-rotating conic-gradient ring that only appears on
 * hover/focus, plus a cursor-tracked spotlight underneath the content. Both
 * effects are pure CSS (see `.gradient-border-card` / `.spotlight-layer` in
 * index.css) — this component just wires up the mouse position so the
 * spotlight can follow the pointer.
 */
export function GradientBorderCard({ children, className = '', id }) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
  }

  return (
    <div
      ref={ref}
      id={id}
      onMouseMove={onMouseMove}
      className={`gradient-border-card card-hover ${className}`}
      tabIndex={0}
    >
      <div className="gradient-border-card-inner glow-ring">
        <span className="spotlight-layer" aria-hidden="true" />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  )
}
