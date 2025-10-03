import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const siteUrl = "https://lunaandina.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luna Andina - Cosmética Natural de los Andes",
    template: "%s | Luna Andina Cosmética Natural",
  },
  description:
    "Descubre tratamientos de belleza inspirados en los Andes, formulados con ingredientes orgánicos y respaldo científico.",
  generator: "v0.app",
  keywords: [
    "cosmética natural",
    "belleza andina",
    "productos orgánicos",
    "cuidado de la piel",
    "ingredientes ancestrales",
  ],
  authors: [{ name: "Luna Andina" }],
  creator: "Luna Andina",
  publisher: "Luna Andina",
  category: "Belleza y cuidado personal",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Luna Andina - Cosmética Natural de los Andes",
    description:
      "Luna Andina combina rituales ancestrales y ciencia para crear cosméticos premium hechos en Perú.",
    url: siteUrl,
    siteName: "Luna Andina",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Colección de productos de belleza natural Luna Andina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luna Andina - Cosmética Natural de los Andes",
    description:
      "Conoce la cosmética natural peruana con ingredientes andinos puros y fórmulas de alto rendimiento.",
    creator: "@LunaAndina",
    images: ["/placeholder.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
