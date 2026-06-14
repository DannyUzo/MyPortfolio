import Link from "next/link"
import { getSortedPostsData } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { getLogbookPosts } from "@/lib/sanity"

export default async function BlogIndex() {
  const sanityPosts = await getLogbookPosts()
  const mdxPosts = getSortedPostsData().map((post) => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.description,
    publishedAt: post.date,
    tags: post.tags,
    engineeringDomain: undefined,
  }))
  const posts = sanityPosts.length ? sanityPosts : mdxPosts

  return (
    <main className="grain-surface min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-36 md:pb-24 md:pt-40">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Engineering Logbook
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Frontend systems, robotic mechanisms, and field notes from the bench.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-muted-foreground">
            A technical journal for implementation details, hardware experiments,
            motion-control notes, and production-grade web engineering decisions.
          </p>
        </div>

        <div className="mt-14 grid gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group grid gap-4 border-t border-border py-7 transition-colors hover:border-blue-400/30 dark:hover:border-blue-300/25 md:grid-cols-[1fr_10rem]"
            >
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-blue-500/70 dark:group-hover:text-blue-300/70">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground dark:bg-white/[0.02]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-right">
                <time>{formatDate(post.publishedAt)}</time>
                {post.engineeringDomain ? (
                  <p className="mt-2 text-foreground/80">{post.engineeringDomain}</p>
                ) : null}
              </div>
            </Link>
          ))}

          {posts.length === 0 && (
            <p className="border-t border-border py-10 text-muted-foreground">No logbook entries found.</p>
          )}
        </div>
      </section>
    </main>
  )
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}