import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const regionData: Record<
  string,
  {
    title: string
    description: string
    musicStyles: Array<{ name: string; description: string; image: string }>
    dances: Array<{ name: string; description: string; image: string }>
  }
> = {
  africa: {
    title: "African Music & Dance",
    description: "From Afrobeat to traditional drum circles, explore the vibrant rhythms that define African culture",
    musicStyles: [
      {
        name: "Afrobeat",
        description: "Energetic fusion of traditional African rhythms with jazz and funk, popularized by Fela Kuti",
        image: "/afrobeat-musicians-performing-energetically.jpg",
      },
      {
        name: "Highlife",
        description: "Ghanaian and Nigerian music style blending traditional Akan melodies with Western instruments",
        image: "/highlife-band-ghana-nigeria.jpg",
      },
      {
        name: "Soukous",
        description: "Congolese rumba music with fast-paced guitar and dance rhythms",
        image: "/soukous-congolese-music.jpg",
      },
    ],
    dances: [
      {
        name: "Azonto",
        description: "Ghanaian dance characterized by creative hand movements and storytelling gestures",
        image: "/azonto-dance-ghana.jpg",
      },
      {
        name: "Adumu",
        description: "Maasai jumping dance performed by warriors showcasing strength and stamina",
        image: "/maasai-adumu-jumping-dance.jpg",
      },
      {
        name: "Kpanlogo",
        description: "Traditional Ghanaian dance with energetic movements from the Ga people",
        image: "/kpanlogo-dance-ghana.jpg",
      },
    ],
  },
  asia: {
    title: "Asian Music & Dance",
    description: "Discover ancient instruments, classical forms, and spiritual performances across Asia",
    musicStyles: [
      {
        name: "Gamelan",
        description: "Traditional Indonesian ensemble music featuring metallophones and gongs",
        image: "/gamelan-orchestra-indonesia.jpg",
      },
      {
        name: "Raga",
        description: "Classical Indian melodic framework performed in traditional settings",
        image: "/indian-classical-raga-performance.jpg",
      },
      {
        name: "Taiko",
        description: "Japanese drum music with powerful rhythms and choreographed performances",
        image: "/taiko-drums-japanese-performance.jpg",
      },
    ],
    dances: [
      {
        name: "Bharatanatyam",
        description: "Classical Indian dance with intricate footwork and expressive hand gestures",
        image: "/bharatanatyam-classical-indian-dance.jpg",
      },
      {
        name: "Kabuki",
        description: "Traditional Japanese theatrical dance with elaborate costumes and makeup",
        image: "/kabuki-theater-dance-japan.jpg",
      },
      {
        name: "Lion Dance",
        description: "Chinese performance art featuring acrobatic movements in lion costumes",
        image: "/chinese-lion-dance-performance.jpg",
      },
    ],
  },
  europe: {
    title: "European Music & Dance",
    description: "From classical symphonies to folk traditions, explore Europe's rich musical heritage",
    musicStyles: [
      {
        name: "Classical Symphony",
        description: "Orchestral music tradition spanning Bach, Mozart, Beethoven to modern composers",
        image: "/european-symphony-orchestra.jpg",
      },
      {
        name: "Flamenco",
        description: "Passionate Spanish music featuring guitar, vocals, and percussive elements",
        image: "/flamenco-guitar-spain.jpg",
      },
      {
        name: "Celtic Folk",
        description: "Traditional music from Ireland, Scotland with fiddles, bagpipes, and whistles",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    dances: [
      {
        name: "Flamenco",
        description: "Expressive Spanish dance with rhythmic footwork and dramatic arm movements",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Irish Step Dance",
        description: "Percussive dance keeping upper body rigid while feet create rapid rhythms",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Waltz",
        description: "Elegant ballroom dance in triple time originating from Austria and Germany",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  americas: {
    title: "Americas Music & Dance",
    description: "From jazz to salsa, experience the diverse sounds and rhythms of the Americas",
    musicStyles: [
      {
        name: "Jazz",
        description: "American art form with improvisation, swing rhythms, and blue notes",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Samba",
        description: "Brazilian music with African roots, featuring percussion and syncopated rhythms",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Mariachi",
        description: "Mexican ensemble music with violins, trumpets, and traditional guitars",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    dances: [
      {
        name: "Tango",
        description: "Passionate Argentine dance characterized by close embrace and sharp movements",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Samba",
        description: "Energetic Brazilian dance with hip movements performed during Carnival",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Salsa",
        description: "Latin dance with Cuban origins featuring quick footwork and partner work",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "middle-east": {
    title: "Middle Eastern Music & Dance",
    description: "Ancient melodies and mystical rhythms from the cradle of civilization",
    musicStyles: [
      {
        name: "Oud Music",
        description: "Traditional string instrument music central to Arabic classical traditions",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Qawwali",
        description: "Sufi devotional music with powerful vocals and harmonium accompaniment",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Maqam",
        description: "System of melodic modes used in traditional Arab music",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    dances: [
      {
        name: "Belly Dance",
        description: "Expressive dance emphasizing torso movements and isolation techniques",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Dabke",
        description: "Levantine folk dance performed at celebrations with synchronized stomping",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Whirling Dervishes",
        description: "Sufi spiritual dance representing journey to perfection through spinning",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
}

export default function RegionalMusicPage({ params }: { params: { region: string } }) {
  const data = regionData[params.region]

  if (!data) {
    return <div className="container mx-auto px-4 py-12">Region not found</div>
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center px-4">
          <Badge className="mb-4">{params.region.toUpperCase()}</Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">{data.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{data.description}</p>
        </div>
      </section>

      {/* Music Styles Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Music className="h-8 w-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Music Styles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.musicStyles.map((style, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <img
                    src={style.image || "/placeholder.svg"}
                    alt={style.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="lg" variant="secondary">
                      <Play className="mr-2 h-4 w-4" />
                      Listen
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{style.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{style.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dance Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Play className="h-8 w-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Traditional Dances</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.dances.map((dance, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 relative overflow-hidden">
                  <img
                    src={dance.image || "/placeholder.svg"}
                    alt={dance.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="lg" variant="secondary">
                      <Play className="mr-2 h-4 w-4" />
                      Watch
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{dance.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dance.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Explore More Cultures</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover music and dance traditions from other regions around the world
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(regionData).map((region) => (
              <Link key={region} href={`/music/${region}`}>
                <Button variant="outline">{regionData[region].title}</Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
