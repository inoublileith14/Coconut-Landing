import { About } from '@/components/site/about'
import { BarcelonaSection } from '@/components/site/barcelona-section'
import { FinalCta } from '@/components/site/final-cta'
import { Footer } from '@/components/site/footer'
import { Gallery } from '@/components/site/gallery'
import { Hero } from '@/components/site/hero'
import { IntroSection } from '@/components/site/intro-section'
import { Navbar } from '@/components/site/navbar'
import { Neighborhoods } from '@/components/site/neighborhoods'
import { PropertyServices } from '@/components/site/property-services'
import { Services } from '@/components/site/services'

import { LanguageProvider } from '@/lib/i18n'

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main data-page-content>
        <Hero />
        <IntroSection />
        <PropertyServices />
        <BarcelonaSection />
        <Services />
        <Neighborhoods />
        <Gallery />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
