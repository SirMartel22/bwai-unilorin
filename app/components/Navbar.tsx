"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "PRIZES", href: "#prizes" },
  { label: "AGENDA", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
  { label: "WIKI", href: "#wiki" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-[60px] transition-all duration-400 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 group shrink-0">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4285F4] via-[#EA4335] to-[#34A853] flex items-center justify-center text-white text-[10px] font-bold leading-none">
          G
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white text-[11px] font-semibold tracking-tight leading-tight">
            GDG on Campus
          </span>
          <span className="text-white/60 text-[10px] tracking-tight leading-tight">
            Unilorin
          </span>
        </div>
      </a>

      {/* Nav Links — hidden on mobile */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNav(e, link.href)}
            className="text-white/70 hover:text-white text-[12px] font-medium tracking-[1.8px] uppercase transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Apply CTA */}
      <a
        href="#apply"
        className="flex items-center gap-1.5 bg-[#7C3AED] hover:bg-[#6d28d9] text-white text-[13px] font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 shrink-0"
      >
        <span>→</span>
        <span>Apply</span>
      </a>
    </nav>
  );
}