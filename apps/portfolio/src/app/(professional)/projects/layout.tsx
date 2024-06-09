import React from "react";
import type { Metadata } from "next";
import { projects, clients } from "@hycord/content";
import { describe } from "node:test";

// export const metadata: Metadata = {
//   title: "Masen's Projects",
//   description: "",
// };
export async function generateMetadata() {
  return {
    title: "Masen's Projects",
    description: `There are currently ${projects.length} projects listed,\nfrom ${clients.length} unique clients.`,
  } satisfies Metadata;
}

export default function Layout({
  params,
  children,
}: {
  params: { clientSlug?: string; projectSlug: string };
  children?: React.ReactElement;
}) {
  return (
    <div className="flex-1 pt-4 px-8 no-scrollbar overflow-y-scroll max-h-full w-full flex flex-col">
      {/* <div className="w-full h-10 bg-red-200">a</div> */}
      {children}
    </div>
  );

  return <>a{children}</>;
}
