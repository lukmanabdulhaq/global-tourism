import { Button } from "@/components/ui/button"
import { Sparkles, Compass } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-accent p-12 md:p-16">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-0">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-primary-foreground text-balance">
              Ready to Start Your Cultural Journey?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-pretty">
              Let our AI guide help you plan the perfect trip tailored to your interests, budget, and travel style.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/travel-planner">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Compass className="mr-2 h-5 w-5" />
                  Plan Your Trip
                </Button>
              </Link>
              <Link href="/ai-guide">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Talk to AI Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
