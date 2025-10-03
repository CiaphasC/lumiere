export interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  image: string
  readTime: string
}

export const articles: Article[] = [
  {
    id: "1",
    title: "El poder del Camu Camu para tu piel",
    excerpt:
      "Descubre cómo este superalimento amazónico puede transformar tu rutina de belleza con su alto contenido de vitamina C.",
    category: "makeup",
    image: "/camu-camu-fruit-cosmetics.jpg",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Rituales de belleza ancestrales",
    excerpt:
      "Conoce los secretos de belleza que las mujeres andinas han usado durante siglos para mantener su piel radiante.",
    category: "rituals",
    image: "/andean-woman-traditional-beauty.jpg",
    readTime: "7 min",
  },
  {
    id: "3",
    title: "Maquillaje para piel morena",
    excerpt:
      "Tips y técnicas para realzar la belleza natural de la piel morena con productos que celebran tu tono único.",
    category: "makeup",
    image: "/latina-makeup-tutorial.jpg",
    readTime: "6 min",
  },
  {
    id: "4",
    title: "Mascarillas caseras con ingredientes andinos",
    excerpt: "Recetas fáciles y efectivas usando quinoa, maca y lúcuma para nutrir tu piel desde casa.",
    category: "skincare",
    image: "/natural-face-mask-ingredients.jpg",
    readTime: "8 min",
  },
  {
    id: "5",
    title: "Rutina de cuidado facial nocturno",
    excerpt: "Una guía completa para aprovechar las horas de sueño y despertar con una piel renovada y luminosa.",
    category: "skincare",
    image: "/night-skincare-routine.jpg",
    readTime: "5 min",
  },
  {
    id: "6",
    title: "Protección solar natural",
    excerpt: "Cómo los ingredientes andinos pueden ayudar a proteger tu piel del sol de manera natural y efectiva.",
    category: "skincare",
    image: "/natural-sun-protection.jpg",
    readTime: "6 min",
  },
]

export const categories = [
  { id: "all", name: "Todos" },
  { id: "makeup", name: "Maquillaje" },
  { id: "skincare", name: "Cuidado facial" },
  { id: "rituals", name: "Rituales andinos" },
  { id: "lifestyle", name: "Estilo de vida" },
]
