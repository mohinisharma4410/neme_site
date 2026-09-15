import { Link } from 'react-router-dom'
import { faqs } from '../../lib/site-data.js'
import { SectionHeading } from '../site/section-heading.jsx'
import { FaqAccordion } from '../site/faq-accordion.jsx'

export function FaqSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Before you ask"
            title="The questions procurement always has."
            intro="Security, turnaround, minimums and pricing — answered up front so a call moves faster."
          />
          <Link to="/contact" className="pill pill-ghost pill-sm mt-6">
            Still have a question? Ask us
          </Link>
        </div>
        <FaqAccordion items={faqs} />
      </div>
    </section>
  )
}