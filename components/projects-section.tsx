"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/lib/resume-data"
import Link from "next/link"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col justify-between hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground mb-2">{project.name}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/20 dark:border-primary/30 text-primary hover:bg-primary/10 dark:hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href={project.github}>
                      <Button size="sm" variant="outline" className="flex-1 border-border hover:bg-accent">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </Link>
                    <Link href={project.link}>
                      <Button size="sm" className={`flex-1 bg-primary hover:bg-primary/90 text-primary-foreground ${project.link === "" && "cursor-not-allowed"}`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </Link>
                      {project.link === "" && ( <p className="text-[9px] text-orange-400 mt-1">Live Demo not available.</p>)}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
