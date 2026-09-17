import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Pupsart — Art living for pet lovers", template: "%s — Pupsart" },
  description: "Ritratti pop su misura, oggetti e cultura visiva per persone con cani e standard.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}</body></html>;
}
