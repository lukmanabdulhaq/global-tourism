import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { sampleMuseums } from "@/lib/data/sample-museums"

export function TrendingDestinations() {
  const trending = sampleMuseums.filter((m) => m.featured).slice(0, 4)

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-3 text-balance">Trending Destinations</h2>
            <p className="text-muted-foreground text-lg text-pretty">Most visited museums and landmarks this month</p>
          </div>
          <Link href="/museums" className="hidden md:block">
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trending.map((museum) => (
            <Link key={museum.id} href={`/museum/${museum.id}`}>
              <Card className="overflow-hidden transition-all hover:shadow-lg cursor-pointer group">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0 overflow-hidden">
                    <Image
                      src={museum.image || "/placeholder.svg"}
                      alt={museum.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold line-clamp-1">{museum.name}</h3>
                        <Badge variant="secondary" className="ml-2 flex-shrink-0">
                          {museum.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{museum.description}</p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>
                        {museum.city}, {museum.country}
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/museums">
            <Button variant="outline">
              View All Destinations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
