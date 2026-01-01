import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { User, MapPin, Award, Heart, BookMarked, Settings, Trophy, Globe, Compass, Star, Flag } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  const badges = [
    { icon: Globe, name: "Explorer", description: "Visited 10+ countries", unlocked: true },
    { icon: Compass, name: "Navigator", description: "Created 5 itineraries", unlocked: true },
    { icon: Heart, name: "Culture Enthusiast", description: "Saved 20+ places", unlocked: true },
    { icon: Star, name: "Contributor", description: "Posted 10+ discussions", unlocked: false },
    { icon: Trophy, name: "Elite Traveler", description: "Visited 50+ sites", unlocked: false },
    { icon: Flag, name: "Festival Goer", description: "Attended 5 festivals", unlocked: false },
  ]

  const savedPlaces = [
    { name: "The Louvre", location: "Paris, France", type: "Museum" },
    { name: "Taj Mahal", location: "Agra, India", type: "Landmark" },
    { name: "Pyramids of Giza", location: "Giza, Egypt", type: "Heritage Site" },
  ]

  const travelJournal = [
    {
      country: "Japan",
      date: "March 2024",
      highlights: "Cherry blossoms, traditional tea ceremony, Tokyo nightlife",
    },
    {
      country: "Nigeria",
      date: "January 2024",
      highlights: "Durbar Festival, Lagos markets, traditional cuisine",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Avatar className="h-32 w-32">
                <AvatarFallback className="text-3xl">
                  <User className="h-16 w-16" />
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold font-serif mb-2">Sarah Chen</h1>
                <p className="text-lg text-muted-foreground mb-4">Cultural Explorer • Member since 2023</p>
                <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>San Francisco, CA</span>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Trophy className="h-3 w-3" />
                    Level 5 Explorer
                  </Badge>
                </div>
              </div>

              <Button variant="outline" className="bg-transparent">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
                <TabsTrigger value="journal">Journal</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        Countries Visited
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">12</p>
                      <p className="text-sm text-muted-foreground mt-1">of 195 countries</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Sites Explored
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">34</p>
                      <p className="text-sm text-muted-foreground mt-1">museums & landmarks</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Badges Earned
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">3</p>
                      <p className="text-sm text-muted-foreground mt-1">of 6 available</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Your Progress</CardTitle>
                    <CardDescription>Keep exploring to unlock more badges and achievements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Explorer Level</span>
                        <span className="text-sm text-muted-foreground">Level 5 (750 / 1000 XP)</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">World Explorer</span>
                        <span className="text-sm text-muted-foreground">12 / 50 countries</span>
                      </div>
                      <Progress value={24} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Cultural Collector</span>
                        <span className="text-sm text-muted-foreground">34 / 100 sites</span>
                      </div>
                      <Progress value={34} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Badges Tab */}
              <TabsContent value="badges">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievement Badges</CardTitle>
                    <CardDescription>Earn badges by exploring cultures and completing challenges</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {badges.map((badge, index) => {
                        const Icon = badge.icon
                        return (
                          <div
                            key={index}
                            className={`text-center p-6 rounded-lg border ${
                              badge.unlocked ? "bg-primary/5 border-primary" : "bg-muted/30 border-muted opacity-50"
                            }`}
                          >
                            <div
                              className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                                badge.unlocked ? "bg-primary/10" : "bg-muted"
                              }`}
                            >
                              <Icon
                                className={`h-8 w-8 ${badge.unlocked ? "text-primary" : "text-muted-foreground"}`}
                              />
                            </div>
                            <h3 className="font-semibold mb-1">{badge.name}</h3>
                            <p className="text-xs text-muted-foreground">{badge.description}</p>
                            {badge.unlocked && (
                              <Badge variant="secondary" className="mt-3">
                                Unlocked
                              </Badge>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Saved Tab */}
              <TabsContent value="saved">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      Saved Places
                    </CardTitle>
                    <CardDescription>Your collection of favorite destinations and sites</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {savedPlaces.map((place, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                              <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{place.name}</h3>
                              <p className="text-sm text-muted-foreground">{place.location}</p>
                            </div>
                          </div>
                          <Badge variant="secondary">{place.type}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Journal Tab */}
              <TabsContent value="journal">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookMarked className="h-5 w-5" />
                      Travel Journal
                    </CardTitle>
                    <CardDescription>Document your cultural journey and experiences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {travelJournal.map((entry, index) => (
                        <div key={index} className="border-l-2 border-primary pl-6 pb-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-lg">{entry.country}</h3>
                            <span className="text-sm text-muted-foreground">{entry.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{entry.highlights}</p>
                        </div>
                      ))}

                      <Button variant="outline" className="w-full bg-transparent">
                        <BookMarked className="mr-2 h-4 w-4" />
                        Add New Entry
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}
