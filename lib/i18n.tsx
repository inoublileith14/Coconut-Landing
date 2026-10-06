'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Language = 'es' | 'en' | 'fr' | 'ca'

const translations = {
  es: {
    language: 'Idioma',
    navLabel: 'Navegación principal',
    nav: ['Venta', 'Alquiler', 'Relocation', 'Nosotros'],
    region: 'Barcelona · Madrid',
    heroKicker: 'Barcelona & Madrid · Real Estate & Relocation',
    heroTitle: 'Encuentra tu lugar',
    heroAccent: 'en Barcelona y Madrid.',
    heroCopy: 'Viviendas excepcionales, búsqueda inmobiliaria personalizada y servicios de relocation en las dos grandes capitales de España.',
    sale: 'Pisos en venta',
    rent: 'Pisos en alquiler',
    explore: 'Descubrir propiedades',
  },
  en: {
    language: 'Language',
    navLabel: 'Main navigation',
    nav: ['For sale', 'For rent', 'Relocation', 'About us'],
    region: 'Barcelona · Madrid',
    heroKicker: 'Barcelona & Madrid · Real Estate & Relocation',
    heroTitle: 'Find your place',
    heroAccent: 'in Barcelona and Madrid.',
    heroCopy: 'Exceptional homes, tailored property search and relocation services across Spain’s two great capitals.',
    sale: 'Homes for sale',
    rent: 'Homes for rent',
    explore: 'Explore properties',
  },
  fr: {
    language: 'Langue',
    navLabel: 'Navigation principale',
    nav: ['À vendre', 'À louer', 'Relocation', 'À propos'],
    region: 'Barcelone · Madrid',
    heroKicker: 'Barcelone & Madrid · Immobilier & Relocation',
    heroTitle: 'Trouvez votre lieu',
    heroAccent: 'à Barcelone et Madrid.',
    heroCopy: 'Des adresses d’exception, une recherche personnalisée et un accompagnement de relocation dans les deux grandes capitales espagnoles.',
    sale: 'Biens à vendre',
    rent: 'Biens à louer',
    explore: 'Découvrir les biens',
  },
  ca: {
    language: 'Idioma',
    navLabel: 'Navegació principal',
    nav: ['Venda', 'Lloguer', 'Relocation', 'Nosaltres'],
    region: 'Barcelona · Madrid',
    heroKicker: 'Barcelona & Madrid · Immobiliària i Relocation',
    heroTitle: 'Troba el teu lloc',
    heroAccent: 'a Barcelona i Madrid.',
    heroCopy: 'Habitatges excepcionals, cerca immobiliària personalitzada i serveis de relocation a les dues grans capitals d’Espanya.',
    sale: 'Habitatges en venda',
    rent: 'Habitatges de lloguer',
    explore: 'Descobreix propietats',
  },
} as const

type I18nContextValue = { language: Language; setLanguage: (language: Language) => void; t: (typeof translations)[Language] }
const I18nContext = createContext<I18nContextValue | null>(null)

