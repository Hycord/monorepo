import { Viewport } from "@/lib/viewport";
import { mean, sum } from "@hycord/math";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export const useViewport = (
  draw: (viewport: Viewport) => void,
  update: (deltaTime: number, view: Viewport) => void,
  updateInterval: number, // Interval for update loop in milliseconds
  {
    setAvgFPS,
    setFPS,
    setFrame,
    setAvgGameFPS,

    setGameFPS,
  }: {
    setFPS?: Dispatch<SetStateAction<number>>;
    setAvgFPS?: Dispatch<SetStateAction<number>>;
    setGameFPS?: Dispatch<SetStateAction<number>>;
    setAvgGameFPS?: Dispatch<SetStateAction<number>>;
    setFrame?: Dispatch<SetStateAction<number>>;
  } = {}
): React.MutableRefObject<HTMLCanvasElement | null> => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const animRef = useRef<number>(0);
  const animationLastRef = useRef<number>(performance.now());
  const animationListRef = useRef<number[]>([]);

  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null); // Reference to the setInterval ID
  const updateLastRef = useRef<number>(performance.now());
  const updateListRef = useRef<number[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const viewport = new Viewport(canvasRef);

    // Animation loop using requestAnimationFrame
    const animate = (timestamp: number) => {
      if (!canvas || !ctx) {
        animRef.current = requestAnimationFrame(animate);
        return;
      }
      const now = timestamp;
      const elapsed = now - animationLastRef.current;

      const actualFPS = 1000 / elapsed;
      animationListRef.current.push(actualFPS);
      if (animationListRef.current.length > 25)
        animationListRef.current.shift();

      animationLastRef.current = now;

      if (setFPS) setFPS(actualFPS);
      if (setAvgFPS)
        setAvgFPS(
          animationListRef.current.reduce((total, value) => total + value, 0) /
            animationListRef.current.length
        );
      viewport.update();
      draw(viewport);

      animRef.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    animRef.current = requestAnimationFrame(animate);

    updateIntervalRef.current = setInterval(() => {
      if (setFrame)
        setFrame((f) => {
          return f + 1;
        });

      const now = performance.now();
      let elapsed = now - updateLastRef.current;
      const targetFrameTime = 1000 / updateInterval;

      const deltaTime = Math.min(elapsed, targetFrameTime);

      const actualFPS = 1000 / elapsed;
      updateListRef.current.push(actualFPS);
      if (updateListRef.current.length > Math.min(updateInterval + 1, 25))
        updateListRef.current.shift();

      updateLastRef.current = now;

      if (setGameFPS) setGameFPS(actualFPS);
      if (setAvgGameFPS) setAvgGameFPS(mean(updateListRef.current));
      update(deltaTime, viewport);
    }, updateInterval);

    return () => {
      cancelAnimationFrame(animRef.current);
      if (updateIntervalRef.current) clearInterval(updateIntervalRef.current);
      viewport.dispose();
    };
  }, [draw, update, updateInterval]);

  return canvasRef;
};
