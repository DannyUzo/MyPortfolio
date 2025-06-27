"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, Bot, User, RotateCcw, ChevronDown, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
  isError?: boolean
}

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm Daniel's AI assistant. Ask me anything about his professional background, skills, experience, or projects. I'm here to help you learn more about him!",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasApiError, setHasApiError] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesEndRef.current && scrollAreaRef.current) {
        // Find the scrollable viewport within the ScrollArea
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement
        if (viewport) {
          viewport.scrollTop = viewport.scrollHeight
        }
      }
    }, 100)
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          data.response ||
          "I'm experiencing technical difficulties. Please contact UZODINMA DANIEL at uzodinmadaniel42@gmail.com.",
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error sending message:", error)
      setHasApiError(true)

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I'm experiencing technical difficulties right now. Please try again later or contact UZODINMA DANIEL directly at uzodinmadaniel42@gmail.com.",
        isUser: false,
        timestamp: new Date(),
        isError: true,
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setMessages([
      {
        id: "1",
        content:
          "Hi! I'm Daniel's AI assistant. Ask me anything about his professional background, skills, experience, or projects. I'm here to help you learn more about him!",
        isUser: false,
        timestamp: new Date(),
      },
    ])
    setHasApiError(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <section
      ref={sectionRef}
      id="chat"
      className="py-20 bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20 dark:to-background min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-primary to-blue-700 dark:to-blue-500 p-6 text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Ask me anything!</h2>
                {hasApiError && (
                  <div className="ml-auto">
                    <AlertTriangle className="w-5 h-5 text-yellow-300" />
                  </div>
                )}
              </div>
              <p className="text-primary-foreground/80 text-lg">
                Do you wish to know anything about me? Then ask me here 👇
              </p>
              {hasApiError && (
                <p className="text-yellow-200 text-sm mt-2">
                  ⚠️ Chat service is experiencing issues. Responses may be delayed.
                </p>
              )}
            </div>

            {/* Messages Area */}
            <ScrollArea className="h-96 p-6 bg-card" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    {!message.isUser && (
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.isError ? "bg-red-100 dark:bg-red-900/20" : "bg-blue-100 dark:bg-blue-900/20"
                        }`}
                      >
                        {message.isError ? (
                          <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                        ) : (
                          <Bot className="w-4 h-4 text-primary" />
                        )}
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-4 rounded-lg ${
                        message.isUser
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : message.isError
                            ? "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-bl-sm border border-red-200 dark:border-red-800"
                            : "bg-blue-50 dark:bg-blue-900/20 text-foreground rounded-bl-sm border border-blue-100 dark:border-blue-800"
                      }`}
                    >
                      <p className="leading-relaxed">{message.content}</p>
                    </div>
                    {message.isUser && (
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-muted-foreground" />
                      </div>
                    )}
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg rounded-bl-sm border border-blue-100 dark:border-blue-800">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-6 bg-muted/50 border-t border-border">
              <div className="flex gap-2 mb-3">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="sm"
                  className="border-border text-foreground hover:bg-accent"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset Chat
                </Button>
                {hasApiError && (
                  <span className="text-sm text-red-600 dark:text-red-400 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    Service issues detected
                  </span>
                )}
              </div>
              <div className="flex gap-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="What do you want to know about me? 💬"
                  className="flex-1 bg-background border-border focus:border-primary focus:ring-primary"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center mt-8"
          >
            <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}