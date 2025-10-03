"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-16">
      {/* Efecto de brillo que recorre el borde superior y aporta sofisticación */}
      <motion.div
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Bloque de marca con gradiente que refuerza el posicionamiento premium */}
          <div>
            {/* Logotipo textual con gradiente para cerrar la experiencia con coherencia visual */}
            <h3 className="mb-4 text-2xl font-bold text-brand-gradient">
              LUMIÈRE
            </h3>
            <p className="mb-4 leading-relaxed text-gray-400">
              Cosmética profesional con ingredientes andinos ancestrales
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-fuchsia-500">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-fuchsia-500">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-fuchsia-500">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navegación complementaria para profundizar en secciones clave */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {["Inicio", "Productos", "Personalizador", "Blog", "Laboratorio"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 transition-colors hover:text-fuchsia-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces legales que garantizan transparencia y confianza */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              {["Términos y condiciones", "Política de privacidad", "Política de envíos", "Devoluciones"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 transition-colors hover:text-fuchsia-500">
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Captación para newsletter con CTA en gradiente que incentiva la suscripción */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Newsletter</h4>
            <p className="mb-4 text-sm text-gray-400">Recibe tips de belleza y ofertas exclusivas</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="border-zinc-700 bg-zinc-800 text-white placeholder:text-gray-500"
              />
              <Button size="icon" variant="brand">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 LUMIÈRE. Todos los derechos reservados. Fabricado en Perú.</p>
        </div>
      </div>
    </footer>
  )
}
