export type SanityImage = {
  alt?: string
  caption?: string
  asset?: {
    _ref?: string
    url?: string
  }
}

export type PortableTextChild = {
  _key: string
  _type: "span"
  text?: string
  marks?: string[]
}

export type PortableTextBlock = {
  _key: string
  _type: "block" | "code" | "image"
  style?: "normal" | "h2" | "h3" | "blockquote"
  listItem?: "bullet" | "number"
  level?: number
  children?: PortableTextChild[]
  markDefs?: Array<{ _key: string; _type: string; href?: string }>
  code?: string
  language?: "typescript" | "python" | "cpp" | string
  filename?: string
  asset?: SanityImage["asset"]
  alt?: string
  caption?: string
}

export type LogbookPost = {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  engineeringDomain?: "hardware" | "software"
  hardwareUsed?: string[]
  repositoryUrl?: string
  tags?: string[]
  heroImage?: SanityImage
  body?: PortableTextBlock[]
  relatedPosts?: Array<Pick<LogbookPost, "title" | "slug" | "excerpt">>
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01"

const postProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  engineeringDomain,
  hardwareUsed,
  repositoryUrl,
  tags,
  heroImage,
  body,
  "relatedPosts": relatedPosts[]->{
    title,
    "slug": slug.current,
    excerpt
  }
}`

async function sanityFetch<T>(query: string, params: Record<string, string> = {}) {
  if (!projectId) return null

  const searchParams = new URLSearchParams({ query, ...params })
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?${searchParams}`
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5000)

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 },
      signal: controller.signal,
    })

    if (!response.ok) return null

    const payload = (await response.json()) as { result: T }
    return payload.result
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

export async function getLogbookPosts() {
  return (
    (await sanityFetch<LogbookPost[]>(
      `*[_type == "post"] | order(publishedAt desc) ${postProjection}`,
    )) || []
  )
}

export async function getLogbookPost(slug: string) {
  return sanityFetch<LogbookPost | null>(
    `*[_type == "post" && slug.current == $slug][0] ${postProjection}`,
    { "$slug": JSON.stringify(slug) },
  )
}

export function imageUrlFor(image?: SanityImage, options = "w=1600&fit=max&auto=format") {
  if (!image?.asset) return null
  if (image.asset.url) return `${image.asset.url}?${options}`
  if (!image.asset._ref || !projectId) return null

  const [, id, dimensions, format] = image.asset._ref.split("-")
  if (!id || !dimensions || !format) return null

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}?${options}`
}
