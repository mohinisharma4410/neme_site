import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <Link
      to={`/solutions#${service.slug}`}
      className="glow-ring card-hover group flex h-full flex-col rounded-[22px] p-6"
    >
      <span className="icon-pop grid size-11 place-items-center rounded-[14px] border border-line bg-ash text-signal">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-5 text-[17px] font-semibold text-ink">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-graphite">{service.short}</p>
      <span className="mt-auto flex items-center gap-1 pt-6 text-sm font-medium text-signal">
        Learn more
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}