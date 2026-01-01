import { consumeStream, convertToModelMessages, streamText, tool, type UIMessage } from "ai"
import { z } from "zod"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const prompt = convertToModelMessages(messages)

  const result = streamText({
    model: "openai/gpt-5",
    prompt,
    system: `You are JUANINA's AI Travel Guide - an expert in global cultures, tourism, and travel planning.
    
Your role:
- Help users discover countries, cultures, museums, landmarks, food, and events
- Provide detailed cultural insights, travel tips, and recommendations
- Suggest destinations based on user interests
- Answer questions about history, traditions, cuisine, and customs
- Be warm, knowledgeable, and respectful of all cultures

When recommending places:
- Mention specific countries, museums, landmarks, or events from the JUANINA database
- Provide practical travel information (best times to visit, what to see, cultural etiquette)
- Include interesting cultural facts and historical context
- Suggest related experiences and places

Available tools:
- recommendDestination: Suggest destinations with images
- searchCulturalInfo: Find specific cultural information
- suggestItinerary: Create travel itineraries`,
    tools: {
      recommendDestination: tool({
        description: "Recommend a travel destination with image and details",
        inputSchema: z.object({
          country: z.string().describe("Country name"),
          reason: z.string().describe("Why recommend this destination"),
          highlights: z.array(z.string()).describe("Top attractions or experiences"),
        }),
        execute: async ({ country, reason, highlights }) => {
          return {
            country,
            reason,
            highlights,
            image: `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(country + " travel destination landscape")}`,
          }
        },
      }),
      searchCulturalInfo: tool({
        description: "Search for cultural information about a topic",
        inputSchema: z.object({
          topic: z.string().describe("Cultural topic to search for"),
          country: z.string().optional().describe("Specific country if relevant"),
        }),
        execute: async ({ topic, country }) => {
          return {
            topic,
            country,
            info: `Cultural information about ${topic}${country ? ` in ${country}` : ""}`,
          }
        },
      }),
      suggestItinerary: tool({
        description: "Create a travel itinerary suggestion",
        inputSchema: z.object({
          destination: z.string().describe("Destination name"),
          days: z.number().describe("Number of days"),
          interests: z.array(z.string()).describe("User interests"),
        }),
        execute: async ({ destination, days, interests }) => {
          return {
            destination,
            days,
            interests,
            itinerary: `${days}-day itinerary for ${destination} focusing on ${interests.join(", ")}`,
          }
        },
      }),
    },
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    onFinish: async ({ isAborted }) => {
      if (isAborted) {
        console.log("[v0] AI Guide chat aborted")
      }
    },
    consumeSseStream: consumeStream,
  })
}
