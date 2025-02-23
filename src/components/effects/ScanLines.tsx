import React from "react";
import { motion } from "framer-motion";

export const ScanLines = () => {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        background:
          "repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px)",
        backgroundSize: "100% 2px",
      }}
      animate={{
        backgroundPosition: ["0 0", "0 -100%"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};
