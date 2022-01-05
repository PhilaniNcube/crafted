/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import client from '../lib/contentful';

const gallery = ({ photos, page, total, perPage }) => {
  const lastPage = Math.ceil(total / perPage) + 1;

  return (
    <div className="container mx-auto py-24 ">
      <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl leading-5 text-center mb-6 text-gray-600">
        Photo Gallery
      </h2>
      <div className="relative">
        <div className="w-full flex justify-between py-4">
          {page > 1 && (
            <Link href={`/gallery?page=${page - 1}`} passHref>
              <button className="mx-2 my-2 bg-amber-500 font-medium transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-6 py-2 text-xs">
                Previous
              </button>
            </Link>
          )}

          {page < lastPage && (
            <Link href={`/gallery?page=${page + 1}`} passHref>
              <button className="mx-2 my-2 bg-amber-500 font-medium transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-6 py-2 text-xs">
                Next
              </button>
            </Link>
          )}
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3, 1280: 4 }}
        >
          <Masonry gutter="30">
            {photos.map((image) => {
              return (
                <img
                  key={image.sys.id}
                  src={`https:${image.fields?.image?.fields?.file?.url}`}
                  alt={image.fields.title}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default gallery;

export async function getServerSideProps({ query: { page = 1 } }) {
  const perPage = 12;
  const start = +page === 1 ? 0 : (+page - 1) * perPage;

  const res = await client.getEntries({
    content_type: 'photos',
    limit: perPage,
    skip: start,
  });

  const photos = await res.items;

  const total = photos.length;

  return {
    props: {
      photos: photos,
      page: +page,
      total,
      perPage,
    },
  };
}
