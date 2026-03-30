import { hashtags } from "../lib/data";

export default function Footer() {
  return (
    <footer className="anim-footer bg-gray-950 dark:bg-black text-gray-200 px-8 py-9 flex flex-wrap justify-between items-start gap-6 transition-colors duration-300">
      {/* Brand */}
      <div>
        <div className="flex items-center gap-2 mb-2.5">
          <span className="font-heading text-sm font-extrabold bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
            GDGOC
          </span>
          <span className="font-heading font-semibold text-sm text-white">Unilorin</span>
        </div>
        <p className="font-body text-xs text-gray-500 max-w-[260px] leading-relaxed">
          Empowering developers in Ilorin to build the future with Google Technologies.
        </p>
        <div className="flex flex-wrap gap-2.5 mt-3">
          {hashtags.map((tag) => (
            <span key={tag} className="font-body text-[11px] text-gray-600">{tag}</span>
          ))}
        </div>
      </div>

      {/* Community button */}
      <button className="font-body text-gray-300 border border-gray-700 hover:bg-white/10 rounded-full px-5 py-2 text-sm transition-colors duration-200 cursor-pointer mt-1">
        Community Page
      </button>
    </footer>
  );
}