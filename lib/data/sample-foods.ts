export interface FoodDish {
  id: string
  name: string
  country: string
  region: string
  description: string
  ingredients: string[]
  category: "main-dish" | "dessert" | "snack" | "beverage"
  image: string // Added this line
  featured?: boolean
}

export const sampleFoods: FoodDish[] = [
  {
    id: "jollof-rice",
    name: "Jollof Rice",
    country: "Nigeria",
    region: "Africa",
    description: "Beloved West African rice dish cooked in a rich tomato sauce with spices and vegetables.",
    ingredients: ["Rice", "Tomatoes", "Onions", "Peppers", "Spices", "Oil"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {  
    id: "sushi",
    name: "Sushi",
    country: "Japan",
    region: "Asia",
    description: "Traditional Japanese dish featuring vinegared rice combined with raw fish and seaweed.",
    ingredients: ["Rice", "Fish", "Seaweed", "Vegetables", "Wasabi", "Soy Sauce"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "tacos",
    name: "Tacos",
    country: "Mexico",
    region: "Americas",
    description: "Iconic Mexican street food with soft tortillas filled with seasoned meat and salsa.",
    ingredients: ["Tortillas", "Meat", "Onions", "Cilantro", "Lime", "Salsa"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "croissant",
    name: "Croissant",
    country: "France",
    region: "Europe",
    description: "Buttery, flaky French pastry with distinctive crescent shape, perfect for breakfast.",
    ingredients: ["Flour", "Butter", "Yeast", "Milk", "Sugar", "Salt"],
    category: "snack",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "pad-thai",
    name: "Pad Thai",
    country: "Thailand",
    region: "Asia",
    description: "Stir-fried rice noodle dish with eggs, peanuts, and tangy tamarind sauce.",
    ingredients: ["Rice Noodles", "Eggs", "Peanuts", "Tamarind", "Fish Sauce", "Bean Sprouts"],
    category: "main-dish",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "baklava",
    name: "Baklava",
    country: "Turkey",
    region: "Middle East",
    description: "Sweet pastry made of layers of filo filled with chopped nuts and honey syrup.",
    ingredients: ["Filo Pastry", "Nuts", "Honey", "Butter", "Cinnamon"],
    category: "dessert",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
]
