import { stats } from '../../lib/site-data.js'

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-4">
      <div className="grid grid-cols-2 gap-6 border-y border-line-strong py-10 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <p className="font-display text-[clamp(30px,4vw,44px)] leading-none text-ink">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-smoke">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}