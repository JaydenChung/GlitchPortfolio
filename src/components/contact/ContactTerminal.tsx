import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Terminal } from "lucide-react";

interface ContactTerminalProps {
  initialMessage?: string;
  onSubmit?: (message: string) => void;
}

const ContactTerminal = ({
  initialMessage = "Welcome to the terminal. Please enter your message...",
  onSubmit = () => {},
}: ContactTerminalProps) => {
  const [messages, setMessages] = useState<string[]>([initialMessage]);
  const [currentInput, setCurrentInput] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      setMessages((prev) => [
        ...prev,
        `> ${currentInput}`,
        "Message received. Processing...",
      ]);
      onSubmit(currentInput);
      setCurrentInput("");
    }
  };

  return (
    <Card
      className="w-full max-w-[800px] h-[600px] mx-auto bg-black border-purple-500 border-2 overflow-hidden relative"
      style={{
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
        clipPath:
          "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(0,255,255,0.05) 0%, rgba(255,0,255,0.05) 100%)",
            "linear-gradient(45deg, rgba(255,0,255,0.05) 0%, rgba(0,255,255,0.05) 100%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            "linear-gradient(0deg, transparent 97%, rgba(0, 255, 255, 0.2) 98%, transparent 100%)",
            "linear-gradient(0deg, transparent 96%, rgba(0, 255, 255, 0.2) 97%, transparent 99%)",
            "linear-gradient(0deg, transparent 98%, rgba(0, 255, 255, 0.2) 99%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="h-full flex flex-col p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-cyan-500 mb-4">
          <Terminal className="w-5 h-5" />
          <span className="font-mono text-sm">Terminal v1.0.0</span>
        </div>

        <div className="flex-1 overflow-auto font-mono text-sm space-y-2 mb-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-green-500"
            >
              {message}
            </motion.div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="flex-1 flex items-center bg-gray-900 rounded-md px-3">
            <span className="text-cyan-500 mr-2">{">"}</span>
            <Input
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              className="border-0 bg-transparent text-green-500 font-mono focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Type your message..."
            />
            <span
              className={`text-cyan-500 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
            >
              ▋
            </span>
          </div>
          <Button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-black"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </Card>
  );
};

export default ContactTerminal;
