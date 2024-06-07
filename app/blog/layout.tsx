import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Diluc Blog",
  description: "Susceptibility Testing meets AI",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <html lang="en" suppressHydrationWarning> */}
      <div>
        {/* <head /> */}
        <div>
          {/* <Navbar /> */}
          <section className="">{children}</section>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
