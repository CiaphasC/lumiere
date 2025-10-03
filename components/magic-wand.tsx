"use client"

import { motion } from "framer-motion"
import { useCursorPosition } from "@/hooks/use-cursor-position"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface MagicWandProps {
  activeCard: number | null
}

export function MagicWand({ activeCard }: MagicWandProps) {
  const { x, y } = useCursorPosition()
  const prefersReducedMotion = useReducedMotion()

  if (activeCard === null || prefersReducedMotion) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-50"
      animate={{
        x: x - 12,
        y: y - 12,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
      }}
    >
      <div className="relative h-6 w-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-orange-400 opacity-80 blur-md" />
        <div className="absolute inset-0 rounded-full bg-white" />
        <motion.div
          className="absolute -inset-4 rounded-full border-2 border-fuchsia-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  )
}
