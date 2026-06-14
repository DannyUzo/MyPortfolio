import type React from "react"
import Link from "next/link"
import hljs from "highlight.js/lib/core"
import cpp from "highlight.js/lib/languages/cpp"
import python from "highlight.js/lib/languages/python"
import typescript from "highlight.js/lib/languages/typescript"
import { imageUrlFor, type PortableTextBlock, type PortableTextChild } from "@/lib/sanity"

hljs.registerLanguage("cpp", cpp)
hljs.registerLanguage("python", python)
hljs.registerLanguage("typescript", typescript)

const languageLabels: Record<string, string> = {
  cpp: "C++",
  python: "Python",
  typescript: "TypeScript",
}

type Props = {
  value?: PortableTextBlock[]
}

export function PortableTextRenderer({ value = [] }: Props) {
  const grouped = groupListItems(value)

  return (
    <div className="logbook-prose max-w-none">
      {grouped.map((node) => {
        if ("items" in node) {
          const ListTag = node.type === "number" ? "ol" : "ul"

          return (
            <ListTag
              key={node.key}
              className={
                node.type === "number"
                  ? "my-6 list-decimal space-y-2 pl-6 text-muted-foreground"
                  : "my-6 list-disc space-y-2 pl-6 text-muted-foreground"
              }
            >
              {node.items.map((item) => (
                <li key={item._key} className="pl-1 leading-8 marker:text-muted-foreground/70">
                  {renderChildren(item)}
                </li>
              ))}
            </ListTag>
          )
        }

        return renderBlock(node)
      })}
    </div>
  )
}

function renderBlock(block: PortableTextBlock) {
  if (block._type === "code") return <CodeWindow key={block._key} block={block} />

  if (block._type === "image") {
    const src = imageUrlFor({ asset: block.asset })
    if (!src) return null

    return (
      <figure key={block._key} className="my-10 overflow-hidden rounded-xl border border-border bg-card/80 dark:bg-zinc-900/70">
        <div className="aspect-[16/9] w-full">
          <img
            src={src}
            alt={block.alt || ""}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        {block.caption ? (
          <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    )
  }

  const children = renderChildren(block)

  if (block.style === "h2") {
    return (
      <h2 key={block._key} className="mb-4 mt-12 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {children}
      </h2>
    )
  }

  if (block.style === "h3") {
    return (
      <h3 key={block._key} className="mb-3 mt-9 text-xl font-semibold tracking-tight text-foreground">
        {children}
      </h3>
    )
  }

  if (block.style === "blockquote") {
    return (
      <blockquote key={block._key} className="my-8 border-l-2 border-border pl-5 text-lg text-foreground/85">
        {children}
      </blockquote>
    )
  }

  return (
    <p key={block._key} className="my-5 text-base leading-8 text-muted-foreground md:text-lg">
      {children}
    </p>
  )
}

function renderChildren(block: PortableTextBlock) {
  return block.children?.map((child) => renderSpan(child, block)) || null
}

function renderSpan(child: PortableTextChild, block: PortableTextBlock) {
  const marks = child.marks || []
  let content: React.ReactNode = child.text

  for (const mark of marks) {
    if (mark === "strong") content = <strong className="font-semibold text-foreground">{content}</strong>
    if (mark === "em") content = <em className="text-foreground/85">{content}</em>
    if (mark === "code") {
      content = (
        <code className="rounded border border-border bg-muted/70 px-1.5 py-0.5 font-mono text-sm text-foreground dark:bg-zinc-900 dark:text-zinc-200">
          {content}
        </code>
      )
    }

    const link = block.markDefs?.find((definition) => definition._key === mark && definition.href)
    if (link?.href) {
      content = (
        <Link href={link.href} className="text-foreground underline decoration-blue-400/25 underline-offset-4 hover:text-blue-500/70 dark:hover:text-blue-300/70">
          {content}
        </Link>
      )
    }
  }

  return <span key={child._key}>{content}</span>
}

function CodeWindow({ block }: { block: PortableTextBlock }) {
  const language = block.language || "typescript"
  const code = block.code || ""
  const highlighted = hljs.getLanguage(language)
    ? hljs.highlight(code, { language, ignoreIllegals: true }).value
    : hljs.highlightAuto(code).value

  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-border bg-card shadow-sm dark:border-white/10 dark:bg-[#111418] dark:shadow-2xl dark:shadow-black/30">
      <div className="flex min-h-11 items-center justify-between gap-3 border-b border-border bg-muted/70 px-4 dark:border-white/10 dark:bg-[#171b21]">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
          <span className="h-3 w-3 rounded-full bg-zinc-400/60 dark:bg-white/25" />
        </div>
        <figcaption className="min-w-0 truncate font-mono text-xs text-muted-foreground">
          {block.filename || languageLabels[language] || language}
        </figcaption>
      </div>
      <pre className="max-w-full overflow-x-auto p-4 text-sm leading-7 text-foreground md:p-5 dark:text-zinc-200">
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </figure>
  )
}

function groupListItems(blocks: PortableTextBlock[]) {
  const grouped: Array<PortableTextBlock | { key: string; type: "bullet" | "number"; items: PortableTextBlock[] }> = []

  for (const block of blocks) {
    if (!block.listItem) {
      grouped.push(block)
      continue
    }

    const previous = grouped[grouped.length - 1]
    if (previous && "items" in previous && previous.type === block.listItem) {
      previous.items.push(block)
    } else {
      grouped.push({ key: block._key, type: block.listItem, items: [block] })
    }
  }

  return grouped
}
