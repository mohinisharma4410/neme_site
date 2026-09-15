import { ArrowUpRight } from 'lucide-react'
import { useDocumentTitle } from '../components/site/use-document-title.jsx'
import { CtaBand } from '../components/site/cta-band.jsx'
import { PageHeader } from '../components/site/page-header.jsx'
import { SectionHeading } from '../components/site/section-heading.jsx'
import { Reveal } from '../components/site/reveal.jsx'
import { openRoles, cultureValues, hiringProcess } from '../lib/site-data.js'

export default function CareersPage() {
  useDocumentTitle(
    'Careers — Nemetrix Technologies',
    'Open roles at Nemetrix Technologies — data operations, model development, product engineering and infrastructure.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Help teams get from raw data to a shipped model."
        intro="We are a small team doing work that touches every stage of the AI pipeline — capture, annotation, training, and the product on top of it. If that combination interests you, we want to hear from you."
      />

      <section className="mx-auto max-w-[1200px] px-5 py-12">
        <SectionHeading eyebrow="Why Nemetrix" title="What working here is actually like." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cultureValues.map((v, i) => (
            <Reveal key={v.title} delay={i * 70} className="h-full">
              <div className="glow-ring card-hover h-full rounded-[22px] p-6">
                <h3 className="text-[16px] font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ash py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading eyebrow="Open roles" title="Where we're hiring right now." />
          <div className="mt-10 space-y-3">
            {openRoles.map((role, i) => (
              <Reveal key={role.title} delay={i * 50}>
                <div className="glow-ring card-hover flex flex-col gap-3 rounded-[20px] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-[16px] font-semibold text-ink">{role.title}</h3>
                    <p className="mt-1 text-sm text-smoke">
                      {role.department} · {role.location} · {role.type}
                    </p>
                  </div>
                  <a
                    href="mailto:careers@nemetrix.ai?subject=Application%3A%20"
                    className="pill pill-ghost pill-sm inline-flex shrink-0 items-center gap-1.5"
                  >
                    Apply
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-smoke">
            Don't see a fit?{' '}
            <a href="mailto:careers@nemetrix.ai" className="text-signal hover:underline">
              Reach out anyway
            </a>{' '}
            — we hire for the pipeline stage, not always the exact title.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16">
        <SectionHeading eyebrow="Hiring process" title="Five steps, no surprises." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {hiringProcess.map((p, i) => (
            <Reveal key={p.step} delay={i * 60} className="h-full">
              <div className="glow-ring card-hover h-full rounded-[20px] p-5">
                <span className="icon-pop font-display inline-block text-[24px] text-signal">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-[15px] font-semibold text-ink">{p.step}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-graphite">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Not hiring for your role yet?"
        title="Tell us what you'd want to build here."
        body="We keep a shortlist for people we'd hire the moment a seat opens. Send a note and a resume to careers@nemetrix.ai."
      />
    </>
  )
}
