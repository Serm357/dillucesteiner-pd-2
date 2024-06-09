import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/providers/Theme";
import { Metadata } from "next";
import PrelineScript from "./components/PrelineScript";
import Footer from "./components/Footer";
import { Roboto_Serif } from "next/font/google";
import { cn } from "@/lib/utils";

const roboto = Roboto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dillucesteiner",
  description: "Susceptibility Testing meets AI",
};

export default async function RootLayout({
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
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className={cn("min-h-screen w-full", roboto.className)}>
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </body>
        <PrelineScript />
      </html>
    </>
  );
}
