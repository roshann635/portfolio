import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./PageLoader.css";

/**
 * PageLoader — Cinematic intro loader.
 * Shows a progress counter and expanding circle transition,
 * matching premium portfolio loading screens.
 */
const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const loaderRef = useRef(null);
  const counterRef = useRef(null);
  const circleRef = useRef(null);

  // Simulate loading progress
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 3;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        // Brief pause at 100% before exit animation
        setTimeout(() => setIsComplete(true), 400);
      }
      setProgress(current);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Exit animation when complete
  useEffect(() => {
    if (!isComplete) return;

    const tl = gsap.timeline({
      onComplete: () => onComplete?.(),
    });

    tl.to(counterRef.current, {
      y: -60,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
    })
    .to(circleRef.current, {
      scale: 30,
      duration: 0.8,
      ease: "power2.inOut",
    }, 0.1)
    .to(loaderRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
    }, 0.6);
  }, [isComplete, onComplete]);

  return (
    <div className="page-loader" ref={loaderRef}>
      <div className="page-loader__content" ref={counterRef}>
        <span className="page-loader__counter">
          {String(Math.min(progress, 100)).padStart(3, "0")}
        </span>
        <span className="page-loader__label">Loading Experience</span>
        <div className="page-loader__bar">
          <div
            className="page-loader__bar-fill"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
      <div className="page-loader__circle" ref={circleRef} />
    </div>
  );
};

export default PageLoader;
