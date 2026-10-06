'use client'

import { createContext, useContext, useMemo, useState } from 'react'

export type Language = 'es' | 'en' | 'fr' | 'ca'

const translations = {
  es: {
    language: 'Idioma',
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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')
  const value = useMemo(() => ({ language, setLanguage, t: translations[language] }), [language])
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
