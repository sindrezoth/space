"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./chooseInterface.module.css";
import HeaderGUI from "../gui/HeaderGUI";
import InterfaceToChooseCard from "./InterfaceToChooseCard";
import { AllowedUI } from "@/type";
import { ALLOWED_UI } from "@/lib/constants";

export type Selected = AllowedUI | null;

export default function ChooseInterface() {
  const [selected, setSelected] = useState<Selected>(null);

  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      const target = e.target as HTMLElement;

      const selectable = target.closest<HTMLElement>("[data-selectable]");

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
    <div className={styles.container}>
      <ul className={styles.optionsList}>
        {ALLOWED_UI.map((ui) => (
          <li key={`${ui}-choosing`}>
            <InterfaceToChooseCard ui={ui} selected={selected} />
          </li>
        ))}
      </ul>
    </div>
  );
}
