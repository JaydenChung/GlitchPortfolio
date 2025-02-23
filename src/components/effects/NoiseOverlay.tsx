import React from "react";
import { motion } from "framer-motion";

export const NoiseOverlay = () => {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-30 mix-blend-overlay opacity-20"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
      animate={{
        opacity: [0.1, 0.15, 0.1],
        filter: [
          "brightness(1) contrast(120%)",
          "brightness(1.1) contrast(130%)",
          "brightness(1) contrast(120%)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};
