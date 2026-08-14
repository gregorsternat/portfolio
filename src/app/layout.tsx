import type { Metadata } from "next"
import { Geist } from "next/font/google"

import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gregor Sternat — Software Engineer",
  description:
    "Gregor Sternat is a software engineering student at Epitech with production experience in backend systems, cloud infrastructure, AI-powered applications, and full-stack development.",
  openGraph: {
    title: "Gregor Sternat — Software Engineer",
    description:
      "Software engineering student at Epitech with production experience across backend, cloud infrastructure, AI-powered applications, and full-stack development.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gregor Sternat — Software Engineer",
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
