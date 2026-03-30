import { schedule } from "../lib/data";

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-12">
        <h3 className="font-heading text-[#7C3AED] text-xs font-bold tracking-[0.15em] uppercase mb-4">
          Timetable
        </h3>
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-left text-gray-900 dark:text-gray-100 mb-2 tracking-tight transition-colors duration-300">
          Event Schedule
        </h2>
        <p className="font-body text-left text-sm md:text-base text-gray-500 dark:text-gray-400 transition-colors duration-300 max-w-2xl">
          March 28th 2026 • Ilorin, Nigeria. A packed day of learning, building, and exhibiting.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 md:pl-10 max-w-4xl">
        {/* Bold fading line */}
        <div className="absolute left-[3px] md:left-[7px] top-4 bottom-4 w-1.5 bg-gradient-to-t from-transparent via-[#7C3AED] to-[#4285F4] rounded-full" />
        
        <div className="flex flex-col gap-6">
          {schedule.map((item, i) => (
            <div
              key={i}
              className={`anim-schedule-item relative flex items-center gap-4 rounded-2xl px-6 py-5 border transition-all duration-300 hover:translate-x-1 shadow-sm ${
                item.highlight
                  ? "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/50"
                  : "bg-white dark:bg-gray-800/40 border-gray-200 dark:border-gray-700/50"
              }`}
            >
              {/* Dot on the timeline */}
              <div 
                className="absolute -left-[27px] md:-left-[35px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-white dark:border-black z-10 shadow-sm transition-colors duration-300"
                style={{ backgroundColor: item.highlight ? '#7C3AED' : '#4285F4' }}
              />

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 w-full">
                <span className="font-body text-sm text-[#7C3AED] dark:text-[#a78bfa] min-w-[100px] shrink-0 font-bold transition-colors duration-300 uppercase tracking-widest">
                  {item.time}
                </span>
                <span
                  className={`font-body text-base md:text-lg transition-colors duration-300 ${
                    item.highlight
                      ? "font-heading font-bold text-gray-900 dark:text-gray-100"
                      : "text-gray-700 dark:text-gray-300 font-medium"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}