"use client";
import { useEffect } from "react";

const useGsapAnimations = () => {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const loadGsap = async () => {
      // Dynamically import gsap for code splitting / fast initial load
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Speakers heading
        gsap.from(".anim-speakers-heading", {
          scrollTrigger: { trigger: "#speakers", start: "top 85%" },
          opacity: 0, y: 20, duration: 0.5, ease: "power2.out",
        });

        // Schedule items slide in from left with stagger
        gsap.from(".anim-schedule-item", {
          scrollTrigger: { trigger: "#schedule", start: "top 80%" },
          opacity: 0, x: -28, stagger: 0.055, duration: 0.38, ease: "power2.out",
        });

        // Share card pop in
        gsap.from(".anim-share-card", {
          scrollTrigger: { trigger: "#share", start: "top 75%" },
          opacity: 0, scale: 0.94, duration: 0.5, ease: "back.out(1.5)",
        });

        // Footer fade up
        gsap.from(".anim-footer", {
          scrollTrigger: { trigger: "footer", start: "top 95%" },
          opacity: 0, y: 16, duration: 0.45, ease: "power2.out",
        });
      });

      cleanup = () => ctx.revert();
    };

    loadGsap();
    return () => cleanup?.();
  }, []);
}


export default useGsapAnimations