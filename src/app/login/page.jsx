import LogInForm from '@/components/LogInForm';
import React from 'react';

const logInPage = () => {
    return (
      <div className="bg-[#8cceda60]">
        <div className="py-28 max-w-7xl mx-auto ">
          <div className="text-center pb-4">
            <h1 className="text-4xl font-serif">Welcome Back</h1>
            <p>Resume your adventure with Wanderlust</p>
          </div>
          <LogInForm />
        </div>
      </div>
    );
};

export default logInPage;