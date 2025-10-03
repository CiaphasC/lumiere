import { Sparkles, Droplets, Shield, Zap } from "lucide-react"

export interface Benefit {
  id: string
  title: string
  description: string
  icon: any
  color: string
  gradient: string
}

export const benefits: Benefit[] = [
  {
    id: "illuminate",
    title: "Ilumina tu piel",
    description:
      "La combinación de camu camu y lúcuma aporta luminosidad natural y un brillo radiante que realza tu belleza interior.",
    icon: Sparkles,
    color: "oklch(0.55 0.22 320)",
    gradient: "from-fuchsia-500 via-purple-500 to-pink-400",
  },
  {
    id: "hydrate",
    title: "Hidrata intensamente",
    description:
      "Hidratación profunda gracias al extracto de aguaje y lúcuma que penetra en las capas más profundas de tu piel.",
    icon: Droplets,
    color: "oklch(0.65 0.18 280)",
    gradient: "from-blue-500 via-cyan-500 to-teal-400",
  },
  {
    id: "protect",
    title: "Protege y revitaliza",
    description:
      "Los antioxidantes de quinoa y maca combaten los radicales libres y protegen tu piel del envejecimiento prematuro.",
    icon: Shield,
    color: "oklch(0.72 0.15 160)",
    gradient: "from-green-500 via-emerald-500 to-teal-400",
  },
  {
    id: "energize",
    title: "Energiza y relaja",
    description:
      "La maca revitaliza tu piel mientras los aceites esenciales andinos proporcionan una sensación de calma y bienestar.",
    icon: Zap,
    color: "oklch(0.68 0.19 35)",
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
  },
]
