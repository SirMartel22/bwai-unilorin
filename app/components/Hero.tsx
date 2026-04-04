"use client";
import { useEffect, useRef, useState } from "react";
import { getTimeLeft } from "../lib/data";

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
      <div className="flex-1 flex flex-col px-8 md:px-16 lg:px-20">
        <div
          ref={contentRef}
          className="relative z-10 flex flex-col items-center justify-center flex-1 text-center max-w-7xl mx-auto w-full pt-16 pb-20 md:pt-24 md:pb-28"
        >
          {/* Giant title */}
          <h1
            ref={titleRef}
            data-anim
            data-delay="100"
            className="font-heading text-white font-extrabold leading-none tracking-tight select-none"
            style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
          >
            BWAI Unilorin 2026
          </h1>

          {/* Tagline */}
          <p
            data-anim
            data-delay="400"
            className="mt-6 text-white/80 text-sm md:text-base font-medium tracking-wide"
          >
            GDGOC Unilorin
          </p>

          {/* Apply CTA */}
          <div data-anim data-delay="540" className="mt-10">
            <a
              href="https://gdg.community.dev/e/mctymr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6d28d9] text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(124,58,237,0.6)] hover:-translate-y-0.5"
            >
              <span>Register</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom info bar ─────────────────────────────────────────────── */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-20 pb-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-4 md:gap-0 w-full">
          {/* Date + Location */}
          <div
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6"
            style={{ fontFamily: "var(--font-mono), 'Space Mono', monospace" }}
          >
            <span className="text-white/80 text-sm md:text-base tracking-wide px-2 py-0.5">
              [ April 11, 2026 ]
            </span>
            <span className="text-white/80 text-sm md:text-base tracking-wide px-2 py-0.5">
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