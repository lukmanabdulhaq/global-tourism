import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Utensils, MapPin, Book } from "lucide-react"
import { sampleFoods } from "@/lib/data/sample-foods"

export default async function FoodDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const food = sampleFoods.find((f) => f.id === id)

  if (!food) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {food.category.replace("-", " ")}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance">{food.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>
                  {food.country}, {food.region}
                </span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground text-pretty">{food.description}</p>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5" />
                    Cultural Significance
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    {food.name} is more than just a dish - it's a cultural icon that represents the culinary heritage of{" "}
                    {food.country}. This beloved {food.category.replace("-", " ")} has been passed down through
                    generations, with each family adding their own special touch to the recipe.
                  </p>
                  <h4>Origins</h4>
                  <p>
                    The history of {food.name} is deeply intertwined with the cultural and social fabric of{" "}
                    {food.region}. It reflects the available local ingredients, traditional cooking methods, and the
                    communal nature of meal preparation and consumption.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How It's Prepared</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    Traditional preparation of {food.name} is an art form that requires patience, skill, and attention
                    to detail. The cooking process often involves multiple stages, each contributing to the final flavor
                    profile and texture.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5" />
                    Ingredients
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {food.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Serving Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {food.name} is typically served with complementary side dishes and beverages that enhance its
                    flavors. In {food.country}, it's often enjoyed during family gatherings and special occasions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return sampleFoods.map((food) => ({
    id: food.id,
  }))
}
