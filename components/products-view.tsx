"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Sparkles } from "lucide-react"
import { products, categories, type Product } from "@/data/products"

interface ProductsViewProps {
  onPurchase: (product: Product) => void
}

export function ProductsView({ onPurchase }: ProductsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredProducts =
    selectedCategory === "Todos" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <section className="relative min-h-screen bg-zinc-950 py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-orange-400 bg-clip-text text-5xl font-bold text-transparent">
            Nuestros Productos
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-xl leading-relaxed text-gray-400">
            Descubre nuestra línea completa de productos de belleza con ingredientes naturales andinos
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 flex justify-center gap-4"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white"
                  : "border-zinc-700 text-gray-300 hover:border-fuchsia-500/50 hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-fuchsia-500/50 hover:shadow-xl hover:shadow-fuchsia-500/20">
                {product.featured && (
                  <Badge className="absolute right-4 top-4 z-10 bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white">
                    <Sparkles className="mr-1 h-3 w-3" />
                    Destacado
                  </Badge>
                )}

                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-orange-400/20">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{product.name}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">{product.description}</p>

                  {/* Benefits */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {product.benefits.slice(0, 2).map((benefit) => (
                      <Badge key={benefit} variant="secondary" className="bg-zinc-800 text-gray-300">
                        {benefit}
                      </Badge>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">S/ {product.price.toFixed(2)}</span>
                    </div>
                    <Button
                      onClick={() => onPurchase(product)}
                      className="bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white shadow-lg transition-all hover:scale-105 hover:shadow-fuchsia-500/50"
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Comprar
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
