import { AllowedUI } from "@/type";
import { Selected } from "./ChooseInterface";
import styles from "./chooseInterface.module.css";
import Link from "next/link";

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
      <div>{ui}</div>
      {ui === selected && <Link href={`/${ui.toLowerCase()}`}>choose</Link>}
    </div>
  );
}
