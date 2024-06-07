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
            <div className="min-h-screen w-full">{children}</div>
            <Footer />
          </ThemeProvider>
        </body>
        <PrelineScript />
      </html>
    </>
  );
}
