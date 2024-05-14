import Image from "next/image";
import RoundedButton from "../ui/buttons";
import Recommendations from "../ui/recommendations";
import { Suspense } from 'react';

import {
  SparklesIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

export default function Results() {

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between p-24">

    {/* Dark Topbar to make logo better visible */}
    <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-black to-transparent">
    </div>

        {/* Background image */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/banner-white.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Background Image"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-[-1]"></div>

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
        </div>
        

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <p className="uppercase font-bold text-2xl">Your Recommendations</p>
          <p>Have a look at those solutions that could fit your needs.</p>
          <p>Or go back to the start to look for inspiration again.</p>
        </div>

    {/* Embed Recommendation reasults as client component */}
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        <Recommendations/>
      </Suspense>
    </div>


    {/* Link to start the Product Finder and AI */}
    <div className="mt-48">
    <div className="flex items-center space-x-4">
        <div className="">
            <RoundedButton icon={<HomeIcon className="w-5 h-5" />} href="/">
                Back Home
            </RoundedButton>
            </div>
            
            <div className="opacity-50">
            <RoundedButton icon={<SparklesIcon className="w-5 h-5" />} href="/ai">
            AI Consultant
            </RoundedButton>
            </div>
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