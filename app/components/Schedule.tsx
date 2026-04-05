import { schedule } from "../lib/data";

// Derive a short track label from each item's title/index
function getTrackLabel(title: string, index: number): string {
  if (index === 0) return "Opening";
  if (title.toLowerCase().includes("keynote")) return "Keynote";
  if (title.toLowerCase().includes("software track")) return "Software";
  if (title.toLowerCase().includes("creative") || title.toLowerCase().includes("design")) return "Creative";
  if (title.toLowerCase().includes("showcase") || title.toLowerCase().includes("exhibition")) return "Showcase";
  if (title.toLowerCase().includes("buildathon") || title.toLowerCase().includes("networking")) return "Buildathon";
  if (title.toLowerCase().includes("awards") || title.toLowerCase().includes("wrap")) return "Closing";
  return "General";
}

// Clean up the title by stripping the track prefix in brackets
function cleanTitle(title: string): string {
  return title.replace(/^\[.*?\]\s*/, "");
}

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="py-8 md:py-12 px-8 md:px-16 lg:px-20 w-full border-t border-gray-200 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h3 className="font-heading text-[#7C3AED] text-xs font-bold tracking-[0.15em] uppercase mb-4">
            Timetable
          </h3>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-2 tracking-tight transition-colors duration-300">
            Event Schedule
          </h2>
          <p className="font-body text-sm md:text-base text-gray-500 dark:text-gray-400 transition-colors duration-300 max-w-2xl px-4">
            April 11th 2026 • Ilorin, Nigeria. A packed day of learning, building, and exhibiting.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-10 max-w-4xl mx-auto">
          {/* Fading vertical line */}
          <div className="absolute left-[3px] md:left-[7px] top-4 bottom-4 w-1.5 bg-gradient-to-t from-transparent via-[#7C3AED] to-[#4285F4] rounded-full" />

          <div className="flex flex-col gap-4">
            {schedule.map((item, i) => {
              const label = getTrackLabel(item.title, i);
              const title = cleanTitle(item.title);

              return (
                <div
                  key={i}
                  className={`relative flex items-center gap-4 rounded-2xl px-5 py-4 border-[0.7px] transition-all duration-300 hover:translate-x-1 shadow-sm ${item.highlight
                    ? "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-700/50"
                    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-white/10 dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
                    }`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[27px] md:-left-[35px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-white dark:border-gray-950 z-10 shadow-sm transition-colors duration-300"
                    style={{ backgroundColor: item.color }}
                  />

                  {/* Color dot */}
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />

                  {/* Title */}
                  <span
                    className={`font-body text-sm md:text-base flex-1 transition-colors duration-300 ${item.highlight
                      ? "font-heading font-bold text-gray-900 dark:text-gray-100"
                      : "text-gray-700 dark:text-gray-300 font-medium"
                      }`}
                  >
                    {title}
                  </span>

                  {/* Track badge pill */}
                  <span
                    className="font-body text-[11px] font-semibold px-3 py-1 rounded-full shrink-0 whitespace-nowrap transition-colors duration-300"
                    style={{
                      backgroundColor: item.color + "1A", // ~10% opacity
                      color: item.color,
                      border: `1px solid ${item.color}33`, // ~20% opacity border
                    }}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}