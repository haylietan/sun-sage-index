'use client';
import Image from "next/image";
import Link from "next/link";

export default function VeriPeriHome() {
  return (
    <main className="relative min-h-screen w-full bg-[#736bba] text-white font-light antialiased overflow-hidden">
      <Image
        src="/Images/SunJellyCat.jpg"
        alt="Gradient background"
        fill
        className="absolute inset-0 object-cover z-0"
        priority
      />

      <div className="absolute inset-0 z-10 backdrop-blur-sm bg-white/10" />

      <div className="absolute top-10 right-10 text-xs text-white/70 tracking-wide z-10">
        <p>5x TONES WITH</p>
        <p>GRAINY & SMOOTH TEXTURE</p>
      </div>

      <div className="absolute top-1/3 left-10 text-left z-10 animate-fade-in-slide">
        <h1 className="text-[60px] md:text-[84px] font-serif leading-none tracking-tight opacity-0 animate-title-fade-in">
          <span>SUN SAGE</span>
          <br />
          <span className="block text-white/80 text-[28px] md:text-[36px] font-light animate-fade-slide-delay">
            Find what’s right for your skin.
          </span>
        </h1>

        <Link href="/finder">
          <button className="mt-6 px-6 py-3 font-serif bg-white/20 hover:bg-white/30 text-white font-medium rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 animate-fade-slide-delay2">
            Start Searching
          </button>
        </Link>
      </div>

      <div className="absolute bottom-10 left-10 text-xs text-white/80 z-10 leading-relaxed tracking-wider space-y-1">
        <p>5000 x 3000 px — HIGH-RESOLUTION</p>
        <p>1080 x 1080 px — INSTAGRAM POST</p>
        <p>1080 x 1920 px — INSTAGRAM STORY</p>
      </div>

      <div className="absolute bottom-10 right-10 text-4xl text-white/40 z-10">*</div>

      <style jsx>{`
      @keyframes fadeInSlide {
        0% {
          opacity: 0;
          transform: translateY(40px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-title-fade-in {
        animation: fadeInSlide 1.2s ease-out forwards;
      }

      .animate-fade-slide-delay {
        animation: fadeInSlide 1.4s ease-out forwards;
        animation-delay: 0.3s;
      }

      .animate-fade-slide-delay2 {
        animation: fadeInSlide 1.6s ease-out forwards;
        animation-delay: 0.6s;
      }
    `}</style>
    </main>
  );
}


