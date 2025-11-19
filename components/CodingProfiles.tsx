"use client";

import { motion } from "framer-motion";
import { Github, Code, Terminal, Cpu } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/AYUSH-GANGWAR9/",
    color: "hover:text-white",
    bg: "hover:bg-gray-800"
  },
  {
    name: "LeetCode",
    icon: Code,
    url: "https://leetcode.com/u/AyushGangwar91/",
    color: "hover:text-yellow-500",
    bg: "hover:bg-yellow-500/10"
  },
  {
    name: "CodeChef",
    icon: Terminal,
    url: "https://www.codechef.com/users/ayush_gang_war/",
    color: "hover:text-brown-500",
    bg: "hover:bg-orange-900/20"
  },
  {
    name: "CodeForces",
    icon: Cpu,
    url: "https://codeforces.com/profile/gangwarayush911",
    color: "hover:text-blue-500",
    bg: "hover:bg-blue-500/10"
  }
];

export default function CodingProfiles() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Coding <span className="text-primary">Profiles</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* GitHub Activity Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface/30 p-6 rounded-2xl border border-white/5"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Github className="text-primary" /> GitHub Activity
            </h3>
            <div className="aspect-2/1 w-full bg-background/50 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden">
              {/* Placeholder for GitHub Graph */}
              <p className="text-muted-foreground text-sm">GitHub Contribution Graph Placeholder</p>
              {/* In a real app, embed <img src="https://ghchart.rshah.org/username" /> */}
            </div>
          </motion.div>

          {/* Profiles Grid */}
          <div className="grid grid-cols-2 gap-4">
            {profiles.map((profile, index) => (
              <motion.a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-surface/30 border border-white/5 transition-all duration-300 ${profile.color} ${profile.bg} group`}
              >
                <profile.icon size={32} className="mb-3 text-muted-foreground group-hover:scale-110 transition-transform" />
                <span className="font-medium text-muted-foreground group-hover:text-inherit transition-colors">{profile.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
