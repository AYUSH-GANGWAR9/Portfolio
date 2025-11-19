"use client";

import { motion } from "framer-motion";
import { Github, Code, Terminal, Cpu } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/AYUSH-GANGWAR9/",
    color: "#F0F0F0",
    gradient: "from-gray-400 to-gray-600",
    glow: "shadow-[0_0_30px_rgba(240,240,240,0.3)]"
  },
  {
    name: "LeetCode",
    icon: Code,
    url: "https://leetcode.com/u/AyushGangwar91/",
    color: "#FFA116",
    gradient: "from-yellow-400 to-orange-500",
    glow: "shadow-[0_0_30px_rgba(255,161,22,0.3)]"
  },
  {
    name: "CodeChef",
    icon: Terminal,
    url: "https://www.codechef.com/users/ayush_gang_war/",
    color: "#6B8E23",
    gradient: "from-green-400 to-green-600",
    glow: "shadow-[0_0_30px_rgba(107,142,35,0.3)]"
  },
  {
    name: "CodeForces",
    icon: Cpu,
    url: "https://codeforces.com/profile/gangwarayush911",
    color: "#00D9FF",
    gradient: "from-cyan-400 to-blue-500",
    glow: "shadow-[0_0_30px_rgba(0,217,255,0.3)]"
  }
];

export default function CodingProfiles() {
  return (
    <section className="py-24 relative overflow-hidden">
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
            Where I <span className="text-[#6B8E23]">Contribute</span>
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto text-lg">
            Active on competitive programming platforms and open source
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-gradient-to-br from-[#1a1a2e] to-[#0E0E15] rounded-2xl p-8 border-2 border-transparent hover:border-[${profile.color}]/50 transition-all duration-300 ${profile.glow} hover:shadow-[0_0_50px_rgba(107,142,35,0.4)]`}
            >
              {/* Neon glow border effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${profile.color}20, transparent)`,
                  filter: 'blur(20px)',
                }}
              />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon with rotation animation */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`mb-6 p-6 rounded-2xl bg-gradient-to-br ${profile.gradient} bg-opacity-10`}
                  style={{ backgroundColor: `${profile.color}15` }}
                >
                  <profile.icon 
                    size={48} 
                    style={{ color: profile.color }}
                    className="drop-shadow-[0_0_10px_rgba(107,142,35,0.5)]"
                  />
                </motion.div>
                
                <h3 
                  className="text-2xl font-bold mb-2 group-hover:scale-110 transition-transform"
                  style={{ color: profile.color }}
                >
                  {profile.name}
                </h3>
                
                <p className="text-[#A0A0A0] text-sm group-hover:text-[#F0F0F0] transition-colors">
                  View Profile →
                </p>
              </div>

              {/* Corner accent */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 opacity-20 group-hover:opacity-40 transition-opacity"
                style={{
                  background: `radial-gradient(circle at top right, ${profile.color}, transparent)`,
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
