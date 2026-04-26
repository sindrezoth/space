"use client";

import { useEffect, useState } from "react";

export const THEMES = ["light", "dark", "system"] as const;

export type Theme = (typeof THEMES)[number];

function isTheme(theme: string): theme is Theme {
  return THEMES.includes(theme as Theme);
}

function isSystemDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(init);

  function applyTheme(theme: Theme) {
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const resolved =
      theme === "system" ? (systemDark ? "dark" : "light") : theme;

    document.documentElement.setAttribute("data-theme", resolved);
    localStorage.setItem("theme", theme);
    setTheme(theme);
  }

  useEffect(() => {
    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = () => {
      applyTheme("system");
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  function init(): Theme {
    if (
      typeof window === "undefined" ||
      typeof localStorage === "undefined" ||
      typeof document === "undefined"
    )
      return "system" as Theme;

    let savedTheme = localStorage.getItem("theme") || "system";
    if (savedTheme === null || !isTheme(savedTheme)) {
      savedTheme = (isSystemDark() ? "dark" : "light") as Theme;
    }
    return savedTheme as Theme;
  }

  const toggleTheme = () => {
    const currentResolved = document.documentElement.getAttribute("data-theme");

    const next = currentResolved === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return { theme, setTheme, toggleTheme, applyTheme };
}
