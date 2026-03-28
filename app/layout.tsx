import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aqib Hussain | Software Engineer & Full-Stack Developer",
  description:
    "Aqib Hussain is a Software Engineer based in Lahore, specializing in React, Next.js, and FastAPI. 1.5+ years of experience in building scalable web applications.",
  keywords: "Software Engineer, Full-Stack Developer, Web Application Development, Scalable Systems, Next.js Expert, Lahore, Portfolio, React, FastAPI, Node.js",
  authors: [{ name: "Aqib Hussain" }],
  openGraph: {
    title: "Aqib Hussain | Software Engineer & Full-Stack Developer",
    description:
      "Aqib Hussain is a Software Engineer based in Lahore, specializing in React, Next.js, and FastAPI. 1.5+ years of experience in building scalable web applications.",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aqib Hussain",
  "jobTitle": "Software Engineer",
  "knowsAbout": ["React", "Node.js", "FastAPI", "SQL", "TypeScript", "Next.js", "Full-Stack Development"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lahore",
    "addressCountry": "Pakistan"
  },
  "url": "https://portfolio-aqib-hussain.vercel.app/"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
