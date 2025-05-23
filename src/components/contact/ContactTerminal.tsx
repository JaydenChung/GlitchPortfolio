import React, { useState } from "react";
import { motion } from "framer-motion";

interface ContactTerminalProps {
  initialMessage?: string;
}

const ContactTerminal = ({ initialMessage = "Welcome! How can I help you today?" }: ContactTerminalProps) => {
  const [messages, setMessages] = useState([{ text: initialMessage, type: "system" }]);
  const [input, setInput] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, type: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate response
    setTimeout(() => {
      const response = { text: getResponse(input), type: "system" };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const getResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("hi") || lowerMessage.includes("hello")) {
      return "Hello! I'm Jayden's virtual assistant. Feel free to ask about my work or how to get in touch!";
    }
    if (lowerMessage.includes("contact") || lowerMessage.includes("email")) {
      return "You can reach me at jaydenchung2025@gmail.com";
    }
    if (lowerMessage.includes("github")) {
      return "Check out my GitHub: https://github.com/Jay-Devon";
    }
    if (lowerMessage.includes("linkedin")) {
      return "Connect with me on LinkedIn: https://www.linkedin.com/in/jayden-chung-977249297/";
    }
    return "I'd love to chat! Feel free to ask about my work, projects, or how to get in touch.";
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
        <span className="text-cyan-300 text-sm">contact.terminal</span>
      </div>

      {/* Terminal Content */}
      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.type === "user" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.type === "user"
                  ? "bg-cyan-500/20 text-cyan-100"
                  : "bg-cyan-400/20 text-cyan-100"
              }`}
            >
              {msg.type === "system" && (
                <span className="text-xs font-mono text-cyan-400">{">"} </span>
              )}
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-cyan-500/30">
        <div className="flex items-center gap-2 bg-black/50 rounded-lg border border-cyan-500/30 px-4 py-2">
          <span className="text-cyan-500">{">"}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-transparent border-none outline-none text-cyan-100 placeholder-cyan-500/50"
          />
        </div>
      </form>
    </motion.div>
  );
};

export default ContactTerminal;