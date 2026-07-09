import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          AI Job Board
        </h1>

        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="#" className="hover:text-blue-600">
            Jobs
          </Link>

          <Link href="#" className="hover:text-blue-600">
            Companies
          </Link>

          <Link href="#" className="hover:text-blue-600">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}