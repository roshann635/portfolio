import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./ScrollProgress.css";

/**
 * ScrollProgress — Premium vertical capsule indicator on the right side.
 * Visualizes the scroll journey through the "scenes".
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      className="scroll-progress-container"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="scroll-progress-track">
        <motion.div 
          className="scroll-progress-bar" 
          style={{ scaleY }}
        />
      </div>
      <div className="scroll-progress-dots">
        {[0, 0.25, 0.5, 0.75, 1].map((dot) => (
          <div key={dot} className="scroll-progress-dot" />
        ))}
      </div>
    </motion.div>
  );
};

export default ScrollProgress;
