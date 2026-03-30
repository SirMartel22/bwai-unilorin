import { schedule } from "../lib/data";

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 px-6 md:px-8 max-w-3xl mx-auto">
      {/* Heading */}
      <h2 className="font-heading text-[clamp(26px,4vw,32px)] font-extrabold text-center text-gray-900 dark:text-gray-100 mb-2 tracking-tight transition-colors duration-300">
        Event Schedule
      </h2>
      <p className="font-body text-center text-sm text-gray-400 dark:text-gray-500 mb-12 transition-colors duration-300">
        March 28th 2026 • Ilorin, Nigeria
      </p>

      {/* Timeline */}
      <div className="flex flex-col gap-2.5">
        {schedule.map((item, i) => (
          <div
            key={i}
            className={`anim-schedule-item flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-300 hover:translate-x-1 ${
              item.highlight
                ? "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800"
                : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700"
            }`}
            style={{ borderLeftWidth: 4, borderLeftColor: item.color }}
          >
            <span className="font-body text-xs text-gray-400 dark:text-gray-500 min-w-[96px] shrink-0 font-medium transition-colors duration-300">
              {item.time}
            </span>
            <span
              className={`font-body text-sm transition-colors duration-300 ${
                item.highlight
                  ? "font-heading font-bold text-gray-900 dark:text-gray-100"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}