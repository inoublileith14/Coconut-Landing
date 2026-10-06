import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const title = 'Coconut Luxury Flats | Barcelona Real Estate & Relocation'
const description =
  'Coconut Luxury Flats helps clients find exceptional homes in Barcelona through personalized property search, sales, rentals and relocation services.'

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'Coconut Luxury Flats',
  manifest: '/manifest.json',
  keywords: [
    'Barcelona real estate',
    'pisos en venta Barcelona',
    'pisos en alquiler Barcelona',
    'relocation Barcelona',
    'luxury flats Barcelona',
    'Eixample',
    'Sant Gervasi',
    'Sarrià',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'es_ES',
    siteName: 'Coconut Luxury Flats',
    images: [
      {
        url: '/images/hero.webp',
        width: 1408,
        height: 768,
        alt: 'Sunlit Barcelona Eixample apartment with high ceilings and modernista mouldings',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/hero.webp'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#f5f1ea',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
