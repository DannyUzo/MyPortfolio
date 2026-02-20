import { resumeData } from "./resume-data.ai"

export const resumeChunks = [
  `Profile: ${resumeData.profile}`,

  ...resumeData.professionalExperience.map(
    e => `Experience: ${e.position} at ${e.company}. ${e.description}`
  ),

  ...resumeData.projects.map(
    p => `Project: ${p.name}. ${p.description}. Tech: ${p.technologies.join(", ")}`
  ),

  `Skills: ${resumeData.skills.languagesAndFrameworks.join(", ")}`
]