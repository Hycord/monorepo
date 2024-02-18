"use client";

import { useTheme } from "@/contexts/ThemeController";
import * as React from "react";
import { Switch } from "../ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";
import useKeyDown from "@/hooks/useKeyDown";
import { useKeyboardControls } from "@/contexts/KeyboardControls";

export interface IThemeToggleProps {
  className?: string;
}

export default function ThemeToggle(props: IThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const keys = useKeyboardControls();

  React.useEffect(() => {
    if (keys.has("t") && keys.has("shift")) {
      toggleTheme();
      // @ts-ignore
      umami.track("Toggle Theme", { theme, type: "shortcut" });
    }
  }, [keys]);

  return (
    <Switch
      data-umami-event="Toggle Theme"
      data-umami-event-theme={theme}
      data-umami-event-type="click"
      className={props.className}
      checked={theme == "dark"}
      onCheckedChange={toggleTheme}
    >
      {theme == "light" ? (
        <SunIcon className="w-4 h-4" />
      ) : (
        <MoonIcon className="w-4 h-4" />
      )}
    </Switch>
  );
}
