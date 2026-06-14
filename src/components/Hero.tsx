import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const TRUST_MARKERS = [
  "Licensed Care Professionals",
  "24/7 Nursing Support",
  "Family-First Philosophy",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) {
        gsap.set("[data-hero-fade], [data-hero-image]", { opacity: 1, y: 0 });
        gsap.set("[data-hero-line]", { scaleX: 1 });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" }, delay: 0.3 })
        .from("[data-hero-eyebrow]", { y: 24, opacity: 0, duration: 0.8 })
        .from(
          "[data-hero-headline] span",
          { y: 56, opacity: 0, duration: 1.1, stagger: 0.12 },
          "-=0.5",
        )
        .from(
          "[data-hero-line]",
          { scaleX: 0, duration: 0.9, ease: "power2.inOut" },
          "-=0.6",
        )
        .from(
          "[data-hero-subtext]",
          { y: 28, opacity: 0, duration: 0.9 },
          "-=0.55",
        )
        .from("[data-hero-cta]", { y: 24, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(
          "[data-hero-image]",
          { y: 48, opacity: 0, scale: 0.97, duration: 1.2 },
          "-=0.9",
        )
        .from(
          "[data-hero-badge]",
          { y: 20, opacity: 0, duration: 0.7 },
          "-=0.5",
        )
        .from(
          "[data-hero-trust]",
          { y: 16, opacity: 0, duration: 0.8 },
          "-=0.45",
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-backdrop hero-grain relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p
              data-hero-eyebrow
              data-hero-fade
              className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-gold"
            >
              Elderly Wellness &amp; Adult Day Care Lagos
            </p>

            <h1
              data-hero-headline
              className="font-display text-5xl font-medium leading-[1.08] text-charcoal sm:text-6xl lg:text-7xl"
            >
              <span className="block">Exceptional Care.</span>
              <span className="block italic text-gold">Dignified Living.</span>
            </h1>

            <div
              data-hero-line
              className="my-8 h-px w-24 origin-left bg-gold"
              aria-hidden
            />

            <p
              data-hero-subtext
              data-hero-fade
              className="max-w-xl text-base font-light leading-relaxed text-ink sm:text-lg"
            >
              A sanctuary of comfort and professional wellness for your loved
              ones in Lagos where every day is met with warmth, expertise, and
              the dignity they deserve.
            </p>

            <div
              data-hero-cta
              data-hero-fade
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-charcoal px-9 py-4 text-sm font-medium uppercase tracking-[0.2em] text-cream shadow-[0_12px_32px_rgba(44,44,44,0.22)] transition-all duration-300 hover:bg-gold hover:shadow-[0_12px_32px_rgba(184,151,106,0.35)]"
              >
                Book a Visit
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-wide text-charcoal underline decoration-gold/60 underline-offset-8 transition-colors hover:text-gold sm:justify-start"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          {/* Hero photograph with offset gold frame */}
          <div
            data-hero-image
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute -right-4 -top-4 h-full w-full border border-gold/50 sm:-right-6 sm:-top-6"
            />
            <img
              src="/images/hero-couple.jpg"
              alt="An elderly couple walking together through a sunlit garden"
              className="relative h-[26rem] w-full object-cover shadow-[0_24px_64px_rgba(44,44,44,0.18)] sm:h-[30rem] lg:h-[34rem]"
              loading="eager"
            />
            <div
              data-hero-badge
              className="absolute -bottom-6 -left-2 bg-cream px-6 py-4 shadow-[0_12px_36px_rgba(44,44,44,0.14)] sm:-left-6"
            >
              <p className="font-display text-3xl font-semibold text-charcoal">
                12+
              </p>
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ink/60">
                Years of devoted care
              </p>
            </div>
          </div>
        </div>

        <ul
          data-hero-trust
          data-hero-fade
          className="mt-20 flex flex-col gap-3 border-t border-charcoal/10 pt-8 sm:flex-row sm:gap-10"
        >
          {TRUST_MARKERS.map((marker) => (
            <li
              key={marker}
              className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-ink/70"
            >
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
              {marker}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
