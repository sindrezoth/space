"use client";

import { useEffect, useState } from "react";
import { Theme, ThemeMode } from "@/type";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode | undefined>();

  useEffect(() => {
    const actual =
      (document.documentElement.dataset.mode || "system") as ThemeMode;

    setMode(actual);
  }, []);

  const apply = (nextMode: ThemeMode) => {
    const resolved =
      nextMode === "system" ? getSystemTheme() : nextMode;

    const root = document.documentElement;

    root.dataset.theme = resolved;
    root.dataset.mode = nextMode;

    localStorage.setItem("theme", nextMode);
    setMode(nextMode);
  };

  return {
    mode,
    setMode: apply,
  };
}
