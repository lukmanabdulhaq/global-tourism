import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, MessageSquare, Heart, Share2 } from "lucide-react"

export default function CommunityPage() {
  const discussions = [
    {
      id: 1,
      author: "Sarah Chen",
      initials: "SC",
      topic: "Best time to visit Japan for cherry blossoms?",
      preview:
        "Planning my first trip to Japan and want to catch the sakura season. Any recommendations on timing and locations?",
      replies: 12,
      likes: 24,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "Miguel Rodriguez",
      initials: "MR",
      topic: "Traditional Nigerian cuisine recommendations",
      preview: "Visiting Lagos next month. What are the must-try local dishes? Looking for authentic experiences!",
      replies: 8,
      likes: 15,
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      author: "Amara Okonkwo",
      initials: "AO",
      topic: "Hidden gems in Paris beyond the tourist spots",
      preview: "I've been to Paris three times and want to explore like a local. Share your favorite hidden spots!",
      replies: 23,
      likes: 42,
      timestamp: "1 day ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance">Community</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Connect with fellow travelers, share experiences, and get advice from locals and culture enthusiasts
            </p>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Discussions
                  </CardTitle>
                  <CardDescription>Join conversations about cultures and travel</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Ask Locals
                  </CardTitle>
                  <CardDescription>Get authentic advice from local experts</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Travel Stories
                  </CardTitle>
                  <CardDescription>Share your cultural experiences</CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* New Post */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Start a Discussion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea placeholder="Ask a question, share a story, or start a conversation..." rows={4} />
                <Button>Post to Community</Button>
              </CardContent>
            </Card>

            {/* Recent Discussions */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Discussions</h2>
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{discussion.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold">{discussion.author}</p>
                            <span className="text-xs text-muted-foreground">{discussion.timestamp}</span>
                          </div>
                          <h3 className="font-medium text-lg mb-2">{discussion.topic}</h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{discussion.preview}</p>
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                              <MessageSquare className="h-4 w-4" />
                              <span>{discussion.replies} replies</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                              <Heart className="h-4 w-4" />
                              <span>{discussion.likes} likes</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                              <Share2 className="h-4 w-4" />
                              <span>Share</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
