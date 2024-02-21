"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";

const QueryProvider: React.FunctionComponent<{ children: React.ReactNode }> = (
  props
) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient} children={props.children} />;
};

export default QueryProvider;
