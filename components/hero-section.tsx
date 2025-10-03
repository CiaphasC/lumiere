"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SpotlightLayer } from "./spotlight-layer"
import { AuroraLayer } from "./aurora-layer"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface HeroSectionProps {
  onCTAClick: () => void
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  const [spotlightEnabled, setSpotlightEnabled] = useState(true)

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <AuroraLayer />
        <SpotlightLayer enabled={spotlightEnabled} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-orange-400 bg-clip-text text-6xl font-bold leading-tight text-transparent md:text-8xl">
            LUMIÈRE
          </h1>

          <p className="mx-auto max-w-2xl text-balance text-xl leading-relaxed text-gray-200 md:text-2xl">
            Cosmética profesional que fusiona ingredientes andinos ancestrales con tecnología científica avanzada
          </p>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Button
              onClick={onCTAClick}
              size="lg"
              className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-orange-400 px-8 text-lg text-white shadow-lg shadow-fuchsia-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/60"
            >
              Descubre tu fórmula
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-zinc-700 bg-zinc-900/50 px-8 text-lg text-white backdrop-blur-sm transition-all hover:bg-zinc-800/50"
            >
              Ver colección
            </Button>
          </div>

          {/* Spotlight control */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center justify-center gap-3 pt-8"
          >
            <Switch id="spotlight" checked={spotlightEnabled} onCheckedChange={setSpotlightEnabled} />
            <Label htmlFor="spotlight" className="cursor-pointer text-sm text-gray-400">
              Efecto de luz interactivo
            </Label>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { title: "100% Natural", desc: "Ingredientes andinos certificados" },
            { title: "Dermatológicamente probado", desc: "Validado científicamente" },
            { title: "Cruelty-free", desc: "Sin pruebas en animales" },
            { title: "Fabricado en Perú", desc: "Calidad internacional" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:border-fuchsia-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-orange-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
