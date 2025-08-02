import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between space-x-6">
        <h1 className="text-2xl font-bold text-blue-600">JobPilot</h1>
        <input
          type="search"
          placeholder="Job title, keyword, company"
          className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition">
            Sign in
          </button>
          <Link href="/Pages/AddJobPage">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition">
              Post a Job
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
