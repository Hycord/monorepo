import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { projects } from "@hycord/content";
import { ProjectCard } from "@/components/projects/ProjectCard";

function Page() {
  return (
    <div className="flex-1 pt-4 px-0 md:px-24 xl:px-32 no-scrollbar overflow-y-scroll grid max-h-full w-full grid-cols-1 gap-4 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {projects
        .filter((p) => p.project.public)
        .map((p) => (
          <ProjectCard key={p.project.slug} project={p} />
        ))}
    </div>
  );
}

export default Page;
