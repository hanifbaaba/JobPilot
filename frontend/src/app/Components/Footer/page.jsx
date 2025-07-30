import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">JobPilot</h1>
          <ul className="space-y-2">
            <li>
              Call Now: <b className="text-white">+1-202-555-0178</b>
            </li>
            <li>Silicon Valley</li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-white mb-4">Quick Links</h1>
          <ul className="space-y-2">
            <li>
              <Link
                href="/Components/About"
                className="hover:text-white transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Components/ContactPage"
                className="hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-white mb-4">
            <Link
              href="/Components/CustomerSupport"
              className="hover:text-white transition"
            >
              Support
            </Link>
          </h1>
          <ul className="space-y-2">
            <li>
              <Link
                href="/Components/Faqs"
                className="hover:text-white transition"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/Components/PrivacyPolicy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/Components/Terms"
                className="hover:text-white transition"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/Components/Pricing"
                className="hover:text-white transition"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © 2025 JobPilot — Job Portal. All Rights Reserved.
      </div>
    </footer>
  );
}
