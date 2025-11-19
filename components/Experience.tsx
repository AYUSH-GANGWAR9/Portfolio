"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    company: "GlobalLogic",
    subtitle: "A Hitachi Group Company",
    role: "Software Engineering Intern",
    period: "May 2024 - July 2025",
    color: "#00D9FF",
    gradient: "from-cyan-500/20 to-blue-500/20",
    description: [
      "Developed a RAG pipeline using LangChain and OpenAI, improving information retrieval accuracy by 40%.",
      "Optimized backend performance with Node.js and Redis, reducing latency by 35%.",
      "Collaborated with cross-functional teams to deliver scalable solutions."
    ],
    metrics: [
      { label: "Accuracy", value: "+40%" },
      { label: "Latency", value: "-35%" }
    ]
  },
  {
    company: "Fast Conversion",
    subtitle: "Marketing Solutions",
    role: "Full Stack Intern",
    period: "March 2024 - June 2024",
    color: "#6B8E23",
    gradient: "from-green-500/20 to-emerald-500/20",
    description: [
      "Developed responsive web interfaces using React and Tailwind CSS.",
      "Boosted user engagement by 15% through UI/UX improvements.",
      "Reduced bounce rate by 25% with analytics-driven design changes."
    ],
    metrics: [
      { label: "Engagement", value: "+15%" },
      { label: "Bounce Rate", value: "-25%" }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9D4EDD]/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Work <span className="text-[#6B8E23]">Experience</span>
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto text-lg">
            Building impactful solutions across diverse tech stacks
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative bg-gradient-to-br from-[#1a1a2e] to-[#0E0E15] rounded-2xl p-8 border-2 border-transparent hover:border-[${exp.color}]/50 transition-all duration-300 overflow-hidden`}>
                {/* Gradient overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{ filter: 'blur(40px)' }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={20} style={{ color: exp.color }} />
                        <h3 className="text-2xl font-bold" style={{ color: exp.color }}>
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-[#A0A0A0] text-sm mb-1">{exp.subtitle}</p>
                      <p className="text-[#F0F0F0] font-medium text-lg">{exp.role}</p>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-sm text-[#A0A0A0] mb-6 bg-[#0E0E15]/50 px-4 py-2 rounded-full w-fit">
                    <Calendar size={14} />
                    {exp.period}
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#A0A0A0] text-sm">
                        <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: exp.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  <div className="flex gap-4 pt-4 border-t border-[#6B8E23]/20">
                    {exp.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <TrendingUp size={16} style={{ color: exp.color }} />
                        <div>
                          <p className="text-xs text-[#A0A0A0]">{metric.label}</p>
                          <p className="text-lg font-bold" style={{ color: exp.color }}>
                            {metric.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at top right, ${exp.color}, transparent)`,
                  }}
                />

                {/* Neon glow border */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px ${exp.color}40`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
