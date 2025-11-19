"use client";

import { motion } from "framer-motion";
import { Users, Zap, Brain, Activity } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Users Served",
    color: "text-blue-400"
  },
  {
    icon: Brain,
    value: "40%",
    label: "AI Accuracy Boost",
    color: "text-purple-400"
  },
  {
    icon: Zap,
    value: "35%",
    label: "Latency Reduction",
    color: "text-yellow-400"
  },
  {
    icon: Activity,
    value: "300+",
    label: "Active Users",
    color: "text-green-400"
  }
];

export default function Achievements() {
  return (
    <section className="py-12 bg-primary/5 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="flex flex-col items-center text-center"
            >
              <div className={`mb-3 p-3 rounded-full bg-background border border-white/10 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
