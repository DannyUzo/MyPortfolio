import { getPostData } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
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
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <article className="pt-32 pb-10 container mx-auto px-4 max-w-3xl">
                <Link href="/work">
                    <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
                        <ChevronLeft className="w-4 h-4 mr-2" /> Back to Work
                    </Button>
                </Link>

                <header className="mb-10">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">
                        <span className="text-primary">Hardware</span>
                        <span>/</span>
                        <span>Firmware</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap gap-4 items-center text-muted-foreground mb-6">
                        <time className="font-mono text-sm">{post.date}</time>
                        {post.tags?.length > 0 && (
                            <>
                                <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag: string) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {post.description && (
                        <p className="text-xl text-foreground font-light leading-relaxed border-l-4 border-primary pl-6 py-2 bg-muted/30 italic">
                            {post.description}
                        </p>
                    )}
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:text-foreground
                    prose-p:text-muted-foreground
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground
                    prose-li:text-muted-foreground
                    prose-code:text-primary prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                    prose-pre:p-0 prose-pre:bg-transparent prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-pre:overflow-hidden
                    prose-table:border-collapse
                    prose-th:border prose-th:border-border prose-th:bg-muted/50 prose-th:px-4 prose-th:py-2 prose-th:text-foreground
                    prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2 prose-td:text-muted-foreground
                    prose-hr:border-border
                ">
                    <MDXRemote
                        source={post.content}
                        options={{
                            mdxOptions: {
                                rehypePlugins: [rehypeHighlight as any],
                            }
                        }}
                    />
                </div>
            </article>
        </main>
    )
}
