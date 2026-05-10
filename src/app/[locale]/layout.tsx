import type { Metadata } from "next";
import "@/styles/globals.css";
import UIWrapper from "@/components/UIWrapper";

export const metadata: Metadata = {
  title: "Sindrezoth's! | What you are prefer?",
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
          (function () {
            try {
              const stored = localStorage.getItem('theme');

              const system = window
                .matchMedia('(prefers-color-scheme: dark)')
                .matches
                  ? 'dark'
                  : 'light';

                const mode = stored || 'system';
                const resolved = mode === 'system' ? system : mode;

                document.documentElement.dataset.theme = resolved;
                document.documentElement.dataset.mode = mode;
            } catch (e) {}
          })();
          `,
          }}
        />
      </head>
      <body>
        <UIWrapper>{children}</UIWrapper>
      </body>
    </html>
  );
}
