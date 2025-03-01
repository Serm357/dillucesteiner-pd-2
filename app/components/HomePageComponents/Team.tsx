"use client"
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="team"
      className="relative max-w-[85rem] min-h-[80vh] px-4 py-16 sm:px-6 lg:px-8 lg:py-20 mx-auto overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-emerald-900/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-emerald-900/10 to-transparent"></div>
      <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/4 w-40 h-40 rounded-full bg-green-500/10 blur-3xl"></div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center mb-16 lg:mb-20"
      >
        <div className="inline-block relative">
          <h2 className="text-4xl font-extrabold md:text-6xl md:leading-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600 pb-2">
            Meet the Crew
          </h2>
          <div className="absolute -bottom-3 left-0 right-0 mx-auto w-40 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
        </div>
        <p className="mt-6 text-xl text-gray-300 max-w-xl mx-auto">
          The visionaries and experts behind our success
        </p>
      </motion.div>
      {/* End Title */}

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mx-auto max-w-5xl"
      >
        <TeamCard
          variants={itemVariants}
          name="Yohana Laurent"
          position="Founder / CEO"
          image="/laurent.png"
          lnk="https://www.linkedin.com/in/yohanalaurent/"
          ins="https://www.instagram.com/laurentinojr"
          twt="https://x.com/Oficiallorenzo"
        />

        {/* <TeamCard
          variants={itemVariants}
          name="Salum Suleiman"
          position="Full Stack Developer"
          image="/salum.png"
          lnk="https://www.linkedin.com/in/salum-suleiman-783351229/"
          mail="mailto:salumdeveloper@dilucsteiner.com"
        /> */}

        <TeamCard
          variants={itemVariants}
          name="Fidelis John"
          position="Marketing & Commercial"
          image="/fidelis.png"
          lnk=" https://www.linkedin.com/in/fidelis-songo-20a087275/"
        />

        <TeamCard
          variants={itemVariants}
          name="Yohana Palangyo"
          position="Head OF PRODUCT"
          image="/yohana.png"
          lnk="https://www.linkedin.com/in/yohana-pallangyo-2b6a18312/"
          ins="https://www.instagram.com/yospa_2020"
          twt="https://x.com/BpharmPallangyo"
        />
      </motion.div>
      {/* End Grid */}
    </div>
  );
};

export default Team;

function TeamCard({
  name,
  position,
  image,
  lnk,
  ins,
  twt,
  mail,
  variants,
}: {
  name: string;
  position: string;
  image: string;
  lnk?: string;
  ins?: string;
  twt?: string;
  mail?: string;
  variants: any;
}) {
  return (
    <motion.div
      variants={variants}
      className="group relative bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 backdrop-blur-lg p-6 rounded-2xl border border-neutral-800/50 hover:border-emerald-500/30 shadow-xl transition-all duration-300 overflow-hidden hover:shadow-emerald-500/10"
    >
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 to-green-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start z-10 relative">
        {/* Image with glow effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
          <img
            width={120}
            height={120}
            className="rounded-full size-24 sm:size-28 lg:size-32 object-cover border-2 border-neutral-800 group-hover:border-emerald-500/50 transition-colors duration-300 relative z-10"
            src={image}
            alt={`${name} - ${position}`}
          />
        </div>

        <div className="flex flex-col text-center sm:text-left">
          <div className="mb-3">
            <h3 className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-emerald-300 group-hover:to-white transition-colors duration-300">
              {name}
            </h3>
            <div className="h-0.5 w-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full my-2 mx-auto sm:mx-0 opacity-70"></div>
            <p className="font-medium text-sm uppercase tracking-wider text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
              {position}
            </p>
          </div>

          {/* Social Icons */}
          <div className="mt-4 space-x-4 flex justify-center sm:justify-start">
            {lnk && (
              <a
                className="inline-flex justify-center items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110"
                href={lnk}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn profile of ${name}`}
              >
                <LinkedInLogoIcon className="size-5" />
              </a>
            )}
            {ins && (
              <a
                className="inline-flex justify-center items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110"
                href={ins}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram profile of ${name}`}
              >
                <InstagramLogoIcon className="size-5" />
              </a>
            )}
            {twt && (
              <a
                className="inline-flex justify-center items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110"
                href={twt}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Twitter profile of ${name}`}
              >
                <TwitterLogoIcon className="size-5" />
              </a>
            )}
            {mail && (
              <a
                className="inline-flex justify-center items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110"
                href={mail}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Email ${name}`}
              >
                <Mail className="size-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
