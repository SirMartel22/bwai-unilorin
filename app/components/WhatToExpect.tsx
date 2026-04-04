"use client";

const cards = [
  {
    id: "learn",
    brand: "AI SOFTWARE DEV",
    icon: "💻 ",
    title: "Build Smarter",
    description:
      "AI development moves faster than any curriculum. It’s time to move beyond basic prompts and build for reasoning, creativity, and agentic workflows.",
    tags: ["LLM OPS", "PROMPT ENGINEERING", "AGENTIC WORKFLOWS", "RAG ARCHITECTURE"],
    accent: "from-cyan-400 to-blue-500",
  },
  {
    id: "see",
    brand: "CREATIVES & CONTENT",
    icon: "🎨",
    title: "Create Faster",
    description:
      "The blank canvas is a thing of the past. Harness generative AI to amplify human creativity, automate production pipelines, and build tools that redefine how we tell stories.",
    tags: ["GENERATIVE MEDIA AI", "CONTENT AUTOMATION", "DESIGN SYSTEMS", "MULTIMODAL OUTPUT"],
    accent: "from-purple-500 to-violet-600",
  },
  {
    id: "cord",
    brand: "AI FOR GOOD",
    icon: "🔌",
    title: "Build for Impact",
    description:
      "Cloud reliance is a bottleneck. Learn to optimize, quantize, and deploy high-performance models locally, ensuring privacy and lightning-fast responses without an internet connection",
    tags: ["AI FOR SOCIAL GOOD", "ETHICAL AI", "PRIVACY-FIRST AI", "LOW LATENCY"],
    accent: "from-red-500 to-rose-600",
  },
];

export default function WhatToExpect() {
  return (
    <section id="expect" className="py-8 md:py-12 px-8 md:px-16 lg:px-20 w-full text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left Column - Sticky Heading */}
        <div className="lg:w-[35%] shrink-0 flex flex-col items-start lg:sticky lg:top-24 self-start z-10">
          <p className="text-sm md:text-base text-[#7C3AED] font-bold tracking-widest uppercase mb-4">
            Build With AI?
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            What to<br />Expect
          </h2>
          <p className="font-body text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-[320px]">
            A packed day of building, breaking, and shipping with real teams, and real mentors worth losing sleep over.
          </p>
        </div>

        {/* Right Column - Cards Grid */}
        <div className="lg:w-[65%] w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group rounded-3xl bg-black border-[0.7px] border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)] p-6 backdrop-blur-sm transition hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-gray-200">
                <span className="text-[14px]">{card.icon}</span>
                <span>{card.brand}</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3 text-white">{card.title}</h3>
              <p className="text-sm text-gray-400 mb-5 leading-relaxed">{card.description}</p>

              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold uppercase tracking-widest text-gray-300 bg-white/5 px-2.5 py-1 rounded-xl border border-white/5 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}

          <article className="rounded-3xl bg-gradient-to-br from-[#8B5CF6] via-[#6D28D9] to-[#3B82F6] border-[0.7px] border-white/20 shadow-[0_10px_30px_rgba(124,58,237,0.3)] p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to build?</h3>
              <p className="text-sm text-white/90 mb-8 leading-relaxed">
                Choose your focus area, master the latest frontier models, and get ready to ship the AI product you want to see in the world.
              </p>
            </div>
            <a
              href="https://gdg.community.dev/e/mctymr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white text-black font-bold px-6 py-3.5 hover:bg-gray-100 hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
            >
              → Register Now
            </a>
          </article>
        </div>

      </div>
    </section>
  );
}
