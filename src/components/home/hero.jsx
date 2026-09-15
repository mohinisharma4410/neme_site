import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/* Deterministic starfield: [xPercent, yPercent, radius, opacity, twinkleDelay] */
const STARS = [[32.38,8.75,0.5,0.6,2.19],[5.8,29.43,0.5,0.52,1.44],[55.1,3.43,1.19,0.4,3.76],[94.77,33.47,0.9,0.39,3.34],[13.32,24.31,1.19,0.45,4.9],[18.07,33.73,0.66,0.61,0.38],[5.96,11.95,1.36,0.45,3.51],[45.32,17.39,0.76,0.41,3.45],[52.52,50.76,1.01,0.89,0.71],[41.81,43.91,0.82,0.52,5.77],[7.76,32.37,0.84,0.48,2.98],[79.69,3.99,0.71,0.56,3.98],[6.07,40.69,1.68,0.78,1.71],[38.58,38.78,0.71,0.48,3.67],[49.37,12.66,0.77,0.41,2.35],[87.14,4.67,1.06,0.43,0.82],[43.05,31.91,1.31,0.69,2.28],[23.08,4.81,0.62,0.4,2.91],[58.91,15.24,0.51,0.6,3.66],[31.86,7.28,1.65,0.68,4.44],[45.66,50.52,1.34,0.51,0.62],[63.43,3.61,0.72,0.54,0.66],[60.07,5.94,1.2,0.32,2.18],[2.55,50.71,1.33,0.66,5.73],[60.23,27.5,0.68,0.9,2.8],[48.38,4.98,0.66,0.73,2.87],[69.21,29.95,0.83,0.59,0.88],[54.32,1.57,1.29,0.67,0.55],[84.54,30.07,0.66,0.39,3.25],[50.27,36.91,1.57,0.89,5.12],[80.61,47.46,0.62,0.57,4.39],[98.96,45.83,0.99,0.7,5.74],[44.72,54.35,1.06,0.49,1.32],[22.68,11.41,0.7,0.89,3.66],[0.19,52.73,1.01,0.31,3.96],[90.98,45.37,0.69,0.37,4.73],[33.25,46.45,1.08,0.73,0.51],[15.89,57.6,0.52,0.84,4.84],[14.62,47.94,1.17,0.48,3.29],[13.1,0.83,0.61,0.86,2.6],[87.17,47.92,0.57,0.39,3.01],[76.37,18.91,1.35,0.34,5.46],[35.38,26.57,1.58,0.59,4.96],[87.82,7.58,0.71,0.26,2.64],[18.31,0.23,0.61,0.56,4.35],[55.65,18.91,1.42,0.56,4.66],[88.32,3.3,0.64,0.75,3.05],[56.17,44.08,0.59,0.65,3.03],[51.22,40.18,1.1,0.77,3.05],[24.77,30.35,1.05,0.83,1.22],[44.75,24.16,1.07,0.3,1.44],[7.31,38.83,0.7,0.35,4.3],[66.03,8.29,0.83,0.39,5.72],[39.83,28.26,0.61,0.53,3.09],[33.91,11.35,0.75,0.49,2.03],[45.87,40.78,1.03,0.66,3.07],[6.43,57.13,0.83,0.32,1.59],[3.96,45.18,0.99,0.78,5.1],[67.6,54.87,0.95,0.85,3.42],[70.04,5.19,0.67,0.37,5.37],[26.89,0.98,0.67,0.3,5.14],[6.66,50.04,0.89,0.9,2.51],[91.54,36.06,0.61,0.4,0.66],[16.14,2.92,0.82,0.66,3.19],[20.59,25.85,0.64,0.77,5.97],[3.69,1.07,1.43,0.37,2.85],[93.46,6.16,1.17,0.6,5.33],[97.03,17.85,0.84,0.47,4.99],[70.67,36.89,1.32,0.89,5.02],[1.43,36.28,0.88,0.29,3.99],[38.09,29.34,0.94,0.7,0.27],[18.54,15.6,0.54,0.88,5.84],[54.71,14.18,0.8,0.37,2.01],[8.39,16.18,0.63,0.75,0.55],[81.7,8.34,1.14,0.26,1.83],[23.28,33.96,1.6,0.35,5.36],[78.4,34.6,0.98,0.57,1.71],[61.87,8.4,1.47,0.73,4.87],[13.93,30.38,1.44,0.78,0.1],[68.65,46.28,0.58,0.28,3.82],[95.95,21.84,1.13,0.66,3.76],[68.07,28.38,0.59,0.3,5.6],[89.79,5.33,1.16,0.73,1.51],[7.44,15.4,0.62,0.67,2.76],[84.55,4.45,1.0,0.65,3.86],[7.75,8.55,0.95,0.7,3.73],[13.34,27.98,1.0,0.69,4.15],[67.57,16.87,1.28,0.55,4.6],[99.33,31.85,1.07,0.86,0.11],[45.9,47.55,1.32,0.5,5.5]]

