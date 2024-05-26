import React from "react";
import Hero from "./components/HomePageComponents/Hero";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Stats from "./components/HomePageComponents/Stats";
import Herofeatures from "./components/HomePageComponents/Features";
import CTA from "./components/HomePageComponents/Cta";
import dynamic from "next/dynamic";
import Footer from "./components/Footer";

const TracingBeam = dynamic(() => import("@/components/ui/tracing-beam"), {
  ssr: false,
});

const HeroScroll = dynamic(
  () => import("./components/HomePageComponents/HeroAdvance"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="h-[calc(100vh-106px)]">
      <TracingBeam className="px-6">
        <MaxWidthWrapper>
          <HeroScroll />
          {/* <Hero /> */}
          <Stats />
        </MaxWidthWrapper>
        <CTA />
        <MaxWidthWrapper>
          {" "}
          <Herofeatures />
        </MaxWidthWrapper>
      </TracingBeam>
      <Footer />
    </main>
  );
}
