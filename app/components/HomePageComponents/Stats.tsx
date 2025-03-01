"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView, useAnimation } from "framer-motion";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

// Card interface for type safety
interface StatCardProps {
  title: string;
  number: number;
  description: string;
  year?: string;
  color?: string;
  delay?: number;
  special?: boolean;
}

export default function Stats() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-500 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-indigo-500 blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Why We{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Exist
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Fighting the global crisis of antimicrobial resistance and sepsis
            through innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <StatCard
            title="Sepsis"
            number={13660000}
            description="million people who died globally had sepsis as an immediate cause of death or in the chain of events leading to their death."
            year="2019"
            color="from-blue-500 to-cyan-400"
            delay={0.1}
          />

          <StatCard
            title="Drug Resistant Infection"
            number={4950000}
            description="million people who died from drug-resistant infections, such as lower respiratory, bloodstream, and intra-abdominal infections."
            year="2019"
            color="from-purple-500 to-pink-500"
            delay={0.3}
          />

          <StatCard
            title="Direct Cause"
            number={1270000}
            description="million deaths in 2019 were directly caused by AMR (Antimicrobial Resistance)."
            year="2019"
            color="from-amber-500 to-red-500"
            delay={0.5}
          />

          <StatCard
            title="AMR"
            number={0}
            description="died from AMR was a child under 5 years old, often from previously treatable infections."
            color="from-emerald-500 to-teal-400"
            delay={0.7}
            special={true}
          />
        </motion.div>
      </div>
    </section>
  );
}

const StatCard = ({
  title,
  number,
  description,
  year,
  color = "from-blue-600 to-indigo-600",
  delay = 0,
  special = false,
}: StatCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  return (
    <motion.div ref={cardRef} variants={cardVariants} className="h-full">
      <div className="h-full group rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
        <div
          className={`relative h-full flex flex-col bg-gradient-to-br ${color} p-1`}
        >
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="h-full relative z-10 rounded-xl backdrop-blur-sm bg-black/30 p-6 flex flex-col">
            <div className="mb-auto">
              <span className="inline-block text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-white/10 text-white uppercase">
                {title}
              </span>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center text-center py-8">
              {special ? (
                <div className="flex items-center justify-center space-x-1 mb-4">
                  <div className="text-white font-bold">
                    <AnimatedNumbers
                      includeComma
                      className="text-4xl lg:text-5xl font-extrabold"
                      transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.7,
                        delay: isInView ? 0.5 : 0,
                      })}
                      animateToNumber={1}
                    />
                  </div>
                  <span className="text-white text-lg mx-1">in</span>
                  <div className="text-white font-bold">
                    <AnimatedNumbers
                      includeComma
                      className="text-4xl lg:text-5xl font-extrabold"
                      transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.7,
                        delay: isInView ? 0.7 : 0,
                      })}
                      animateToNumber={5}
                    />
                  </div>
                  <span className="text-white text-lg ml-1">People</span>
                </div>
              ) : (
                <div className="mb-4">
                  <AnimatedNumbers
                    includeComma
                    className="text-4xl lg:text-5xl font-extrabold text-white"
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.5,
                      delay: isInView ? 0.2 : 0,
                    })}
                    animateToNumber={number}
                  />
                </div>
              )}

              <p className="text-sm text-gray-100 max-w-xs mx-auto">
                {description}
              </p>
            </div>

            {year && (
              <div className="mt-auto pt-4 flex justify-between items-center border-t border-white/20">
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-white mr-2"></span>
                  <span className="text-sm text-white/70">Data from</span>
                </div>
                <span className="text-white font-medium">{year}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
