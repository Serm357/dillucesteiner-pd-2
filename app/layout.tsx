import "./globals.css";
import Navbar, { AnnouncementBanner, LinksBanner } from "./components/Navbar";
import { ThemeProvider } from "@/providers/Theme";
import PrelineScript from "./components/PrelineScript";
import Footer from "./components/Footer";
import { Roboto_Serif } from "next/font/google";
import { cn, constructMetadata } from "@/lib/utils";

const roboto = Roboto_Serif({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest"></link>
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <AnnouncementBanner />
            <LinksBanner />
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
