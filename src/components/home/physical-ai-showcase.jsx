import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Radar, Send, Tags } from 'lucide-react'
import { showcaseClips } from '../../lib/site-data.js'
import { Eyebrow } from '../site/section-heading.jsx'
import { VideoClipCard } from '../site/video-clip-card.jsx'
import { Reveal } from '../site/reveal.jsx'

const pipeline = [
  { icon: Radar, label: 'Captured', text: 'Egocentric & teleoperated footage from real environments.' },
  { icon: Layers, label: 'Enriched', text: 'Pose, depth & segmentation; joint-angle & trajectory data.' },
  { icon: Tags, label: 'Annotated', text: 'Labeled and QA’d against gold standards.' },
  { icon: Send, label: 'Delivered', text: 'Formatted straight into your training pipeline.' },
]

// PLACEHOLDER figures — swap in real numbers before shipping.
const scaleStats = [
  { value: '300+', label: 'Trained collectors & operators' },
  { value: '12+', label: 'Robot platforms supported' },
  { value: '40K+', label: 'Hours of footage' },
  { value: '25+', label: 'Client & partner teams' },
]

export function PhysicalAiShowcase() {
  return (
    <section id="physical-ai" className="mx-auto max-w-[1200px] px-5 py-20">
      <div className="max-w-[760px]">
        <Eyebrow>Physical AI · Egocentric &amp; Robotics data</Eyebrow>
        {/* PLACEHOLDER headline figures — swap in real numbers before shipping. */}
        <p className="font-display mt-5 text-[clamp(32px,4.6vw,52px)] leading-[1.05] text-ink text-balance">
          <span className="text-signal">500K+</span> egocentric clips.{' '}
          <span className="text-signal">80K+</span> manipulation demonstrations.
        </p>
        <p className="mt-4 max-w-[600px] text-[16px] leading-relaxed text-graphite">
          The proof piece of everything we do. Real first-person capture and dexterous-arm
          demonstrations, collected across environments and hardware, enriched and delivered for
          training embodied AI.
        </p>
      </div>

      {/* video showcase grid */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {showcaseClips.map((clip, i) => (
          <Reveal key={clip.caption} delay={(i % 2) * 80}>
            <VideoClipCard clip={clip} priority={i < 2} />
          </Reveal>
        ))}
      </div>

      {/* more than raw footage — pipeline */}
      <div className="mt-16">
        <h3 className="font-display text-[26px] text-ink">More than raw footage.</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pipeline.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.label} className="glow-ring rounded-[20px] p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl border border-line bg-ash text-signal">
                    <Icon className="size-[18px]" />
                  </span>
                  <span className="text-xs font-medium text-smoke">Step {i + 1}</span>
                </div>
                <p className="mt-4 text-[15px] font-semibold text-ink">{step.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-graphite">{step.text}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* scale / credibility strip */}
      <div className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-10 sm:grid-cols-4">
        {scaleStats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-[clamp(30px,4vw,42px)] leading-none text-ink">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-smoke">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link to="/contact" className="pill pill-primary">
          Tell us what you are training
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}