"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

type Shape = "oct" | "box" | "tet";

const ORBITERS: { color: string; shape: Shape; r: number; speed: number; phase: number }[] = [
  { color: "#00D9FF", shape: "oct", r: 2.6, speed: 0.5, phase: 0 },
  { color: "#9D4EDD", shape: "box", r: 2.9, speed: -0.4, phase: 1.2 },
  { color: "#FF6B35", shape: "tet", r: 2.4, speed: 0.6, phase: 2.4 },
  { color: "#F7DF1E", shape: "oct", r: 3.1, speed: -0.35, phase: 3.6 },
  { color: "#6B8E23", shape: "box", r: 2.7, speed: 0.45, phase: 4.8 },
  { color: "#61DAFB", shape: "tet", r: 3.0, speed: -0.5, phase: 6.0 },
];

function Orbiter({ color, shape, r, speed, phase, calm }: (typeof ORBITERS)[number] & { calm: React.MutableRefObject<number> }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const m = ref.current;
    if (!m) return;
    const t = clock.elapsedTime * speed * calm.current + phase;
    m.position.set(Math.cos(t) * r, Math.sin(t * 1.3) * 0.9, Math.sin(t) * r);
    m.rotation.x += 0.012 * calm.current;
    m.rotation.y += 0.016 * calm.current;
  });
  return (
    <mesh ref={ref} scale={0.28}>
      {shape === "oct" && <octahedronGeometry />}
      {shape === "box" && <boxGeometry />}
      {shape === "tet" && <tetrahedronGeometry />}
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} metalness={0.5} roughness={0.25} />
    </mesh>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  const knot = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const calm = useRef(1);
  const { viewport } = useThree();
  const wide = viewport.width > 9;

  useEffect(() => {
    calm.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1;
    const move = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useFrame(() => {
    const c = calm.current;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.current.x * 0.6, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.current.y * 0.35, 0.05);
    }
    if (knot.current) {
      knot.current.rotation.x += 0.004 * c;
      knot.current.rotation.y += 0.006 * c;
    }
    if (shell.current) {
      shell.current.rotation.y -= 0.003 * c;
      shell.current.rotation.z += 0.002 * c;
    }
    if (ringA.current) ringA.current.rotation.z += 0.004 * c;
    if (ringB.current) ringB.current.rotation.z -= 0.003 * c;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={60} color="#00D9FF" />
      <pointLight position={[-5, -3, 3]} intensity={50} color="#9D4EDD" />
      <directionalLight position={[0, 4, 6]} intensity={1.2} />
      <Stars radius={60} depth={40} count={1200} factor={3} fade speed={0.6} />

      <group position={wide ? [viewport.width * 0.24, 0, 0] : [0, 1.8, 0]} scale={wide ? 1 : 0.55}>
        <group ref={group}>
          <mesh ref={knot}>
            <torusKnotGeometry args={[1, 0.3, 220, 32]} />
            <MeshDistortMaterial color="#6B8E23" emissive="#1f2f08" distort={0.22} speed={1.6} roughness={0.2} metalness={0.7} />
          </mesh>
          <mesh ref={shell}>
            <icosahedronGeometry args={[1.9, 1]} />
            <meshBasicMaterial color="#00D9FF" wireframe transparent opacity={0.22} />
          </mesh>
          <mesh ref={ringA} rotation={[Math.PI / 2.4, 0.3, 0]}>
            <torusGeometry args={[2.35, 0.012, 16, 140]} />
            <meshBasicMaterial color="#9D4EDD" />
          </mesh>
          <mesh ref={ringB} rotation={[Math.PI / 3, -0.5, 0.4]}>
            <torusGeometry args={[2.9, 0.01, 16, 160]} />
            <meshBasicMaterial color="#6B8E23" />
          </mesh>
          {ORBITERS.map((o, i) => (
            <Orbiter key={i} {...o} calm={calm} />
          ))}
        </group>
      </group>
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <Scene />
    </Canvas>
  );
}
