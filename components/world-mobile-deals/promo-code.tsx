import React, { useState } from 'react';

type PromoCode = {
  id: number;
  discount: string;
  discount_code?: string;
  verified: boolean;
  description: string;
  href: string;
};

const promoCodes: PromoCode[] = [
  {
    id: 1,
    discount: 'Code For Essential Plan',
    discount_code: 'NOTLIVEYET',
    verified: true,
    description:
      "Get high coverage and unlimited calls, texts, and data with the Essential plan—enjoy 10GB of priority data for just $59/month.",
    href: 'https://wmtx.cc/mobile',
  },
  {
    id: 2,
    discount: 'Code for Advanced Plan',
    discount_code: 'NOTLIVEYET',
    verified: true,
    description:
      "Experience the Advanced USA plan for power users: unlimited calls, texts, and 30GB high-speed data for only $85/month, with nationwide coverage and robust security.",
    href: 'https://wmtx.cc/mobile',
  },
  // More promo codes...
];

const PromoCodes: React.FC = () => {
  const [activePromo, setActivePromo] = useState<PromoCode | null>(null);
  const [copied, setCopied] = useState(false);

  const handleViewCode = (code: PromoCode) => {
    setActivePromo(code);
    setCopied(false); // Reset copied state on new alert
  };

  const handleCopyCode = (code: string | undefined) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGoToStore = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Alert Notification */}
      {activePromo && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-[#000000a1]"
          onClick={() => setActivePromo(null)}
        >
          <div
            className="relative rounded-lg bg-gray-200/30 backdrop-blur-md p-6 shadow-lg border border-gray-700 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <span className="block text-white text-lg">Promo Code:</span>
              <span className="block text-white font-bold text-2xl mt-2">
                {activePromo.discount_code || activePromo.discount}
              </span>
            </div>
            <div className="mt-4 flex flex-col space-y-4">
              <button
                onClick={() => handleCopyCode(activePromo.discount_code)}
                className="w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 bg-primary text-black hover:bg-white hover:text-black transition"
              >
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
              <button
                onClick={() => handleGoToStore(activePromo.href)}
                className="w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 bg-primary text-black hover:bg-white hover:text-black transition"
              >
                Go to Store
              </button>
            </div>
            <button
              onClick={() => setActivePromo(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div id="features" className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-black">
          World Mobile Phone Plans Promo Codes
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Exclusive Codes
        </p>
      </div>

      {/* Subtext */}
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-black">
        Unlock exclusive savings on World Mobile phone plans with our curated selection of active promo codes.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {promoCodes.map((code) => (
          <div key={code.id} className="group relative">
            <div className="rounded-lg bg-black p-6 flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-[1.03]">
              {/* Discount text */}
              <div className="text-4xl font-extrabold text-center text-white">
                {code.discount}
              </div>

              {/* Verified checkmark above CTA */}
              {code.verified && (
                <div className="flex items-center mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-sm text-white">Verified</span>
                </div>
              )}

              {/* CTA Button */}
              <button
                onClick={() => handleViewCode(code)}
                className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 bg-primary text-black hover:bg-white hover:text-black transition"
              >
                View Code
              </button>

              {/* Description below CTA */}
              <p className="mt-4 text-sm text-white" style={{ textAlign: 'justify' }}>
                {code.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoCodes;
