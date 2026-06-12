import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const COMMITMENTS = [
  'Personalised care plans reviewed with your family every month',
  'Chef-prepared nutrition guided by clinical dieticians',
  'Physician partnerships with leading Lagos hospitals',
  'Daily updates so you are never out of the loop',
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef)

  return (
    <section id="about" ref={sectionRef} className="overflow-hidden bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Image collage */}
        <div data-reveal className="relative mx-auto w-full max-w-lg">
          <img
            src="/images/about-lounge.jpg"
            alt="A warm, plant-filled lounge where residents relax"
            loading="lazy"
            className="h-[28rem] w-full object-cover shadow-[0_24px_64px_rgba(44,44,44,0.16)]"
          />
          <img
            src="/images/about-tea.jpg"
            alt="Afternoon tea served with biscuits"
            loading="lazy"
            className="absolute -bottom-10 -right-4 hidden h-48 w-40 border-8 border-white object-cover shadow-[0_16px_40px_rgba(44,44,44,0.2)] sm:block lg:-right-10"
          />
          <div className="absolute -left-4 -top-6 bg-gold px-5 py-4 text-white shadow-lg sm:-left-8">
            <p className="font-display text-2xl font-semibold italic">Est. 2014</p>
          </div>
        </div>

        {/* Copy */}
        <div>
          <div data-reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
              About Serenity
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
              A home away from home, in the heart of Lagos
            </h2>
          </div>

          <p data-reveal className="mt-6 text-base font-light leading-relaxed text-ink/80">
            Serenity Care Lagos was founded on a simple conviction: our parents and
            grandparents deserve the same standard of hospitality we expect from the
            world&rsquo;s finest hotels — paired with clinical care we can trust
            without question.
          </p>
          <p data-reveal className="mt-4 text-base font-light leading-relaxed text-ink/80">
            From sunlit lounges and landscaped gardens to private consultation
            suites, every corner of our centre is designed to feel less like a
            facility and more like family.
          </p>

          <ul className="mt-8 space-y-4">
            {COMMITMENTS.map((item, index) => (
              <li
                key={item}
                data-reveal
                data-reveal-delay={index * 0.08}
                className="flex items-start gap-4 text-sm font-light leading-relaxed text-ink"
              >
                <span
                  aria-hidden
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-[0.6rem] text-gold"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div data-reveal className="mt-10 border-l-2 border-gold pl-6">
            <p className="font-display text-xl italic text-charcoal">
              &ldquo;We care for every resident the way we would care for our own
              mother.&rdquo;
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
              Dr. Amara Okonkwo — Medical Director
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
