"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const images = [
  "/bg/3.jpg",
  "/bg/5.jpg",
  "/bg/6.jpg",
  "/bg/8.jpg",
  "/bg/9.jpg",
  "/bg/15.jpg",
  "/bg/20.jpg",
  "/bg/25.jpg",
];
const HeroFinale = () => {
  return (
    <>
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
          className="z-50 mx-3 flex flex-col justify-center items-center"
        >
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold my-2 ">
            Here it is different
          </h2>
          <motion.p className="font-bold uppercase md:text-6xl text-4xl bg-clip-text text-transparent bg-gradient-to-b from-green-50 to-green-400 py-4">
            AMR can’t beat us
          </motion.p>
          <p className="text-white/90 my-1 prose max-sm:mx-4  text-lg md:text-xl leading-normal ">
            What if we could have an advanced antimicrobial susceptibility and
            resistance test to detect and analyze resistance patterns? <br />
            What if we could know if bacteria are resistant to specific
            medications immediately during diagnosis? <br />
            With our cutting-edge technology, we can achieve this. <br />
            By staying one step ahead, AMR can’t beat us. Our test ensures that
            healthcare providers can identify resistant strains on the spot,
            enabling timely and effective treatments.
          </p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 ngaringari">
            <Link href="/about-us">About Us</Link>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent " />
          </button>
        </motion.div>
      </ImagesSlider>
    </>
  );
};
export default HeroFinale;
