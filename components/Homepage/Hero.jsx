import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div
      className="-z-10 bg-no-repeat bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(/images/banner.jpg)` }}
    >
      <div className="max-w-7xl mx-auto h-screen flex flex-col items-center justify-center">
        <h1 className="font-semibold text-white text-center text-2xl md:text-6xl">
          Photographer based in <br></br> Gqeberha, South Africa{' '}
        </h1>
<<<<<<< HEAD
=======
{/* <Link href="https://wa.me/27783079194" passHref>
          <button
            type="button"
            className="mt-4 bg-amber-400 text-white px-8 py-2 text-center font-medium rounded-full"
          >
            Learn More
          </button>
        </Link> */}
>>>>>>> c88c59fa66d4f466a6abd71947a87f78a2275ff2
      </div>
    </div>
  );
};

export default Hero;
