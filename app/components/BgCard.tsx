"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function BgCard() {
  const images = ["/1.png", "/2.jpg", "/3.jpg"];
  return (
    <ImagesSlider className="h-[35rem]" images={images} direction="down">
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 mx-3"
      >
        <motion.p className="font-bold uppercase md:text-6xl text-4xl bg-clip-text text-transparent bg-gradient-to-b from-green-50 to-green-400 py-4">
          Resistance suite site.
        </motion.p>
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold my-2 ">
          Resistance finally met its match.
        </h2>
        <p className="text-white/90 my-1 prose max-w-none text-lg md:text-xl leading-8">
          Our AI-powered technology revolutionizes the fight against AMR by
          precisely analyzing resistance patterns, enabling early detection of
          resistant strains. <br />
          It provides tailored treatment plans based on comprehensive analysis,
          ensuring precise, effective, and timely interventions to combat
          antimicrobial resistance.
        </p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <Link href="/">See it in Action →</Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
