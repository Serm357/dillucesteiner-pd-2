import React from "react";
import Stats from "./components/HomePageComponents/Stats";
import Herofeatures from "./components/HomePageComponents/Features";
import dynamic from "next/dynamic";
import ImageSlider from "./components/HomePageComponents/ImageSlider";

const HeroFinale = dynamic(
  () => import("./components/HomePageComponents/HeroFinale"),
  {
    ssr: false,
  }
);

const Subhero = dynamic(
  () => import("./components/HomePageComponents/Subhero"),
  {
    ssr: false,
  }
);

const Team = dynamic(() => import("./components/HomePageComponents/Team"), {
  ssr: false,
});

const Testimonials = dynamic(
  () => import("./components/HomePageComponents/Testimonials"),
  {
    ssr: false,
  }
);

export default async function Home() {
  return (
    <main className="flex-1">
      <HeroFinale />
      <Stats />
      <Subhero />
      <Herofeatures />
      <ImageSlider />
      <Testimonials />
      <Team />
    </main>
  );
}
