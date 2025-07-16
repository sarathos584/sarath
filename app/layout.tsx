import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sarath - Software Developer Portfolio",
  description:
    "Portfolio of Sarath, a passionate software developer specializing in full-stack web development. Building scalable applications with modern technologies.",
  keywords: [
    "software developer",
    "full-stack developer",
    "web developer",
    "portfolio",
    "React",
    "Node.js",
    "JavaScript",
  ],
  authors: [{ name: "Sarath" }],
  openGraph: {
    title: "Sarath - Software Developer Portfolio",
    description: "Passionate software developer building scalable web applications with modern technologies.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sarath Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarath - Software Developer",
    description: "Passionate software developer building scalable web applications with modern technologies.",
    images: ["/og-image.jpg"],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
