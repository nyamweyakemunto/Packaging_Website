const services = [
  {
    title: "Custom Packaging",
    description: "Tailored solutions designed specifically for your products",
    icon: "📦",
  },
  {
    title: "Eco-Friendly Materials",
    description: "Sustainable options that reduce environmental impact",
    icon: "🌱",
  },
  {
    title: "Fast Turnaround",
    description: "Quick production without compromising quality",
    icon: "⚡",
  },
  {
    title: "Global Shipping",
    description: "Reliable delivery anywhere in the world",
    icon: "🌎",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}