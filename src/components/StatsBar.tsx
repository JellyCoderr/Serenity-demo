import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: 12, suffix: '+', label: 'Years of Care' },
  { value: 300, suffix: '+', label: 'Families Served' },
  { value: 40, suffix: '+', label: 'Care Professionals' },
  { value: 24, suffix: '/7', label: 'Nursing Coverage' },
]

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const numbers = gsap.utils.toArray<HTMLElement>('[data-stat-value]')
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      numbers.forEach((el) => {
        const target = Number(el.dataset.statValue)
        const counter = { value: 0 }
        gsap.to(counter, {
          value: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: () => {
            el.textContent = String(Math.round(counter.value))
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-charcoal">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-14 sm:py-16 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl font-medium text-cream sm:text-5xl">
              <span data-stat-value={stat.value}>{stat.value}</span>
              <span className="text-gold">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-cream/50">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
