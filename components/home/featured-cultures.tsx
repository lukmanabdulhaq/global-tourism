import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { sampleCountries } from "@/lib/data/sample-countries"

export function FeaturedCultures() {
  const featured = sampleCountries.filter((c) => c.featured)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-3 text-balance">Featured Cultures</h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Discover rich heritage and traditions from around the world
            </p>
          </div>
          <Link href="/cultures" className="hidden md:block">
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((country) => (
            <Link key={country.id} href={`/country/${country.id}`}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={
                      country.image ||
                      `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(country.name + " cultural landscape landmarks")}`
                    }
                    alt={country.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 text-6xl drop-shadow-lg">{country.flag}</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">{country.name}</h3>
                    <Badge variant="secondary">{country.region}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{country.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="font-medium">Capital:</span>
                    <span className="ml-2">{country.capital}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/cultures">
            <Button variant="outline">
              View All Cultures
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
