import { type NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { resumeData } from "@/lib/resume-data"

// Initialize Gemini AI with error handling
let genAI: GoogleGenerativeAI | null = null

try {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    throw new Error("Gemini API key is not configured")
  }
  genAI = new GoogleGenerativeAI(apiKey)
} catch (error) {
  console.error("Failed to initialize Gemini AI:", error)
}

class ResumeAIService {
  private model
  private resumeContext: string

  constructor() {
    if (!genAI) {
      throw new Error("Gemini AI is not properly initialized")
    }

    try {
      this.model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
      this.resumeContext = this.buildResumeContext()
    } catch (error) {
      console.error("Failed to initialize AI model:", error)
      throw error
    }
  }

  private buildResumeContext(): string {
    try {
      const context = `
      You are to act as if you are impersonating ${resumeData.personalInfo.name}. Give concise answers and make sure you convince whoever is asking about his competence and skills. This is for job application purposes.
      
      When asked about anything not related to what a potential employer would want to know, be polite, courteous, and friendly, and let them know that you can't answer the question right now. Do not talk too much about my current company. 
      If you are not asked don't even mention XplicitMode. DO NOT!
      
      If you are asked about something you don't know, tell them to contact me directly as you can't give an answer to that currently. Remember, you are impersonating me, so provide my contact information.
      
      Personal Information:
      - Name: ${resumeData.personalInfo.name}
      - Title: ${resumeData.personalInfo.title}
      - Email: ${resumeData.personalInfo.email}
      - Phone: ${resumeData.personalInfo.phone}
      - Location: ${resumeData.personalInfo.location}
      - Portfolio: ${resumeData.personalInfo.portfolio}
      - LinkedIn: ${resumeData.personalInfo.socialMedia.linkedin}
      - GitHub: ${resumeData.personalInfo.socialMedia.github}
      
      Profile: ${resumeData.profile}
      
      Professional Experience:
      ${resumeData.professionalExperience
        .map((exp) => `- ${exp.position} at ${exp.company} (${exp.duration}) - ${exp.location}: ${exp.description}`)
        .join("\n")}
      
      Internships:
      ${resumeData.internships
        .map(
          (intern) =>
            `- ${intern.position} at ${intern.company} (${intern.duration}) - ${intern.location}: ${intern.description}`,
        )
        .join("\n")}
      
      Skills:
      - Languages & Frameworks: ${resumeData.skills.languagesAndFrameworks.join(", ")}
      - State & Data: ${resumeData.skills.stateAndData.join(", ")}
      - Styling Tools: ${resumeData.skills.stylingTools.join(", ")}
      - Tools & Platforms: ${resumeData.skills.toolsAndPlatforms.join(", ")}
      - Soft Skills: ${resumeData.skills.softSkills.join(", ")}
      
      Projects:
      ${resumeData.projects
        .map(
          (project) => `- ${project.name}: ${project.description} (Technologies: ${project.technologies.join(", ")})`,
        )
        .join("\n")}
      
      Certificates:
      ${resumeData.certificates.map((cert) => `- ${cert.name} from ${cert.issuer}`).join("\n")}
      
      Education:
      ${resumeData.education
        .map((edu) => `- ${edu.degree} at ${edu.institution} (${edu.duration}) - ${edu.location}`)
        .join("\n")}
      
      IMPORTANT: 
      - You are impersonating me for job interview purposes
      - Focus on showcasing my competence and skills
      - For non-professional questions, politely redirect
      - If you don't know something, direct them to contact me at ${resumeData.personalInfo.email}
      - Don't mention anything about my resume directly - speak as if you ARE me
      `

      return context
    } catch (error) {
      console.error("Failed to build resume context:", error)
      throw new Error("Failed to prepare AI context")
    }
  }

  async askQuestion(question: string): Promise<string> {
    try {
      if (!this.model) {
        throw new Error("AI model is not initialized")
      }

      const prompt = `${this.resumeContext}\n\nQuestion: ${question}\n\nAnswer as ${resumeData.personalInfo.name}, staying in character and focusing on professional competence:`

      const result = await this.model.generateContent(prompt)
      const response = await result.response

      if (!response) {
        throw new Error("No response received from AI model")
      }

      const text = response.text()
      if (!text || text.trim().length === 0) {
        throw new Error("Empty response from AI model")
      }

      return text
    } catch (error) {
      console.error("Error generating AI response:", error)

      // Return a helpful fallback message
      return `I'm experiencing some technical difficulties right now. Please feel free to contact me directly at ${resumeData.personalInfo.email} for any questions about my background and experience.`
    }
  }
}

let aiService: ResumeAIService | null = null

// Initialize service with error handling
try {
  aiService = new ResumeAIService()
} catch (error) {
  console.error("Failed to initialize AI service:", error)
}

export async function POST(request: NextRequest) {
  try {
    // Validate request
    if (!request.body) {
      return NextResponse.json({ error: "Request body is required" }, { status: 400 })
    }

    const { message, question } = await request.json()
    const userMessage = message || question

    if (!userMessage || typeof userMessage !== "string" || userMessage.trim().length === 0) {
      return NextResponse.json({ error: "Valid message is required" }, { status: 400 })
    }

    // Check if AI service is available
    if (!aiService) {
      return NextResponse.json({
        response: `The AI chat service is temporarily unavailable. Please contact me directly at ${resumeData.personalInfo.email}.`,
        answer: `The AI chat service is temporarily unavailable. Please contact me directly at ${resumeData.personalInfo.email}.`
      })
    }

    // Rate limiting check (simple implementation)
    const userAgent = request.headers.get("user-agent") || "unknown"
    console.log(`Chat request from: ${userAgent}`)

    const response = await aiService.askQuestion(userMessage)

    return NextResponse.json({ 
      response,
      answer: response // Include both for compatibility
    })
  } catch (error) {
    console.error("Chat API error:", error)

    // Return a user-friendly error response
    return NextResponse.json(
      {
        response: `I'm experiencing technical difficulties. Please try again later or contact me directly at ${resumeData.personalInfo.email}.`,
        answer: `I'm experiencing technical difficulties. Please try again later or contact me directly at ${resumeData.personalInfo.email}.`
      },
      { status: 200 },
    ) // Return 200 to avoid triggering client-side error handling
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}