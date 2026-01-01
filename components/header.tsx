"use client"

import * as React from "react"
import Link from "next/link"
import { useState } from "react"
import {
  Globe,
  MapPin,
  Compass,
  Calendar,
  Sparkles,
  Menu,
  X,
  Music,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport, // ✅ ADDED
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Globe className="h-7 w-7 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-serif text-2xl font-bold tracking-tight">
            JUANINA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <NavigationMenu delayDuration={0} skipDelayDuration={0}>
            <NavigationMenuList>

              {/* Explore Globe */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/explore" className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Explore Globe
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Discover */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <MapPin className="mr-2 h-4 w-4" />
                  Discover
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] grid-cols-2 gap-3 p-4 bg-background border rounded-lg shadow-xl">
                    <ListItem href="/cultures" title="Cultures">
                      Explore traditions, art, and heritage
                    </ListItem>
                    <ListItem href="/museums" title="Museums & Landmarks">
                      Visit iconic sites and institutions
                    </ListItem>
                    <ListItem href="/food" title="Food & Cuisine">
                      Taste global flavors and recipes
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Music & Dance */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Music className="mr-2 h-4 w-4" />
                  Music & Dance
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] grid-cols-2 gap-3 p-4 bg-background border rounded-lg shadow-xl">
                    <ListItem href="/music/africa" title="Africa">
                      Afrobeat and traditional rhythms
                    </ListItem>
                    <ListItem href="/music/asia" title="Asia">
                      Classical instruments and folk
                    </ListItem>
                    <ListItem href="/music/europe" title="Europe">
                      Classical and contemporary styles
                    </ListItem>
                    <ListItem href="/music/americas" title="Americas">
                      Jazz, Latin, and Indigenous
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Events */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/events" className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Events
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Travel Planner */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/travel-planner" className="flex items-center">
                    <Compass className="mr-2 h-4 w-4" />
                    Travel Planner
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>

            {/* ✅ REQUIRED VIEWPORT – FIXES BLANK FIRST HOVER */}
            <NavigationMenuViewport className="absolute top-full left-0 w-full" />
          </NavigationMenu>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="/ai-guide" className="hidden md:block">
            <Button variant="outline" size="sm" className="gap-2">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              AI Guide
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
    </header>
  )
}

/* Helper */
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ title, href, children, className, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          "block rounded-md p-3 transition-colors hover:bg-accent",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium">{title}</div>
        <p className="text-sm text-muted-foreground">{children}</p>
      </Link>
    </NavigationMenuLink>
  </li>
))
ListItem.displayName = "ListItem"
