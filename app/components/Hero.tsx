"use client";
import { hashtags } from "../lib/data";

interface HeroProps {
  onShareClick: () => void;
}

export default function Hero({ onShareClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="text-center px-6 pt-20 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Badge */}
      <p className="anim-hero-badge inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[2.5px] text-blue-500 font-semibold mb-4">
        <span className="text-blue-400">+</span> Event Participant Portal
      </p>

      {/* Headline */}
      <h1 className="anim-hero-title font-heading text-[clamp(38px,7vw,68px)] font-extrabold leading-[1.06] tracking-tight mb-5">
        Build With{" "}
        <span className="text-[#4285F4]">AI</span>
      </h1>

      {/* Subheadlines */}
      <p className="anim-hero-sub font-body text-lg text-gray-500 dark:text-gray-400 mb-3 transition-colors duration-300">
        Show the world what you&apos;re building in Ilorin.
      </p>
      <p className="anim-hero-sub font-body text-sm text-gray-400 dark:text-gray-500 max-w-md mx-auto mb-9 leading-relaxed transition-colors duration-300">
        Connect your creativity with Google&apos;s AI models. Ship your project and share your journey with the global developer community.
      </p>

      {/* CTA Buttons */}
      <div className="anim-hero-btns flex flex-wrap gap-3 justify-center mb-9">
        <button
          onClick={onShareClick}
          className="font-heading bg-[#4285F4] hover:bg-blue-500 text-white font-semibold text-[15px] px-7 py-3 rounded-full shadow-[0_2px_12px_rgba(66,133,244,0.4)] hover:shadow-[0_6px_20px_rgba(66,133,244,0.5)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Share Your Build
        </button>
        <button className="font-heading text-[#4285F4] border-2 border-[#4285F4] font-semibold text-[15px] px-7 py-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
          Community Page
        </button>
      </div>

      {/* Hashtag pills */}
      <div className="anim-hero-tags flex flex-wrap gap-2.5 justify-center">
        {hashtags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-50 dark:bg-blue-950/60 text-blue-500 dark:text-blue-400 text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}