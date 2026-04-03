"use client";
import { useState } from "react";
import { hashtags, samplePrompts } from "../lib/data";

const socials = [
  {
    id: "twitter",
    label: "X / Twitter",
    icon: "𝕏",
    bg: "bg-black hover:bg-gray-900",
    text: "text-white",
    build: (text: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "in",
    bg: "bg-[#0077B5] hover:bg-[#006399]",
    text: "text-white",
    build: (text: string) =>
      `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text)}`,
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: "f",
    bg: "bg-[#1877F2] hover:bg-[#1569d3]",
    text: "text-white",
    build: (text: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://gdg.community.dev/")}&quote=${encodeURIComponent(text)}`,
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: "📸",
    bg: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90",
    text: "text-white",
    isCopyOnly: true,
    build: (text?: string) => "https://www.instagram.com/",
  },
];

export default function ShareBuild() {
  const [text, setText] = useState("");

  const handleShare = async (s: typeof socials[0]) => {
    const content = text.trim()
      ? `${text} ${hashtags.join(" ")}`
      : hashtags.join(" ");

    // For Instagram or if user is on mobile and platform supports it
    if (s.isCopyOnly) {
      try {
        await navigator.clipboard.writeText(content);
        alert("Text copied! Now opening Instagram...");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
      window.open(s.build(content), "_blank", "noopener,noreferrer");
      return;
    }

    if (navigator.share && /mobile|android|iphone/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title: "Build With AI",
          text: content,
          url: "https://gdg.community.dev/",
        });
        return;
      } catch (err) {
        // Fallback to URL if share fails/cancelled
      }
    }

    window.open(s.build(content), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="share"
      className="bg-[#4285F4] py-8 md:py-12 px-8 md:px-16 lg:px-20"
    >
      <div className="anim-share-card max-w-lg mx-auto bg-white dark:bg-black border-[0.7px] border-black dark:border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] rounded-2xl p-8 transition-colors duration-300">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">📣</span>
          <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Share Your Build
          </h2>
        </div>

        <p className="font-body text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-2 transition-colors duration-300">
          What did you create today? Describe your AI project and share it across your socials.
        </p>
        <p className="font-body text-xs text-amber-500 leading-relaxed mb-5">
          💡 Tag the relevant speaker and add a screenshot of your build for more impact!
        </p>

        {/* Textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="e.g. Just built a Gemini-powered task manager at #BuildWithAI @GDGOCUnilorin 🔥"
          rows={4}
          className="w-full font-body text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl px-4 py-3 leading-relaxed resize-y focus:outline-none focus:ring-2 focus:ring-[#4285F4] transition-colors duration-300 placeholder:text-gray-400"
        />

        {/* Social share buttons */}
        <div className="grid grid-cols-2 gap-2.5 mt-4">
          {socials.map((s) => (
            <button
              key={s.id}
              onClick={() => handleShare(s)}
              className={`flex items-center justify-center gap-2 ${s.bg} ${s.text} font-body font-semibold text-sm py-3 px-4 rounded-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer`}
            >
              <span className="font-bold text-[15px] leading-none">{s.icon}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Sample prompt chips */}
        <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-700 grid grid-cols-3 gap-3 transition-colors duration-300">
          {samplePrompts.map((p) => (
            <button
              key={p.label}
              onClick={() => setText(p.text)}
              className="text-left group cursor-pointer"
            >
              <p className="font-body text-[10px] font-bold text-[#4285F4] tracking-widest mb-1">
                {p.label}
              </p>
              <p className="font-body text-[11px] text-gray-400 dark:text-gray-500 leading-snug group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-150">
                {p.text}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}