'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { LINKS, NAV_ITEMS } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const content = document.querySelectorAll<HTMLElement>('[data-page-content]')
    if (!open) {
      content.forEach((el) => el.removeAttribute('inert'))
      document.body.style.overflow = ''
      return
    }
    content.forEach((el) => el.setAttribute('inert', ''))
    document.body.style.overflow = 'hidden'

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const solid = scrolled && !open
  const light = !solid

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-700 ease-out',
        solid
          ? 'border-b border-ink/10 bg-ivory/95 py-3 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent py-5 md:py-7',
      )}
    >
      <nav aria-label="Principal" className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href="#top" aria-label="Coconut Luxury Flats, inicio" className="relative z-10 -my-2 py-2">
          <Logo tone={light ? 'light' : 'dark'} />
        </a>

        <ul className="hidden items-center gap-12 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  'relative py-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.26em] transition-colors duration-500',
                  'after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100',
                  light ? 'text-ivory' : 'text-ink',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <p
          className={cn(
            'hidden font-sans text-[0.7rem] font-medium uppercase tracking-[0.26em] transition-colors duration-500 lg:block',
            light ? 'text-ivory/80' : 'text-muted-foreground',
          )}
        >
          Barcelona
        </p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={cn(
            'relative z-10 -mr-3 flex size-12 items-center justify-center lg:hidden',
            light ? 'text-ivory' : 'text-ink',
          )}
        >
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          <span aria-hidden="true" className="relative block h-3 w-7">
            <span
              className={cn(
                'absolute left-0 top-0 h-px w-7 bg-current transition-transform duration-500',
                open && 'translate-y-1.5 rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute bottom-0 right-0 h-px bg-current transition-all duration-500',
                open ? 'w-7 -translate-y-1.5 -rotate-45' : 'w-5',
              )}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 flex flex-col bg-ink px-5 pb-10 pt-28 text-ivory lg:hidden"
      >
        <ul className="flex flex-col border-t border-ivory/15">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.href} className="border-b border-ivory/15">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-16 items-baseline justify-between py-4 font-serif text-4xl font-light"
              >
                {item.label}
                <span className="font-sans text-[0.7rem] tracking-[0.2em] text-ivory/50">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3">
          <a
            href={LINKS.sale}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-between bg-ivory px-6 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-ink"
          >
            Pisos en venta
            <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
          </a>
          <a
            href={LINKS.rent}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-between border border-ivory/60 px-6 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.22em]"
          >
            Pisos en alquiler
            <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </header>
  )
}
