import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Share2, Heart } from "lucide-react"
import Image from "next/image"
import { sampleEvents } from "@/lib/data/sample-events"

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = sampleEvents.find((e) => e.id === id)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl">
              <Badge variant="secondary" className="mb-4">
                {event.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance text-foreground">
                {event.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>
                    {event.city}, {event.country}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About This Event</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>{event.description}</p>
                  <p>
                    {event.name} is one of the most anticipated cultural celebrations in {event.country}. This vibrant
                    event brings together communities to honor traditions, share stories, and celebrate the rich
                    cultural heritage that defines {event.city}.
                  </p>
                  <h4>What to Expect</h4>
                  <ul>
                    <li>Traditional performances and ceremonies</li>
                    <li>Local food and craft vendors</li>
                    <li>Cultural exhibitions and displays</li>
                    <li>Music and dance performances</li>
                    <li>Family-friendly activities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Event Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Date</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        {event.city}, {event.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Expected Attendance</p>
                      <p className="text-sm text-muted-foreground">Thousands of visitors</p>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button className="w-full">Get Tickets</Button>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <Heart className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return sampleEvents.map((event) => ({
    id: event.id,
  }))
}
