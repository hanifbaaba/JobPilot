import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-50 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8">Phone: +1 (202) 555-0178</p>

      <div className="mb-4">
        <p className="text-gray-500">Or email us at:</p>
        <a
          href="mailto:support@example.com"
          className="text-blue-600 hover:underline"
        >
          support@example.com
        </a>
      </div>

      <Link href="/">
        <button className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          ← Back to Home
        </button>
      </Link>
    </div>
  );
}
