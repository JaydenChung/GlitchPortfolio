import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  title?: string;
  imageUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  devpostUrl?: string;
}

interface ProjectGridProps {
  projects?: Project[];
}

const ProjectGrid = ({ projects = defaultProjects }: ProjectGridProps) => {
  return (
    <motion.section
      className="w-full py-20 px-4 md:px-8 lg:px-16 relative z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-primary mb-16 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Awards
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const defaultProjects: Project[] = [
  {
    title: "High-Note - First Place Education Hack 🏆",
    imageUrl: "/HN1.jpg",
    githubUrl: "https://github.com/alitaquie/cruzhacks2025",
    devpostUrl: "https://devpost.com/software/high-note",
  },
  {
    title: "SlugLove - Secret Prize Winner #2 🎁",
    imageUrl: "/SLugLove.png",
    websiteUrl: "https://sluglove.netlify.app/",
    githubUrl: "https://github.com/jaydumwum/SlugLove",
    devpostUrl: "https://devpost.com/software/sluglove",
  },
];

export default ProjectGrid;