const pageCopy: Record<string, Partial<Record<Language, string>>> = {
  'Barcelona,': { es: 'Barcelona,', en: 'Barcelona,', fr: 'Barcelone,', ca: 'Barcelona,' },
  'selected': { es: 'seleccionada', fr: 'sélectionnée', ca: 'seleccionada' },
  'for you.': { es: 'para ti.', fr: 'pour vous.', ca: 'per a tu.' },
  'We help clients discover exceptional homes across Barcelona through personalized property search,': { es: 'Ayudamos a nuestros clientes a descubrir viviendas excepcionales en Barcelona mediante una búsqueda inmobiliaria personalizada,', fr: 'Nous aidons nos clients à découvrir des biens d’exception à Barcelone grâce à une recherche personnalisée,', ca: 'Ajudem els nostres clients a descobrir habitatges excepcionals a Barcelona mitjançant una cerca immobiliària personalitzada,' },
  'relocation and real-estate services.': { es: 'servicios de relocation e inmobiliarios.', fr: 'des services de relocation et immobiliers.', ca: 'serveis de relocation i immobiliaris.' },
  'Discover apartments and homes selected across Barcelona’s most sought-after neighborhoods.': { es: 'Descubre pisos y casas seleccionados en los barrios más buscados de Barcelona.', fr: 'Découvrez des appartements et maisons dans les quartiers les plus recherchés de Barcelone.', ca: 'Descobreix pisos i cases seleccionats als barris més buscats de Barcelona.' },
  'Find your next home in Barcelona, from elegant city apartments to furnished and temporary residences.': { es: 'Encuentra tu próximo hogar en Barcelona, desde elegantes pisos urbanos hasta viviendas amuebladas y temporales.', fr: 'Trouvez votre prochain chez-vous à Barcelone, des appartements élégants aux résidences meublées et temporaires.', ca: 'Troba la teva propera llar a Barcelona, des de pisos elegants fins a habitatges moblats i temporals.' },
  'Search, relocate,': { es: 'Busca, múdate,', fr: 'Recherchez, installez-vous,', ca: 'Cerca, trasllada’t,' },
  'invest.': { es: 'invierte.', fr: 'investissez.', ca: 'inverteix.' },
  'Property Search': { es: 'Búsqueda inmobiliaria', fr: 'Recherche immobilière', ca: 'Cerca immobiliària' },
  'Real Estate Investment': { es: 'Inversión inmobiliaria', fr: 'Investissement immobilier', ca: 'Inversió immobiliària' },
  'Personalized property searches based on each client’s lifestyle, location and requirements.': { es: 'Búsquedas inmobiliarias personalizadas según el estilo de vida, la ubicación y las necesidades de cada cliente.', fr: 'Recherches immobilières personnalisées selon le style de vie, la localisation et les besoins de chaque client.', ca: 'Cerques immobiliàries personalitzades segons l’estil de vida, la ubicació i les necessitats de cada client.' },
  'Support for clients moving to Barcelona and looking for a smooth transition into their new home.': { es: 'Acompañamiento para clientes que se trasladan a Barcelona y buscan una transición sencilla a su nuevo hogar.', fr: 'Accompagnement des clients qui s’installent à Barcelone pour une transition sereine vers leur nouveau foyer.', ca: 'Acompanyament per a clients que es traslladen a Barcelona i busquen una transició fàcil cap a la seva nova llar.' },
  'Opportunities and property solutions for clients looking to invest in Barcelona real estate.': { es: 'Oportunidades y soluciones inmobiliarias para clientes que desean invertir en Barcelona.', fr: 'Opportunités et solutions immobilières pour investir à Barcelone.', ca: 'Oportunitats i solucions immobiliàries per a clients que volen invertir a Barcelona.' },
  'Explore': { es: 'Explorar', fr: 'Explorer', ca: 'Explorar' },
  'Services': { es: 'Servicios', fr: 'Services', ca: 'Serveis' },
  'Live Barcelona': { es: 'Vive Barcelona', fr: 'Vivez Barcelone', ca: 'Viu Barcelona' },
  'differently.': { es: 'de otra manera.', fr: 'autrement.', ca: 'd’una altra manera.' },
}

function translatePage(language: Language) {
  document.querySelectorAll('[data-page-content] *').forEach((element) => {
    if (element.children.length > 0) return
    const original = element.getAttribute('data-i18n-original') ?? element.textContent?.trim()
    if (!original) return
    element.setAttribute('data-i18n-original', original)
    const translated = pageCopy[original]?.[language]
    if (translated) element.textContent = translated
  })
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')
  const value = useMemo(() => ({ language, setLanguage, t: translations[language] }), [language])
  useEffect(() => {
    translatePage(language)
    const observer = new MutationObserver(() => translatePage(language))
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [language])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useLanguage() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ca', label: 'CA' },
]
