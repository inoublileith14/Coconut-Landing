import { LINKS } from '@/lib/site'
import { CtaLink } from './cta-link'
import { Eyebrow } from './typography'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-ivory">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 py-28 text-center md:px-10 md:py-44">
        <Reveal className="flex flex-col items-center">
          <Eyebrow>Your next chapter</Eyebrow>
          <h2
            id="cta-title"
            className="mt-10 max-w-5xl font-serif text-[3rem] font-light leading-[0.98] tracking-[-0.01em] text-balance sm:text-7xl lg:text-8xl"
          >
            Start your search <em className="italic text-clay">in Barcelona.</em>
          </h2>
        </Reveal>
        <Reveal delay={150} className="mt-14 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <CtaLink href={LINKS.sale} variant="solid-dark" className="sm:min-w-72">
            Ver pisos en venta
          </CtaLink>
          <CtaLink href={LINKS.rent} variant="outline-dark" className="sm:min-w-72">
            Ver pisos en alquiler
          </CtaLink>
        </Reveal>
      </div>
    </section>
  )
}
