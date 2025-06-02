import React from 'react'
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Premium Packaging Solutions</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Sustainable, custom packaging that makes your brand stand out
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get a Quote
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            Our Products
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white"></div>
    </section>
  );
}

export default Hero;