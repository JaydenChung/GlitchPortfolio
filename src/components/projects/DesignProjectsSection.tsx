import React from "react";
import { motion } from "framer-motion";
import DesignProjectCard from "./DesignProjectCard";

interface Screenshot {
  url?: string;
  documentUrl?: string;
  caption: string;
}

interface DesignProject {
  title: string;
  description: string;
  videoUrl: string;
  websiteUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  screenshots: Screenshot[];
  process: string;
}

interface DesignProjectsSectionProps {
  projects?: DesignProject[];
}

const DesignProjectsSection = ({
  projects = defaultProjects.slice(0, 3),
}: DesignProjectsSectionProps) => {
  return (
    <motion.section
      className="w-full py-24 px-4 md:px-6 lg:px-12 relative z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full mx-auto">
        <motion.h2
          className="text-5xl font-bold text-primary mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Games
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-16 justify-items-center w-full max-w-[1000px] mx-auto"
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
              className="w-full"
            >
              <DesignProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const defaultProjects: DesignProject[] = [
  {
    title: "Ye Guild Clerk",
    description: "Fullscreen 4K Reccomended",
    videoUrl: "https://www.youtube.com/embed/CFPw8_FnCYU?loop=1",
    technologies: ["Unity", "C#", "Game Development", "Marketing"],
    screenshots: [
      {
        url: "/Ye Guild Clerk1.png",
        caption: "As Lead Publisher and Market Coordinator, I spearheaded the game's market strategy and coordinated with distribution platforms to maximize visibility and engagement.",
      },
      {
        documentUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/OugY0hKJxNxQVhJQoCAo6e/Ye-Guild-Clerk-Flow-Chart-?type=whiteboard",
        caption: "Game flow chart and design documentation showcasing the core gameplay mechanics and systems.",
      }
    ],
    process: "",
  },
  {
    title: "Storm Base",
    description:
      "",
    videoUrl:
      "https://player.vimeo.com/video/1039308803?loop=1",
    technologies: ["Unreal Engine", "Capcut", "TikTok", "FL Studio"],
    screenshots: [
      {
        url: "/Unity.png",
        caption: "Directed and edited a high-impact game trailer for Storm Base, capturing the game's post-apocalyptic tone and dynamic gameplay. Designed and implemented dramatic camera movements, smooth transitions, and visual storytelling techniques to engage viewers.",
      },
      {
        url: "/Unity2.png",
        caption: "Designed and Programmed functionality in Unity and published on my itch.io page! Features unique combat and camera movement.",
      },
    ],
    process:
      "",
  },
  // {
  //   title: "AMG GTR Short",
  //   description:
  //     "Fullscreen 4K Reccomended",
  //   videoUrl:
  //     "https://player.vimeo.com/video/1067622412?loop=1",
  //   technologies: ["Unity", "Premiere Pro", "AdobePhotoshop", "Github"],
  //   screenshots: [
  //     {
  //       url: "/AMG1.png",
  //       caption: "Produced a high-engagement TikTok video showcasing a car, leveraging dynamic cinematography and short-form storytelling. Enhance visuals, add text overlays, and sync music with car movements for maximum impact." ,
  //     },
  //     {
  //       url: "/AMG2.png",
  //       caption: "Applied fast paced editing techniques and high renderes with pathtracing to calculate realistic light reflections.",
  //     },
  //   ],
  //   process:
  //     "",
  // },
  
];

export default DesignProjectsSection;