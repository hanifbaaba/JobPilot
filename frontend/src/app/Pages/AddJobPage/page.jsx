import Link from "next/link";

export default function AddJobPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add a Job</h1>

      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Job Title</label>
          <input
            type="text"
            placeholder="Title of job..."
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <input
            type="text"
            placeholder="Description"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Salary</label>
          <input
            type="text"
            placeholder="Salary"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Company Name</label>
          <input
            type="text"
            placeholder="Name of Company"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            placeholder="Location"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <select className="w-full border border-gray-300 rounded px-4 py-2">
            <option>Fullstack Developer</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Javascript Developer</option>
            <option>UI/UX Designer</option>
            <option>Engineering Manager</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Salary Range</label>
          <select className="w-full border border-gray-300 rounded px-4 py-2">
            <option>Prefer not to share</option>
            <option>$10,000 - $25,000 USD</option>
            <option>$25,000 - $50,000 USD</option>
            <option>$50,000 - $80,000 USD</option>
            <option>$80,000 - $100,000 USD</option>
            <option>$100,000 or more USD</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>

      <Link href="/" className="inline-block mt-6">
        <button className="text-blue-600 underline hover:text-blue-800">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
