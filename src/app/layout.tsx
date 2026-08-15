import type { Metadata } from "next"
import { Geist } from "next/font/google"

import { siteConfig } from "@/lib/site-config"

import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description:
      "Software engineering student at Epitech with production experience across backend, cloud infrastructure, AI-powered applications, and full-stack development.",
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description:
      "Software engineering student at Epitech with production experience across backend, cloud infrastructure, AI-powered applications, and full-stack development.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  )
}
