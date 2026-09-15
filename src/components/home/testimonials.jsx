import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

// PLACEHOLDER quotes — swap for real, attributable client testimonials.
// One named quote outweighs several anonymous ones for a skeptical buyer.
const quotes = [
  {
    quote:
      'Nemetrix gave us egocentric data we simply could not have collected ourselves — and the enrichment was clean enough to train on straight away.',
    name: 'Head of Perception',
    company: 'Embodied-AI lab (confidential)',
  },
  {
    quote:
      'The manipulation demonstrations generalized across our arms. Their QA discipline is the reason our numbers held up in review.',
    name: 'ML Lead',
    company: 'Robotics startup (confidential)',
  },
  {
    quote:
      'They absorbed a labeling programme we had failed to staff twice. Weekly batches, audited, with numbers we could take to review.',
    name: 'Data Platform Lead',
    company: 'Foundation-model team (confidential)',
  },
]

const DRAG_THRESHOLD = 60 // px before a drag counts as a slide

/**
 * Draggable quote carousel. Deliberately CSS-transform based rather than
 * pulling in an animation library — the whole site's performance budget is a
 * conversion argument, so one more dependency for one component is a bad trade.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [drag, setDrag] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)
  const trackRef = useRef(null)

  const go = useCallback(
    (next) => setIndex(Math.max(0, Math.min(next, quotes.length - 1))),
    [],
  )

  const onPointerDown = (e) => {
    setDragging(true)
    startX.current = e.clientX
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!dragging) return
    setDrag(e.clientX - startX.current)
  }

  const onPointerUp = () => {
    if (!dragging) return
    if (drag < -DRAG_THRESHOLD) go(index + 1)
    else if (drag > DRAG_THRESHOLD) go(index - 1)
    setDrag(0)
    setDragging(false)
  }

  // Keyboard access — a drag-only control would be unusable without this.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return undefined
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(index + 1)
      if (e.key === 'ArrowLeft') go(index - 1)
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [index, go])

  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="flex items-end justify-between gap-6">
        <h2 className="font-display max-w-[520px] text-[clamp(26px,3.4vw,38px)] text-ink text-balance">
          What clients say when the data lands.
        </h2>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Previous quote"
            className="grid size-10 place-items-center rounded-full border border-line text-ink transition hover:bg-ash disabled:opacity-30"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === quotes.length - 1}
            aria-label="Next quote"
            className="grid size-10 place-items-center rounded-full border border-line text-ink transition hover:bg-ash disabled:opacity-30"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div
        className="mt-8 cursor-grab overflow-hidden active:cursor-grabbing"
        ref={trackRef}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className={`tcar-track ${dragging ? 'is-dragging' : ''}`}
          style={{ transform: `translateX(calc(${-index * 100}% + ${drag}px))` }}
        >
          {quotes.map((q, i) => (
            <figure
              key={q.name}
              aria-hidden={i !== index}
              className="glow-ring w-full shrink-0 rounded-[26px] p-8 select-none sm:p-10"
              style={{ marginRight: i === quotes.length - 1 ? 0 : 16 }}
            >
              <Quote className="size-7 text-signal/40" />
              <blockquote className="font-display mt-4 max-w-[760px] text-[clamp(20px,2.4vw,28px)] leading-[1.3] text-ink text-balance">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium text-ink">{q.name}</span>
                <span className="text-smoke"> — {q.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {quotes.map((q, i) => (
          <button
            key={q.name}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to quote ${i + 1}`}
            aria-current={i === index}
            className="tcar-dot"
            data-active={i === index}
          />
        ))}
      </div>
    </section>
  )
}
