import React from "react";
import { CheckCircle } from "lucide-react";

const FeaturePoint = ({ Icon, title, description }) => (
  <div className="flex items-start gap-3 group">
    <Icon className=" h-6 w-6 text-secondary shrink-0 mt-0.5 transition-colors group-hover:text-primary" />
    <div>
      <h3 className="font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const StatBadge = ({ value, label, position, accentColor = false }) => {
  const positionClasses = {
    topLeft: "-top-4 -left-4",
    bottomRight: "bottom-4 right-4"
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${accentColor ? 'bg-secondary text-white' : 'bg-white text-primary'} p-4 rounded-lg shadow-lg max-w-xs transition-transform hover:scale-105`}>
      <p className={`font-bold ${accentColor ? 'text-xl' : ''}`}>{value}</p>
      <p className="text-sm">{label}</p>
    </div>
  );
};

const AboutSection = () => {
  const features = [
    {
      title: "Expert Design Team",
      description: "Our experienced designers create packaging that protects your products and elevates your brand.",
    },
    {
      title: "Sustainable Approach",
      description: "We're committed to minimizing environmental impact with eco-friendly materials and processes.",
    },
    {
      title: "Client-Focused Service",
      description: "We work closely with you to understand your needs and deliver tailored packaging solutions.",
    }
  ];

  const stats = [
    {
      value: "4+ Years",
      label: "Experience in packaging solutions",
      position: "bottomRight"
    },
    {
      value: "500+",
      label: "Satisfied Clients",
      position: "topLeft",
      accentColor: true
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-primary">About Boma Packaging</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Quality Packaging Solutions Since 2010
              </h2>
              
              <p className="text-gray-600">
                At Boma Packaging, we've been providing innovative and sustainable packaging solutions for businesses of all sizes. Our commitment to quality, sustainability, and customer satisfaction has made us a trusted partner for companies across multiple industries.
              </p>
              
              <div className="space-y-4 pt-4">
                {features.map((feature, index) => (
                  <FeaturePoint 
                    key={index}
                    Icon={CheckCircle}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
              
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="btn-secondary inline-block transition-colors hover:bg-primary-dark"
                  aria-label="Learn more about Boma Packaging"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/packaging-warehouse.jpg"
                  alt="Inside view of Boma Packaging's modern warehouse facility with stacked boxes"
                  className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
                  loading="lazy"
                />
              </div>
              
              {stats.map((stat, index) => (
                <StatBadge
                  key={index}
                  value= {stat.value}
                  label={stat.label}
                  position={stat.position}
                  accentColor={stat.accentColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;