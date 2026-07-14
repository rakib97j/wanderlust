"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    review:
      "The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    review:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
  },
];

export default function TravelersSay() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-5xl  font-medium text-black">
              What Travelers Say
            </h2>
            <p className="mt-3 text-gray-500">
              Real experiences from our happy travelers
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 transition hover:bg-black hover:text-white">
              <ArrowLeft size={20} />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 transition hover:bg-black hover:text-white">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1fr_180px] overflow-hidden border border-gray-200 bg-white"
            >
              <div className="flex flex-col justify-between p-8">
                <p className="text-xl leading-relaxed text-black">
                  {item.review} 
                </p>

                <div className="mt-10">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-6 bg-sky-500"></span>
                    <h4 className="text-[#15A1BF]">{item.name}</h4>
                  </div>

                  <p className="ml-8 text-sm text-gray-500">{item.location}</p>
                </div>
              </div>

              <div className="relative   m-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
