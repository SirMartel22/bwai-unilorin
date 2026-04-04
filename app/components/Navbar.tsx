"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "AGENDA", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 px-8 md:px-16 lg:px-20 ${scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.05)] h-[60px]"
          : "bg-transparent h-[70px]"
        }`}
    >
      <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group shrink-0">
          <img 
            src="/GDG-logo.svg" 
            alt="GDG on Campus Unilorin" 
            className="h-7 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <div className="flex flex-col leading-none border-l border-white/20 pl-3">
            <span className="text-white text-[10px] font-semibold tracking-wider uppercase">
              on Campus
            </span>
            <span className="text-white/60 text-[9px] font-medium tracking-widest uppercase">
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

        {/* Register CTA */}
        <a
          href="https://gdg.community.dev/e/mctymr/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-[#7C3AED] hover:bg-[#6d28d9] text-white text-[13px] font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 shrink-0"
        >
          <span>→</span>
          <span>Register</span>
        </a>
      </div>
    </nav>
  );
}