import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  website?: string;
  responsibilities: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      company: "Tenant's Lawfirm",
      role: "Technology Senior Intern",
      period: "May 2024 – Aug 2024",
      location: "Beverley Hills, CA",
      website: "https://www.tenantslawfirm.com/",
      responsibilities: [
        "Acted as a liaison between software engineering and legal teams to design document automation tools that streamlined case templates and improved workflow efficiency",
        "Optimized Tenants Lawfirm's website structure and content for SEO, enhancing keyword targeting and improving search engine visibility",
        "Leveraged Google Analytics to increase website traffic and conduct competitive analysis for page orientation adjustments.",
      ],
    },
    {
      company: "Game Design & Art Collaboration (GDA) – UCSC",
      role: "Mock Studio",
      period: "Fall 2024 – Spring 2025",
      location: "Santa Cruz, CA",
      website: "https://gdacollab.com/",
      responsibilities: [
        "Worked in GDA's mock studio, a year-long simulation of a professional environment, modeled after real industry pipelines",
        "Collaborated with a wide range of departments to take a product from conception to completion, ensuring alignment across design, technical, and narrative goals",
        "Created design docs and AI integration of Well Witches, GDA's game of 2025",
        "Gained hands-on experience as a designer in a large development team, while coordinating task delegation and milestone tracking",
      ],
    },
  ];

  return (
    <div className="w-full bg-transparent p-8 md:p-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto relative z-50"
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-black/70 border border-cyan-500/40 overflow-hidden backdrop-blur-sm hover:border-cyan-500/80 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-cyan-500">
                        {exp.company}
                      </h3>
                      <span className="text-cyan-500/80 font-mono text-sm">
                        {exp.period}
                      </span>
                    </div>
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500 hover:text-cyan-400 transition-colors"
                      >
                        Visit Website
                      </a>
                    )}
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <p className="text-cyan-100 font-medium">{exp.role}</p>
                      <span className="text-cyan-500/80 text-sm">
                        {exp.location}
                      </span>
                    </div>
                    <ul className="list-none space-y-2 border-l-2 border-cyan-500/30 pl-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          className="text-cyan-100"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
