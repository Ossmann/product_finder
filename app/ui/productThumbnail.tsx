import React from 'next';

interface ProductThumbnailProps {
  imagePaths: string[];
  imageTitles: string[];
}

const ProductThumbnail: React.FC<ProductThumbnailProps> = ({ imagePaths, imageTitles }) => {
  return (
    <div className="flex justify-center mt-4">
      {imagePaths.map((path, index) => (
        <div key={index} className='thumbnail-wrapper transform transition duration-1000 hover:scale-125'>
        <div className="mx-1 w-200 h-200 overflow-hidden relative">
          {/* Image */}
          <img
            src={path}
            alt={`Image ${index + 1}`}
            className="object-cover h-40 w-40"
            width={200}
            height={200}
          />
          <div>{imageTitles[index]}</div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ProductThumbnail;
