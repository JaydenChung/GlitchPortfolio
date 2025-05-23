import React from "react";
import { motion } from "framer-motion";

const DemoReel = () => {
  return (
    <div className="w-full min-h-screen bg-black p-8 md:p-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto text-center relative z-50"
      >
        <h2 className="text-4xl font-bold text-cyan-500 mb-12">
          2025 Demo Reel
        </h2>
        <div className="w-full aspect-video rounded-lg relative bg-black overflow-hidden">
          <div className="absolute inset-0 bg-black"></div>
          <div className="relative w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/o86zA4vOH1k"
              className="absolute inset-0 w-full h-full z-10"
              style={{ backgroundColor: "black" }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="2025 Demo Reel"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoReel;
