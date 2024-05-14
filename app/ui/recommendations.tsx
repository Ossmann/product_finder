'use client';

import Link from 'next/link';
import { use } from 'react';
import { useSearchParams } from 'next/navigation';

// Array of platforms
const platforms = [
    {
        platformValue: "1",
        imagePath: "/CollectionExplorer.png",
        imageTitle: "Online Collection",
        href: "https://www.fluxguide.com/en/collection-explorer/",
        description: "MuseumPlus is the industry standard for Collection Management with state-of-the-art web based curation tools.",
        contact: "office@zetcom.com",
        logo: "/Fluxguide-Logo.svg"
    },
    {
        platformValue: "2",
        imagePath: "/fluxguide_lmw.jpg",
        imageTitle: "Guiding",
        href: "https://www.fluxguide.com/en",
        description: "MuseumPlus is the industry standard for Collection Management with state-of-the-art web based curation tools.",
        contact: "office@zetcom.com",
        logo: "/zetcomLogo.png"
    },
    {
        platformValue: "3",
        imagePath: "/Curator.jpeg",
        imageTitle: "Curator",
        href: "https://ortelia.com/products/ortelia-curator-exhibition-design-software/",
        description: "MuseumPlus is the industry standard for Collection Management with state-of-the-art web based curation tools.",
        contact: "office@zetcom.com",
        logo: "/zetcomLogo.png"
    },
    {
        platformValue: "4",
        imagePath: "/MuseumPlus.png",
        imageTitle: "MuseumPlus - Collection Management",
        href: "https://www.zetcom.com/en/museumplus-en/",
        description: "MuseumPlus is the industry standard for Collection Management with state-of-the-art web based curation tools.",
        contact: "office@zetcom.com",
        logo: "/zetcomLogo.png"
    },
    {
        platformValue: "5",
        imagePath: "/AR.jpeg",
        imageTitle: "Spatial Computing",
        href: "https://www.fluxguide.com/en/explore-new-realities-augmented-virtual-and-mixed-reality/",
        description: "MuseumPlus is the industry standard for Collection Management with state-of-the-art web based curation tools.",
        contact: "office@zetcom.com",
        logo: "/zetcomLogo.png"
    },
    {
        platformValue: "7",
        imagePath: "/MuseumStars.png",
        imageTitle: "Plug and Play",
        href: "https://www.museumstars.com/en/product-english/",
        description: "MuseumPlus is the industry standard for Collection Management with state-of-the-art web based curation tools.",
        contact: "office@zetcom.com",
        logo: "/zetcomLogo.png"
    }
];


    
      
const Recommendations = () => {
    const searchParams = useSearchParams();
    const platformValue = searchParams.get('platform');

    // Filter platforms based on the value of the 'platform' parameter
    const filteredPlatforms = platforms.filter(p => p.platformValue === platformValue);

    return (
        <div className="flex justify-center mt-4">
            {filteredPlatforms.map((platform, index) => (
                <div key={index} className='hover:z-40'>
                    <div className="mx-2 transition ease-in-out delay-150 duration-700 hover:scale-125 transform h-80 w-60">
                        {/* Image */}
                        <div className="border border-orange-500 hover:border-grey-400 rounded-md shadow-[black] shadow-lg hover:shadow-orange-500">
                            <Link target="_blank" href={platform.href}>
                                <img
                                    className="object-cover  rounded-sm"
                                    src={platform.imagePath}
                                    alt={platform.imageTitle}
                                    // width={200}
                                    // height={200}
                                />
                            </Link>
                        </div>
                        <div className='text-nowrap'>{platform.imageTitle}</div>
                        <div className='text-sm font-light'>{platform.description}</div>
                        <div>
                        <img
                                    className="rounded-sm"
                                    src={platform.logo}
                                    // alt={platform.imageTitle}
                                    width={100}
                                />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recommendations;