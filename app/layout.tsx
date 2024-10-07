import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qantas Hotels",
  description: "Coding challenge for Qantas Hotels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
