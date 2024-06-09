import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Divide, GithubIcon } from "lucide-react";
import getConfig from "next/config";
import Link from "next/link";
import { get } from "@hycord/util"
import { Suspense } from "react";

async function Page() {
  const excalidrawURL = await get("hiawatha_excalidraw_url") as string | null;

  return (
    <section className="no-scrollbar flex-1 flex flex-col items-center justify-center overflow-x-hidden overflow-y-scroll">
      {excalidrawURL ?
        <iframe className="w-full h-full" src={excalidrawURL} />
        :
        <Card className="flex-grow w-full p-10">
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
          </CardHeader>
          <CardContent className="bg-red-200 h-full">
            <div className="flex flex-col gap-2 items-center justify-center rounded-md p-4 m-4">Unable to load documentation.<br /> Please email <Link href={"emailto:hiawatha@masen.dev"}>hiawatha@masen.dev</Link> and I will fix it.</div>
          </CardContent>
        </Card>
      }
      {/*
      <div className="w-full" id="freelance">
         <div className="w-full border-b-2 border-secondary-foreground text-secondary mb-4 pb-2">
          <p className="text-5xl">Freelance</p>
        </div>
        <Card>
          <CardHeader>LOSE Guild Discord Bot</CardHeader>
          <CardContent>
            <CardDescription>Example Description</CardDescription>
          </CardContent>
        </Card>
      </div>
         */}
    </section>
  );
}

export default Page;
