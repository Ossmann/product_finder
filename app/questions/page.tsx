import Form from '@/app/ui/createSearchProfile-form';
import Image from "next/image";

// import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
 
export default async function Page() {

  return (
    <main>
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

        <div className='text-center bg-black'>
        Select your preferences to get ideal recommendations for your museum.
      </div>
        
       {/* Dark Topbar to make logo better visible
    <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black to-transparent">
    </div> */}

      
      
      <Form />
    </main>
  );
}