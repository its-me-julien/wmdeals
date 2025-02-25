"use client";

import Image from "next/image";
import "boxicons/css/boxicons.min.css";

const testimonials = [
    {
      name: "Elliot Grayson",
      image: "https://i.pravatar.cc/100?img=13",
      text: "Seamless nationwide coverage with zero interruptions. My connection stays strong no matter where I go.",
      plan: "Advanced USA Plan",
    },
    {
      name: "Mariana Keane",
      image: "https://i.pravatar.cc/100?img=15",
      text: "I finally found a provider that respects my privacy. With World Mobile, my data isn’t sold or exploited—just fast, reliable service.",
      plan: "Essential USA Plan",
    },
    {
      name: "Jasper Caldwell",
      image: "https://i.pravatar.cc/100?img=17",
      text: "Privacy and security are my top priorities. With end-to-end encryption and no tracking, I finally feel in control of my own data.",
      plan: "Advanced USA Plan",
    },
    {
      name: "Nadia Whitaker",
      image: "https://i.pravatar.cc/100?img=20",
      text: "World Mobile gives me what no other carrier offered: real privacy and a connection that never fails me.",
      plan: "Essential USA Plan",
    },
    {
      name: "Reid Lockhart",
      image: "https://i.pravatar.cc/100?img=24",
      text: "I travel frequently for work, and the Advanced Plan has never let me down. Always strong signal, EVERYWHERE I GO.",
      plan: "Advanced USA Plan",
    },
    {
      name: "Celeste Monroe",
      image: "https://i.pravatar.cc/100?img=29",
      text: "The Essential Plan is perfect for someone like me who values privacy. No tracking — finally a network that puts users first.",
      plan: "Essential USA Plan",
    },
  ];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-base font-semibold leading-7 text-darkGrey">What People Are Saying</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Reviews from Customers
          </p>
        </div>

        {/* Decorative Separator */}
        <div className="text-center mt-6 mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-darkGrey ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-darkGrey ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-darkGrey"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-darkGrey ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-darkGrey ml-1"></span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {/* User Avatar using Next.js Image */}
                <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200 relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
                <div className="ml-4">
                  <h6 className="text-sm font-semibold text-gray-900">{testimonial.name}</h6>
                  <p className="text-xs text-midGrey">{testimonial.plan}</p>
                </div>
              </div>
              {/* Testimonial Text */}
              <p className="text-sm leading-tight text-gray-700">
                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">&quot;</span>
                {testimonial.text}
                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">&quot;</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
