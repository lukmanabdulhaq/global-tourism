export interface Country {
  id: string
  name: string
  code: string
  flag: string
  region: string
  capital: string
  description: string
  image?: string
  coordinates: {
    lat: number
    lng: number
  }
  featured?: boolean
}

export const sampleCountries: Country[] = [
  {
    id: "nigeria",
    name: "Nigeria",
    code: "NG",
    flag: "🇳🇬",
    region: "Africa",
    capital: "Abuja",
    image: "/nigeria-lagos-skyline-zuma-rock-landmarks.jpg",
    description:
      "Rich in diverse cultures, vibrant music scenes, and historic kingdoms. Home to Nollywood and ancient traditions.",
    coordinates: { lat: 9.082, lng: 8.6753 },
    featured: true,
  },
  {
    id: "japan",
    name: "Japan",
    code: "JP",
    flag: "🇯🇵",
    region: "Asia",
    capital: "Tokyo",
    image: "/japan-mount-fuji-cherry-blossoms-temples-tokyo.jpg",
    description:
      "Ancient traditions meet cutting-edge technology. Famous for temples, tea ceremonies, and exquisite cuisine.",
    coordinates: { lat: 36.2048, lng: 138.2529 },
    featured: true,
  },
  {
    id: "egypt",
    name: "Egypt",
    code: "EG",
    flag: "🇪🇬",
    region: "Africa",
    capital: "Cairo",
    image: "/egypt-pyramids-of-giza-sphinx-nile-river.jpg",
    description: "Cradle of ancient civilization with pyramids, pharaohs, and timeless wonders along the Nile.",
    coordinates: { lat: 26.8206, lng: 30.8025 },
    featured: true,
  },
  {
    id: "brazil",
    name: "Brazil",
    code: "BR",
    flag: "🇧🇷",
    region: "South America",
    capital: "Brasília",
    image: "/brazil-rio-de-janeiro-christ-the-redeemer-carnival.jpg",
    description:
      "Vibrant carnival culture, Amazon rainforest, and diverse musical traditions from samba to bossa nova.",
    coordinates: { lat: -14.235, lng: -51.9253 },
    featured: true,
  },
  {
    id: "india",
    name: "India",
    code: "IN",
    flag: "🇮🇳",
    region: "Asia",
    capital: "New Delhi",
    image: "/india-taj-mahal-palaces-colorful-festivals-temples.jpg",
    description:
      "Colorful festivals, ancient spiritual traditions, and incredible culinary diversity across thousands of years.",
    coordinates: { lat: 20.5937, lng: 78.9629 },
    featured: true,
  },
  {
    id: "france",
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    region: "Europe",
    capital: "Paris",
    image: "/france-eiffel-tower-paris-louvre-french-countrysid.jpg",
    description: "Art, fashion, and gastronomy capital. Home to iconic landmarks and centuries of cultural influence.",
    coordinates: { lat: 46.2276, lng: 2.2137 },
    featured: true,
  },
  {
    id: "mexico",
    name: "Mexico",
    code: "MX",
    flag: "🇲🇽",
    region: "North America",
    capital: "Mexico City",
    image: "/mexico-chichen-itza-pyramids-colorful-architecture.jpg",
    description:
      "Ancient Aztec and Maya heritage blend with colonial architecture and vibrant Day of the Dead traditions.",
    coordinates: { lat: 23.6345, lng: -102.5528 },
    featured: false,
  },
  {
    id: "kenya",
    name: "Kenya",
    code: "KE",
    flag: "🇰🇪",
    region: "Africa",
    capital: "Nairobi",
    image: "/kenya-safari-wildlife-maasai-savanna-landscapes.jpg",
    description: "Wildlife safaris, Maasai culture, and stunning landscapes from savannas to coastal beauty.",
    coordinates: { lat: -0.0236, lng: 37.9062 },
    featured: false,
  },
  {
    id: "ghana",
    name: "Ghana",
    code: "GH",
    flag: "🇬🇭",
    region: "Africa",
    capital: "Accra",
    image: "/ghana-accra-cape-coast-castle-kente-cloth.jpg",
    description:
      "Gateway to West Africa with rich Ashanti heritage, vibrant markets, historic castles, and traditional kente cloth.",
    coordinates: { lat: 7.9465, lng: -1.0232 },
    featured: true,
  },
]
