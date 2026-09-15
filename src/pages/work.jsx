import { useDocumentTitle } from '../components/site/use-document-title.jsx'
import { CtaBand } from '../components/site/cta-band.jsx'
import { PageHeader } from '../components/site/page-header.jsx'
import { SectionHeading } from '../components/site/section-heading.jsx'
import { Reveal } from '../components/site/reveal.jsx'
import { caseStudies, collaboratedProducts } from '../lib/site-data.js'

export default function WorkPage() {
  useDocumentTitle(
    'Work & Case Studies — Nemetrix Technologies',
    'Data programs and products behind shipped AI and robotics models — egocentric data collection, dexterous-arm data, annotation, transcription and full product builds.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="The data programs — and products — behind shipped models."
        intro="Every project here fed a real model or shipped as a real product. Client details are anonymized where confidentiality requires it — the challenges, approaches and outcomes are not."
      />

      <div className="mx-auto max-w-[1000px] px-5 py-12">
        <div className="space-y-6">
          {caseStudies.map((study, i) => {
            const [metricValue, ...metricRest] = study.metric.split(' ')
            return (
              <Reveal key={study.slug} delay={(i % 3) * 60}>
                <article
                  id={study.slug}
                  className="glow-ring card-hover media-zoom grid scroll-mt-28 overflow-hidden rounded-[28px] md:grid-cols-[1fr_1.2fr]"
                >
                <img
                  src={study.image}
                  alt={study.name}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="h-full min-h-56 w-full object-cover"
                />
                <div className="p-7 sm:p-9">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="rounded-full bg-signal/10 px-3 py-1 text-xs font-medium text-signal">
                      {study.category}
                    </span>
                    <span className="text-xs text-smoke">{study.client}</span>
                  </div>
                  <h2 className="font-display mt-4 text-[clamp(24px,3vw,32px)] text-ink">
                    {study.name}
                  </h2>

                  <dl className="mt-5 space-y-4">
                    <div>
                      <dt className="text-xs font-semibold tracking-wide text-smoke uppercase">
                        Challenge
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-graphite">
                        {study.challenge}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold tracking-wide text-smoke uppercase">
                        Approach
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-graphite">
                        {study.approach}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold tracking-wide text-smoke uppercase">
                        Outcome
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-graphite">
                        {study.outcome}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex items-baseline gap-3 border-t border-line pt-5">
                    <span className="font-display text-[32px] leading-none text-ink">
                      {metricValue}
                    </span>
                    <span className="text-sm text-smoke">{metricRest.join(' ')}</span>
                  </div>
                </div>
              </article>
              </Reveal>
            )
          })}
        </div>
      </div>

      <section className="bg-ash py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading
            eyebrow="Collaborations"
            title="Products we've helped build."
            intro="Beyond data programs, these are products we co-built end to end — often spanning several pipeline stages at once."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {collaboratedProducts.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 70} className="h-full">
                <div id={p.slug} className="shimmer-card glow-ring scroll-mt-28 flex h-full flex-col rounded-[22px] p-6">
                  <div className="hero-gradient relative h-16 overflow-hidden rounded-[14px]" aria-hidden="true">
                    <span className="shimmer-sweep" />
                  </div>
                  <span className="mt-4 w-fit rounded-full bg-signal/10 px-2.5 py-0.5 text-xs font-medium text-signal">
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-[16px] font-semibold text-ink">{p.name}</h3>
                  <p className="mt-1 text-xs font-medium tracking-wide text-smoke uppercase">{p.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Your project next"
        title="What should we collect for you?"
        body="Tell us the model you are building and the data gap in front of it. We will scope a pilot you can validate before scaling."
      />
    </>
  )
}