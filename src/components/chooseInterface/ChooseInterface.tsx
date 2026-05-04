import Link from "next/link";
import { ALLOWED_UI } from "@/lib/constants";
import HeaderGUI from "../gui/HeaderGUI";
import styles from "./chooseInterface.module.css";

export default function ChooseInterface() {
  const active: typeof ALLOWED_UI | null = null;
  return (
    <>
      <HeaderGUI />
      <h2>Hello!</h2>
      <ul className={styles.container}>
        {ALLOWED_UI.map((ui) => (
          <li
            key={`${ui}-choosing`}
            className={`${styles.option} ${ui.toLowerCase() === active ? styles.active : ""}`}
          >
            <Link href={`/${ui.toLowerCase()}`}>{ui}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
