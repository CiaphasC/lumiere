"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ingredients } from "@/data/ingredients"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface CosmicIntroProps {
  onExplore: () => void
}

export function CosmicIntro({ onExplore }: CosmicIntroProps) {
  const [isVisible, setIsVisible] = useState(true)
  const prefersReducedMotion = useReducedMotion()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: { x: number; y: number; radius: number; opacity: number }[] = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        star.opacity += (Math.random() - 0.5) * 0.02
        star.opacity = Math.max(0.1, Math.min(1, star.opacity))
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleExplore = () => {
    setIsVisible(false)
    setTimeout(onExplore, 800)
  }

  if (!isVisible) return null

  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Orbital rings */}
        <div className="relative h-[600px] w-[600px]">
          {[1, 2, 3].map((ring) => (
            <div
              key={ring}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700/30"
              style={{
                width: `${ring * 180}px`,
                height: `${ring * 180}px`,
              }}
            />
          ))}

          {/* Orbiting ingredients */}
          {ingredients.map((ingredient, index) => {
            const angle = (index / ingredients.length) * 360
            const radius = 180 + (index % 2) * 90
            const duration = 20 + index * 5

            return (
              <motion.div
                key={ingredient.id}
                className="absolute left-1/2 top-1/2"
                style={
                  {
                    "--orbit-radius": `${radius}px`,
                  } as any
                }
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div
                  className="flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg shadow-white/20"
                  style={{
                    backgroundColor: ingredient.color,
                    transform: `translateX(${radius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <span className="text-xs font-semibold text-white">{ingredient.name.split(" ")[0]}</span>
                </div>
              </motion.div>
            )
          })}

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-orange-400 shadow-2xl shadow-fuchsia-500/50"
            >
              <span className="text-3xl font-bold text-white">L</span>
            </motion.div>
          </div>
        </div>

        {/* Text and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-light tracking-wide text-gray-300">
            Descubre la ciencia de la belleza natural
          </h2>
          <Button
            onClick={handleExplore}
            size="lg"
            className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-orange-400 text-white shadow-lg shadow-fuchsia-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/60"
          >
            Explorar colección
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
