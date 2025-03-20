import React from "react";
import { motion } from "framer-motion";
import { ThreeDCard } from "../effects/ThreeDCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  year: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
}

interface ExperienceTimelineProps {
  items?: TimelineItem[];
}

const ExperienceTimeline = ({
  items = [
//     {
//       year: "2024",
//       company: "Samsung Research America",
//       role: "Game Development Intern",
//       description: `• Contributed to AI-driven features for Samsung Gaming Hub, enhancing user experience through personalized game recommendations
// • Implemented ML model for player behavior analysis, improving recommendation accuracy by 20%
// • Optimized backend systems in C++ and Python to reduce game streaming latency`,
//       technologies: [
//         "C++",
//         "Python",
//         "Machine Learning",
//         "Game Development",
//         "AI",
//       ],
//     },
    {
      year: "2023",
      company: "Tenants Lawfirm",
      role: "Software Engineer Intern",
      description: `• Designed Python script for PDF to .exe conversion with dynamic text content editing
• Enhanced Squarespace website functionality using Google API and optimized SEO
• Automated DocuSign templates to improve document signing efficiency`,
      technologies: ["Python", "Google API", "Squarespace", "DocuSign", "SEO"],
    },
  ],
}: ExperienceTimelineProps) => {
  return (
    <div className="w-full min-h-screen bg-black p-8 md:p-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-cyan-500 mb-12 text-center">
          Experience Timeline
        </h2>
        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-border" />

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ThreeDCard>
                <Card
                  className="relative ml-6 hover:shadow-lg transition-shadow border-cyan-500 bg-black/50 backdrop-blur-sm overflow-hidden"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 255, 255, 0.06), transparent 40%)",
                    }}
                  />
                  {/* Timeline dot */}
                  <div className="absolute -left-9 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />

                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{
                        filter: [
                          "brightness(1)",
                          "brightness(1.2)",
                          "brightness(1)",
                        ],
                        transition: {
                          duration: 0.2,
                          repeat: Infinity,
                        },
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-cyan-500">
                            {item.role}
                          </h3>
                          <p className="text-cyan-300/70">{item.company}</p>
                        </div>
                        <span className="text-sm font-mono text-fuchsia-400 mt-2 md:mt-0">
                          {item.year}
                        </span>
                      </div>

                      <p className="text-purple-200 whitespace-pre-line leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-cyan-500/50 text-purple-200 whitespace-pre-line leading-relaxed mb-4"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceTimeline;
