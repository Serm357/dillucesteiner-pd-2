import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/providers/Theme";
import { Metadata } from "next";
import PrelineScript from "./components/PrelineScript";
import Footer from "./components/Footer";

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
            <main className="flex flex-col gap-2 min-h-screen">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
        <PrelineScript />
      </html>
    </>
  );
}
