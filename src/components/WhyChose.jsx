import { ShieldCheck } from '@gravity-ui/icons';
import { Headset, Map } from 'lucide-react';
import React from 'react';

const WhyChose = () => {
    return (
      <section className="bg-[#EDFCFF]">
        <div className="py-28  max-w-7xl mx-auto">
          {/* header */}
          <div className="text-center ">
            <h1 className="text-[#0C0B0B] text-5xl ">Why Choose Wanderlust</h1>
            <p className="text-[#6C696D] text-lg mt-2">
              {" "}
              Your trusted partner for exceptional travel experiences
            </p>
          </div>
          {/* Card Section */}
          <div className="grid grid-cols-3 mt-10 gap-6">
            <div className="p-10  bg-white shadow-sm">
              <ShieldCheck className="h-12 w-12 mb-6 text-[#15A1BF]" />
              <h1 className="text-3xl text-[#0C0B0B] mb-4">Safe & Secure</h1>
              <p className="text-[#6C696D] text-base font-normal">
                Your safety is our priority with comprehensive travel insurance
                and 24/7 support.
              </p>
            </div>
            <div className="p-10  bg-white shadow-sm">
              <Map className="h-12 w-12 mb-6 text-[#15A1BF]" />
              <h1 className="text-3xl text-[#0C0B0B] mb-4">Expert Guides</h1>
              <p className="text-[#6C696D] text-base font-normal">
                Local experts who bring destinations to life with authentic
                cultural insights.
              </p>
            </div>
            <div className="p-10  bg-white shadow-sm">
              <Headset className="h-12 w-12 mb-6 text-[#15A1BF]" />
              <h1 className="text-3xl text-[#0C0B0B] mb-4">24/7 Support</h1>
              <p className="text-[#6C696D] text-base font-normal">
                Round-the-clock customer service to assist you wherever your
                journey takes you.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default WhyChose;