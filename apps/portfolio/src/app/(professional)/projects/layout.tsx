import React from "react";

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
