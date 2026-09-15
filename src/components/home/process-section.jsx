import { useCallback, useEffect, useRef } from 'react'
import { SectionHeading } from '../site/section-heading.jsx'

const steps = [
  {
    n: '01',
    title: 'Scope',
    text: 'A short call to understand your model, your data gap and your constraints. We come back with a plan and a clear quote.',
  },
  {
    n: '02',
    title: 'Pilot',
    text: 'A focused pilot batch so you can validate quality and format against your training pipeline before committing to scale.',
  },
  {
    n: '03',
    title: 'Scale',
    text: 'We ramp collectors, annotators and tooling to hit your volume and cadence, reporting against agreed SLAs throughout.',
  },
  {
    n: '04',
    title: 'Deliver',
    text: 'Enriched, QA’d data delivered to spec on a predictable schedule — with the audit trail procurement will ask for.',
  },
]

const PROXIMITY_RADIUS = 130 // px from the row centre before the effect decays to 0
const SMOOTHING = 110 // ms time-constant for the exponential ease

/**
 * Rows light up based on how close the cursor is, rather than on a binary
 * hover. One rAF loop eases every row's `--effect` toward its target, so the
 * rule, numeral and text all move in step — CSS transitions would stagger.
 */
export function ProcessSection() {
  const listRef = useRef(null)
  const rowRefs = useRef([])
  const targets = useRef([])
  const current = useRef([])
  const rafId = useRef(null)
  const lastTime = useRef(0)

  /** One rAF loop eases every row's `--effect` toward its target. `step` is a
   *  local named function so it can schedule itself without a ref. */
  const start = useCallback(() => {
    if (rafId.current != null) cancelAnimationFrame(rafId.current)
    lastTime.current = performance.now()

    const step = (now) => {
      const dt = Math.min((now - lastTime.current) / 1000, 0.05)
      lastTime.current = now
      const k = 1 - Math.exp(-dt / (SMOOTHING / 1000))

      let moving = false
      rowRefs.current.forEach((el, i) => {
        if (!el) return
        const target = targets.current[i] || 0
        const cur = current.current[i] || 0
        const next = cur + (target - cur) * k
        const settled = Math.abs(target - next) < 0.0015
        const value = settled ? target : next
        current.current[i] = value
        el.style.setProperty('--effect', value.toFixed(4))
        if (!settled) moving = true
      })

      rafId.current = moving ? requestAnimationFrame(step) : null
    }

    rafId.current = requestAnimationFrame(step)
  }, [])

  const handleMove = useCallback(
    (e) => {
      const list = listRef.current
      if (!list) return
      const top = list.getBoundingClientRect().top
      const pointerY = e.clientY - top
      rowRefs.current.forEach((el, i) => {
        if (!el) return
        const centre = el.offsetTop + el.offsetHeight / 2
        const distance = Math.abs(pointerY - centre)
        const p = Math.max(0, 1 - distance / PROXIMITY_RADIUS)
        targets.current[i] = p * p * (3 - 2 * p) // smoothstep
      })
      start()
    },
    [start],
  )

  const handleLeave = useCallback(() => {
    targets.current = targets.current.map(() => 0)
    start()
  }, [start])

  useEffect(
    () => () => {
      if (rafId.current != null) cancelAnimationFrame(rafId.current)
    },
    [],
  )

  return (
    <section className="bg-ash py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionHeading eyebrow="How we work" title="What engaging Nemetrix looks like." />

        <div
          ref={listRef}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
          className="relative mt-12 max-w-[760px]"
        >
          {steps.map((s, i) => (
            <div
              key={s.n}
              ref={(el) => {
                rowRefs.current[i] = el
              }}
              className="prox-row border-t border-line py-7"
              style={{ '--effect': 0 }}
            >
              <span aria-hidden="true" className="prox-rule" />
              <div className="flex items-baseline gap-4">
                <span className="prox-num text-[34px]">{s.n}</span>
                <div className="prox-body">
                  <h3 className="text-[17px] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1.5 max-w-[520px] text-sm leading-relaxed text-graphite">
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
