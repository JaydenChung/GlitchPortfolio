import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

interface Screenshot {
  url?: string;
  documentUrl?: string;
  caption: string;
}

interface DesignProject {
  title: string;
  description: string;
  videoUrl?: string;
  documentUrl?: string;
  websiteUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  screenshots: Screenshot[];
  process: string;
}

interface DesignProjectCardProps extends DesignProject {}

const DesignProjectCard = ({
  title,
  description,
  videoUrl,
  documentUrl,
  websiteUrl,
  demoUrl,
  githubUrl,
  technologies,
  screenshots,
  process,
}: DesignProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="w-full bg-black/70 border border-primary/40 rounded-lg overflow-hidden backdrop-blur-sm hover:border-primary/80 transition-all duration-300 shadow-lg shadow-primary/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&q=80')] opacity-10 mix-blend-overlay pointer-events-none z-0"></div>
      <CardContent className="p-0 relative z-10">
        {/* Video Trailer or Document */}
        <div className="relative w-full aspect-video bg-black/80 overflow-hidden border-b border-primary/30">
          {documentUrl ? (
            <iframe
              src={documentUrl}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              title={`${title} document`}
            />
          ) : videoUrl ? (
            videoUrl.includes("http") ? (
              <iframe
                src={videoUrl}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title={title}
              />
            ) : (
              <video
                src={videoUrl}
                className="absolute inset-0 w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
                title={title}
              />
            )
          ) : null}
          <div className="absolute inset-0 pointer-events-none border border-primary/20"></div>
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent"></div>
        </div>

        {/* Project Info */}
        <div className="p-6 relative">
          <motion.h3
            className="text-2xl font-bold text-white mb-3 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <p className="text-cyan-100 mb-5 text-base leading-relaxed">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="px-3 py-1.5 bg-primary/20 text-cyan-100 text-sm rounded-full border border-primary/30 shadow-sm shadow-primary/20"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-5">
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-base font-medium"
              >
                <ExternalLink size={16} className="text-primary/80" /> Website
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-base font-medium"
              >
                <ExternalLink size={16} className="text-primary/80" /> Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-base font-medium"
              >
                <Github size={16} className="text-primary/80" /> Code
              </a>
            )}
          </div>

          {/* Play Game Button for both Storm Base and Ye Guild Clerk */}
          {(title === "Storm Base" || title === "Ye Guild Clerk") && (
            <a
              href={
                title === "Ye Guild Clerk"
                  ? "https://thechunkypenguin.itch.io/ye-guild-clerk"
                  : "https://jaydumwum.itch.io/desertapocalypse"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-white bg-green-600 border-green-500 py-3 font-medium text-base rounded-md shadow-md shadow-green-500/20 mb-4"
            >
              {title === "Ye Guild Clerk" ? "PLAY DEMO" : "PLAY GAME"}
            </a>
          )}

          {/* Improved Collapsible Screenshots and Process */}
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full border-t border-primary/30 pt-4"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="w-full flex items-center justify-center gap-2 text-white bg-primary border-primary/50 py-3 font-medium text-base rounded-md shadow-md shadow-primary/20"
              >
                <span className="mr-2">VIEW PROJECT DETAILS</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-6 animate-in fade-in-50 duration-300">
              {/* Process Description */}
              {process && (
                <div className="mb-6">
                  <h4 className="text-base font-semibold text-primary mb-3 font-mono tracking-wide"></h4>
                  <p className="text-cyan-100 text-base leading-relaxed border-l-2 border-primary/30 pl-4">
                    {process}
                  </p>
                </div>
              )}

              {/* Screenshots */}
              <div>
                <div className="grid gap-8">
                  {screenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      className="space-y-3 relative group"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="relative overflow-hidden border border-primary/40 rounded-md max-w-full mx-auto">
                        {screenshot.documentUrl ? (
                          <div className="relative w-full aspect-video">
                            <iframe
                              src={screenshot.documentUrl}
                              className="absolute inset-0 w-full h-full rounded-md"
                              frameBorder="0"
                              allowFullScreen
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          screenshot.url && (
                            <>
                              {screenshot.url.endsWith(".mp4") ? (
                                <video
                                  src={screenshot.url}
                                  className="w-full rounded-md"
                                  controls
                                  autoPlay
                                  loop
                                  muted
                                  title={`${title} video ${index + 1}`}
                                />
                              ) : (
                                <img
                                  src={screenshot.url}
                                  alt={`${title} screenshot ${index + 1}`}
                                  className="w-full rounded-md"
                                  loading="lazy"
                                />
                              )}
                            </>
                          )
                        )}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent"></div>
                      </div>
                      <p className="text-sm text-cyan-200 font-mono leading-relaxed">
                        &gt; {screenshot.caption}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CardContent>
    </Card>
  );
};

export default DesignProjectCard;
