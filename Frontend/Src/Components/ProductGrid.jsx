import { useState } from 'react';
import ProductFilter from './ProductFilter';

const products = [
  {
    id: 1,
    name: "Mailer Boxes",
    category: "Boxes",
    price: "$0.85 - $2.50",
    ecoFriendly: true,
    image: "https://via.placeholder.com/300x200?text=Mailer+Boxes",
  },
  // ... (add category and ecoFriendly to all products)
];

export default function ProductGrid() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilter 
              products={products} 
              setFilteredProducts={setFilteredProducts} 
            />
          </div>
          
          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.price} per unit</p>
                    {product.ecoFriendly && (
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3">
                        Eco-Friendly
                      </span>
                    )}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}