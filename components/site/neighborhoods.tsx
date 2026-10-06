'use client'

import Image from 'next/image'
import { useState } from 'react'
import { NEIGHBORHOODS } from '@/lib/site'
import { cn } from '@/lib/utils'
import { SectionHeader } from './typography'
import { Reveal } from './reveal'

export function Neighborhoods() {
  const [active, setActive] = useState(0)

  return (
    <section aria-labelledby="barrios-title" className="bg-sand/60">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <SectionHeader
            id="barrios-title"
            index="05"
            eyebrow="Neighborhoods"
            title={
              <>
                Barrios de <em className="italic text-clay">Barcelona</em>
              </>
            }
          />
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-16">
          <ul className="border-t border-ink/15 lg:col-span-7">
            {NEIGHBORHOODS.map((barrio, i) => (
              <li
                key={barrio.name}
                onMouseEnter={() => setActive(i)}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-ink/15 py-5 md:gap-8 md:py-6"
              >
                <span className="w-7 font-sans text-[0.68rem] font-semibold tracking-[0.2em] text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3
                    className={cn(
                      'font-serif text-[2rem] font-light leading-none transition-colors duration-500 sm:text-4xl lg:text-5xl',
                      active === i ? 'lg:text-clay' : 'lg:text-ink',
                    )}
                  >
                    {barrio.name}
                  </h3>
                  <p className="mt-2 text-pretty font-sans text-sm text-muted-foreground lg:hidden">
                    {barrio.descriptor}
                  </p>
                </div>
                <div className="relative aspect-[3/4] w-16 overflow-hidden sm:w-20 lg:hidden">
                  <Image src={barrio.image} alt={barrio.alt} fill sizes="80px" className="object-cover" />
                </div>
                <span
                  aria-hidden="true"
                  className={cn(
                    'hidden h-px bg-ink/40 transition-all duration-700 lg:block',
                    active === i ? 'w-16 bg-clay' : 'w-6',
                  )}
                />
              </li>
            ))}
          </ul>

          <div aria-hidden="true" className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden bg-beige">
                {NEIGHBORHOODS.map((barrio, i) => (
                  <Image
                    key={barrio.name}
                    src={barrio.image}
                    alt=""
                    fill
                    sizes="(min-width: 1440px) 520px, 36vw"
                    className={cn(
                      'object-cover transition-[opacity,transform] duration-[1200ms] ease-out',
                      active === i ? 'scale-100 opacity-100' : 'scale-[1.06] opacity-0',
                    )}
                  />
                ))}
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-6">
                <p className="font-serif text-2xl italic">{NEIGHBORHOODS[active].name}</p>
                <p className="text-right font-sans text-sm text-muted-foreground">
                  {NEIGHBORHOODS[active].descriptor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
