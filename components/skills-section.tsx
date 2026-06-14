"use client"

import { motion } from "framer-motion"
import { resumeData } from "@/lib/resume-data"

const skillCategories = [
  ["Languages & Frameworks", resumeData.skills.languagesAndFrameworks],
  ["State & Data", resumeData.skills.stateAndData],
  ["Styling Tools", resumeData.skills.stylingTools],
  ["Tools & Platforms", resumeData.skills.toolsAndPlatforms],
  ["ML Tools", resumeData.skills.mlTools],
  ["Robotics Tools", resumeData.skills.roboticTools],
] as const

export function SkillsSection() {
  return (
    <section id="skills" className="grain-surface border-b border-border/60 bg-background py-28">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">Toolchain index</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mt-5 text-xl leading-8 text-muted-foreground">
            A practical stack shaped by product interfaces, content systems, embedded experiments, and AI-assisted workflows.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          {skillCategories.map(([title, skills], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="grid gap-5 border-b border-border p-6 last:border-b-0 md:grid-cols-[18rem_minmax(0,1fr)] md:p-7"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">0{index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full h-fit border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}