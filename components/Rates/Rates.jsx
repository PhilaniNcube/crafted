/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';

export default function Rates({ service }) {
  return (
    <div>
      <div className="flex justify-center py-12 px-2 sm:px-6">
        <div className="max-w-sm rounded overflow-hidden relative">
          <img
            className="w-full min-h-[450px] object-cover"
            src={`http:${service.fields.image.fields.file.url}`}
            alt=""
          />
          <div className="absolute bottom-0 left-0 right-0 px-6 pt-3 pb-7 bg-slate-700 bg-opacity-80">
            <p className="text-xl font-bold leading-6 text-white sm:w-11/12">
              Service:{' '}
              <span className="font-light">{service.fields.service}</span>
            </p>
            <p className="text-lg py-1 font-light leading-4 text-white">
              {service.fields.deliverables}
            </p>

            <p className="text-lg py-1 font-light leading-4 text-white">
              <span className="font-medium">Delivered in:</span>{' '}
              {service.fields.deliveryTime}
            </p>
            <div className="mt-5 flex justify-between items-center">
              <div className="flex items-center text-white sm:justify-end">
                <p className="text-lg font-semibold leading-4 text-white">
                  <span>R{service.fields.thirtyMinuteRate}</span>/30 min
                </p>
              </div>
              <div className="flex items-center sm:justify-end text-white ml-6">
                <p className="text-lg font-semibold leading-4 text-right text-white">
                  <span>R{service.fields.hourlyRate}</span>/Hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
