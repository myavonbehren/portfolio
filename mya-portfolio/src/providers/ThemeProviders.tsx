"use client"
import { ThemeProvider } from "next-themes";

interface ThemeProvidersProps {
    children: React.ReactNode;
}

export default function Provider({ children }: ThemeProvidersProps) {
 return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}