import { resumeData } from "./resume-data"

const { personalInfo, profile, professionalExperience, internships, skills, projects, hardwareProjects, aiProjects, certificates, education } = resumeData

export const resumeChunks: string[] = [
  // --- Personal info ---
  `Personal Info: Name: ${personalInfo.name}. Title: ${personalInfo.title}. Email: ${personalInfo.email}. Location: ${personalInfo.location}. Portfolio: ${personalInfo.portfolio}. GitHub: ${personalInfo.socialMedia.github}. LinkedIn: ${personalInfo.socialMedia.linkedin}.`,

  // --- Profile summary ---
  `Profile: ${profile}`,

  // --- Professional experience ---
  ...professionalExperience.map(
    e => `Professional Experience: ${e.position} at ${e.company} (${e.duration}, ${e.location}). ${e.description}`
  ),

  // --- Internships ---
  ...internships.map(
    i => `Internship: ${i.position} at ${i.company} (${i.duration}, ${i.location}). ${i.description}`
  ),

  // --- Skills ---
  `Skills - Languages & Frameworks: ${skills.languagesAndFrameworks.join(", ")}.`,
  `Skills - State Management & Data Fetching: ${skills.stateAndData.join(", ")}.`,
  `Skills - Styling Tools: ${skills.stylingTools.join(", ")}.`,
  `Skills - Tools & Platforms: ${skills.toolsAndPlatforms.join(", ")}.`,
  `Skills - ML & AI Tools: ${skills.mlTools.join(", ")}.`,
  `Skills - Embedded & Robotics Tools: ${skills.roboticTools.join(", ")}.`,
  `Soft Skills: ${skills.softSkills.join(", ")}.`,

  // --- Software projects ---
  ...projects.map(
    p => `Software Project: ${p.name}. ${p.description} Technologies: ${p.technologies.join(", ")}. Live: ${p.link || "N/A"}. GitHub: ${p.github}.`
  ),

  // --- AI / ML projects ---
  ...aiProjects.map(
    p => `AI/ML Project: ${p.title}. ${p.description} Stack: ${p.stack.join(", ")}. Model type: ${p.modelType}. Research interests: ${p.researchInterests.join(", ")}. GitHub: ${p.github}.`
  ),

  // --- Hardware projects ---
  ...hardwareProjects.map(
    p => `Hardware Project: ${p.title}. ${p.description} Stack: ${p.stack.join(", ")}. Microcontrollers: ${p.microcontrollers.join(", ")}. Firmware stack: ${p.firmwareStack.join(", ")}. GitHub: ${p.github}.`
  ),

  // --- Education ---
  ...education.map(
    e => `Education: ${e.degree} at ${e.institution} (${e.duration}), ${e.location}.`
  ),

  // --- Certificates ---
  ...certificates.map(
    c => `Certificate: ${c.name} — issued by ${c.issuer}.`
  ),
]