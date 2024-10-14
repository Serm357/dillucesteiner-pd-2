import React, { Suspense } from "react";
import Stats from "./components/HomePageComponents/Stats";
import Herofeatures from "./components/HomePageComponents/Features";
import dynamic from "next/dynamic";
import ImageSlider from "./components/HomePageComponents/ImageSlider";
import CTA from "./components/HomePageComponents/CTA";
import { Skeleton } from "@/components/ui/skeleton";

const HeroFinale = dynamic(
  () => import("./components/HomePageComponents/HeroFinale"),
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
      <Suspense fallback={<Loading />}>
        <HeroFinale />
      </Suspense>
      <Stats />
      <CTA />
      <Herofeatures />
      <ImageSlider />
      <Testimonials />
      <Team />
    </main>
  );
}

function Loading() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        {/* <Skeleton className="h-4 w-[250px]" /> */}
        {/* <Skeleton className="h-4 w-[200px]" /> */}
      </div>
    </div>
  );
}
