import Image from "next/image";
import RoundedButton from "../app/ui/buttons";
import ProductThumbnail from "./ui/productThumbnail";
import {
  ArrowTopRightOnSquareIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function Home() {

  // Array of image paths
  const imagePaths = [
    "/MuseumPlus.png",
    "/MuseumStars.png",
    "/fluxguide_lmw.jpg",
    "/CollectionExplorer.png",
    "/Curator.jpeg",
    "/AR.jpeg",
  ];

  // Array of image paths
  const imageTitles = [
    "Collection Management",
    "Plug & Play",
    "Guiding",
    "Online Collection",
    "Curation",
    "Spatial Computing",
  ];

   // Array of image links
   const hrefs = [
    "https://www.zetcom.com/en/museumplus-en/",
    "https://www.museumstars.com/en/product-english/",
    "https://www.fluxguide.com/en",
    "https://www.fluxguide.com/en/collection-explorer/",
    "https://ortelia.com/products/ortelia-curator-exhibition-design-software/",
    "https://www.fluxguide.com/en/explore-new-realities-augmented-virtual-and-mixed-reality/",
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between p-24">

    {/* Dark Topbar to make logo better visible */}
    <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-black to-transparent">
    </div>

        {/* Background image */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/banner-img1-CSG.png"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Background Image"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>

        <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex">

        {/* CSG LOGO top left */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
              <Image
                src="/logo_CSG.svg"
                alt="CSG Logo"
                className="dark:invert"
                width={200}
                height={76}
                priority
              />
            </a>
          </div>

          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-normal text-black">
              University project - In progress
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="uppercase font-bold text-5xl m-6">
            <p>Welcome Australia</p>
            <div className="mt-2">
              <p>Solutions for every Museum Use Case</p>
            </div>
          </div>
          <div className="text-xl">
            <p>Explore our product categories, use the intelligent product finder or get ideas from our AI consultant.</p>
          </div>
        </div>

        {/* Images of Products */}
        <div className="mb-16 mt-4">
        
        <ProductThumbnail imagePaths={imagePaths} imageTitles={imageTitles} hrefs={hrefs} />
        </div>

      {/* Link to start the Product Finder and AI */}
      <div className="flex items-center space-x-4">
        <div className="animate-pulse hover:animate-none">
          <RoundedButton icon={<AdjustmentsHorizontalIcon className="w-5 h-5" />} href="/questions">
            Start Finder
          </RoundedButton>
        </div>
        
        <div className="opacity-50">
            <RoundedButton icon={<SparklesIcon className="w-5 h-5" />} href="/chatbot">
            AI Consultant
            </RoundedButton>
        </div>
      </div>

      {/* Bottom gradiant */}
      <div className="absolute bottom-0 left-0 w-full h-20">
      <div className="absolute inset-0 bg-gradient-to-t to-transparent">
      </div>
    </div>

    </main>
  );
}


