"use client"

import { useState } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sparkles, Send, Globe, Compass, Utensils, Building2, Loader2 } from "lucide-react"
import Image from "next/image"

export default function AIGuidePage() {
  const [input, setInput] = useState("")
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/ai-guide" }),
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Hello! I'm your AI cultural guide. I can help you discover destinations, plan trips, learn about cultures, find authentic experiences, and answer any questions about global heritage. How can I assist you today?",
          },
        ],
      },
    ],
  })

  const handleSend = () => {
    if (!input.trim() || status !== "ready") return
    sendMessage({ text: input })
    setInput("")
  }

  const quickQuestions = [
    {
      icon: Globe,
      text: "Best countries to visit in Africa",
    },
    {
      icon: Utensils,
      text: "Traditional Japanese dishes to try",
    },
    {
      icon: Building2,
      text: "Must-see museums in Europe",
    },
    {
      icon: Compass,
      text: "Plan a 7-day trip to Brazil",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance">AI Cultural Guide</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Your intelligent companion for exploring world cultures, planning trips, and discovering authentic
              experiences
            </p>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Chat with Your AI Guide
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      <AvatarFallback>
                        {message.role === "assistant" ? <Sparkles className="h-4 w-4" /> : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 max-w-[80%] space-y-2">
                      {message.parts.map((part, index) => {
                        if (part.type === "text") {
                          return (
                            <div
                              key={index}
                              className={`rounded-lg p-4 ${
                                message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                              }`}
                            >
                              <p className="text-sm whitespace-pre-wrap">{part.text}</p>
                            </div>
                          )
                        }

                        if (part.type === "tool-recommendDestination" && part.state === "output-available") {
                          return (
                            <Card key={index} className="overflow-hidden">
                              <div className="relative h-48">
                                <Image
                                  src={part.output.image || "/placeholder.svg"}
                                  alt={part.output.country}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <CardContent className="p-4">
                                <h4 className="font-semibold text-lg mb-2">{part.output.country}</h4>
                                <p className="text-sm text-muted-foreground mb-3">{part.output.reason}</p>
                                <div className="space-y-1">
                                  <p className="text-xs font-medium">Highlights:</p>
                                  <ul className="text-xs text-muted-foreground space-y-1">
                                    {part.output.highlights.map((highlight: string, i: number) => (
                                      <li key={i}>• {highlight}</li>
                                    ))}
                                  </ul>
                                </div>
                              </CardContent>
                            </Card>
                          )
                        }

                        return null
                      })}
                    </div>
                  </div>
                ))}

                {status === "streaming" && (
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      <AvatarFallback>
                        <Sparkles className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg p-4 bg-muted">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  </div>
                )}
              </CardContent>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask me anything about cultures, travel, or destinations..."
                    className="flex-1"
                    disabled={status !== "ready"}
                  />
                  <Button onClick={handleSend} disabled={status !== "ready"}>
                    {status === "streaming" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Quick Questions */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Quick Questions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quickQuestions.map((question, index) => {
                  const Icon = question.icon
                  return (
                    <button
                      key={index}
                      onClick={() => setInput(question.text)}
                      className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent transition-colors text-left"
                      disabled={status !== "ready"}
                    >
                      <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{question.text}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
