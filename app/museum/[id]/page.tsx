import { notFound } from "next/navigation"
import { sampleMuseums } from "@/lib/data/sample-museums"
import { MuseumHero } from "@/components/museum/museum-hero"
import { MuseumDetails } from "@/components/museum/museum-details"
import { MuseumGallery } from "@/components/museum/museum-gallery"
import { MuseumVisitInfo } from "@/components/museum/museum-visit-info"

export default async function MuseumPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const museum = sampleMuseums.find((m) => m.id === id)

  if (!museum) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <MuseumHero museum={museum} />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <MuseumDetails museum={museum} />
              <MuseumGallery museum={museum} />
            </div>
            <div className="lg:col-span-1">
              <MuseumVisitInfo museum={museum} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return sampleMuseums.map((museum) => ({
    id: museum.id,
  }))
}
