"use client"

import { motion } from "framer-motion"

const nodes = [
  {
    tag: "sw",
    label: "Interfaces",
    detail:
      "React and TypeScript apps that stay legible once real data, real users, and real edge cases show up. Dashboards, monitoring tools, typed state.",
    spec: "React · TypeScript · Next.js",
  },
  {
    tag: "hw",
    label: "Circuits",
    detail:
      "Microcontrollers, sensors, and edge inference. The layer that has to be right before any of the software above it means anything.",
    spec: "Embedded C · TinyML · IoT",
  },
]

// path baselines sit far from center so text blocks (above-left / below-right)
// have full vertical clearance before hitting the line
const TRACE_PATH = "M 60 170 L 300 170 L 380 40 L 460 210 L 540 70 L 760 70"

export function ExpertiseSection() {
  return (
    <section id="about" className="grain-surface border-b border-border/60 bg-background py-28">
      <div className="mx-auto w-full max-w-6xl px-5">
        <p className="max-w-md text-lg leading-8 text-muted-foreground">
          I work on both sides of the wire. The interface people touch, and
          the hardware.
        </p>

        <div className="relative mt-20 h-[22rem] md:mt-24">
          <svg
            viewBox="0 0 800 240"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            <motion.path
              d={TRACE_PATH}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-border"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              viewport={{ once: true }}
            />

            {/* endpoint terminals */}
            <circle cx="60" cy="170" r="3.5" className="fill-primary" />
            <circle cx="760" cy="70" r="3.5" className="fill-primary" />

            {/* moving charges, staggered so it reads as current, not a blip */}
            <circle r="4" className="fill-primary" opacity="0.5">
              <animateMotion dur="5.4s" repeatCount="indefinite" path={TRACE_PATH} />
            </circle>
            <circle r="4" className="fill-primary" opacity="0.5">
              <animateMotion
                dur="5.4s"
                begin="-1.7s"
                repeatCount="indefinite"
                path={TRACE_PATH}
              />
            </circle>
          </svg>

          <div className="absolute left-0 top-0 w-64 md:w-72">
            <NodeCallout node={nodes[0]} delay={0.4} />
          </div>

          <div className="absolute bottom-0 right-0 w-64 text-right md:w-72">
            <NodeCallout node={nodes[1]} align="right" delay={0.6} />
          </div>
        </div>
      </div>
    </section>
  )
}

function NodeCallout({
  node,
  align = "left",
  delay,
}: {
  node: (typeof nodes)[number]
  align?: "left" | "right"
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: align === "right" ? 10 : -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={align === "right" ? "flex flex-col items-end" : ""}
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {node.tag}
      </span>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
        {node.label}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{node.detail}</p>
      <span className="mt-3 font-mono text-xs text-muted-foreground/60">{node.spec}</span>
    </motion.div>
  )
}