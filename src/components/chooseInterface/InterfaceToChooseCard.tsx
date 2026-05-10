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
      {ui === selected && (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            alias placeat enim modi veritatis. Ipsum consequuntur consectetur
            fuga minus, soluta similique, molestias totam pariatur cum inventore
            atque error eos eius?
          </p>
          <Link href={`/${ui.toLowerCase()}`}>choose</Link>
        </>
      )}
    </div>
  );
}
