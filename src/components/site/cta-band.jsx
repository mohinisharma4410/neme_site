import { Link } from 'react-router-dom'
import { CalendarClock } from 'lucide-react'
import { SlideButton } from './slide-button.jsx'

export function CtaBand({
  eyebrow = 'Start a conversation',
  title = 'Tell us about your data problem.',
  body = 'Whether it is egocentric capture, manipulation demonstrations, annotation at scale, or the tooling in between — tell us what you are training and we will scope it with you.',
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="glow-ring-strong overflow-hidden rounded-[30px]">
        <div className="grid gap-8 p-8 sm:p-12 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.14em] text-smoke uppercase">
              {eyebrow}
            </span>
            <h2 className="font-display mt-3 text-[clamp(28px,3.6vw,40px)] text-ink text-balance">
              {title}
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-graphite">{body}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <SlideButton to="/contact" hoverLabel="Tell us what you need">
                Book a Call
              </SlideButton>
              <Link to="/work" className="pill pill-ghost">
                See Our Work
              </Link>
            </div>
          </div>

          {/* TODO: replace with a real Calendly / Cal.com embed */}
          <div className="glass card-hover flex flex-col items-center justify-center gap-3 rounded-[22px] p-8 text-center">
            <span className="hero-gradient icon-pop grid size-12 place-items-center rounded-2xl text-white">
              <CalendarClock className="size-6" />
            </span>
            <p className="text-sm font-medium text-ink">Prefer to talk?</p>
            <p className="text-xs text-smoke">Book a 30-minute scoping call.</p>
            <Link to="/contact" className="text-sm font-medium text-signal hover:underline">
              Grab a time
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}