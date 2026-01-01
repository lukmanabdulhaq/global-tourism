import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building2, Utensils, Music, Calendar, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    icon: MapPin,
    title: "Countries & Cultures",
    description: "Explore 195+ nations",
    href: "/cultures",
    color: "text-chart-1",
    imageQuery: "world map diverse cultures flags",
  },
  {
    icon: Building2,
    title: "Museums & Landmarks",
    description: "Visit iconic sites",
    href: "/museums",
    color: "text-chart-2",
    imageQuery: "famous museums world landmarks architecture",
  },
  {
    icon: Utensils,
    title: "Food & Cuisine",
    description: "Taste global flavors",
    href: "/food",
    color: "text-chart-3",
    imageQuery: "international cuisine world food dishes",
  },
  {
    icon: Music,
    title: "Music & Dance",
    description: "Experience rhythms",
    href: "/music",
    color: "text-chart-4",
    imageQuery: "traditional music instruments cultural dance",
  },
  {
    icon: Calendar,
    title: "Events & Festivals",
    description: "Join celebrations",
    href: "/events",
    color: "text-chart-5",
    imageQuery: "cultural festivals celebrations world events",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with travelers",
    href: "/community",
    color: "text-chart-1",
    imageQuery: "travel community people exploring together",
  },
]

export function ExploreCategories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-balance">
            What Would You Like to Explore?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Dive into rich cultures, historic sites, and authentic experiences from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.href} href={category.href}>
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={`/.jpg?key=an31s&height=200&width=400&query=${encodeURIComponent(category.imageQuery)}`}
                      alt={category.title}
                      fill
                      className="object-cover opacity-20 transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 relative -mt-16">
                    <div className="flex items-start gap-4">
                      <div className={`rounded-lg bg-background shadow-lg p-3 ${category.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
