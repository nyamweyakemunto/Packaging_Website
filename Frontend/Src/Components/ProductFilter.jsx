// import { useState } from 'react';

// const ProductFilter = ({ products, setFilteredProducts }) => {
//   // Extract all unique categories from products
//   const allCategories = ['All', ...new Set(products.map(product => product.category))];
  
//   // State for filters
//   const [filters, setFilters] = useState({
//     category: 'All',
//     priceRange: [0, 100],
//     ecoFriendly: false,
//     sortBy: 'default',
//   });

//   // Apply filters
//   const applyFilters = () => {
//     let filtered = [...products];

//     // Category filter
//     if (filters.category !== 'All') {
//       filtered = filtered.filter(product => product.category === filters.category);
//     }

//     // Price range filter
//     filtered = filtered.filter(
//       product => {
//         const price = parseFloat(product.price.replace(/[^0-9.]/g, ''));
//         return price >= filters.priceRange[0] && price <= filters.priceRange[1];
//       }
//     );

//     // Eco-friendly filter
//     if (filters.ecoFriendly) {
//       filtered = filtered.filter(product => product.ecoFriendly);
//     }

//     // Sorting
//     switch (filters.sortBy) {
//       case 'price-low':
//         filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//         break;
//       case 'price-high':
//         filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//         break;
//       case 'name':
//         filtered.sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       default:
//         // Default sorting (original order)
//         break;
//     }

//     setFilteredProducts(filtered);
//   };

//   // Update products when filters change
//   useState(() => {
//     applyFilters();
//   }, [filters]);

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//       <h3 className="text-xl font-semibold mb-4">Filter Products</h3>
      
//       {/* Category Filter */}
//       <div className="mb-6">
//         <label className="block text-gray-700 mb-2">Category</label>
//         <select
//           className="w-full p-2 border rounded"
//           value={filters.category}
//           onChange={(e) => setFilters({...filters, category: e.target.value})}
//         >
//           {allCategories.map((category) => (
//             <option key={category} value={category}>{category}</option>
//           ))}
//         </select>
//       </div>

//       {/* Price Range Filter */}
//       <div className="mb-6">
//         <label className="block text-gray-700 mb-2">
//           Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
//         </label>
//         <div className="flex items-center space-x-4">
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={filters.priceRange[0]}
//             onChange={(e) => setFilters({
//               ...filters,
//               priceRange: [parseInt(e.target.value), filters.priceRange[1]]
//             })}
//             className="w-full"
//           />
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={filters.priceRange[1]}
//             onChange={(e) => setFilters({
//               ...filters,
//               priceRange: [filters.priceRange[0], parseInt(e.target.value)]
//             })}
//             className="w-full"
//           />
//         </div>
//       </div>

//       {/* Eco-Friendly Filter */}
//       <div className="mb-6 flex items-center">
//         <input
//           type="checkbox"
//           id="ecoFriendly"
//           checked={filters.ecoFriendly}
//           onChange={(e) => setFilters({...filters, ecoFriendly: e.target.checked})}
//           className="mr-2"
//         />
//         <label htmlFor="ecoFriendly">Eco-Friendly Only</label>
//       </div>

//       {/* Sorting */}
//       <div className="mb-6">
//         <label className="block text-gray-700 mb-2">Sort By</label>
//         <select
//           className="w-full p-2 border rounded"
//           value={filters.sortBy}
//           onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
//         >
//           <option value="default">Default</option>
//           <option value="price-low">Price: Low to High</option>
//           <option value="price-high">Price: High to Low</option>
//           <option value="name">Name (A-Z)</option>
//         </select>
//       </div>

//       <button
//         onClick={applyFilters}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full"
//       >
//         Apply Filters
//       </button>
//     </div>
//   );
// };

// export default ProductFilter;

import { useState, useEffect } from 'react';

const ProductFilter = ({ products, setFilteredProducts }) => {
  // Extract all unique categories from products
  const allCategories = ['All', ...new Set(products.map(product => product.category))];
  
  // State for filters
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [0, 100],
    ecoFriendly: false,
    sortBy: 'default',
  });

  // Apply filters
  const applyFilters = () => {
    let filtered = [...products];

    // Category filter
    if (filters.category !== 'All') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Price range filter
    filtered = filtered.filter(
      product => {
        const price = parseFloat(product.price.replace(/[^0-9.]/g, ''));
        return price >= filters.priceRange[0] && price <= filters.priceRange[1];
      }
    );

    // Eco-friendly filter
    if (filters.ecoFriendly) {
      filtered = filtered.filter(product => product.ecoFriendly);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Default sorting (original order)
        break;
    }

    setFilteredProducts(filtered);
  };

  // Update products when filters change
  useEffect(() => {
    applyFilters();
  }, [filters, products]); // Add products to dependencies if it can change

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-xl font-semibold mb-4">Filter Products</h3>
      
      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Category</label>
        <select
          className="w-full p-2 border rounded"
          value={filters.category}
          onChange={(e) => setFilters({...filters, category: e.target.value})}
        >
          {allCategories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">
          Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min="0"
            max="100"
            value={filters.priceRange[0]}
            onChange={(e) => setFilters({
              ...filters,
              priceRange: [parseInt(e.target.value), filters.priceRange[1]]
            })}
            className="w-full"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({
              ...filters,
              priceRange: [filters.priceRange[0], parseInt(e.target.value)]
            })}
            className="w-full"
          />
        </div>
      </div>

      {/* Eco-Friendly Filter */}
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          id="ecoFriendly"
          checked={filters.ecoFriendly}
          onChange={(e) => setFilters({...filters, ecoFriendly: e.target.checked})}
          className="mr-2"
        />
        <label htmlFor="ecoFriendly">Eco-Friendly Only</label>
      </div>

      {/* Sorting */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Sort By</label>
        <select
          className="w-full p-2 border rounded"
          value={filters.sortBy}
          onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name (A-Z)</option>
        </select>
      </div>

      {/* You can remove this button if you want filters to apply automatically */}
      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default ProductFilter;