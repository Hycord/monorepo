"use client";
import { useCanvas } from "@/hooks/useCanvas";
import { useViewport } from "@/hooks/useViewport";
import { Boid, BoidEdgeType } from "@/lib/boid";
import { Point } from "@/lib/geometry";
import { cn } from "@/lib/utils";
import { Viewport } from "@/lib/viewport";
import {
  Vector2D,
  mean,
  random,
  randomInt,
  standardDeviation,
} from "@hycord/math";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Slider } from "../ui/slider";
import { useKeyboardControls } from "@/contexts/KeyboardControls";
import useKeyDown from "@/hooks/useKeyDown";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  DicesIcon,
  KeyboardIcon,
  PlusIcon,
  SettingsIcon,
  Trash,
  TrashIcon,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { useWindowSize } from "@/hooks/useWindowSize";
import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { DigitClassificationPoint } from "@/lib/digit.classification";

export interface BoidCanvasProps
  extends React.HTMLAttributes<HTMLCanvasElement> {
  clockSpeed?: number;
  setFPS?: Dispatch<SetStateAction<number>>;
  setAvgFPS?: Dispatch<SetStateAction<number>>;
  setGameFPS?: Dispatch<SetStateAction<number>>;
  setAvgGameFPS?: Dispatch<SetStateAction<number>>;
  setFrame?: Dispatch<SetStateAction<number>>;
  frame?: number;
  scale?: number;
}

export function DigitClassificationCanvas({
  className,
  scale: defScale = 1,

  clockSpeed = 60,
  frame = 0,
  setFrame,
  setFPS,
  setAvgFPS,
  setGameFPS,
  setAvgGameFPS,
  ...params
}: BoidCanvasProps) {
  const [width, height] = useWindowSize();
  const keys = useKeyboardControls();

  const [scale, setScale] = useState(defScale);

  const [pixels, setPixels] = useState<DigitClassificationPoint[]>(
    new Array(784)
  );

  const query = useQuery({
    queryFn: async ({}) => {},
    queryKey: ["digit-classification"],
  });

  const draw = useMemo(() => {
    return (view: Viewport) => {
      for (let i = 0; i < pixels.length; i++) {
        if (!pixels[i]) continue;
        pixels[i]!.draw(view);
      }
    };
  }, [pixels]);

  const update = useMemo(() => (deltaTime: number, view: Viewport) => {}, []);

  const canvasRef = useViewport(
    draw,
    update,
    // startup,
    1000 / clockSpeed,
    {
      setFrame,
      setFPS,
      setAvgFPS,
      setGameFPS,
      setAvgGameFPS,
    }
  );

  const startup = () => {
    // if (canvasRef.current) {
    //   canvasRef.current.width = canvasRef.current.offsetWidth;
    //   canvasRef.current.height = canvasRef.current.offsetHeight;
    // }
    setScale(canvasRef.current?.offsetWidth!);
    const p: DigitClassificationPoint[] = [];
    for (let i = 0; i < pixels.length; i++) {
      p[i] = new DigitClassificationPoint(
        {
          x: (i % 28) * scale,
          y: Math.floor(i / 28) * i * 2 * scale,
        },
        scale
      );
    }
    console.log("start");
    setPixels(p);
  };

  useEffect(() => startup, [canvasRef.current, width, height]);

  return (
    <div className={cn(className, "flex")}>
      <canvas
        ref={canvasRef}
        width={28}
        height={28}
        {...params}
        className={cn(
          "object-contain w-full h-full border-primary border-2 rounded-md"
        )}
      ></canvas>
    </div>
  );
}
