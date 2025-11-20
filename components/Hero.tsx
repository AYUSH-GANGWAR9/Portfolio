"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Code2, Zap } from "lucide-react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate particles only on client
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" suppressHydrationWarning>
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-[#0E0E15]">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #6B8E2320 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, #00D9FF15 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, #9D4EDD10 0%, transparent 70%)
            `,
          }}
          transition={{ type: "spring", damping: 30 }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              background: `radial-gradient(circle, ${
                particle.id % 3 === 0 ? "#6B8E23" : particle.id % 3 === 1 ? "#00D9FF" : "#9D4EDD"
              }80, transparent)`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(#6B8E2320 1px, transparent 1px),
            linear-gradient(90deg, #6B8E2320 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, #6B8E2330, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #00D9FF20, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 text-[#6B8E23]"
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Code2 size={40} className="opacity-20" />
            </motion.div>
            <motion.div
              className="absolute top-40 right-20 text-[#00D9FF]"
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Sparkles size={35} className="opacity-20" />
            </motion.div>
            <motion.div
              className="absolute bottom-40 left-20 text-[#9D4EDD]"
              animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            >
              <Zap size={38} className="opacity-20" />
            </motion.div>
          </div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.span 
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6B8E23]/20 to-[#00D9FF]/20 text-[#6B8E23] border border-[#6B8E23]/40 text-sm font-medium backdrop-blur-md inline-flex items-center gap-2 shadow-[0_0_30px_rgba(107,142,35,0.3)]"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(107,142,35,0.5)" }}
            >
              <motion.span 
                className="w-2.5 h-2.5 rounded-full bg-[#6B8E23]"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Available for work
            </motion.span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-7xl md:text-9xl font-bold font-heading mb-6 tracking-tight relative"
          >
            <motion.span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #F0F0F0 0%, #6B8E23 50%, #00D9FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Ayush Gangwar
            </motion.span>
            
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-16 h-16 border-2 border-[#6B8E23]/30 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-12 h-12 border-2 border-[#00D9FF]/30 rounded-lg"
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.h1>

          {/* Typewriter Subheading with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-16 md:h-20 mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D9FF]/10 to-transparent blur-xl" />
            <span className="relative text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] bg-clip-text text-transparent">
              {displayText}
              <motion.span 
                className="text-[#6B8E23]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* Tagline with Icon */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl text-[#A0A0A0] text-xl md:text-2xl mb-12 leading-relaxed"
          >
            <span className="text-[#F0F0F0] font-medium">Building scalable, intelligent systems</span> with modern tech stacks.
            <br />
            Transforming ideas into <span className="text-[#6B8E23]">high-performance applications</span>.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <motion.a
              href="#projects"
              className="group relative px-10 py-5 bg-gradient-to-r from-[#6B8E23] to-[#8FBF3F] text-white rounded-full font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#8FBF3F] to-[#6B8E23]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center justify-center gap-2">
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 shadow-[0_0_40px_rgba(107,142,35,0.4)] group-hover:shadow-[0_0_60px_rgba(107,142,35,0.6)] transition-shadow" />
            </motion.a>

            <motion.a
              href="/resume.png"
              download="Ayush_Gangwar_Resume.png"
              className="group relative px-10 py-5 bg-transparent text-[#F0F0F0] rounded-full font-semibold text-lg border-2 border-[#6B8E23]/50 hover:border-[#6B8E23] backdrop-blur-sm overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-[#6B8E23]/10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center justify-center gap-2">
                Download Resume
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
