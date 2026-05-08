"use client";

import { useEffect } from "react";
import InterfaceToChooseCard from "./InterfaceToChooseCard";
import { useUI } from "@/lib/store/uiStore";
import { AllowedUI } from "@/type";
import { ALLOWED_UI } from "@/lib/constants";
import styles from "./chooseInterface.module.css";

export type Selected = AllowedUI | null;

export default function ChooseInterface() {
  const selected = useUI((state) => state.selected);
  const setSelected = useUI((state) => state.setSelected);

  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      const target = e.target as HTMLElement;

      const selectable = target.closest<HTMLElement>("[data-selectable]");

      if (target.tagName == "BUTTON" || target.tagName == "A") {
        return;
      }

      console.log(target.classList.contains("deselect"));
      if (!selectable) {
        setSelected(null);
        return;
      }

      const id = selectable.dataset.selectable as Selected;
      setSelected(id);
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <ul className={styles.optionsList}>
      {ALLOWED_UI.map((ui) => (
        <li key={`${ui}-choosing`}>
          <InterfaceToChooseCard ui={ui} selected={selected} />
        </li>
      ))}
    </ul>
  );
}
