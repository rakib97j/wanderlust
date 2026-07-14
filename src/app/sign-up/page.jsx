import SingUpForm from '@/components/SingUpForm';
import React from 'react';

const signUpPage = () => {
    return (
      <div className="bg-[#8cceda60]">
        <div className="py-28 max-w-7xl mx-auto ">
          <div className="text-center">
            <h1 className="text-4xl font-serif">Create Account</h1>
            <p>Start your adventure with Wanderlust</p>
          </div>
          <SingUpForm />
        </div>
      </div>
    );
};

export default signUpPage;