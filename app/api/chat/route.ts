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
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { error: "AI service failed" },
      { status: 500 }
    )
  }
}