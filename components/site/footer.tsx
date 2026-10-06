import { LINKS, NAV_ITEMS } from '@/lib/site'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer data-page-content className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-8 max-w-xs font-sans text-sm leading-relaxed text-ivory/60">
              Real estate &amp; relocation in Barcelona.
            </p>
          </div>

          <nav aria-label="Pie de página" className="grid grid-cols-2 gap-10 md:col-span-7">
            <div>
              <h2 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-ivory/50">
                Explorar
              </h2>
              <ul className="mt-6 flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex min-h-11 items-center font-serif text-xl transition-colors hover:text-beige"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-ivory/50">
                Idealista
              </h2>
              <ul className="mt-6 flex flex-col">
                <li>
                  <a
                    href={LINKS.sale}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center font-serif text-xl transition-colors hover:text-beige"
                  >
                    Pisos en venta
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.rent}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center font-serif text-xl transition-colors hover:text-beige"
                  >
                    Pisos en alquiler
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-ivory/15 pt-8 font-sans text-[0.7rem] uppercase tracking-[0.24em] text-ivory/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Coconut Luxury Flats</p>
          <p>Barcelona, España</p>
        </div>
      </div>
    </footer>
  )
}
