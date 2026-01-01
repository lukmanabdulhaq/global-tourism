import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, History, Award } from "lucide-react"
import type { Museum } from "@/lib/data/sample-museums"

export function MuseumDetails({ museum }: { museum: Museum }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            About
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p>{museum.description}</p>
          <p>
            {museum.name} stands as a testament to the cultural and historical significance of {museum.country}. This{" "}
            {museum.type} offers visitors an immersive experience into the heritage and traditions that have shaped the
            region.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Historical Background
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p>
            Established with the mission to preserve and showcase cultural heritage, {museum.name} has become one of the
            most visited destinations in {museum.city}. The {museum.type} houses collections that span centuries,
            offering insights into the evolution of art, culture, and society.
          </p>
          <h4>Key Highlights:</h4>
          <ul>
            <li>Extensive collection of artifacts and artworks</li>
            <li>Regular exhibitions and cultural programs</li>
            <li>Educational workshops and guided tours</li>
            <li>Preservation of cultural heritage</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Cultural Importance
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p>
            {museum.name} plays a vital role in preserving and promoting the cultural identity of {museum.country}. It
            serves as a bridge between past and present, educating visitors about the rich traditions and historical
            events that have shaped the nation.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
