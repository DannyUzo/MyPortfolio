"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"
import { useToast } from '@/components/ui/use-toast'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { resumeData } from "@/lib/resume-data"
import { FaWhatsapp } from "react-icons/fa"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [state, handleSubmit] = useForm("moqoojvb");

  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form data function
  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for reaching out. I will get back to you soon.',
        variant: 'default',
      });
      
      // Reset both form ref and form data state
      if (formRef.current) {
        formRef.current.reset();
      }
      resetFormData();
    }
    
    // Handle form errors
    if (state.errors) {
      toast({
        title: 'Error sending message',
        description: 'Please check your form and try again.',
        variant: 'destructive',
      });
    }
  }, [state.succeeded, state.errors, toast]);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: resumeData.personalInfo.email,
      href: `mailto:${resumeData.personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: resumeData.personalInfo.phone,
      href: `tel:${resumeData.personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: resumeData.personalInfo.location,
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: resumeData.personalInfo.socialMedia.github,
      href: `https://github.com/${resumeData.personalInfo.socialMedia.github}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: resumeData.personalInfo.socialMedia.linkedin,
      href: `https://linkedin.com/in/${resumeData.personalInfo.socialMedia.linkedin}`,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "",
      href: `https://wa.me/+2348079328196`,
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Custom form submit handler
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20 dark:to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg dark:hover:shadow-2xl transition-shadow duration-300 bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-8">Get In Touch</h3>

                  <div className="space-y-6 mb-8">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-foreground hover:text-primary transition-colors break-words whitespace-pre-line">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground break-words whitespace-pre-line">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Connect With Me</h4>
                    <div className="flex gap-4">
                      {socialLinks.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                        >
                          <item.icon className="w-6 h-6 text-primary" />
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg dark:hover:shadow-2xl transition-shadow duration-300 bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-8">Send Me a Message</h3>

                  <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-background border-border"
                          placeholder="Your name"
                        />
                        <ValidationError 
                          prefix="Name" 
                          field="name" 
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-background border-border"
                          placeholder="your.email@example.com"
                        />
                        <ValidationError 
                          prefix="Email" 
                          field="email" 
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-background border-border"
                        placeholder="What's this about?"
                      />
                      <ValidationError 
                        prefix="Subject" 
                        field="subject" 
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="flex min-h-[120px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell me about your project or just say hello!"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                    >
                      {state.submitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}