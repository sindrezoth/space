import ChooseInterface from "@/components/chooseInterface/ChooseInterface";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ua" }];
}

type Params = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Params) {
  const { locale } = await params;

  return (
    <main>
      <ChooseInterface />
    </main>
  );
}
