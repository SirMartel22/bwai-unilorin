"use client";
import useGsapAnimations from "./lib/useGsapAnimations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Speakers from "./components/Speakers";
import ShareBuild from "./components/ShareBuild";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

function PageContent() {
  useGsapAnimations();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Speakers />
      <ShareBuild />
      <Schedule />
      <Footer />
    </div>
  );
}

export default function BWAIPage() {
  return <PageContent />;
}