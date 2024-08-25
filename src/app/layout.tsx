import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Hokage OS",
  icons: [
    {
      rel: "icon",
      href: "/favicon.ico",
      url: "/favicon.ico",
    },
  ],
  description: "Hokage OS is a retro operating system for apple lovable geeks.",
};

const myFont = localFont({ src: "./hokageFont.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
