import { SectionHeader } from './typography'
import { Reveal } from './reveal'

const SERVICES = [
  {
    title: 'Property Search',
    copy: 'Personalized property searches based on each client’s lifestyle, location and requirements.',
  },
  {
    title: 'Relocation',
    copy: 'Support for clients moving to Barcelona and looking for a smooth transition into their new home.',
  },
  {
    title: 'Real Estate Investment',
    copy: 'Opportunities and property solutions for clients looking to invest in Barcelona real estate.',
  },
] as const

export function Services() {
  return (
    <section id="relocation" aria-labelledby="services-title" className="scroll-mt-20 bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <SectionHeader
            id="services-title"
            index="04"
            eyebrow="Services"
            title={
              <>
                Search, relocate, <em className="italic text-clay">invest.</em>
              </>
            }
          />
        </Reveal>

        <ol className="mt-16 grid border-t border-ink/15 md:mt-24 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              delay={i * 120}
              className="group border-b border-ink/15 py-10 md:border-b-0 md:py-12 md:pr-10 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-10"
            >
              <span className="font-sans text-[0.7rem] font-semibold tracking-[0.3em] text-clay">0{i + 1}</span>
              <h3 className="mt-6 font-serif text-3xl font-normal uppercase tracking-[0.04em] lg:text-4xl">
                {service.title}
              </h3>
              <span
                aria-hidden="true"
                className="mt-6 block h-px w-10 bg-ink/40 transition-all duration-700 group-hover:w-20 group-hover:bg-clay"
              />
              <p className="mt-6 max-w-sm text-pretty font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.copy}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
