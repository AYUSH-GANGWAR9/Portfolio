"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Full Stack", "ML/AI", "Data Science", "High Performance", "IoT"];

const projects = [
  {
    title: "Food Delivery Web App",
    role: "Full Stack Developer",
    category: "Full Stack",
    description: "A scalable food delivery platform serving 500+ users. Integrated Stripe for payments and Dockerized for deployment.",
    tech: ["React", "Node.js", "Stripe", "Docker"],
    metrics: "Performance optimized by 35%",
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Academic Insight Portal",
    role: "Full Stack Developer",
    category: "Full Stack",
    description: "An analytics portal for academic performance tracking. Used by 300+ users with secure JWT authentication.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    metrics: "Efficiency increased by 50%",
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Faster R-CNN Object Detection",
    role: "AI Engineer",
    category: "ML/AI",
    description: "High-performance object detection model beating state-of-the-art benchmarks.",
    tech: ["PyTorch", "Python", "Computer Vision"],
    metrics: "F1: 0.893 | S-Measure: 0.859",
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Hybrid Signature Verification (Extended)",
    role: "AI Researcher",
    category: "ML/AI",
    description: "CNN + HOG signature recognition model. Significant improvement over classic signature verification methods.",
    tech: ["TensorFlow", "OpenCV", "Python"],
    metrics: "98% Accuracy",
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Fake Colorized Image Detection",
    role: "ML Engineer",
    category: "ML/AI",
    description: "Detection system for identifying artificially colorized images using CDM.",
    tech: ["Python", "Scikit-learn", "Image Processing"],
    metrics: "Robust against GANs",
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "from-yellow-500 to-amber-500"
  },
  {
    title: "Automated Accident Response",
    role: "IoT Developer",
    category: "IoT",
    description: "IoT-based accident detection & emergency response automation system.",
    tech: ["JavaScript", "System Automation", "Sensors"],
    metrics: "Forked & modified",
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "House Price Prediction",
    role: "Data Scientist",
    category: "Data Science",
    description: "Regression-based ML model to estimate housing prices from dataset trends.",
    tech: ["Python", "Scikit-learn", "Linear Regression"],
    metrics: "High Accuracy Estimation",
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "from-teal-500 to-green-500"
  },
  {
    title: "Malicious Website Detection",
    role: "Security Engineer",
    category: "ML/AI",
    description: "ML-based system detecting malicious URLs using pattern recognition.",
    tech: ["Python", "Jupyter", "Feature Engineering"],
    metrics: "Enhanced Pattern Recognition",
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "from-red-500 to-rose-500"
  },
  {
    title: "Parallel PageRank",
    role: "HPC Engineer",
    category: "High Performance",
    description: "High-performance implementation of PageRank using MPI and OpenMP.",
    tech: ["C++", "MPI", "OpenMP"],
    metrics: "⚙️ High Performance Computing",
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "from-slate-500 to-gray-500"
  },
  {
    title: "Credit Card Fraud Detection",
    role: "Data Scientist",
    category: "Data Science",
    description: "Fraud detection on 285K+ transactions using SMOTE and tuning.",
    tech: ["Python", "Scikit-Learn", "XGBoost"],
    metrics: "AUC = 0.987 | Precision@k = 0.92",
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Sales Forecasting",
    role: "Data Scientist",
    category: "Data Science",
    description: "Time-series prediction using LSTM and Prophet models.",
    tech: ["TensorFlow", "Prophet", "Python"],
    metrics: "RMSE reduced by 17%",
    links: { github: "https://github.com/AYUSH-GANGWAR9?tab=repositories", demo: "#" },
    color: "from-amber-500 to-orange-500"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of technical depth, from full-stack web apps to advanced AI research.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeCategory === category
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                    : "bg-surface text-muted-foreground border-white/5 hover:border-primary/30 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-background rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2 h-full flex flex-col"
              >
                {/* Gradient Header */}
                <div className={`h-2 w-full bg-linear-to-r ${project.color}`} />
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-surface text-muted-foreground border border-white/5">
                        {project.role}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <span className="text-xs font-bold text-foreground flex items-center gap-1">
                      <Server size={12} className="text-primary" />
                      {project.metrics}
                    </span>
                    
                    <div className="flex gap-3">
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} /> View Repo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
