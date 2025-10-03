export interface Ingredient {
  id: string
  name: string
  color: string
  description: string
  benefits: string[]
  origin: string
}

export const ingredients: Ingredient[] = [
  {
    id: "camu-camu",
    name: "Camu Camu",
    color: "oklch(0.75 0.19 35)",
    description: "Superalimento de la Amazonía, rico en vitamina C",
    benefits: ["Ilumina la piel", "Antioxidante potente", "Estimula colágeno"],
    origin: "Amazonía Peruana",
  },
  {
    id: "maca",
    name: "Maca",
    color: "oklch(0.72 0.15 120)",
    description: "Raíz andina energizante y revitalizante",
    benefits: ["Revitaliza", "Equilibra", "Energiza"],
    origin: "Andes de Junín",
  },
  {
    id: "quinoa",
    name: "Quinoa",
    color: "oklch(0.78 0.12 80)",
    description: "Grano sagrado de los Incas, rico en proteínas",
    benefits: ["Protege", "Nutre", "Fortalece"],
    origin: "Altiplano Andino",
  },
  {
    id: "lucuma",
    name: "Lúcuma",
    color: "oklch(0.82 0.15 60)",
    description: "Oro de los Incas, dulce y nutritivo",
    benefits: ["Hidrata", "Suaviza", "Regenera"],
    origin: "Valles Interandinos",
  },
  {
    id: "aguaje",
    name: "Aguaje",
    color: "oklch(0.68 0.18 25)",
    description: "Fruto amazónico rico en vitamina A",
    benefits: ["Rejuvenece", "Hidrata profundamente", "Protege del sol"],
    origin: "Selva de Loreto",
  },
]
