import ChooseInterface from "@/components/chooseInterface/ChooseInterface";
import styles from "./styles.module.css";
import HeaderGUI from "@/components/gui/HeaderGUI";
import UIWrapper from "@/components/gui/UIWrapper";

export async function generateStaticParams({ params }: Params) {
  return [{ locale: "en" }, { locale: "ua" }];
}

type Params = { params: Promise<{ locale: string }> };

export default function HomePage() {
  return (
    <UIWrapper>
      <HeaderGUI />
      <main className={"deselect " + `${styles.main}`}>
        <ChooseInterface />
      </main>
    </UIWrapper>
  );
}
