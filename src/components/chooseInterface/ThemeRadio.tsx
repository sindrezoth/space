"use client";

import { useTheme } from "@/hooks/useTheme";
import { THEMES_MODES } from "@/lib/constants";
import { ThemeMode } from "@/type";
import styles from "./ThemeRadio.module.css";

export default function ThemeRadio() {
  const { mode, setMode } = useTheme();

  if (!mode) {
    return null;
  }

  return (
    <div className={styles["theme-toggle-wrapper"]}>
      <p>Theme preferences</p>
      <nav className={styles["theme-toggle"]}>
        <div
          className={styles.highlight}
          style={{
            transform: `translateX(${THEMES_MODES.indexOf(mode) * 100}%)`,
          }}
        />

        <ul>
          {THEMES_MODES.map((opt) => (
            <li key={"theme-option-" + opt}>
              <button
                key={opt}
                className={`${styles.option} ${mode === opt ? styles.active : ""}`}
                onClick={() => setMode(opt)}
              >
                {icon(opt)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function icon(type: ThemeMode) {
  return type === "light" ? "☀️" : type === "dark" ? "🌙" : "🖥️";
}
