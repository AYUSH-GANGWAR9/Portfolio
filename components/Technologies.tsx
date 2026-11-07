"use client";

import { motion } from "framer-motion";
import TechSphere from "@/components/TechSphere";
import { 
  SiCplusplus, SiC, SiJavascript, SiGo, SiReact, SiNextdotjs, 
  SiTypescript, SiNodedotjs, SiExpress, SiPython, SiTensorflow, 
  SiDocker, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiGit, 
  SiGithubactions, SiFigma, SiPostman, SiAmazon, SiKeras, SiOpencv,
  SiScikitlearn, SiHtml5, SiCss3, SiPandas, SiNumpy,
  SiFlask, SiFastapi, SiRedux, SiTailwindcss, SiLinux, SiRailway, SiRender
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
  { name: "Flask", Icon: SiFlask, color: "#F0F0F0", isPriority: false },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688", isPriority: false },
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
  { name: "Redux", Icon: SiRedux, color: "#764ABC", isPriority: false },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", isPriority: false },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26", isPriority: false },
  { name: "CSS3", Icon: SiCss3, color: "#1572B6", isPriority: false },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E", isPriority: false },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37", isPriority: false },
  { name: "AWS", Icon: SiAmazon, color: "#FF9900", isPriority: false },
  { name: "Linux", Icon: SiLinux, color: "#FCC624", isPriority: false },
  { name: "Render", Icon: SiRender, color: "#46E3B7", isPriority: false },
  { name: "Railway", Icon: SiRailway, color: "#F0F0F0", isPriority: false },
];

export default function Technologies() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Diagonal gradient background with vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9D4EDD]/10 via-transparent to-[#00D9FF]/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0E0E15_100%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: -40 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 900, transformOrigin: "50% 100%" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            What I Work With — <span className="text-[#6B8E23]">Technologies</span>
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto text-lg">
            Modern tools and frameworks powering scalable solutions
          </p>
        </motion.div>

        <TechSphere items={technologies} />

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
