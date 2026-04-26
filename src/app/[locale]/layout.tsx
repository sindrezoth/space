import type { Metadata } from "next";
import "./globals.css";

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
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    const stored = localStorage.getItem('theme');

    const getSystemTheme = () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

    let theme = stored;

    if (!theme) {
      theme = getSystemTheme();
    }

    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
    `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
