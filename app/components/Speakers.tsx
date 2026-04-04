"use client";
import { useEffect } from "react";
import { speakers } from "../lib/data";
import SpeakerCard from "./SpeakerCard";

export default function Speakers() {
  useEffect(() => {
    // Load Splide CSS
    const existingCss = document.getElementById("splide-css");
    if (!existingCss) {
      const css = document.createElement("link");
      css.id = "splide-css";
      css.rel = "stylesheet";
      css.href = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css";
      document.head.appendChild(css);
    }

    // Load Splide JS
    const existingScript = document.getElementById("splide-js");
    if (existingScript) {
      initSplide();
      return;
    }

    const script = document.createElement("script");
    script.id = "splide-js";
    script.src = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js";
    script.onload = initSplide;
    document.head.appendChild(script);

    type SplideInstance = { mount: () => void };
    type SplideConstructor = new (selector: string, options: Record<string, unknown>) => SplideInstance;
    interface SplideHtmlElement extends HTMLElement {
      _splide?: SplideInstance;
    }

    function initSplide() {
      const el = document.getElementById("speaker-splide") as SplideHtmlElement | null;
      if (!el || el._splide) return; // prevent double init

      const splideCtor = (window as unknown as { Splide?: SplideConstructor }).Splide;
      if (!splideCtor) return;

      const instance = new splideCtor("#speaker-splide", {
        type: "loop",
        perPage: 3,
        perMove: 1,
        gap: "1.25rem",
        autoplay: true,
        interval: 3200,
        pauseOnHover: true,
        arrows: true,
        pagination: true,
        speed: 600,
        breakpoints: {
          640: { perPage: 1 },
          1024: { perPage: 2 },
        },
      });
      instance.mount();
      el._splide = instance;
    }
  }, []);

  return (
    <section id="speakers" className="py-8 md:py-12 px-8 md:px-16 lg:px-20 w-full bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="anim-speakers-heading mb-8">
          <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
            Featured Speakers
          </h2>
          <p className="font-body text-sm text-gray-400 dark:text-gray-500 transition-colors duration-300">
            Build Alongside the Experts.
          </p>
        </div>

        {/* Splide carousel */}
        <div id="speaker-splide" className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {speakers.map((speaker) => (
                <li key={speaker.name} className="splide__slide py-4">
                  <SpeakerCard speaker={speaker} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Override Splide arrow color to match brand */}
        <style>{`
          #speaker-splide .splide__arrow { background: #4285F4 !important; opacity: 1 !important; }
          #speaker-splide .splide__arrow svg { fill: #fff !important; }
          #speaker-splide .splide__pagination__page { background: #9ca3af !important; }
          #speaker-splide .splide__pagination__page.is-active { background: #4285F4 !important; transform: scale(1.3); }
        `}</style>
      </div>
    </section>
  );
}
