import { Link } from 'react-router-dom';

const ProductCard = ({ product = {
  id: '1',
  image: 'https://via.placeholder.com/300',
  name: 'Sample Product',
  category: 'Sample Category',
  description: 'This is a sample product description for testing purposes.',
  price: 19.99,
  isEco: true
} }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <Link to={`/products/${product.id}`} className="block flex-grow">
        <div className="relative pb-[75%] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="absolute h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {product.isEco && (
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Eco-Friendly
            </span>
          )}
        </div>

        <div className="p-4 flex-grow">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2 hover:text-blue-600">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>

      <div className="p-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-800">
            ${product.price.toFixed(2)}
          </span>
          <button 
            className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              console.log("Quick view clicked for", product.name);
            }}
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;