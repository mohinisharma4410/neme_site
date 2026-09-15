import { Lock, ScanLine, ShieldCheck } from 'lucide-react'
import { useDocumentTitle } from '../components/site/use-document-title.jsx'
import { CtaBand } from '../components/site/cta-band.jsx'
import { PageHeader } from '../components/site/page-header.jsx'
import { SectionHeading } from '../components/site/section-heading.jsx'
import { Reveal } from '../components/site/reveal.jsx'
import { stats } from '../lib/site-data.js'

const team = [
  { name: 'Founding team', role: 'Data & ML engineering', note: 'Ex-perception, robotics and data-platform builders.' },
  { name: 'Collection network', role: '300+ trained operators', note: 'Vetted collectors and teleoperators across regions.' },
  { name: 'Annotation & QA', role: 'Layered quality org', note: 'Gold-standard audits and consensus scoring on every batch.' },
  { name: 'Client engineering', role: 'Delivery & integration', note: 'We format and ship data straight into your pipeline.' },
]

const trust = [
  {
    icon: Lock,
    title: 'Access-controlled by default',
    text: 'Data lives on infrastructure with least-privilege access, and every engagement can begin under NDA.',
  },
  {
    icon: ShieldCheck,
    title: 'Vetted, bound contributors',
    text: 'Collectors and annotators are vetted and bound by confidentiality before they touch a single asset.',
  },
  {
    icon: ScanLine,
    title: 'Compliance-aligned',
    text: 'We align to your posture — SOC 2, GDPR and similar — and document the audit trail procurement expects.',
  },
]

export default function AboutPage() {
  useDocumentTitle(
    'About — Nemetrix Technologies',
    'Nemetrix Technologies is an AI data and engineering partner. Our mission, team, and security posture for handling your confidential training data.',
  )

  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We take AI products from raw data to production."
        intro="Nemetrix Technologies is an end-to-end AI data and engineering partner. We exist because the bottleneck for most AI and robotics teams isn't just the model — it's everything around it: getting the right data, turning it into a working model, and shipping the product that uses it."
      />

      <section className="mx-auto max-w-[720px] px-5 py-12">
        <h2 className="font-display text-[26px] text-ink">Our mission</h2>
        <p className="mt-3 text-[16px] leading-relaxed text-graphite">
          Empowering innovation with advanced AI solutions means owning the full stack, not one
          slice of it: capture, annotation and transcription; model training and development;
          and the app, web and deployment layer that puts it all in front of users. We treat every
          stage like it is going into production — because it is.
        </p>
        <p className="mt-4 text-[16px] leading-relaxed text-graphite">
          We started Nemetrix after watching brilliant teams lose quarters stitching together
          separate vendors for data, modeling and product engineering. Our job is to make that
          coordination problem disappear — one partner, one pipeline, on a schedule you can plan
          around.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-8">
        <div className="grid grid-cols-2 gap-6 border-y border-line-strong py-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-[clamp(28px,4vw,40px)] leading-none text-ink">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-smoke">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16">
        <SectionHeading eyebrow="Team" title="Built by people who have shipped this before." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={i * 60} className="h-full">
              <div className="glow-ring card-hover h-full rounded-[22px] p-6">
                <div className="icon-pop hero-gradient h-20 rounded-[16px]" aria-hidden="true" />
                <h3 className="mt-4 text-[16px] font-semibold text-ink">{t.name}</h3>
                <p className="text-sm text-signal">{t.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{t.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ash py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading
            eyebrow="Why trust us with your data"
            title="Security posture, up front."
            intro="This is a data-handling business. We treat your confidential material the way you would."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trust.map((t, i) => {
              const Icon = t.icon
              return (
                <Reveal key={t.title} delay={i * 70} className="h-full">
                  <div className="glow-ring card-hover h-full rounded-[22px] p-6">
                    <span className="icon-pop grid size-11 place-items-center rounded-[14px] border border-line bg-ash text-signal">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-[16px] font-semibold text-ink">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-graphite">{t.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}