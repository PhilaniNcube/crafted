/* eslint-disable @next/next/no-img-element */
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useEffect, useRef } from 'react';
import About from '../components/Homepage/About';
import Hero from '../components/Homepage/Hero';
import SectionOne from '../components/Homepage/SectionOne';
import Services from '../components/Homepage/Services';
import Footer from '../components/Layout/Footer';
import client from '../lib/contentful';

export default function Home({ photos }) {
  console.log(photos);

  return (
    <div className="-z-10">
      <Hero />
      <SectionOne />
      <div className="container mx-auto py-10">
        <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl leading-5 text-center mb-6 text-gray-600">
          Photo Gallery
        </h2>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3, 1280: 6 }}
        >
          <Masonry gutter="30">
            {photos.map((image) => {
              return (
                <img
                  key={image.sys.id}
                  src={`https:${image.fields.image.fields.file.url}`}
                  alt={image.fields.title}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <About />
      <Services />

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await client.getEntries({
    content_type: 'photos',
    skip: 4,
    limit: 12,
  });

  const photos = await res.items;

  return {
    props: {
      photos: photos,
    },
  };
}
