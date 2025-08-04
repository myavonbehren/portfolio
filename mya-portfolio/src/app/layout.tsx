import type { Metadata } from "next";
import { hanken_grotesk } from '@/app/_components/font';
import Navbar from '@/app/_components/navbar';
import { ThemeProvider } from '@/providers/ThemeProviders';
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


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
        <ThemeProvider>
          <Navbar />
            {children}
            <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
