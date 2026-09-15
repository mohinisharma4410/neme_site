import { Link } from 'react-router-dom'
import { services } from '../../lib/site-data.js'
import { Logo } from './logo.jsx'

const companyLinks = [
  { href: '/work', label: 'Work' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="bg-ash">
      <div className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="glow-ring rounded-[28px] px-6 py-10 sm:px-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1.4fr_1fr_1fr]">
            <div className="max-w-xs">
              <Logo />
              <p className="mt-4 text-sm leading-relaxed text-smoke">
                The AI data and engineering partner behind the pipelines, tooling and
                infrastructure that AI and robotics teams use to train and ship models.
              </p>
              <p className="mt-4 text-xs text-smoke">NDA available on request.</p>
            </div>

            <div>
              <h2 className="text-xs font-semibold tracking-wide text-ink uppercase">Solutions</h2>
              <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/solutions#${s.slug}`}
                      className="text-sm text-smoke transition-colors hover:text-ink"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold tracking-wide text-ink uppercase">Company</h2>
              <ul className="mt-4 space-y-2.5">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="text-sm text-smoke transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold tracking-wide text-ink uppercase">Contact</h2>
              <ul className="mt-4 space-y-2.5 text-sm text-smoke">
                <li>
                  <a href="mailto:hello@nemetrix.ai" className="transition-colors hover:text-ink">
                    hello@nemetrix.ai
                  </a>
                </li>
                <li>San Francisco, CA</li>
                <li>
                  <Link to="/contact" className="text-signal hover:underline">
                    Book a call
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-smoke sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Nemetrix Technologies. All rights reserved.</p>
            <p>Empowering Innovation with Advanced AI Solutions.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}