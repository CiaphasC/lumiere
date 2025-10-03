"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, ArrowRight } from "lucide-react"
import { articles, categories } from "@/data/articles"
import Image from "next/image"

export function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const filteredArticles = activeCategory === "all" ? articles : articles.filter((a) => a.category === activeCategory)

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-orange-400 bg-clip-text text-5xl font-bold text-transparent">
            Grimorio de belleza
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-xl leading-relaxed text-gray-400">
            Descubre secretos ancestrales y consejos modernos para realzar tu belleza natural
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList>
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id}>
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Articles grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(article.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="group relative overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-fuchsia-500/50">
                <motion.div
                  animate={hoveredCard === article.id ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-48 overflow-hidden"
                >
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                </motion.div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="secondary" className="bg-fuchsia-500/20 text-fuchsia-400">
                      {categories.find((c) => c.id === article.category)?.name}
                    </Badge>
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-fuchsia-400">
                    {article.title}
                  </h3>

                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={hoveredCard === article.id ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    className="mb-4 overflow-hidden text-sm leading-relaxed text-gray-400"
                  >
                    {article.excerpt}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={hoveredCard === article.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  >
                    <Button variant="ghost" size="sm" className="group/btn text-fuchsia-400 hover:text-fuchsia-300">
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </motion.div>
                </div>

                {/* Magical particles on hover */}
                {hoveredCard === article.id && (
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-fuchsia-500"
                        initial={{
                          x: `${Math.random() * 100}%`,
                          y: "100%",
                          opacity: 0,
                        }}
                        animate={{
                          y: "-20%",
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
