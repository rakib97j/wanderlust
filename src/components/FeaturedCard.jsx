import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { HiCalendarDateRange } from 'react-icons/hi2';

const FeaturedCard = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`); 
    const data = await res.json()

    return (
      <div className="bg-[#8cceda83]">
        <div className="py-28 max-w-7xl mx-auto ">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-5xl">Featured Destinations</h1>
              <p>Handpicked travel experiences for the adventure seekers</p>
            </div>
            <Link href={'/destinations'}>
              <Button
                className={"rounded-sm text-cyan-500 border-cyan-500 "}
                variant="outline"
              >
                ALL DESTINATIONS
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-4 mt-10  gap-4">
            {data.map((data) => (
              <div key={data._id} className=" bg-white  rounded-sm">
                <div className="relative w-full h-56 overflow-hidden rounded-t-sm">
                  <Image
                    src={data.imageUrl}
                    alt={data.destinationName}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h1 className="flex items-center gap-1">
                    <FaLocationDot /> {data.country}
                  </h1>
                  <div className="flex justify-between">
                    <h1>{data.destinationName}</h1>
                    <h1>${data.price}/Person</h1>
                  </div>
                  <h1 className="flex items-center gap-2">
                    {" "}
                    <HiCalendarDateRange />
                    {data.duration}
                  </h1>

                  <Link href={`/destinations/${data._id}`}>
                    <button className="flex  items-center gap-2 text-xl text-accent">
                      <span className="underline">Book Now</span>{" "}
                      <BsArrowUpRight />{" "}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default FeaturedCard;