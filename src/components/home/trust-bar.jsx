// PLACEHOLDER client logos — replace these wordmarks with real partner SVGs.
// Real logos do far more credibility work here than typeset names.
const partners = ['Northwind AI', 'Halcyon Labs', 'Vantik', 'Orbital', 'Meridian', 'Kestrel Robotics']

export function TrustBar() {
  return (
    <section className="border-b border-line bg-ash">
      <div className="mx-auto max-w-[1200px] px-5 py-10">
        <p className="text-center text-xs font-medium tracking-[0.14em] text-smoke uppercase">
          Trusted by teams training the next generation of AI &amp; robotics
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
          {partners.map((name) => (
            <span
              key={name}
              className="text-[17px] font-semibold tracking-tight text-smoke/55 grayscale transition-colors hover:text-smoke"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}