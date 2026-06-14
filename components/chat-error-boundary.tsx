"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { Bot, AlertTriangle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ChatErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Chat error:", error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-2xl">
          <div className="border-b border-border bg-muted/50 p-6 text-foreground">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Chat Unavailable</h2>
            </div>
            <p className="text-muted-foreground text-xl">The AI chat is temporarily unavailable</p>
          </div>

          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Chat Error</h3>
            <p className="text-muted-foreground mb-6">
              I'm having trouble loading the chat feature. You can still reach me directly via email or social media.
            </p>

            <div className="space-y-4">
              <Button onClick={this.handleReset} className="bg-primary hover:bg-primary/90 w-full">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>

              <div className="text-base text-muted-foreground">
                <p>Alternative contact methods:</p>
                <div className="flex justify-center gap-4 mt-2">
                  <a href="mailto:uzodinmadaniel42@gmail.com" className="text-primary hover:underline">
                    Email
                  </a>
                  <a
                    href="https://linkedin.com/in/daniel-uzodinma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/DannyUzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
