export default function Hero() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Find a job that suits your interests and skills.
        </h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ducimus
          pariatur officia quas quam, quidem ipsa eos nihil magnam facilis,
          porro reiciendis quaerat assumenda, eum rerum. Neque quibusdam labore
          ipsum.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Job title, keyword..."
            className="px-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location (city, state...)"
            className="px-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Find Job
          </button>
        </div>
      </div>
    </section>
  );
}
