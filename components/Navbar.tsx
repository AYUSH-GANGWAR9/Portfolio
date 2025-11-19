"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Code2 className="text-primary w-6 h-6" />
          </div>
          <span className="text-xl font-bold font-heading tracking-tight">
            Ayush<span className="text-primary">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                activeSection === link.name.toLowerCase()
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              onClick={() => setActiveSection(link.name.toLowerCase())}
            >
              {link.name}
              {activeSection === link.name.toLowerCase() && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
          >
            Let&apos;s Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                <a href="https://github.com/AYUSH-GANGWAR9/" target="_blank" rel="noopener noreferrer" className="p-2 bg-surface rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/911ayushgangwar/" target="_blank" rel="noopener noreferrer" className="p-2 bg-surface rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:ayushgang9114@gmail.com" className="p-2 bg-surface rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
