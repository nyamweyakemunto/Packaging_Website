import React from "react";
import { Package, PackageOpen, Box, ShoppingBag } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Custom Packaging",
      description:
        "Tailored packaging solutions designed to meet your specific product requirements and brand identity.",
      icon: <Package className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Eco-Friendly Options",
      description:
        "Sustainable packaging alternatives that minimize environmental impact without compromising quality.",
      icon: <PackageOpen className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Retail Packaging",
      description:
        "Eye-catching retail packaging that enhances shelf appeal and increases product visibility.",
      icon: <Box className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Shipping Solutions",
      description:
        "Durable and cost-effective shipping packages designed for safe product delivery.",
      icon: <ShoppingBag className="h-10 w-10 text-secondary" />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive packaging solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
