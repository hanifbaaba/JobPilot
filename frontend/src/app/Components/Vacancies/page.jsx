import Link from "next/link";
export default function Vacancies() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Most Popular Vacancies
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Fullstack Developer
            </h2>
            <p className="text-gray-600">1,576 open positions</p>
          </li>

          <li className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Frontend Developer
            </h2>
            <p className="text-gray-600">45,904 open positions</p>
          </li>

          <li className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Backend Developer
            </h2>
            <p className="text-gray-600">74,857 open positions</p>
          </li>

          <li className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Javascript Developer
            </h2>
            <p className="text-gray-600">61,319 open positions</p>
          </li>

          <li className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              UI/UX Designer
            </h2>
            <p className="text-gray-600">50,364 open positions</p>
          </li>

          <li className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Engineering Manager
            </h2>
            <p className="text-gray-600">3 open positions</p>
          </li>
        </ul>
      </div>
      {/* <Link href="/">
        <button className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          ← Back to Home
        </button>
      </Link> */}
    </section>
  );
}
