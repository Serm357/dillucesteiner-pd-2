"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  company: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="max-w-sm md:max-w-4xl lg:max-w-6xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-12 md:py-20">
      {/* Beautiful Header */}
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <div className="inline-block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 pb-2">
              What Our Colleagues Say
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-lg"
        >
          Discover insights and experiences from our team members
        </motion.p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
        <div className="order-2 md:order-1">
          <div className="relative h-80 md:h-96 lg:h-[450px] w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl">
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={800}
                      height={800}
                      draggable={false}
                      className="h-full w-full object-cover object-center"
                    />
                    {isActive(index) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6"
                      >
                        <div className="text-emerald-300 text-center">
                          <span className="text-xs md:text-sm font-medium  bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            {testimonial.company}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4 order-1 md:order-2">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="bg-white/5 dark:bg-neutral-900/30 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-neutral-800"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                {testimonials[active].company}
              </p>
            </div>

            <motion.p className="text-lg md:text-xl text-gray-100 dark:text-neutral-200 mb-8 leading-relaxed italic">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            <div className="border-t border-gray-100 dark:border-neutral-800 pt-4">
              <h3 className="text-xl md:text-2xl font-bold text-green-600 dark:text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-sm md:text-base text-gray-300 dark:text-neutral-400">
                {testimonials[active].designation}
              </p>
            </div>
          </motion.div>
          <div className="flex gap-4 pt-8">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center group/button shadow-md hover:shadow-lg transition-all duration-300"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-300 group-hover/button:translate-x-[-2px] group-hover/button:scale-110 transition-all duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center group/button shadow-md hover:shadow-lg transition-all duration-300"
            >
              <IconArrowRight className="h-5 w-5 text-white group-hover/button:translate-x-[2px] group-hover/button:scale-110 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
