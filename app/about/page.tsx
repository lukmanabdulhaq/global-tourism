import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Heart, Users, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance">About JUANINA</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              The Digital Museum of the World - Preserving and celebrating global cultures
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Mission */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Globe className="h-6 w-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  JUANINA is a global, mobile-first digital museum and tourism platform that combines culture, history,
                  travel planning, and immersive technology into one experience. We are dedicated to preserving and
                  showcasing world cultures digitally while enabling ethical tourism and authentic cultural engagement.
                </p>
                <h3>What We Do</h3>
                <ul>
                  <li>Preserve and showcase world cultures digitally</li>
                  <li>Educate users through history, art, food, language, and traditions</li>
                  <li>Enable ethical tourism via bookings, donations, and local engagement</li>
                  <li>Use AI to simplify discovery, planning, and learning</li>
                </ul>
              </CardContent>
            </Card>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Cultural Respect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We honor authentic representation and work with local communities to ensure cultural accuracy and
                    respect.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Community First
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We empower local voices and foster connections between travelers and cultural guardians worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Ethical Tourism
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We promote responsible travel that benefits local communities and preserves cultural heritage for
                    future generations.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Partnerships */}
            <Card id="partnerships">
              <CardHeader>
                <CardTitle className="text-2xl">Partnerships</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  JUANINA collaborates with museums, cultural institutions, tourism boards, and local communities
                  worldwide to provide authentic, verified content and sustainable tourism opportunities.
                </p>
              </CardContent>
            </Card>

            {/* Ethics */}
            <Card id="ethics">
              <CardHeader>
                <CardTitle className="text-2xl">Cultural Ethics</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We are committed to ethical representation of cultures, working directly with communities to ensure
                  accurate portrayal, respect for traditions, and equitable benefit sharing from tourism activities.
                </p>
                <h4>Our Principles:</h4>
                <ul>
                  <li>Verified cultural sources and community moderation</li>
                  <li>Authentic representation without appropriation</li>
                  <li>Privacy protection and data security</li>
                  <li>Fair compensation for local guides and contributors</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
