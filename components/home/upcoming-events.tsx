import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { sampleEvents } from "@/lib/data/sample-events"

export function UpcomingEvents() {
  const upcoming = sampleEvents.filter((e) => e.featured).slice(0, 3)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-3 text-balance">Upcoming Global Festivals</h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Experience authentic cultural celebrations around the world
            </p>
          </div>
          <Link href="/events" className="hidden md:block">
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((event) => (
            <Link key={event.id} href={`/event/${event.id}`}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 text-foreground">{event.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-1">{event.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric" })}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>
                        {event.city}, {event.country}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/events">
            <Button variant="outline">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
