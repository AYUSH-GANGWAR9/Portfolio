"use client";

import { useEffect, useMemo, useRef } from "react";
import type { IconType } from "react-icons";

type Item = { name: string; Icon: IconType; color: string };

export default function TechSphere({ items }: { items: Item[] }) {
  const box = useRef<HTMLDivElement>(null);
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const pointer = useRef({ x: 0, y: 0, active: false });

  const points = useMemo(() => {
    const n = items.length;
    return items.map((_, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      return [Math.cos(theta) * Math.sin(phi), Math.sin(theta) * Math.sin(phi), Math.cos(phi)];
    });
  }, [items]);

  useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1;
    let raf = 0;
    let ay = 0;
    let ax = 0.3;
    let vy = 0.004 * calm;
    let vx = 0;
    const tick = () => {
      const el = box.current;
      if (el) {
        const p = pointer.current;
        const ty = p.active ? p.x * 0.03 : 0.004 * calm;
        const tx = p.active ? -p.y * 0.03 : 0;
        vy += (ty - vy) * 0.06;
        vx += (tx - vx) * 0.06;
        ay += vy;
        ax = Math.max(-1.2, Math.min(1.2, ax + vx));
        const R = el.clientWidth * 0.36;
        const [cy, sy, cx, sx] = [Math.cos(ay), Math.sin(ay), Math.cos(ax), Math.sin(ax)];
        points.forEach(([x, y, z], i) => {
          const n = nodes.current[i];
          if (!n) return;
          const x1 = x * cy + z * sy;
          const z1 = -x * sy + z * cy;
          const y2 = y * cx - z1 * sx;
          const z2 = y * sx + z1 * cx;
          const d = (z2 + 1) / 2; // 0 back .. 1 front
          const s = 0.55 + d * 0.65;
          n.style.transform = `translate(-50%,-50%) translate3d(${x1 * R}px, ${y2 * R}px, 0) scale(${s})`;
          n.style.opacity = String(0.2 + d * 0.8);
          n.style.zIndex = String(Math.round(d * 100));
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [points]);

  const onMove = (e: React.PointerEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    pointer.current = {
      x: ((e.clientX - r.left) / r.width) * 2 - 1,
      y: ((e.clientY - r.top) / r.height) * 2 - 1,
      active: true,
    };
  };

  return (
    <div
      ref={box}
      onPointerMove={onMove}
      onPointerLeave={() => (pointer.current.active = false)}
      className="relative mx-auto w-full max-w-[600px] aspect-square select-none"
    >
      <div className="absolute inset-[6%] rounded-full border border-[#6B8E23]/25 shadow-[0_0_80px_rgba(107,142,35,0.15)_inset]" />
      <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(0,217,255,0.08),transparent_65%)]" />
      {items.map((t, i) => (
        <div
          key={t.name}
          ref={(el) => {
            nodes.current[i] = el;
          }}
          className="absolute left-1/2 top-1/2 flex flex-col items-center gap-1 will-change-transform"
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6B8E23]/30 bg-[#0E0E15]/80 backdrop-blur-sm"
            style={{ boxShadow: `0 0 18px ${t.color}35` }}
          >
            <t.Icon size={26} style={{ color: t.color }} />
          </div>
          <span className="text-[10px] font-medium whitespace-nowrap" style={{ color: t.color }}>
            {t.name}
          </span>
        </div>
      ))}
    </div>
  );
}
