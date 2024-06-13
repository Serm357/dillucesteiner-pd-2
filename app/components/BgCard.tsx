"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function BgCard({
  images,
  title,
  subtitle,
  desc,
  btnText,
}: {
  images: string[];
  title: string;
  subtitle: string;
  desc?: string;
  btnText?: string;
}) {
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
        <motion.p className="font-bold uppercase md:text-6xl text-4xl bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-400 py-4">
          {title}
        </motion.p>
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold my-2 ">
          {subtitle}
        </h2>
        <p className="text-white/90 my-1 prose max-w-none text-lg md:text-xl leading-8">
          {desc}
        </p>
        {btnText && (
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <Link href="/">{btnText}</Link>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        )}
      </motion.div>
    </ImagesSlider>
  );
}
