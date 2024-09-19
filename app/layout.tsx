import type { Metadata } from "next";
import { Open_Sans, Rajdhani } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tejjus Bhat",
  description: "Personal website of Tejjus Bhat - Software Engineer and AI Developer based in Delhi, India",
  icons: {
    icon: "/favicon.ico",
  },
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
