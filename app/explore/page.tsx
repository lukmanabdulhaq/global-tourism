"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Globe } from "lucide-react"
import Link from "next/link"
import { sampleCountries } from "@/lib/data/sample-countries"
import InteractiveGlobe from "@/components/interactive-globe"
import Image from "next/image"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const regions = Array.from(new Set(sampleCountries.map((c) => c.region)))

  const filteredCountries = sampleCountries.filter((country) => {
    const matchesSearch =
      searchQuery === "" ||
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRegion = selectedRegion === null || country.region === selectedRegion

    return matchesSearch && matchesRegion
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance">Explore the World</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Discover cultures, traditions, and heritage from 195+ countries around the globe
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <InteractiveGlobe />
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search countries, capitals, regions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Region filters */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedRegion === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedRegion(null)}
              >
                All Regions
              </Badge>
              {regions.map((region) => (
                <Badge
                  key={region}
                  variant={selectedRegion === region ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedRegion(region)}
                >
                  {region}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredCountries.length} {filteredCountries.length === 1 ? "country" : "countries"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCountries.map((country) => (
                <Link key={country.id} href={`/country/${country.id}`}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                    {country.image && (
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={country.image || "/placeholder.svg"}
                          alt={country.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{country.flag}</span>
                          <h3 className="text-lg font-semibold">{country.name}</h3>
                        </div>
                        <Badge variant="secondary" className="ml-2 flex-shrink-0">
                          {country.region}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{country.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="font-medium">Capital:</span>
                        <span className="ml-2">{country.capital}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
