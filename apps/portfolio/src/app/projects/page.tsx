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

function Page() {
  return (
    <section className="no-scrollbar flex-1 flex flex-col items-center justify-center overflow-x-hidden overflow-y-scroll">
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="max-w-prose text-wrap">
            {/* <div className="text-xl w-full">Until Thens, Try These:</div> */}
            <p>
              In the meantime, you can see a simulation of boids algorithm{" "}
              <Link className="inline-block underline" href="/">
                here
              </Link>
            </p>
          </CardDescription>
        </CardContent>
      </Card>
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
