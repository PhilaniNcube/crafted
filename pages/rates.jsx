import React, { Fragment } from 'react';
import Rates from '../components/Rates/Rates';
import client from '../lib/contentful';

const rates = ({ services }) => {
  return (
    <div className="py-36">
      <h1 className="text-center text-2xl md:text-4xl lg:text-6xl text-gray-600 font-bold">
        Pricing
      </h1>
      <div className="flex flex-wrap justify-around">
        {services.map((service) => {
          return <Rates key={service.sys.id} service={service} />;
        })}
      </div>
    </div>
  );
};

export default rates;

export async function getServerSideProps() {
  const res = await client.getEntries({
    content_type: 'rates',
  });

  const services = await res.items;

  return {
    props: {
      services: services,
    },
  };
}
