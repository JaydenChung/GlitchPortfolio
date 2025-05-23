import React from "react";
import { NoiseOverlay } from "./effects/NoiseOverlay";
import { ScanLines } from "./effects/ScanLines";
import { ThreeBackground } from "./effects/ThreeBackground";
import { motion } from "framer-motion";
import HeroSection from "./hero/HeroSection";
import DemoReel from "./experience/ExperienceTimeline";
import ExperienceSection from "./experience/ExperienceSection";
import ProjectGrid from "./projects/ProjectGrid";
import DesignProjectsSection from "./projects/DesignProjectsSection";
import ContactTerminal from "./contact/ContactTerminal";

interface HomeProps {
  developerName?: string;
  developerTitle?: string;
  avatarUrl?: string;
}

const Home = ({
  developerName = "Jayden Chung",
  developerTitle = "Developer",
  avatarUrl = "/Linkedin.jpg",
}: HomeProps) => {
  return (
    <motion.div
      className="w-full min-h-screen bg-black overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ThreeBackground color="#0891b2" />
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

      {/* 2025 Demo Reel Section */}
      <motion.section
        id="demo-reel"
        className="relative isolate"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <DemoReel />
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="relative isolate pb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ExperienceSection />
      </motion.section>

      {/* Design Projects Section */}
      <motion.section
        id="design-projects"
        className="pt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <DesignProjectsSection />
      </motion.section>

      {/* Technical Projects Grid Section */}
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
