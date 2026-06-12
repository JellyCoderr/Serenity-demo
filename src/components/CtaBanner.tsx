import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef)

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-charcoal py-24 sm:py-28">
      {/* Soft gold glow keeps the dark section from feeling flat */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p data-reveal className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Visit Us
        </p>
        <h2
          data-reveal
          className="font-display text-4xl font-medium leading-tight text-cream sm:text-5xl"
        >
          Come and feel the Serenity difference for yourself
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-cream/70">
          Join us for a private tour, meet our care team, and share a cup of tea
          with the family. No obligation — only a warm welcome.
        </p>
        <div data-reveal className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-gold px-9 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-cream hover:text-charcoal"
          >
            Book a Visit
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="tel:+2348000000000"
            className="text-sm font-medium tracking-wide text-cream underline decoration-gold/60 underline-offset-8 transition-colors hover:text-gold"
          >
            Or call +234 800 000 0000
          </a>
        </div>
      </div>
    </section>
  )
}
