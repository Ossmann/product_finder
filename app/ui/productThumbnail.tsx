import React from 'next';

interface ProductThumbnailProps {
  imagePaths: string[];
  imageTitles: string[];
}

const ProductThumbnail: React.FC<ProductThumbnailProps> = ({ imagePaths, imageTitles }) => {
  return (
    <div className="flex justify-center mt-4">
      {imagePaths.map((path, index) => (
        <div key={index} className=''>
        <div className="mx-2 transition ease-in-out delay-150 duration-700 hover:scale-125 transform">
          {/* Image */}
          <div className="border-solid border-2 border-orange-600 shadow-innerCustom">
            <img
              className="object-cover h-80 w-60"
              src={path}
              alt={`Image ${index + 1}`}
              width={200}
              height={200}
            />
          </div>
          <div>{imageTitles[index]}</div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ProductThumbnail;
