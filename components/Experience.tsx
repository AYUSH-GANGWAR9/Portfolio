"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    company: "EY",
    subtitle: "Medical Device Park, Sector 28, YEIDA",
    role: "Full-Stack Developer Intern",
    period: "Jul 2026 - Sep 2026",
    color: "#FFE600",
    gradient: "from-yellow-500/20 to-amber-500/20",
    description: [
      "Built the MDP Allotment Management Dashboard, a Flask and MySQL full-stack app (7 tables) that replaced manual plot-allotment tracking, with schema-driven dynamic forms and automatic stage-to-stage progression.",
      "Implemented role-based access control with Werkzeug password hashing, CSRF protection, login lockout, session timeout and a searchable audit log of every create/update/delete/login action.",
      "Added CSV/Excel bulk import with per-row validation, an interactive SVG park map, stage-wise PDF/Excel reports, and scheduled email reminders (Brevo API) with run history.",
      "Deployed on Render (Gunicorn) with MySQL on Railway; wrote technical reports and setup guides for the park."
    ],
    metrics: [
      { label: "DB Tables", value: "7" },
      { label: "Access Control", value: "RBAC" }
    ]
  },
  {
    company: "GlobalLogic",
    subtitle: "A Hitachi Group Company | Noida, UP",
    role: "Software Engineering Intern",
    period: "May 2025 - Jul 2025",
    color: "#00D9FF",
    gradient: "from-cyan-500/20 to-blue-500/20",
    description: [
      "Built a RAG pipeline using Python, LangChain, FAISS and OpenAI GPT-4, boosting response accuracy by 40% and keeping query latency under 800ms.",
      "Rewrote data ingestion with Python asyncio and a Redis caching layer (85% cache hit rate), cutting ingestion time by 35%.",
      "Containerized the app with Docker multi-stage builds (60% smaller images) and set up a GitHub Actions CI/CD pipeline for automated testing and deployment."
    ],
    metrics: [
      { label: "Accuracy", value: "+40%" },
      { label: "Ingestion Time", value: "-35%" },
      { label: "Image Size", value: "-60%" }
    ]
  },
  {
    company: "Fast Conversion",
    subtitle: "Marketing Solutions | Remote",
    role: "Web Development Intern",
    period: "Mar 2024 - Jun 2024",
    color: "#6B8E23",
    gradient: "from-green-500/20 to-emerald-500/20",
    description: [
      "Made 20+ responsive components with React.js, Redux and Tailwind CSS, improving Core Web Vitals (LCP, FID, CLS) by 30% and lifting mobile engagement by 25%.",
      "Designed 15+ RESTful endpoints with Node.js and Express.js, and streamlined MongoDB queries using compound indexes and aggregation pipelines.",
      "Profiled and fixed API bottlenecks with query optimization and caching, reducing P95 latency from 480ms to 290ms."
    ],
    metrics: [
      { label: "Web Vitals", value: "+30%" },
      { label: "API Latency", value: "-40%" }
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

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-[#6B8E23]/20">
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
