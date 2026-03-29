"use client";
import { useRef } from "react";
import { ThemeProvider } from "./lib/ThemeContext";
import useGsapAnimations from "./lib/useGsapAnimations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Speakers from "./components/Speakers";
import ShareBuild from "./components/ShareBuild";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

function PageContent() {
  const scheduleRef = useRef<HTMLDivElement>(null);
  const shareRef = useRef<HTMLDivElement>(null);

  useGsapAnimations();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar onAgendaClick={() => scrollTo("schedule")} />
      <Hero onShareClick={() => scrollTo("share")} />
      <Speakers />
      <div ref={shareRef}>
        <ShareBuild />
      </div>
      <div ref={scheduleRef}>
        <Schedule />
      </div>
      <Footer />
    </div>
  );
}

export default function BWAIPage() {
  return (
    <ThemeProvider>
      <PageContent />
    </ThemeProvider>
  );
}