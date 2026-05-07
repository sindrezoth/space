import ChooseInterface from "@/components/chooseInterface/ChooseInterface";
import styles from "./styles.module.css";
import HeaderGUI from "@/components/gui/HeaderGUI";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ua" }];
}

type Params = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Params) {
  const { locale } = await params;

  return (
    <div className={styles["whole-wrapper"]}>
      <HeaderGUI />
      <main className={styles.main}>
        <ChooseInterface />
      </main>
    </div>
  );
}
