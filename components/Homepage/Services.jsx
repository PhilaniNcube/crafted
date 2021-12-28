import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-700 p-4 md:p-16" id="services">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div
          className="text-center bg-center bg-cover bg-no-repeat bg-blend-overlay bg-slate-600 text-white font-bold text-sm md:text-lg lg:text-xl flex justify-center items-center h-[250px]"
          style={{ backgroundImage: 'url(/images/wedding.jpg)' }}
        >
          Weddings
        </div>
        <div
          className="text-center bg-center bg-cover bg-no-repeat bg-blend-overlay bg-slate-600 text-white font-bold text-sm md:text-lg lg:text-xl flex justify-center items-center h-[250px]"
          style={{ backgroundImage: 'url(/images/engagements.jpg)' }}
        >
          Engagements
        </div>
        <div
          className="text-center bg-center bg-cover bg-no-repeat bg-blend-overlay bg-slate-600 text-white font-bold text-sm md:text-lg lg:text-xl flex justify-center items-center h-[250px]"
          style={{ backgroundImage: 'url(/images/portraits.jpg)' }}
        >
          Portraiture
        </div>
        <div
          className="text-center bg-center bg-cover bg-no-repeat bg-blend-overlay bg-slate-600 text-white font-bold text-sm md:text-lg lg:text-xl flex justify-center items-center h-[250px]"
          style={{ backgroundImage: 'url(/images/conference.jpg)' }}
        >
          Business Events
        </div>
        <div
          className="text-center bg-center bg-cover bg-no-repeat bg-blend-overlay bg-slate-600 text-white font-bold text-sm md:text-lg lg:text-xl flex justify-center items-center h-[250px]"
          style={{ backgroundImage: 'url(/images/events.jpg)' }}
        >
          Special Events
        </div>
        <div
          className="text-center bg-center bg-cover bg-no-repeat bg-blend-overlay bg-slate-600 text-white font-bold text-sm md:text-lg lg:text-xl flex justify-center items-center h-[250px]"
          style={{ backgroundImage: 'url(/images/gown.jpg)' }}
        >
          Matric Farewells
        </div>
        <div
          className="text-center bg-center bg-cover bg-no-repeat bg-blend-overlay bg-slate-600 text-white font-bold text-sm md:text-lg lg:text-xl flex justify-center items-center h-[250px]"
          style={{ backgroundImage: 'url(/images/anniversary.jpg)' }}
        >
          Anniversaries
        </div>
        <div
          className="text-center bg-center bg-cover bg-no-repeat bg-blend-overlay bg-slate-600 text-white font-bold text-sm md:text-lg lg:text-xl flex justify-center items-center h-[250px]"
          style={{ backgroundImage: 'url(/images/products.jpg)' }}
        >
          Product Photography
        </div>
      </div>
    </div>
  );
};

export default Services;
