import type { Metadata } from "next";
import { Open_Sans, Rajdhani } from "next/font/google";
import "./globals.css";
import logo from "@/public/images/logo.png"; // Assuming the logo is stored in this path

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tejjus Bhat",
  description: "Portfolio of Tejjus Bhat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Tejjus Bhat</title>
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </head>
      <body className={open_sans.className}>{children}</body>
    </html>
  );
}
