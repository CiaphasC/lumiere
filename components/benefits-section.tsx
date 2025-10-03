"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { TiltCard } from "./tilt-card"
import { MagicWand } from "./magic-wand"
import { benefits } from "@/data/benefits"

export function BenefitsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">
      <div className="absolute inset-0 z-0">
        <MagicWand activeCard={activeCard} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-orange-400 bg-clip-text text-5xl font-bold text-transparent">
            Resultados Profesionales
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-xl leading-relaxed text-gray-300">
            Ingredientes andinos respaldados por investigación científica para resultados visibles y duraderos
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                gradient={benefit.gradient}
                onHover={(isHovered) => setActiveCard(isHovered ? index : null)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
    </section>
  )
}
