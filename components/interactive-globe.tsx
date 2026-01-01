"use client";

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export default function InteractiveGlobe() {
  const globeEl = useRef<any>();
  const [countries, setCountries] = useState({ features: [] });
  const [selectedData, setSelectedData] = useState<any>(null);
  const [history, setHistory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  const handleCountryClick = (properties: any) => {
    if (!properties) return;
    setSelectedData(properties);
    setHistory("Searching archives...");

    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(properties.NAME)}`)
      .then(res => res.json())
      .then(data => setHistory(data.extract || "No specific historical summary found."))
      .catch(() => setHistory("Connection to archives lost."));

    if (globeEl.current) {
      globeEl.current.pointOfView({ 
        lat: properties.LABEL_Y || 0, 
        lng: properties.LABEL_X || 0, 
        altitude: 2 
      }, 1000);
    }
  };

  // 🔍 Search Functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = countries.features.find((c: any) => 
      c.properties.NAME.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (found) {
      handleCountryClick((found as any).properties);
      setSearchQuery("");
    } else {
      alert("Country not found! Try a different name.");
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl" style={{ height: '80vh' }}>
      
      {/* 🔎 SEARCH BAR */}
      <div className="absolute top-6 z-[110] w-full max-w-md px-4">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a country..."
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition-all">
            GO
          </button>
        </form>
      </div>

      <Globe
        ref={globeEl}
        width={typeof window !== 'undefined' ? (window.innerWidth > 1000 ? 1100 : window.innerWidth * 0.95) : 800}
        height={typeof window !== 'undefined' ? window.innerHeight * 0.75 : 600}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        polygonsData={countries.features}
        polygonCapColor={(d: any) => d.properties === selectedData ? 'rgba(255, 165, 0, 0.4)' : 'rgba(0, 255, 150, 0.1)'}
        polygonStrokeColor={() => '#444'}
        onPolygonClick={({ properties }: any) => handleCountryClick(properties)}
      />

      {/* 📜 POP-UP OVERLAY */}
      {selectedData && (
        <div className="absolute inset-0 flex items-center justify-center z-[120] bg-black/40 backdrop-blur-sm">
          <div className="bg-[#0f0f0f] p-8 rounded-3xl border-2 border-orange-500 w-[90%] max-w-lg shadow-[0_0_50px_rgba(255,165,0,0.2)]">
            <h2 className="text-[#ffaa00] text-3xl font-serif mb-4 uppercase">{selectedData.NAME}</h2>
            
            {selectedData.ISO_A2 && (
              <img
                src={`https://flagcdn.com/w160/${selectedData.ISO_A2.toLowerCase()}.png`}
                className="w-20 mb-4 rounded border border-white/10"
                alt="flag"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            )}

            <div className="max-h-[30vh] overflow-y-auto mb-6">
              <p className="text-gray-300 italic font-serif leading-relaxed text-lg">
                "{history}"
              </p>
            </div>

            <button 
              onClick={() => setSelectedData(null)} 
              className="w-full py-4 bg-orange-500 text-black font-black uppercase rounded-xl hover:bg-orange-400 transition-colors"
            >
              Return to World Map
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
