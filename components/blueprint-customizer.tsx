"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Droplet, Sparkles, Shield, Heart, Clock, Zap } from "lucide-react"
import { bottleColors, fragrances, skinTypes, features } from "@/data/customization"
import { ingredients } from "@/data/ingredients"

const iconMap = {
  droplet: Droplet,
  sparkles: Sparkles,
  shield: Shield,
  heart: Heart,
  clock: Clock,
  zap: Zap,
}

export function BlueprintCustomizer() {
  const [selectedColor, setSelectedColor] = useState(bottleColors[0].id)
  const [selectedFragrance, setSelectedFragrance] = useState(fragrances[0].id)
  const [selectedSkinType, setSelectedSkinType] = useState(skinTypes[0].id)
  const [activeModule, setActiveModule] = useState<string | null>(null)

  const currentColor = bottleColors.find((c) => c.id === selectedColor)?.value || bottleColors[0].value

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">
      {/* Retícula técnica que contextualiza la personalización como un proceso científico */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.65 0.22 320) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.65 0.22 320) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* Título inmersivo con gradiente que invita a configurar la fórmula propia */}
          <h2 className="mb-4 text-brand-gradient text-5xl font-bold">
            Personaliza tu experiencia
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-xl leading-relaxed text-gray-400">
            Crea tu fórmula perfecta seleccionando color, fragancia y tipo de piel
          </p>
        </motion.div>

        <div className="relative grid gap-8 lg:grid-cols-2">
          {/* Botella central que responde visualmente a las selecciones del usuario */}
          <div className="flex items-center justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Conexiones visuales que enlazan la botella con los módulos de configuración */}
                <svg className="absolute inset-0 h-full w-full" style={{ overflow: "visible" }}>
                {/* Líneas dinámicas que varían según el módulo activo */}
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="-100"
                  y2="-50"
                  stroke={activeModule === "color" ? currentColor : "oklch(0.35 0 0)"}
                  strokeWidth={activeModule === "color" ? "3" : "1"}
                  strokeDasharray="5,5"
                  className="transition-all duration-300"
                />
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="-100"
                  y2="150"
                  stroke={activeModule === "fragrance" ? currentColor : "oklch(0.35 0 0)"}
                  strokeWidth={activeModule === "fragrance" ? "3" : "1"}
                  strokeDasharray="5,5"
                  className="transition-all duration-300"
                />
              </svg>

              {/* Recipiente principal con gradiente especular y halo cromático */}
              <motion.div
                className="relative h-96 w-64 rounded-3xl shadow-2xl"
                style={{
                  backgroundColor: currentColor,
                  boxShadow: `0 25px 50px -12px ${currentColor}`,
                }}
                animate={{
                  boxShadow: `0 25px 50px -12px ${currentColor}`,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-transparent" />
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <h3 className="mb-2 text-3xl font-bold text-white">LUMIÈRE</h3>
                  <p className="text-sm text-white/80">{fragrances.find((f) => f.id === selectedFragrance)?.name}</p>
                  <div className="mt-8 space-y-2">
                    {ingredients.slice(0, 3).map((ing) => (
                      <Badge key={ing.id} variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">
                        {ing.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Indicadores orbitales que muestran los ingredientes estrella de la fórmula */}
              {ingredients.slice(0, 5).map((ingredient, index) => {
                const angle = (index / 5) * 360
                const radius = 180

                return (
                  <motion.div
                    key={ingredient.id}
                    className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      backgroundColor: ingredient.color,
                      boxShadow: `0 0 20px ${ingredient.color}`,
                    }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * radius,
                      y: Math.sin((angle * Math.PI) / 180) * radius,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                )
              })}
            </motion.div>
          </div>

          {/* Módulos de configuración con feedback visual inmediato */}
          <div className="space-y-6">
            {/* Selector de color que define la presencia visual del envase */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onMouseEnter={() => setActiveModule("color")}
              onMouseLeave={() => setActiveModule(null)}
            >
              <Card className="border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-fuchsia-500/50">
                <h3 className="mb-4 text-xl font-semibold text-white">Color del envase</h3>
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="grid grid-cols-4 gap-4">
                  {bottleColors.map((color) => (
                    <div key={color.id} className="flex flex-col items-center gap-2">
                      <RadioGroupItem value={color.id} id={color.id} className="sr-only" />
                      <Label
                        htmlFor={color.id}
                        className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 transition-all hover:scale-110"
                        style={{
                          backgroundColor: color.value,
                          borderColor: selectedColor === color.id ? "white" : "transparent",
                          boxShadow: selectedColor === color.id ? `0 0 20px ${color.value}` : "none",
                        }}
                      />
                      <span className="text-xs text-gray-400">{color.name}</span>
                    </div>
                  ))}
                </RadioGroup>
              </Card>
            </motion.div>

            {/* Selector de fragancia que combina perfil aromático y beneficios sensoriales */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onMouseEnter={() => setActiveModule("fragrance")}
              onMouseLeave={() => setActiveModule(null)}
            >
              <Card className="border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-fuchsia-500/50">
                <h3 className="mb-4 text-xl font-semibold text-white">Fragancia</h3>
                <Tabs value={selectedFragrance} onValueChange={setSelectedFragrance}>
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                    {fragrances.map((fragrance) => (
                      <TabsTrigger key={fragrance.id} value={fragrance.id} className="text-xs">
                        {fragrance.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
                <p className="mt-3 text-sm text-gray-400">
                  {fragrances.find((f) => f.id === selectedFragrance)?.description}
                </p>
              </Card>
            </motion.div>

            {/* Selector de tipo de piel que personaliza la recomendación dermatológica */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-fuchsia-500/50">
                <h3 className="mb-4 text-xl font-semibold text-white">Tipo de piel</h3>
                <RadioGroup value={selectedSkinType} onValueChange={setSelectedSkinType} className="space-y-3">
                  {skinTypes.map((type) => (
                    <div key={type.id} className="flex items-center space-x-3">
                      <RadioGroupItem value={type.id} id={type.id} />
                      <Label htmlFor={type.id} className="flex-1 cursor-pointer">
                        <span className="font-medium text-white">{type.name}</span>
                        <p className="text-sm text-gray-400">{type.recommendation}</p>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Barra de atributos clave que resume beneficios diferenciales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <motion.button
                key={feature.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 backdrop-blur-sm transition-all hover:border-fuchsia-500/50 hover:bg-zinc-800/50"
              >
                <Icon className="h-4 w-4 text-fuchsia-500" />
                <span className="text-sm text-white">{feature.name}</span>
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
