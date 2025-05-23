import React from "react";
import { motion } from "framer-motion";

const ContactTerminal = () => {
  const contactInfo = {
    name: "Jayden Chung",
    email: "03.jayden@gmail.com",
    phone: "310-428-6793",
    linkedin: "https://www.linkedin.com/in/jayden-chung-1ba694266/",
    github: "https://github.com/JaydenChung",
    education: {
      school: "University of California, Santa Cruz",
      degree: "B.S. in Computer Science: Game Design",
      gpa: "3.75",
      period: "September 2021 - June 2025",
      location: "Santa Cruz, CA",
    },
    skills: {
      productionTools: [
        "Trello",
        "Asana",
        "Jira",
        "Notion",
        "Github",
        "Spreadsheets",
        "Miro",
        "MS Suite",
      ],
      technologies: [
        "Unreal Engine",
        "Unity",
        "Social Media",
        "Davinci Resolve",
        "Adobe Cloud",
        "Houdini FX",
        "Blender",
        "Nuke",
        "FL Studio",
      ],
      programmingLanguages: [
        "Blueprints",
        "C#",
        "C++",
        "Python",
        "React",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },
  };

  return (
    <motion.div
      className="w-full max-w-3xl bg-black/80 border border-cyan-500/30 rounded-lg shadow-lg shadow-cyan-500/20 backdrop-blur-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900/50 border-b border-cyan-500/30">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-cyan-300 text-sm">contact.info</span>
      </div>

      {/* Contact Information */}
      <div className="p-6 space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-cyan-400">
            {contactInfo.name}
          </h2>
          <div className="space-y-2">
            <p className="text-cyan-100">
              <span className="text-cyan-400">Email: </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-cyan-300"
              >
                {contactInfo.email}
              </a>
            </p>
            <p className="text-cyan-100">
              <span className="text-cyan-400">Phone: </span>
              <a
                href={`tel:${contactInfo.phone}`}
                className="hover:text-cyan-300"
              >
                {contactInfo.phone}
              </a>
            </p>
            <p className="text-cyan-100">
              <span className="text-cyan-400">LinkedIn: </span>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300"
              >
                LinkedIn Profile
              </a>
            </p>
            <p className="text-cyan-100">
              <span className="text-cyan-400">GitHub: </span>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300"
              >
                Github Profile
              </a>
            </p>
          </div>
        </div>

        {/* Education Information */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">Education</h3>
          <div className="text-cyan-100">
            <p className="font-medium">{contactInfo.education.school}</p>
            <p>{contactInfo.education.degree}</p>
            <p className="text-cyan-400">
              GPA: {contactInfo.education.gpa}
            </p>
            <p>{contactInfo.education.period}</p>
            <p>{contactInfo.education.location}</p>
          </div>
        </div>

        {/* Skills Information */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            Technical Skills
          </h3>
          <div className="space-y-2">
            <div>
              <p className="text-cyan-400 font-medium">Production Tools</p>
              <p className="text-cyan-100">
                {contactInfo.skills.productionTools.join(", ")}
              </p>
            </div>
            <div>
              <p className="text-cyan-400 font-medium">Technologies</p>
              <p className="text-cyan-100">
                {contactInfo.skills.technologies.join(", ")}
              </p>
            </div>
            <div>
              <p className="text-cyan-400 font-medium">Programming Languages</p>
              <p className="text-cyan-100">
                {contactInfo.skills.programmingLanguages.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactTerminal;