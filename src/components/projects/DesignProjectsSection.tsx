import React from "react";
import { motion } from "framer-motion";
import DesignProjectCard from "./DesignProjectCard";

interface Screenshot {
  url?: string;
  documentUrl?: string;
  caption: string;
  additionalImages?: string[];
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
          className="text-4xl font-bold text-white mb-16 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
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
    description: "Lead Publisher & Market Coordinator",
    videoUrl: "https://www.youtube.com/embed/CFPw8_FnCYU?loop=1",
    technologies: ["Unity", "C#", "SteamWorks", "Social Media", "Figma"],
    screenshots: [
      {
        url: "/Ye Guild Clerk1.png",
        caption:
          "Led the publishing process on Steam, managing final build approvals and release timeline. Ensured succesful onboarding and compliance with Valve's technical and legal standards. Coordinated game builds, overswa deployment workflows, and designed the store page; optimizing page layout, descriptions, and promotional assets.",
      },
      {
        documentUrl:
          "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/OugY0hKJxNxQVhJQoCAo6e/Ye-Guild-Clerk-Flow-Chart-?type=whiteboard",
        caption:
          "Demonstrated strong system documentation and design workflows by creating flow charts in Figma. This visual documentation helped streamline team communication, and showcase my ability to break down complex systems into clear components for teammates to follow.",
      },
      {
        url: "/graph1.png",
        additionalImages: ["/graph2.png", "/graph3.png"],
        caption:
          "Impressions analytics. Create prmotional content including trailers and short-form videoes. Created media dashboard to track engagment and schedule posts and track deadlines for other social media teamates.",
      },
    ],
    process: "",
  },
  {
    title: "Storm Base",
    description: "Producer",
    videoUrl: "https://player.vimeo.com/video/1039308803?loop=1",
    technologies: ["Unity", "C#", "Trello", "AdobeSuite"],
    screenshots: [
      {
        url: "/Unity.png",
        caption:
          "Conceptulized and designed a game in Unity, focusing on the core gameplay loop and mechanics. I was responsible for the overall game design and project management, ensuring that the game was created in a timely fashion and met quality standards.",
      },
      {
        url: "/Storm.mp4",
        caption:
          "Worked on early stage prtotyping then focused on leading the team throguh SCRUM meetings and managing the project timeline. ",
      },
    ],
    process: "",
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
