import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { HiCalendarDateRange } from "react-icons/hi2";


const DestinationCard = ({ destination }) => {
  const {_id , destinationName, country, duration, price, imageUrl} = destination;
  return (
    <div className=" bg-white  rounded-xl">
      <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-3">
        <h1 className="flex items-center gap-1">
          <FaLocationDot /> {country}
        </h1>
        <div className="flex justify-between">
          <h1>{destinationName}</h1>
          <h1>${price}/Person</h1>
        </div>
        <h1 className="flex items-center gap-2">
          {" "}
          <HiCalendarDateRange />
          {duration}
        </h1>

        <Link href={`/destinations/${_id}`}>
          <button className="flex  items-center gap-2 text-xl text-accent">
            <span className="underline">Book Now</span> <BsArrowUpRight />{" "}
          </button>
        </Link>
      </div>
    </div>
  );};

export default DestinationCard;
