import React, { useState } from "react";
import { Card } from "@/components/ui/card";
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

  const handleExperienceClick = () => {
    addMessage(
      "experience",
      `Experience Highlights:

🔹 Senior Developer at Tech Corp (2023)
   - Led development of core platform features
   - Mentored junior developers
   - Tech: React, TypeScript, Node.js

🔹 Full Stack Developer at StartUp Inc (2021)
   - Built client-facing applications
   - Tech: Vue.js, Python, AWS`,
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

🚀 AI Analytics Dashboard
   - Real-time data visualization
   - Machine learning integration
   - React, TensorFlow.js, D3.js

💻 E-Commerce Platform
   - Next.js, GraphQL, Stripe
   - Real-time inventory
   - AI recommendations`,
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

🔹 Frontend: React, TypeScript, Next.js
🔹 Backend: Node.js, Python, Express
🔹 Database: PostgreSQL, MongoDB
🔹 Cloud: AWS, Vercel, Netlify
🔹 Tools: Git, Docker, Jest`,
    );
  };

  const handleContactClick = () => {
    addMessage(
      "contact",
      `📧 Email: jayden.chung@example.com
📱 Phone: (555) 123-4567
📍 Location: San Francisco, CA`,
    );
  };

  const handleClearClick = () => {
    setMessages([initialMessage]);
  };

  return (
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
  );
};

export default ContactTerminal;
