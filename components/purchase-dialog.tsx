"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Check } from "lucide-react"
import type { Product } from "@/data/products"

interface PurchaseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: Product | null
}

export function PurchaseDialog({ open, onOpenChange, product }: PurchaseDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "1",
  })

  if (!product) return null

  const totalPrice = product.price * Number.parseInt(formData.quantity)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset after 2 seconds
    setTimeout(() => {
      setIsSuccess(false)
      onOpenChange(false)
      setFormData({ name: "", email: "", phone: "", quantity: "1" })
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-zinc-800 bg-zinc-900 text-white">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
              <Check className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="mb-2 text-2xl font-bold">¡Pedido confirmado!</h3>
            <p className="text-center text-gray-400">Recibirás un correo con los detalles de tu compra</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Completa tu pedido</DialogTitle>
              <DialogDescription className="text-gray-400">
                {product.name} - S/ {product.price.toFixed(2)}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-zinc-700 bg-zinc-800 text-white"
                  placeholder="María García"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-zinc-700 bg-zinc-800 text-white"
                  placeholder="maria@ejemplo.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-zinc-700 bg-zinc-800 text-white"
                  placeholder="+51 999 999 999"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Cantidad</Label>
                <Select value={formData.quantity} onValueChange={(v) => setFormData({ ...formData, quantity: v })}>
                  <SelectTrigger className="border-zinc-700 bg-zinc-800 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="border-zinc-700 bg-zinc-800 text-white">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "unidad" : "unidades"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal:</span>
                  <span className="text-white">S/ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="mt-2 flex justify-between border-t border-zinc-700 pt-2 font-bold">
                  <span className="text-white">Total:</span>
                  <span className="text-fuchsia-400">S/ {totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-orange-400 text-white shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  "Confirmar pedido"
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
