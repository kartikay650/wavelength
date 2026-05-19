import type { Metadata } from "next";
import { Fraunces, DM_Sans, Caveat } from "next/font/google";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wavelength — Pitch",
  description: "Offline activations for Wavelength.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${caveat.variable}`}
    >
      <body className="font-sans">
        <Cursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
