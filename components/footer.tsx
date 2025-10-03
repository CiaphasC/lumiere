"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-16">
      {/* Shimmer effect */}
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
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
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

          {/* Quick links */}
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

          {/* Legal */}
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

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Newsletter</h4>
            <p className="mb-4 text-sm text-gray-400">Recibe tips de belleza y ofertas exclusivas</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="border-zinc-700 bg-zinc-800 text-white placeholder:text-gray-500"
              />
              <Button size="icon" className="bg-fuchsia-500 hover:bg-fuchsia-600">
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
