"use client";
import useGsapAnimations from "./lib/useGsapAnimations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// import Sponsors from "./components/Sponsors";
import WhatToExpect from "./components/WhatToExpect";
import Speakers from "./components/Speakers";
import ShareBuild from "./components/ShareBuild";
import Schedule from "./components/Schedule";
import UsefulStuff from "./components/UsefulStuff";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import Footer from "./components/Footer";

function PageContent() {
  useGsapAnimations();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatToExpect />
      {/* <Sponsors /> */}
      <Speakers />
      <ShareBuild />
      <Schedule />
      <UsefulStuff />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
}

export default function BWAIPage() {
  return <PageContent />;
}