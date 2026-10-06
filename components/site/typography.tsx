import { cn } from '@/lib/utils'

type EyebrowProps = {
  children: React.ReactNode
  className?: string
  index?: string
}

export function Eyebrow({ children, className, index }: EyebrowProps) {
  return (
    <p
      className={cn(
        'flex items-center gap-4 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground',
        className,
      )}
    >
      {index && <span className="text-clay">{index}</span>}
      {index && <span aria-hidden="true" className="h-px w-8 bg-current opacity-40" />}
      <span>{children}</span>
    </p>
  )
}

type DisplayProps = {
  as?: 'h1' | 'h2' | 'h3'
  children: React.ReactNode
  className?: string
  id?: string
}

export function Display({ as: Tag = 'h2', children, className, id }: DisplayProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'font-serif font-light leading-[0.98] tracking-[-0.01em] text-balance',
        'text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem]',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

type SectionHeaderProps = {
  eyebrow: string
  index?: string
  title: React.ReactNode
  id: string
  className?: string
  children?: React.ReactNode
}

export function SectionHeader({ eyebrow, index, title, id, className, children }: SectionHeaderProps) {
  return (
    <header className={cn('flex flex-col gap-8', className)}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <Display id={id}>{title}</Display>
      {children}
    </header>
  )
}
