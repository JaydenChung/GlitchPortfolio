import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
}

interface ProjectGridProps {
  projects?: Project[];
}

const ProjectGrid = ({ projects = defaultProjects }: ProjectGridProps) => {
  return (
    <motion.section
      className="w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 relative z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-primary mb-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
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
    title: "AI-Powered Analytics Dashboard",
    description:
      "A real-time analytics platform with machine learning capabilities for predictive insights and data visualization.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/example/project1",
    technologies: ["React", "TypeScript", "TensorFlow.js", "D3.js"],
  },
  {
    title: "Desert Apocalypse",
    description:
      "A thrilling 2D platformer game where you navigate through a post-apocalyptic desert, fighting enemies and collecting resources to survive. Features dynamic combat, resource management, and challenging platforming mechanics.",
    videoUrl:
      "https://player.vimeo.com/video/1039308803?autoplay=1&loop=1&muted=1",
    demoUrl: "https://jaydumwum.itch.io/desertapocalypse",
    githubUrl: "https://github.com/yourusername/desert-apocalypse",
    technologies: ["Unity", "C#", "2D Game Development", "Pixel Art"],
  },
  {
    title: "Social Media Dashboard",
    description:
      "A comprehensive social media management tool with advanced analytics and automated posting features.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/example/project3",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Redis"],
  },
];

export default ProjectGrid;
