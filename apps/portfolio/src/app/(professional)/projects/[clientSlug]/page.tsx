import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectPill } from "@/components/projects/ProjectPill";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { slugToClient } from "@hycord/content";
import { ExternalLink, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

function Page({ params: { clientSlug } }: { params: { clientSlug: string } }) {
  const cl = slugToClient(clientSlug as any);

  if (!cl) return redirect("/projects");

  const {
    client,
    images: { icon, projects: projectImages },
  } = cl;

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-start gap-4">
          <Image
            src={icon}
            alt={`${client.slug}'s Avatar`}
            width={512}
            height={512}
            className="rounded-full aspect-square h-16 w-16"
          />
          <p>{client.displayName ? client.displayName : client.slug}</p>
        </CardTitle>
        {client.quote ? (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Personal Review</AccordionTrigger>
              <AccordionContent className="max-w-prose text-lg">
                {client.quote}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <></>
        )}
      </CardHeader>
      <CardContent className="w-full flex">
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col items-center justify-start w-full h-full divide-y divide-accent ">
            {[...client.projects].map((p) => (
              <ProjectPill key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </CardContent>
      {/* <CardFooter className="no-scrollbar overflow-scroll"></CardFooter> */}
    </Card>
  );
}
export default Page;
