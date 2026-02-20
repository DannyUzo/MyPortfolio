import { Navbar } from "@/components/navbar"
import { HeroUnified } from "@/components/hero-unified"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { AIChat } from "@/components/ai-chat"
import { SectionErrorBoundary } from "@/components/section-error-boundary"
import { ChatErrorBoundary } from "@/components/chat-error-boundary"
import { ExpertiseSection } from "@/components/expertise-section"

export default function Home() {
  return (
    <main className="min-h-screen max-w-8xl">
      <SectionErrorBoundary sectionName="Navigation">
        <Navbar />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Hero">
        <HeroUnified />
      </SectionErrorBoundary>
      <SectionErrorBoundary sectionName="Expertise">
        <ExpertiseSection />
      </SectionErrorBoundary>
      <SectionErrorBoundary sectionName="Experience">
        <ExperienceSection />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Skills">
        <SkillsSection />
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
