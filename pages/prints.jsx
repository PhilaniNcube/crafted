/* eslint-disable @next/next/no-img-element */
import React, { useState, Fragment } from 'react';
import client from '../lib/contentful';

export default function prints({ prints }) {
  return (
    <Fragment>
      <div className="w-full flex  items-center justify-center">
        <div className="xl:w-2/5 md:w-9/12 px-4 flex flex-col items-center justify-center py-20">
          <h1 className="lg:text-4xl md:text-2xl text-xl font-bold lg:leading-[150%] md:leading-[150%] leading-[150%] text-center text-gray-800">
            Buy Fully Framed Prints
          </h1>
          <p className="text-base leading-6 mt-4 text-center">
            Available in different sizes from A0 to A3.
            <span className="font-bold block">
              Delivery nationwide from R150.
            </span>
          </p>
          <div className="sm:flex items-center md:justify-center mt-16 bg-amber-200 py-4 px-5 rounded-md shadow-md shadow-amber-200">
            <div className="flex items-start md:border-r border-gray-200 pr-6 flex-shrink-0">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  width={12}
                  height={10}
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3293 0.623535C11.5371 0.805376 11.5581 1.12126 11.3763 1.32908L4.37629 9.32908C4.28516 9.43322 4.15495 9.49494 4.01664 9.49955C3.87833 9.50415 3.7443 9.45123 3.64645 9.35338L0.646447 6.35338C0.451184 6.15811 0.451184 5.84153 0.646447 5.64627C0.841709 5.45101 1.15829 5.45101 1.35355 5.64627L3.97564 8.26836L10.6237 0.670571C10.8056 0.462753 11.1214 0.441694 11.3293 0.623535Z"
                    fill="#2563EB"
                  />
                </svg>
              </div>
              <div className="flex items-start flex-col ml-4">
                <p className="lg:text-xl text-base font-semibold leading-5 text-center text-gray-800">
                  R950
                </p>
                <p className="text-sm leading-none text-center text-gray-800 mt-2">
                  Size: A0
                </p>
              </div>
            </div>
            <div className="flex items-start md:border-r border-gray-200 md:px-6 sm:mt-0 mt-6 flex-shrink-0">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  width={12}
                  height={10}
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3293 0.623535C11.5371 0.805376 11.5581 1.12126 11.3763 1.32908L4.37629 9.32908C4.28516 9.43322 4.15495 9.49494 4.01664 9.49955C3.87833 9.50415 3.7443 9.45123 3.64645 9.35338L0.646447 6.35338C0.451184 6.15811 0.451184 5.84153 0.646447 5.64627C0.841709 5.45101 1.15829 5.45101 1.35355 5.64627L3.97564 8.26836L10.6237 0.670571C10.8056 0.462753 11.1214 0.441694 11.3293 0.623535Z"
                    fill="#2563EB"
                  />
                </svg>
              </div>
              <div className="flex items-start flex-col ml-4">
                <p className="lg:text-xl text-base font-semibold leading-5 text-center text-gray-800">
                  R850
                </p>
                <p className="text-sm leading-none text-center text-gray-800 mt-2">
                  Size: A1
                </p>
              </div>
            </div>
            <div className="flex items-start md:border-r border-gray-200 md:px-6 sm:mt-0 mt-6 flex-shrink-0">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  width={12}
                  height={10}
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3293 0.623535C11.5371 0.805376 11.5581 1.12126 11.3763 1.32908L4.37629 9.32908C4.28516 9.43322 4.15495 9.49494 4.01664 9.49955C3.87833 9.50415 3.7443 9.45123 3.64645 9.35338L0.646447 6.35338C0.451184 6.15811 0.451184 5.84153 0.646447 5.64627C0.841709 5.45101 1.15829 5.45101 1.35355 5.64627L3.97564 8.26836L10.6237 0.670571C10.8056 0.462753 11.1214 0.441694 11.3293 0.623535Z"
                    fill="#2563EB"
                  />
                </svg>
              </div>
              <div className="flex items-start flex-col ml-4">
                <p className="lg:text-xl text-base font-semibold leading-5 text-center text-gray-800">
                  R750
                </p>
                <p className="text-sm leading-none text-center text-gray-800 mt-2">
                  Size: A2
                </p>
              </div>
            </div>
            <div className="flex items-start md:px-6 sm:mt-0 mt-6 flex-shrink-0">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  width={12}
                  height={10}
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3293 0.623535C11.5371 0.805376 11.5581 1.12126 11.3763 1.32908L4.37629 9.32908C4.28516 9.43322 4.15495 9.49494 4.01664 9.49955C3.87833 9.50415 3.7443 9.45123 3.64645 9.35338L0.646447 6.35338C0.451184 6.15811 0.451184 5.84153 0.646447 5.64627C0.841709 5.45101 1.15829 5.45101 1.35355 5.64627L3.97564 8.26836L10.6237 0.670571C10.8056 0.462753 11.1214 0.441694 11.3293 0.623535Z"
                    fill="#2563EB"
                  />
                </svg>
              </div>
              <div className="flex items-start flex-col ml-4">
                <p className="lg:text-xl text-base font-semibold leading-5 text-center text-gray-800">
                  R650
                </p>
                <p className="text-sm leading-none text-center text-gray-800 mt-2">
                  Size: A3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0">
        {prints.map((print) => {
          return (
            <Fragment key={print.sys.id}>
              <div className="flex justify-center py-8 sm:px-6 px-4">
                <div className="max-w-sm w-full relative rounded shadow bg-white dark:bg-gray-800">
                  <div className="absolute m-4 top-0 right-0">
                    <div className="flex items-center justify-center flex-1 h-full bg-gradient-to-tl from-yellow-300 to-red-400 shadow-inner rounded">
                      <p className="sm:text-lg text-base py-2 px-4 font-semibold leading-5 text-center text-white">
                        {print.fields.name}
                      </p>
                    </div>
                  </div>
                  <img
                    src={`http:${print.fields.image.fields.file.url}`}
                    alt="protest"
                    className="w-full aspect-video object-cover"
                  />
                  <div className="py-6 px-6 flex md:items-center justify-between">
                    <div>
                      <p className="sm:text-lg text-base font-semibold leading-5 text-gray-800 dark:text-gray-100">
                        {print.fields.name}
                      </p>
                      <p className="sm:text-base text-sm leading-4 pt-3 text-gray-500 dark:text-gray-400">
                        Print Available for Sale
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}

export async function getServerSideProps() {
  const res = await client.getEntries({
    content_type: 'prints',
  });

  const prints = await res.items;

  return {
    props: {
      prints: prints,
    },
  };
}
