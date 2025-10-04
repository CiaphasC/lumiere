import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import Script from "next/script"

const siteUrl = "https://lumiere.pe"

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lumiere",
  url: siteUrl,
  logo: `${siteUrl}/placeholder-logo.png`,
  sameAs: [
    "https://www.instagram.com/lumiere",
    "https://www.tiktok.com/@lumiere",
    "https://www.youtube.com/@lumiere",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Servicio al cliente",
      email: "hola@lumiere.pe",
      availableLanguage: ["es", "en"],
      areaServed: "PE",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PE",
    addressLocality: "Lima",
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lumiere — Cosmética inteligente inspirada en los Andes",
    template: "%s | Lumiere belleza consciente",
  },
  description:
    "Lumiere crea tratamientos de cuidado de la piel con biotecnología y superalimentos andinos para iluminar, proteger y equilibrar tu belleza natural.",
  generator: "v0.app",
  keywords: [
    "Lumiere",
    "cosmética inteligente",
    "belleza andina",
    "cuidado de la piel premium",
    "ingredientes naturales",
    "superalimentos peruanos",
  ],
  authors: [{ name: "Lumiere" }],
  creator: "Lumiere",
  publisher: "Lumiere Labs",
  category: "Belleza y cuidado personal",
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-PE": siteUrl,
      "es-ES": siteUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: "Lumiere — Cosmética inteligente inspirada en los Andes",
    description:
      "Lumiere fusiona rituales ancestrales y biotecnología para crear cosméticos premium hechos en Perú.",
    url: siteUrl,
    siteName: "Lumiere",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Colección de productos de belleza natural Lumiere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumiere — Cosmética inteligente inspirada en los Andes",
    description:
      "Conoce la cosmética natural peruana con ingredientes andinos y fórmulas de alto rendimiento desarrolladas por Lumiere.",
    creator: "@Lumiere",
    images: ["/placeholder.jpg"],
  },
  icons: {
    icon: "/placeholder-logo.png",
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
        <Script
          id="lumiere-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
