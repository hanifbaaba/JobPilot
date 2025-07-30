import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">JobPilot</div>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Pages/JobPage"
              className="hover:text-blue-600 transition"
            >
              Find Job
            </Link>
          </li>
          <li>
            <Link
              href="/Components/Pricing"
              className="hover:text-blue-600 transition"
            >
              Pricing Plans
            </Link>
          </li>
          <li>
            <Link
              href="/Components/CustomerSupport"
              className="hover:text-blue-600 transition"
            >
              Customer Support
            </Link>
          </li>
          <li>
            <Link
              href="/Components/ContactPage"
              className="hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
