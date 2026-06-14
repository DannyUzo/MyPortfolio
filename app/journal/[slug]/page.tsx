import type React from "react"
import { getPostData, getSortedPostsData } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { Github } from "lucide-react"
import { getLogbookPost, getLogbookPosts, imageUrlFor, type LogbookPost } from "@/lib/sanity"
import { PortableTextRenderer } from "@/components/portable-text-renderer"

export async function generateStaticParams() {
  const sanityPosts = await getLogbookPosts()
  const mdxPosts = getSortedPostsData()
  const posts = [...sanityPosts, ...mdxPosts]

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const sanityPost = await getLogbookPost(params.slug)

  if (sanityPost) {
    return <SanityPostPage post={sanityPost} />
  }

  const post = getPostData(params.slug)

  return (
    <main className="grain-surface min-h-screen bg-background text-foreground">
      <Navbar />
      <ArticleShell
        title={post.title}
        excerpt={post.description}
        publishedAt={post.date}
        tags={post.tags}
      >
        <div className="prose prose-xl max-w-none prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-foreground prose-a:underline prose-a:decoration-blue-400/25 prose-a:underline-offset-4 hover:prose-a:text-blue-500/70 prose-code:rounded prose-code:border prose-code:border-border prose-code:bg-muted/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-pre:bg-card dark:prose-invert dark:hover:prose-a:text-blue-300/70 dark:prose-pre:bg-[#111418]">
          <MDXRemote source={post.content} />
        </div>
      </ArticleShell>
    </main>
  )
}

function SanityPostPage({ post }: { post: LogbookPost }) {
  return (
    <main className="grain-surface min-h-screen bg-background text-foreground">
      <Navbar />
      <ArticleShell
        title={post.title}
        excerpt={post.excerpt}
        publishedAt={post.publishedAt}
        tags={post.tags}
        engineeringDomain={post.engineeringDomain}
        hardwareUsed={post.hardwareUsed}
        repositoryUrl={post.repositoryUrl}
        heroImage={post.heroImage}
        relatedPosts={post.relatedPosts}
      >
        <PortableTextRenderer value={post.body} />
      </ArticleShell>
    </main>
  )
}

function ArticleShell({
  title,
  excerpt,
  publishedAt,
  tags,
  engineeringDomain,
  hardwareUsed,
  repositoryUrl,
  heroImage,
  relatedPosts,
  children,
}: {
  title: string
  excerpt: string
  publishedAt: string
  tags?: string[]
  engineeringDomain?: string
  hardwareUsed?: string[]
  repositoryUrl?: string
  heroImage?: LogbookPost["heroImage"]
  relatedPosts?: LogbookPost["relatedPosts"]
  children: React.ReactNode
}) {
  const heroSrc = imageUrlFor(heroImage)

  return (
    <article className="mx-auto w-full max-w-7xl px-5 pb-24 pt-36 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-blue-500/70 dark:hover:text-blue-300/70">Home</Link>
          <span>/</span>
          <Link href="/journal" className="transition-colors hover:text-blue-500/70 dark:hover:text-blue-300/70">journal</Link>
          <span>/</span>
          <span className="truncate text-foreground/70">{title}</span>
        </nav>

        <header>
          <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <time>{formatDate(publishedAt)}</time>
            {engineeringDomain ? (
              <span className="rounded-full border border-border bg-background/40 px-3 py-1 text-foreground/80 dark:bg-white/[0.02]">
                {engineeringDomain}
              </span>
            ) : null}
          </div>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="mt-7 text-xl leading-8 text-muted-foreground">
            {excerpt}
          </p>
        </header>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card/80 shadow-sm dark:bg-zinc-900/80 dark:shadow-none">
          {heroSrc ? (
            <img src={heroSrc} alt={heroImage?.alt || ""} className="aspect-[16/9] h-full w-full object-cover" />
          ) : (
            <div className="flex aspect-[16/9] items-center justify-center bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_45%),linear-gradient(135deg,#f8fafc,#e5e7eb)] px-6 text-center dark:bg-[radial-gradient(circle_at_50%_0%,rgba(103,232,249,0.16),transparent_45%),linear-gradient(135deg,#151922,#0f1115)]">
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-foreground/70 dark:text-zinc-300/80">
                Engineering Logbook
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto mt-14 grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(14rem,1fr)] lg:items-start">
        <div className="min-w-0">{children}</div>
        <aside className="lg:sticky lg:top-24 lg:w-full">
          <div className="space-y-8 border-t border-border pt-6">
            <SidebarSection title="Author">
              <p className="text-sm leading-6 text-muted-foreground">
                Uzodinma Daniel writes about frontend architecture, embedded systems,
                robotics experiments, and the practical overlap between software and machines.
              </p>
            </SidebarSection>

            {tags?.length ? (
              <SidebarSection title="Tags">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground dark:bg-white/[0.02]">
                      {tag}
                    </span>
                  ))}
                </div>
              </SidebarSection>
            ) : null}

            {hardwareUsed?.length ? (
              <SidebarSection title="Hardware">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {hardwareUsed.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </SidebarSection>
            ) : null}

            {repositoryUrl ? (
              <Link
                href={repositoryUrl}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-blue-500/70 dark:hover:text-blue-300/70"
              >
                <Github className="h-4 w-4" />
                View implementation
              </Link>
            ) : null}

            {relatedPosts?.length ? (
              <SidebarSection title="Related">
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link key={related.slug} href={`/journal/${related.slug}`} className="group block">
                      <p className="text-sm font-medium text-foreground transition-colors group-hover:text-blue-500/70 dark:group-hover:text-blue-300/70">
                        {related.title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">
                        {related.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </SidebarSection>
            ) : null}
          </div>
        </aside>
      </div>
    </article>
  )
}

function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{title}</h2>
      {children}
    </section>
  )
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}