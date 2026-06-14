"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const toggleClass = "h-11 w-11 rounded-full dark:border-white/10 bg-white/5 p-0 dark:text-white/80 transition-colors hover:border-blue-300/25 hover:bg-blue-300/10 hover:text-blue-300/70"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className={toggleClass}>
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={toggleClass}
    >
      {theme === "light" ? <Moon className="h-4 w-4 text-black" /> : <Sun className="h-4 w-4 " />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}