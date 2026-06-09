import { useEffect, useRef } from "react";
import "./Cursor.css";
import gsap from "gsap";

/**
 * CustomCursor — Premium cursor with:
 *   - Main dot that follows mouse with slight lag
 *   - Large glow circle (spotlight) that trails behind
 *   - Ghost trail dots that fade with distance
 *   - Snap-to-element behavior on interactive elements
 *   - Hidden on touch devices
 */
const TRAIL_COUNT = 6;

const Cursor = () => {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    // Skip custom cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const cursor = cursorRef.current;
    const glow = glowRef.current;
    if (!cursor || !glow) return;

    let hover = false;
    const mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const glowPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Trail positions (each slightly more delayed)
    const trailPositions = Array.from({ length: TRAIL_COUNT }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }));

    const updateMouse = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    document.addEventListener("mousemove", updateMouse);

    let animationFrameId;

    const loop = () => {
      if (!hover) {
        // Main cursor — fast follow
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        gsap.set(cursor, { x: cursorPos.x, y: cursorPos.y });
      }

      // Glow — slower follow for spotlight trail effect
      glowPos.x += (mousePos.x - glowPos.x) * 0.06;
      glowPos.y += (mousePos.y - glowPos.y) * 0.06;
      gsap.set(glow, { x: glowPos.x, y: glowPos.y });

      // Ghost trail — each dot follows the one before it
      trailRefs.current.forEach((trail, i) => {
        if (!trail) return;
        const target = i === 0 ? cursorPos : trailPositions[i - 1];
        const speed = 0.15 - i * 0.015; // each dot progressively slower
        trailPositions[i].x += (target.x - trailPositions[i].x) * speed;
        trailPositions[i].y += (target.y - trailPositions[i].y) * speed;
        gsap.set(trail, {
          x: trailPositions[i].x,
          y: trailPositions[i].y,
        });
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    // Interactive element snap behavior
    const attachInteractiveEvents = () => {
      const interactives = document.querySelectorAll("a, button, [data-cursor]");

      interactives.forEach((item) => {
        item.addEventListener("mouseover", (e) => {
          const target = e.currentTarget;
          const rect = target.getBoundingClientRect();

          if (
            target.dataset.cursor === "icons" ||
            target.tagName === "A" ||
            target.tagName === "BUTTON"
          ) {
            cursor.classList.add("cursor-icons");
            gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.15 });
            cursor.style.setProperty("--cursorH", `${rect.height}px`);
            cursor.style.setProperty("--cursorW", `${rect.width}px`);
            hover = true;
          }

          if (target.dataset.cursor === "disable") {
            cursor.classList.add("cursor-disable");
          }
        });

        item.addEventListener("mouseout", () => {
          cursor.classList.remove("cursor-disable", "cursor-icons");
          hover = false;
        });
      });
    };

    // Re-attach on DOM changes (e.g., route navigation)
    setTimeout(attachInteractiveEvents, 500);

    // MutationObserver to re-attach on DOM mutations
    const observer = new MutationObserver(() => {
      setTimeout(attachInteractiveEvents, 200);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", updateMouse);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Spotlight glow — large, blurred, trails behind cursor */}
      <div className="cursor-glow" ref={glowRef} />

      {/* Ghost trail dots — fade with distance */}
      {Array.from({ length: TRAIL_COUNT }, (_, i) => (
        <div
          key={i}
          className="cursor-trail"
          ref={(el) => (trailRefs.current[i] = el)}
          style={{
            opacity: 0.4 - i * 0.06,
            width: `${8 - i}px`,
            height: `${8 - i}px`,
          }}
        />
      ))}

      {/* Main cursor dot */}
      <div className="cursor-main" ref={cursorRef} />
    </>
  );
};

export default Cursor;
