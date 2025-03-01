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
  const autoPlayDuration = 6000; // 6 seconds per slide

  // Handle slide navigation
  const goToSlide = useCallback(
    (index: number) => {
      // Ensure index is within bounds
      const newIndex = ((index % totalSlides) + totalSlides) % totalSlides;
      setCurrentSlide(newIndex);
      resetProgressBar();
    },
    [totalSlides]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Progress bar animation
  const resetProgressBar = useCallback(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transition = "none";
      progressBarRef.current.style.width = "0%";
      // Force reflow
      void progressBarRef.current.offsetWidth;
      progressBarRef.current.style.transition = `width ${autoPlayDuration}ms linear`;
      progressBarRef.current.style.width = "100%";
    }
  }, [autoPlayDuration]);

  // Set up autoplay
  const setupAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }

    if (isAutoPlaying) {
      resetProgressBar();
      autoPlayIntervalRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayDuration);
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide, resetProgressBar, autoPlayDuration]);

  // Toggle autoplay
  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev);
  }, []);

  // Set up autoplay effect
  useEffect(() => {
    return setupAutoPlay();
  }, [setupAutoPlay, currentSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  // Mouse wheel navigation (optional)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sliderRef.current || !sliderRef.current.contains(e.target as Node))
        return;

      // Debounce wheel events
      if (e.deltaY > 0) {
        nextSlide();
      } else if (e.deltaY < 0) {
        prevSlide();
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("wheel", handleWheel, { passive: true });
    }

    return () => {
      if (slider) {
        slider.removeEventListener("wheel", handleWheel);
      }
    };
  }, [nextSlide, prevSlide]);

  // Drag functionality
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);

    // Get client X based on event type
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;

    setDragStart(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    // Get client X based on event type
    const clientX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;

    const diff = dragStart - clientX;

    // Change slide if drag is significant
    if (Math.abs(diff) > 100) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setIsDragging(false);
  };

  return (
    <div className="px-0 md:px-0 lg:px-0 py-0">
      <div
        ref={sliderRef}
        className="relative h-[35rem] md:h-[calc(100vh-80px)] overflow-hidden bg-neutral-900 rounded-none md:rounded-xl"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={(e) => isDragging && e.preventDefault()}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {/* Main slider content */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${posts[currentSlide]?.blogImage})`,
              }}
              className="w-full h-full bg-cover bg-center bg-no-repeat"
            >
              <div className="flex flex-col h-full justify-end">
                <motion.div
                  className="p-6 md:p-12 max-w-4xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full mb-4">
                    Featured
                  </span>
                  <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                    {posts[currentSlide]?.title}
                  </h2>
                  <p className="text-white/80 text-base md:text-xl mb-6 max-w-3xl leading-relaxed">
                    {posts[currentSlide]?.subtitle}
                  </p>
                  <Link
                    href={`/blog/posts/${posts[currentSlide]?.slug}`}
                    className="group inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 py-3 px-6 rounded-full font-medium transition-all duration-300"
                  >
                    <span>Read Article</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <div
            ref={progressBarRef}
            className="h-full bg-white/60 transition-width"
            style={{ width: "0%" }}
          />
        </div>

        {/* Side dots navigation */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation controls - show on hover */}
        <div
          className={`absolute bottom-6 left-6 flex items-center space-x-3 transition-opacity duration-300 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={toggleAutoPlay}
            className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-white/70 font-medium text-sm">
            <span className="text-white">{currentSlide + 1}</span>
            <span> / {totalSlides}</span>
          </div>
        </div>

        {/* Slide counter */}
        <div className="absolute top-6 right-6 text-sm font-medium bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
