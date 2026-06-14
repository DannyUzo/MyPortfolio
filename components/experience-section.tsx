"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/lib/resume-data"
import Image from "next/image"

export function ExperienceSection() {
  const allExperience = [...resumeData.professionalExperience, ...resumeData.internships]

  return (
    <section id="experience" className="grain-surface border-b border-border/60 bg-background py-28">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mb-14 grid gap-6 md:grid-cols-[minmax(0,1fr)_22rem] md:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">Field history</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Work Experience
            </h2>
          </div>
          <p className="text-xl leading-8 text-muted-foreground">
            A record of shipped products, engineering environments, and the teams I have supported.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl">
          {allExperience.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="grid gap-6 border-b border-border p-6 md:grid-cols-[4rem_minmax(0,1fr)_14rem] md:p-8"
            >
              <div className="flex flex-col items-center ">
                <div className="bg-transparent border border-border p-3 rounded-lg">
                  <div
                    className={`w-12 h-12  object-cover relative overflow-hidden bg-transparent rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <Image src={exp.image} alt={exp.company} fill className="object-cover" />
                  </div>
                </div>

                <div className="bg-border w-[0.5px] h-36" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">{exp.company}</h3>
                  {exp.duration.includes("present") ? (
                    <Badge className="border border-primary/30 bg-primary/10 text-primary hover:bg-primary/15">PRESENT</Badge>
                  ) : null}
                </div>
                <p className="mt-2 text-xl font-medium text-primary">{exp.position}</p>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{exp.desc}</p>
              </div>

              <div className="space-y-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground md:text-right">
                <p className="inline-flex items-center gap-2 md:justify-end">
                  <Calendar className="h-4 w-4" />
                  {exp.duration}
                </p>
                <p className="inline-flex items-center gap-2 md:justify-end">
                  <MapPin className="h-4 w-4" />
                  Remote / Field
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}