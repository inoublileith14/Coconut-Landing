import Image from 'next/image'
import { Eyebrow } from './typography'
import { Reveal } from './reveal'

export function BarcelonaSection() {
  return (
    <section aria-labelledby="barcelona-title" className="relative overflow-hidden bg-charcoal text-ivory">
      <div className="relative h-[78svh] min-h-[520px] w-full md:h-[92svh]">
        <Image
          src="/images/barcelona.webp"
          alt="Barcelona rooftops and modernista architecture glowing in warm Mediterranean evening light"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.255_0.008_60/0.1)_0%,oklch(0.255_0.008_60/0.2)_50%,oklch(0.255_0.008_60/0.92)_100%)]"
        />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-5 pb-12 md:px-10 md:pb-20">
          <Reveal>
            <Eyebrow index="03" className="text-ivory/75">
              Barcelona
            </Eyebrow>
            <h2
              id="barcelona-title"
              className="mt-8 max-w-5xl font-serif text-[3.2rem] font-light leading-[0.95] tracking-[-0.015em] text-balance sm:text-7xl lg:text-8xl xl:text-[8rem]"
            >
              Live Barcelona <em className="italic">differently.</em>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-24 pt-4 md:px-10 md:pb-36 lg:grid-cols-12">
        <Reveal className="lg:col-span-6 lg:col-start-7">
          <p className="text-pretty font-serif text-2xl font-light leading-snug text-ivory/90 md:text-3xl">
            From Eixample and Gràcia to Sarrià, Sant Gervasi, Poblenou and the city’s historic center, we help
            clients find the right place to live, invest and settle in Barcelona.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
