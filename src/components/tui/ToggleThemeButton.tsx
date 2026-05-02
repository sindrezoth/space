"use client";

import { useTheme } from "@/hooks/useTheme";
import { THEMES_MODES } from "@/lib/constants";
import { ThemeMode } from "@/type";

export default function ThemeToggle() {
  const { mode, setMode } = useTheme()

  if(!mode) {
    return null;
  }

  return (
    <div className="theme-toggle">
      <div
        className="highlight"
        style={{
          transform: `translateX(${THEMES_MODES.indexOf(mode) * 100}%)`,
        }}
      />

      {THEMES_MODES.map((opt) => (
        <button
          key={opt}
          className={"button option" + (mode === opt ? " active" : "")}
          onClick={() => setMode(opt)}
        >
          {icon(opt)}
        </button>
      ))}
    </div>
  );
}

function icon(type: ThemeMode) {
  return type === "light"
    ? "☀️"
    : type === "dark"
    ? "🌙"
    : "🖥️";
}
