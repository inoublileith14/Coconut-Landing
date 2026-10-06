'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'
import { LINKS } from '@/lib/site'
import { CtaLink } from './cta-link'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-ink text-ivory"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Sunlit Barcelona apartment with high moulded ceilings, mosaic floors, linen sofa and open shutters onto an Eixample balcony"
          fill
          preload
          sizes="100vw"
          quality={80}
          className="animate-hero-zoom object-cover object-[30%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.19_0.008_55/0.55)_0%,oklch(0.19_0.008_55/0.15)_35%,oklch(0.19_0.008_55/0.35)_60%,oklch(0.19_0.008_55/0.82)_100%)]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-10 pt-40 md:px-10 md:pb-16">
        <div className="max-w-4xl">
          <p
            className="animate-rise font-sans text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-ivory/85 md:text-[0.72rem]"
            style={{ animationDelay: '200ms' }}
          >
            {t.heroKicker}
          </p>

          <h1
            id="hero-title"
            className="animate-rise mt-6 font-serif text-[3.4rem] font-light leading-[0.95] tracking-[-0.015em] text-balance sm:text-7xl lg:text-8xl xl:text-[8.5rem]"
            style={{ animationDelay: '400ms' }}
          >
            {t.heroTitle} <em className="font-light italic">{t.heroAccent}</em>
          </h1>

          <p
            className="animate-rise mt-7 max-w-md text-pretty font-sans text-base leading-relaxed text-ivory/85 md:text-lg"
            style={{ animationDelay: '650ms' }}
          >
            {t.heroCopy}
          </p>

          <div
            className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: '850ms' }}
          >
            <CtaLink href={LINKS.sale} variant="solid-light" className="sm:min-w-64">
              {t.sale}
            </CtaLink>
            <CtaLink href={LINKS.rent} variant="outline-light" className="backdrop-blur-[2px] sm:min-w-64">
              {t.rent}
            </CtaLink>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="animate-rise mt-14 hidden items-center justify-between border-t border-ivory/20 pt-5 font-sans text-[0.68rem] uppercase tracking-[0.3em] text-ivory/60 md:flex"
          style={{ animationDelay: '1100ms' }}
        >
          <span>Coconut Luxury Flats</span>
          <span>Eixample · Sant Gervasi · Sarrià · Poblenou</span>
          <span>41.3874° N, 2.1686° E</span>
        </div>
      </div>
    </section>
  )
}
