import { Link } from 'react-router-dom'
import { caseStudies } from '../../lib/site-data.js'
import { SectionHeading } from '../site/section-heading.jsx'
import { CaseStudyRow } from '../site/case-study-card.jsx'
import { Reveal } from '../site/reveal.jsx'

export function CaseStudiesSection() {
  const featured = caseStudies.slice(0, 3)
  return (
    <section className="bg-ash py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Past work"
            title="Proof, not adjectives."
            intro="A look at the data programs behind shipped models. Details anonymized where clients require it — outcomes are real."
          />
        </Reveal>
        <div className="mt-14 space-y-20">
          {featured.map((study, i) => (
            <Reveal key={study.slug}>
              <CaseStudyRow study={study} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
        <div className="mt-14">
          <Link to="/work" className="pill pill-ghost">
            View all case studies
          </Link>
        </div>
      </div>
    </section>
  )
}