"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// 🎥 Background & Mini-Video Component
function YouTubeVideo({ videoId, isMini = false, muted = true }: { videoId: string, isMini?: boolean, muted?: boolean }) {
  return (
    <div className={`${isMini ? 'w-full h-44 mt-4 rounded-xl overflow-hidden shadow-inner border border-white/10' : 'fixed inset-0 w-full h-full pointer-events-none z-0'}`}>
      {!isMini && <div className="absolute inset-0 bg-black/70 z-10" />}
      <iframe
        className={`${isMini ? 'w-full h-full scale-110' : 'w-[300%] h-[300%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40'}`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=${videoId}&controls=0&modestbranding=1&showinfo=0&rel=0`}
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
}

const culturalHighlights = [
  { name: "Oud", category: "Instrument", origin: "Middle East", video: "dvGLdDk08OA" },
  { name: "Belly dance", category: "Dance", origin: "Egypt", video: "KH7iGUS2WOY" },
  { name: "Dabke", category: "Dance", origin: "Levant", video: "jzk1a5GVLwA" },
  { name: "Sufi music", category: "Spirit", origin: "Turkey/Iran", video: "C012Cv7kPeY" },
  { name: "Arabic maqam", category: "Theory", origin: "Arab World", video: "N9Lv8xQhyR0" },
  { name: "Tanoura", category: "Dance", origin: "Egypt", video: "lelLYdkP6QI" }
];

export default function MiddleEastMusicPage() {
  const [data, setData] = useState<any[]>([]);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const results = await Promise.all(
        culturalHighlights.map(async (item) => {
          const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(item.name)}`);
          const info = await res.json();
          return { ...item, summary: info.extract };
        })
      );
      setData(results);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#050a05] text-white p-8 font-serif relative overflow-hidden">
      
      {/* 📺 Background Video (Ambient Middle East Heritage) */}
      <YouTubeVideo videoId="3XqfK9i0h-U" muted={isMuted} />

      {/* 🏛 UI Content Layer */}
      <div className="relative z-20 max-w-6xl mx-auto">
        
        {/* Header with Sound Toggle */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-emerald-500/30 pb-6">
          <div>
            <h1 className="text-5xl font-bold text-emerald-500 tracking-tighter uppercase leading-none">Middle East: Mystic Melodies</h1>
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 hover:text-white transition-colors font-sans border border-emerald-500/20 px-3 py-1 rounded-md"
            >
              {isMuted ? "🔈 Unmute Experience" : "🔊 Sound Active"}
            </button>
          </div>
          <Link href="/explore" className="text-emerald-500 hover:bg-emerald-500 hover:text-black border border-emerald-500 px-6 py-2 rounded-full transition-all font-sans font-bold text-sm uppercase">
            ← Back to Globe
          </Link>
        </div>

        {/* 🏛 Cultural Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.length === 0 ? (
            <p className="col-span-full text-center text-emerald-500 animate-pulse uppercase tracking-widest">Listening to the desert winds...</p>
          ) : (
            data.map((item, idx) => (
              <div key={idx} className="group bg-[#0a150a]/60 backdrop-blur-xl border border-white/5 p-6 rounded-2xl hover:border-emerald-500/50 transition-all duration-500 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-emerald-500/10 text-emerald-500 text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-widest border border-emerald-500/20">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-[10px] italic uppercase tracking-widest">{item.origin}</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                  {item.name}
                </h3>

                <div className="flex-grow">
                  <p className="text-gray-300 text-[13px] leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity line-clamp-3">
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
