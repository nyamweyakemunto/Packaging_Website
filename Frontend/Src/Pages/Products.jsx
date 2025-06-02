import { useState } from 'react';
import  ProductFilter  from '../components/ProductFilter';
import ProductGrid from '../components/ProductGrid';

export const Products = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    material: '',
    size: '',
    sort: 'featured'
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Packaging Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our wide range of packaging solutions
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <ProductFilter 
              filters={filters}
              setFilters={setFilters}
            />
          </div>
          <div className="lg:w-3/4">
            <ProductGrid 
              filters={filters}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;