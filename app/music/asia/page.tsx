"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// 🎥 Background & Mini-Video Component
function YouTubeVideo({ videoId, isMini = false, muted = true }: { videoId: string, isMini?: boolean, muted?: boolean }) {
  return (
    <div className={`${isMini ? 'w-full h-44 mt-4 rounded-xl overflow-hidden shadow-inner border border-white/10' : 'fixed inset-0 w-full h-full pointer-events-none z-0'}`}>
      {!isMini && <div className="absolute inset-0 bg-black/65 z-10" />}
      <iframe
        className={`${isMini ? 'w-full h-full' : 'w-[300%] h-[300%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40'}`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=${videoId}&controls=0&modestbranding=1&showinfo=0&rel=0`}
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
}

const culturalHighlights = [
  { name: "Sitar", category: "Music", country: "India", video: "KBYSpR8N6pc" },
  { name: "Guzheng", category: "Music", country: "China", video: "v457IYdMt6A" },
  { name: "K-pop", category: "Music", country: "South Korea", video: "3CvJKTChsl4" },
  { name: "Lion Dance", category: "Dance", country: "East Asia", video: "e2uMziOQVNM" },
  { name: "Kathak", category: "Dance", country: "India", video: "myvq7vMfuV0" },
  { name: "Kabuki", category: "Theatre", country: "Japan", video: "2RAfIsbIaEo" }
];

export default function AsiaMusicPage() {
  const [data, setData] = useState<any[]>([]);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const fetchCulture = async () => {
      const results = await Promise.all(
        culturalHighlights.map(async (item) => {
          const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(item.name)}`);
          const info = await res.json();
          return { ...item, summary: info.extract };
        })
      );
      setData(results);
    };
    fetchCulture();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 font-serif relative overflow-hidden">
      
      {/* 📺 Background Video (Ambient Asia Heritage) */}
      <YouTubeVideo videoId="h_33_E_vA8c" muted={isMuted} />

      {/* 🏛 UI Content Layer */}
      <div className="relative z-20 max-w-6xl mx-auto">
        
        {/* Header with Sound Toggle */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-orange-500/30 pb-6">
          <div>
            <h1 className="text-5xl font-bold text-orange-500 tracking-tighter uppercase leading-none">Asia: Rhythms & Steps</h1>
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 hover:text-white transition-colors font-sans border border-orange-500/20 px-3 py-1 rounded-md"
            >
              {isMuted ? "🔈 Unmute Experience" : "🔊 Sound Active"}
            </button>
          </div>
          <Link href="/explore" className="text-orange-500 hover:bg-orange-500 hover:text-black border border-orange-500 px-6 py-2 rounded-full transition-all font-sans font-bold text-sm uppercase">
            ← Back to Globe
          </Link>
        </div>

        {/* 🏛 Discovery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.length === 0 ? (
            <p className="col-span-full text-center text-orange-500 animate-pulse uppercase tracking-widest">Unlocking cultural archives...</p>
          ) : (
            data.map((item, idx) => (
              <div key={idx} className="group bg-black/40 backdrop-blur-xl border border-white/5 p-6 rounded-2xl hover:border-orange-500/50 transition-all duration-500 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-orange-500/10 text-orange-500 text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-widest border border-orange-500/20">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-[10px] italic uppercase tracking-widest">{item.country}</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                  {item.name}
                </h3>

                <div className="flex-grow">
                  <p className="text-gray-400 text-[13px] leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity line-clamp-3">
                    "{item.summary || "Loading historical context..."}"
                  </p>
                </div>

                {/* 📽 MINI PLAYER FOR EACH ITEM */}
                <div className="mt-4">
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-2">Visual Demonstration:</p>
                  <YouTubeVideo videoId={item.video} isMini={true} muted={isMuted} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
