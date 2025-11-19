"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Linkedin, Github, MessageSquare, User } from "lucide-react";

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            Get In <span className="text-[#6B8E23]">Touch</span>
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto text-lg">
            Open to opportunities, collaborations, or just a friendly chat about tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0E0E15] rounded-2xl p-8 border-2 border-transparent hover:border-[#6B8E23]/50 transition-all duration-300 overflow-hidden h-full">
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: 'blur(40px)' }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-[#6B8E23]">Contact Information</h3>
                
                <div className="space-y-6 mb-8">
                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0E0E15]/50 border border-[#6B8E23]/20 hover:border-[#6B8E23]/50 transition-all">
                    <div className="p-3 bg-[#6B8E23]/10 rounded-lg">
                      <Mail size={20} className="text-[#6B8E23]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#A0A0A0] mb-1">Email Me</p>
                      <a 
                        href="mailto:ayushgang9114@gmail.com" 
                        className="text-[#F0F0F0] hover:text-[#6B8E23] transition-colors font-medium"
                      >
                        ayushgang9114@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0E0E15]/50 border border-[#6B8E23]/20 hover:border-[#6B8E23]/50 transition-all">
                    <div className="p-3 bg-[#6B8E23]/10 rounded-lg">
                      <MapPin size={20} className="text-[#6B8E23]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#A0A0A0] mb-1">Location</p>
                      <p className="text-[#F0F0F0] font-medium">India 🇮🇳 (Open to relocation)</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-[#6B8E23]/20">
                  <p className="text-sm text-[#A0A0A0] mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.linkedin.com/in/911ayushgangwar/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 p-4 bg-[#0E0E15]/50 rounded-xl hover:bg-[#6B8E23]/20 transition-all border border-[#6B8E23]/20 hover:border-[#6B8E23]/50 flex items-center justify-center gap-2 group/link"
                    >
                      <Linkedin size={20} className="text-[#6B8E23] group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm text-[#A0A0A0] group-hover/link:text-[#F0F0F0]">LinkedIn</span>
                    </a>
                    <a 
                      href="https://github.com/AYUSH-GANGWAR9/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 p-4 bg-[#0E0E15]/50 rounded-xl hover:bg-[#6B8E23]/20 transition-all border border-[#6B8E23]/20 hover:border-[#6B8E23]/50 flex items-center justify-center gap-2 group/link"
                    >
                      <Github size={20} className="text-[#6B8E23] group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm text-[#A0A0A0] group-hover/link:text-[#F0F0F0]">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{
                  background: 'radial-gradient(circle at top right, #6B8E23, transparent)',
                }}
              />

              {/* Neon glow border */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: '0 0 30px rgba(107,142,35,0.4)',
                }}
              />
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0E0E15] rounded-2xl p-8 border-2 border-transparent hover:border-[#00D9FF]/50 transition-all duration-300 overflow-hidden h-full">
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: 'blur(40px)' }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-[#00D9FF]">Send a Message</h3>
                
                <form 
                  action="mailto:ayushgang9114@gmail.com" 
                  method="post" 
                  encType="text/plain"
                  className="space-y-4"
                >
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm text-[#A0A0A0] mb-2">Your Name</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B8E23]" />
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-[#0E0E15]/50 border border-[#6B8E23]/20 rounded-xl text-[#F0F0F0] placeholder-[#A0A0A0] focus:border-[#6B8E23] focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm text-[#A0A0A0] mb-2">Your Email</label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B8E23]" />
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-[#0E0E15]/50 border border-[#6B8E23]/20 rounded-xl text-[#F0F0F0] placeholder-[#A0A0A0] focus:border-[#6B8E23] focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-sm text-[#A0A0A0] mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-[#6B8E23]" />
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 bg-[#0E0E15]/50 border border-[#6B8E23]/20 rounded-xl text-[#F0F0F0] placeholder-[#A0A0A0] focus:border-[#6B8E23] focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/20 transition-all resize-none"
                        placeholder="Your message here..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#6B8E23] text-white rounded-xl font-medium hover:bg-[#8FBF3F] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(107,142,35,0.3)] hover:shadow-[0_0_40px_rgba(107,142,35,0.5)] hover:scale-105 duration-300"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              </div>

              {/* Corner accent */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{
                  background: 'radial-gradient(circle at top right, #00D9FF, transparent)',
                }}
              />

              {/* Neon glow border */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: '0 0 30px rgba(0,217,255,0.4)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
