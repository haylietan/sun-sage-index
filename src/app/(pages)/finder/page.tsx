'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SUNSCREENS } from '@/app/(api)/api/graphql/queries';
import client from '@/app/(api)/_datalib/_typeDefs/apollo-client';
import { ApolloProvider } from '@apollo/client';

function FinderContent() {
  const [query, setQuery] = useState('');
  const { data, loading, error } = useQuery(GET_SUNSCREENS);

  const filteredResults = data?.sunscreens?.filter((sunscreen: any) => {
    const q = query.toLowerCase();
    return (
      sunscreen.name.toLowerCase().includes(q) ||
      sunscreen.brand.toLowerCase().includes(q) ||
      sunscreen.skinType.some((type: string) => type.toLowerCase().includes(q)) ||
      sunscreen.tag.some((tag: string) => tag.toLowerCase().includes(q)) ||
      sunscreen.spf.toString().includes(q) ||
      sunscreen.finish.toLowerCase().includes(q)
    );
  });

  return (
    <main className="relative min-h-screen w-full bg-[#f7f2ff] text-[#292524] antialiased overflow-hidden font-serif">
      <div className="glow-bg" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Start Your Search
        </h1>
        <p className="text-md text-gray-700 mb-10">
          Find sunscreen tailored to your skin type, values, and lifestyle.
        </p>

        <div className="max-w-lg mx-auto mb-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. oily skin, SPF 50+, reef-safe"
            className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-md bg-white/80 backdrop-blur-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] transition"
          />
        </div>

        {loading && <p className="mt-6 text-gray-500">Loading...</p>}
        {error && <p className="mt-6 text-red-500">Error fetching data.</p>}

        {filteredResults?.length > 0 && (
          <div className="mt-8 mb-40 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResults.map((sunscreen: any) => (
              <div
                key={sunscreen.id}
                className="bg-white/90 p-4 rounded-xl shadow-md text-left backdrop-blur-sm border border-gray-200"
              >
                <img
                  src={sunscreen.imageUrl || 'Images/Sunscreen.jpg'}
                  alt={sunscreen.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold">{sunscreen.name}</h3>
                <p className="text-gray-700 text-sm mb-1"><strong>Brand:</strong> {sunscreen.brand}</p>
                <p className="text-gray-700 text-sm mb-1"><strong>SPF:</strong> {sunscreen.spf}</p>
                <p className="text-gray-700 text-sm mb-1"><strong>Finish:</strong> {sunscreen.finish}</p>
                <p className="text-gray-700 text-sm mb-1"><strong>Tags:</strong> {sunscreen.tag.join(', ')}</p>
                <p className="text-gray-700 text-sm"><strong>Skin Types:</strong> {sunscreen.skinType.join(', ')}</p>
              </div>
            ))}
          </div>
        )}

        {query && filteredResults?.length === 0 && (
          <p className="mt-12 text-gray-500 italic">No matching sunscreens found.</p>
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

export default function FinderPage() {
  return (
    <ApolloProvider client={client}>
      <FinderContent />
    </ApolloProvider>
  );
}
