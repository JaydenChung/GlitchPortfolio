import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  sensitivity?: number;
}

export const ThreeDCard = ({
  children,
  className = "",
  depth = 40,
  sensitivity = 20,
}: ThreeDCardProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation based on mouse position
    const rotateYValue = (mouseX / (rect.width / 2)) * sensitivity;
    const rotateXValue = -(mouseY / (rect.height / 2)) * sensitivity;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setScale(1.05);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}

      {/* Shadow effect */}
      <div
        className="absolute inset-0 rounded-lg bg-black/20 blur-lg -z-10"
        style={{
          transform: `translateZ(-${depth}px) scale(0.9)`,
          transformStyle: "preserve-3d",
          opacity: Math.abs(rotateX) / 100 + Math.abs(rotateY) / 100 + 0.2,
        }}
      />
    </motion.div>
  );
};
