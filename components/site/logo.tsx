import { cn } from '@/lib/utils'

type LogoProps = {
  tone?: 'light' | 'dark'
  className?: string
}

export function Logo({ tone = 'dark', className }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex flex-col items-start leading-none transition-colors duration-500',
        tone === 'light' ? 'text-ivory' : 'text-ink',
        className,
      )}
    >
      <span className="coconut-spectrum-text font-serif text-[1.65rem] font-medium tracking-[0.18em] md:text-[1.85rem]">COCONUT</span>
      <span className="mt-1 pl-[0.1em] font-sans text-[0.58rem] font-medium tracking-[0.42em] md:text-[0.62rem]">
        LUXURY FLATS
      </span>
    </span>
  )
}
