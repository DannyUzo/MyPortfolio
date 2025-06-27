import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ChatSection } from "@/components/chat-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { AIChat } from "@/components/ai-chat"
import { SectionErrorBoundary } from "@/components/section-error-boundary"
import { ChatErrorBoundary } from "@/components/chat-error-boundary"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SectionErrorBoundary sectionName="Navigation">
        <Navbar />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Hero">
        <HeroSection />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="chat"
      >
        <ChatSection />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Experience">
        <ExperienceSection />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Skills">
        <SkillsSection />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Projects">
        <ProjectsSection />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Contact">
        <ContactSection />
      </SectionErrorBoundary>

      <ChatErrorBoundary>
        <AIChat />
      </ChatErrorBoundary>
    </main>
  )
}
