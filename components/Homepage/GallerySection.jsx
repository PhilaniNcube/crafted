/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const GallerySection = ({ photos }) => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl leading-5 text-center mb-6 text-gray-600">
        Photo Gallery
      </h2>
      <div className="relative">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3, 1280: 6 }}
        >
          <Masonry>
            {photos.map((image) => {
              return (
                <img
                  key={image.sys.id}
                  className="border-4 border-white"
                  src={`https:${image.fields?.image?.fields?.file.url}`}
                  alt={image.fields.title}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
        <div className="absolute inset-0 h-full w-full flex justify-center items-center">
          <Link href="/gallery" passHref>
            <button className="bg-amber-500 hover:bg-amber-400 text-white text-md md:text-lg text-center font-bold px-6 py-2 rounded-full shadow-md hover:shadow-sm">
              View Full Gallery
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
