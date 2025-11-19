"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    company: "GlobalLogic | A Hitachi group company",
    role: "Software Engineering Intern",
    period: "May 2024 - July 2025",
    description: [
      "Developed a RAG pipeline using LangChain and OpenAI, improving information retrieval accuracy by 40%.",
      "Optimized backend performance with Node.js and Redis, reducing latency by 35%.",
      "Collaborated with cross-functional teams to deliver scalable solutions."
    ]
  },
  {
    company: "Fast Conversion Marketing Solutions",
    role: "Full Stack Intern",
    period: "March 2024 - June 2024",
    description: [
      "Developed responsive web interfaces using React and Tailwind CSS.",
      "Boosted user engagement by 15% through UI/UX improvements.",
      "Reduced bounce rate by 25% with analytics-driven design changes."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-white/10 last:border-l-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(107,142,35,0.5)]" />
              
              <div className="bg-surface/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
