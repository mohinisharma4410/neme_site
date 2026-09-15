import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../components/site/use-document-title.jsx'

export default function NotFoundPage() {
  useDocumentTitle('Page not found — Nemetrix Technologies')

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-[720px] flex-col items-center justify-center px-5 pt-36 text-center">
      <p className="font-display text-[clamp(56px,10vw,96px)] leading-none text-ink/15">404</p>
      <h1 className="font-display mt-4 text-[clamp(28px,4vw,40px)] text-ink text-balance">
        That page does not exist.
      </h1>
      <p className="mt-4 max-w-[480px] text-[16px] leading-relaxed text-graphite">
        The link may be out of date. Head back home, or tell us what you were looking for.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="pill pill-primary">
          Back to home
        </Link>
        <Link to="/contact" className="pill pill-ghost">
          Contact us
        </Link>
      </div>
    </div>
  )
}