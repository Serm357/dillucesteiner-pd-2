"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Hero from "./components/HomePageComponents/Hero";
import Stats from "./components/HomePageComponents/Stats";
import Herofeatures from "./components/HomePageComponents/Features";
import CTA from "./components/HomePageComponents/Cta";
import dynamic from "next/dynamic";

const MaxWidthWrapper = dynamic(() => import("./components/MaxWidthWrapper"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="h-[calc(100vh-106px)]">
      <TracingBeam className="px-6">
        <MaxWidthWrapper>
          <Hero />
          <Stats />
        </MaxWidthWrapper>
        <CTA />
        <MaxWidthWrapper>
          {" "}
          <Herofeatures />
        </MaxWidthWrapper>
      </TracingBeam>
    </main>
  );
}
