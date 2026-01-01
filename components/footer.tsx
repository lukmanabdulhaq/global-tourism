import Link from "next/link"
import { Globe, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-bold text-foreground">JUANINA</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Your digital gateway to world cultures. Explore, learn, and connect with heritage from every corner of the
              globe.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                  Interactive Globe
                </Link>
              </li>
              <li>
                <Link href="/cultures" className="text-muted-foreground hover:text-foreground transition-colors">
                  World Cultures
                </Link>
              </li>
              <li>
                <Link href="/museums" className="text-muted-foreground hover:text-foreground transition-colors">
                  Museums
                </Link>
              </li>
              <li>
                <Link href="/food" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cuisine
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Connect</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/travel-planner" className="text-muted-foreground hover:text-foreground transition-colors">
                  Travel Planner
                </Link>
              </li>
              <li>
                <Link href="/ai-guide" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-sm mb-4">About</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/about#partnerships"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/about#ethics" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cultural Ethics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="max-w-md">
            <h3 className="font-semibold text-sm mb-3">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">Get weekly cultural insights and travel inspiration</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} JUANINA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
