import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-black rounded-full" />
          <span className="text-xl font-medium">Cashbank</span>
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

        <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
          Get Started
        </button>
      </div>
    </nav>
  );
}
