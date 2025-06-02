import Hero from '../components/Hero';
import Services from '../components/Services';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';
import React from 'react'
export const Home = () => {
  return (
    <div className="pt-24">
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We offer comprehensive packaging solutions tailored to your needs
          </p>
          <Services />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Featured Products</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            High-quality packaging solutions for various industries
          </p>
          <ProductGrid limit={4} />
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </section>
    </div>
  );
};

export default Home;