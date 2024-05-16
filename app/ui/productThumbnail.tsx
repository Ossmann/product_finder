import React from 'next';
import Link from 'next/link';
import {
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';


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
          <div className="relative border-4 border-white border-opacity-25 rounded-md shadow-black shadow-xl transition ease-in-out delay-150 duration-700 hover:border-orange-500 group">
            <Link target="_blank" href={hrefs[index]}>
              <img
                className="object-cover h-80 w-60 rounded-sm"
                src={path}
                width={200}
                height={200}
              />
              <ArrowTopRightOnSquareIcon className="absolute bottom-2 left-2 h-4 w-4 text-orange-500 opacity-0 transition-opacity ease-in-out delay-150 duration-700 group-hover:opacity-100" />
            </Link>
          </div>
          <div className="absolute">{imageTitles[index]}</div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ProductThumbnail;
