import Image from 'next/image'
import { LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'
import { CtaLink } from './cta-link'
import { Reveal } from './reveal'

const BLOCKS = [
  {
    id: 'venta',
    label: 'A',
    title: 'Pisos en venta',
    copy: 'Discover apartments and homes selected across Barcelona’s most sought-after neighborhoods.',
    cta: 'Ver pisos en venta',
    href: LINKS.sale,
    image: '/images/venta.webp',
    alt: 'Bright dining room in a Barcelona apartment with a coffered ceiling, modernista mosaic floor and oak table',
  },
  {
    id: 'alquiler',
    label: 'B',
    title: 'Pisos en alquiler',
    copy: 'Find your next home in Barcelona, from elegant city apartments to furnished and temporary residences.',
    cta: 'Ver pisos en alquiler',
    href: LINKS.rent,
    image: '/images/alquiler.webp',
    alt: 'Furnished bedroom with a Catalan vaulted brick ceiling, linen bedding and half-open wooden shutters',
  },
] as const

export function PropertyServices() {
  return (
    <section aria-label="Pisos en venta y en alquiler" className="bg-sand/60">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-24 px-5 py-24 md:gap-36 md:px-10 md:py-36">
        {BLOCKS.map((block, i) => {
          const reversed = i % 2 === 1
          return (
            <article
              key={block.id}
              id={block.id}
              aria-labelledby={`${block.id}-title`}
              className="grid scroll-mt-24 items-end gap-10 lg:grid-cols-12 lg:gap-16"
            >
              <Reveal
                variant="image"
                className={cn(
                  'relative aspect-[4/5] overflow-hidden sm:aspect-[5/6] lg:col-span-6',
                  reversed && 'lg:order-2 lg:col-start-7',
                )}
              >
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  sizes="(min-width: 1440px) 680px, (min-width: 1024px) 48vw, 100vw"
                  className="object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.03]"
                />
              </Reveal>

              <div
                className={cn(
                  'lg:col-span-5 lg:pb-6',
                  reversed ? 'lg:order-1 lg:col-start-1 lg:row-start-1' : 'lg:col-start-8',
                )}
              >
                <Reveal>
                  <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-clay">
                    02 — {block.label}
                  </p>
                  <h2
                    id={`${block.id}-title`}
                    className="mt-6 font-serif text-5xl font-light uppercase leading-[0.95] tracking-[0.01em] sm:text-6xl xl:text-7xl"
                  >
                    {block.title}
                  </h2>
                  <p className="mt-8 max-w-md text-pretty font-sans text-lg leading-relaxed text-muted-foreground">
                    {block.copy}
                  </p>
                  <CtaLink href={block.href} variant="text" className="mt-10">
                    {block.cta}
                  </CtaLink>
                </Reveal>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
