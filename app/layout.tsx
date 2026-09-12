import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KineLuma — Human Movement. Real Impact.",
  description: "KineLuma turns verified human movement into measurable clean energy and transparent rewards.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
