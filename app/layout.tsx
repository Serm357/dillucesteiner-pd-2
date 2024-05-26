import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/providers/Theme";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const PrelineScript = dynamic(() => import("./components/PrelineScript"), {
  ssr: false,
});
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
