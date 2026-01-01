import { notFound } from "next/navigation"
import { sampleCountries } from "@/lib/data/sample-countries"
import { CountryHero } from "@/components/country/country-hero"
import { CountryTabs } from "@/components/country/country-tabs"

export default async function CountryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const country = sampleCountries.find((c) => c.id === id)

  if (!country) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <CountryHero country={country} />
      <CountryTabs country={country} />
    </div>
  )
}

export async function generateStaticParams() {
  return sampleCountries.map((country) => ({
    id: country.id,
  }))
}
