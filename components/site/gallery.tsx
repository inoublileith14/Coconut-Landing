import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Eyebrow } from './typography'
import { Reveal } from './reveal'

const ITEMS = [
  {
    src: '/images/gallery-1.webp',
    alt: 'Wrought-iron balcony with open wooden shutters, bougainvillea and a view across Eixample facades',
    caption: 'Balcony, Eixample',
    frame: 'col-span-1 aspect-[3/4] lg:col-span-4 lg:aspect-[4/5]',
    sizes: '(min-width: 1024px) 32vw, 50vw',
  },
  {
    src: '/images/gallery-2.webp',
    alt: 'Renovated kitchen with a travertine island, oak cabinetry and hydraulic patterned floor tiles',
    caption: 'Kitchen, Sant Gervasi',
    frame: 'col-span-2 aspect-[16/10] lg:col-span-8 lg:mt-24 lg:aspect-auto',
    sizes: '(min-width: 1024px) 64vw, 100vw',
  },
  {
    src: '/images/gallery-3.webp',
    alt: 'Ornate plaster ceiling rosette and carved wooden door with stained glass',
    caption: 'Modernista detail',
    frame: 'col-span-1 aspect-[3/4] lg:col-span-3 lg:col-start-2',
    sizes: '(min-width: 1024px) 24vw, 50vw',
  },
  {
    src: '/images/gallery-4.webp',
    alt: 'Bright penthouse living room opening onto a large terrace with views of the Mediterranean and rooftops',
    caption: 'Penthouse terrace',
    frame: 'col-span-2 aspect-[16/10] lg:col-span-5 lg:mt-32 lg:aspect-[4/3]',
    sizes: '(min-width: 1024px) 40vw, 100vw',
  },
  {
    src: '/images/gallery-5.webp',
    alt: 'Serene bathroom with a stone basin, terracotta zellige tiles and an arched window',
    caption: 'Bath, Born',
    frame: 'col-span-1 aspect-[3/4] lg:col-span-3 lg:-mt-16',
    sizes: '(min-width: 1024px) 24vw, 50vw',
  },
] as const

export function Gallery() {
  return (
    <section aria-labelledby="gallery-title" className="overflow-hidden bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow index="06">Interiors</Eyebrow>
            <h2
              id="gallery-title"
              className="mt-8 font-serif text-[2.75rem] font-light leading-[0.98] text-balance sm:text-6xl lg:text-7xl"
            >
              Light, stone <em className="italic text-clay">&amp; detail.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-pretty font-sans text-base leading-relaxed text-muted-foreground">
              Homes with character: original mouldings, hydraulic tiles, high ceilings and Mediterranean light.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-5 md:mt-24 lg:grid-cols-12 lg:gap-6">
          {ITEMS.map((item, i) => (
            <Reveal as="figure" key={item.src} variant="image" delay={i * 80} className={cn('group', item.frame)}>
              <div className="relative h-full w-full overflow-hidden bg-beige">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={item.sizes}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
