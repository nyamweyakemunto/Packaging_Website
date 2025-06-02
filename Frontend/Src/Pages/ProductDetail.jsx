import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {ProductGallery} from '../components/ProductGallery.jsx';
import {ProductInfo} from '../components/ProductInfo.jsx';
import {ProductTabs} from '../components/ProductTabs.jsx';
import {RelatedProducts} from '../components/RelatedProducts';

export const ProductDetail = () => {
  const { id } = useParams();
  const [selectedVariant, setSelectedVariant] = useState(null);
  
  // Mock product data - in a real app you'd fetch this
  const product = {
    id,
    name: "Eco-Friendly Mailer Box",
    description: "Our sustainable packaging solution made from 100% recycled materials, perfect for e-commerce businesses looking to reduce their environmental impact.",
    price: 2.99,
    variants: [
      { id: 'sm', size: 'Small (6x4x2 in)', price: 2.49 },
      { id: 'md', size: 'Medium (10x8x4 in)', price: 2.99 },
      { id: 'lg', size: 'Large (14x10x6 in)', price: 3.99 },
    ],
    images: [
      '/images/products/box-1.jpg',
      '/images/products/box-2.jpg',
      '/images/products/box-3.jpg',
    ],
    details: "...",
    specifications: "...",
    sustainabilityInfo: "..."
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ProductGallery images={product.images} />
          <ProductInfo 
            product={product}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />
        </div>

        <ProductTabs 
          details={product.details}
          specs={product.specifications}
          sustainability={product.sustainabilityInfo}
        />

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h3>
          <RelatedProducts currentProductId={id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;