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

// Enhanced Hero component
const HeroFinale = () => {
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

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <ImagesSlider
      className="h-screen min-h-[600px]"
      images={images}
      direction="up"
    >
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        <motion.h2
          variants={childVariants}
          className="text-lg font-semibold text-emerald-100 md:text-xl lg:text-2xl"
        >
          Here It Is Different
        </motion.h2>
        <motion.p
          variants={childVariants}
          className="mt-4 bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-4xl font-extrabold uppercase text-transparent md:text-6xl lg:text-7xl"
        >
          AMR Can’t Beat Us
        </motion.p>
        <motion.p
          variants={childVariants}
          className="mx-auto mt-6 max-w-2xl text-base text-white/90 md:text-lg lg:text-xl"
        >
          Revolutionizing antimicrobial resistance detection with cutting-edge
          technology. Instant diagnosis, precise treatment, unbeatable results.
        </motion.p>
        <motion.div variants={childVariants} className="mt-8">
          <Link
            href="/about-us"
            className="group relative inline-flex items-center rounded-full bg-emerald-500/10 px-6 py-3 text-base font-medium text-white transition-all hover:bg-emerald-500/20 md:text-lg"
          >
            <span className="relative z-10">Discover Our Mission</span>
            <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
};

export default HeroFinale;
