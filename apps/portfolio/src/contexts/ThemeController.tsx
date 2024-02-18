"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { cn } from "@/lib/utils";
import { defaultMaxListeners } from "events";
import { cookies } from "next/headers";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

export type Theme = "dark" | "light";

// Create the context
const ThemeControllerContext = createContext<{
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  toggleTheme: () => void;
}>({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

// Provider component
export const ThemeControllerProvider: React.FC<{
  children: React.ReactNode;
  className?: string;
  defaultTheme: Theme;
}> = ({ children, className, defaultTheme }) => {
  const [theme, set] = useState<Theme>(defaultTheme);

  const setTheme = (v: Theme | ((v: Theme) => Theme)) => {
    const data = typeof v == "function" ? v(theme) : v;
    set(data);
    const headers = new Headers();
    headers.set("theme", data);
    fetch("/set-theme", {
      headers,
    });
  };

  const toggleTheme = () => {
    setTheme((t) => (t == "dark" ? "light" : "dark"));
  };

  return (
    <ThemeControllerContext.Provider
      value={{ theme: theme, setTheme, toggleTheme }}
    >
      <body className={cn({ dark: theme == "dark" }, className)}>
        {children}
      </body>
    </ThemeControllerContext.Provider>
  );
};

// Hook to consume the context
export const useTheme = () => {
  const theme = useContext(ThemeControllerContext);
  return theme;
};
