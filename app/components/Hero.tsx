"use client";
import { useEffect, useRef, useState } from "react";
import { getTimeLeft } from "../lib/data";

/* ── Aurora blob (animated radial gradient element) with brand colors ───── */
function AuroraBlob({
  style,
  className,
}: {
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] opacity-40 pointer-events-none ${className ?? ""}`}
      style={style}
    />
  );
}

export default function Hero() {
  const [time, setTime] = useState(getTimeLeft());
  const contentRef = useRef<HTMLDivElement>(null);

  /* live countdown */
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 30_000);
    return () => clearInterval(id);
  }, []);

  /* entrance animations via CSS classes added after mount */
  useEffect(() => {
    const els = contentRef.current?.querySelectorAll<HTMLElement>("[data-anim]");
    if (!els) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    els.forEach((el) => {
      const delay = Number(el.dataset.delay ?? 0);
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      timers.push(
         setTimeout(() => {
           el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
           el.style.opacity = "1";
           el.style.transform = "translateY(0)";
         }, delay)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen bg-black text-white overflow-hidden"
    >
      {/* ── Brand Aurora background blobs ───────────────────────────────── */}
      <AuroraBlob
        className="w-[700px] h-[700px] animate-[auroraA_14s_ease-in-out_infinite_alternate]"
        style={{
          background: "radial-gradient(circle, #4285F4 0%, transparent 70%)",
          top: "-15%",
          left: "-10%",
        }}
      />
      <AuroraBlob
        className="w-[600px] h-[600px] animate-[auroraB_18s_ease-in-out_infinite_alternate]"
        style={{
          background: "radial-gradient(circle, #EA4335 0%, transparent 65%)",
          top: "10%",
          right: "-15%",
        }}
      />
      <AuroraBlob
        className="w-[500px] h-[500px] opacity-25 animate-[auroraC_22s_ease-in-out_infinite_alternate]"
        style={{
          background: "radial-gradient(circle, #34A853 0%, transparent 75%)",
          bottom: "5%",
          left: "30%",
        }}
      />
      <AuroraBlob
        className="w-[600px] h-[600px] opacity-20 animate-[auroraA_20s_ease-in-out_infinite_alternate]"
        style={{
          background: "radial-gradient(circle, #FBBC04 0%, transparent 70%)",
          bottom: "-10%",
          right: "20%",
        }}
      />

      {/* ── Noise overlay ──────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
          opacity: 0.6,
        }}
      />

      {/* ── Main content ───────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col px-8 md:px-16 lg:px-20 relative z-10">
        <div
          ref={contentRef}
          className="flex flex-col items-center justify-center flex-1 text-center max-w-7xl mx-auto w-full pt-16 pb-20 md:pt-24 md:pb-28"
        >
          {/* Giant title */}
          <h1
            data-anim
            data-delay="100"
            className="font-heading text-white font-extrabold leading-[0.9] tracking-tighter select-none mb-10"
            style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
          >
            BWAI Unilorin 2026
          </h1>

          {/* Tagline */}
          <p
            data-anim
            data-delay="400"
            className="text-white/80 text-sm md:text-lg font-bold tracking-widest"
          >
            GDGOC UNILORIN
          </p>

          {/* Register CTA */}
          <div data-anim data-delay="540" className="mt-12">
            <a
              href="https://gdg.community.dev/e/mctymr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6d28d9] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(124,58,237,0.6)] hover:-translate-y-0.5"
            >
              <span>Register</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom Info Bar (High-Impact Bold Typography) ───────────────── */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-20 pb-10 mt-auto border-t border-white/10 pt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-0 w-full">
          {/* Info Section */}
          <div className="flex flex-col gap-2 items-center md:items-start">
             <span className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-widest">LOCATION & VENUE</span>
             <p className="font-heading font-black text-xl italic uppercase tracking-tight text-white drop-shadow-lg">
               Fetuils Hub-Unilorin
             </p>
          </div>

          {/* Date Section */}
          <div className="flex flex-col gap-2 items-center bg-white/5 border border-white/10 rounded-2xl px-8 py-5 backdrop-blur-md">
             <span className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">SAVE THE DATE</span>
             <p className="font-heading font-black text-3xl tracking-tighter text-brand-yellow-accent drop-shadow-md">11th April 2026</p>
          </div>

          {/* Countdown Section */}
          <div className="flex flex-col gap-2 items-center md:items-end sm:w-[200px]">
             <div className="flex items-center gap-2">
                <span className="text-white/40 font-mono text-[10px] font-bold uppercase tracking-widest">COUNTDOWN</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow" />
                </span>
             </div>
             <div className="font-mono font-bold text-3xl tracking-tighter flex gap-2 text-white">
                <span>{time.d}D</span>
                <span className="text-white/20">:</span>
                <span>{pad(time.h)}H</span>
                <span className="text-white/20">:</span>
                <span>{pad(time.m)}M</span>
             </div>
          </div>
        </div>
      </div>

      {/* ── Aurora keyframes ────────────────────────────────────────────── */}
      <style>{`
        @keyframes auroraA {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(6%, 4%) scale(1.08); }
          100% { transform: translate(-4%, 8%) scale(0.95); }
        }
        @keyframes auroraB {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(-8%, -5%) scale(1.1); }
          100% { transform: translate(5%, -3%) scale(0.92); }
        }
        @keyframes auroraC {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(4%, -6%) scale(1.06); }
          100% { transform: translate(-6%, 4%) scale(0.97); }
        }
      `}</style>
    </section>
  );
}