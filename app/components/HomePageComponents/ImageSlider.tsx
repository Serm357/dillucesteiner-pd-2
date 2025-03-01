"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, ArrowLeft, Play, Pause } from "lucide-react";
import Link from "next/link";
import { PostMetadata } from "../../../components/PostMetadata";
import { AnimatePresence, motion } from "framer-motion";

interface ImageSliderProps {
  posts: PostMetadata[];
}

const ImageSlider = ({ posts }: ImageSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = posts.length;
  const autoPlayDuration = 6000;

  const goToSlide = useCallback(
    (index: number) => {
      const newIndex = ((index % totalSlides) + totalSlides) % totalSlides;
      setCurrentSlide(newIndex);
      resetProgressBar();
    },
    [totalSlides]
  );

  const nextSlide = useCallback(
    () => goToSlide(currentSlide + 1),
    [currentSlide, goToSlide]
  );
  const prevSlide = useCallback(
    () => goToSlide(currentSlide - 1),
    [currentSlide, goToSlide]
  );

  const resetProgressBar = useCallback(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transition = "none";
      progressBarRef.current.style.width = "0%";
      void progressBarRef.current.offsetWidth;
      progressBarRef.current.style.transition = `width ${autoPlayDuration}ms linear`;
      progressBarRef.current.style.width = "100%";
    }
  }, [autoPlayDuration]);

  const setupAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
    if (isAutoPlaying) {
      resetProgressBar();
      autoPlayIntervalRef.current = setInterval(nextSlide, autoPlayDuration);
    }
    return () => {
      if (autoPlayIntervalRef.current)
        clearInterval(autoPlayIntervalRef.current);
    };
  }, [isAutoPlaying, nextSlide, resetProgressBar, autoPlayDuration]);

  const toggleAutoPlay = useCallback(
    () => setIsAutoPlaying((prev) => !prev),
    []
  );

  useEffect(() => setupAutoPlay(), [setupAutoPlay, currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStart - clientX;
    if (Math.abs(diff) > 50) {
      // Reduced threshold for mobile
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setIsDragging(false);
  };

  return (
    <div className="px-0 py-0">
      <div
        ref={sliderRef}
        className="relative h-[65vh] sm:h-[35rem] md:h-[calc(100vh-80px)] overflow-hidden bg-neutral-900 rounded-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {/* Main slider content */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${posts[currentSlide]?.blogImage})`,
              }}
              className="w-full h-full bg-cover bg-center bg-no-repeat"
            >
              <div className="flex flex-col h-full justify-end">
                <motion.div
                  className="p-4 sm:p-6 md:p-12 max-w-4xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="inline-block px-2 py-1 text-xs sm:text-sm bg-white/10 backdrop-blur-md text-white font-medium rounded-full mb-3">
                    Featured
                  </span>
                  <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
                    {posts[currentSlide]?.title}
                  </h2>
                  <p className="text-white/80 text-sm sm:text-base md:text-xl mb-4 sm:mb-6 max-w-3xl leading-relaxed line-clamp-2">
                    {posts[currentSlide]?.subtitle}
                  </p>
                  <Link
                    href={`/blog/posts/${posts[currentSlide]?.slug}`}
                    className="group inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 py-2 px-4 sm:py-3 sm:px-6 rounded-full text-sm sm:text-base font-medium transition-all duration-300"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10">
          <div
            ref={progressBarRef}
            className="h-full bg-white/60 transition-width"
            style={{ width: "0%" }}
          />
        </div>

        {/* Side dots navigation - horizontal on mobile */}
        <div className="absolute bottom-2 sm:bottom-auto sm:right-4 sm:top-1/2 sm:-translate-y-1/2 flex sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 justify-center items-center w-full sm:w-auto px-2">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation controls - always visible on mobile */}
        <div className="absolute bottom-6 right-3 sm:bottom-1 sm:left-4 flex items-center space-x-2">
          <button
            onClick={toggleAutoPlay}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={prevSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="text-white/70 font-medium text-xs sm:text-sm">
            <span className="text-white">{currentSlide + 1}</span> /{" "}
            {totalSlides}
          </div>
        </div>

        {/* Slide counter - hidden on mobile */}
        <div className="hidden sm:block absolute top-4 right-4 text-sm font-medium bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
