import { Badge } from "@/components/ui/badge"
import { MapPin, Building2 } from "lucide-react"
import Image from "next/image"
import type { Museum } from "@/lib/data/sample-museums"

export function MuseumHero({ museum }: { museum: Museum }) {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <Image src={museum.image || "/placeholder.svg"} alt={museum.name} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              {museum.type}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance text-foreground">
              {museum.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="text-base">
                  {museum.city}, {museum.country}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                <span className="text-base capitalize">{museum.type.replace("-", " ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
