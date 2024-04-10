import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stratzy Assignment",
  description: "By Nishchay Veer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
