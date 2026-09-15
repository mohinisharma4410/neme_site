import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services, pipelineStages } from '../../lib/site-data.js'
import { SectionHeading } from '../site/section-heading.jsx'
import { Reveal } from '../site/reveal.jsx'

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-[1200px] px-5 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="What we do"
          title={`One pipeline, ${services.length} services deep.`}
          intro="From first-person capture to the app your users open — we cover every stage between raw data and a shipped AI product, so you are not stitching together four vendors."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {pipelineStages.map((stage, i) => {
          const stageServices = services.filter((s) => s.stage === stage.key)
          return (
            <Reveal key={stage.key} delay={i * 70} className="h-full">
              <div className="glow-ring card-hover flex h-full flex-col rounded-[22px] p-6">
                <div className="flex items-center gap-2">
                  <span className="icon-pop font-display text-[13px] text-smoke">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[17px] font-semibold text-ink">{stage.label}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{stage.description}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {stageServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/solutions#${s.slug}`}
                        className="text-[13px] text-graphite transition-colors hover:text-ink"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                {i < pipelineStages.length - 1 && (
                  <ArrowRight className="mt-auto ml-auto size-4 pt-4 text-smoke lg:hidden" aria-hidden="true" />
                )}
              </div>
            </Reveal>
          )
        })}
      </div>

      <div className="mt-10">
        <Link to="/solutions" className="pill pill-ghost pill-sm">
          Explore all {services.length} solutions
        </Link>
      </div>
    </section>
  )
}
