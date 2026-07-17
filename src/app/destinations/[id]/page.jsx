import DestinationSingleDetailsPage from '@/components/DestinationDetailsPage';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const DestinationDetailsPage =async ({params}) => {
  const token = await auth.api.getToken({
    headers: await headers()
  }) 
  console.log(token);
    const {id} = await params;
    const res = await fetch(
      `http://localhost:5000/destination/${id}` ,{
        headers:{
          authorization : `Bearer ${token}`
        }
      }
    );
    const destinationDetails = await res.json();
    
   
    return (
      <section className="py-28 bg-[#8cceda83]">
        <div className="container mx-auto">
          <h1 className='text-4xl font-bold text-cyan-500'> Destination Details Page</h1>
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