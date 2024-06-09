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
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params: { clientSlug },
}: {
  params: { clientSlug: string };
}) {
  const client = slugToClient(clientSlug as any);

  return {
    title: `${client?.client.displayName ?? "Masen"}'s Projects`,
    description: `${client?.client.projects.length} projects completed.`,
    ...(client?.images.icon ? { icons: [{ url: client?.images.icon! }] } : {}),
  } satisfies Metadata;
}

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
          <div className="mt-4 flex flex-col gap-2">
            <div className="text-xl font-bold">Statement:</div>
            <div className="max-w-prose text-lg">{client.quote}</div>
          </div>
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
