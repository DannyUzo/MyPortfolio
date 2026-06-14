"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { resumeData } from "@/lib/resume-data"
import { motion } from "framer-motion"
import Link from "next/link"

export default function WorkPage() {
  return (
    <main className="min-h-screen grain-surface  bg-background text-foreground">
      <Navbar />

      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-32">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-4xl"
        >
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">Work archive</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            Projects across screens, models, and machines.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-muted-foreground">
            A selected archive of frontend systems, AI experiments, and hardware builds, organized like engineering notes rather than a gallery wall.
          </p>
        </motion.header>

        <ProjectSection id="software" title="Software Engineering" index="01">
          {resumeData.projects.map((project) => (
            <ProjectRecord
              key={project.name}
              title={project.name}
              eyebrow={project.tags?.join(" / ") || "Software Project"}
              description={project.description}
              tags={project.technologies}
              links={[
                project.link ? { label: "Live Demo", href: project.link } : null,
                project.github ? { label: "GitHub", href: project.github } : null,
              ].filter(Boolean) as Array<{ label: string; href: string }>}
            />
          ))}
        </ProjectSection>

        <ProjectSection id="ai" title="ML/AI Projects" index="02">
          {resumeData.aiProjects?.map((project: any) => (
            <ProjectRecord
              key={project.title}
              title={project.title}
              eyebrow={project.modelType || "AI System"}
              description={project.description}
              tags={project.stack || []}
              links={project.github ? [{ label: "Repository", href: project.github }] : []}
            />
          ))}
        </ProjectSection>

        <ProjectSection id="hardware" title="Hardware Systems" index="03">
          {resumeData.hardwareProjects?.map((project: any) => (
            <ProjectRecord
              key={project.title}
              title={project.title}
              eyebrow={project.microcontrollers?.join(" / ") || "Embedded Build"}
              description={project.description}
              tags={[...(project.components || []), ...(project.microcontrollers || [])]}
              links={
                project.firmwareSlug
                  ? [{ label: "View Firmware", href: `/work/${project.firmwareSlug}` }]
                  : project.github
                    ? [{ label: "View Firmware", href: project.github }]
                    : []
              }
            />
          ))}
        </ProjectSection>
      </div>
    </main>
  )
}

function ProjectSection({ id, title, index, children }: { id: string; title: string; index: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border py-14 first:border-t-0 first:pt-0">
      <div className="mb-8 flex items-center gap-5">
        <span className="font-mono text-sm uppercase tracking-[0.2em] text-primary">{index}</span>
        <h2 className="text-4xl font-semibold tracking-tight">{title}</h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      <div className="overflow-hidden rounded-xl border border-border">{children}</div>
    </section>
  )
}

function ProjectRecord({ title, eyebrow, description, tags, links }: { title: string; eyebrow?: string; description: string; tags: string[]; links: Array<{ label: string; href: string }> }) {
  return (
    <article className="grid gap-6 border-b border-border bg-card p-6 last:border-b-0 md:grid-cols-[minmax(0,1fr)_16rem] md:p-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
        {tags.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex flex-wrap content-start gap-3 md:justify-end">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-base font-medium text-primary hover:underline">
            {link.label}
          </Link>
        ))}
      </div>
    </article>
  )
}