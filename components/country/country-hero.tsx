import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Globe } from "lucide-react"
import type { Country } from "@/lib/data/sample-countries"

export function CountryHero({ country }: { country: Country }) {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* Flag */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="text-8xl md:text-9xl">{country.flag}</span>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <Badge variant="secondary" className="mb-4">
                {country.region}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance">{country.name}</h1>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">{country.description}</p>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Capital:</span>
                  <span className="font-medium">{country.capital}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Code:</span>
                  <span className="font-medium">{country.code}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Region:</span>
                  <span className="font-medium">{country.region}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
