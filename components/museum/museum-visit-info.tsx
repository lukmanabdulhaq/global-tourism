import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Ticket, MapPin, Heart, Share2, Navigation } from "lucide-react"
import type { Museum } from "@/lib/data/sample-museums"

export function MuseumVisitInfo({ museum }: { museum: Museum }) {
  return (
    <div className="space-y-6 sticky top-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Plan Your Visit</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Opening Hours</p>
                <p className="text-sm text-muted-foreground">Daily: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-muted-foreground">Closed on Mondays</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Ticket className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Admission</p>
                <p className="text-sm text-muted-foreground">Adults: $15</p>
                <p className="text-sm text-muted-foreground">Students: $10</p>
                <p className="text-sm text-muted-foreground">Children under 12: Free</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">
                  {museum.city}, {museum.country}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <Button className="w-full">
              <Ticket className="mr-2 h-4 w-4" />
              Book Tickets
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              <Navigation className="mr-2 h-4 w-4" />
              Get Directions
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Visitor Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Best time to visit: Early morning or late afternoon to avoid crowds</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Allow 2-3 hours for a complete tour</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Photography allowed in most areas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Guided tours available in multiple languages</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
