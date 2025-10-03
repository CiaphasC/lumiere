"use client"

import { useCursorPosition } from "@/hooks/use-cursor-position"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface SpotlightLayerProps {
  enabled?: boolean
  size?: number
  intensity?: number
}

export function SpotlightLayer({ enabled = true, size = 600, intensity = 0.6 }: SpotlightLayerProps) {
  const { x, y } = useCursorPosition()
  const prefersReducedMotion = useReducedMotion()

  if (!enabled || prefersReducedMotion) return null

  return (
    <div
      className="pointer-events-none absolute inset-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(${size}px circle at ${x}px ${y}px, rgba(217, 70, 239, ${intensity}), rgba(251, 146, 60, ${intensity * 0.5}), transparent 80%)`,
      }}
    />
  )
}
