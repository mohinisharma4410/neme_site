import { useState } from 'react'
import { ChevronDown, CircleCheckBig, Send } from 'lucide-react'
import { services } from '../../lib/site-data.js'

const fieldBase =
  'w-full rounded-2xl border border-line-strong bg-ash px-4 py-3 text-[15px] text-ink placeholder:text-smoke/70 outline-none transition-colors focus:border-signal focus:bg-paper focus:ring-2 focus:ring-signal/15'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  // UI-only: no real submission wired up yet.
  // TODO: POST to your CRM / form endpoint before going live.
  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="glow-ring flex flex-col items-center rounded-[26px] p-10 text-center">
        <span className="hero-gradient grid size-14 place-items-center rounded-2xl text-white">
          <CircleCheckBig className="size-7" />
        </span>
        <h2 className="font-display mt-5 text-[26px] text-ink">Thanks — we’ll be in touch.</h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-graphite">
          This form is not wired up yet. Connect it to your CRM or an email endpoint before going
          live.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="pill pill-ghost pill-sm mt-6">
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glow-ring rounded-[26px] p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Name</span>
          <input required name="name" type="text" autoComplete="name" placeholder="Jane Doe" className={fieldBase} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Work email</span>
          <input required name="email" type="email" autoComplete="email" placeholder="jane@company.com" className={fieldBase} />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Company</span>
        <input required name="company" type="text" autoComplete="organization" placeholder="Company, Inc." className={fieldBase} />
      </label>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Service interest</span>
        <div className="relative">
          <select required name="service" defaultValue="" className={`${fieldBase} appearance-none pr-10`}>
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="not-sure">Not sure yet / multiple</option>
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-smoke"
          />
        </div>
      </label>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Project details</span>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="What are you training, and what data or tooling gap are you hitting?"
          className={`${fieldBase} resize-none`}
        />
      </label>

      {/* Optional fields collapsed by default — long forms kill conversion. */}
      <details className="mt-4 rounded-2xl border border-line-strong bg-ash/60 px-4 py-3">
        <summary className="cursor-pointer text-sm font-medium text-graphite">
          Add budget &amp; timeline <span className="text-smoke">(optional)</span>
        </summary>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Budget range</span>
            <input name="budget" type="text" placeholder="e.g. $25k–$100k" className={fieldBase} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Timeline</span>
            <input name="timeline" type="text" placeholder="e.g. pilot in 4 weeks" className={fieldBase} />
          </label>
        </div>
      </details>

      <button type="submit" className="pill pill-primary mt-6 w-full">
        Send message
        <Send className="size-4" />
      </button>
      <p className="mt-3 text-center text-xs text-smoke">
        NDA available on request. We reply within one business day.
      </p>
    </form>
  )
}