import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RelatedProducts = ({ currentProductId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual API call
  const mockProducts = [
    {
      id: 1,
      name: "Cardboard Shipping Boxes",
      price: 1.99,
      category: "Shipping",
      image: "/images/products/box-1.jpg",
      isEco: true
    },
    {
      id: 2,
      name: "Custom Printed Mailers",
      price: 0.99,
      category: "Mailers",
      image: "/images/products/box-2.jpg",
      isEco: false
    },
    {
      id: 3,
      name: "Recycled Poly Bags",
      price: 0.49,
      category: "Bags",
      image: "/images/products/box-3.jpg",
      isEco: true
    },
    {
      id: 4,
      name: "Bubble Mailers",
      price: 1.49,
      category: "Mailers",
      image: "/images/products/box-4.jpg",
      isEco: false
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Filter out current product and get 4 random products
      const filtered = mockProducts
        .filter(product => product.id !== currentProductId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
      
      setRelatedProducts(filtered);
      setLoading(false);
    }, 500);
  }, [currentProductId]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-100 h-64 rounded-lg"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {relatedProducts.map(product => (
        <div key={product.id} className="group relative">
          <Link 
            to={`/products/${product.id}`} 
            className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square mb-4 overflow-hidden rounded-lg relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              {product.isEco && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Eco-Friendly
                </span>
              )}
            </div>
            
            <h3 className="text-gray-800 font-medium mb-1 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-lg font-bold text-gray-800">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </Link>
          
          <button className="absolute bottom-16 right-4 bg-white/90 px-3 py-1.5 rounded-full text-sm shadow-sm hover:bg-white transition-colors">
            Quick View
          </button>
        </div>
      ))}
    </div>
  );
};

RelatedProducts.propTypes = {
  currentProductId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};