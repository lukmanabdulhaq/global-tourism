"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Globe2, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-40"
          poster="/diverse-world-cultures-and-landmarks.jpg"
        >
          <source src="/multicultural-heritage-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Explore 195+ Countries & 10,000+ Cultural Sites
          </div>

          {/* Main headline */}
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
            Discover the World's
            <span className="block text-primary">Cultural Heritage</span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground text-pretty md:text-xl">
            Your digital gateway to global cultures, museums, landmarks, and authentic travel experiences. Explore
            history, art, food, and traditions from every corner of the globe.
          </p>

          {/* Search bar */}
          <div className="mb-8 mx-auto max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search countries, cultures, landmarks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pl-10 pr-4 text-base"
                />
              </div>
              <Link href={`/search?q=${searchQuery}`}>
                <Button size="lg" className="w-full sm:w-auto h-12 px-8">
                  Search
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/explore">
              <Button size="lg" variant="default" className="w-full sm:w-auto">
                <Globe2 className="mr-2 h-5 w-5" />
                Explore Interactive Globe
              </Button>
            </Link>
            <Link href="/ai-guide">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                <Sparkles className="mr-2 h-5 w-5" />
                Try AI Travel Guide
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">195+</div>
              <div className="text-sm text-muted-foreground mt-1">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">Cultural Sites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">5K+</div>
              <div className="text-sm text-muted-foreground mt-1">Museums</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground mt-1">Global Visitors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
