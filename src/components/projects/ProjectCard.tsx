import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  imageUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  devpostUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  imageUrl = "",
  websiteUrl = "",
  githubUrl = "",
  devpostUrl = "",
}: ProjectCardProps) => {
  const handleClick = () => {
    if (devpostUrl) {
      window.open(devpostUrl, "_blank");
    } else if (websiteUrl) {
      window.open(websiteUrl, "_blank");
    }
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        className="space-y-4"
      >
        <motion.h3
          className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-200"
          animate={{
            textShadow: [
              "0 0 20px rgba(8, 145, 178, 0)",
              "0 0 20px rgba(8, 145, 178, 0.3)",
              "0 0 20px rgba(8, 145, 178, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          {title}
        </motion.h3>

        <motion.div
          className="cursor-pointer relative max-w-[400px] mx-auto"
          onClick={handleClick}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto rounded-lg"
          />
        </motion.div>

        {githubUrl && (
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-300"
              onClick={() => window.open(githubUrl, "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectCard;