"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: "1",
    name: "Sofía Ramírez",
    city: "Lima",
    image: "/testimonial-sofia.jpg",
    rating: 5,
    text: "Lumiere transformó mi piel. La luminosidad que prometen es real, y me encanta saber que uso ingredientes naturales de mi tierra.",
  },
  {
    id: "2",
    name: "Valentina Torres",
    city: "Arequipa",
    image: "/testimonial-valentina.jpg",
    rating: 5,
    text: "Como alguien con piel sensible, encontrar productos que funcionen es difícil. Lumiere es suave pero efectiva. ¡La recomiendo totalmente!",
  },
  {
    id: "3",
    name: "Isabella Mendoza",
    city: "Cusco",
    image: "/testimonial-isabella.jpg",
    rating: 5,
    text: "Me fascina la conexión con nuestras raíces andinas. Es más que cosmética, es un ritual de belleza que honra nuestra cultura.",
  },
]

export function TestimonialsSection() {
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
            Nuestra comunidad radiante
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-xl leading-relaxed text-gray-400">
            Miles de mujeres peruanas ya descubrieron su luminosidad natural
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-fuchsia-500/50 hover:bg-zinc-900/70">
                <div className="mb-4 flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.city}</p>
                  </div>
                </div>

                <div className="mb-3 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-fuchsia-500 text-fuchsia-500" />
                  ))}
                </div>

                <p className="leading-relaxed text-gray-300">{testimonial.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
