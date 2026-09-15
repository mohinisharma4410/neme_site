import { Eyebrow } from './section-heading.jsx'

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="mx-auto max-w-[1200px] px-5 pb-6 pt-36 sm:pt-40">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-display mt-5 text-[clamp(38px,6vw,64px)] leading-[1.02] text-ink text-balance">
        {title}
      </h1>
      <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-graphite text-pretty">
        {intro}
      </p>
    </header>
  )
}