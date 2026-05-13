import { Background } from "./Background";
import ChooseInterface from "./ChooseInterface";
import styles from "./styles.module.css";
import ThemeRadio from "./ThemeRadio";

export async function WelcomePage() {
  return (
    <>
      <Background>
        <ThemeRadio />
        <main className={"deselect " + `${styles.main}`}>
          <ChooseInterface />
        </main>
      </Background>
    </>
  );
}
