import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { sampleCountries } from "@/lib/data/sample-countries"
import { Globe } from "lucide-react"

export default function CulturesPage() {
  const regions = Array.from(new Set(sampleCountries.map((c) => c.region)))

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance">World Cultures</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Discover the rich tapestry of human heritage across 195+ countries
            </p>
          </div>
        </div>
      </section>

      {/* By Region */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {regions.map((region) => {
            const regionCountries = sampleCountries.filter((c) => c.region === region)
            return (
              <div key={region} className="mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold font-serif">{region}</h2>
                  <Badge variant="secondary">{regionCountries.length} countries</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {regionCountries.map((country) => (
                    <Link key={country.id} href={`/country/${country.id}`}>
                      <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={
                              country.image ||
                              `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(country.name + " landscape")}`
                            }
                            alt={country.name}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                          <div className="absolute top-4 right-4 text-5xl drop-shadow-lg">{country.flag}</div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">{country.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">{country.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
