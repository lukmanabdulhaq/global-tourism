"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Compass, Calendar, DollarSign, Users, Sparkles } from "lucide-react"

export default function TravelPlannerPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Compass className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance">Travel Planner</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Create your perfect cultural journey with personalized itineraries and AI-powered recommendations
            </p>
          </div>
        </div>
      </section>

      {/* Planner */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-12">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {num}
                  </div>
                  {num < 3 && <div className={`flex-1 h-1 mx-4 ${step > num ? "bg-primary" : "bg-muted"}`} />}
                </div>
              ))}
            </div>

            {/* Step 1: Destination & Dates */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Where and When?</CardTitle>
                  <CardDescription>Tell us about your travel destination and dates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Input id="destination" placeholder="e.g., Japan, Nigeria, France" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-date">End Date</Label>
                      <Input id="end-date" type="date" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <Select>
                      <SelectTrigger id="travelers">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Solo Traveler</SelectItem>
                        <SelectItem value="2">Couple</SelectItem>
                        <SelectItem value="family">Family (3-5)</SelectItem>
                        <SelectItem value="group">Group (6+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={() => setStep(2)} className="w-full">
                    Next: Preferences
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Preferences */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Your Interests</CardTitle>
                  <CardDescription>Help us personalize your itinerary</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select>
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select budget..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">Budget ($ - $$)</SelectItem>
                        <SelectItem value="moderate">Moderate ($$ - $$$)</SelectItem>
                        <SelectItem value="luxury">Luxury ($$$ - $$$$)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Travel Style</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Culture & History",
                        "Food & Cuisine",
                        "Nature & Adventure",
                        "Art & Museums",
                        "Festivals & Events",
                        "Relaxation",
                      ].map((style) => (
                        <label
                          key={style}
                          className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-accent transition-colors"
                        >
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{style}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-notes">Additional Notes</Label>
                    <Textarea
                      id="additional-notes"
                      placeholder="Any specific requirements, dietary restrictions, or preferences..."
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={() => setStep(1)} variant="outline" className="flex-1 bg-transparent">
                      Back
                    </Button>
                    <Button onClick={() => setStep(3)} className="flex-1">
                      Next: Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Review & Generate */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Review Your Trip</CardTitle>
                  <CardDescription>Check the details before we create your itinerary</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Travel Dates</p>
                        <p className="text-sm text-muted-foreground">March 15 - March 25, 2024</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Compass className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Destination</p>
                        <p className="text-sm text-muted-foreground">Japan</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Travelers</p>
                        <p className="text-sm text-muted-foreground">Couple (2 people)</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Budget</p>
                        <p className="text-sm text-muted-foreground">Moderate ($$ - $$$)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={() => setStep(2)} variant="outline" className="flex-1 bg-transparent">
                      Back
                    </Button>
                    <Button className="flex-1">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Itinerary
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick Options */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Or Choose a Popular Itinerary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Cultural Explorer</CardTitle>
                    <CardDescription>Museums, heritage sites, and traditions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Details
                    </Button>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Food Lover's Journey</CardTitle>
                    <CardDescription>Culinary experiences and local cuisine</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Details
                    </Button>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Festival Hopper</CardTitle>
                    <CardDescription>Experience authentic celebrations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
