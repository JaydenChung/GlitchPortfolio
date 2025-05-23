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
        "Bridged communication between Software engineering and legal interns to deliver effective document automation solutions",
        "Improved Tenants Lawfirm website SEO by optimizing content structure and keyword usage",
        "Leveraged Google Analytics to increase website traffic and conduct competitive analysis"
      ],
    },
  ];

  return (
    <div className="w-full bg-black p-8 md:p-16">
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
              <Card className="bg-black/70 border border-primary/40 overflow-hidden backdrop-blur-sm hover:border-primary/80 transition-all duration-300 shadow-lg shadow-primary/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-primary">
                        {exp.company}
                      </h3>
                      <span className="text-primary/80 font-mono text-sm">
                        {exp.period}
                      </span>
                    </div>
                    {exp.website && (
                      <a 
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        Visit Website
                      </a>
                    )}
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <p className="text-cyan-100 font-medium">{exp.role}</p>
                      <span className="text-primary/80 text-sm">{exp.location}</span>
                    </div>
                    <ul className="list-none space-y-2 border-l-2 border-primary/30 pl-4">
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