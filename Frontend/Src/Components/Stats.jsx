const stats = [
  { id: 1, value: "500+", label: "Happy Clients" },
  { id: 2, value: "10M+", label: "Packages Produced" },
  { id: 3, value: "95%", label: "Recycled Materials" },
  { id: 4, value: "24h", label: "Prototype Turnaround" },
];

export default function Stats() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="p-4">
              <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm md:text-base opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}