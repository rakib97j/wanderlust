import DestinationSingleDetailsPage from '@/components/DestinationDetailsPage';
import React from 'react';

const DestinationDetailsPage =async ({params}) => {
    const {id} = await params;
    const res = await fetch(
      `http://localhost:5000/destination/${id}`
    );
    const destinationDetails = await res.json();
    
   
    return (
      <section className="py-28 bg-[#8cceda83]">
        <div className="container mx-auto">
          Destination Details Page
          <div>
            <DestinationSingleDetailsPage
              destinationDetails={destinationDetails}
              key={id}
            />
          </div>
        </div>
      </section>
    );
};

export default DestinationDetailsPage;