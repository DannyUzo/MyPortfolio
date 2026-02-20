import Link from "next/link"
import { getSortedPostsData } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogIndex() {
    const posts = getSortedPostsData()

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <section className="pt-32 pb-10 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Engineering Blog</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Thoughts on software architecture, embedded systems, and artificial intelligence.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/journal/${post.slug}`}>
                            <Card className="hover:border-primary/50 transition-all duration-300 bg-card border-border cursor-pointer">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <CardTitle className="text-2xl text-foreground font-semibold">
                                            {post.title}
                                        </CardTitle>
                                        <span className="text-sm text-muted-foreground font-mono">
                                            {post.date}
                                        </span>
                                    </div>
                                    <CardDescription className="text-lg">
                                        {post.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-2">
                                        {post.tags?.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}

                    {posts.length === 0 && (
                        <p className="text-center text-muted-foreground">No posts found.</p>
                    )}
                </div>
            </section>
        </main>
    )
}
