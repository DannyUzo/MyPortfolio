"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/lib/resume-data"
import Image from "next/image"

export function ExperienceSection() {
  const allExperience = [...resumeData.professionalExperience, ...resumeData.internships]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in frontend development and the impact I've made
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 border-border bg-card">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex flex-col items-center ">
                        <div className="bg-transparent border border-border p-3 rounded-lg">
                          <div
                            className={`w-12 h-12  object-cover relative overflow-hidden bg-white border rounded-lg flex items-center justify-center flex-shrink-0`}
                          >
                            <Image src={exp.image} alt={exp.company} fill className="object-cover" />
                          </div>
                        </div>

                        <div className="bg-border w-[0.5px] h-36" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.company}</h3>
                        <h4 className="text-lg text-primary font-semibold mb-2">{exp.position}</h4>
                        <div className="flex flex-col gap-2 mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4" />
                            {exp.duration.includes("present") ? (
                              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 text-xs border-blue-200 dark:border-blue-800">
                                PRESENT
                              </Badge>
                            ) : (
                              <span className="uppercase tracking-wide">{exp.duration}</span>
                            )}
                          </div>

                        </div>
                        <p className="text-muted-foreground leading-relaxed">{exp.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
