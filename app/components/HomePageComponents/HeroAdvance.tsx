"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="mt-5 text-center font-bold text-xl text-slate-700 dark:text-slate-200">
              Creating a world where <br className="md:idden" />{" "}
              <span className="text-5xl md:text-4xl lg:text-5xl text-primary">
                Cancer Can’t Hide.
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/vid2.gif`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
