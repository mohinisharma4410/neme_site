import { Link } from 'react-router-dom'
import { CircleCheckBig } from 'lucide-react'
import { useDocumentTitle } from '../components/site/use-document-title.jsx'
import { CtaBand } from '../components/site/cta-band.jsx'
import { PageHeader } from '../components/site/page-header.jsx'
import { services, pipelineStages } from '../lib/site-data.js'

const imageFor = {
  'ai-llm-training': '/images/hero-dashboard.webp',
  'ai-model-development': '/images/hero-dashboard.webp',
  'data-annotation': '/images/annotation.webp',
  transcription: '/images/annotation.webp',
  'custom-development': '/images/hero-dashboard.webp',
  'app-web-development': '/images/hero-dashboard.webp',
  'mlops-deployment': '/images/hero-dashboard.webp',
  'ai-strategy-consulting': '/images/hero-dashboard.webp',
  'egocentric-data-collection': '/images/egocentric-kitchen.webp',
  'dexterous-arm-data-collection': '/images/dexterous-arm.webp',
}

export default function SolutionsPage() {
  useDocumentTitle(
    'Solutions — Nemetrix Technologies',
    'The full AI pipeline — data collection, annotation, model training and development, custom tooling, app and web development, and MLOps.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="One pipeline. Collect, label, build, ship."
        intro={`${services.length} services spanning the full lifecycle of an AI product — from raw capture to the application that puts it in front of users. Every engagement can start under NDA.`}
      />

      <div className="mx-auto max-w-[1200px] px-5 py-12">
        <nav aria-label="Pipeline stages" className="flex flex-wrap gap-2">
          {pipelineStages.map((stage) => (
            <a
              key={stage.key}
              href={`#stage-${stage.key}`}
              className="glow-ring rounded-full px-4 py-2 text-sm text-graphite transition-colors hover:text-ink"
            >
              {stage.label}
            </a>
          ))}
        </nav>

        {pipelineStages.map((stage) => {
          const stageServices = services.filter((s) => s.stage === stage.key)
          return (
            <div key={stage.key} id={`stage-${stage.key}`} className="scroll-mt-28 pt-16 first:pt-10">
              <div className="max-w-[640px]">
                <span className="text-xs font-semibold tracking-[0.14em] text-signal uppercase">
                  {stage.label}
                </span>
                <p className="mt-2 text-[15px] leading-relaxed text-graphite">{stage.description}</p>
              </div>

              <div className="mt-10 space-y-24">
                {stageServices.map((s) => {
                  const Icon = s.icon
                  const flip = services.indexOf(s) % 2 === 1
                  return (
                    <section
                      key={s.slug}
                      id={s.slug}
                      className="grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-12"
                    >
                      <div className={flip ? 'md:order-2' : ''}>
                        <div className="glow-ring overflow-hidden rounded-[26px]">
                          <img
                            src={imageFor[s.slug]}
                            alt={s.name}
                            width={1200}
                            height={800}
                            loading="lazy"
                            className="aspect-[3/2] w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className={flip ? 'md:order-1' : ''}>
                        <span className="grid size-11 place-items-center rounded-[14px] border border-line bg-ash text-signal">
                          <Icon className="size-5" />
                        </span>
                        <h2 className="font-display mt-5 text-[clamp(26px,3.2vw,36px)] text-ink">
                          {s.name}
                        </h2>
                        <p className="mt-3 text-[16px] leading-relaxed text-graphite">{s.description}</p>
                        <div className="glow-ring mt-6 rounded-[18px] p-5">
                          <p className="flex items-start gap-2 text-sm leading-relaxed text-graphite">
                            <CircleCheckBig className="mt-0.5 size-4 shrink-0 text-signal" />
                            <span>
                              <span className="font-medium text-ink">
                                What this looks like in practice:{' '}
                              </span>
                              {s.practice}
                            </span>
                          </p>
                        </div>
                        <Link to="/contact" className="pill pill-primary pill-sm mt-6">
                          Discuss {s.name}
                        </Link>
                      </div>
                    </section>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <CtaBand
        eyebrow="Full pipeline, one partner"
        title="Tell us which stage you need — or all four."
        body="Some clients bring us in for a single stage, like annotation or app development. Others hand us the problem end to end. Either way, we scope it with you before anything starts."
      />
    </>
  )
}
