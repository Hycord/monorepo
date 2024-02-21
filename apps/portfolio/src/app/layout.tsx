import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/navigation/Header";
import { cn } from "../lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { KeyboardControlProvider } from "@/contexts/KeyboardControls";
import { Theme, ThemeControllerProvider } from "@/contexts/ThemeController";
import { cookies } from "next/headers";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "@/contexts/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hycord's Portfolio",
  description: "18 Year old developer from the United States",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" no-scrollbar">
      <Script
        async
        defer
        src="/a/script.js"
        data-website-id={process.env.ANALYTICS_ID}
      ></Script>
      <QueryProvider>
        <ThemeControllerProvider
          defaultTheme={(cookies().get("theme")?.value ?? "dark") as Theme}
          className={cn(
            inter.className,
            "flex flex-col items-center justify-center w-screen h-screen max-h-screen overflow-hidden no-scrollbar"
          )}
        >
          <KeyboardControlProvider>
            <Header />
            <main className="h-full w-full flex overflow-hidden flex-1">
              {children}
              <Toaster />
            </main>
          </KeyboardControlProvider>
        </ThemeControllerProvider>
      </QueryProvider>
    </html>
  );
}

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {};
