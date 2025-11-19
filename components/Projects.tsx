"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, TrendingUp, Code2 } from "lucide-react";

const categories = ["All", "Full Stack", "ML/AI", "Data Science", "High Performance", "IoT"];

const projects = [
  {
    title: "Food Delivery Web App",
    role: "Full Stack Developer",
    category: "Full Stack",
    description: "A scalable food delivery platform serving 500+ users. Integrated Stripe for payments and Dockerized for deployment.",
    tech: ["React", "Node.js", "Stripe", "Docker"],
    metrics: { label: "Performance", value: "+35%" },
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "#FF6B35",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Academic Insight Portal",
    role: "Full Stack Developer",
    category: "Full Stack",
    description: "An analytics portal for academic performance tracking. Used by 300+ users with secure JWT authentication.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    metrics: { label: "Efficiency", value: "+50%" },
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "#00D9FF",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Faster R-CNN Object Detection",
    role: "AI Engineer",
    category: "ML/AI",
    description: "High-performance object detection model beating state-of-the-art benchmarks.",
    tech: ["PyTorch", "Python", "Computer Vision"],
    metrics: { label: "F1 Score", value: "0.893" },
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "#9D4EDD",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Hybrid Signature Verification (Extended)",
    role: "AI Engineer",
    category: "ML/AI",
    description: "CNN + HOG signature recognition model. Significant improvement over classic signature verification methods.",
    tech: ["TensorFlow", "OpenCV", "Python"],
    metrics: { label: "Accuracy", value: "98%" },
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "#6B8E23",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Fake Colorized Image Detection",
    role: "ML Engineer",
    category: "ML/AI",
    description: "Detection system for identifying artificially colorized images using CDM.",
    tech: ["Python", "Scikit-learn", "Image Processing"],
    metrics: { label: "Robustness", value: "High" },
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "#F7DF1E",
    gradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    title: "Automated Accident Response",
    role: "Full Stack Developer",
    category: "IoT",
    description: "IoT-based accident detection & emergency response automation system.",
    tech: ["JavaScript", "System Automation", "Sensors"],
    metrics: { label: "Response Time", value: "Fast" },
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "#4169E1",
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "House Price Prediction",
    role: "Data Engineer",
    category: "Data Science",
    description: "Regression-based ML model to estimate housing prices from dataset trends.",
    tech: ["Python", "Scikit-learn", "Linear Regression"],
    metrics: { label: "Accuracy", value: "High" },
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "#47A248",
    gradient: "from-teal-500/20 to-green-500/20"
  },
  {
    title: "Malicious Website Detection",
    role: "ML Engineer",
    category: "ML/AI",
    description: "ML-based system detecting malicious URLs using pattern recognition.",
    tech: ["Python", "Jupyter", "Feature Engineering"],
    metrics: { label: "Detection", value: "Enhanced" },
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "#DC382D",
    gradient: "from-red-500/20 to-rose-500/20"
  },
  {
    title: "Parallel PageRank",
    role: "HPC Engineer",
    category: "High Performance",
    description: "High-performance implementation of PageRank using MPI and OpenMP.",
    tech: ["C++", "MPI", "OpenMP"],
    metrics: { label: "Performance", value: "HPC" },
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "#A0A0A0",
    gradient: "from-slate-500/20 to-gray-500/20"
  },
  {
    title: "Credit Card Fraud Detection",
    role: "Data Engineer",
    category: "Data Science",
    description: "Fraud detection on 285K+ transactions using SMOTE and tuning.",
    tech: ["Python", "Scikit-Learn", "XGBoost"],
    metrics: { label: "AUC", value: "0.987" },
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "#9D4EDD",
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  {
    title: "Sales Forecasting",
    role: "Data Engineer",
    category: "Data Science",
    description: "Time-series prediction using LSTM and Prophet models.",
    tech: ["TensorFlow", "Prophet", "Python"],
    metrics: { label: "RMSE", value: "-17%" },
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "#FF9900",
    gradient: "from-amber-500/20 to-orange-500/20"
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D9FF]/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Featured <span className="text-[#6B8E23]">Projects</span>
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto text-lg">
            Building innovative solutions across multiple domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#6B8E23] text-white shadow-[0_0_20px_rgba(107,142,35,0.4)]"
                  : "bg-[#1a1a2e] text-[#A0A0A0] hover:bg-[#6B8E23]/20 hover:text-[#F0F0F0] border border-[#6B8E23]/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full flex flex-col"
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0E0E15] rounded-2xl p-6 border-2 border-transparent hover:border-[${project.color}]/50 transition-all duration-300 overflow-hidden flex-1 flex flex-col">
                  {/* Gradient overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ filter: 'blur(40px)' }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Code2 size={18} style={{ color: project.color }} />
                        <span className="text-xs text-[#A0A0A0]">{project.role}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: project.color }}>
                        {project.title}
                      </h3>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#0E0E15]/50 text-xs rounded-full text-[#A0A0A0] border border-[#6B8E23]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Metrics & Links */}
                    <div className="pt-4 border-t border-[#6B8E23]/20">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp size={14} style={{ color: project.color }} />
                          <div>
                            <p className="text-xs text-[#A0A0A0]">{project.metrics.label}</p>
                            <p className="text-sm font-bold" style={{ color: project.color }}>
                              {project.metrics.value}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#0E0E15]/50 hover:bg-[#6B8E23]/20 text-[#A0A0A0] hover:text-[#F0F0F0] rounded-lg text-sm transition-all border border-[#6B8E23]/20 hover:border-[#6B8E23]/50"
                        >
                          <Github size={16} />
                          Code
                        </a>
                        <a
                          href={project.links.demo}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#6B8E23]/10 hover:bg-[#6B8E23]/20 text-[#6B8E23] hover:text-[#8FBF3F] rounded-lg text-sm transition-all border border-[#6B8E23]/30 hover:border-[#6B8E23]/50"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at top right, ${project.color}, transparent)`,
                    }}
                  />

                  {/* Neon glow border */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: `0 0 30px ${project.color}40`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
