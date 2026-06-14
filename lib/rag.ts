import { GoogleGenerativeAI } from "@google/generative-ai"
import vectors from "./resume-vectors.json"
import { retrieveTopK } from "./retriever"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
const chatModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
const embedModel = genAI.getGenerativeModel({ model: "gemini-embedding-001" })

/** Retry an async fn up to `maxRetries` times on 429 rate-limit errors. */
async function withRetry<T>(fn: () => Promise<T>, maxRetries = 3): Promise<T> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (err: any) {
      const isRateLimit = err?.status === 429 || String(err).includes("429") || String(err).includes("Too Many Requests")
      if (isRateLimit && attempt < maxRetries) {
        const delay = (attempt + 1) * 15_000  // 15s, 30s, 45s
        console.warn(`Gemini rate limited. Retrying in ${delay / 1000}s... (attempt ${attempt + 1}/${maxRetries})`)
        await new Promise(res => setTimeout(res, delay))
      } else {
        throw err
      }
    }
  }
  throw new Error("Max retries exceeded")
}

export async function answerWithRAG(question: string) {
  const queryEmbedding = await withRetry(() => embedModel.embedContent(question))

  const topChunks = retrieveTopK(
    queryEmbedding.embedding.values,
    vectors,
    5
  )

  const context = topChunks.map(c => c.text).join("\n---\n")

  const prompt = `
You are an AI assistant representing Daniel Uzodinma (also known as Danny) for job interview and portfolio review purposes.
Rules:
- Speak in first person, as if you are Daniel
- Be concise, professional, and friendly
- Only answer based on the context provided
- If the information is not in the context, say you'd love to discuss it further via email at uzodinmadaniel42@gmail.com

Context about Daniel:
${context}

Visitor's question:
${question}
`

  const result = await withRetry(() => chatModel.generateContent(prompt))

  return result.response.text()
}