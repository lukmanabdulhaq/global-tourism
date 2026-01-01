"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Utensils, Music, Languages, Award, Building2, Calendar, Info } from "lucide-react"
import type { Country } from "@/lib/data/sample-countries"

export function CountryTabs({ country }: { country: Country }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
              <TabsTrigger value="overview" className="text-xs md:text-sm">
                <Info className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="history" className="text-xs md:text-sm">
                <Book className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">History</span>
              </TabsTrigger>
              <TabsTrigger value="food" className="text-xs md:text-sm">
                <Utensils className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Food</span>
              </TabsTrigger>
              <TabsTrigger value="music" className="text-xs md:text-sm">
                <Music className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Music</span>
              </TabsTrigger>
              <TabsTrigger value="language" className="text-xs md:text-sm">
                <Languages className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Language</span>
              </TabsTrigger>
              <TabsTrigger value="heroes" className="text-xs md:text-sm">
                <Award className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Heroes</span>
              </TabsTrigger>
              <TabsTrigger value="landmarks" className="text-xs md:text-sm">
                <Building2 className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Landmarks</span>
              </TabsTrigger>
              <TabsTrigger value="events" className="text-xs md:text-sm">
                <Calendar className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Events</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <OverviewTab country={country} />
            </TabsContent>

            <TabsContent value="history">
              <HistoryTab country={country} />
            </TabsContent>

            <TabsContent value="food">
              <FoodTab country={country} />
            </TabsContent>

            <TabsContent value="music">
              <MusicTab country={country} />
            </TabsContent>

            <TabsContent value="language">
              <LanguageTab country={country} />
            </TabsContent>

            <TabsContent value="heroes">
              <HeroesTab country={country} />
            </TabsContent>

            <TabsContent value="landmarks">
              <LandmarksTab country={country} />
            </TabsContent>

            <TabsContent value="events">
              <EventsTab country={country} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function OverviewTab({ country }: { country: Country }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>About {country.name}</CardTitle>
          <CardDescription>General information and cultural overview</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <div className="not-prose mb-6">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                poster={`/placeholder.svg?height=400&width=700&query=${country.name} cultural landmarks`}
              >
                <source
                  src={`/placeholder.mp4?query=${country.name} culture tourism landmarks heritage sites`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Explore {country.name} - Cultural Heritage & Landmarks
            </p>
          </div>

          <p>{country.description}</p>
          <h3>Geography</h3>
          <p>
            {country.name} is located in {country.region} with its capital in {country.capital}. The country features
            diverse landscapes and a rich natural heritage.
          </p>
          <h3>Culture & Traditions</h3>
          <p>
            The culture of {country.name} is characterized by vibrant traditions, unique customs, and a strong sense of
            community. From traditional clothing to daily rituals, the cultural identity is deeply rooted in history.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function HistoryTab({ country }: { country: Country }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>History of {country.name}</CardTitle>
          <CardDescription>From ancient times to the modern era</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <h3>Ancient History</h3>
          <p>
            The ancient history of {country.name} is marked by the rise of early civilizations, kingdoms, and empires
            that shaped the region. Archaeological findings reveal sophisticated societies with advanced knowledge in
            agriculture, trade, and governance.
          </p>

          <h3>Colonial Period</h3>
          <p>
            During the colonial era, {country.name} experienced significant changes in political structure, economy, and
            social systems. This period left lasting impacts on the country's development.
          </p>

          <h3>Independence & Modern Era</h3>
          <p>
            {country.name} achieved independence and has since been building its national identity. The modern era has
            seen economic development, cultural renaissance, and increasing global engagement.
          </p>

          <h3>Key Historical Events</h3>
          <ul>
            <li>Establishment of early kingdoms and dynasties</li>
            <li>Colonial encounters and resistance movements</li>
            <li>Independence struggle and nation-building</li>
            <li>Contemporary developments and achievements</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function FoodTab({ country }: { country: Country }) {
  const sampleDishes = [
    {
      name: "Traditional Dish 1",
      description: `A staple food in ${country.name}, made with local ingredients and traditional cooking methods.`,
    },
    {
      name: "Traditional Dish 2",
      description: `Popular festive meal that brings families together, featuring unique spices and flavors.`,
    },
    {
      name: "Traditional Dish 3",
      description: `Street food favorite enjoyed across ${country.name}, known for its bold taste and aroma.`,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Cuisine of {country.name}</CardTitle>
          <CardDescription>Traditional dishes, ingredients, and culinary heritage</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p>
            The cuisine of {country.name} is a reflection of its cultural diversity, geography, and history. Local
            ingredients, traditional cooking techniques, and family recipes passed down through generations create a
            unique gastronomic identity.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleDishes.map((dish, index) => (
          <Card key={index}>
            <div className="h-40 bg-gradient-to-br from-accent/20 to-primary/20" />
            <CardHeader>
              <CardTitle className="text-lg">{dish.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{dish.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function MusicTab({ country }: { country: Country }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Music & Dance of {country.name}</CardTitle>
          <CardDescription>Traditional sounds, instruments, and performances</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <h3>Traditional Music</h3>
          <p>
            The musical heritage of {country.name} includes ancient rhythms, ceremonial songs, and folk melodies that
            have been preserved through oral tradition. Music plays a vital role in celebrations, rituals, and
            storytelling.
          </p>

          <h3>Instruments</h3>
          <p>
            Traditional instruments unique to {country.name} include drums, string instruments, and wind instruments
            crafted from local materials. Each instrument carries cultural significance and is often associated with
            specific ceremonies.
          </p>

          <h3>Dance Traditions</h3>
          <p>
            Dance in {country.name} is more than entertainment - it's a form of communication, storytelling, and
            spiritual expression. Traditional dances are performed during festivals, weddings, and cultural
            celebrations.
          </p>

          <h3>Modern Influence</h3>
          <p>
            Contemporary musicians from {country.name} blend traditional elements with modern genres, creating unique
            sounds that resonate globally while honoring cultural roots.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function LanguageTab({ country }: { country: Country }) {
  const commonPhrases = [
    { phrase: "Hello", translation: "Greeting" },
    { phrase: "Thank you", translation: "Expression of gratitude" },
    { phrase: "Welcome", translation: "Welcoming phrase" },
    { phrase: "How are you?", translation: "Common question" },
    { phrase: "Goodbye", translation: "Farewell" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Languages of {country.name}</CardTitle>
          <CardDescription>Main languages, dialects, and common phrases</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <h3>Primary Languages</h3>
          <p>
            {country.name} is linguistically diverse with multiple languages spoken across different regions. The
            official language serves as a unifying medium while regional languages preserve cultural identity.
          </p>

          <h3>Language History</h3>
          <p>
            The linguistic landscape has been shaped by migration, trade, and cultural exchange over centuries.
            Indigenous languages coexist with languages introduced through historical interactions.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Phrases</CardTitle>
          <CardDescription>Learn basic expressions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {commonPhrases.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                <span className="font-medium">{item.phrase}</span>
                <span className="text-sm text-muted-foreground">{item.translation}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function HeroesTab({ country }: { country: Country }) {
  const heroes = [
    {
      name: "Cultural Leader 1",
      role: "Independence Hero",
      achievement: `Led ${country.name} to independence and championed national unity.`,
    },
    {
      name: "Artist 1",
      role: "Renowned Artist",
      achievement: `Internationally acclaimed for bringing ${country.name}'s art to global recognition.`,
    },
    {
      name: "Innovator 1",
      role: "Innovator",
      achievement: `Made groundbreaking contributions in science and technology from ${country.name}.`,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Heroes & Icons of {country.name}</CardTitle>
          <CardDescription>Influential figures who shaped the nation</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {heroes.map((hero, index) => (
          <Card key={index}>
            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Award className="h-16 w-16 text-primary" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{hero.name}</CardTitle>
              <CardDescription>{hero.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{hero.achievement}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function LandmarksTab({ country }: { country: Country }) {
  const landmarks = [
    {
      name: "Historic Site 1",
      type: "Heritage Site",
      description: `Ancient landmark showcasing ${country.name}'s architectural heritage.`,
    },
    {
      name: "Natural Wonder 1",
      type: "Natural Landmark",
      description: `Breathtaking natural formation unique to ${country.name}.`,
    },
    {
      name: "Monument 1",
      type: "Monument",
      description: `Iconic monument representing ${country.name}'s identity and values.`,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Landmarks & Museums in {country.name}</CardTitle>
          <CardDescription>Must-visit sites and cultural institutions</CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-4">
        {landmarks.map((landmark, index) => (
          <Card key={index}>
            <div className="flex flex-col md:flex-row">
              <div className="h-48 md:h-auto md:w-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Building2 className="h-12 w-12 text-primary" />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{landmark.name}</CardTitle>
                    <span className="text-sm text-muted-foreground">{landmark.type}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{landmark.description}</p>
                  <div className="flex gap-2">
                    <button className="text-sm text-primary hover:underline">View Details</button>
                    <span className="text-muted-foreground">|</span>
                    <button className="text-sm text-primary hover:underline">Get Directions</button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function EventsTab({ country }: { country: Country }) {
  const events = [
    {
      name: "National Festival",
      date: "Annual",
      description: `Major celebration showcasing ${country.name}'s culture, music, and traditions.`,
    },
    {
      name: "Cultural Exhibition",
      date: "Quarterly",
      description: `Art and heritage exhibitions highlighting ${country.name}'s creative talents.`,
    },
    {
      name: "Traditional Ceremony",
      date: "Seasonal",
      description: `Ancient ritual ceremony practiced for generations in ${country.name}.`,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Festivals & Events in {country.name}</CardTitle>
          <CardDescription>Annual celebrations and cultural gatherings</CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-4">
        {events.map((event, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{event.name}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
