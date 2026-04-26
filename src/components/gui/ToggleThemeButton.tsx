"use client";
import { THEMES, useTheme } from "@/app/hooks/useTheme";

export default function ToggleButtonTheme() {
  const { theme, applyTheme } = useTheme();

  return (
    <div className="theme-toggle" role="radiogroup" aria-label="Theme">
      <div
        className="highlight"
        style={{
          transform: `translateX(${THEMES.indexOf(theme) * 100}%)`,
        }}
      />

      {THEMES.map((opt) => (
        <button
          key={opt}
          role="radio"
          aria-checked={theme === opt}
          className={`option ${theme === opt ? "active" : ""}`}
          onClick={() => applyTheme(opt)}
        >
          {icon(opt)}
        </button>
      ))}
    </div>
  );
}

function icon(type: (typeof THEMES)[number]) {
  switch (type) {
    case "light":
      return "☀️";
    case "dark":
      return "🌙";
    case "system":
      return "🖥️";
  }
}
