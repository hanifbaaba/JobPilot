export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Pay to Post a Job</h1>
      <p className="text-gray-600 mb-10">
        Choose a plan that fits your hiring needs. All plans include job
        listing, candidate management, and visibility boosts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="border rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Basic</h2>
          <p className="text-gray-600 mb-4">1 Job Posting</p>
          <p className="text-3xl font-bold mb-4">$29</p>
          <ul className="text-left mb-6">
            <li>✔ 30-day listing</li>
            <li>✔ Email support</li>
            <li>✘ Featured on homepage</li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Choose Plan
          </button>
        </div>

        {/* Standard Plan */}
        <div className="border rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Standard</h2>
          <p className="text-gray-600 mb-4">3 Job Postings</p>
          <p className="text-3xl font-bold mb-4">$79</p>
          <ul className="text-left mb-6">
            <li>✔ 30-day listings</li>
            <li>✔ Email & chat support</li>
            <li>✔ Featured on homepage</li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Choose Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="border rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Premium</h2>
          <p className="text-gray-600 mb-4">Unlimited Postings</p>
          <p className="text-3xl font-bold mb-4">$199</p>
          <ul className="text-left mb-6">
            <li>✔ Unlimited listings</li>
            <li>✔ Priority support</li>
            <li>✔ Featured and promoted</li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}
