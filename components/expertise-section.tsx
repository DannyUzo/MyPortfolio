"use client"

import { motion } from "framer-motion"
import { Cpu, Monitor } from "lucide-react"

export function ExpertiseSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

                    {/* THE SCREEN - Software */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col h-full"
                    >
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs font-mono tracking-wider text-muted-foreground uppercase">
                                <Monitor className="w-3.5 h-3.5" />
                                The Screen
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Software Architectures
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                            Building digital ecosystems that scale. From reactive frontends to high-throughput backend infrastructure using Next.js.
                        </p>

                        <ul className="space-y-4 mt-auto">
                            {[
                                "Fullstack Development",
                                "Highend Web Animations",
                                "Scalable Systems"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-foreground/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* THE PHYSICAL - Hardware */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col h-full"
                    >
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs font-mono tracking-wider text-muted-foreground uppercase">
                                <Cpu className="w-3.5 h-3.5" />
                                The Physical
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Hardware Systems
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                            Interfacing code with the real world. Designing embedded systems, power distribution monitors, and automated robotic controls.
                        </p>

                        <ul className="space-y-4 mt-auto">
                            {[
                                "Microcontrollers & IoT",
                                "Sensors & Actuators",
                                "PCB Design & Rapid Prototyping"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-foreground/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
