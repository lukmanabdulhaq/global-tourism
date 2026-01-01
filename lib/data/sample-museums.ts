export interface Museum {
  id: string
  name: string
  country: string
  city: string
  description: string
  type: "museum" | "landmark" | "heritage-site"
  image: string
  coordinates: {
    lat: number
    lng: number
  }
  featured?: boolean
}

export const sampleMuseums: Museum[] = [
  {
    id: "louvre",
    name: "The Louvre",
    country: "France",
    city: "Paris",
    description:
      "World's largest art museum and historic monument, home to the Mona Lisa and thousands of masterpieces.",
    type: "museum",
    image: "/louvre-museum-paris.png",
    coordinates: { lat: 48.8606, lng: 2.3376 },
    featured: true,
  },
  {
    id: "pyramids-giza",
    name: "Pyramids of Giza",
    country: "Egypt",
    city: "Giza",
    description: "Ancient wonders of the world, built over 4,500 years ago as tombs for pharaohs.",
    type: "landmark",
    image: "/giza-pyramids.png",
    coordinates: { lat: 29.9792, lng: 31.1342 },
    featured: true,
  },
  {
    id: "british-museum",
    name: "British Museum",
    country: "United Kingdom",
    city: "London",
    description: "Houses vast collection of world art and artifacts spanning two million years of history.",
    type: "museum",
    image: "/british-museum-london.jpg",
    coordinates: { lat: 51.5194, lng: -0.127 },
    featured: true,
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    country: "Peru",
    city: "Cusco Region",
    description: "15th-century Inca citadel set high in the Andes Mountains, a UNESCO World Heritage site.",
    type: "heritage-site",
    image: "/machu-picchu-peru.png",
    coordinates: { lat: -13.1631, lng: -72.545 },
    featured: true,
  },
  {
    id: "national-museum-africa",
    name: "National Museum of African Art",
    country: "USA",
    city: "Washington D.C.",
    description: "Smithsonian's museum dedicated to African art with extensive collections and exhibitions.",
    type: "museum",
    image: "/national-museum-african-art.jpg",
    coordinates: { lat: 38.8883, lng: -77.026 },
    featured: false,
  },
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    country: "India",
    city: "Agra",
    description: "Ivory-white marble mausoleum, symbol of eternal love and architectural masterpiece.",
    type: "landmark",
    image: "/taj-mahal-india.png",
    coordinates: { lat: 27.1751, lng: 78.0421 },
    featured: true,
  },
]
