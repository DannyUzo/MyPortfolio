"use client"

import { Navbar } from "@/components/navbar"
import { resumeData } from "@/lib/resume-data"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Work & Projects</h1>
                    <p className="text-lg text-muted-foreground">
                        A collection of my work across Software Engineering, Embedded Systems, and Artificial Intelligence.
                    </p>
                </motion.div>

                {/* SOFTWARE PROJECTS */}
                <section id="software" className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold">Software Engineering</h2>
                        <div className="h-px bg-border flex-1" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resumeData.projects.map((project) => (
                            <div key={project.name} className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all">
                                <div>
                                    <div className="flex items-center justify-between   ">
                                        <h3 className="font-semibold text-xl mb-2">{project.name}</h3>
                                        <p className="text-muted-foreground text-sm">({project.tags})</p>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-xs text-blue-500">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-auto">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                                            Live Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* AI / ML PROJECTS */}
                <section id="ai" className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold">ML/AI Projects</h2>
                        <div className="h-px bg-border flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resumeData.aiProjects?.map((project: any) => (
                            <div key={project.title} className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all">
                                <div>
                                    <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.modelType && (
                                            <Badge variant="outline" className="border-blue-500/20 text-blue-500 bg-blue-500/5">
                                                {project.modelType}
                                            </Badge>
                                        )}
                                        {project.stack?.map((tech: string) => (
                                            <Badge key={tech} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline mt-auto">
                                        View Repository
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* HARDWARE PROJECTS */}
                <section id="hardware" className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold">Hardware Systems</h2>
                        <div className="h-px bg-border flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resumeData.hardwareProjects?.map((project: any) => (
                            <div key={project.title} className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all">
                                <div>
                                    <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                    <div className="space-y-3 mb-6">
                                        {project.components && (
                                            <div className="flex flex-wrap gap-1.5">
                                                <span className="text-xs font-mono text-muted-foreground mr-1">COMPONENTS:</span>
                                                {project.components.map((s: string) => <Badge key={s} variant="outline" className="text-[10px] py-0 h-5">{s}</Badge>)}
                                            </div>
                                        )}
                                        {project.microcontrollers && (
                                            <div className="flex flex-wrap gap-1.5">
                                                <span className="text-xs font-mono text-muted-foreground mr-1">MCU:</span>
                                                {project.microcontrollers.map((m: string) => <Badge key={m} variant="outline" className="text-[10px] py-0 h-5">{m}</Badge>)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {project.firmwareSlug ? (
                                    <Link href={`/work/${project.firmwareSlug}`} className="text-sm font-medium text-primary hover:underline mt-auto">
                                        View Firmware →
                                    </Link>
                                ) : project.github ? (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline mt-auto">
                                        View Firmware
                                    </a>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    )
}
