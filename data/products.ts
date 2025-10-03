export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  benefits: string[]
  ingredients: string[]
  featured: boolean
}

export const products: Product[] = [
  {
    id: "serum-luminoso",
    name: "Sérum Luminoso Andino",
    description: "Sérum facial con camu camu y extracto de maca que ilumina y revitaliza tu piel",
    price: 89.9,
    category: "Facial",
    image: "/serum-luminoso.jpg",
    benefits: ["Ilumina la piel", "Reduce manchas", "Antioxidante natural"],
    ingredients: ["Camu Camu", "Maca", "Ácido Hialurónico"],
    featured: true,
  },
  {
    id: "crema-hidratante",
    name: "Crema Hidratante de Quinoa",
    description: "Hidratación profunda con proteínas de quinoa y aguaje para una piel suave y nutrida",
    price: 79.9,
    category: "Facial",
    image: "/crema-hidratante.jpg",
    benefits: ["Hidratación 24h", "Nutrición profunda", "Textura sedosa"],
    ingredients: ["Quinoa", "Aguaje", "Manteca de Karité"],
    featured: true,
  },
  {
    id: "mascarilla-lucuma",
    name: "Mascarilla Revitalizante de Lúcuma",
    description: "Mascarilla facial que restaura la vitalidad de tu piel con el poder de la lúcuma",
    price: 69.9,
    category: "Facial",
    image: "/mascarilla-lucuma.jpg",
    benefits: ["Revitaliza", "Suaviza", "Aporta luminosidad"],
    ingredients: ["Lúcuma", "Arcilla Blanca", "Vitamina E"],
    featured: true,
  },
  {
    id: "aceite-corporal",
    name: "Aceite Corporal Nutritivo",
    description: "Aceite corporal con ingredientes andinos que nutre y perfuma tu piel",
    price: 94.9,
    category: "Corporal",
    image: "/aceite-corporal.jpg",
    benefits: ["Nutrición intensa", "Aroma natural", "Piel sedosa"],
    ingredients: ["Aceite de Sacha Inchi", "Aguaje", "Vitamina A"],
    featured: false,
  },
  {
    id: "exfoliante-quinoa",
    name: "Exfoliante Facial de Quinoa",
    description: "Exfoliante suave que renueva tu piel con micropartículas de quinoa",
    price: 59.9,
    category: "Facial",
    image: "/exfoliante-quinoa.jpg",
    benefits: ["Exfoliación suave", "Renueva la piel", "Textura refinada"],
    ingredients: ["Quinoa", "Azúcar de Caña", "Aceite de Jojoba"],
    featured: false,
  },
  {
    id: "contorno-ojos",
    name: "Contorno de Ojos Iluminador",
    description: "Reduce ojeras y líneas de expresión con extractos naturales andinos",
    price: 84.9,
    category: "Facial",
    image: "/contorno-ojos.jpg",
    benefits: ["Reduce ojeras", "Antiedad", "Efecto lifting"],
    ingredients: ["Camu Camu", "Cafeína", "Péptidos"],
    featured: true,
  },
]

export const categories = ["Todos", "Facial", "Corporal"]
