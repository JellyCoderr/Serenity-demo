import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -24,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.15,
      })
    }, navRef)
    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 shadow-[0_1px_24px_rgba(44,44,44,0.08)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#home" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-charcoal">
            Serenity
          </span>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-gold">
            Care Lagos
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-ink transition-colors hover:text-charcoal"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="border border-charcoal/80 px-5 py-2.5 text-sm font-medium tracking-wide text-charcoal transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-white"
            >
              Book a Visit
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-charcoal transition-transform duration-300 ${
              menuOpen ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-charcoal transition-transform duration-300 ${
              menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden bg-cream/95 backdrop-blur-md transition-[max-height] duration-500 ease-in-out md:hidden ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-charcoal/10 py-4 font-display text-2xl text-charcoal"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block bg-charcoal px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-cream"
            >
              Book a Visit
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
