export interface CulturalEvent {
  id: string
  name: string
  country: string
  city: string
  description: string
  category: "festival" | "exhibition" | "concert" | "celebration"
  date: string
  image: string
  featured?: boolean
}

export const sampleEvents: CulturalEvent[] = [
  {
    id: "rio-carnival",
    name: "Rio Carnival",
    country: "Brazil",
    city: "Rio de Janeiro",
    description: "World's largest carnival celebration with samba parades, costumes, and street parties.",
    category: "festival",
    date: "2024-02-09",
    image: "/rio-carnival-brazil-samba.jpg",
    featured: true,
  },
  {
    id: "diwali",
    name: "Diwali - Festival of Lights",
    country: "India",
    city: "Various Cities",
    description: "Hindu festival celebrating the victory of light over darkness with lamps, fireworks, and sweets.",
    category: "celebration",
    date: "2024-11-01",
    image: "/diwali-festival-lights-india.jpg",
    featured: true,
  },
  {
    id: "day-of-dead",
    name: "Día de los Muertos",
    country: "Mexico",
    city: "Mexico City",
    description: "Mexican celebration honoring deceased loved ones with colorful altars, marigolds, and sugar skulls.",
    category: "celebration",
    date: "2024-11-01",
    image: "/day-of-the-dead-mexico-altar.jpg",
    featured: true,
  },
  {
    id: "durbar-festival",
    name: "Durbar Festival",
    country: "Nigeria",
    city: "Kano",
    description: "Grand horse parade celebrating Islamic heritage with elaborate costumes and cultural displays.",
    category: "festival",
    date: "2024-06-15",
    image: "/durbar-festival-nigeria-horses.jpg",
    featured: true,
  },
  {
    id: "cherry-blossom",
    name: "Hanami - Cherry Blossom Festival",
    country: "Japan",
    city: "Tokyo",
    description: "Traditional Japanese custom of enjoying the beauty of cherry blossoms with picnics under trees.",
    category: "festival",
    date: "2024-03-20",
    image: "/cherry-blossom-festival-japan-hanami.jpg",
    featured: true,
  },
]
