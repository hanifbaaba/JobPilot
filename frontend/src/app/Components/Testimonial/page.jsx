// create a card grid for each testimonial
export default function Testimonial() {
  const testimonialCard = [
    { name: "Ben james", description: "description" },
    { name: "Bob ziroll", description: "description" },
    { name: "Per Borgen", description: "description" },
    { name: "Tech Tim", description: "description" },
    { name: "Chris wood", description: "description" },
  ];
  return (
    <section className="px-6 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Testimonials
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonialCard.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {testimonial.name}
            </h3>
            <p className="text-gray-600 text-sm">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
