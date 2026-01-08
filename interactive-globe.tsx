"use client"

import { useEffect, useState } from "react"

export default function InteractiveGlobe() {
  const [Globe, setGlobe] = useState<any>(null)

  useEffect(() => {
    let mounted = true

    // IMPORTANT: load react-globe.gl ONLY after client mount
    import("react-globe.gl")
      .then((mod) => {
        if (mounted) {
          setGlobe(() => mod.default)
        }
      })
      .catch((err) => {
        console.error("Failed to load globe:", err)
      })

    return () => {
      mounted = false
    }
  }, [])

  if (!Globe) {
    return (
      <div className="h-[420px] w-full flex items-center justify-center text-muted-foreground">
        Loading globe…
      </div>
    )
  }

  return (
    <div className="h-[420px] w-full">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
      />
    </div>
  )
}
