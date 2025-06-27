import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ErrorBoundary } from "@/components/error-boundary"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from '@/components/ui/toaster';
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uzodinma Daniel - Frontend Engineer | Modern Web Developer",
  description:
    "Frontend Engineer passionate about creating clean, responsive, and user-friendly web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: "Frontend Engineer, React Developer, Next.js, TypeScript, Web Developer, JavaScript, Abeokuta Nigeria",
  authors: [{ name: "Uzodinma Daniel" }],
  creator: "Uzodinma Daniel",
  publisher: "Uzodinma Daniel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dannyuzo.vercel.app",
    title: "Uzodinma Daniel - Frontend Engineer",
    description: "Frontend Engineer passionate about creating clean, responsive, and user-friendly web experiences.",
    siteName: "Uzodinma Daniel Portfolio",
  },
  icons: {
    icon: '/logo.svg', 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
