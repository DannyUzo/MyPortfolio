"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { resumeData } from "@/lib/resume-data"
import Link from "next/link"

export function ProjectsSection() {
  return (
    <section id="projects" className="grain-surface border-b border-border/60 bg-background py-28">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mb-14 grid gap-6 md:grid-cols-[minmax(0,1fr)_24rem] md:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">Selected builds</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Featured Projects
            </h2>
          </div>
          <p className="text-xl leading-8 text-muted-foreground">
            Product work and experiments across frontend engineering, automation, and AI-assisted systems.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border md:grid-cols-2 lg:grid-cols-3">
          {resumeData.projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="flex min-h-[26rem] flex-col p-6 border"
            >
              <div className="mb-8 flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <span>Project / 0{index + 1}</span>
                <span>{project.tags}</span>
              </div>

              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-foreground">{project.name}</h3>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">{project.description}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 pt-10">
                {project.github ? (
                  <Link href={project.github} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full border-border hover:border-primary/60 hover:text-primary">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Button>
                  </Link>
                ) : null}
                {project.link ? (
                  <Link href={project.link} className="flex-1">
                    <Button size="sm" className="w-full">
                      <ArrowUpRight className="mr-2 h-4 w-4" /> Live
                    </Button>
                  </Link>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}