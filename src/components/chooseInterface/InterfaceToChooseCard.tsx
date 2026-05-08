import Link from "next/link";
import { Selected } from "./ChooseInterface";
import { AllowedUI } from "@/type";
import styles from "./chooseInterface.module.css";

type Params = {
  ui: AllowedUI;
  selected: Selected;
};

export default function InterfaceToChooseCard({ ui, selected }: Params) {
  return (
    <div
      data-selectable={ui}
      className={`${styles.option} ${ui === selected ? styles.active : ""}`}
    >
      <p>{ui}</p>
      {ui === selected && <Link href={`/${ui.toLowerCase()}`}>choose</Link>}
    </div>
  );
}
