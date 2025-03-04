import { Metadata } from "next";

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
      <div>
        <div>
          <section className="">{children}</section>
        </div>
      </div>
    </>
  );
}
