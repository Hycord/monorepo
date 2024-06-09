import { BoidCanvas } from "@/components/canvases/BoidCanvas";
import { BoidHomeSection } from "@/components/canvases/BoidHomeSection";
import { useTheme } from "@/contexts/ThemeController";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start px-0 md:px-24 xl:px-32 no-scrollbar overflow-y-scroll">
      <section className="px-10 mr-auto max-w-prose py-5 min-h-64 flex gap-2 flex-col items-start justify-center w-full">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Hey, I'm Masen.
        </div>
        <div className="text-muted-foreground md:text-xl">
          <span className="text-primary">Full Stack</span> Developer.{" "}
          <span className="underline">Open Source Enthusiast</span>
        </div>
        <div className="mt-5 text-muted-foreground md:text-xl flex flex-col">
          <span className="">
            I am currently majoring in{" "}
            <span className="text-primary inline-block">Computer Science</span>{" "}
            and{" "}
            <span className="text-primary inline-block">
              Computational Math
            </span>{" "}
            with a minor in{" "}
            <span className="text-primary inline-block">Physics</span>
          </span>
          <span>
            at{" "}
            <span className="underline inline-block">
              Northern Illinois University
            </span>
          </span>
        </div>
      </section>
      <section className="hidden px-10  py-5 min-h-32 aspect-[2/3] md:flex gap-2 flex-col items-start justify-center w-full">
        <BoidCanvas className="flex-1 flex w-full h-full" />
      </section>
      <section className=" md:hidden flex items-center justify-center px-10  ">
        There would be a cool simulation here, if you were on a bigger screen!
      </section>
    </div>
  );
}
