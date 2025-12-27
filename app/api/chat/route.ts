import { type NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { resumeData } from "@/lib/resume-data"

// Initialize Gemini AI
let genAI: GoogleGenerativeAI | null = null

try {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured in environment variables")
  }
  genAI = new GoogleGenerativeAI(apiKey)
  console.log("✓ Gemini AI initialized successfully")
} catch (error) {
  console.error("✗ Failed to initialize Gemini AI:", error)
}

// Store chat sessions in memory (keyed by session ID)
const chatSessions = new Map<string, any>()

class ResumeAIService {
  private model: any
  private systemPrompt: string

  constructor() {
    if (!genAI) throw new Error("Gemini AI not initialized");

    // 1. USE THE 2025 STABLE MODEL ID
    // 2. USE systemInstruction INSTEAD OF SEEDING HISTORY
    this.model = genAI.getGenerativeModel({
      model: "gemini-3-flash",
      systemInstruction: this.buildSystemPrompt(),
      generationConfig: {
        temperature: 0.7, // Lower temperature = more consistent persona
        maxOutputTokens: 800,
      },
    });

    this.systemPrompt = this.buildSystemPrompt()
    console.log("✓ AI model configured successfully")
  }

  private buildSystemPrompt(): string {
    return `You are ${resumeData.personalInfo.name}, a ${resumeData.personalInfo.title}. You are being interviewed by a potential employer or recruiter. Speak in first person as if you ARE ${resumeData.personalInfo.name}.

PERSONALITY & TONE:
- Be confident, friendly, and professional
- Give concise but informative answers
- Show enthusiasm about your work and skills
- Be humble but showcase your competence

PERSONAL INFORMATION:
Name: ${resumeData.personalInfo.name}
Title: ${resumeData.personalInfo.title}
Email: ${resumeData.personalInfo.email}
Phone: ${resumeData.personalInfo.phone}
Location: ${resumeData.personalInfo.location}
Portfolio: ${resumeData.personalInfo.portfolio}
LinkedIn: ${resumeData.personalInfo.socialMedia.linkedin}
GitHub: ${resumeData.personalInfo.socialMedia.github}

PROFESSIONAL PROFILE:
${resumeData.profile}

EXPERIENCE:
${resumeData.professionalExperience
        .map((exp) => `• ${exp.position} at ${exp.company} (${exp.duration}) - ${exp.location}
  ${exp.description}`)
        .join("\n")}

INTERNSHIPS:
${resumeData.internships
        .map((intern) => `• ${intern.position} at ${intern.company} (${intern.duration}) - ${intern.location}
  ${intern.description}`)
        .join("\n")}

SKILLS:
Languages & Frameworks: ${resumeData.skills.languagesAndFrameworks.join(", ")}
State Management & Data: ${resumeData.skills.stateAndData.join(", ")}
Styling: ${resumeData.skills.stylingTools.join(", ")}
Tools & Platforms: ${resumeData.skills.toolsAndPlatforms.join(", ")}
Soft Skills: ${resumeData.skills.softSkills.join(", ")}

PROJECTS:
${resumeData.projects
        .map(
          (project) => `• ${project.name}: ${project.description}
  Technologies: ${project.technologies.join(", ")}`
        )
        .join("\n")}

CERTIFICATES:
${resumeData.certificates.map((cert) => `• ${cert.name} - ${cert.issuer}`).join("\n")}

EDUCATION:
${resumeData.education
        .map((edu) => `• ${edu.degree} at ${edu.institution} (${edu.duration}) - ${edu.location}`)
        .join("\n")}

IMPORTANT RULES:
1. If asked about XplicitMode or your current company, keep it brief unless they specifically ask for details
2. For non-professional questions, politely redirect: "I'd prefer to focus on discussing my professional qualifications. Is there anything specific about my experience or skills you'd like to know?"
3. If you don't know something, say: "I don't have that information handy, but feel free to contact me at ${resumeData.personalInfo.email} and I can provide more details."
4. Never break character - you ARE ${resumeData.personalInfo.name}
5. Keep responses conversational and natural, not like reading a resume`
  }

getOrCreateChatSession(sessionId: string) {
    if (!chatSessions.has(sessionId)) {
      // With systemInstruction set above, you don't need to seed the history
      const chat = this.model.startChat({
        history: [], 
      });
      chatSessions.set(sessionId, chat);
    }
    return chatSessions.get(sessionId);
  }

  async askQuestion(question: string, sessionId: string = "default"): Promise<string> {
    const chat = this.getOrCreateChatSession(sessionId);
    
    // Using a try-catch here lets us handle "Safety Blocks" gracefully
    try {
      const result = await chat.sendMessage(question);
      const response = await result.response;
      return response.text();
    } catch (e: any) {
      if (e.message?.includes("SAFETY")) {
        return "I can only discuss professional topics related to my resume. How can I help with that?";
      }
      throw e;
    }
  }

  clearSession(sessionId: string) {
    chatSessions.delete(sessionId)
    console.log(`✓ Chat session cleared: ${sessionId}`)
  }
}

// Initialize service
let aiService: ResumeAIService | null = null

try {
  if (genAI) {
    aiService = new ResumeAIService()
  }
} catch (error) {
  console.error("✗ Failed to initialize AI service:", error)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, question, sessionId } = body
    const userMessage = message || question

    // Validation
    if (!userMessage || typeof userMessage !== "string" || userMessage.trim().length === 0) {
      return NextResponse.json(
        { error: "Valid message is required" },
        { status: 400 }
      )
    }

    // Check if AI service is available
    if (!aiService) {
      return NextResponse.json(
        {
          error: "AI service unavailable",
          response: `The AI chat is temporarily unavailable. Please contact ${resumeData.personalInfo.name} directly at ${resumeData.personalInfo.email}.`,
        },
        { status: 503 }
      )
    }

    // Generate response using chat session
    const chatSessionId = sessionId || "default"
    const response = await aiService.askQuestion(userMessage, chatSessionId)

    return NextResponse.json({
      response,
      answer: response,
      sessionId: chatSessionId,
    })
  } catch (error: any) {
    console.error("✗ Chat API error:", error)

    // Handle specific Gemini API errors
    if (error?.message?.includes("API_KEY_INVALID")) {
      return NextResponse.json(
        { error: "Invalid API key configuration" },
        { status: 500 }
      )
    }

    if (error?.message?.includes("quota") || error?.message?.includes("rate limit")) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      )
    }

    // Generic error response
    return NextResponse.json(
      {
        error: "Failed to generate response",
        response: `I'm having trouble responding right now. Please contact ${resumeData.personalInfo.name} at ${resumeData.personalInfo.email}.`,
      },
      { status: 500 }
    )
  }
}

// Clear chat session endpoint
export async function DELETE(request: NextRequest) {
  try {
    const { sessionId } = await request.json()

    if (aiService && sessionId) {
      aiService.clearSession(sessionId)
      return NextResponse.json({ success: true, message: "Session cleared" })
    }

    return NextResponse.json({ success: false, message: "No session to clear" })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to clear session" },
      { status: 500 }
    )
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: aiService ? "operational" : "unavailable",
    model: "gemini-1.5-flash",
    timestamp: new Date().toISOString(),
  })
}