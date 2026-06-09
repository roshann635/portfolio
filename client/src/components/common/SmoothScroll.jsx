import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScroll — Global smooth scroll provider using Lenis.
 * Integrates with GSAP ScrollTrigger so all scroll-based
 * animations get the same buttery-smooth inertial feel.
 * 
 * Drop this into App.jsx as a sibling — it has no children,
 * it just patches the global scroll behavior.
 */
const SmoothScroll = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Create Lenis instance with cinematic settings
    const lenis = new Lenis({
      duration: 1.4,           // scroll duration (higher = smoother)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return null; // No DOM output — just patches scroll behavior
};

export default SmoothScroll;
