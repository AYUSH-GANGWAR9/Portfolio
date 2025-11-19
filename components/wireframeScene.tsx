"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

interface WireframeShapeProps {
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  color: string;
  rotationSpeed: [number, number, number];
  scale: number;
}

function WireframeShape({ position, geometry, color, rotationSpeed, scale }: WireframeShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x += rotationSpeed[0];
    meshRef.current.rotation.y += rotationSpeed[1];
    meshRef.current.rotation.z += rotationSpeed[2];
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <primitive object={geometry} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}

function Scene({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  const geometries = useMemo(() => [
    { geo: new THREE.BoxGeometry(1, 1, 1), color: "#6B8E23", pos: [-3, 0, -2] as [number, number, number], scale: 1.2, speed: [0.001, 0.002, 0.001] as [number, number, number] },
    { geo: new THREE.OctahedronGeometry(0.8), color: "#00D9FF", pos: [3, 1, -3] as [number, number, number], scale: 1, speed: [0.002, 0.001, 0.002] as [number, number, number] },
    { geo: new THREE.TetrahedronGeometry(0.9), color: "#9D4EDD", pos: [0, -1, -4] as [number, number, number], scale: 1.1, speed: [0.001, 0.003, 0.001] as [number, number, number] },
    { geo: new THREE.IcosahedronGeometry(0.7), color: "#6B8E23", pos: [-2, 2, -5] as [number, number, number], scale: 0.9, speed: [0.002, 0.001, 0.003] as [number, number, number] },
    { geo: new THREE.TorusGeometry(0.6, 0.2, 16, 32), color: "#00D9FF", pos: [2, -2, -3] as [number, number, number], scale: 1, speed: [0.003, 0.002, 0.001] as [number, number, number] },
    { geo: new THREE.ConeGeometry(0.5, 1.2, 8), color: "#9D4EDD", pos: [-1, -2, -2] as [number, number, number], scale: 1, speed: [0.001, 0.002, 0.002] as [number, number, number] },
    { geo: new THREE.SphereGeometry(0.5, 16, 16), color: "#6B8E23", pos: [1, 2, -6] as [number, number, number], scale: 1.3, speed: [0.002, 0.003, 0.001] as [number, number, number] },
  ], []);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.x = THREE.MathUtils.lerp(cameraRef.current.position.x, mouseX * 0.5, 0.05);
      cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, -mouseY * 0.5, 0.05);
      cameraRef.current.lookAt(0, 0, -3);
    }
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 5]} fov={50} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />

      {geometries.map((item, index) => (
        <WireframeShape
          key={index}
          position={item.pos}
          geometry={item.geo}
          color={item.color}
          rotationSpeed={item.speed}
          scale={item.scale}
        />
      ))}
    </>
  );
}

export default function WireframeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
    });
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="absolute inset-0 -z-10">
      <Canvas gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
        <Scene mouseX={mousePos.x} mouseY={mousePos.y} />
      </Canvas>
    </div>
  );
}
