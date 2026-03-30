"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { id: 1, src: "/about/slide1.png", alt: "Hackathon collaboration" },
  { id: 2, src: "/about/slide2.png", alt: "Tech presentation" },
  { id: 3, src: "/about/slide3.png", alt: "Networking event" },
];

const SLIDE_DURATION = 7000;

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    
    let start = Date.now();
    let animationFrameId: number;

    const animateProgress = () => {
      const now = Date.now();
      const elapsed = now - start;
      const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(newProgress);

      if (elapsed < SLIDE_DURATION) {
        animationFrameId = requestAnimationFrame(animateProgress);
      } else {
        setProgress(100);
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeSlide]);

  const handleNext = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-gray-200 dark:border-white/5 relative z-10 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        
        {/* Left column */}
        <div className="md:col-span-3">
          <h3 className="font-heading text-[#7C3AED] text-xs md:text-sm font-bold tracking-widest uppercase sticky top-24">
            The story so far
          </h3>
        </div>

        {/* Right column */}
        <div className="md:col-span-9 font-body">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
            We satisfyingly ruined it for everyone.
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-3xl">
            <p>
              Three years ago, no student community in Ilorin was running a real AI hackathon — and the few in Nigeria weren't exactly setting the world on fire.
            </p>
            <p>
              So we did it ourselves.
            </p>
            <p>
              What started as a slightly ambitious idea turned into something nobody expected: teams that kept building long after the event, collaborations with sponsors that actually went somewhere, and a few participants who went on to launch startups — one of which just raised a couple million. No big deal.
            </p>
            <p>
              Turns out, when you set the bar, everyone suddenly discovers they wanted to do hackathons too. Startups started hosting their own, other communities followed, and just like that — a full-blown <strong className="font-semibold text-gray-900 dark:text-white">Hackathon Fever</strong>.
            </p>
            <p>
              We kept raising the bar every year, and here we are again: <strong className="font-semibold text-gray-900 dark:text-white">bigger sponsors, bigger prizes, bigger challenges</strong>. But the core hasn't changed — community, connections, and most importantly, having fun.
            </p>
            <p className="font-semibold text-gray-900 dark:text-white pt-2">
              That's what Build With AI is.
            </p>
          </div>

          {/* Slider Section */}
          <div className="mt-16 md:mt-24 space-y-6">
            {/* Image Container */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 dark:bg-white/5 rounded-3xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between mt-6">
              <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Previous edition</span>
              
              <div className="flex-1 mx-6 flex items-center relative">
                {/* Progress bar background */}
                <div className="h-0.5 w-full bg-gray-200 dark:bg-white/20 rounded-full overflow-hidden relative">
                  {/* Progress bar fill */}
                  <div 
                    className="absolute top-0 left-0 h-full bg-[#7C3AED] transition-none"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
                  aria-label="Previous image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
                  aria-label="Next image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
