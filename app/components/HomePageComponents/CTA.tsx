"use client";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const [isHoveringProviders, setIsHoveringProviders] = useState(false);
  const [isHoveringPatients, setIsHoveringPatients] = useState(false);

  // Animation variants
  const cardVariants = {
    initial: { scale: 1, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" },
    hover: {
      scale: 1.02,
      boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Memoized card component to optimize performance
  const Card = useMemo(
    () =>
      ({
        isHovering,
        setIsHovering,
        title,
        description,
        link,
        image,
        className,
      }: {
        isHovering: boolean;
        setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
        title: string;
        description: string;
        link: string;
        image: string;
        className?: string;
      }) =>
        (
          <motion.div
            className={`relative overflow-hidden rounded-xl shadow-lg h-full ${className}`}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={() => setIsHovering(true)}
            onTouchEnd={() => setIsHovering(false)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out will-change-transform"
              style={{
                backgroundImage: `url(${image})`,
                transform: isHovering ? "scale(1.1)" : "scale(1.05)", // Increased image scale for both states
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
              <AnimatePresence mode="wait">
                {!isHovering ? (
                  <motion.h1
                    key="title"
                    className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 tracking-tight" // Reduced text sizes
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {title}
                  </motion.h1>
                ) : (
                  <motion.div
                    key="content"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-xl"
                  >
                    <motion.h1
                      variants={itemVariants}
                      className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 tracking-tight" // Reduced text sizes
                    >
                      {title}
                    </motion.h1>
                    <motion.p
                      variants={itemVariants}
                      className="text-xs md:text-sm lg:text-base text-gray-100 my-4 leading-relaxed" // Reduced text sizes
                    >
                      {description}
                    </motion.p>
                    <motion.div variants={itemVariants}>
                      <Link
                        href={link}
                        className="group inline-flex items-center gap-2 text-white bg-gradient-to-r from-primary to-primary-dark px-4 py-2 md:px-5 md:py-2.5 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 hover:from-primary-dark hover:to-primary shadow-md hover:shadow-lg" // Reduced button text size and padding
                      >
                        Learn How
                        <ArrowRight
                          size={16} // Reduced icon size
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ),
    []
  );

  return (
    <main className="container mx-auto px-4 py-12 md:py-20 w-full max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 min-h-[90vh] auto-rows-fr">
        {" "}
        {/* Increased viewheight from 70vh to 90vh */}
        <Card
          isHovering={isHoveringProviders}
          setIsHovering={setIsHoveringProviders}
          title="For Providers."
          description="At Ditekta, our advanced technology is designed to uncover and expose antimicrobial resistance (AMR) hiding places with unparalleled accuracy and speed."
          link="/for-providers/service-support"
          image="/bg/10.jpg"
          className="lg:col-span-2"
        />
        <Card
          isHovering={isHoveringPatients}
          setIsHovering={setIsHoveringPatients}
          title="For Patients."
          description="By using our technology, patients can provide real-time data through regular health monitoring and reporting symptoms early. When patients use at-home diagnostic kits linked to our AI system, they can collect samples and input symptoms into a user-friendly app."
          link="/for-patients"
          image="/bg/18.jpg"
        />
      </div>
    </main>
  );
};

export default CTA;
