import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Images } from "lucide-react"
import type { Museum } from "@/lib/data/sample-museums"

export function MuseumGallery({ museum }: { museum: Museum }) {
  // Sample gallery images - in a real app, these would come from the database
  const galleryImages = [1, 2, 3, 4, 5, 6]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Images className="h-5 w-5" />
          Gallery
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Images className="h-8 w-8 text-muted-foreground" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
