"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useGsapAnimations = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Speakers heading
      gsap.from(".anim-speakers-heading", {
        scrollTrigger: { trigger: "#speakers", start: "top 85%" },
        opacity: 0, y: 20, duration: 0.5, ease: "power2.out",
      });

      // Share card pop in
      // gsap.from(".anim-share-card", {
      //   scrollTrigger: {
      //     trigger: ".anim-share-card",
      //     start: "top 80%", // Trigger earlier (95% from top of vs screen)
      //     toggleActions: "play none none none",
      //     once: true
      //   },
      //   opacity: 0,
      //   scale: 0.94,
      //   duration: 0.45, // Snappier duration
      //   ease: "back.out(1.5)",
      //   clearProps: "all" // Clear styles after animation
      // });

      // Footer fade up
      // gsap.from(".anim-footer", {
      //   scrollTrigger: { trigger: "footer", start: "top 95%" },
      //   opacity: 0, y: 16, duration: 0.45, ease: "power2.out",
      // });
    });

    return () => ctx.revert();
  }, []);
}

export default useGsapAnimations;