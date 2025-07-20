'use client';
import { useState } from 'react';

export default function FinderPage() {
  const [query, setQuery] = useState('');

  return (
    <main className="relative min-h-screen w-full bg-[#f7f2ff] text-[#292524] antialiased overflow-hidden font-serif">

      <div className="glow-bg" />

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#fcdcbf] via-[#fadadd] to-[#d6c9f0] animate-gradientShift" />

      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-[0.08] bg-[url('/grain.png')]" />

      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Start Your Search
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Find sunscreen tailored to your skin type, values, and lifestyle.
        </p>

        <div className="max-w-xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. oily skin, SPF 50+, reef-safe"
            className="w-full px-6 py-4 rounded-full border border-gray-300 shadow-lg bg-white/80 backdrop-blur-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] transition"
          />
        </div>

        {query && (
          <div className="mt-12 text-gray-500 italic">
            <p>Searching for: <strong>{query}</strong></p>
            <p className="text-sm mt-2">Results will appear here (soon™)</p>
          </div>
        )}
      </div>

      <style jsx>{`
      .glow-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        background: radial-gradient(circle at 30% 30%, #fcd34d, transparent 50%),
                    radial-gradient(circle at 70% 40%, #fbbf24, transparent 50%),
                    radial-gradient(circle at 50% 70%, #fca5a5, transparent 50%);
        animation: shiftGlow 20s ease-in-out infinite;
        background-size: 200% 200%;
        filter: blur(100px);
        opacity: 0.8;
        mix-blend-mode: screen;
      }

      @keyframes shiftGlow {
        0% {
          background-position: 0% 0%;
        }
        50% {
          background-position: 100% 100%;
        }
        100% {
          background-position: 0% 0%;
        }
      }
    `}</style>
    </main>
  );
}
