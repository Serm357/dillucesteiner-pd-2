"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";

// Optimized ImagesSlider component
export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  // Memoized image loading
  const loadImages = useCallback(async () => {
    try {
      const loadPromises = images.map((image) => {
        return new Promise<string>((resolve) => {
          const img = new Image();
          img.src = image;
          img.decoding = "async"; // Improve performance
          img.loading = "eager"; // Prioritize loading
          img.onload = () => resolve(image);
        });
      });
      const loaded = await Promise.all(loadPromises);
      setLoadedImages(loaded);
    } catch (error) {
      console.error("Failed to load images:", error);
    }
  }, [images]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  // Optimized slideshow logic
  useEffect(() => {
    if (!autoplay || loadedImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % loadedImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, loadedImages]);

  const slideVariants = {
    initial: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 1.1,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {loadedImages.length > 0 && (
        <>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]}
              variants={slideVariants}
              initial="initial"
              animate="visible"
              exit="exit"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="100vw"
              loading="eager"
              decoding="async"
            />
          </AnimatePresence>
          {overlay && (
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/40 z-10",
                overlayClassName
              )}
            />
          )}
          {children}
        </>
      )}
    </div>
  );
};
