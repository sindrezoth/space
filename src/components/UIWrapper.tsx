"use client";

import { useUI } from "@/lib/store/uiStore";
import styles from "./UIWrapper.module.css";

export default function UIWrapper({ children }: { children: React.ReactNode }) {
  const selected = useUI((state) => state.selected);

  return (
    <div
      className={`${
        selected === "GUI"
          ? styles["gui-bg-wrapper"]
          : selected === "TUI"
            ? styles["tui-bg-wrapper"]
            : ""
      } ${styles["whole-wrapper"]}`}
    >
      {children}
    </div>
  );
}
