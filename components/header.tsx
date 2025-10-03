"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Menu, X } from "lucide-react"

interface HeaderProps {
  onNavigate: (section: string) => void
  currentSection: string
  onShopClick: () => void
}

export function Header({ onNavigate, currentSection, onShopClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "productos", label: "Productos" },
    { id: "personalizador", label: "Personalizador" },
    { id: "blog", label: "Blog" },
    { id: "laboratorio", label: "Laboratorio" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logotipo con gradiente para reforzar la recordación de marca */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex cursor-pointer items-center gap-2"
          onClick={() => onNavigate("inicio")}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient-br">
            <span className="text-lg font-bold text-white">L</span>
          </div>
          <span className="text-brand-gradient-soft text-xl font-bold">
            LUMIÈRE
          </span>
        </motion.div>

        {/* Navegación principal en escritorio con indicador dinámico */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative text-sm font-medium transition-colors ${
                currentSection === item.id ? "text-fuchsia-400" : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
              {currentSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gradient"
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA de compra con gradiente para acentuar la acción comercial */}
        <div className="hidden items-center gap-4 md:flex">
          <Button size="sm" onClick={onShopClick} variant="brand">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Comprar
          </Button>
        </div>

        {/* Activador del menú móvil que mantiene la navegación accesible */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </nav>

      {/* Menú desplegable en móvil con acceso a secciones y CTA */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setMobileMenuOpen(false)
                }}
                className={`text-left text-sm font-medium transition-colors ${
                  currentSection === item.id ? "text-fuchsia-400" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => {
                onShopClick()
                setMobileMenuOpen(false)
              }}
              variant="brand"
              className="mt-2"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Comprar
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
