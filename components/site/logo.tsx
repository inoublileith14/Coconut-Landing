import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoProps = {
  tone?: 'light' | 'dark'
  className?: string
}

export function Logo({ tone = 'dark', className }: LogoProps) {
  return (
    <span className={cn('relative block h-14 w-44 overflow-hidden bg-black md:h-16 md:w-52', className)}>
      <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-04%20at%2018.28.31-JcIj3LK3M5f0sEihbUb70limNGRUkD.jpeg" alt="Coconut Luxury Flats" fill sizes="208px" className="object-contain" priority />
    </span>
  )
}
