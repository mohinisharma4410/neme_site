import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function CaseStudyRow({ study, flip = false, label = 'Case Study' }) {
  const [metricValue, ...metricRest] = study.metric.split(' ')

  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div className={flip ? 'md:order-2' : ''}>
        <div className="media-zoom glow-ring overflow-hidden rounded-[26px]">
          <img
            src={study.image}
            alt={study.name}
            width={1200}
            height={800}
            loading="lazy"
            className="aspect-[3/2] w-full object-cover"
          />
        </div>
      </div>
      <div className={flip ? 'md:order-1' : ''}>
        <span className="inline-flex items-center gap-2 rounded-full bg-signal/10 px-3 py-1 text-xs font-medium text-signal">
          {label}
        </span>
        <span className="ml-2 text-xs font-medium tracking-wide text-smoke uppercase">
          {study.category}
        </span>
        <h3 className="font-display mt-4 text-[clamp(24px,3vw,32px)] text-ink">{study.name}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-graphite">{study.challenge}</p>
        <div className="mt-5 flex items-baseline gap-3">
          <span className="font-display text-[34px] leading-none text-ink">{metricValue}</span>
          <span className="text-sm text-smoke">{metricRest.join(' ')}</span>
        </div>
        <Link
          to={`/work#${study.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-signal hover:underline"
        >
          Read the case study
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  )
}