import Image from "next/image";
import RoundedButton from "../app/ui/buttons";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between p-24">

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
      <div className="absolute inset-0 bg-black opacity-30 z-[-1]"></div>

      <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex">

        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          This is a uni project&nbsp;
          <code className="font-bold">In progress</code>
        </p>

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
        <p>WELCOME AUSTRALIA</p>
        <p>Find the right tool to tell your culture story</p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {/* Links */}
      </div>

      {/* Link to start the Product Finder */}
      <div>
        <RoundedButton href="/questions">START</RoundedButton>
      </div>

    </main>
  );
}
