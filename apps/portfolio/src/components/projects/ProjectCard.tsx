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

type ProjectCardProps = {
  project: {
    project: ProjectSchema;
    images: string[];
  };
  className?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  project: { images, project },
}) => {
  return (
    <Card className={cn(className, "flex flex-col")}>
      <CardHeader>
        <CardTitle>
          <p>{project.title}</p>
          {project.tags ? (
            project.tags.length > 1 ? (
              <HoverCard>
                <HoverCardTrigger className="flex gap-2 mt-2">
                  <Badge className="hover:bg-primary">{project.tags[0]}</Badge>

                  <Badge>+{project.tags.length - 1}</Badge>
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-row gap-2">
                  {project.tags.slice(1).map((t) => (
                    <Badge className="hover:bg-primary">{t}</Badge>
                  ))}
                </HoverCardContent>
              </HoverCard>
            ) : (
              <Badge className="hover:bg-primary mt-2">{project.tags[0]}</Badge>
            )
          ) : (
            <></>
          )}
          {/* <Link
            href={`/projects/${project.clientSlug}`}
            className="underline hover:no-underline"
          >
            {project.clientSlug}
          </Link> */}
        </CardTitle>
        {images!.length <= 0 ? (
          <CardDescription className="truncate text-ellipsis">
            {project.description}
          </CardDescription>
        ) : (
          <></>
        )}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-start">
        {images!.length <= 0 ? (
          <></>
        ) : (
          <Carousel className="w-[70%] rounded-md">
            <CarouselContent className="">
              {images!.map((im) => (
                <CarouselItem key={im}>
                  <div className="aspect-square overflow-clip basis-1/2">
                    <Image
                      src={im}
                      alt={project.description ?? "No Alt Provided"}
                      width={512}
                      height={512}
                      className="rounded-md"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
        {/* <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
              <Switch />
            </div>
            <div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">testTitle</p>
                  <p className="text-sm text-muted-foreground">testDescription</p>
                </div>
              </div>
            </div> */}
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/projects/${project.clientSlug}/${project.slug}`}>
            <ExternalLink className="mr-2 h-4 w-4" /> View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
