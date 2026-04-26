import ChooseInterface from "@/components/ChooseInterface";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ua" }];
}

type Params = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Params) {
  const { locale } = await params;

  return (
    <div>
      <ChooseInterface />
    </div>
  );
}
