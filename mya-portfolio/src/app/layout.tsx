import type { Metadata } from "next";
import { hanken_grotesk } from '@/app/_components/font';
import Navbar from '@/app/_components/navbar';
import "./globals.css";


export const metadata: Metadata = {
  title: "mya von behren",
  description: "mya von behren's portfolio",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hanken_grotesk.className} ${hanken_grotesk.className} antialiased`}>
        <Navbar />
            {children}
      </body>
    </html>
  );
}
