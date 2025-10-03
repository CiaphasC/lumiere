"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { SpotlightLayer } from "./spotlight-layer"

type Preset = "aurora" | "sunset" | "starry"

const presets = {
  aurora: { size: 600, intensity: 0.6, saturation: 1 },
  sunset: { size: 800, intensity: 0.8, saturation: 1.2 },
  starry: { size: 400, intensity: 0.4, saturation: 0.8 },
}

export function BeautyLab() {
  const [size, setSize] = useState(600)
  const [intensity, setIntensity] = useState(0.6)
  const [saturation, setSaturation] = useState(1)
  const [preset, setPreset] = useState<Preset>("aurora")

  const applyPreset = (presetName: Preset) => {
    setPreset(presetName)
    const p = presets[presetName]
    setSize(p.size)
    setIntensity(p.intensity)
    setSaturation(p.saturation)
  }

  const resetControls = () => {
    applyPreset("aurora")
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950 py-24">
      <SpotlightLayer enabled={true} size={size} intensity={intensity} />

      <div className="relative z-20 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* Título con gradiente que posiciona el laboratorio como experiencia insignia */}
          <h2 className="mb-4 text-brand-gradient text-5xl font-bold">
            Laboratorio de belleza
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-xl leading-relaxed text-gray-400">
            Experimenta con la luz y descubre cómo diferentes intensidades realzan tu belleza natural
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Panel de control para ajustar parámetros lumínicos del experimento */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-semibold text-white">Controles de luz</h3>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="size" className="text-white">
                    Radio del spotlight
                  </Label>
                  <Slider
                    id="size"
                    min={200}
                    max={1000}
                    step={50}
                    value={[size]}
                    onValueChange={(v) => setSize(v[0])}
                    className="mt-2"
                  />
                  <span className="text-sm text-gray-400">{size}px</span>
                </div>

                <div>
                  <Label htmlFor="intensity" className="text-white">
                    Intensidad
                  </Label>
                  <Slider
                    id="intensity"
                    min={0.1}
                    max={1}
                    step={0.1}
                    value={[intensity]}
                    onValueChange={(v) => setIntensity(v[0])}
                    className="mt-2"
                  />
                  <span className="text-sm text-gray-400">{(intensity * 100).toFixed(0)}%</span>
                </div>

                <div>
                  <Label htmlFor="saturation" className="text-white">
                    Saturación
                  </Label>
                  <Slider
                    id="saturation"
                    min={0.5}
                    max={1.5}
                    step={0.1}
                    value={[saturation]}
                    onValueChange={(v) => setSaturation(v[0])}
                    className="mt-2"
                  />
                  <span className="text-sm text-gray-400">{(saturation * 100).toFixed(0)}%</span>
                </div>
              </div>

              <div className="mt-6">
                <Label className="mb-3 block text-white">Presets</Label>
                <Tabs value={preset} onValueChange={(v) => applyPreset(v as Preset)}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="aurora">Aurora</TabsTrigger>
                    <TabsTrigger value="sunset">Atardecer</TabsTrigger>
                    <TabsTrigger value="starry">Estrellada</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <Button onClick={resetControls} variant="outline" className="mt-6 w-full bg-transparent">
                Restaurar
              </Button>
            </Card>
          </motion.div>

          {/* Área de visualización donde se proyecta la respuesta estética del spotlight */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex min-h-[600px] items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900/30 p-12 backdrop-blur-sm"
            >
              <div className="text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="mb-8"
                >
                  {/* Círculo con gradiente diagonal que simula la mezcla cromática personalizada */}
                  <div className="mx-auto h-48 w-48 rounded-full bg-brand-gradient-br shadow-2xl shadow-fuchsia-500/50" />
                </motion.div>
                <h3 className="mb-4 text-3xl font-bold text-white">Mueve tu cursor</h3>
                <p className="text-gray-400">Observa cómo la luz sigue tu movimiento y realza los colores</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
