"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoplayInterval?: number;
}

export default function ImageCarousel({
  images,
  autoplayInterval = 5000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplayInterval, images.length]);

  return (
    <div className="relative w-full h-full">
      {/* Main image container with pattern overlay */}
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={
                image.src ||
                "/placeholder.svg?height=800&width=1200&query=agency"
              }
              alt={image.alt || "Insertech digital agency showcase image"}
              fill
              className="object-cover"
              priority={index === 0} // Add priority for the first image
              sizes="(max-width: 768px) 100vw, 50vw"
              loading={index === 0 ? "eager" : "lazy"} // Eager load the first image
            />
          </div>
        ))}

        {/* Pattern overlay */}
        <div className="absolute bottom-0 right-0 grid grid-cols-5 gap-2 p-4 z-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i % 2 === 0 ? "bg-blue-500" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5 text-gray-700" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-20"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5 text-gray-700" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-500 w-4" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
