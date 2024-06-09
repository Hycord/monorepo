import { BellRing, Check, ExternalLink, Minus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ProjectSchema } from "@hycord/content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

type ProjectPillProps = {
  project: ProjectSchema;
  className?: string;
};

export const ProjectPill: React.FC<ProjectPillProps> = ({
  className,
  project,
}) => {
  const MAX_TAG_LEN = 2;

  return (
    <Link
      href={`/projects/${project.clientSlug}/${project.slug}`}
      key={project.slug}
      className="p-4 w-full flex flex-row items-center hover:cursor-pointer hover:bg-primary/20 rounded-md justify-between"
    >
      <div className="flex items-center justify-start flex-row gap-8">
        <p>{project.title}</p>
        {project.tags ? (
          <>
            <Minus className="hidden sm:block" />

            <div className="hidden sm:flex flex-row gap-2 items-center justify-start hover:cursor-default">
              {project.tags.slice(0, MAX_TAG_LEN).map((t) => (
                <Badge className="hover:bg-primary">{t}</Badge>
              ))}
              {project.tags.length > MAX_TAG_LEN ? (
                <HoverCard>
                  <HoverCardTrigger>
                    <Badge>+{project.tags.length - MAX_TAG_LEN}</Badge>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    {project.tags.slice(MAX_TAG_LEN).map((t) => (
                      <Badge className="hover:bg-primary">{t}</Badge>
                    ))}
                  </HoverCardContent>
                </HoverCard>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <ExternalLink />
    </Link>
  );
};
