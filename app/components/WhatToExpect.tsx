"use client";

const cards = [
  {
    id: "learn",
    brand: "BRAYNR",
    icon: "🎓",
    title: "Learn Different",
    description:
      "Every student learns differently. It’s time the system did too. Build for inclusion, creativity, and new workflows.",
    tags: ["Product Design", "EdTech", "Learning Science", "Cross-Disciplinary"],
    accent: "from-cyan-400 to-blue-500",
  },
  {
    id: "see",
    brand: "LUXONIS",
    icon: "👁️",
    title: "See Beyond",
    description:
      "The world is three-dimensional. Your AI should be too. Use camera + spatial sensing to build real-world intelligence.",
    tags: ["Computer Vision", "Depth Sensing", "Edge AI", "OAK Cameras"],
    accent: "from-purple-500 to-violet-600",
  },
  {
    id: "cord",
    brand: "MSI",
    icon: "🔌",
    title: "Cut the Cord",
    description:
      "Every API call is a dependency. Build while disconnected and make AI that works even without cloud access.",
    tags: ["On-Device AI", "Edge Computing", "Privacy", "Low Latency"],
    accent: "from-red-500 to-rose-600",
  },
];

export default function WhatToExpect() {
  return (
    <section id="expect" className="py-8 md:py-12 px-8 md:px-16 lg:px-20 max-w-7xl mx-auto text-gray-900 dark:text-white">
      <div className="mb-10 text-center">
        <p className="text-sm md:text-base text-[#7C3AED] font-bold tracking-widest uppercase mb-2">
          Build With AI?
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
          What to Expect
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A packed day of building, breaking, and shipping with real teams, real mentors, and prizes worth losing sleep over.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.map((card) => (
          <article
            key={card.id}
            className="group rounded-3xl bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-100 dark:from-black/50 dark:via-black/40 dark:to-black/30 border-[0.7px] border-black dark:border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] p-6 backdrop-blur-sm transition hover:-translate-y-1"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-200/50 dark:bg-black/50 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-gray-800 dark:text-gray-200">
              <span className="text-[14px]">{card.icon}</span>
              <span>{card.brand}</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-3">{card.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">{card.description}</p>

            <div className="flex flex-wrap gap-2">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold uppercase tracking-widest text-gray-700 dark:text-gray-200 bg-gray-200/50 dark:bg-white/5 px-2.5 py-1 rounded-xl">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}

        <article className="rounded-3xl bg-gradient-to-br from-[#8B5CF6] via-[#6D28D9] to-[#3B82F6] border-[0.7px] border-black dark:border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] p-6">
          <h3 className="text-xl font-bold text-white mb-3">Want to be part of it?</h3>
          <p className="text-sm text-white/90 mb-6 leading-relaxed">
            Apply with your team, choose a challenge track, and get ready to ship the AI product you want to see in the world.
          </p>
          <a
            href="https://gdg.community.dev/e/mctymr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold px-5 py-3 hover:bg-white/90 transition"
          >
            → Register
          </a>
        </article>
      </div>
    </section>
  );
}
