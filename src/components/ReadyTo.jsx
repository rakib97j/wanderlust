import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ReadyTo = () => {
  return (
    <section
      className="relative w-full h-[440px] bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1440')`, 
      }}
    >
      {/* Dark Overlay/Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 bg-black/40"></div>

      {/* Content Area */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-white text-3xl md:text-5xl font-light tracking-wide mb-4">
          Ready To Start Your Journey?
        </h2>

        <p className="text-gray-200 text-sm md:text-base font-light tracking-wide mb-8 max-w-xl">
          Join thousands of travelers who have discovered the world with us
        </p>

        <Link href={"/destinations"}>
          <button className="  hover:opacity-70 justify-center bg-white text-black hover:bg-gray-100 font-medium px-8 py-3.5 flex items-center gap-3 tracking-wider text-xs transition-all duration-300">
            BOOK YOUR TRIP TODAY <MoveUpRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ReadyTo;
