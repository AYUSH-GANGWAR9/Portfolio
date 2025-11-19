"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return null; // or a loading skeleton/placeholder
  }

  return (
    <section id="contact" className="py-20 bg-surface/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities, collaborations, or just a friendly chat about tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-background p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email Me</p>
                    <a href="mailto:ayushgang9114@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      ayushgang9114@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-foreground">India 🇮🇳 (Open to relocation)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/911ayushgangwar/" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface rounded-lg hover:bg-primary hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/AYUSH-GANGWAR9/" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface rounded-lg hover:bg-primary hover:text-white transition-all">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form 
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const subject = formData.get('subject');
                const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`;
                window.location.href = `mailto:ayushgang9114@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(body)}`;
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
