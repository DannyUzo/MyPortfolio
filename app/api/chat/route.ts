import { NextRequest, NextResponse } from "next/server"
import { answerWithRAG } from "@/lib/rag"

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Message required" }, { status: 400 })
  }

  try {
    const answer = await answerWithRAG(message)
    return NextResponse.json({ answer })
  } catch (e: any) {
    console.error(e)
    const isRateLimit = e?.status === 429 || String(e).includes("429") || String(e).includes("Too Many Requests")
    if (isRateLimit) {
      return NextResponse.json(
        { answer: "I'm getting a lot of questions right now and hit a rate limit. Please try again in about a minute!" },
        { status: 200 }  // return 200 so the UI shows the message, not an error
      )
    }
    return NextResponse.json(
      { error: "AI service failed" },
      { status: 500 }
    )
  }
}