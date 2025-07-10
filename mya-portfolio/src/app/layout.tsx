import type { Metadata } from "next";
import { hanken_grotesk } from '@/app/ui/font';
import "./globals.css";


export const metadata: Metadata = {
  title: "mya von behren",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hanken_grotesk.className} ${hanken_grotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
