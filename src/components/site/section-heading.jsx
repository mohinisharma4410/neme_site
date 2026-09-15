export function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-smoke uppercase">
      <span aria-hidden="true" className="h-px w-6 bg-signal/50" />
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, intro, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-[680px] text-center' : 'max-w-[680px]'}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-display mt-4 text-[clamp(30px,4vw,44px)] text-ink text-balance">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-[16px] leading-relaxed text-graphite text-pretty">{intro}</p>
      ) : null}
    </div>
  )
}