export function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* deepen the upper sky so the starfield has something to sit against */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%]"
        style={{
          background: 'var(--hero-deepen)',
        }}
      />

      {/* ---------- atmosphere: starfield ---------- */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {STARS.map(([x, y, r, o, d], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={r * 0.12}
            fill="var(--hero-star)"
            opacity={`calc(${o} * var(--hero-star-boost))`}
            style={{ animation: `twinkle 4.5s ease-in-out ${d}s infinite` }}
          />
        ))}
      </svg>

      {/* ---------- atmosphere: meteors ---------- */}
      <span aria-hidden="true" className="meteor meteor-1" />
      <span aria-hidden="true" className="meteor meteor-2" />
      <span aria-hidden="true" className="meteor meteor-3" />

      {/* ---------- horizon haze ---------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64"
        style={{
          background: 'var(--hero-haze)',
        }}
      />

      {/* ---------- landscape: far ridge ---------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
        style={{
          clipPath:
            'polygon(0 62%, 7% 48%, 15% 60%, 24% 41%, 33% 56%, 43% 38%, 52% 54%, 61% 44%, 71% 58%, 80% 46%, 90% 57%, 100% 47%, 100% 100%, 0 100%)',
          background: 'var(--hero-ridge-far)',
        }}
      />

      {/* ---------- landscape: near ridge + treeline ---------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
        style={{
          clipPath:
            'polygon(0 70%, 4% 52%, 6% 66%, 11% 44%, 14% 62%, 19% 38%, 23% 60%, 28% 50%, 33% 66%, 38% 46%, 43% 64%, 48% 40%, 53% 62%, 58% 52%, 63% 68%, 68% 44%, 73% 62%, 78% 48%, 84% 66%, 89% 46%, 94% 64%, 100% 54%, 100% 100%, 0 100%)',
          background: 'var(--hero-ridge-near)',
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 pb-28 pt-36 sm:pt-40">
        <div className="max-w-[760px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            AI Data &amp; Engineering Partner
          </span>
          <h1 className="font-display mt-5 text-[clamp(40px,6.4vw,72px)] leading-[1.0] text-white text-balance">
            Empowering innovation with advanced AI solutions.
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-white/85">
            We build the data pipelines, custom tooling and collection infrastructure that AI and
            robotics teams need to train and ship models — from egocentric capture to dexterous-arm
            demonstrations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="pill group bg-white text-[#101010] hover:bg-white/90"
            >
              <span className="pill-slide__viewport" style={{ height: '1.2em' }}>
                <span className="pill-slide__stack">
                  <span className="pill-slide__line">
                    Book a Call
                    <ArrowRight className="size-4" />
                  </span>
                  <span className="pill-slide__line" aria-hidden="true">
                    Let’s scope it
                    <ArrowRight className="size-4" />
                  </span>
                </span>
              </span>
            </Link>
            <Link
              to="/work"
              className="pill border-[1.5px] border-white/70 text-white hover:bg-white/10"
            >
              See Our Work
            </Link>
          </div>
        </div>

        {/* Device mockup. TODO: swap for a real product screenshot. */}
        <div className="mt-14 sm:mt-16">
          <div className="screen-frame overflow-hidden rounded-[24px]">
            <div className="flex items-center gap-1.5 border-b border-line bg-paper px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-smoke">Nemetrix Data Platform</span>
            </div>
            {/* cropped to a 21:9 band so the hero does not push the trust bar off-screen */}
            <div className="relative aspect-[21/9] w-full overflow-hidden bg-paper">
              <img
                src="/images/hero-dashboard.webp"
                alt="Nemetrix data platform dashboard showing training data pipeline metrics and annotation progress"
                width={1600}
                height={1258}
                fetchPriority="high"
                className="absolute inset-x-0 top-0 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
