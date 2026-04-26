import Header from "@/components/gui/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sindrezoth's!",
  description: "Own space with own ideas",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ua" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <>
      <Header />
      {children}
    </>
  );
}
