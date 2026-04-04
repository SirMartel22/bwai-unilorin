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
    <footer className="relative w-full overflow-hidden bg-black flex flex-col items-center py-20 px-8 md:px-16 lg:px-20 text-white border-t border-white/5">
      {/* White & Royal Blue Aurora Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80" style={{ background: '#0a0514' }}>
        {/* Blob Royal Blue */}
        <div
          className="absolute top-[-10%] left-[25%] w-[50%] h-[50%] rounded-full bg-[#4169E1]/30 blur-[130px] mix-blend-screen motion-blob-1"
        />
        {/* Blob White */}
        <div
          className="absolute bottom-[-10%] right-[25%] w-[50%] h-[50%] rounded-full bg-white/10 blur-[140px] mix-blend-screen motion-blob-2"
        />
        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")` }}
        />
      </div>

      <style>{`
        @keyframes blobMotionGlow {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(0px, -30px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .motion-blob-1 { animation: blobMotionGlow 14s infinite alternate ease-in-out; }
        .motion-blob-2 { animation: blobMotionGlow 18s infinite alternate ease-in-out; }
      `}</style>

      {/* Centralized Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Brand Label */}
        <div className="flex flex-col items-center gap-2 mb-16">
          <div className="flex items-center gap-2">
            <span className="font-heading text-lg font-extrabold bg-gradient-to-r from-white to-[#4169E1] bg-clip-text text-transparent">
              GDGOC
            </span>
            <span className="font-heading font-semibold text-lg text-white">Unilorin</span>
          </div>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Main Heading */}
        <h2 className="font-heading text-6xl md:text-8xl lg:text-[100px] font-extrabold text-white mb-10 tracking-tighter leading-[0.9]">
          See you in April
        </h2>

        {/* Register CTA */}
        <div className="mb-20">
          <a
            href="https://gdg.community.dev/e/mctymr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black hover:bg-[#4169E1] hover:text-white text-[14px] font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(65,105,225,0.4)] hover:-translate-y-1 active:scale-95"
          >
            <span>→</span>
            <span>Register Now</span>
          </a>
        </div>

        {/* Bottom Metadata (Centered) */}
        <div className="w-full flex flex-col items-center gap-10">

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/gdg-on-campus-university-of-ilorin/posts/" className="group transition-transform hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-white transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.instagram.com/gdgoc_unilorin/" className="group transition-transform hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-white transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://x.com/gdgoc_unilorin" className="group transition-transform hover:scale-110">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white/40 group-hover:text-white transition-colors"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* Countdown Pill */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#4169E1] shadow-[0_0_10px_#4169E1] animate-pulse" />
              <span className="font-mono font-bold text-xs text-white/80 tracking-widest uppercase">
                {timeLeft.d}d {timeLeft.h.toString().padStart(2, '0')}h {timeLeft.m.toString().padStart(2, '0')}m left
              </span>
            </div>

            {/* Credit Label */}
            <div className="flex items-center gap-2">
              <p className="text-[9px] font-mono font-semibold text-white/50 tracking-[0.4em] uppercase">
                © 2026 GDGOC UNILORIN
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}