"use client";
import { useCanvas } from "@/hooks/useCanvas";
import { useViewport } from "@/hooks/useViewport";
import { Boid, BoidEdgeType } from "@/lib/boid";
import { Point } from "@/lib/geometry";
import { cn } from "@/lib/utils";
import { Viewport } from "@/lib/viewport";
import { Vector2D, mean, random, standardDeviation } from "@hycord/math";
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

export interface BoidCanvasProps
  extends React.HTMLAttributes<HTMLCanvasElement> {
  // width?: number;
  // height?: number;
  count?: number;
  clockSpeed?: number;
  setFPS?: Dispatch<SetStateAction<number>>;
  setAvgFPS?: Dispatch<SetStateAction<number>>;
  setGameFPS?: Dispatch<SetStateAction<number>>;
  setAvgGameFPS?: Dispatch<SetStateAction<number>>;
  setFrame?: Dispatch<SetStateAction<number>>;
  frame?: number;
}

export function BoidCanvas({
  // width = 512,
  // height = 512,
  count = 400,
  clockSpeed = 60,
  frame = 0,
  setFrame,
  setFPS,
  setAvgFPS,
  setGameFPS,
  setAvgGameFPS,
  className,

  ...params
}: BoidCanvasProps) {
  const [boids, setBoids] = useState<Boid[]>([]);

  const [width, height] = useWindowSize();

  const keys = useKeyboardControls();

  const randomize = () => boids.forEach((b) => b.randomize());
  const def = () => {
    setCohesion(0.5);
    setAlignment(0.2);
    setSeparation(0.8);
    randomize();
  };
  const randomizeSimulation = () => {
    setCohesion(Number(random(0.1, 1).toFixed(1)));
    setAlignment(Number(random(0.1, 1).toFixed(1)));
    setSeparation(Number(random(0.1, 1).toFixed(1)));
    randomize();
  };

  const [cohesion, setCohesion] = useState(0.5);
  const [alignment, setAlignment] = useState(0.2);
  const [separation, setSeparation] = useState(0.8);

  const [path, setPaths] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [keybindsOpen, setKeybindsOpen] = useState(false);

  useEffect(() => {
    if (["r"].every((k) => keys.has(k))) randomize();
    if (["shift", "r"].every((k) => keys.has(k))) randomizeSimulation();
    if (["d"].every((k) => keys.has(k))) def();
    if (keys.has("s")) setSettingsOpen((s) => !s);
    if (keys.has("k")) setKeybindsOpen((k) => !k);
    if (keys.has("p")) setPaths((p) => !p);
  }, [boids, keys]);

  const draw = useMemo(() => {
    return (view: Viewport) => {
      boids.forEach((b, i) => {
        b.draw(view, boids, { renderPath: path });
      });
      // view.setZoom(.5)
    };
  }, [boids, path]);

  const update = useMemo(
    () => (deltaTime: number, view: Viewport) => {
      if (width && width < 768) return setBoids([]);
      for (const boid of boids) {
        boid.update(boids, deltaTime, {
          cohesionStrength: cohesion,
          separationStrength: separation,
          alignmentStrength: alignment,
          width: view.width,
          height: view.height,
        });
      }
    },
    [cohesion, separation, alignment, boids, width]
  );

  const canvasRef = useViewport(
    draw,
    update,
    // startup,
    Math.floor(1000 / clockSpeed),
    {
      setAvgFPS,
      setFPS,
      setFrame,

      setGameFPS,
      setAvgGameFPS,
    }
  );

  const startup = useDebounce(() => {
    if (width && width < 768) {
      setBoids([]);
      return;
    }
    const boids = [];

    if (canvasRef.current) {
      for (let i = 0; i < canvasRef.current.offsetWidth / 3; i++) {
        boids.push(
          new Boid({
            maxX: canvasRef.current.offsetWidth,
            maxY: canvasRef.current.offsetHeight,
          })
        );
      }

      canvasRef.current.width = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
    }

    console.log(boids.length);

    setBoids(boids);
  }, 10);

  useEffect(() => startup, [count, canvasRef.current, width, height]);

  return (
    <div className={cn(className, "relative")}>
      <canvas
        ref={canvasRef}
        // width={width}
        // height={height}
        {...params}
        className={cn("w-full h-full border-primary border-2 rounded-md")}
      ></canvas>

      <div className="absolute bottom-4 left-4 w-[50%] md:w-[95%] md:left-[50%] md:transform md:-translate-x-[50%] border-2 border-border glass-1 rounded-md p-2 flex flex-col md:flex-row gap-2 items-center justify-evenly">
        <div className="flex flex-col gap-2 w-full items-center justify-start">
          <p className="whitespace-nowrap w-full flex items-center justify-start md:justify-center">
            Cohesion
          </p>
          <Slider
            min={1}
            max={2}
            step={0.1}
            value={[cohesion + 1]}
            onValueChange={([v]) => setCohesion(v! - 1)}
          />
        </div>
        <div className="flex flex-col gap-2 w-full items-center justify-start">
          <p className="whitespace-nowrap w-full flex items-center justify-start md:justify-center">
            Alignment
          </p>
          <Slider
            min={1}
            max={2}
            step={0.1}
            value={[alignment + 1]}
            onValueChange={([v]) => setAlignment(v! - 1)}
          />
        </div>
        <div className="flex flex-col gap-2 w-full items-center justify-start">
          <p className="whitespace-nowrap w-full flex items-center justify-start md:justify-center">
            Separation
          </p>
          <Slider
            min={1}
            max={2}
            step={0.1}
            value={[separation + 1]}
            onValueChange={([v]) => setSeparation(v! - 1)}
          />
        </div>
      </div>

      <div className="absolute top-4 right-4">
        {/* <CardContent> */}
        <Collapsible
          open={settingsOpen}
          onOpenChange={setSettingsOpen}
          className="flex flex-col gap-2"
        >
          <CollapsibleTrigger className="justify-end flex flex-row items-center w-full text-primary">
            <SettingsIcon />
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-end justify-start gap-2">
            <div className="flex flex-col gap-2 glass-1 rounded-md p-2 border-border border-2">
              <div className="flex flex-col gap-2 w-full">
                <Button
                  size={"sm"}
                  onClick={() => {
                    randomize();
                    if (window.innerWidth < 700) setSettingsOpen(false);
                  }}
                >
                  Randomize Locations
                </Button>
                <Button
                  size={"sm"}
                  onClick={() => {
                    randomizeSimulation();
                  }}
                >
                  Randomize Values
                </Button>
                <Button size={"sm"} onClick={() => setPaths((p) => !p)}>
                  Toggle Paths
                </Button>
                <Button size={"sm"} variant={"destructive"} onClick={def}>
                  Reset Values
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        {/* </CardContent> */}
      </div>
      <div className="absolute top-4 left-4">
        {/* <CardContent> */}
        <Collapsible
          open={keybindsOpen}
          onOpenChange={setKeybindsOpen}
          className="hidden md:flex flex-col gap-2"
        >
          <CollapsibleTrigger className="justify-start flex flex-row items-center w-full text-primary">
            <KeyboardIcon />
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-end justify-end gap-2">
            <div className="flex flex-col items-start gap-2 justify-end p-2 rounded-md border-2 border-border glass-2">
              {[
                {
                  keys: ["⇧", "R"],
                  description: "Randomize Values",
                },
                {
                  keys: ["R"],
                  description: "Randomize Locations",
                },
                {
                  keys: ["D"],
                  description: "Reset Values",
                },
                {
                  keys: ["K"],
                  description: "Toggle Keybinds Menu",
                },
                {
                  keys: ["S"],
                  description: "Toggle Settings Menu",
                },
                {
                  keys: ["P"],
                  description: "Toggle Paths",
                },
              ]
                .sort((a, b) => a.keys.length - b.keys.length)
                .map(
                  ({
                    keys,
                    description,
                  }: {
                    keys: string[];
                    description: string;
                  }) => {
                    return (
                      <div
                        key={description}
                        className="flex flex-row items-center gap-2"
                      >
                        <div className="flex gap-2 flex-row items-center justify-center pr-2 border-r-2 border-primary">
                          {keys.map((k, i) => (
                            <div key={k}>
                              <span className="key">{k}</span>
                              {i < keys.length - 1 ? (
                                <PlusIcon className="inline-block w-4 h-4 mb-1" />
                              ) : (
                                ""
                              )}
                            </div>
                          ))}
                        </div>
                        <span>{description}</span>
                      </div>
                    );
                  }
                )}
            </div>
          </CollapsibleContent>
        </Collapsible>
        {/* </CardContent> */}
      </div>
    </div>
  );
}
