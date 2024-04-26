import React from 'next';

interface ProductThumbnailProps {
  imagePaths: string[];
}

const ProductThumbnail: React.FC<ProductThumbnailProps> = ({ imagePaths }) => {
  return (
    <div className="flex justify-center mt-4">
      {imagePaths.map((path, index) => (
        <div key={index} className="mx-1 w-200 h-200 overflow-hidden relative">
          {/* Image */}
          <img
            src={path}
            alt={`Image ${index + 1}`}
            className="object-cover h-40 w-40"
            width={200}
            height={200}
          />
          {/* Animated border */}
          <div className="absolute inset-0 border-orange-500 border-solid border-4 rounded-lg animate-border" />
        </div>
      ))}
    </div>
  );
};

export default ProductThumbnail;
