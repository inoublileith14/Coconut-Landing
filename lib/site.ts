export const LINKS = {
  sale: 'https://www.idealista.com/pro/coconut-luxury-flats/venta-viviendas/barcelona-barcelona/?ordenado-por=precios-desc',
  rent: 'https://www.idealista.com/pro/coconut-luxury-flats/alquiler-viviendas/barcelona-barcelona/?ordenado-por=precios-desc',
} as const

export const NAV_ITEMS = [
  { label: 'Venta', href: '#venta' },
  { label: 'Alquiler', href: '#alquiler' },
  { label: 'Relocation', href: '#relocation' },
  { label: 'Nosotros', href: '#nosotros' },
] as const

export type Neighborhood = {
  name: string
  descriptor: string
  image: string
  alt: string
}

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    name: 'Eixample',
    descriptor: 'Modernista avenues and grand chamfered corners',
    image: '/images/barrios/eixample.webp',
    alt: 'Chamfered Eixample street corner with ornate modernista facades',
  },
  {
    name: 'Gràcia',
    descriptor: 'Village squares with a creative pulse',
    image: '/images/barrios/gracia.webp',
    alt: 'Small plaza in Gràcia with low buildings, balconies and café tables',
  },
  {
    name: 'Sant Gervasi',
    descriptor: 'Elegant, residential and quietly refined',
    image: '/images/barrios/sant-gervasi.webp',
    alt: 'Residential street in Sant Gervasi with stone buildings and terraces',
  },
  {
    name: 'Sarrià',
    descriptor: 'A historic village at the foot of the hills',
    image: '/images/barrios/sarria.webp',
    alt: 'Pedestrian street in old Sarrià with traditional houses and a bell tower',
  },
  {
    name: 'La Bonanova',
    descriptor: 'Gardens, villas and uptown calm',
    image: '/images/barrios/bonanova.webp',
    alt: 'Stone villa with palm trees and a wrought-iron gate in La Bonanova',
  },
  {
    name: 'Poblenou',
    descriptor: 'Industrial lofts close to the sea',
    image: '/images/barrios/poblenou.webp',
    alt: 'Converted brick industrial building beside a tree-lined rambla in Poblenou',
  },
  {
    name: 'El Born',
    descriptor: 'Medieval lanes, galleries and ateliers',
    image: '/images/barrios/born.webp',
    alt: 'Medieval stone street in El Born with a Gothic church in the background',
  },
  {
    name: 'El Gòtic',
    descriptor: 'The city’s oldest stones and courtyards',
    image: '/images/barrios/gotic.webp',
    alt: 'Narrow Gothic Quarter alley with a carved stone arch bridge at dusk',
  },
  {
    name: 'El Putxet',
    descriptor: 'Leafy hillside living with views',
    image: '/images/barrios/putxet.webp',
    alt: 'Leafy hillside street in El Putxet with terraced apartment buildings',
  },
  {
    name: 'El Guinardó',
    descriptor: 'Green slopes overlooking the city',
    image: '/images/barrios/guinardo.webp',
    alt: 'Mediterranean garden in El Guinardó overlooking Barcelona rooftops at golden hour',
  },
  {
    name: 'Poble Sec',
    descriptor: 'Stepped streets beneath Montjuïc',
    image: '/images/barrios/poble-sec.webp',
    alt: 'Sloping street with stairs leading up toward Montjuïc in Poble Sec',
  },
  {
    name: 'El Raval',
    descriptor: 'Culture-rich and endlessly cosmopolitan',
    image: '/images/barrios/raval.webp',
    alt: 'Historic El Raval street with tall buildings and balconies',
  },
]
