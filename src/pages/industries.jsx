import { useDocumentTitle } from '../components/site/use-document-title.jsx'
import { CtaBand } from '../components/site/cta-band.jsx'
import { PageHeader } from '../components/site/page-header.jsx'
import { Reveal } from '../components/site/reveal.jsx'
import { GradientBorderCard } from '../components/site/gradient-border-card.jsx'
import { industriesByGroup } from '../lib/site-data.js'

export default function IndustriesPage() {
  useDocumentTitle(
    'Industries — Nemetrix Technologies',
    'How Nemetrix supports robotics, autonomous vehicles, healthcare, enterprise, consumer AI and research teams across the AI pipeline.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="The pipeline looks different in every domain."
        intro="The stages stay the same — collect, label, build, ship — but the constraints, compliance and data types change by industry. Here's where we've built that expertise."
      />

      <div className="mx-auto max-w-[1200px] px-5 py-12">
        {industriesByGroup.map((group, gi) => (
          <div key={group.key} className={gi > 0 ? 'mt-12' : ''}>
            <p className="text-xs font-semibold tracking-[0.14em] text-smoke uppercase">
              {group.label}
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {group.items.map((ind, i) => {
                const Icon = ind.icon
                return (
                  <Reveal key={ind.slug} delay={(i % 2) * 80} className="h-full">
                    <GradientBorderCard id={ind.slug} className="h-full scroll-mt-28">
                      <div className="flex h-full flex-col p-7">
                        <span className="icon-pop grid size-12 place-items-center rounded-[14px] border border-line bg-ash text-signal">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="font-display mt-5 text-[22px] text-ink">{ind.name}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-graphite">{ind.description}</p>
                      </div>
                    </GradientBorderCard>
                  </Reveal>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <CtaBand
        eyebrow="Don't see your industry"
        title="We probably still fit."
        body="These are where we've done the most work — not the limit of what we take on. Tell us about your domain and your data, and we'll tell you honestly if we're a fit."
      />
    </>
  )
}
