function cosineSim(a: number[], b: number[]) {
  const dot = a.reduce((s, v, i) => s + v * b[i], 0)
  const magA = Math.sqrt(a.reduce((s, v) => s + v * v, 0))
  const magB = Math.sqrt(b.reduce((s, v) => s + v * v, 0))
  return dot / (magA * magB)
}

export function retrieveTopK(queryVec: number[], docs: any[], k = 4) {
  return docs
    .map(d => ({ ...d, score: cosineSim(queryVec, d.vector) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
}