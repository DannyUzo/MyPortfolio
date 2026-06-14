"use client"

import { useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Logbook", href: "/journal" },
  { name: "Work", href: "/work" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  if (href.startsWith("/#")) return false
  return pathname.startsWith(href)
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
      className={`fixed left-0 right-0 top-0 z-50 grain-surface border-b border-border transition-colors ${
        isScrolled ? "bg-background/90 backdrop-blur-xl" : "bg-background/75 backdrop-blur-lg"
      }`}
    >
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-px bg-border"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <div className="mx-auto grid h-24 w-full max-w-[1220px] grid-cols-[auto_1fr_auto] items-center px-6">
        <Link
          href="/"
          className="font-mono text-xl font-black tracking-tight text-foreground transition-colors hover:text-blue-500/70 dark:hover:text-blue-300/70"
          aria-label="Daniel U home"
        >
          Daniel Uzodinma
        </Link>

        <div className="hidden items-center justify-center gap-10 md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-semibold transition-colors hover:text-blue-500/70 dark:hover:text-blue-300/70 ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="hidden justify-self-end md:block">
          <ThemeToggle />
        </div>

        <button
          aria-label="Toggle menu"
          className="justify-self-end rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-blue-400/30 hover:text-blue-500/70 dark:hover:border-blue-300/25 dark:hover:text-blue-300/70 md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-base font-semibold transition-colors hover:text-blue-500/70 dark:hover:text-blue-300/70 ${
                  isActive(pathname, item.href) ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </motion.nav>
  )
}