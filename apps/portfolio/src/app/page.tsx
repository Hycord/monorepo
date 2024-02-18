
import { BoidCanvas } from "@/components/canvases/BoidCanvas";
import { BoidHomeSection } from "@/components/canvases/BoidHomeSection";
import { useTheme } from "@/contexts/ThemeController";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start px-0 md:px-24 xl:px-32 divide-y-2 divide-border no-scrollbar overflow-y-scroll">
      <section className="px-10 py-5 min-h-64 flex gap-2 flex-col items-start justify-center w-full">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Hey, I'm Masen.
        </div>
        <div className="text-muted-foreground md:text-xl">
          <span className="text-primary">Full Stack</span> Developer.{" "}
          <span className="underline">Open Source Enthusiast</span>
        </div>
      </section>
      <section className="px-10 py-5 min-h-32 aspect-[2/3] flex gap-2 flex-col items-start justify-center w-full">
        <BoidCanvas className="flex-1 flex w-full h-full" />
      </section>
    </div>
  );
}
