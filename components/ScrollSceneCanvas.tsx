"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = ["#6B8E23", "#00D9FF", "#9D4EDD", "#FF6B35", "#F7DF1E", "#61DAFB"];
const KINDS = ["ico", "oct", "torus", "box", "knot", "tet"] as const;
const SPAN = 30; // world units the camera travels over the whole page

const SHAPES = Array.from({ length: 18 }, (_, i) => ({
  kind: KINDS[i % KINDS.length],
  color: COLORS[(i * 5) % COLORS.length],
  side: i % 2 === 0 ? -1 : 1,
  t: 0.05 + (i / 17) * 0.9,
  spread: 0.7 + (i % 3) * 0.15,
  z: -1 - (i % 4) * 1.4,
  size: 0.55 + ((i * 7) % 5) * 0.14,
  spin: 0.15 + (i % 4) * 0.07,
}));

const state = { progress: 0, vel: 0, calm: 1 };

function Rig() {
  const last = useRef(0);
  useEffect(() => {
    state.calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1;
  }, []);
  useFrame(({ camera }) => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const y = window.scrollY;
    state.progress = Math.min(1, Math.max(0, y / max));
    state.vel = THREE.MathUtils.lerp(state.vel, Math.abs(y - last.current) / 40, 0.1);
    last.current = y;
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -state.progress * SPAN, 0.12);
  });
  return null;
}

function Shape({ s }: { s: (typeof SHAPES)[number] }) {
  const ref = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const x = s.side * viewport.width * 0.5 * s.spread * 0.9;
  useFrame((_, dt) => {
    const m = ref.current;
    if (!m) return;
    const k = (s.spin * state.calm + state.vel * 1.2) * dt;
    m.rotation.x += k;
    m.rotation.y += k * 1.3;
  });
  return (
    <mesh ref={ref} position={[x, -s.t * SPAN, s.z]} scale={s.size}>
      {s.kind === "ico" && <icosahedronGeometry args={[1, 1]} />}
      {s.kind === "oct" && <octahedronGeometry args={[1]} />}
      {s.kind === "torus" && <torusGeometry args={[1, 0.3, 12, 32]} />}
      {s.kind === "box" && <boxGeometry args={[1.4, 1.4, 1.4]} />}
      {s.kind === "knot" && <torusKnotGeometry args={[0.8, 0.22, 90, 12]} />}
      {s.kind === "tet" && <tetrahedronGeometry args={[1.2]} />}
      <meshBasicMaterial color={s.color} wireframe transparent opacity={0.3} depthWrite={false} />
    </mesh>
  );
}

export default function ScrollSceneCanvas() {
  return (
    <div className="fixed inset-0 -z-[5] pointer-events-none" aria-hidden>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.25]} gl={{ antialias: true, alpha: true }}>
        <Rig />
        {SHAPES.map((s, i) => (
          <Shape key={i} s={s} />
        ))}
      </Canvas>
    </div>
  );
}
