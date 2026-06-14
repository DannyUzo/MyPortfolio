"use client"

import { motion } from "framer-motion"
import { Cpu, Monitor, Workflow } from "lucide-react"

const tracks = [
  {
    kicker: "The Screen",
    title: "Frontend architectures with mechanical sympathy.",
    description: "I build interfaces that stay understandable under real product pressure: typed data flow, resilient component boundaries, responsive layouts, and interaction states that make complex systems easier to operate.",
    icon: Monitor,
    points: ["Design systems", "Interactive dashboards", "Performance-minded React"],
  },
  {
    kicker: "The Physical",
    title: "Embedded systems that make software accountable.",
    description: "Hardware work keeps the feedback loop honest. I document sensors, microcontrollers, automation logic, and firmware decisions with enough detail for another engineer to reproduce the path.",
    icon: Cpu,
    points: ["Microcontrollers and IoT", "Sensors and actuators", "Robotics prototyping"],
  },
]

export function ExpertiseSection() {
  return (
    <section id="about" className="grain-surface border-b border-border/60 bg-background py-28">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">Operating model</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Where interface craft meets physical systems.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            {tracks.map((track, index) => (
              <motion.article
                key={track.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-card p-7"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <track.icon className="h-4 w-4 text-primary" />
                    {track.kicker}
                  </div>
                  <Workflow className="h-5 w-5 text-muted-foreground" />
                </div>

                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-foreground">
                  {track.title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">{track.description}</p>

                <ul className="mt-8 space-y-3">
                  {track.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-base text-foreground/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}