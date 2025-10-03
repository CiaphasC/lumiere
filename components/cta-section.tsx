"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ShoppingBag } from "lucide-react"
import { PurchaseDialog } from "./purchase-dialog"

export function CTASection() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-600 via-purple-600 to-orange-500 py-24">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-balance text-5xl font-bold text-white md:text-6xl">Transforma tu rutina de belleza</h2>

            <p className="mx-auto max-w-2xl text-balance text-xl leading-relaxed text-white/90">
              Experimenta la fusión perfecta entre tradición andina y ciencia moderna. Disponible ahora con envío
              gratuito en todo Perú.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="bg-white px-8 text-lg text-purple-600 shadow-2xl transition-all hover:scale-105 hover:bg-white/90"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Comprar ahora
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent px-8 text-lg text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar catálogo
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-white/80">
                Envío gratuito en compras mayores a S/150 • Garantía de satisfacción 30 días
              </p>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </section>

      <PurchaseDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
