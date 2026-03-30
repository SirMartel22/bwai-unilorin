"use client";
import { useEffect, useRef, useState } from "react";

/* ── Countdown target: April 11, 2026 ────────────────────────────────────── */
const TARGET = new Date("2026-04-11T00:00:00");

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0 };
  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff % 86_400_000) / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  return { d, h, m };
}

/* ── Aurora blob (animated radial gradient element) ─────────────────────── */
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
  const titleRef = useRef<HTMLHeadingElement>(null);
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
      {/* ── Aurora background blobs ─────────────────────────────────────── */}
      <AuroraBlob
        className="w-[700px] h-[700px] animate-[auroraA_14s_ease-in-out_infinite_alternate]"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, #4c1d95 50%, transparent 70%)",
          top: "-15%",
          left: "-10%",
        }}
      />
      <AuroraBlob
        className="w-[600px] h-[600px] animate-[auroraB_18s_ease-in-out_infinite_alternate]"
        style={{
          background: "radial-gradient(circle, #6d28d9 0%, #1e1b4b 55%, transparent 70%)",
          top: "10%",
          right: "-15%",
        }}
      />
      <AuroraBlob
        className="w-[500px] h-[500px] opacity-25 animate-[auroraC_22s_ease-in-out_infinite_alternate]"
        style={{
          background: "radial-gradient(circle, #a78bfa 0%, #7c3aed 60%, transparent 75%)",
          bottom: "5%",
          left: "30%",
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
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pt-24 pb-28"
      >
        {/* Giant title */}
        <h1
          ref={titleRef}
          data-anim
          data-delay="100"
          className="font-heading text-white font-extrabold leading-none tracking-tight select-none"
          style={{ fontSize: "clamp(4rem, 13vw, 11rem)" }}
        >
          GDG Unilorin
        </h1>

        {/* Year */}
        <p
          data-anim
          data-delay="280"
          className="mt-4 text-white/70 text-2xl md:text-3xl font-light tracking-widest font-mono"
        >
          2026
        </p>

        {/* Tagline */}
        <p
          data-anim
          data-delay="400"
          className="mt-6 text-white/80 text-lg md:text-xl font-medium tracking-wide"
        >
          Build with AI
        </p>

        {/* Apply CTA */}
        <div data-anim data-delay="540" className="mt-10">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6d28d9] text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(124,58,237,0.6)] hover:-translate-y-0.5"
          >
            <span>→</span>
            <span>Apply</span>
          </a>
        </div>
      </div>

      {/* ── Bottom info bar ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex items-end justify-between px-6 md:px-10 pb-6 w-full">
        {/* Date + Location */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6"
          style={{ fontFamily: "var(--font-mono), 'Space Mono', monospace" }}
        >
          <span className="text-white/80 text-sm md:text-base tracking-wide border border-white/20 rounded px-2 py-0.5">
            [ April 11, 2026 ]
          </span>
          <span className="text-white/80 text-sm md:text-base tracking-wide border border-white/20 rounded px-2 py-0.5">
            [ Fetuils Hub-Unilorin ]
          </span>
        </div>

        {/* Countdown pill */}
        <div
          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-[12px] md:text-[13px] px-4 py-2 rounded-full shrink-0"
          style={{ fontFamily: "var(--font-mono), 'Space Mono', monospace" }}
        >
          {/* Pulsing dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a78bfa] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7c3aed]" />
          </span>
          {time.d}d {pad(time.h)}h {pad(time.m)}m left to apply
        </div>
      </div>

      {/* ── Aurora keyframes injected as a style tag ────────────────────── */}
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