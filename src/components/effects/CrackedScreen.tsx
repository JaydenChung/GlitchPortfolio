import React from "react";
import { motion } from "framer-motion";

interface CrackedScreenProps {
  color?: string;
  opacity?: number;
  duration?: number;
}

export const CrackedScreen = ({
  color = "rgba(8, 145, 178, 0.15)",
  opacity = 0.15,
  duration = 3,
}: CrackedScreenProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="crack-effect">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="3"
            />
            <feDisplacementMap in="SourceGraphic" scale="5" />
          </filter>
        </defs>
        <motion.path
          d="M0 0 L100 120 L200 50 L300 180 L400 90 L500 150 M600 200 L700 100 L800 300 M900 150 L1000 250 L1100 50"
          stroke={color}
          strokeWidth="2"
          fill="none"
          filter="url(#crack-effect)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration, ease: "easeInOut" }}
        />
        <motion.path
          d="M1200 0 L1300 200 L1400 100 L1500 300"
          stroke="rgba(8, 145, 178, 0.2)"
          strokeWidth="2"
          fill="none"
          filter="url(#crack-effect)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-cyan-500/5 to-transparent opacity-50" />
    </div>
  );
};
