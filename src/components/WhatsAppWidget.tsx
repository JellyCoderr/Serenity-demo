import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const WHATSAPP_URL = 'https://wa.me/2348000000000'

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  // Invite the visitor to chat shortly after the page settles
  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 2000)
    return () => window.clearTimeout(timer)
  }, [])

  useLayoutEffect(() => {
    if (!open || !popupRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from(popupRef.current, {
        y: 24,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: 'power3.out',
        transformOrigin: 'bottom right',
      })
    })
    return () => ctx.revert()
  }, [open])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 sm:bottom-8 sm:right-8">
      {open && (
        <div
          ref={popupRef}
          role="dialog"
          aria-label="Chat with Serenity Care Lagos on WhatsApp"
          className="w-72 overflow-hidden bg-white shadow-[0_20px_60px_rgba(44,44,44,0.25)]"
        >
          <div className="flex items-center gap-3 bg-charcoal px-5 py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display text-lg font-semibold italic text-white">
              S
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-cream">Serenity Care Lagos</p>
              <p className="flex items-center gap-1.5 text-[0.65rem] text-cream/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" aria-hidden />
                Typically replies within minutes
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat popup"
              className="-mr-1 p-1 text-cream/60 transition-colors hover:text-cream"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M4.3 4.3a1 1 0 0 1 1.4 0L10 8.6l4.3-4.3a1 1 0 1 1 1.4 1.4L11.4 10l4.3 4.3a1 1 0 0 1-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 0 1-1.4-1.4L8.6 10 4.3 5.7a1 1 0 0 1 0-1.4z" />
              </svg>
            </button>
          </div>
          <div className="bg-cream/60 px-5 py-5">
            <div className="max-w-[15rem] bg-white px-4 py-3 text-sm font-light leading-relaxed text-ink shadow-sm">
              Hello! 👋 Welcome to Serenity Care Lagos. How can we help you care
              for your loved one today?
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-[#25d366] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1fb858]"
            >
              Start Chat
              <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Hide WhatsApp chat popup' : 'Chat with us on WhatsApp'}
        className="animate-whatsapp-pulse flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.59-1.67a12.74 12.74 0 0 0 6.21 1.61h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.72 12.72 0 0 0-9.05-3.69zm0 23.39h-.01c-1.97 0-3.9-.53-5.59-1.53l-.4-.24-3.91.99 1.04-3.81-.26-.42a10.59 10.59 0 0 1-1.62-5.58c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.12 7.54c0 5.87-4.78 10.58-10.56 10.58zm5.84-7.93c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.67.77.25 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z" />
        </svg>
      </button>
    </div>
  )
}
