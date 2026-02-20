"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Bot, Code, Cpu, Github, Linkedin, Brain, MapPin, Monitor, Send, User, Zap, AlertTriangle, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface Message {
    id: string
    content: string
    isUser: boolean
    timestamp: Date
    isError?: boolean
}

export function HeroUnified() {
    // --- CHAT STATE ---
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            content:
                "Hi! I'm Daniel's AI assistant. I can tell you about his work in Software, Hardware, and AI. Ask me anything!",
            isUser: false,
            timestamp: new Date(),
        },
    ])
    const [inputValue, setInputValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [hasApiError, setHasApiError] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const scrollAreaRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSendMessage = async () => {
        if (!inputValue.trim() || isLoading) return

        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputValue,
            isUser: true,
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue("")
        setIsLoading(true)
        setHasApiError(false)

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: inputValue }),
            })

            if (!response.ok) throw new Error("API Error")
            const data = await response.json()

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: data.response || "I'm having trouble connecting to the brain. Try again?",
                isUser: false,
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, aiMessage])
        } catch (error) {
            console.error("Chat error:", error)
            setHasApiError(true)
            setMessages((prev) => [...prev, {
                id: Date.now().toString(),
                content: "System offline. Please try again later.",
                isUser: false,
                timestamp: new Date(),
                isError: true
            }])
        } finally {
            setIsLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    // --- RENDER ---
    return (
        <section className="min-h-screen pt-24 pb-12 bg-background flex flex-col justify-center overflow-hidden relative">
            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

                    {/* LEFT COLUMN: Hero & Expertise */}
                    <div className="flex-1 flex flex-col justify-center">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge variant="outline" className="mb-6 py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full">
                                System Engineer // Creative Technologist
                            </Badge>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                                Building <br />
                                <span className="text-primary">Systems,</span> <br />
                                Not Just Sites.
                            </h1>

                            <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
                                Engineering high-performance digital architectures and embedded solutions at the intersection of hardware and software.
                            </p>

                            {/* EXPERTISE "MODULES" */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl">
                                {/* Software Card */}
                                <Link href="/work#software">
                                    <div className="group p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all cursor-pointer h-full">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600">
                                                <Monitor className="w-5 h-5" />
                                            </div>
                                            <span className="font-semibold text-primary">The Developer</span>
                                        </div>
                                       
                                    </div>
                                </Link>

                                {/* Hardware Card */}
                                <Link href="/work#hardware">
                                    <div className="group p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all cursor-pointer h-full">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-600">
                                                <Cpu className="w-5 h-5" />
                                            </div>
                                            <span className="font-semibold text-primary">The Builder</span>
                                        </div>
                                    
                                    </div>
                                </Link>

                                {/* AI/ML Card */}
                                <Link href="/work#ai">
                                    <div className="group p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all cursor-pointer h-full">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600">
                                                <Brain className="w-5 h-5" />
                                            </div>
                                            <span className="font-semibold text-primary">The Innovator</span>
                                        </div>
                                        
                                    </div>
                                </Link>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/work">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                                        View Projects <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                                <Link href="mailto:uzodinmadaniel42@gmail.com">
                                    <Button variant="outline" size="lg">
                                        Contact Me
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Interactive Terminal (Chat) */}
                    {/* <div className="flex-1 lg:max-w-md w-full mx-auto lg:mx-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="h-[500px] lg:h-[600px] w-full flex flex-col bg-card border border-border rounded-2xl shadow-2xl overflow-hidden ring-1 ring-border/50"
                        >
                            
                            <div className="bg-muted/50 p-4 border-b border-border flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                                    ai_assistant.exe
                                </div>
                                <Bot className="w-4 h-4 text-muted-foreground" />
                            </div>

                   
                            <ScrollArea className="flex-1 p-4 bg-background/50 backdrop-blur-sm" ref={scrollAreaRef}>
                                <div className="space-y-4">
                                    {messages.map((m) => (
                                        <motion.div
                                            key={m.id}
                                            initial={{ opacity: 0, x: m.isUser ? 10 : -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={`flex gap-3 ${m.isUser ? "justify-end" : "justify-start"}`}
                                        >
                                            {!m.isUser && (
                                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <Bot className="w-4 h-4 text-primary" />
                                                </div>
                                            )}
                                            <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${m.isUser
                                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                                : "bg-muted text-foreground rounded-tl-none border border-border"
                                                }`}>
                                                {m.content}
                                            </div>
                                        </motion.div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex gap-2 items-center text-muted-foreground text-xs ml-11">
                                            <span className="animate-pulse">Thinking...</span>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </ScrollArea>

                            <div className="p-4 bg-background border-t border-border">
                                <div className="relative">
                                    <Input
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Initialize query..."
                                        className="pr-12 bg-muted/30 border-primary/20 focus:border-primary font-mono text-sm h-12"
                                        disabled={isLoading}
                                    />
                                    <Button
                                        size="icon"
                                        onClick={handleSendMessage}
                                        disabled={!inputValue.trim() || isLoading}
                                        className="absolute right-1 top-1 h-10 w-10 bg-primary/10 hover:bg-primary/20 text-primary"
                                    >
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="mt-2 flex justify-between items-center px-1">
                                    <span className="text-[10px] text-muted-foreground font-mono">
                                        STATUS: {isLoading ? "PROCESSING" : hasApiError ? "OFFLINE" : "READY"}
                                    </span>
                                    <code className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                                        v2.1.0
                                    </code>
                                </div>
                            </div>
                        </motion.div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
