import { useDocumentTitle } from '../components/site/use-document-title.jsx'
import { CtaBand } from '../components/site/cta-band.jsx'
import { Hero } from '../components/home/hero.jsx'
import { TrustBar } from '../components/home/trust-bar.jsx'
import { Intro } from '../components/home/intro.jsx'
import { ServicesSection } from '../components/home/services-section.jsx'
import { CaseStudiesSection } from '../components/home/case-studies-section.jsx'
import { PhysicalAiShowcase } from '../components/home/physical-ai-showcase.jsx'
import { ProductsSection } from '../components/home/products-section.jsx'
import { ProcessSection } from '../components/home/process-section.jsx'
import { Testimonials } from '../components/home/testimonials.jsx'
import { StatsStrip } from '../components/home/stats-strip.jsx'
import { FaqSection } from '../components/home/faq-section.jsx'

export default function HomePage() {
  useDocumentTitle(
    'Nemetrix Technologies — AI Data & Engineering Partner',
    'Data pipelines, annotation, egocentric & dexterous-arm data collection, and custom tooling for teams training AI and robotics models.',
  )

  return (
    <>
      <Hero />
      <TrustBar />
      <Intro />
      <ServicesSection />
      <CaseStudiesSection />
      <PhysicalAiShowcase />
      <ProductsSection />
      <ProcessSection />
      <Testimonials />
      <StatsStrip />
      <FaqSection />
      <CtaBand />
    </>
  )
}