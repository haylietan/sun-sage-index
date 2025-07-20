'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SUNSCREENS } from '@/app/(api)/api/graphql/queries';
import client from '@/app/(api)/_datalib/_typeDefs/apollo-client';
import { ApolloProvider } from '@apollo/client';
import Footer from './Footer';

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
    <main
      className="relative min-h-screen w-full text-[#292524] antialiased overflow-hidden font-serif"
      style={{
        background: 'radial-gradient(circle, rgba(238,229,174,1) 0%, rgba(194,128,118,1) 100%)'
      }}
    >
      {/* <div className="glow-bg" /> */}
      {/* gradiett bg tyepee */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>


      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-24 text-center">
        <h1 className="text-4xl text-white md:text-5xl font-bold mb-4 tracking-tight">
          Start Your Search
        </h1>
        <p className="text-md text-white mb-10">
          Find sunscreen tailored to your skin type, values, and lifestyle.
        </p>

        <div className="max-w-lg mx-auto mb-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. oily skin, SPF 50+, reef-safe"
            className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-md bg-white/80 backdrop-blur-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[pink] transition"
          />
        </div>

        {loading && <p className="mt-6 text-gray-500">Loading...</p>}
        {error && <p className="mt-6 text-red-500">Error fetching data.</p>}

        {filteredResults?.length > 0 && (
          <div className="mt-8 mb-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
      .blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(120px);
        opacity: 0.5;
        mix-blend-mode: screen;
        animation: float 18s ease-in-out infinite alternate,
                  moveX 30s ease-in-out infinite alternate;
      }

      .blob-1 {
        width: 400px;
        height: 400px;
        background: #f97316; /* vibrant orange */
        top: 10%;
        left: 15%;
        animation-delay: 0s, 0s;
      }

      .blob-2 {
        width: 500px;
        height: 500px;
        background: #fb923c; /* peachy orange */
        top: 40%;
        left: 50%;
        animation-delay: 2s, 4s;
      }

      .blob-3 {
        width: 350px;
        height: 350px;
        background: #fdba74; /* soft amber */
        top: 70%;
        left: 25%;
        animation-delay: 4s, 8s;
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0) scale(1);
        }
        50% {
          transform: translateY(-30px) scale(1.1);
        }
      }

      @keyframes moveX {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(60px);
        }
      }
    `}</style>


    </main>
  );
}

export default function FinderPage() {
  return (
    <>
      <ApolloProvider client={client}>
      <div className="relative flex flex-col text-[#292524] font-serif overflow-hidden">
        <FinderContent />
        <Footer />
      </div>
      </ApolloProvider>
    </>
  );
}
