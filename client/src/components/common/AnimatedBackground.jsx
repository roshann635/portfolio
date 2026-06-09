import { motion } from "framer-motion";
import "./AnimatedBackground.css";

/**
 * AnimatedBackground — Dark, cyan, and purple animated gradient background.
 * Creates the "alive" feeling through subtle breathing motion.
 */
const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      <motion.div
        className="bg-blob blob-cyan"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="bg-blob blob-purple"
        animate={{
          x: [0, -70, 70, 0],
          y: [0, 70, -70, 0],
          scale: [1, 1.3, 0.7, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="bg-blob blob-cyan-2"
        animate={{
          x: [0, 40, -40, 0],
          y: [0, 100, -50, 0],
          scale: [0.7, 1, 0.7],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Noise / Texture overlay for cinematic grain */}
      <div className="bg-noise-overlay" />
    </div>
  );
};

export default AnimatedBackground;
