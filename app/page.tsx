import React from "react";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Stats from "./components/HomePageComponents/Stats";
import Herofeatures from "./components/HomePageComponents/Features";
import CTA from "./components/HomePageComponents/Cta";
import dynamic from "next/dynamic";
import Trusts from "./components/HomePageComponents/Trusts";
import Testimonials from "./components/HomePageComponents/Testimonials";
// import HeroFn from "./components/HomePageComponents/HeroFn";
import HeroFinale from "./components/HomePageComponents/HeroFinale";
import ImageSlider from "./components/HomePageComponents/ImageSlider";

const Team = dynamic(() => import("./components/HomePageComponents/Team"), {
  ssr: false,
});

const TracingBeam = dynamic(() => import("@/components/ui/tracing-beam"), {
  ssr: false,
});

// const HeroScroll = dynamic(
//   () => import("./components/HomePageComponents/HeroAdvance"),
//   {
//     ssr: false,
//   }
// );

export default function Home() {
  return (
    <main className="flex-1">
      <TracingBeam className="px-6">
        {/* <HeroFn /> */}
        <HeroFinale />
        {/* <MaxWidthWrapper> */}
        {/* <HeroScroll /> */}
        <Stats />
        {/* </MaxWidthWrapper> */}
        <CTA />
        {/* <MaxWidthWrapper> */} <Herofeatures />
        <ImageSlider />
        <Trusts />
        <Testimonials />
        <Team />
        {/* </MaxWidthWrapper> */}
      </TracingBeam>
    </main>
  );
}
