import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CursorTrail from "./CursorTrail";
import { GlitchText } from "../effects/GlitchText";

interface HeroSectionProps {
  name?: string;
  title?: string;
  avatarUrl?: string;
}

const HeroSection = ({
  name = "Jayden Chung",
  title = "Full Stack Developer",
  avatarUrl = "/Linkedin.jpg",
}: HeroSectionProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 500]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 20]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      <CursorTrail />

      {/* Glitch overlay effect */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%,transparent_100%)] pointer-events-none" />

      <motion.div
        className="relative z-10 text-center"
        style={{
          y,
          rotateX: rotate,
          scale,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto relative group">
            <img
              src={avatarUrl}
              alt="Jayden Chung"
              className="w-full h-full border-4 border-cyan-500/30 rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 group-hover:opacity-75 transition-opacity opacity-0" />
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl font-bold mb-4 text-white relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <GlitchText text={name} className="text-6xl font-bold" />
        </motion.h1>

        <motion.h2
          className="text-2xl text-cyan-400 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="px-8 py-3 text-lg font-semibold text-white bg-transparent border-2 border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-colors duration-300 relative group">
            <span className="relative z-10">
              I'm a developer and designer who loves building and pushing the
              bounds of creativity!
              <br />
              I enjoy bringing websites, apps, and video games to life. I make
              experiences <br />
              people genuinely connect with and see possibilities where others
              see limitations.{" "}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </motion.div>

      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,transparent_1px,transparent_1px)] bg-[size:40px_40px] [background-position:center] opacity-20" />
    </div>
  );
};

export default HeroSection;
