import React, { useState } from 'react';

type Deal = {
  id: number;
  title: string;
  description: string;
  href: string;
};

const deals: Deal[] = [
  {
    id: 1,
    title: 'Newsletter Offer',
    description:
      'Be the first to hear about exclusive offers and the latest updates from World Mobile.',
    href: 'https://wmtx.cc/mobile',
  },
  {
    id: 2,
    title: "Founder's Perks",
    description:
      'Join the first 1,000 subscribers to claim Network Founder status with exclusive perks.',
    href: 'https://wmtx.cc/mobile',
  },
];

const Deals: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Header */}
      <div id="deals" className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-black">
          World Mobile Deals
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
          The Best Offers
        </p>
      </div>

      {/* Subtext with Accordion */}
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-black">
        Explore the best World Mobile offers that don’t require a code.
      </p>
      {showMore && (
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-6 text-black">
          We highlight sales, newsletter perks, special events, and more. Our team and community
          constantly track new deals, making it easy to save even when no promo codes are available, or
          to stack these offers with valid codes.
        </p>
      )}
      <div className="mx-auto mt-2 text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-black font-semibold"
        >
          {showMore ? "Less" : "More"}
        </button>
      </div>

      {/* Deals Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {deals.map((deal) => (
          <div key={deal.id} className="group relative">
            <div className="rounded-lg bg-black p-6 flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-[1.03]">
              {/* Deal Title */}
              <div className="text-2xl font-bold text-center text-gray-100">
                {deal.title}
              </div>

              {/* Deal Description */}
              <p className="mt-4 text-sm text-gray-100" style={{ textAlign: 'justify' }}>
                {deal.description}
              </p>

              {/* CTA Button */}
              <a
                href={deal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 border border-primary text-primary hover:bg-primary hover:text-black transition"
              >
                View Deal
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
