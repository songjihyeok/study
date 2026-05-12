import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Start Kit",
  description: "Next.js + Supabase + Tailwind starter kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css"
        />
      </head>
      <body suppressHydrationWarning>
        <Script
          src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
