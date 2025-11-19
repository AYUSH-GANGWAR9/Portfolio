"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 3,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
        });
      }
    };

    const drawGeometricPattern = () => {
      ctx.strokeStyle = "rgba(107, 142, 35, 0.03)";
      ctx.lineWidth = 1;

      const gridSize = 100;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Diagonal accent lines
      ctx.strokeStyle = "rgba(107, 142, 35, 0.05)";
      ctx.lineWidth = 2;
      for (let i = -canvas.height; i < canvas.width; i += 200) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + canvas.height, canvas.height);
        ctx.stroke();
      }
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        const opacity = (3 - particle.z) / 3;
        const size = particle.size * (3 - particle.z);
        
        ctx.fillStyle = `rgba(107, 142, 35, ${opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect for larger particles
        if (particle.z < 1) {
          ctx.fillStyle = `rgba(107, 142, 35, ${opacity * 0.2})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx * (3 - particle.z);
        particle.y += particle.vy * (3 - particle.z);

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    const connectParticles = () => {
      ctx.strokeStyle = "rgba(107, 142, 35, 0.1)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `rgba(107, 142, 35, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(30, 30, 30, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGeometricPattern();
      updateParticles();
      connectParticles();
      drawParticles();

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, #1E1E1E, #0a0a0a)" }}
    />
  );
}
