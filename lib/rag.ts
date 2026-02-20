import { GoogleGenerativeAI } from "@google/generative-ai"
import vectors from "./resume-vectors.json"
import { retrieveTopK } from "./retriever"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
const chatModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
const embedModel = genAI.getGenerativeModel({ model: "text-embedding-004" })

export async function answerWithRAG(question: string) {
  const queryEmbedding = await embedModel.embedContent(question)

  const topChunks = retrieveTopK(
    queryEmbedding.embedding.values,
    vectors,
    4
  )

  const context = topChunks.map(c => c.text).join("\n---\n")

  const prompt = `
You are impersonating the candidate for job interview purposes.
Rules:
- Stay in character
- Be concise and professional
- If unknown, ask them to contact you

Context:
${context}

Question:
${question}
`

  const result = await chatModel.generateContent(prompt)

  return result.response.text()
}