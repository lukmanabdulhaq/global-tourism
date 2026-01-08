"use client"

import { useEffect, useState } from "react"

export default function InteractiveGlobe() {
  const [Globe, setGlobe] = useState<any>(null)

  useEffect(() => {
    let mounted = true

    // Dynamically import to prevent SSR (Server Side Rendering) crashes
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
      <div className="h-[420px] w-full flex items-center justify-center text-muted-foreground bg-black/5 rounded-xl border border-dashed">
        <div className="animate-pulse">Loading global data...</div>
      </div>
    )
  }

  return (
    <div className="h-[420px] w-full overflow-hidden rounded-xl">
      <Globe
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        width={600}
        height={420}
      />
    </div>
  )
}
