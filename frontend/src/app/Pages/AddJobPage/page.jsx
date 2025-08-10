"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function AddJobPage() {
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const jobSubmit = (event) => {
    event.preventDeafault();
  };
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add a Job</h1>

      <form className="space-y-4" onSubmit={jobSubmit}>
        <div>
          <label className="block font-medium mb-1">Job Title</label>
          <input
            type="text"
            placeholder="Title of job..."
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={(e) => setJobTitle(e.target.value)}
            value={jobTitle}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <input
            type="text"
            placeholder="Description"
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Salary</label>
          <input
            type="text"
            placeholder="Salary"
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={(e) => setSalary(e.target.value)}
            value={salary}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Company Name</label>
          <input
            type="text"
            placeholder="Name of Company"
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            placeholder="Location"
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option>Fullstack Developer</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Javascript Developer</option>
            <option>UI/UX Designer</option>
            <option>Engineering Manager</option>
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
