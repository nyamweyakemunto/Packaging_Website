import { useState } from 'react';

export const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="relative">
      {/* Main Image */}
      <div 
        className="relative aspect-square overflow-hidden rounded-xl cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <img
          src={mainImage}
          alt="Main product"
          className={`h-full w-full object-cover transition-transform duration-300
            ${isZoomed ? 'scale-110' : 'scale-100'}`}
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className={`aspect-square overflow-hidden rounded-lg border-2 transition-all
              ${mainImage === img ? 'border-blue-600' : 'border-gray-200 hover:border-blue-400'}`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};