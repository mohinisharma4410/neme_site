import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useDocumentTitle } from '../components/site/use-document-title.jsx'
import { CtaBand } from '../components/site/cta-band.jsx'
import { PageHeader } from '../components/site/page-header.jsx'
import { insights } from '../lib/site-data.js'

export default function InsightsPage() {
  useDocumentTitle(
    'Blog — Nemetrix Technologies',
    'Notes on egocentric data, annotation quality, teleoperation data, model development and ML tooling from the Nemetrix team.',
  )

  const [featured, ...rest] = insights

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes from the data trenches."
        intro="How we think about capture, quality, model development and tooling for teams training real models. Written for practitioners, not marketers."
      />

      <div className="mx-auto max-w-[1000px] px-5 py-12">
        {/* TODO: point these at real article routes once posts exist. */}
        <Link to="/blog" className="glow-ring group block overflow-hidden rounded-[28px] p-8 sm:p-10">
          <div className="flex items-center gap-3 text-xs text-smoke">
            <span className="rounded-full bg-signal/10 px-3 py-1 font-medium text-signal">
              {featured.category}
            </span>
            <span>{featured.date}</span>
          </div>
          <h2 className="font-display mt-4 flex items-start gap-2 text-[clamp(26px,3.4vw,38px)] leading-[1.1] text-ink text-balance">
            {featured.title}
            <ArrowUpRight className="mt-2 size-6 shrink-0 text-smoke transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </h2>
          <p className="mt-3 max-w-[640px] text-[16px] leading-relaxed text-graphite">
            {featured.excerpt}
          </p>
        </Link>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog"
              className="glow-ring group flex flex-col rounded-[24px] p-6"
            >
              <div className="flex items-center gap-3 text-xs text-smoke">
                <span className="rounded-full bg-signal/10 px-2.5 py-0.5 font-medium text-signal">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>
              <h3 className="font-display mt-4 text-[20px] leading-[1.2] text-ink">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-signal">
                Read
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <CtaBand
        eyebrow="Stay close"
        title="Working on something hard?"
        body="If a post raised a question about your own data problem, skip the comments — just talk to us directly."
      />
    </>
  )
}