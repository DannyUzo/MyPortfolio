import Link from "next/link"
import { ArrowUpRight, Cpu, Github, Linkedin, Mail, MapPin, Monitor, RadioTower } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { resumeData } from "@/lib/resume-data"

const focusAreas = [
  {
    title: "Frontend Systems",
    description:
      "I design resilient product interfaces with typed data flow, reusable component boundaries, responsive layouts, and interaction states that stay clear under pressure.",
    icon: Monitor,
  },
  {
    title: "Embedded Hardware",
    description:
      "I work with sensors, microcontrollers, firmware, and automation logic, then document the decisions so another engineer can reproduce the build path.",
    icon: Cpu,
  },
  {
    title: "Engineering Notes",
    description:
      "The logbook is where I connect implementation detail with field learning: frontend architecture, mechatronics experiments, AI systems, and practical debugging.",
    icon: RadioTower,
  },
]

const quickFacts = [
  { label: "Base", value: resumeData.personalInfo.location },
  { label: "Discipline", value: "Mechatronics Engineering" },
  { label: "Current focus", value: "Frontend, robotics, embedded systems" },
  { label: "Tooling", value: "Next.js, TypeScript, C++, Python, ESP32" },
]

export default function AboutPage() {
  const currentExperience = resumeData.professionalExperience[0]
  const education = resumeData.education[0]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="grain-surface border-b border-border/60 pt-36 md:pt-40">
        <div className="mx-auto w-full max-w-[1220px] px-6 pb-20">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-blue-300/70">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">About</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Profile</p>
              <h1 className="mt-5 text-4xl font-black leading-[1.12] tracking-tight text-foreground md:text-6xl">
                Frontend engineer building at the edge of software and machines.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">
                {resumeData.profile}
              </p>
            </div>

            <aside className="rounded-lg border border-border bg-card/80 p-6 shadow-sm dark:bg-card/60 dark:shadow-none">
              <div className="border-b border-border pb-5">
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Currently</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {currentExperience.position}
                </h2>
                <p className="mt-2 text-base text-muted-foreground">{currentExperience.company}</p>
              </div>

              <div className="space-y-5 py-6">
                {quickFacts.map((fact) => (
                  <div key={fact.label}>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{fact.label}</p>
                    <p className="mt-1 text-base leading-7 text-foreground/90">{fact.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 border-t border-border pt-5">
                <Link
                  href={`mailto:${resumeData.personalInfo.email}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-blue-300/25 hover:text-blue-300/70"
                  aria-label="Email Daniel"
                >
                  <Mail className="h-4 w-4" />
                </Link>
                <Link
                  href="https://github.com/DannyUzo"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-blue-300/25 hover:text-blue-300/70"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </Link>
                <Link
                  href="https://linkedin.com/in/daniel-uzodinma-6ba3b7293"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-blue-300/25 hover:text-blue-300/70"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-20">
        <div className="mx-auto grid w-full max-w-[1220px] gap-10 px-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Operating model</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              How I think about the work.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area.title} className="bg-card p-6">
                <div className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary">
                  <area.icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">{area.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grain-surface py-20">
        <div className="mx-auto grid w-full max-w-[1220px] gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Timeline</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Background and current direction.
            </h2>

            <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card/70">
              <div className="grid gap-5 border-b border-border p-6 md:grid-cols-[9rem_minmax(0,1fr)]">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Now</p>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">{currentExperience.company}</h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">{currentExperience.desc}</p>
                </div>
              </div>
              <div className="grid gap-5 p-6 md:grid-cols-[9rem_minmax(0,1fr)]">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Education</p>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">{education.degree}</h3>
                  <p className="mt-2 flex items-center gap-2 text-base leading-7 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {education.institution}, {education.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-lg border border-border bg-card/80 p-6 lg:self-start">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Next</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Follow the engineering logbook.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              I use the journal to turn builds into useful records: what worked, what failed, what changed, and what I would repeat.
            </p>
            <Link
              href="/journal"
              className="mt-6 inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-blue-300/70"
            >
              Read the logbook
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  )
}