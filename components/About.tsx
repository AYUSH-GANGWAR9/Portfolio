"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Server, Brain, Rocket, Award, BrainCircuit } from "lucide-react";
import { title } from "process";

const features = [
  {
    icon: Code2,
    title: "Full Stack",
    description: "Building end-to-end solutions with modern stacks",
    color: "#00D9FF"
  },
  {
    icon: Server,
    title: "Backend Developer",
    description: "Scalable architectures & API optimization",
    color: "#6B8E23"
  },
  {
    icon: Brain,
    title: "AI/ML Engineer",
    description: "Integrating intelligent models into apps",
    color: "#9D4EDD"
  },
  {
    icon: BrainCircuit,
    title: "Data Engineer",
    description: "Data processing and analysis",
    color: "#FF6B35"
  },
];

const stats = [
  { label: "CGPA", value: "8.01", icon: Award },
  { label: "Projects", value: "11+", icon: Code2 },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B8E23]/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            About <span className="text-[#6B8E23]">Me</span>
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto text-lg">
            Passionate about building impactful solutions
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="w-full lg:w-1/3 group relative"
          >
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0E0E15] rounded-2xl p-4 border-2 border-transparent hover:border-[#6B8E23]/50 transition-all duration-300 overflow-hidden">
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: 'blur(40px)' }}
              />
              
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Ayush Gangwar"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stats Overlay */}
              <div className="relative z-10 mt-4 grid grid-cols-2 gap-2">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-[#0E0E15]/80 backdrop-blur-sm rounded-lg p-3 border border-[#6B8E23]/20 text-center">
                    <stat.icon size={16} className="text-[#6B8E23] mx-auto mb-1" />
                    <p className="text-lg font-bold text-[#F0F0F0]">{stat.value}</p>
                    <p className="text-xs text-[#A0A0A0]">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative z-10 mt-4 bg-[#0E0E15]/80 backdrop-blur-sm p-3 rounded-lg border border-[#6B8E23]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#6B8E23] animate-pulse" />
                  <div>
                    <p className="text-xs text-[#A0A0A0]">Current Status</p>
                    <p className="font-bold text-sm text-[#F0F0F0]">Open to Work</p>
                  </div>
                </div>
              </motion.div>

              {/* Corner accent */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{
                  background: 'radial-gradient(circle at top right, #6B8E23, transparent)',
                }}
              />

              {/* Neon glow border */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: '0 0 30px rgba(107,142,35,0.4)',
                }}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Bio Text */}
              <div className="space-y-4 text-[#A0A0A0] text-lg leading-relaxed">
                <p>
                  I am a <strong className="text-[#F0F0F0]">B.Tech CSE student</strong> at IIIT Vadodara International Campus Diu with a CGPA of 8.01.
                  My journey involves deep diving into Full Stack Development, Computer Vision, and AI.
                </p>
                <p>
                  Previously, I worked as a <strong className="text-[#F0F0F0]">Software Engineering Intern at GlobalLogic</strong>, 
                  where I contributed to an enterprise RAG pipeline, improving accuracy by 40% and reducing latency by 35%.
                </p>
                <p>
                  I value <strong className="text-[#F0F0F0]">performance, scalability, and clean UI</strong>. 
                  I don&apos;t just write code; I build impactful solutions that solve real-world problems.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0E0E15] rounded-xl p-4 border border-[#6B8E23]/20 hover:border-[#6B8E23]/50 transition-all duration-300 overflow-hidden">
                      {/* Subtle glow */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at center, ${feature.color}10, transparent)`,
                        }}
                      />
                      
                      <div className="relative z-10 flex items-start gap-3">
                        <div 
                          className="p-2 rounded-lg" 
                          style={{ backgroundColor: `${feature.color}20` }}
                        >
                          <feature.icon size={20} style={{ color: feature.color }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#F0F0F0] mb-1">{feature.title}</h3>
                          <p className="text-sm text-[#A0A0A0]">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
