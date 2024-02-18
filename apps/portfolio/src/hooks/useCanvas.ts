import { Viewport } from "@/lib/viewport";
import { useEffect, useRef } from "react";

interface useCanvasProps {
  draw: (viewport: Viewport, frameNumber: number) => void;
  fps?: number;
}

export const useCanvas = ({ draw, fps = 30 }: useCanvasProps) => {
  const requestRef = useRef<number>(0);
  const frameRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const viewportRef = useRef<Viewport | null>(null);
  const lastRenderTimeRef = useRef<number>(0);

  const animate = () => {
    const now = performance.now();
    const time = now - lastRenderTimeRef.current;
    const frameDuration = 1000 / fps;

    if (time < frameDuration) {
      requestRef.current = requestAnimationFrame(animate);
      return;
    }

    const actualFps = 1000 / time;

    if (actualFps < fps - 1) {
      console.log(`Actual FPS: ${actualFps}, Target FPS: ${fps}`);
    }

    frameRef.current += 1;
    viewportRef.current!.clear();
    draw(viewportRef.current!, frameRef.current);
    lastRenderTimeRef.current = now;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      viewportRef.current = new Viewport(canvasRef);
      const context = canvas.getContext("2d");
      if (context) {
        requestRef.current = requestAnimationFrame(animate);

        return () => {
          cancelAnimationFrame(requestRef.current);
          viewportRef.current?.dispose();
          viewportRef.current = null;
        };
      }
    }
  }, [draw]);

  return canvasRef;
};
