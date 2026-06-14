"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { resumeData } from "@/lib/resume-data"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [state, handleSubmit] = useForm("moqoojvb")
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.succeeded) {
      toast({ title: "Message sent successfully!", description: "Thank you for reaching out. I will get back to you soon." })
      formRef.current?.reset()
      setFormData({ name: "", email: "", subject: "", message: "" })
    }

    if (state.errors) {
      toast({ title: "Error sending message", description: "Please check your form and try again.", variant: "destructive" })
    }
  }, [state.succeeded, state.errors, toast])

  const contactInfo = [
    { icon: Mail, label: "Email", value: resumeData.personalInfo.email, href: `mailto:${resumeData.personalInfo.email}` },
    { icon: Phone, label: "Phone", value: resumeData.personalInfo.phone, href: `tel:${resumeData.personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: resumeData.personalInfo.location, href: null },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: `https://github.com/${resumeData.personalInfo.socialMedia.github}` },
    { icon: Linkedin, label: "LinkedIn", href: `https://linkedin.com/in/${resumeData.personalInfo.socialMedia.linkedin}` },
    { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/+2348079328196" },
  ]

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await handleSubmit(event)
  }

  return (
    <section id="contact" className="grain-surface bg-background py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 lg:grid-cols-[22rem_minmax(0,1fr)]">
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">Open channel</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Send project details, collaboration ideas, or hardware notes. I read for context first, then respond with the next practical step.
          </p>

          <div className="mt-10 space-y-5 border-t border-border pt-8">
            {contactInfo.map((item) => (
              <div key={item.label}>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="mt-1 inline-flex items-center gap-2 text-lg text-foreground hover:text-primary">
                    <item.icon className="h-4 w-4 text-primary" /> {item.value}
                  </a>
                ) : (
                  <p className="mt-1 inline-flex items-center gap-2 text-lg text-foreground">
                    <item.icon className="h-4 w-4 text-primary" /> {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.aside>

        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border p-6 md:p-8"
        >
          <div className="mb-8 flex items-center justify-between border-b border-border pb-5">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">Message Packet</h3>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">secure form</span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Name" error={<ValidationError prefix="Name" field="name" errors={state.errors} />}>
              <Input name="name" required value={formData.name} onChange={handleInputChange} className="h-12 border-border bg-background text-base" placeholder="Your name" />
            </Field>
            <Field label="Email" error={<ValidationError prefix="Email" field="email" errors={state.errors} />}>
              <Input name="email" type="email" required value={formData.email} onChange={handleInputChange} className="h-12 border-border bg-background text-base" placeholder="you@example.com" />
            </Field>
          </div>

          <Field label="Subject" className="mt-5" error={<ValidationError prefix="Subject" field="subject" errors={state.errors} />}>
            <Input name="subject" required value={formData.subject} onChange={handleInputChange} className="h-12 border-border bg-background text-base" placeholder="What are we building?" />
          </Field>

          <Field label="Message" className="mt-5" error={<ValidationError prefix="Message" field="message" errors={state.errors} />}>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              className="flex min-h-[180px] w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Share the context, constraints, timeline, and useful links."
            />
          </Field>

          <Button type="submit" disabled={state.submitting} className="mt-7 h-12 w-full text-base">
            <Send className="mr-2 h-4 w-4" />
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, error, className = "", children }: { label: string; error: React.ReactNode; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {children}
      <div className="mt-1 text-sm text-red-400">{error}</div>
    </label>
  )
}