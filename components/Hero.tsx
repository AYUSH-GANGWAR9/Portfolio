"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Code, Database, Brain, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const roles = [
  "Full Stack Dev",
  "Backend Specialist",
  "AI Innovator",
  "CSE Student @ IIITVICD",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState<{ x: number; y: number; duration: number; size: number; Icon: LucideIcon }[]>([]);

  useEffect(() => {
    const icons = [Code, Database, Brain, Terminal];
    const newParticles = Array.from({ length: 10 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 10 + Math.random() * 10,
      size: 40 + Math.random() * 40,
      Icon: icons[Math.floor(Math.random() * icons.length)],
    }));
    // Use setTimeout to avoid "setState synchronously within an effect" warning
    const timer = setTimeout(() => {
      setParticles(newParticles);
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const role = roles[currentRole];
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(role.substring(0, displayText.length + 1));
        if (displayText.length === role.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(role.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Animated Particles/Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            initial={{ 
              x: 0, 
              y: 0 
            }}
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
          >
            <particle.Icon size={particle.size} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
          >
            Hi, I&apos;m <span className="text-primary">Ayush Gangwar</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-8 md:h-12 mb-8"
          >
            <span className="text-xl md:text-3xl text-muted-foreground font-medium">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-muted-foreground text-lg mb-10"
          >
            Full Stack & Backend Developer | AI/ML Engineer | Software Engineering Intern @ GlobalLogic.
            Building scalable solutions and innovative AI applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-all flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a
              href="/resume.png"
              download="Ayush_Gangwar_Resume.png"
              className="px-8 py-3 bg-surface text-foreground rounded-full font-medium hover:bg-white/5 transition-all flex items-center gap-2 border border-white/10 hover:border-white/20"
            >
              Download Resume <Download size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
