import { useRef, useState, type FormEvent } from 'react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const CONTACT_DETAILS = [
  { label: 'Visit', value: '14 Adetokunbo Ademola Street, Victoria Island, Lagos' },
  { label: 'Call', value: '+234 800 000 0000' },
  { label: 'Email', value: 'hello@serenitycarelagos.com' },
  { label: 'Hours', value: 'Monday – Saturday, 7:00am – 7:00pm' },
]

const inputClasses =
  'w-full border border-charcoal/15 bg-white px-5 py-3.5 text-sm font-light text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-gold'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [submitted, setSubmitted] = useState(false)
  useReveal(sectionRef)

  // Demo form — no backend wired up yet
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={sectionRef} className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Begin the conversation"
          lead="Tell us a little about your loved one and we will arrange a private tour at a time that suits your family."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div data-reveal className="space-y-8">
            {CONTACT_DETAILS.map((detail) => (
              <div key={detail.label} className="border-l-2 border-gold/60 pl-6">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-gold">
                  {detail.label}
                </p>
                <p className="mt-1.5 text-sm font-light leading-relaxed text-ink">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>

          <div data-reveal>
            {submitted ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center border border-gold/40 bg-cream/60 px-8 text-center">
                <p className="font-display text-3xl font-medium text-charcoal">
                  Thank you.
                </p>
                <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-ink/80">
                  A member of our care team will reach out within one business day
                  to arrange your visit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    aria-label="Your name"
                    className={inputClasses}
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone number"
                    aria-label="Phone number"
                    className={inputClasses}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address (optional)"
                  aria-label="Email address"
                  className={inputClasses}
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your loved one and what kind of care you are considering…"
                  aria-label="Message"
                  className={`${inputClasses} resize-none`}
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-charcoal px-9 py-4 text-sm font-medium uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-gold"
                >
                  Request a Visit
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
