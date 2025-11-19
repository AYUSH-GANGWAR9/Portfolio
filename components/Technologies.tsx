"use client";

import { motion } from "framer-motion";
import { 
  SiCplusplus, SiC, SiJavascript, SiGo, SiReact, SiNextdotjs, 
  SiTypescript, SiNodedotjs, SiExpress, SiPython, SiTensorflow, 
  SiDocker, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiGit, 
  SiGithubactions, SiFigma, SiPostman, SiAmazon, SiKeras, SiOpencv,
  SiScikitlearn, SiHtml5, SiCss3, SiPandas, SiNumpy
} from "react-icons/si";

const technologies = [
  { name: "C++", Icon: SiCplusplus, color: "#00599C", isPriority: false },
  { name: "C", Icon: SiC, color: "#A8B9CC", isPriority: false },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", isPriority: true },
  { name: "Go", Icon: SiGo, color: "#00ADD8", isPriority: false },
  { name: "React", Icon: SiReact, color: "#61DAFB", isPriority: true },
  { name: "Next.js", Icon: SiNextdotjs, color: "#F0F0F0", isPriority: true },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", isPriority: true },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933", isPriority: true },
  { name: "Express.js", Icon: SiExpress, color: "#F0F0F0", isPriority: true },
  { name: "Python", Icon: SiPython, color: "#3776AB", isPriority: true },
  { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00", isPriority: true },
  { name: "Keras", Icon: SiKeras, color: "#D00000", isPriority: false },
  { name: "OpenCV", Icon: SiOpencv, color: "#5C3EE8", isPriority: false },
  { name: "Scikit-learn", Icon: SiScikitlearn, color: "#F7931E", isPriority: false },
  { name: "XGBoost", Icon: SiPython, color: "#337AB7", isPriority: false },
  { name: "Pandas", Icon: SiPandas, color: "#150458", isPriority: false },
  { name: "NumPy", Icon: SiNumpy, color: "#013243", isPriority: false },
  { name: "Docker", Icon: SiDocker, color: "#2496ED", isPriority: true },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248", isPriority: true },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1", isPriority: false },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1", isPriority: false },
  { name: "Redis", Icon: SiRedis, color: "#DC382D", isPriority: false },
  { name: "Git", Icon: SiGit, color: "#F05032", isPriority: true },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF", isPriority: false },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26", isPriority: false },
  { name: "CSS3", Icon: SiCss3, color: "#1572B6", isPriority: false },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E", isPriority: false },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37", isPriority: false },
  { name: "AWS", Icon: SiAmazon, color: "#FF9900", isPriority: false },
];

export default function Technologies() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Diagonal gradient background with vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9D4EDD]/10 via-transparent to-[#00D9FF]/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0E0E15_100%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            What I Work With — <span className="text-[#6B8E23]">Technologies</span>
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto text-lg">
            Modern tools and frameworks powering scalable solutions
          </p>
        </motion.div>

        {/* Circular bubble grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.15, y: -10 }}
              className="group relative flex flex-col items-center"
            >
              {/* Circular bubble */}
              <div 
                className={`relative w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#0E0E15] border-2 transition-all duration-300 cursor-pointer ${
                  tech.isPriority 
                    ? 'border-[#6B8E23]/40 group-hover:border-[#6B8E23]' 
                    : 'border-[#6B8E23]/20 group-hover:border-[#6B8E23]'
                }`}
                style={{
                  boxShadow: tech.isPriority 
                    ? `0 0 15px ${tech.color}30, 0 0 30px rgba(107,142,35,0.2)` 
                    : `0 0 0 rgba(107,142,35,0), 0 0 30px rgba(107,142,35,0)`,
                }}
              >
                {/* Continuous subtle glow for priority technologies */}
                {tech.isPriority && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        `0 0 15px ${tech.color}30, 0 0 25px rgba(107,142,35,0.2)`,
                        `0 0 25px ${tech.color}50, 0 0 35px rgba(107,142,35,0.3)`,
                        `0 0 15px ${tech.color}30, 0 0 25px rgba(107,142,35,0.2)`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                
                {/* Pulsing glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    boxShadow: [
                      `0 0 20px ${tech.color}40`,
                      `0 0 40px ${tech.color}60`,
                      `0 0 20px ${tech.color}40`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Icon */}
                <tech.Icon 
                  className="relative z-10 group-hover:scale-110 transition-transform" 
                  size={40}
                  style={{ color: tech.color }}
                />

                {/* Rotating ring on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed opacity-0 group-hover:opacity-50"
                  style={{ borderColor: tech.color }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Tech name */}
              <p 
                className="mt-4 text-sm font-medium text-[#A0A0A0] group-hover:text-[#F0F0F0] transition-colors text-center"
                style={{ color: tech.color }}
              >
                {tech.name}
              </p>

              {/* Particle effect on hover */}
              <motion.div
                className="absolute top-0 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: tech.color }}
                animate={{
                  y: [-10, -30],
                  opacity: [1, 0],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[#6B8E23] to-transparent max-w-3xl mx-auto"
        />
      </div>
    </section>
  );
}
