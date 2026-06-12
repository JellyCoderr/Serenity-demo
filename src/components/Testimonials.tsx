import { useRef } from 'react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const TESTIMONIALS = [
  {
    quote:
      'For the first time in years I go to work with complete peace of mind. Mum calls the centre her "club" — she has never been happier.',
    name: 'Adaeze N.',
    location: 'Victoria Island',
    avatar: '/images/avatar-adaeze.jpg',
  },
  {
    quote:
      'The nursing team caught a change in Dad’s blood pressure before we even noticed anything. That level of attention is priceless.',
    name: 'Tunde A.',
    location: 'Lekki Phase 1',
    avatar: '/images/avatar-tunde.jpg',
  },
  {
    quote:
      'It feels like a five-star hotel that happens to have wonderful medical care. My mother-in-law looks forward to every single visit.',
    name: 'Funmilayo O.',
    location: 'Ikoyi',
    avatar: '/images/avatar-funmi.jpg',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef)

  return (
    <section id="testimonials" ref={sectionRef} className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Families Speak"
          title="Trusted by families across Lagos"
          lead="The highest compliment we receive is the confidence of the families who entrust their loved ones to us, day after day."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              data-reveal
              data-reveal-delay={index * 0.12}
              className="flex flex-col bg-white p-8 shadow-[0_8px_32px_rgba(44,44,44,0.06)]"
            >
              <span aria-hidden className="font-display text-6xl leading-none text-gold/40">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-sm font-light leading-relaxed text-ink">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-charcoal/10 pt-6">
                <img
                  src={testimonial.avatar}
                  alt=""
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-charcoal">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-ink/50">
                    {testimonial.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
