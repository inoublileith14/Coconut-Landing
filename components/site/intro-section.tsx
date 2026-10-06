import { Eyebrow } from './typography'
import { Reveal } from './reveal'

export function IntroSection() {
  return (
    <section aria-labelledby="intro-title" className="bg-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-28 md:px-10 md:py-40 lg:grid-cols-12 lg:py-52">
        <Reveal className="lg:col-span-3">
          <Eyebrow index="01">Coconut Luxury Flats</Eyebrow>
        </Reveal>
        <div className="lg:col-span-9">
          <Reveal>
            <h2
              id="intro-title"
              className="font-serif text-[2.9rem] font-light leading-[1] tracking-[-0.01em] text-balance sm:text-6xl lg:text-[5.75rem]"
            >
              Barcelona, <em className="italic text-clay">selected</em> for you.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-10 max-w-xl text-pretty font-sans text-lg leading-relaxed text-muted-foreground md:mt-14 md:text-xl">
              We help clients discover exceptional homes across Barcelona through personalized property search,
              relocation and real-estate services.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
