import React from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  return (
    <div className={`relative ${className}`}>
      <span className="relative text-white">{text}</span>
    </div>
  );
};
