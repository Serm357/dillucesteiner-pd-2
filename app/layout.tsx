import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/providers/Theme";
import PrelineScript from "./components/PrelineScript";

export const metadata: Metadata = {
  title: "Dillucesteiner",
  description: "Susceptibility Testing meets AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
        <PrelineScript />
      </html>
    </>
  );
}
