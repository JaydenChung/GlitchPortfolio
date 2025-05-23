import React from "react";
import { motion } from "framer-motion";

export const CircuitPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern
          id="circuit"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M10 10h30v30h-30z"
            fill="none"
            stroke="rgba(8, 145, 178, 0.1)"
            strokeWidth="0.5"
          />
          <circle cx="10" cy="10" r="2" fill="rgba(8, 145, 178, 0.2)" />
          <line
            x1="10"
            y1="10"
            x2="40"
            y2="40"
            stroke="rgba(8, 145, 178, 0.1)"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(8, 145, 178, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 70%, rgba(8, 145, 178, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};
