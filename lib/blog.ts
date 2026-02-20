import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface BlogPost {
    slug: string
    title: string
    date: string
    description: string
    tags: string[]
    content: string
}

export function getSortedPostsData(): Omit<BlogPost, 'content'>[] {
    // Get file names under /posts
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory).filter((fileName) => {
        const fullPath = path.join(postsDirectory, fileName)
        // Only include .mdx files, skip subdirectories (e.g. hardware/)
        return fs.statSync(fullPath).isFile() && fileName.endsWith('.mdx')
    })

    const allPostsData = fileNames.map((fileName) => {
        // Remove ".mdx" from file name to get id
        const slug = fileName.replace(/\.mdx$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const { data } = matter(fileContents)

        return {
            slug,
            ...(data as any),
        }
    })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getPostData(slug: string): BlogPost {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents)

    return {
        slug,
        content,
        ...(data as any),
    }
}
