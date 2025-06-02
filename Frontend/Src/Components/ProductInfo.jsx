import { useState } from 'react';

export const ProductInfo = ({ product, selectedVariant, setSelectedVariant }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart:', {
      productId: product.id,
      variant: selectedVariant,
      quantity
    });
    alert('Added to cart successfully!');
  };

  return (
    <div className="sticky top-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      
      <div className="mb-6">
        <span className="text-2xl font-bold text-gray-800">
          ${selectedVariant ? selectedVariant.price : product.price}
        </span>
        {product.originalPrice && (
          <span className="ml-2 text-gray-400 line-through">
            ${product.originalPrice}
          </span>
        )}
      </div>

      {product.variants && product.variants.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Select Size</h3>
          <div className="grid grid-cols-2 gap-2">
            {product.variants.map(variant => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`p-3 border rounded-md text-center transition-colors
                  ${selectedVariant?.id === variant.id 
                    ? 'border-blue-600 bg-blue-50 text-blue-600' 
                    : 'border-gray-200 hover:border-blue-400'}`}
              >
                {variant.size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mb-6">
        <label className="text-lg font-medium text-gray-800 block mb-2">Quantity</label>
        <div className="flex items-center border border-gray-200 rounded-md w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-gray-600 hover:bg-gray-50 border-r"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, e.target.value))}
            className="w-16 text-center border-none focus:ring-0"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 text-gray-600 hover:bg-gray-50 border-l"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};