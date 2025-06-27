"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, RotateCcw, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export function AIChat() {
  const [showFloatingChat, setShowFloatingChat] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
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
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const chatSection = document.getElementById("chat")
      if (chatSection) {
        const rect = chatSection.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        setShowFloatingChat(!isVisible)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
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

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      })

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
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I'm experiencing technical difficulties. Please contact UZODINMA DANIEL at uzodinmadaniel42@gmail.com.",
        isUser: false,
        timestamp: new Date(),
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
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {showFloatingChat && (
        <>
          {/* Chat Toggle Button */}
          <motion.div
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-blue-50 to-background rounded-full dark:from-blue-950/20 dark:to-background" 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          >
            <Button
              onClick={() => setIsOpen(!isOpen)}
              size="lg"
              className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="chat"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>

          {/* Chat Window */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)]"
              >
                <Card className="shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/20 dark:to-background backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Bot className="w-5 h-5" />
                      Ask me about Daniel!
                    </CardTitle>
                    <p className="text-blue-100 text-sm">
                      I can answer questions about his experience, skills, and projects.
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ScrollArea className="h-80 p-4">
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
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <Bot className="w-4 h-4 text-blue-600" />
                              </div>
                            )}
                            <div
                              className={`max-w-[80%] p-3 rounded-lg ${
                                message.isUser
                                  ? "bg-blue-600 text-white rounded-br-sm"
                                  : "bg-gray-100 dark:bg-blue-900/20 dark:border dark:border-blue-800 dark:text-foreground text-gray-800 rounded-bl-sm"
                              }`}
                            >
                              <p className="text-sm leading-relaxed">{message.content}</p>
                            </div>
                            {message.isUser && (
                              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 text-gray-600" />
                              </div>
                            )}
                          </motion.div>
                        ))}
                        {isLoading && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-3 justify-start"
                          >
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                              <Bot className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="bg-gray-100 p-3 rounded-lg rounded-bl-sm">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div
                                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.1s" }}
                                ></div>
                                <div
                                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.2s" }}
                                ></div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                      <div ref={messagesEndRef} />
                    </ScrollArea>

                    <div className="p-4 border-t bg-gray-50 dark:bg-blue-950/20 rounded-b-lg">
                      <div className="flex gap-2 mb-2">
                        <Button onClick={handleReset} variant="outline" size="sm" className="text-xs">
                          <RotateCcw className="w-3 h-3 mr-1" />
                          Reset
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Input
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Ask about Daniel's experience..."
                          className="flex-1"
                          disabled={isLoading}
                        />
                        <Button
                          onClick={handleSendMessage}
                          disabled={!inputValue.trim() || isLoading}
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  )
}
