"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// ✅ The YouTube component now takes 'isMuted' as a prop
function YouTubeBackground({ videoId, isMini = false, isMuted }: { videoId: string, isMini?: boolean, isMuted: boolean }) {
  const id = videoId.includes('v=') ? videoId.split('v=')[1].split('&')[0] : videoId.split('/').pop();

  return (
    <div className={`${isMini ? 'w-full h-40 mt-4 rounded-xl overflow-hidden' : 'fixed inset-0 w-full h-full pointer-events-none z-0'}`}>
      {!isMini && <div className="absolute inset-0 bg-black/60 z-10" />}
      <iframe
        className={`${isMini ? 'w-full h-full' : 'w-[300%] h-[300%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40'}`}
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${id}&controls=0&modestbranding=1&showinfo=0&rel=0`}
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
}

const africanHighlights = [
  { name: "Afrobeats", category: "Music", origin: "Nigeria", video: "xfjXduz9EA0" },
  { name: "Djembe", category: "Instrument", origin: "West Africa", video: "kZHfmgIb4mc" },
  { name: "Kora", category: "Instrument", origin: "Gambia/Mali", video: "-cLAwAOi-hA" },
  { name: "Zulu dance", category: "Dance", origin: "South Africa", video: "7aijbxag0t8" },
  { name: "Ghomala'", category: "Dance", origin: "Cameroon", video: "WuYmTVAlxsE" },
  { name: "Agbadza", category: "Dance", origin: "Ghana", video: "5LPgraFseKk" }
];

export default function AfricaMusicPage() {
  // ✅ FIX: State is now correctly inside the component
  const [isMuted, setIsMuted] = useState(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchAfricaCulture = async () => {
      const results = await Promise.all(
        africanHighlights.map(async (item) => {
          const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(item.name)}`);
          const info = await res.json();
          return { ...item, summary: info.extract };
        })
      );
      setData(results);
    };
    fetchAfricaCulture();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 font-serif relative overflow-hidden">
      
      {/* 📺 Background Video - passing isMuted prop */}
      <YouTubeBackground videoId="7IEnuEOf4G0" isMuted={isMuted} />

      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-yellow-600/30 pb-8">
          <div>
            <h1 className="text-6xl font-black text-yellow-500 tracking-tighter uppercase leading-tight">Africa: The Mother Beat</h1>
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-yellow-500 hover:text-white transition-colors"
            >
              {isMuted ? "🔈 Unmute Experience" : "🔊 Sound On"}
            </button>
          </div>
          <Link href="/explore" className="text-yellow-500 border border-yellow-500 px-8 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition-all font-bold uppercase text-sm">
            Return to Globe
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, idx) => (
            <div key={idx} className="group bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex flex-col h-full">
              <span className="bg-yellow-600/20 text-yellow-500 text-[10px] px-3 py-1 rounded-full uppercase font-black tracking-widest w-fit">
                {item.category}
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">{item.name}</h3>
              <p className="text-gray-400 text-xs italic line-clamp-3 mb-4">"{item.summary}"</p>

              <div className="mt-auto">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Live Demonstration</p>
                {/* 📽 Mini Player - passing isMuted prop */}
                <YouTubeBackground videoId={item.video} isMini={true} isMuted={isMuted} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
