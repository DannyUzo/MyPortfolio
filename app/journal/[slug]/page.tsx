import { getPostData, getSortedPostsData } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export async function generateStaticParams() {
    const posts = getSortedPostsData()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostData(params.slug)

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <article className="pt-32 pb-10 container mx-auto px-4 max-w-3xl">
                <Link href="/journal">
                    <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
                        <ChevronLeft className="w-4 h-4 mr-2" /> Back to Journal
                    </Button>
                </Link>

                <header className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex gap-4 items-center text-muted-foreground mb-6">
                        <time className="font-mono text-sm">{post.date}</time>
                        <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                        <div className="flex gap-2">
                            {post.tags?.map(tag => (
                                <span key={tag} className="text-sm bg-secondary px-2 py-0.5 rounded text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-xl text-foreground font-light leading-relaxed border-l-4 border-primary pl-6 py-2 bg-muted/30 italic">
                        {post.description}
                    </p>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-code:text-primary prose-code:bg-muted/50 prose-code:px-1 prose-code:rounded prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border">
                    <MDXRemote source={post.content} />
                </div>
            </article>
        </main>
    )
}
