import * as dotenv from "dotenv"
dotenv.config({ path: ".env.local" })
// import fetch from "node-fetch"
import * as fs from "fs"
import * as path from "path"
import { resumeChunks } from "../lib/resume-chunks"

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) throw new Error("GEMINI_API_KEY not defined")

async function embedText(text: string) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: { parts: [{ text }] }
      }),
    }
  )
  if (!res.ok) throw new Error(`Embed failed: ${res.status} ${await res.text()}`)
  const json = await res.json()
  return json.embedding.values as number[]
}

async function run() {
  const vectors = []
  for (const text of resumeChunks) {
    const vector = await embedText(text)
    vectors.push({ text, vector })
  }
  const outPath = path.join(process.cwd(), "lib/resume-vectors.json")
  fs.writeFileSync(outPath, JSON.stringify(vectors, null, 2))
  console.log("✅ Done, saved to", outPath)
}

run().catch(console.error)