import React from "react";
import { motion } from "framer-motion";

interface GlitchPortraitProps {
  src: string;
  alt: string;
  className?: string;
}

export const GlitchPortrait = ({
  src,
  alt,
  className = "",
}: GlitchPortraitProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Main Image */}
      <motion.img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-full object-cover rounded-full"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
        }}
      />

      {/* Glitch Layers */}
      <motion.div
        className="absolute inset-0 z-20 mix-blend-screen"
        animate={{
          filter: [
            "hue-rotate(0deg) brightness(1)",
            "hue-rotate(90deg) brightness(1.1)",
            "hue-rotate(0deg) brightness(1)",
          ],
          x: [-2, 2, -2],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover rounded-full"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
          }}
        />
      </motion.div>

      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(45deg, rgba(8, 145, 178, 0.5), rgba(34, 211, 238, 0.5))",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
          filter: "blur(8px)",
          opacity: 0.5,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Scan Line */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-full"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
        }}
      >
        <motion.div
          className="w-full h-[2px] bg-cyan-500/50"
          animate={{
            y: ["-100%", "200%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
};
