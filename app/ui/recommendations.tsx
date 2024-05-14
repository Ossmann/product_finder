'use client';

import Link from 'next/link';
import { use } from 'react';
import { useSearchParams } from 'next/navigation';

  const Recommendations = () => {
    useSearchParams();
    const searchParams = useSearchParams();
    console.log(searchParams.get('platform'));

    return (
      <div>
        <h1>This is a test component</h1>
        <p>You can replace this content with your own!</p>
      </div>
    );
  };
  
  export default Recommendations;