import { CalendarClock, Mail, MapPin } from 'lucide-react'
import { useDocumentTitle } from '../components/site/use-document-title.jsx'
import { PageHeader } from '../components/site/page-header.jsx'
import { ContactForm } from '../components/contact/contact-form.jsx'

export default function ContactPage() {
  useDocumentTitle(
    'Contact — Nemetrix Technologies',
    'Tell us about your data problem. Book a call or send a project brief to the Nemetrix team.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about your data problem."
        intro="The more specific you are about the model you are training and the data in front of it, the faster we can come back with a plan and a quote."
      />

      <div className="mx-auto max-w-[1200px] px-5 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          <ContactForm />

          <aside className="space-y-4">
            <div className="glow-ring rounded-[24px] p-6">
              <span className="hero-gradient grid size-12 place-items-center rounded-2xl text-white">
                <CalendarClock className="size-6" />
              </span>
              <h2 className="font-display mt-4 text-[22px] text-ink">Prefer to talk?</h2>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                Book a 30-minute scoping call and we will walk through your use case live.
              </p>
              {/* TODO: replace with a real Calendly / Cal.com embed */}
              <div className="mt-4 grid h-28 place-items-center rounded-2xl border border-dashed border-line-strong bg-ash text-center text-xs text-smoke">
                Booking embed goes here
              </div>
            </div>

            <div className="glow-ring rounded-[24px] p-6">
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-[18px] text-signal" />
                  <span>
                    <span className="block font-medium text-ink">Email</span>
                    <a href="mailto:hello@nemetrix.ai" className="text-graphite hover:text-ink">
                      hello@nemetrix.ai
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-[18px] text-signal" />
                  <span>
                    <span className="block font-medium text-ink">Location</span>
                    <span className="text-graphite">San Francisco, CA</span>
                  </span>
                </li>
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-xs text-smoke">
                NDA available on request. Data handled on access-controlled infrastructure.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}