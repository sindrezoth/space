import styles from "./styles.module.css";
import { WelcomePage } from "@/components/chooseInterface/WelcomePage";

export async function generateStaticParams({ params }: Params) {
  return [{ locale: "en" }, { locale: "ua" }];
}

type Params = { params: Promise<{ locale: string }> };

export default async function HomePage() {
  return <WelcomePage />;
}
