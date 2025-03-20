import React from "react";
import { motion } from "framer-motion";
import DesignProjectCard from "./DesignProjectCard";

interface Screenshot {
  url: string;
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
          Design Projects
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
    title: "Automotive Concept Commercial",
    description:
      "Fullscreen 4K Reccomended",
    videoUrl:
      "https://player.vimeo.com/video/1066405543?loop=1",
    technologies: ["Adobe Photoshop", "Unreal Engine", "Blender"],
    screenshots: [
      {
        url: "../public/Unreal.jpg",
        caption:
          "Designed a photorealistic automotive environment using HDRI lighting with Lumen illumination to render automotive materials with enhanced reflections and realism.",
      },
      {
        url: "../public/Blender.png",
        caption: "Imported high poly vehicle and assets from Blender. Seperated vehicle body, wheels and caliber to set up rigging and vehicle animation in UE5. Developed cinematic camera movements and dynamic lighting setups to create visually engaging sequences.",
      },
      {
        url: "../public/Premiere.png",
        caption: "Edited and synchronized sound effects in Adobe Premiere Pro, refining audio transitions and enhancing the immersive experience. Utilized motion blur, depth of field, and post-processing color grading to achieve a professional-grade commercial look.",
      },
    ],
    process:
      "",
  },
  {
    title: "Eco-Friendly App Concept",
    description:
      "",
    videoUrl:
      "https://player.vimeo.com/video/1039308803?autoplay=1&loop=1",
    technologies: ["Unreal Engine", "Capcut", "TikTok", "FL Studio"],
    screenshots: [
      {
        url: "../public/Unity.png",
        caption: "Directed and edited a high-impact game trailer for Desert Apocalypse, capturing the game's post-apocalyptic tone and dynamic gameplay. Designed and implemented dramatic camera movements, smooth transitions, and visual storytelling techniques to engage viewers.",
      },
      {
        url: "../public/Unity2.png",
        caption: "Designed and Programmed functionality in Unity and published on my itch.io page! Features unique combat and camera movement.",
      },
    ],
    process:
      "",
  },
  {
    title: "AMG GTR Short",
    description:
      "Fullscreen 4K Reccomended",
    videoUrl:
      "https://player.vimeo.com/video/1067622412?autoplay=1&loop=1",
    technologies: ["Unity", "Premiere Pro", "AdobePhotoshop", "Github"],
    screenshots: [
      {
        url: "../public/AMG1.png",
        caption: "Produced a high-engagement TikTok video showcasing a car, leveraging dynamic cinematography and short-form storytelling. Enhance visuals, add text overlays, and sync music with car movements for maximum impact." ,
      },
      {
        url: "../public/AMG2.png",
        caption: "Applied fast paced editing techniques and high renderes with pathtracing to calculate realistic light reflections.",
      },
    ],
    process:
      "",
  },
  
];

export default DesignProjectsSection;