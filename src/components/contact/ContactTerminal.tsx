import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ThreeDCard } from "../effects/ThreeDCard";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

interface ContactTerminalProps {
  initialMessage?: string;
}

const ContactTerminal = ({
  initialMessage = "Welcome to the portfolio terminal. Click a button to explore...",
}: ContactTerminalProps) => {
  const [messages, setMessages] = useState<string[]>([initialMessage]);

  const addMessage = (command: string, output: string) => {
    setMessages((prev) => [...prev, `> ${command}`, output]);
  };
  // 🔹 Game Development Intern at Samsung Research America (2024)
  // - Contributed to AI-driven features for Samsung Gaming Hub, enhancing user experience
  // - Implemented ML model for player behavior analysis, improving recommendation accuracy
  // - Optimized backend systems in C++ and Python to reduce game streaming latency
  // - Tech: C++, Python, Node.js
  const handleExperienceClick = () => {
    addMessage(
      "experience",
      `Experience Highlights:

🔹 Software Engineer Intern at Tenants Lawfirm (2023)
   - Built client-facing applications
   - Designed python scripts for PDF parsing
   - Enhanced Website functionality
   - Automated docusign templates
   - Tech: Google API, Python, SEO`,
    );

    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    addMessage(
      "projects",
      `Featured Projects:

      PickmeGPT
   - AI powered chatbot
   - React, node.js, Typescript, CSS

      Desert Apocalypse
   - Unity project lead
   - Unity, C#, Animations, Video editing
   
      SlugLove
    - UCSC hackathon winner
    - React, Firebase, CSS, Construct 3`,
    );

    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkillsClick = () => {
    addMessage(
      "skills",
      `Technical Skills:

🔹 Frontend: React, TypeScript, CSS
🔹 Backend: Node.js, Python, C++, C#, JavaScript
🔹 Cloud: AWS, Vercel, Netlify
🔹 Engines: Unity, Unreal Engine  `,
    );
  };

  const handleContactClick = () => {
    addMessage(
      "contact",
      `📧 Email: 03.jayden@gmail.com
📱 Phone: 310-428-6793
📍 Location: Los Angeles, CA
   Github: https://github.com/JaydenChung
   Linkedin: https://www.linkedin.com/in/jayden-chung-1ba694266/`,
    );
  };

  const handleClearClick = () => {
    setMessages([initialMessage]);
  };

  return (
    <ThreeDCard>
      <Card className="w-full max-w-[800px] h-[600px] mx-auto bg-black border-purple-500 border-2 overflow-hidden">
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center gap-2 text-cyan-500 mb-4">
            <Terminal className="w-5 h-5" />
            <span className="font-mono text-sm">Portfolio Terminal v1.0</span>
          </div>

          <div className="flex-1 overflow-auto font-mono text-sm space-y-2 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${message.startsWith(">") ? "text-cyan-500" : "text-green-500"}`}
                style={{ whiteSpace: "pre-line" }}
              >
                {message}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <Button
              onClick={handleExperienceClick}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-mono text-sm"
            >
              Experience
            </Button>
            <Button
              onClick={handleProjectsClick}
              className="bg-purple-500 hover:bg-purple-600 text-black font-mono text-sm"
            >
              Projects
            </Button>
            <Button
              onClick={handleSkillsClick}
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-black font-mono text-sm"
            >
              Skills
            </Button>
            <Button
              onClick={handleContactClick}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-mono text-sm"
            >
              Contact
            </Button>
            <Button
              onClick={handleClearClick}
              className="bg-gray-500 hover:bg-gray-600 text-black font-mono text-sm col-span-2 sm:col-span-1"
            >
              Clear
            </Button>
          </div>
        </div>
      </Card>
    </ThreeDCard>
  );
};

export default ContactTerminal;
