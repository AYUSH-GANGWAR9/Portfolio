"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import WireframeScene with no SSR
const WireframeScene = dynamic(() => import("./wireframeScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-[#0E0E15] via-[#1a1a2e] to-[#0E0E15]" />,
});

const roles = [
  "Full Stack Developer",
  "Backend Developer",
  "AI & ML Engineer",
  "Summer Intern @ GlobalLogic | A Hitachi group company",
  "CSE Student @ IIITVICD",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Wireframe Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-[#0E0E15] via-[#1a1a2e] to-[#0E0E15]" />}>
        <WireframeScene />
      </Suspense>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0E0E15]/50 to-[#0E0E15] pointer-events-none" />
      
      {/* Radial glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#6B8E23]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="px-5 py-2 rounded-full bg-[#6B8E23]/10 text-[#6B8E23] border border-[#6B8E23]/30 text-sm font-medium backdrop-blur-sm inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6B8E23] animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold font-heading mb-6 tracking-tight"
            style={{
              background: "linear-gradient(to bottom, #F0F0F0, #A0A0A0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ayush Gangwar
          </motion.h1>

          {/* Typewriter Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-12 md:h-16 mb-6"
          >
            <span className="text-2xl md:text-4xl font-medium text-[#00D9FF]">
              {displayText}
              <span className="animate-pulse text-[#6B8E23]">|</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-[#A0A0A0] text-lg md:text-xl mb-12 leading-relaxed"
          >
            Building scalable, intelligent systems with modern tech stacks.
            Transforming ideas into high-performance applications.
            <br />
            Summer Intern @ GlobalLogic | A Hitachi group company
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-[#6B8E23] text-white rounded-full font-medium text-lg hover:bg-[#8FBF3F] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(107,142,35,0.3)] hover:shadow-[0_0_40px_rgba(107,142,35,0.5)] hover:scale-105 duration-300"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.png"
              download="Ayush_Gangwar_Resume.png"
              className="group px-8 py-4 bg-transparent text-[#F0F0F0] rounded-full font-medium text-lg border-2 border-[#6B8E23]/50 hover:border-[#6B8E23] hover:bg-[#6B8E23]/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:scale-105 duration-300"
            >
              Download Resume
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-[#6B8E23]/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-[#6B8E23] rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
