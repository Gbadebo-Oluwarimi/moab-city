import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className=" ">
          <img src="/logo.png" alt="Cashbank" className="h-14" />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-sm hover:text-gray-600">
            Solutions
            <span className="inline-block ml-1">▾</span>
          </Link>
          <Link href="#" className="text-sm hover:text-gray-600">
            Industries
            <span className="inline-block ml-1">▾</span>
          </Link>
          <Link href="#" className="text-sm hover:text-gray-600">
            Pricing
          </Link>
          <Link href="#" className="text-sm hover:text-gray-600">
            Resources
          </Link>
          <Link href="#" className="text-sm hover:text-gray-600">
            Company
          </Link>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
          Get Started
        </button>
      </div>
    </nav>
  );
}
