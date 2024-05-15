import React from 'next';
import Link from 'next/link';

interface ProductThumbnailProps {
  imagePaths: string[];
  imageTitles: string[];
  hrefs: string[];
}

const ProductThumbnail: React.FC<ProductThumbnailProps> = ({ imagePaths, imageTitles, hrefs }) => {
  return (
    <div className="flex justify-center mt-4">
      {imagePaths.map((path, index) => (
        <div key={index} className='hover:z-40'>
        <div className="mx-2 transition ease-in-out delay-150 duration-700 hover:scale-125 transform">
          {/* Image */}
          <div className="border-8 border-white border-opacity-25 rounded-md shadow-black shadow-xl transition ease-in-out delay-150 duration-700 hover:border-orange-500">
            <Link target="_blank" href={hrefs[index]}>
              <img
                className="object-cover h-80 w-60 rounded-sm"
                src={path}
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div>{imageTitles[index]}</div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ProductThumbnail;
