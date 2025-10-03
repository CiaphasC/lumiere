"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { articles } from "@/data/articles"

export function BlogView() {
  return (
    <section className="relative min-h-screen bg-zinc-950 py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-orange-400 bg-clip-text text-5xl font-bold text-transparent">
            Blog de Belleza
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-xl leading-relaxed text-gray-400">
            Consejos, tutoriales y secretos de belleza con ingredientes naturales
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-fuchsia-500/50">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative h-96 overflow-hidden lg:h-auto">
                <Image
                  src={articles[0].image || "/placeholder.svg"}
                  alt={articles[0].title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/50 to-transparent lg:opacity-60" />
              </div>
              <div className="flex flex-col justify-center p-8">
                <Badge className="mb-4 w-fit bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white">
                  Artículo Destacado
                </Badge>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-white">{articles[0].title}</h2>
                <p className="mb-6 leading-relaxed text-gray-400">{articles[0].excerpt}</p>
                <div className="mb-6 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {articles[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {articles[0].readTime}
                  </span>
                </div>
                <Button className="w-fit bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white">
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(1).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-fuchsia-500/50 hover:shadow-xl hover:shadow-fuchsia-500/20">
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                  <Badge className="absolute right-4 top-4 bg-zinc-900/80 text-white backdrop-blur-sm">
                    {article.category}
                  </Badge>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold leading-tight text-white">{article.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">{article.excerpt}</p>

                  <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-between text-fuchsia-400 hover:text-fuchsia-300"
                  >
                    Leer artículo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
