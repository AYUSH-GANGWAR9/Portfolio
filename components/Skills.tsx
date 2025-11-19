"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: ["C++", "C", "Python", "Golang", "C#", "JavaScript"],
    color: "from-indigo-400 to-blue-300"
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap", "Figma"],
    color: "from-blue-400 to-cyan-300"
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "Redis"],
    color: "from-green-400 to-emerald-300"
  },
  {
    category: "ML / AI",
    items: ["TensorFlow", "PyTorch", "Computer Vision", "Feature Engineering"],
    color: "from-purple-400 to-pink-300"
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "CI/CD", "Git", "Linux", "Postman","Kubernetes"],
    color: "from-orange-400 to-red-300"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable applications and intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, rotateX: 5, rotateY: 5, scale: 1.02 }}
              className="bg-surface/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all group preserve-3d transition-transform-3d"
            >
              <div className={`h-1 w-12 rounded-full bg-linear-to-r ${skill.color} mb-6`} />
              
              <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors">
                {skill.category}
              </h3>
              
              <div className="space-y-3">
                {skill.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                      className="h-1.5 w-16 bg-background rounded-full overflow-hidden"
                    >
                      <div className={`h-full w-full bg-linear-to-r ${skill.color} opacity-50`} />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
