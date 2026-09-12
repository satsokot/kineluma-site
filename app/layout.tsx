import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KineLuma — Immersive 3D Experience",
  description: "KineLuma is an immersive, scroll-driven 3D web experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
