import React from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const randomGlitch = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
    return text
      .split("")
      .map((char) =>
        Math.random() > 0.95
          ? chars[Math.floor(Math.random() * chars.length)]
          : char,
      )
      .join("");
  };

  return (
    <div className={`relative ${className}`}>
      <motion.span
        className="absolute top-0 left-0 text-purple-500"
        animate={{
          x: [-2, 2, -2],
          y: [-1, 1, -1],
          opacity: [0.5, 0.8, 0.5],
          filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {randomGlitch()}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-violet-500"
        animate={{
          x: [2, -2, 2],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.1,
        }}
      >
        {text}
      </motion.span>
      <span className="relative">{text}</span>
    </div>
  );
};
