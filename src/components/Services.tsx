import { useRef } from 'react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const SERVICES = [
  {
    image: '/images/service-nursing.jpg',
    alt: 'A nurse attending warmly to an elderly woman',
    title: 'Health & Nursing Care',
    description:
      'Registered nurses on-site around the clock — medication management, health monitoring, and physician-coordinated care plans tailored to each resident.',
  },
  {
    image: '/images/service-wellness.jpg',
    alt: 'A peaceful guided meditation session at sunrise',
    title: 'Wellness & Mindfulness',
    description:
      'Gentle movement, guided meditation, and cognitive enrichment programmes designed to keep body and mind engaged, calm, and thriving.',
  },
  {
    image: '/images/service-spa.jpg',
    alt: 'A restorative hot-stone spa therapy session',
    title: 'Restorative Therapies',
    description:
      'Therapeutic massage, physiotherapy, and spa treatments delivered by certified specialists in a serene, unhurried setting.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef)

  return (
    <section id="services" ref={sectionRef} className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Care designed around the whole person"
          lead="Every programme at Serenity is built on one belief — that growing older should never mean giving up comfort, purpose, or joy."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              data-reveal
              data-reveal-delay={index * 0.12}
              className="group bg-white shadow-[0_8px_32px_rgba(44,44,44,0.06)] transition-shadow duration-500 hover:shadow-[0_16px_48px_rgba(44,44,44,0.12)]"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-medium text-charcoal">
                  {service.title}
                </h3>
                <div className="mt-3 h-px w-10 bg-gold transition-all duration-500 group-hover:w-16" />
                <p className="mt-4 text-sm font-light leading-relaxed text-ink/80">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold transition-colors hover:text-charcoal"
                >
                  Learn More <span aria-hidden>&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
