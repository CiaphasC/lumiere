"use client"

import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function AuroraLayer() {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full opacity-40 mix-blend-screen blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.7 0.25 320) 0%, oklch(0.6 0.2 320) 40%, transparent 70%)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-1/4 top-1/3 h-[600px] w-[600px] rounded-full opacity-35 mix-blend-screen blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.22 35) 0%, oklch(0.65 0.18 35) 40%, transparent 70%)",
          animation: "float 25s ease-in-out infinite 5s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[700px] w-[700px] rounded-full opacity-30 mix-blend-screen blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.68 0.2 280) 0%, oklch(0.6 0.16 280) 40%, transparent 70%)",
          animation: "float 30s ease-in-out infinite 10s",
        }}
      />
    </div>
  )
}
