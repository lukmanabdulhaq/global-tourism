"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Utensils, MapPin, Globe } from "lucide-react"
import Link from "next/link"

// Integrated Data Array
const allFoods = [
  {
    id: "jollof-rice",
    name: "Jollof Rice",
    country: "Nigeria",
    region: "Africa",
    description: "Beloved West African rice dish cooked in a rich tomato sauce with spices and vegetables.",
    ingredients: ["Rice", "Tomatoes", "Onions", "Peppers", "Spices"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "sushi",
    name: "Sushi",
    country: "Japan",
    region: "Asia",
    description: "Traditional Japanese dish featuring vinegared rice combined with raw fish and seaweed.",
    ingredients: ["Rice", "Fish", "Seaweed", "Wasabi"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "tacos",
    name: "Tacos",
    country: "Mexico",
    region: "Americas",
    description: "Iconic Mexican street food with soft tortillas filled with seasoned meat and salsa.",
    ingredients: ["Tortillas", "Meat", "Onions", "Cilantro", "Lime"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "hummus",
    name: "Hummus",
    country: "Lebanon",
    region: "Middle East",
    description: "A creamy blend of chickpeas, tahini, and garlic, drizzled with olive oil.",
    ingredients: ["Chickpeas", "Tahini", "Garlic", "Lemon", "Olive Oil"],
    category: "snack",
    image: "https://images.unsplash.com/photo-1577906030551-59758a5146b5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "carbonara",
    name: "Pasta Carbonara",
    country: "Italy",
    region: "Europe",
    description: "Classic Roman pasta made with eggs, hard cheese, cured pork, and black pepper.",
    ingredients: ["Spaghetti", "Eggs", "Pecorino", "Guanciale"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "bunny-chow",
    name: "Bunny Chow",
    country: "South Africa",
    region: "Africa",
    description: "A hollowed-out loaf of white bread filled with spicy curry.",
    ingredients: ["Bread", "Mutton Curry", "Potatoes", "Chili"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "poutine",
    name: "Poutine",
    country: "Canada",
    region: "Americas",
    description: "Crispy french fries topped with fresh cheese curds and hot brown gravy.",
    ingredients: ["Potatoes", "Cheese Curds", "Beef Gravy"],
    category: "snack",
    image: "https://images.unsplash.com/photo-1586511925558-a4c6a15ca320?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "pho",
    name: "Pho",
    country: "Vietnam",
    region: "Asia",
    description: "Fragrant noodle soup with broth, rice noodles, herbs, and thinly sliced meat.",
    ingredients: ["Rice Noodles", "Beef Broth", "Star Anise", "Ginger"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "baklava",
    name: "Baklava",
    country: "Turkey",
    region: "Middle East",
    description: "Sweet pastry made of layers of filo filled with chopped nuts and honey.",
    ingredients: ["Filo Pastry", "Nuts", "Honey", "Butter"],
    category: "dessert",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "fish-chips",
    name: "Fish and Chips",
    country: "United Kingdom",
    region: "Europe",
    description: "Battered white fish served with deep-fried chips and malt vinegar.",
    ingredients: ["Cod", "Potatoes", "Flour", "Beer Batter"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "ceviche",
    name: "Ceviche",
    country: "Peru",
    region: "Americas",
    description: "Fresh raw fish cured in citrus juices, spiced with chili peppers and onions.",
    ingredients: ["Raw Fish", "Lime Juice", "Red Onion", "Cilantro"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1534604973900-c41ab4c94f55?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "shakshuka",
    name: "Shakshuka",
    country: "North Africa",
    region: "Africa",
    description: "Poached eggs in a sauce of tomatoes, chili peppers, and cumin.",
    ingredients: ["Eggs", "Tomatoes", "Bell Peppers", "Cumin"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "dim-sum",
    name: "Dim Sum",
    country: "China",
    region: "Asia",
    description: "A variety of small Cantonese dishes typically enjoyed for brunch.",
    ingredients: ["Shrimp", "Pork", "Flour Wrappers", "Soy Sauce"],
    category: "snack",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gelato",
    name: "Gelato",
    country: "Italy",
    region: "Europe",
    description: "Artisan Italian frozen dessert, denser and smoother than ice cream.",
    ingredients: ["Milk", "Cream", "Sugar", "Hazelnuts"],
    category: "dessert",
    image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "falafel",
    name: "Falafel",
    country: "Egypt",
    region: "Middle East",
    description: "Deep-fried balls made from ground chickpeas and fresh herbs.",
    ingredients: ["Chickpeas", "Parsley", "Coriander", "Garlic"],
    category: "snack",
    image: "https://images.unsplash.com/photo-1547050605-2f268cd5e399?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "churros",
    name: "Churros",
    country: "Mexico",
    region: "Americas",
    description: "Fried dough pastry dusted with cinnamon sugar and dipped in chocolate.",
    ingredients: ["Dough", "Cinnamon", "Sugar", "Chocolate"],
    category: "dessert",
    image: "https://images.unsplash.com/photo-1541445942374-6bd122867808?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "croissant",
    name: "Croissant",
    country: "France",
    region: "Europe",
    description: "Buttery, flaky French pastry with a distinctive crescent shape.",
    ingredients: ["Flour", "Butter", "Yeast", "Sugar"],
    category: "snack",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "pad-thai",
    name: "Pad Thai",
    country: "Thailand",
    region: "Asia",
    description: "Stir-fried rice noodles with eggs, peanuts, and tangy tamarind sauce.",
    ingredients: ["Rice Noodles", "Eggs", "Peanuts", "Tamarind"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
  }
];

export default function FoodPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(allFoods.map((f) => f.category)))

  const filteredFoods = allFoods.filter((food) => {
    const matchesSearch =
      searchQuery === "" ||
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === null || food.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-background dark:from-orange-950/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <Utensils className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Culinary Heritage</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore authentic dishes that define cultures across the globe.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by dish, country, or ingredient..."
              className="pl-10 h-12 rounded-full border-orange-100 focus:ring-orange-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer px-4 py-1 rounded-full"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Badge>
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                className="cursor-pointer px-4 py-1 rounded-full capitalize"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.replace("-", " ")}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFoods.map((food) => (
            <Card key={food.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-black backdrop-blur-md border-none capitalize">
                    {food.category.replace("-", " ")}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-orange-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">{food.country}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{food.name}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4 italic leading-relaxed">
                  "{food.description}"
                </p>
                <div className="flex flex-wrap gap-1">
                  {food.ingredients.map((ing) => (
                    <span key={ing} className="text-[10px] bg-secondary px-2 py-0.5 rounded-full text-secondary-foreground font-medium">
                      {ing}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredFoods.length === 0 && (
          <div className="text-center py-20 italic text-muted-foreground">
            No dishes found matching your search.
          </div>
        )}
      </section>
    </div>
  )
}
