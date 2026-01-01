"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

// This default export is what Next.js is looking for
export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative h-[75vh] w-full overflow-hidden bg-black">
        {/* YOUTUBE VIDEO BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <iframe
            className="h-full w-full scale-[1.5] object-cover opacity-60"
            src="https://www.youtube.com/embed/LZFF8EuaGjM?autoplay=1&mute=1&loop=1&playlist=LZFF8EuaGjM&controls=0&showinfo=0&rel=0&modestbranding=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-background" />
        </div>

        {/* CONTENT AREA */}
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 mx-auto text-center">
          <div className="space-y-4">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 px-4 py-1 rounded-full backdrop-blur-md">
              🌎 Exploring 195+ Countries
            </Badge>
            <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-5xl font-serif font-bold tracking-tight text-white md:text-8xl">
              JUANINA
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-white/90 md:text-2xl italic font-light animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              "Around the world in a single click."
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link href="/explore">
              <Button size="lg" className="rounded-full px-10 py-7 text-lg bg-primary hover:bg-primary/90 text-white shadow-2xl">
                Start the Tour
              </Button>
            </Link>
            <Link href="/ai-guide">
              <Button size="lg" variant="outline" className="rounded-full px-10 py-7 text-lg bg-white/5 backdrop-blur-xl text-white border-white/20 hover:bg-white/10">
                <Sparkles className="mr-2 h-5 w-5 text-yellow-400" />
                AI Cultural Guide
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20" />
      </section>
    </main>
  )
}
