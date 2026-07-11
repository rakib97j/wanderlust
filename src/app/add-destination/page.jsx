import AddDestinationForm from '@/components/AddDestinationForm';
import { Card } from '@heroui/react';
import React from 'react';

const AddDestinationPage = () => {
    return (
      <div className="py-28 px-6 bg-[#8cceda83]  ">
        <h1 className="text-2xl  ml-20 font-bold p-3.5">
          Add Destination
        </h1>
        <Card className="w-2xl mx-auto my-2.5">
          <AddDestinationForm />
        </Card>
      </div>
    );
};

export default AddDestinationPage;