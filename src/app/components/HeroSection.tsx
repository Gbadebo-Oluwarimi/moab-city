"use client";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const carouselData = [
  {
    imageSrc: "/img1.jpg",
    altText: "Business professional with financial interface",
    overlayText: "D Amb Shekinah",
  },
  {
    imageSrc: "/img2.jpg",
    altText: "Financial dashboard",
    overlayText: "D Amb Ifedolapo",
  },
  {
    imageSrc: "/placeholder.svg?height=600&width=400",
    altText: "Mobile banking app",
    overlayText: "Secure mobile transactions",
  },
];
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);
  return (
    <div className="container mx-auto px-4 py-2">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Left Column */}
        <div className="md:col-span-7 space-y-8">
          <h3>A Dynasty Under God's Grace</h3>
          <span className="text-5xl font-normal leading-tight">
            Empowering Businesses with Divine Talent Discovery
          </span>

          <p className="text-gray-600 max-w-lg">
            Delivering Trusted Financial Solutions and Divine Talent Discovery
            for Businesses, Powered by Innovative AI. Pioneers in Our Field,
            Setting the Standard for Excellence
          </p>

          <div className="flex items-center space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-full flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="bg-gray-100 text-black px-6 py-3 rounded-full">
              View Live Demo
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-5 relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselData.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={item.imageSrc || "/placeholder.svg"}
                    alt={item.altText}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    <span className="text-xs font-medium">
                      {item.overlayText}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
