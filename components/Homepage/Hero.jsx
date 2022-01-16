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
      </div>
    </div>
  );
};

export default Hero;
