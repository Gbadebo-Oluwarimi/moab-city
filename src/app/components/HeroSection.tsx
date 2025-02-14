import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Left Column */}
        <div className="md:col-span-7 space-y-8">
          <h1 className="text-5xl font-normal leading-tight">
            Reliable Financial Solutions for Business
          </h1>

          <p className="text-gray-600 max-w-lg">
            Cashbank provides reliable financial services for various business
            needs powered by the latest AI. We are pioneers in this service
            field, and the best among others.
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

          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <div className="text-4xl font-medium">20+</div>
              <p className="text-sm text-gray-600 mt-2">
                Multinational businesses have used Cashbank
              </p>
            </div>
            <div>
              <div className="text-4xl font-medium">4K+</div>
              <p className="text-sm text-gray-600 mt-2">
                Daily transactions from around the world
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src=""
              alt="Business professional with financial interface"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            {/* Overlay Cards */}
            <div className="absolute top-1/4 left-4 bg-white p-4 rounded-xl shadow-lg w-48">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">Today's orders</div>
                  <div className="text-xl font-medium">12,891</div>
                </div>
                <div className="text-green-500">+31%</div>
              </div>
            </div>
            <div className="absolute top-1/2 left-4 bg-white p-4 rounded-xl shadow-lg w-48">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">Avg. order value</div>
                  <div className="text-xl font-medium">$431,876</div>
                </div>
                <div className="text-red-500">+2%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
