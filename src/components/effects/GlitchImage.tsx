import React from "react";
import { motion } from "framer-motion";

interface GlitchImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const GlitchImage = ({ src, alt, className = "" }: GlitchImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full"
        style={{ objectFit: "contain", maxHeight: "400px" }}
        animate={{
          filter: [
            "hue-rotate(0deg) brightness(1) contrast(100%)",
            "hue-rotate(90deg) brightness(1.2) contrast(150%)",
            "hue-rotate(180deg) brightness(0.8) contrast(120%)",
            "hue-rotate(0deg) brightness(1) contrast(100%)",
          ],
          x: [-2, 2, -2],
          y: [-1, 1, -1],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};
