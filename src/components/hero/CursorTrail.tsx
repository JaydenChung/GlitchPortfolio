import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface CursorTrailProps {
  color?: string;
  size?: number;
  trailLength?: number;
}

const CursorTrail = ({
  color = "rgba(128, 0, 255, 0.5)",
  size = 15,
  trailLength = 12,
}: CursorTrailProps) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [trail, setTrail] = React.useState<{ x: number; y: number }[]>([]);
  const requestRef = useRef<number>();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateTrail = () => {
      setTrail((prevTrail) => {
        const newTrail = [
          mousePosition,
          ...prevTrail.slice(0, trailLength - 1),
        ];
        return newTrail;
      });
      requestRef.current = requestAnimationFrame(updateTrail);
    };

    requestRef.current = requestAnimationFrame(updateTrail);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePosition, trailLength]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 bg-transparent">
      {trail.map((position, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: position.x - size / 2,
            top: position.y - size / 2,
            width: size,
            height: size,
            backgroundColor: color,
            opacity: 1 - index / trailLength,
            filter: `blur(${index * 2}px)`,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
