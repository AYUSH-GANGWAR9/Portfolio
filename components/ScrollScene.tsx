"use client";

import dynamic from "next/dynamic";

const ScrollSceneCanvas = dynamic(() => import("@/components/ScrollSceneCanvas"), { ssr: false });

export default function ScrollScene() {
  return <ScrollSceneCanvas />;
}
