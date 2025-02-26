import React from "react";
import { motion } from "framer-motion";
import { GlitchImage } from "../effects/GlitchImage";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies?: string[];
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its key features. This is a placeholder text that should be replaced with actual project details.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  videoUrl,
  demoUrl = "https://example.com",
  githubUrl = "https://github.com",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      className="relative w-[380px] bg-black"
    >
      <Card
        className="group overflow-hidden h-[420px] transition-all duration-300 bg-black/50 backdrop-blur-sm relative"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)",
        }}
      >
        {/* Border Animation */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500"
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ padding: "1px" }}
          />
        </div>

        {/* Inner Content with Dark Background */}
        <div className="relative z-10 bg-black h-full m-[1px]">
          <CardHeader className="p-0">
            <div className="relative h-48 overflow-hidden">
              {videoUrl ? (
                <iframe
                  src={videoUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <GlitchImage
                  src={imageUrl}
                  alt={title}
                  className="absolute inset-0"
                />
              )}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"
                animate={{
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              {/* Scanline Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
                style={{ height: "2px" }}
                animate={{
                  y: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </CardHeader>

          <CardContent className="p-6 relative">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(147, 51, 234, 0)",
                  "0 0 20px rgba(147, 51, 234, 0.3)",
                  "0 0 20px rgba(147, 51, 234, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <CardTitle className="mb-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
                {title}
              </CardTitle>
            </motion.div>
            <CardDescription className="text-sm text-purple-200/70 line-clamp-3">
              {description}
            </CardDescription>

            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/50"
                  whileHover={{
                    backgroundColor: "rgba(147, 51, 234, 0.2)",
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </CardContent>

          <CardFooter className="absolute bottom-0 left-0 right-0 p-6 border-t border-purple-500/20 bg-black/80 backdrop-blur-sm">
            <div className="flex justify-between w-full gap-4">
              <Button
                variant="outline"
                className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-colors"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
              <Button
                className="flex-1 bg-purple-500 hover:bg-purple-600 text-white transition-colors"
                onClick={() => window.open(demoUrl, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Play Game
              </Button>
            </div>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
