interface SectionHeadingProps {
  eyebrow: string
  title: string
  lead?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div data-reveal className={`max-w-2xl ${alignment}`}>
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
        {eyebrow}
      </p>
      <h2
        className={`font-display text-4xl font-medium leading-tight sm:text-5xl ${
          dark ? 'text-cream' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-base font-light leading-relaxed ${
            dark ? 'text-cream/70' : 'text-ink/80'
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
