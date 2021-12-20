/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';

const SectionOne = () => {
  return (
    <Fragment>
      <div className="max-w-7xl mx-auto py-10 flex items-center justify-center">
        <img className="h-24 md:h-32" src="/images/logo.png" alt="logo" />
      </div>
      <div className="grid grid-cols-3 gap-1">
        <img className="" alt="" src="/images/lorra-3.jpg" />
        <img className="" alt="" src="/images/wedding.jpg" />
        <img className="" alt="" src="/images/beach.jpg" />
      </div>
      <div className="max-w-7xl mx-auto py-8 grid grid-cols-5 text-center text-gray-600">
        <div className="flex flex-col justify-center item-center h-40 border-r-2 border-r-black">
          <p className="font-bold text-6xl">1.</p>
          <p className="font-light text-xs">Creativity On Set</p>
        </div>
        <div className="flex flex-col justify-center item-center h-40 border-r-2 border-r-black">
          <p className="font-bold text-6xl">2.</p>
          <p className="font-light text-xs">Professionalism</p>
        </div>
        <div className="flex flex-col justify-center item-center h-40 border-r-2 border-r-black">
          <p className="font-bold text-6xl">3.</p>
          <p className="font-light text-xs">
            Great sense of humour and easy to work with
          </p>
        </div>
        <div className="flex flex-col justify-center item-center h-40 border-r-2 border-r-black">
          <p className="font-bold text-6xl">4.</p>
          <p className="font-light text-xs">
            Punctual with excellent customer service
          </p>
        </div>
        <div className="flex flex-col justify-center item-center h-40">
          <p className="font-bold text-6xl">5.</p>
          <p className="font-light text-xs">Unique touch</p>
        </div>
      </div>
    </Fragment>
  );
};

export default SectionOne;
