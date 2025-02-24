import React from "react";
import { NoiseOverlay } from "./effects/NoiseOverlay";
import { MatrixRain } from "./effects/MatrixRain";
import { CircuitPattern } from "./effects/CircuitPattern";
import { ScanLines } from "./effects/ScanLines";
import { motion } from "framer-motion";
import HeroSection from "./hero/HeroSection";
import ExperienceTimeline from "./experience/ExperienceTimeline";
import ProjectGrid from "./projects/ProjectGrid";
import ContactTerminal from "./contact/ContactTerminal";

interface HomeProps {
  developerName?: string;
  developerTitle?: string;
  avatarUrl?: string;
}

const Home = ({
  developerName = "Jayden Chung",
  developerTitle = "Full Stack Developer",
  avatarUrl = "/profile.jpg",
}: HomeProps) => {
  return (
    <motion.div
      className="w-full min-h-screen bg-black overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CircuitPattern />
      <MatrixRain />
      <NoiseOverlay />
      <ScanLines />
      {/* Hero Section */}
      <section id="hero">
        <HeroSection
          name={developerName}
          title={developerTitle}
          avatarUrl={avatarUrl}
        />
      </section>

      {/* Experience Timeline Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ExperienceTimeline />
      </motion.section>

      {/* Projects Grid Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ProjectGrid />
      </motion.section>

      {/* Contact Terminal Section */}
      <motion.section
        id="contact"
        className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-b from-black to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ContactTerminal
          initialMessage={`Welcome to ${developerName}'s terminal. How can I help you today?`}
          onSubmit={(message) => {
            console.log("Message received:", message);
            // Handle contact form submission here
          }}
        />
      </motion.section>

      {/* Background grid effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,transparent_1px,transparent_1px)] bg-[size:40px_40px] [background-position:center] opacity-10" />
      </div>
    </motion.div>
  );
};

export default Home;
