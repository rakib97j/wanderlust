import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationsPage = async () => {
    const res = await fetch("http://localhost:5000/destination");
    const destinationsData = await res.json()
    return (
      <div className="py-28 bg-[#8cceda83] ">
        <div className="container mx-auto ">
          <h1 className='text-2xl font-bold'>All Destination {destinationsData.length}</h1>
          <div className='grid md:grid-cols-3 gap-5 p-6 bg-[#8cceda60] rounded-2xl '>
            {destinationsData.map((destination) => (
              <DestinationCard key={destination._id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default DestinationsPage;