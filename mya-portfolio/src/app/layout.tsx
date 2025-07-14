import type { Metadata } from "next";
import { hanken_grotesk } from '@/app/ui/font';
import Navbar from '@/app/ui/navbar';
import Footer from '@/app/ui/footer';
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
      <body className={`${hanken_grotesk.className} ${hanken_grotesk.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
