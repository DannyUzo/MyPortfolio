"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20 dark:to-background relative overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-800/20 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-blue-800 dark:to-blue-400 bg-clip-text">
                Daniel
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">Frontend Engineer</h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <MapPin className="w-4 h-4" />
              <span>Abeokuta, Nigeria</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I'm passionate about turning complex ideas into clean, responsive, and user-friendly web experiences. I
            build scalable, fast, and functional web applications with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href={"mailto:uzodinmadaniel42@gmail.com"}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </Link>
            <div className="flex gap-4">
              <Link href={"https://github.com/DannyUzo"}>
                <Button variant="outline" size="lg" className="border-border hover:bg-accent">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </Link>
              <Link href={"https://linkedin.com/in/daniel-uzodinma-6ba3b7293"}>
                <Button variant="outline" size="lg" className="border-border hover:bg-accent">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-primary mx-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
