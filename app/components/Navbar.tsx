"use client";
import { useTheme } from "../lib/ThemeContext";

const themeConfig = {
  light: { icon: "☀️", label: "Light", next: "Dark" },
  dark:  { icon: "🌙", label: "Dark",  next: "Auto" },
  auto:  { icon: "🌓", label: "Auto",  next: "Light" },
};

interface NavbarProps {
  onAgendaClick: () => void;
}

export default function Navbar({ onAgendaClick }: NavbarProps) {
  const { mode, cycle } = useTheme();
  const cfg = themeConfig[mode];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-8 h-14 bg-gray-950 dark:bg-black shadow-[0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center gap-1.5">
        <span className="font-heading text-sm font-extrabold bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent tracking-tight">
          GDGOC
        </span>
        <span className="font-heading text-white font-semibold text-sm">Unilorin</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2.5">
        {/* Theme toggle */}
        <button
          onClick={cycle}
          className="flex items-center gap-1.5 text-gray-300 border border-gray-600 rounded-full px-3 py-1.5 text-xs font-medium hover:bg-white/10 transition-colors duration-200 cursor-pointer"
          aria-label={`Switch to ${cfg.next} mode`}
        >
          <span>{cfg.icon}</span>
          <span>{cfg.label}</span>
        </button>

        {/* Agenda */}
        <button
          onClick={onAgendaClick}
          className="text-gray-200 border border-gray-600 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-white/10 transition-colors duration-200 cursor-pointer"
        >
          Agenda
        </button>
      </div>
    </nav>
  );
}