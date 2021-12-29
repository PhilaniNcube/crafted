/* eslint-disable @next/next/no-img-element */

import About from '../components/Homepage/About';
import Hero from '../components/Homepage/Hero';
import SectionOne from '../components/Homepage/SectionOne';
import Services from '../components/Homepage/Services';
import Footer from '../components/Layout/Footer';
import client from '../lib/contentful';
import GallerySection from '../components/Homepage/GallerySection';

export default function Home({ photos }) {
  return (
    <div className="-z-10">
      <Hero />
      <SectionOne />
      <GallerySection photos={photos} />
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
