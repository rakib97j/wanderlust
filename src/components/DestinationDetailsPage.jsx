import React from 'react';

import Image from 'next/image';
import { Button } from '@heroui/react';

import { EditModal } from './EditModal';

const DestinationSingleDetailsPage = ({ destinationDetails }) => {
  const {
    destinationName,
    departureDate,
    duration,
    price,
    description,
    imageUrl,
    category,
    country,
  } = destinationDetails;
  return (
    <div className="bg-[#8cceda60] p-2 rounded-lg ">
      <section className="max-w-7xl mx-auto px-4 py-7">
        <div className='pb-1.5 flex justify-end gap-2'>
          <EditModal destinationDetails={destinationDetails}/>
          <Button variant='danger-soft'>  Delete</Button>
        </div>
        <div className="bg-[#ffffffab] dark:bg-zinc-900 rounded-3xl shadow-xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-[450px]">
            <Image
              src={imageUrl}
              alt={destinationName}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-8 text-white">
                <span className="bg-emerald-500 px-4 py-1 rounded-full text-sm">
                  {category}
                </span>

                <h1 className="text-5xl font-bold mt-4">{destinationName}</h1>

                <p className="text-lg mt-2">📍 {country}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 bg-[#8cceda88]">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-2xl p-6 text-center">
                <p className="text-gray-500">Price</p>
                <h2 className="text-3xl font-bold text-emerald-600">
                  ${price}
                </h2>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <p className="text-gray-500">Duration</p>
                <h2 className="text-3xl font-bold">{duration}</h2>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <p className="text-gray-500">Departure</p>
                <h2 className="text-xl font-bold">{departureDate}</h2>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-4">About This Tour</h2>

              <p className="text-gray-600 dark:text-gray-300 leading-8">
                {description}
              </p>
            </div>

            <button className="mt-10 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl text-lg font-semibold transition">
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationSingleDetailsPage;