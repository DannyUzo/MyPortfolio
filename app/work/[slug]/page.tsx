import { getPostData } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import rehypeHighlight from "rehype-highlight"
// import "highlight.js/styles/github-dark.css"
import { resumeData } from "@/lib/resume-data"

type Params = { slug: string }

export async function generateStaticParams() {
  return resumeData.hardwareProjects
    ?.filter((project: any) => project.firmwareSlug)
    .map((project: any) => ({ slug: project.firmwareSlug })) ?? []
}

export default function FirmwarePage({ params }: { params: Params }) {
  const post = getPostData(`hardware/${params.slug}`)

  return (
    <main className="min-h-screen grain-surface text-foreground">
      <Navbar />

      <article className="mx-auto w-full max-w-7xl px-5 pb-24 pt-32">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-primary">Work</Link>
            <span>/</span>
            <span className="text-primary">Firmware</span>
          </nav>

          <header>
            <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <time>{post.date}</time>
              {post.tags?.map((tag: string) => (
                <span key={tag} className="rounded-full border border-primary/20 px-3 py-1 text-primary">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-5xl">
              {post.title}
            </h1>

            {post.description ? (
              <p className="mt-7 border-l-2 border-primary pl-6 text-xl leading-8 text-muted-foreground">
                {post.description}
              </p>
            ) : null}
          </header>
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(14rem,1fr)] lg:items-start">
          <div className="min-w-0 prose prose-xl prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-muted-foreground prose-code:text-primary prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-base prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-pre:p-0 prose-pre:bg-transparent prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-pre:overflow-hidden prose-th:border prose-th:border-border prose-th:bg-muted/50 prose-th:px-4 prose-th:py-2 prose-th:text-foreground prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2 prose-td:text-muted-foreground prose-hr:border-border">
            <MDXRemote
              source={post.content}
              options={{ mdxOptions: { rehypePlugins: [rehypeHighlight as any] } }}
            />
          </div>

          <aside className="lg:sticky lg:top-24 lg:w-full">
            <div className="space-y-7 border-t border-border pt-6">
              <section>
                <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Context</h2>
                <p className="text-base leading-7 text-muted-foreground">
                  Firmware notes, hardware assumptions, implementation details, and testing observations for this build.
                </p>
              </section>

              <Link href="/work" className="inline-flex text-base font-medium text-primary hover:underline">
                Back to Work
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}