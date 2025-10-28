import "./globals.css"
import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google"

export const metadata: Metadata = {
  title: "DevStage",
};

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
