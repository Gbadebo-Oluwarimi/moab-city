import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-2">
      <div className="grid md:grid-cols-12 gap-8 ">
        {/* Left Column */}
        <div className="md:col-span-7 space-y-8 py-24">
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
        <div className="md:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/img1.jpg"
              alt="Business professional with financial interface"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            {/* Overlay Cards */}
            {/* <div className="absolute top-1/4 left-4 bg-white p-4 rounded-xl shadow-lg w-48"></div> */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
              <span className="text-xs font-medium">D. Amb Shekina</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
