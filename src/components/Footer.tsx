const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <a href="#home" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight text-cream">
              Serenity
            </span>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-gold">
              Care Lagos
            </span>
          </a>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-light text-cream/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-light text-cream/40">
            &copy; {new Date().getFullYear()} Serenity Care Lagos. All rights reserved.
          </p>
          <p className="text-xs font-light text-cream/40">
            Exceptional Care. Dignified Living.
          </p>
        </div>
      </div>
    </footer>
  )
}
