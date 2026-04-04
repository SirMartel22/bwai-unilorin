"use client";
import { useEffect, useState } from "react";
import { getTimeLeft } from "../lib/data";

export default function Footer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full h-[600px] overflow-hidden bg-black flex flex-col justify-between py-10 px-8 md:px-16 lg:px-20 text-white border-t border-white/5">
      {/* Brand Aurora Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80" style={{ background: '#0a0514' }}>
        {/* Blob Blue */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#4285F4]/30 blur-[120px] mix-blend-screen motion-blob-1"
        />
        {/* Blob Red */}
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full bg-[#EA4335]/20 blur-[130px] mix-blend-screen motion-blob-2"
        />
        {/* Blob Green */}
        <div
          className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-[100%] bg-[#34A853]/20 blur-[100px] mix-blend-screen motion-blob-3"
        />
        {/* Blob Yellow */}
        <div
          className="absolute bottom-[10%] left-[40%] w-[50%] h-[50%] rounded-full bg-[#FBBC04]/15 blur-[120px] mix-blend-screen motion-blob-1"
        />
        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")` }}
        />
      </div>

      <style>{`
        @keyframes blobMotion1 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blobMotion2 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-50px, -30px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blobMotion3 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, 40px) scale(1.05); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .motion-blob-1 { animation: blobMotion1 16s infinite alternate ease-in-out; }
        .motion-blob-2 { animation: blobMotion2 19s infinite alternate ease-in-out; }
        .motion-blob-3 { animation: blobMotion3 22s infinite alternate ease-in-out; }
      `}</style>

      {/* Top Header Layer */}
      <div className="relative z-10 flex justify-between items-start w-full max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="font-heading text-lg font-extrabold bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
              GDGOC
            </span>
            <span className="font-heading font-semibold text-lg text-white">Unilorin</span>
          </div>
        </div>

        <a href="#coc" className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
          CODE OF CONDUCT
        </a>
      </div>

      {/* Center CTA */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 max-w-7xl mx-auto w-full">
        <h2 className="font-heading text-5xl md:text-7xl lg:text-[90px] font-extrabold text-white mb-8 tracking-tighter pb-2">
          See you in April
        </h2>

        <a
          href="https://gdg.community.dev/e/mctymr/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-bold hover:scale-105 active:scale-95 transition-transform"
        >
          <span>→</span>
          Register Now
        </a>
      </div>

      {/* Bottom Footer Layer */}
      <div className="relative z-10 flex flex-col-reverse sm:flex-row justify-between items-center sm:items-end w-full max-w-7xl mx-auto gap-6 sm:gap-0">

        {/* Empty space left placeholder if needed for flex balance */}
        <div className="hidden sm:block sm:w-[200px]" />

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/company/gdg-on-campus-university-of-ilorin/posts/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white/70 hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://www.instagram.com/gdgoc_unilorin/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white/70 hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://x.com/gdgoc_unilorin" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white/70 hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
        </div>

        {/* Countdown Pill */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-md sm:w-[200px] justify-end">
          <div className="w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_8px_#FBBC04] animate-pulse" />
          <span className="font-mono font-bold text-xs text-white/90 tracking-wide">
            {timeLeft.d}d {timeLeft.h.toString().padStart(2, '0')}h {timeLeft.m.toString().padStart(2, '0')}m <span className="text-white/40 font-normal">left to apply</span>
          </span>
        </div>
      </div>
    </footer>
  );
}