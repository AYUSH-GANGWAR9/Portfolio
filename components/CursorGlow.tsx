"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function CursorGlow() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 150, damping: 25, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 150, damping: 25, mass: 0.4 });

  useEffect(() => {
    // only on devices with a real pointer (not touch)
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || reduce) return;
    const frame = requestAnimationFrame(() => setEnabled(true));
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", move);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[5] w-[400px] h-[400px] rounded-full"
      style={{
        x: sx,
        y: sy,
        background: "radial-gradient(circle, rgba(107,142,35,0.16) 0%, rgba(0,217,255,0.07) 40%, transparent 70%)",
      }}
    />
  );
}
