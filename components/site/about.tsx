import { Eyebrow } from './typography'
import { Reveal } from './reveal'

const PILLARS = ['Personalized search', 'Local knowledge', 'Relocation support', 'Investment guidance'] as const

export function About() {
  return (
    <section id="nosotros" aria-labelledby="about-title" className="scroll-mt-20 bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 md:px-10 md:py-40 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <Eyebrow index="07" className="text-ivory/70">
            About Coconut
          </Eyebrow>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal>
            <h2
              id="about-title"
              className="font-serif text-[2.2rem] font-light leading-[1.08] text-balance sm:text-5xl lg:text-6xl"
            >
              Coconut Luxury Flats is a Barcelona-based real estate company focused on{' '}
              <em className="italic text-beige">personalized property search</em>, sales, rentals and relocation
              services.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-10 max-w-xl text-pretty font-sans text-lg leading-relaxed text-ivory/75">
              We work closely with each client to understand their needs and help them find the right home in
              Barcelona.
            </p>
          </Reveal>

          <ul className="mt-16 grid grid-cols-2 border-t border-ivory/15 md:grid-cols-4">
            {PILLARS.map((pillar, i) => (
              <Reveal
                as="li"
                key={pillar}
                delay={200 + i * 80}
                className="border-b border-ivory/15 py-6 pr-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ivory/80 md:border-b-0"
              >
                <span className="mb-3 block text-clay">0{i + 1}</span>
                {pillar}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
