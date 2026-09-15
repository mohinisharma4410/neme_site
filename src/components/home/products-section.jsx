import { CircleCheckBig } from 'lucide-react'
import { SectionHeading } from '../site/section-heading.jsx'

const products = [
  {
    name: 'Nemetrix Capture',
    tag: 'Product',
    description:
      'Our wearable-capture and teleoperation stack for collecting synchronized egocentric and manipulation data at scale.',
    points: ['Multi-rig sync', 'On-device QA prompts', 'Auto pose & depth tagging'],
    image: '/images/egocentric-warehouse.webp',
  },
  {
    name: 'Nemetrix Label',
    tag: 'Product',
    description:
      'An annotation workspace with layered QA, consensus scoring and per-batch accuracy reporting built in.',
    points: ['Gold-standard audits', 'Consensus scoring', 'Live accuracy dashboards'],
    image: '/images/annotation.webp',
  },
]

export function ProductsSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16">
      <SectionHeading
        eyebrow="Our tooling"
        title="The products behind the programs."
        intro="Where off-the-shelf tools fall short, we build our own — and put them to work on your data."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {products.map((p) => (
          <div key={p.name} className="glow-ring overflow-hidden rounded-[26px]">
            <img
              src={p.image}
              alt={p.name}
              width={1000}
              height={620}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="p-7">
              <span className="rounded-full bg-signal/10 px-3 py-1 text-xs font-medium text-signal">
                {p.tag}
              </span>
              <h3 className="font-display mt-4 text-[26px] text-ink">{p.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-graphite">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-graphite">
                    <CircleCheckBig className="size-4 text-signal" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}