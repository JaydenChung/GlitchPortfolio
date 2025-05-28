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
  additionalImages?: string[];
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

const getGraphTooltip = (imgUrl: string): string => {
  if (imgUrl.includes("graph1")) return "YouTube Analytics March 1st-March 28th";
  if (imgUrl.includes("graph2")) return "Steam Wishlists and Impressions";
  if (imgUrl.includes("graph3")) return "Notion Draft & Management";
  if (imgUrl.includes("graph4")) return "SocialSprout Media Dashboard";
  return "";
};

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
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleCollapsibleChange = (open: boolean) => {
    if (open) {
      // Store current scroll position when opening
      setScrollPosition(window.scrollY);
    } else {
      // Restore scroll position when closing
      window.scrollTo({
        top: scrollPosition,
        behavior: "instant",
      });
    }
    setIsOpen(open);
  };

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
            onOpenChange={handleCollapsibleChange}
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
            <CollapsibleContent className="overflow-hidden">
              <div className="pt-6 animate-in fade-in-50 duration-300 relative">
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
                          ) : screenshot.url && screenshot.additionalImages ? (
                            <div className="flex flex-col gap-4 py-6">
                              {/* Main large graph container */}
                              <div className="w-full aspect-[16/9] relative">
                                {[
                                  screenshot.url,
                                  ...screenshot.additionalImages,
                                ].map((imgUrl, imgIndex) => (
                                  <img
                                    key={imgIndex}
                                    src={imgUrl}
                                    alt={`${title} graph ${imgIndex + 1}`}
                                    className={`w-full h-full object-contain rounded-lg shadow-xl transition-all duration-500 absolute top-0 left-0 
                                      ${imgIndex === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                                    id={`main-graph-${imgIndex}`}
                                    loading="lazy"
                                  />
                                ))}
                              </div>

                              {/* Smaller graphs container */}
                              <div className="flex gap-4 justify-center">
                                {[
                                  screenshot.url,
                                  ...screenshot.additionalImages,
                                ].map((imgUrl, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    className="relative group/image cursor-pointer w-48 aspect-video"
                                    onMouseEnter={() => {
                                      const mainGraphs =
                                        document.querySelectorAll(
                                          '[id^="main-graph-"]',
                                        );
                                      mainGraphs.forEach((graph, idx) => {
                                        if (idx === imgIndex) {
                                          graph.classList.remove(
                                            "opacity-0",
                                            "z-0",
                                          );
                                          graph.classList.add(
                                            "opacity-100",
                                            "z-10",
                                          );
                                        } else {
                                          graph.classList.remove(
                                            "opacity-100",
                                            "z-10",
                                          );
                                          graph.classList.add(
                                            "opacity-0",
                                            "z-0",
                                          );
                                        }
                                      });
                                    }}
                                  >
                                    <img
                                      src={imgUrl}
                                      alt={`${title} graph ${imgIndex + 1} thumbnail`}
                                      className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:ring-2 hover:ring-primary/60"
                                      loading="lazy"
                                    />
                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 bg-black/90 text-cyan-300 px-3 py-1 rounded-md text-sm whitespace-nowrap">
                                      {getGraphTooltip(imgUrl)}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : screenshot.url &&
                            screenshot.url.endsWith(".mp4") ? (
                            <video
                              src={screenshot.url}
                              className="w-full rounded-md"
                              controls
                              autoPlay={false}
                              loop
                              muted={false}
                              playsInline
                            />
                          ) : (
                            screenshot.url && (
                              <img
                                src={screenshot.url}
                                alt={`${title} screenshot`}
                                className="w-full rounded-md"
                                loading="lazy"
                              />
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

                {/* Floating collapse button */}
                <div className="sticky bottom-4 flex justify-center mt-6">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-black/80 border-cyan-500/20 shadow-sm shadow-cyan-500/10 backdrop-blur-sm 
                        hover:bg-cyan-950/30 hover:border-cyan-400/50 hover:scale-105
                        hover:shadow-[0_0_15px_2px] hover:shadow-cyan-500/30
                        transition-all duration-300 ease-out relative overflow-visible"
                    >
                      <ChevronUp
                        size={20}
                        className="text-cyan-400/80 hover:text-cyan-300"
                      />
                    </Button>
                  </CollapsibleTrigger>
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
