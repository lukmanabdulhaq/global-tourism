"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Building2, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { sampleMuseums } from "@/lib/data/sample-museums"

export default function MuseumsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const types = Array.from(new Set(sampleMuseums.map((m) => m.type)))

  const filteredMuseums = sampleMuseums.filter((museum) => {
    const matchesSearch =
      searchQuery === "" ||
      museum.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      museum.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      museum.city.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = selectedType === null || museum.type === selectedType

    return matchesSearch && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance">Museums & Landmarks</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Explore world-class museums, historic landmarks, and heritage sites from every corner of the globe
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search museums, landmarks, cities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Type filters */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedType === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedType(null)}
              >
                All Types
              </Badge>
              {types.map((type) => (
                <Badge
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredMuseums.length} {filteredMuseums.length === 1 ? "result" : "results"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMuseums.map((museum) => (
                <Link key={museum.id} href={`/museum/${museum.id}`}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={museum.image || "/placeholder.svg"}
                        alt={museum.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-background/90 text-foreground">{museum.type}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 line-clamp-1">{museum.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{museum.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>
                          {museum.city}, {museum.country}
                        </span>
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
