import { Code2, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <Code2 className="text-primary w-5 h-5" />
            </div>
            <span className="text-lg font-bold font-heading">
              Ayush<span className="text-primary">.dev</span>
            </span>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/AYUSH-GANGWAR9/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/911ayushgangwar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>&copy; 2025 Designed & Developed by Ayush Gangwar.</p>
            <p className="mt-1 text-xs opacity-60">Built with Next.js, Tailwind CSS & Framer Motion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
