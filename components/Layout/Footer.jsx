/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Footer = () => {
  return (
    <footer className="px-12 py-16 dark:bg-coolGray-800 dark:text-coolGray-400">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 h-12">
            <img src="/images/logo.png" alt="" className="h-12" />
          </div>
        
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
