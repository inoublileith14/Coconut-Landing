import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'solid-light' | 'outline-light' | 'solid-dark' | 'outline-dark' | 'text'

const variants: Record<Variant, string> = {
  'solid-light': 'bg-ivory text-ink border border-ivory hover:bg-sand hover:border-sand',
  'outline-light': 'border border-ivory/70 text-ivory hover:bg-ivory hover:text-ink',
  'solid-dark': 'bg-ink text-ivory border border-ink hover:bg-clay hover:border-clay',
  'outline-dark': 'border border-ink/80 text-ink hover:bg-ink hover:text-ivory',
  text: 'text-ink border-b border-ink/30 pb-2 hover:border-clay hover:text-clay',
}

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  variant?: Variant
  external?: boolean
  className?: string
}

export function CtaLink({ href, children, variant = 'solid-dark', external = true, className }: CtaLinkProps) {
  const isButton = variant !== 'text'

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex items-center gap-3 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-500',
        isButton && 'min-h-14 justify-between px-7 py-4',
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={1.5}
      />
      {external && <span className="sr-only">(se abre en una pestaña nueva, Idealista)</span>}
    </a>
  )
}
