"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Server, Brain, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Full Stack",
    description: "Building end-to-end solutions with modern stacks",
  },
  {
    icon: Server,
    title: "Backend Developer",
    description: "Scalable architectures & API optimization",
  },
  {
    icon: Brain,
    title: "AI/ML Engineer",
    description: "Integrating intelligent models into apps",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-surface/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Image/Card Side */}
          <div className="w-full lg:w-1/3">
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative aspect-3/4 rounded-2xl overflow-hidden bg-linear-to-br from-primary/20 to-background border border-white/10 shadow-2xl"
            >
              <Image
                src="/profile.jpg"
                alt="Ayush Gangwar"
                fill
                className="object-cover"
              />
              
              {/* Floating Card */}
              <motion.div
                initial={{ x: 20, y: 20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 right-6 bg-surface/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div>
                    <p className="text-xs text-muted-foreground">Current Status</p>
                    <p className="font-bold text-sm">Open to Work</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                I am a <strong className="text-foreground">B.Tech CSE student</strong> at IIIT Vadodara International Campus Diu with a CGPA of 8.01.
                My journey involves deep diving into Full Stack Development, Computer Vision, and AI.
              </p>
              <p>
                Previously, I worked as a <strong className="text-foreground">Software Engineering Intern at GlobalLogic</strong>, 
                where I contributed to an enterprise RAG pipeline, improving accuracy by 40% and reducing latency by 35%.
              </p>
              <p>
                I value <strong className="text-foreground">performance, scalability, and clean UI</strong>. 
                I don&apos;t just write code; I build impactful solutions that solve real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
