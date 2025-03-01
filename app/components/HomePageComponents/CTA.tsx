"use client"
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const [isHoveringProviders, setIsHoveringProviders] = useState(false);
  const [isHoveringPatients, setIsHoveringPatients] = useState(false);

  // Animation variants
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[80vh]">
        {/* Providers Card */}
        <motion.div
          className="lg:col-span-2 relative overflow-hidden rounded-lg shadow-lg"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          onMouseEnter={() => setIsHoveringProviders(true)}
          onMouseLeave={() => setIsHoveringProviders(false)}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
            style={{
              backgroundImage: "url('/bg/10.jpg')",
              transform: isHoveringProviders ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="relative h-full flex flex-col justify-end p-6">
            {!isHoveringProviders ? (
              <motion.h1
                className="font-bold text-4xl text-white mb-4"
                initial={{ x: 0 }}
                animate={{ x: 0 }}
              >
                For Providers.
              </motion.h1>
            ) : (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="max-w-lg"
              >
                <motion.h1
                  variants={itemVariants}
                  className="font-bold text-4xl text-white"
                >
                  For Providers.
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="font-medium text-gray-200 my-4"
                >
                  At Ditekta, our advanced technology is designed to uncover and
                  expose antimicrobial resistance (AMR) hiding places with
                  unparalleled accuracy and speed.
                </motion.p>
                <motion.div variants={itemVariants}>
                  <Link
                    href="/for-providers/service-support"
                    className="inline-flex items-center gap-2 text-white bg-primary px-4 py-2 rounded-md font-medium transition-all hover:bg-primary/90"
                  >
                    Learn How
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Patients Card */}
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-lg"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          onMouseEnter={() => setIsHoveringPatients(true)}
          onMouseLeave={() => setIsHoveringPatients(false)}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
            style={{
              backgroundImage: "url('/bg/18.jpg')",
              transform: isHoveringPatients ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="relative h-full flex flex-col justify-end p-6">
            {!isHoveringPatients ? (
              <motion.h1
                className="font-bold text-4xl text-white mb-4"
                initial={{ x: 0 }}
                animate={{ x: 0 }}
              >
                For Patients.
              </motion.h1>
            ) : (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="max-w-lg"
              >
                <motion.h1
                  variants={itemVariants}
                  className="font-bold text-4xl text-white"
                >
                  For Patients.
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="font-medium text-gray-200 my-4"
                >
                  By using our technology, patients can provide real-time data
                  through regular health monitoring and reporting symptoms
                  early. When patients use at-home diagnostic kits linked to our
                  AI system, they can collect samples and input symptoms into a
                  user-friendly app.
                </motion.p>
                <motion.div variants={itemVariants}>
                  <Link
                    href="/for-patients"
                    className="inline-flex items-center gap-2 text-white bg-primary px-4 py-2 rounded-md font-medium transition-all hover:bg-primary/90"
                  >
                    Learn How
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default CTA;
