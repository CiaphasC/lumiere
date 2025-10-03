"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { BlueprintCustomizer } from "@/components/blueprint-customizer"
import { BeautyLab } from "@/components/beauty-lab"
import { ArticlesSection } from "@/components/articles-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { PurchaseDialog } from "@/components/purchase-dialog"
import { products } from "@/data/products"

export default function Home() {
  const [currentSection, setCurrentSection] = useState("inicio")
  const [purchaseDialogOpen, setPurchaseDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const heroRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)
  const customizerRef = useRef<HTMLDivElement>(null)
  const articlesRef = useRef<HTMLDivElement>(null)
  const labRef = useRef<HTMLDivElement>(null)

  const handleCTAClick = () => {
    benefitsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleNavigate = (section: string) => {
    setCurrentSection(section)

    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      inicio: heroRef,
      productos: benefitsRef,
      personalizador: customizerRef,
      articulos: articlesRef,
      laboratorio: labRef,
    }

    refs[section]?.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleShopClick = () => {
    setPurchaseDialogOpen(true)
  }

  return (
    <main className="relative">
      <Header onNavigate={handleNavigate} currentSection={currentSection} onShopClick={handleShopClick} />

      <div ref={heroRef}>
        <HeroSection onCTAClick={handleCTAClick} />
      </div>
      <div ref={benefitsRef}>
        <BenefitsSection />
      </div>
      <div ref={customizerRef}>
        <BlueprintCustomizer />
      </div>
      <div ref={articlesRef}>
        <ArticlesSection />
      </div>
      <div ref={labRef}>
        <BeautyLab />
      </div>
      <TestimonialsSection />
      <CTASection />
      <Footer />

      <PurchaseDialog open={purchaseDialogOpen} onOpenChange={setPurchaseDialogOpen} product={selectedProduct} />
    </main>
  )
}
