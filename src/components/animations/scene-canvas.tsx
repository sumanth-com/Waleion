"use client";

import { Suspense, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { cn } from "@/lib/utils";

type SceneCanvasProps = {
  className?: string;
  children: ReactNode;
  fallback?: ReactNode;
};

/**
 * Lightweight R3F canvas wrapper. Use only where 3D adds clear product value.
 * Keep scenes progressive and respectful of performance budgets.
 */
export function SceneCanvas({
  className,
  children,
  fallback = null,
}: SceneCanvasProps) {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <Suspense fallback={fallback}>
        <Canvas
          dpr={[1, 1.75]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          camera={{ position: [0, 0, 5], fov: 45 }}
        >
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
}
